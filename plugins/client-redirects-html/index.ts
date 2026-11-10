import {access, readFile, readdir, rmdir, unlink, writeFile} from 'node:fs/promises';
import path from 'node:path';
import clientRedirects from '@docusaurus/plugin-client-redirects';
import type {LoadContext, Plugin} from '@docusaurus/types';

export {validateOptions} from '@docusaurus/plugin-client-redirects';

type RedirectEntry = {from: string | string[]; to: string};
type Options = {redirects?: RedirectEntry[]};

async function exists(file: string): Promise<boolean> {
  try {
    await access(file);
    return true;
  } catch {
    return false;
  }
}

async function collectHtmlFiles(directory: string): Promise<Set<string>> {
  const files = new Set<string>();
  const entries = await readdir(directory, {withFileTypes: true});
  for (const entry of entries) {
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      for (const htmlFile of await collectHtmlFiles(file)) {
        files.add(htmlFile);
      }
    } else if (entry.isFile() && path.extname(entry.name) === '.html') {
      files.add(path.resolve(file));
    }
  }
  return files;
}

async function addHtmlExtensionsToPageLinks(
  directory: string,
  outDir: string,
  baseUrl: string,
  htmlFiles: Set<string>,
): Promise<void> {
  const entries = await readdir(directory, {withFileTypes: true});
  const normalizedBaseUrl = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;

  for (const entry of entries) {
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      await addHtmlExtensionsToPageLinks(file, outDir, baseUrl, htmlFiles);
      continue;
    }
    if (!entry.isFile() || path.extname(entry.name) !== '.html') {
      continue;
    }
    const content = await readFile(file, 'utf8');
    const updated = content.replace(
      /\bhref=(?:"([^"]*)"|'([^']*)'|([^\s>]+))/g,
      (
        attribute,
        doubleQuoted: string | undefined,
        singleQuoted: string | undefined,
        unquoted: string | undefined,
      ) => {
        const href = doubleQuoted ?? singleQuoted ?? unquoted ?? '';
        if (!href.startsWith('/') || href.startsWith('//')) {
          return attribute;
        }

        const suffixIndex = href.search(/[?#]/);
        const pathname = suffixIndex === -1 ? href : href.slice(0, suffixIndex);
        const suffix = suffixIndex === -1 ? '' : href.slice(suffixIndex);
        if (pathname.endsWith('/') || pathname.endsWith('.html')) {
          return attribute;
        }

        const localePath = pathname.match(/^\/(?:en|es)\/(.+)$/);
        let route: string | undefined;
        if (
          localePath &&
          (normalizedBaseUrl === '/' || !pathname.startsWith(normalizedBaseUrl))
        ) {
          route = localePath[1];
        } else if (pathname.startsWith(normalizedBaseUrl)) {
          route = pathname.slice(normalizedBaseUrl.length);
        } else if (pathname.startsWith('/')) {
          route = pathname.slice(1);
        }
        if (!route) {
          return attribute;
        }
        const segments = route.split('/').map(decodeURIComponent);
        const target = path.resolve(outDir, ...segments) + '.html';
        const relativeTarget = path.relative(outDir, target);
        if (
          relativeTarget.startsWith('..') ||
          path.isAbsolute(relativeTarget) ||
          !htmlFiles.has(target)
        ) {
          return attribute;
        }
        const updatedHref = `${pathname}.html${suffix}`;
        if (doubleQuoted !== undefined) {
          return `href="${updatedHref}"`;
        }
        if (singleQuoted !== undefined) {
          return `href='${updatedHref}'`;
        }
        return `href=${updatedHref}`;
      },
    );
    if (updated !== content) {
      await writeFile(file, updated);
    }
  }
}

// O plugin oficial grava `<from>/index.html` com destino sem extensão; o S3
// sem CloudFront só responde a `<from>.html` e a destinos terminados em `.html`.
export default async function pluginClientRedirectsHtml(
  context: LoadContext,
  pluginOptions: unknown,
): Promise<Plugin<any> | null> {
  const options = pluginOptions as Options;
  const official = (await clientRedirects(context, options as never)) as Plugin<any> | null;
  if (!official) {
    return null;
  }
  return {
    ...official,
    name: 'client-redirects-html',
    async postBuild(props) {
      await official.postBuild?.(props);
      const baseUrl = props.baseUrl.replace(/\/$/, '');
      for (const {from, to} of options.redirects ?? []) {
        for (const origin of [from].flat()) {
          const directory = path.join(props.outDir, origin);
          const source = path.join(directory, 'index.html');
          const target = `${directory}.html`;
          if (await exists(target)) {
            throw new Error(
              `Redirect ${origin} collides with the existing page ${target}.`,
            );
          }
          let content = await readFile(source, 'utf8');
          if (to.startsWith('/') && !to.endsWith('/')) {
            const toUrl = encodeURI(`${baseUrl}${to}`);
            content = content.split(toUrl).join(`${toUrl}.html`);
          }
          await writeFile(target, content);
          await unlink(source);
          if ((await readdir(directory)).length === 0) {
            await rmdir(directory);
          }
        }
      }
      const htmlFiles = await collectHtmlFiles(props.outDir);
      await addHtmlExtensionsToPageLinks(
        props.outDir,
        props.outDir,
        props.baseUrl,
        htmlFiles,
      );
    },
  };
}
