"use strict";(self.webpackChunkdb1_tech_guide=self.webpackChunkdb1_tech_guide||[]).push([[7305],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),u=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return i.createElement(l.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=o,d=p["".concat(l,".").concat(m)]||p[m]||h[m]||r;return n?i.createElement(d,a(a({ref:t},c),{},{components:n})):i.createElement(d,a({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,a[1]=s;for(var u=2;u<r;u++)a[u]=n[u];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4756:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var i=n(7462),o=n(3366),r=(n(7294),n(3905)),a=["components"],s={id:"welcome",title:"Welcome"},l=void 0,u={unversionedId:"welcome",id:"welcome",title:"Welcome",description:"Eightshift Development Kit",source:"@site/docs/welcome.md",sourceDirName:".",slug:"/welcome",permalink:"/docs/welcome",draft:!1,tags:[],version:"current",frontMatter:{id:"welcome",title:"Welcome"},sidebar:"docs",next:{title:"Eightshift Libs",permalink:"/docs/eightshift-libs"}},c={},p=[{value:"Eightshift Development Kit",id:"eightshift-development-kit",level:2},{value:"Features",id:"features",level:3},{value:"Parts of the Development Kit",id:"parts-of-the-development-kit",level:3},{value:"Eightshift Libs - docs | github",id:"eightshift-libs---docs--github",level:4},{value:"Eightshift Frontend Libs - docs | github",id:"eightshift-frontend-libs---docs--github",level:4},{value:"Boilerplate",id:"boilerplate",level:4}],h={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,r.kt)("wrapper",(0,i.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"eightshift-development-kit"},"Eightshift Development Kit"),(0,r.kt)("p",null,"Eightshift Development Kit is a modern, developer-friendly solution that makes building large, feature-rich WordPress projects painless.\nIt contains all the tools you need to start building a modern WordPress theme or plugin, using battle-tested front-end and back-end development tools and practices."),(0,r.kt)("h3",{id:"features"},"Features"),(0,r.kt)("p",null,"The Eightshift Development Kit provides you with a lot of useful features, so let's take a quick look at some of the core ones:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Custom Block Editor blocks")," - Using automatic block registration and attribute handling features, building dynamic Gutenberg blocks with the Eightshift Development Kit is a joy. We also provide an extensive library of blocks and components that you can use and customize in your projects. ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Dynamic blocks")," - The Eightshift Development Kit is focused on supporting dynamic blocks, a type of WordPress blocks that are rendered from attributes instead of being serialized as HTML. Dynamic blocks allow you more flexibility when developing and avoid issues with Gutenberg's validation, ensuring you can ship new features and update existing blocks in record time."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Components")," - Extract commonly used parts into ",(0,r.kt)("em",{parentName:"li"},"components"),". Manage attributes on the component level. Use powerful composition features to build blocks from multiple components, or even multiple instances of them without worrying about attribute registration. It's a game-changer."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"The Manifest")," - Every block and component has a ",(0,r.kt)("inlineCode",{parentName:"li"},"manifest.json")," file, which is a single source of truth for metadata about your block."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Sustainable coding practices")," - All our code follows battle-tested programming practices.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"OOP")," - Object-oriented programming is at the core of the Development Kit. Extend our classes or replace them entirely. Need to build a new WP-CLI command? ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/infinum/eightshift-libs/tree/develop/src/Cli"},"There's an abstract class for that.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"DI")," - Eightshift Development Kit ships with a dependency injection container set up out of the box."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Code style")," - Linters for PHP, JavaScript and SCSS ship out of the box, helping you write better code. Also, all of our code ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/infinum/eightshift-coding-standards/"},"follows Eightshift Coding Standards")," - consistency assured."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Unit tests")," - We use Pest and Jest to run unit tests on our code, catching bugs early."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Great documentation")," - Apart from this website, everything in the code is commented and covered with Docblocks."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"WP-CLI")," - Eightshift Development Kit provides amazing WP-CLI tooling. Import blocks and components from our collection. Build custom commands with ease. Include Development Kit features at will. "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Frontend build processes")," - Eightshift Development Kit comes with Webpack preconfigured. Tweak it to your needs or keep our defaults - it's up to you. Vendor prefixes? Polyfills? SCSS compilation? Asset minification? All taken care of!"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"First-class CSS variables")," - Forget about conditional classnames: build out CSS variables from attribute values and scope them to a particular block with almost no code."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Cache busting")," - Each time you build assets, we generate a new URL for each asset file. This means you'll never see the old cached version while developing or after pushing your code to production.")),(0,r.kt)("h3",{id:"parts-of-the-development-kit"},"Parts of the Development Kit"),(0,r.kt)("p",null,"Eightshift Development Kit consists of a few separate projects. It's useful to know what they are, especially if you're contributing to the Development Kit."),(0,r.kt)("h4",{id:"eightshift-libs---docs--github"},"Eightshift Libs - ",(0,r.kt)("a",{parentName:"h4",href:"eightshift-libs"},"docs")," | ",(0,r.kt)("a",{parentName:"h4",href:"https://github.com/infinum/eightshift-libs"},"github")),(0,r.kt)("p",null,"Eightshift Libs handles backend functionality and provides backend support for your projects. This includes abstract classes and interfaces for our core features, dependency injection, asset enqueuing, filter & actions and more."),(0,r.kt)("h4",{id:"eightshift-frontend-libs---docs--github"},"Eightshift Frontend Libs - ",(0,r.kt)("a",{parentName:"h4",href:"eightshift-frontend-libs"},"docs")," | ",(0,r.kt)("a",{parentName:"h4",href:"https://github.com/infinum/eightshift-frontend-libs"},"github")),(0,r.kt)("p",null,"Eightshift Frontend Libs houses our frontend code, including various helpers, JavaScript functionality, SCSS styles, and block and component defaults."),(0,r.kt)("h4",{id:"boilerplate"},"Boilerplate"),(0,r.kt)("p",null,"We provide ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/infinum/eightshift-boilerplate"},"boilerplates for themes")," and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/infinum/eightshift-boilerplate-plugin/"},"plugins"),", so you can start building your project right away - without manually setting up the libraries above."),(0,r.kt)("p",null,"The easiest way to set up the Development Kit is to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"npx create-wp-project")," command, which we'll go into further detail about in the following chapters."))}m.isMDXComponent=!0}}]);