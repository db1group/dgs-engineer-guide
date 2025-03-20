// https://vitepress.dev/guide/custom-theme
import { h } from "vue";
import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import "./style.css";

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    });
  },
  enhanceApp({ app, router, siteData }) {
    // Função para adicionar o script do MathJax apenas no navegador
    const addMathJaxScript = () => {
      if (typeof document !== "undefined") {
        const mathjaxScript = document.createElement("script");
        mathjaxScript.src =
          "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js";
        mathjaxScript.async = true;
        mathjaxScript.id = "mathjax-script"; // Identificador único para o script
        document.head.appendChild(mathjaxScript);
      }
    };

    // Adiciona o script do MathJax apenas no navegador
    addMathJaxScript();
  },
} satisfies Theme;