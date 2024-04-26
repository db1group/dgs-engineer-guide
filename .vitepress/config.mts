import { defineConfig } from "vitepress";
import { en } from "./en";
import { es } from "./es";
import { pt } from "./pt";

export default defineConfig({
  title: "Engineering Guide",
  srcDir: "src",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/img/favicon.ico",
      },
    ],
  ],
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
    logo: "/img/style/logo.png",
    search: {
      provider: "local",
    },
    socialLinks: [{ icon: "github", link: "https://github.com/db1group" }],
  },
});
