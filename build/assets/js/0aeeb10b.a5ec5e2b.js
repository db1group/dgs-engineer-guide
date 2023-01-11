"use strict";(self.webpackChunkdb1_tech_guide=self.webpackChunkdb1_tech_guide||[]).push([[9321],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),h=i,d=p["".concat(s,".").concat(h)]||p[h]||f[h]||o;return n?r.createElement(d,a(a({ref:t},u),{},{components:n})):r.createElement(d,a({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},2152:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],l={id:"eightshift-frontend-libs",title:"Eightshift Frontend Libs"},s=void 0,c={unversionedId:"eightshift-frontend-libs",id:"eightshift-frontend-libs",title:"Eightshift Frontend Libs",description:"docs-source",source:"@site/docs/eightshift-frontend-libs.md",sourceDirName:".",slug:"/eightshift-frontend-libs",permalink:"/docs/eightshift-frontend-libs",draft:!1,tags:[],version:"current",frontMatter:{id:"eightshift-frontend-libs",title:"Eightshift Frontend Libs"},sidebar:"docs",previous:{title:"Eightshift Libs",permalink:"/docs/eightshift-libs"},next:{title:"Requirements",permalink:"/docs/requirements"}},u={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"The library contains:",id:"the-library-contains",level:3},{value:"How to integrate into an existing project",id:"how-to-integrate-into-an-existing-project",level:2},{value:"Who do I talk to?",id:"who-do-i-talk-to",level:2}],f={toc:p};function h(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/infinum/eightshift-frontend-libs/tree/develop/blocks/init/src/blocks/"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/source-eightshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a",alt:"docs-source"}))),(0,o.kt)("p",null,"This library is meant to bring modern front-end development tools to the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/infinum/eightshift-boilerplate"},"Eightshift Boilerplate")," or ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/infinum/eightshift-boilerplate-plugin"},"Eightshift Boilerplate Plugin"),", but you can use it on any WordPress project."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"The knowledge of the core editor components and React.js is recommended, since this library is focused on working with the new block editor and contains custom blocks. If you want to create your custom blocks, that knowledge will come in handy."),(0,o.kt)("p",null,"The library can be used for pure Webpack/JS/SCSS functionality, but if you want to use our blocks, ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/infinum/eightshift-libs/"},"Eightshift Libs")," must be used in tandem because they handle block registration, attribute handling and more."),(0,o.kt)("h3",{id:"the-library-contains"},"The library contains:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"All JS packages required for the Webpack build"),(0,o.kt)("li",{parentName:"ul"},"ESLint ruleset"),(0,o.kt)("li",{parentName:"ul"},"Stylelint ruleset"),(0,o.kt)("li",{parentName:"ul"},"Babel ruleset"),(0,o.kt)("li",{parentName:"ul"},"A collection of useful front-end utility modules"),(0,o.kt)("li",{parentName:"ul"},"The complete storybook of over 30+ useful blocks and components"),(0,o.kt)("li",{parentName:"ul"},"Block editor block examples"),(0,o.kt)("li",{parentName:"ul"},"A growing collection of blocks and components"),(0,o.kt)("li",{parentName:"ul"},"The complete Webpack build for ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/infinum/eightshift-boilerplate"},"Eightshift Boilerplate")),(0,o.kt)("li",{parentName:"ul"},"Helpers for creating dynamic block editor blocks"),(0,o.kt)("li",{parentName:"ul"},"...")),(0,o.kt)("h2",{id:"how-to-integrate-into-an-existing-project"},"How to integrate into an existing project"),(0,o.kt)("p",null,"The process of integrating the libs into an existing project is not easy, because it really depends on how your theme or plugin is built. Our libs expect the usage of namespacing, and adding namespace in a non namespaced codebase can potentially cause breakage."),(0,o.kt)("p",null,"You can try to manually add the backend libs using composer and frontend using npm, but the process of connecting everything up can be a complex one. So we recommend starting from a clean slate."),(0,o.kt)("h2",{id:"who-do-i-talk-to"},"Who do I talk to?"),(0,o.kt)("p",null,"If you have any questions or problems, please ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/infinum/eightshift-frontend-libs/issues"},"open an issue")," on GitHub, and we will do our best to give you a timely answer."))}h.isMDXComponent=!0}}]);