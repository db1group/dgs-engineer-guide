"use strict";(self.webpackChunkdb1_tech_guide=self.webpackChunkdb1_tech_guide||[]).push([[2666],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return b}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),d=o,b=p["".concat(c,".").concat(d)]||p[d]||f[d]||i;return r?n.createElement(b,a(a({ref:t},u),{},{components:r})):n.createElement(b,a({ref:t},u))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6162:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],s={id:"library",title:"SCSS Library"},c=void 0,l={unversionedId:"basics/library",id:"basics/library",title:"SCSS Library",description:"docs-source",source:"@site/docs/basics/library.md",sourceDirName:"basics",slug:"/basics/library",permalink:"/docs/basics/library",draft:!1,tags:[],version:"current",frontMatter:{id:"library",title:"SCSS Library"},sidebar:"docs",previous:{title:"Webpack",permalink:"/docs/basics/webpack"},next:{title:"Global Settings",permalink:"/docs/basics/global-settings"}},u={},p=[{value:"How to use it",id:"how-to-use-it",level:2}],f={toc:p};function d(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/infinum/eightshift-frontend-libs"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/source-eightshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a",alt:"docs-source"}))),(0,i.kt)("p",null,"Eightshift Frontend Libs contains a collection of useful SCSS mixins, functions and helpers you can use in projects."),(0,i.kt)("p",null,"For years, we have collected a list of them. At one point, we felt it was ineffective to copy-paste code across multiple projects, so we created Eightshift Frontend Libs. This allows you to use whatever we offer without all that unnecessary clutter."),(0,i.kt)("p",null,"Check out our documentation and import what you need from Eightshift Frontend Libs."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Visit ",(0,i.kt)("a",{parentName:"strong",href:"/"},"SassDocs")," for more details.")),(0,i.kt)("h2",{id:"how-to-use-it"},"How to use it"),(0,i.kt)("p",null,"SCSS mixins, functions, and helpers are located in Eightshift Frontend Libs. Therefore, if you are using our Webpack build, you are all set. You can use it by importing it into your project like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scss"},"@import '@eightshift/frontend-libs/styles/index.scss';\n")),(0,i.kt)("p",null,"However, if you used our ",(0,i.kt)("inlineCode",{parentName:"p"},"wp boilerplate init theme")," command, you are all set. Eightshift Frontend Libs are injected in the ",(0,i.kt)("inlineCode",{parentName:"p"},"_shared.scss")," file in your project."))}d.isMDXComponent=!0}}]);