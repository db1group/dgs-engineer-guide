import { defineConfig } from "vitepress";
import { en } from "./en";
import { es } from "./es";
import { pt } from "./pt";

export default defineConfig({
  title: "Engineering Guide",
  srcDir: "src",
  cleanUrls: false,
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/img/favicon.ico",
        sizes: "32x32",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        href: "/img/favicon-32.png",
        sizes: "32x32",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        href: "/img/favicon-192.png",
        sizes: "192x192",
      },
    ],
    [
      "link",
      {
        rel: "apple-touch-icon",
        href: "/img/apple-touch-icon.png",
      },
    ],
    ["meta", { name: "theme-color", content: "#0f1629" }],
  ],
  metaChunk: true,
  description: "Guia de engenharia da DB1 - Em busca da excelência técnica",
  ignoreDeadLinks: [/^http?:\/\/localhost/],
  locales: {
    root: {
      label: "Português",
      lang: "pt",
      ...pt,
    },

    en: { label: "English", ...en },
    es: { label: "Español", ...es },
  },
  themeConfig: {
    logo: {
      light: "/img/style/logo-itenex-positivo.svg",
      dark: "/img/style/logo-itenex-negativo.svg",
      alt: "DB1 Itênex",
    },
    search: {
      provider: "local",
    },
    socialLinks: [{ icon: "github", link: "https://github.com/db1group" }],
  },
});
