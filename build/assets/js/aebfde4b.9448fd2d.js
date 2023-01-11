"use strict";(self.webpackChunkdb1_tech_guide=self.webpackChunkdb1_tech_guide||[]).push([[8472],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},k=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),k=a,d=u["".concat(l,".").concat(k)]||u[k]||m[k]||r;return n?o.createElement(d,i(i({ref:t},p),{},{components:n})):o.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=k;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}k.displayName="MDXCreateElement"},9451:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return k},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var o=n(7462),a=n(3366),r=(n(7294),n(3905)),i=["components"],s={id:"block-manifest",title:"Block Manifest"},l=void 0,c={unversionedId:"legacy/v7/basics/block-manifest",id:"legacy/v7/basics/block-manifest",title:"Block Manifest",description:"docs-source",source:"@site/docs/legacy/v7/basics/block-manifest.md",sourceDirName:"legacy/v7/basics",slug:"/legacy/v7/basics/block-manifest",permalink:"/docs/legacy/v7/basics/block-manifest",draft:!1,tags:[],version:"current",frontMatter:{id:"block-manifest",title:"Block Manifest"},sidebar:"docs",previous:{title:"Component Structure",permalink:"/docs/legacy/v7/basics/blocks-component-structure"},next:{title:"Component Manifest",permalink:"/docs/legacy/v7/basics/blocks-component-manifest"}},p={},u=[{value:"Example",id:"example",level:3},{value:"namespace",id:"namespace",level:3},{value:"icon.background &amp; icon.foreground",id:"iconbackground--iconforeground",level:3},{value:"example",id:"example-1",level:3},{value:"attributes",id:"attributes",level:3},{value:"hasInnerBlocks",id:"hasinnerblocks",level:3},{value:"components",id:"components",level:3},{value:"responsiveAttributes",id:"responsiveattributes",level:3},{value:"variables",id:"variables",level:3},{value:"options",id:"options",level:3},{value:"The power of manifest.json",id:"the-power-of-manifestjson",level:2}],m={toc:u};function k(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/infinum/eightshift-frontend-libs/tree/6.0.0/blocks/init/src/blocks/"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/source-eightshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a",alt:"docs-source"}))),(0,r.kt)("p",null,"This file contains all the configuration required for a block to work. It's used in WordPress ",(0,r.kt)("a",{parentName:"p",href:"https://developer.wordpress.org/block-editor/developers/block-api/block-registration/"},(0,r.kt)("inlineCode",{parentName:"a"},"registerBlockType"))," method to register a block. Using ",(0,r.kt)("inlineCode",{parentName:"p"},"manifest.json"),", we can provide a configuration in JavaScript and PHP part of the block in one file."),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "namespace": "custom-namespace",\n  "blockName": "heading",\n  "title": "Heading",\n  "description": "Heading block with custom settings.",\n  "category": "common",\n  "icon": {\n    "background": "#900",\n    "foreground": "#500",\n    "src": "heading"\n  },\n  "keywords": [\n    "Header",\n    "Title"\n  ],\n  "example": {\n    "attributes": {\n      "content": "New content",\n      "level": 2\n    }\n  },\n  "attributes": {\n    "content": {\n      "type": "string"\n    },\n    "level": {\n      "type": "number",\n      "default": 2\n    }\n  },\n  "hasInnerBlocks": false,\n  "components": {},\n  "responsiveAttributes": {},\n  "variables": {},\n  "options": {}\n}\n')),(0,r.kt)("p",null,"Most of the keys are the same as the ",(0,r.kt)("inlineCode",{parentName:"p"},"registerBlockType")," method. If you can't find the description here, please check the ",(0,r.kt)("a",{parentName:"p",href:"https://developer.wordpress.org/block-editor/developers/block-api/block-registration/"},"official documentation"),", but we also have some custom features here:"),(0,r.kt)("h3",{id:"namespace"},"namespace"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"native feature")),(0,r.kt)("p",null,"The block's namespace is set globally in the global manifest for all your custom blocks, but you can override them on each block if you need to."),(0,r.kt)("h3",{id:"iconbackground--iconforeground"},"icon.background & icon.foreground"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"native feature")),(0,r.kt)("p",null,"The icon background and foreground is set globally in the global manifest for all your custom blocks, but you can override them on each block if you need to."),(0,r.kt)("h3",{id:"example-1"},"example"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"native feature")),(0,r.kt)("p",null,"This key provides you the ability to give an example mockup of your attributes. When you try to add a block to the editor using the button in the main toolbar, you will have a preview image on the right. The image generated here will actually be a rendered block with the attributes from the example key. We also use it in the storybook to mock attributes. More on this in the ",(0,r.kt)("a",{parentName:"p",href:"blocks-storybook"},"storybook chapter"),"."),(0,r.kt)("h3",{id:"attributes"},"attributes"),(0,r.kt)("p",null,"Attributes key is an object of attributes where you define and set up default values for a block. These attributes are then passed in the editor as props, and the PHP view part in the ",(0,r.kt)("inlineCode",{parentName:"p"},"$attributes")," variable.\nWe are using the same structure as described in the ",(0,r.kt)("a",{parentName:"p",href:"https://developer.wordpress.org/block-editor/developers/block-api/block-attributes/"},"block editor documentation"),". For more details please check ",(0,r.kt)("a",{parentName:"p",href:"blocks-attributes"},"this chapter"),"."),(0,r.kt)("h3",{id:"hasinnerblocks"},"hasInnerBlocks"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"default: false")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"custom feature")),(0,r.kt)("p",null,"If the ",(0,r.kt)("inlineCode",{parentName:"p"},"hasInnerBlocks")," key is set to true, the block's ",(0,r.kt)("inlineCode",{parentName:"p"},"save")," method for inner blocks will be used. This method is used when the block has ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/WordPress/gutenberg/tree/master/packages/block-editor/src/components/inner-blocks"},(0,r.kt)("inlineCode",{parentName:"a"},"InnerBlocks")),". In the PHP view file, you will have the ",(0,r.kt)("inlineCode",{parentName:"p"},"$innerBlockContent")," variable available. Here is an example of what happens in the back:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"  save = () => createElement(InnerBlocks.Content);\n")),(0,r.kt)("h3",{id:"components"},"components"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"custom feature")),(0,r.kt)("p",null,"This key gives you the ability to use component attributes in your block without mapping all the component's attributes every time. Please check ",(0,r.kt)("a",{parentName:"p",href:"blocks-component-in-block"},"this chapter")," for more details."),(0,r.kt)("h3",{id:"responsiveattributes"},"responsiveAttributes"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"custom feature")),(0,r.kt)("p",null,"This key is used to combine multiple attributes with the similar name for the responsive breakpoints. Please check ",(0,r.kt)("a",{parentName:"p",href:"blocks-styles"},"this chapter")," for more details."),(0,r.kt)("h3",{id:"variables"},"variables"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"custom feature")),(0,r.kt)("p",null,"This key is used to provide output for CSS variables. Please check ",(0,r.kt)("a",{parentName:"p",href:"blocks-styles"},"this chapter")," for more details."),(0,r.kt)("h3",{id:"options"},"options"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"custom feature")),(0,r.kt)("p",null,"This key is used to provide options used in the Block Editor options for components like SelectControl or RangeControl. With this key, you can pass options and change them depending on the component used. Please check ",(0,r.kt)("a",{parentName:"p",href:"blocks-component-in-block"},"this chapter")," for more details."),(0,r.kt)("h2",{id:"the-power-of-manifestjson"},"The power of manifest.json"),(0,r.kt)("p",null,"As described before we use ",(0,r.kt)("inlineCode",{parentName:"p"},"manifest.json")," to share stuff across PHP / JS / SCSS so you can easily see its power."),(0,r.kt)("p",null,"For example, you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"manifest.json")," to store SVG files that you will use on the front-end (PHP) and in the editor / backend (JS) files. Or you can store block options so it is easier to find and add items."),(0,r.kt)("p",null,"Let's see how you would share SVG icon across multiple languages:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"manifest.json")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: because this is a ",(0,r.kt)("inlineCode",{parentName:"p"},"JSON")," file you must convert all double quotes to single because otherwise, you will get a fatal error.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},"{\n  ...\n  \"icon\": \"<svg xmlns='http://www.w3.org/2000/svg' width='7' height='12' viewBox='0 0 320 512'><path fill='currentColor' d='M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z'></path></svg>\",\n  ...\n}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"block-name.php")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"$manifest = Components::getManifest(__DIR__);\n\necho wp_kses_post($manifest['icon']);\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"block-name-editor.js")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import manifest from 'manifest.json';\n\n<span dangerouslySetInnerHTML={{ __html: manifest.icon }}></span>\n")),(0,r.kt)("p",null,"As you can see, you can share anything this way. Here are some additional examples:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/infinum/eightshift-frontend-libs/tree/6.0.0/blocks/init/src/Blocks/components/social-links/manifest.json"},"Social Links")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/infinum/eightshift-frontend-libs/tree/6.0.0/blocks/init/src/Blocks/components/button/manifest.json"},"Button"))))}k.isMDXComponent=!0}}]);