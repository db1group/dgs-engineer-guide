"use strict";(self.webpackChunkdb1_tech_guide=self.webpackChunkdb1_tech_guide||[]).push([[2709],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return h}});var n=r(7294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=c(r),d=s,h=p["".concat(l,".").concat(d)]||p[d]||f[d]||o;return r?n.createElement(h,i(i({ref:t},u),{},{components:r})):n.createElement(h,i({ref:t},u))}));function h(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=r.length,i=new Array(o);i[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[p]="string"==typeof e?e:s,i[1]=a;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9111:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return p}});var n=r(7462),s=r(3366),o=(r(7294),r(3905)),i=["components"],a={id:"helpers-scss",title:"Scss"},l=void 0,c={unversionedId:"legacy/v6/basics/helpers-scss",id:"legacy/v6/basics/helpers-scss",title:"Scss",description:"docs-source",source:"@site/docs/legacy/v6/basics/helpers-scss.md",sourceDirName:"legacy/v6/basics",slug:"/legacy/v6/basics/helpers-scss",permalink:"/docs/legacy/v6/basics/helpers-scss",draft:!1,tags:[],version:"current",frontMatter:{id:"helpers-scss",title:"Scss"},sidebar:"docs",previous:{title:"JavaScript",permalink:"/docs/legacy/v6/basics/helpers-javascript"},next:{title:"PHP",permalink:"/docs/legacy/v6/basics/helpers-php"}},u={},p=[{value:"Default usage",id:"default-usage",level:2},{value:"Usage outside of Eightshift Boilerplate",id:"usage-outside-of-eightshift-boilerplate",level:2}],f={toc:p};function d(e){var t=e.components,r=(0,s.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/infinum/eightshift-frontend-libs/tree/5.0.0/blocks/init/src/blocks/"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/source-eightshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a",alt:"docs-source"}))),(0,o.kt)("p",null,"For years, we have collected a list of useful SASS mixins, placeholders, and functions you can use in a project. You don't need to have all of this in your project. Check out our documentation and see what we have in store for you."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Visit ",(0,o.kt)("a",{parentName:"strong",href:"/"},"SassDocs")," for more details.")),(0,o.kt)("h2",{id:"default-usage"},"Default usage"),(0,o.kt)("p",null,"Eightshift Frontend Libs styles library is already implemented in your WordPress project, so you don't need to worry about implementation."),(0,o.kt)("p",null,"All our sass mixing, functions and helpers are located in ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules/@eighshift/frontent-libs/styles/scss/eightshift-frontend-libs.scss")," file."),(0,o.kt)("p",null,"We imported that library into this file: ",(0,o.kt)("inlineCode",{parentName:"p"},"/assets/styles/parts/_shared.scss"),"."),(0,o.kt)("h2",{id:"usage-outside-of-eightshift-boilerplate"},"Usage outside of Eightshift Boilerplate"),(0,o.kt)("p",null,"If you want to use it outside of the Eightshift Boilerplate, you can. It is only a matter of installing the package and importing it into your project's style file."),(0,o.kt)("p",null,"In your terminal, install Eightshift Frontend Libs package:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @eightshift/frontend-libs\n")),(0,o.kt)("p",null,"and add this import in your project:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scss"},"@import '@eightshift/frontend-libs/styles/index.scss';\n")))}d.isMDXComponent=!0}}]);