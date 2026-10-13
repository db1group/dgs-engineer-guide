import fs from 'fs/promises';
import path from 'path';
import type {LoadContext, Plugin, PluginModule} from '@docusaurus/types';
import pluginClientRedirects, {
  validateOptions,
  type PluginOptions,
} from '@docusaurus/plugin-client-redirects';

// O plugin oficial grava cada redirecionamento em `<from>/index.html`, com destino `<to>` sem
// extensão. O S3 website hosting só serve `<caminho>.html`, então o arquivo é movido para
// `<from>.html` e o destino é reescrito para `<to>.html`.

// O template oficial grava o destino no meta refresh, no link canonical e em
// `window.location.href`.
const EXPECTED_DESTINATIONS = 3;

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

async function removeEmptyDirs(dir: string, stopAt: string): Promise<void> {
  let current = dir;
  while (path.relative(stopAt, current) && !path.relative(stopAt, current).startsWith('..')) {
    if ((await fs.readdir(current)).length > 0) {
      return;
    }
    await fs.rmdir(current);
    current = path.dirname(current);
  }
}

async function moveRedirect(
  outDir: string,
  baseUrl: string,
  from: string,
  to: string,
): Promise<void> {
  const source = path.join(outDir, from, 'index.html');
  const target = path.join(outDir, `${from}.html`);

  let content: string;
  try {
    content = await fs.readFile(source, 'utf8');
  } catch {
    throw new Error(
      `client-redirects-html: arquivo de redirecionamento não gerado para "${from}" (esperado ${source}).`,
    );
  }

  // Mesmo valor que o plugin oficial grava: encodeURI(normalizeUrl([baseUrl, to])).
  const toUrl = encodeURI(`${baseUrl}${to.replace(/^\/+/, '')}`);
  const pattern = new RegExp(`${escapeRegExp(toUrl)}(?=["'])`, 'g');
  const found = content.match(pattern)?.length ?? 0;
  if (found !== EXPECTED_DESTINATIONS) {
    throw new Error(
      `client-redirects-html: esperadas ${EXPECTED_DESTINATIONS} ocorrências de "${toUrl}" em ${source}, encontradas ${found}.`,
    );
  }

  await fs.writeFile(target, content.replace(pattern, `${toUrl}.html`), {flag: 'wx'});
  await fs.rm(source);
  await removeEmptyDirs(path.dirname(source), outDir);
}

function pluginClientRedirectsHtml(
  context: LoadContext,
  options: PluginOptions,
): Plugin<void> | null {
  const plugin = pluginClientRedirects(context, options);
  if (!plugin) {
    return null;
  }
  const officialPostBuild = plugin.postBuild;

  return {
    ...plugin,
    async postBuild(props) {
      await officialPostBuild?.call(plugin, props);
      for (const {from, to} of options.redirects) {
        for (const source of Array.isArray(from) ? from : [from]) {
          await moveRedirect(props.outDir, props.baseUrl, source, to);
        }
      }
    },
  };
}

// Plugins declarados como função em `docusaurus.config.ts` têm as opções validadas e
// normalizadas pela propriedade `validateOptions` da própria função.
pluginClientRedirectsHtml.validateOptions = validateOptions;

// `PluginModule` tipa `validateOptions` como função genérica em `<T, U>`, que nenhum validador
// concreto satisfaz; a conversão fica restrita à fronteira do módulo.
export default pluginClientRedirectsHtml as PluginModule;
