"use strict";(self.webpackChunkdb1_tech_guide=self.webpackChunkdb1_tech_guide||[]).push([[2367],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=o.createContext({}),c=function(e){var t=o.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return o.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),f=n,m=p["".concat(i,".").concat(f)]||p[f]||d[f]||a;return r?o.createElement(m,l(l({ref:t},u),{},{components:r})):o.createElement(m,l({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=f;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:n,l[1]=s;for(var c=2;c<a;c++)l[c]=r[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}f.displayName="MDXCreateElement"},1958:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var o=r(7462),n=r(3366),a=(r(7294),r(3905)),l=["components"],s={id:"blocks-structure",title:"Structure",sidebar_label:"Structure"},i=void 0,c={unversionedId:"legacy/v5/basics/blocks-structure",id:"legacy/v5/basics/blocks-structure",title:"Structure",description:"docs-source",source:"@site/docs/legacy/v5/basics/blocks-structure.md",sourceDirName:"legacy/v5/basics",slug:"/legacy/v5/basics/blocks-structure",permalink:"/docs/legacy/v5/basics/blocks-structure",draft:!1,tags:[],version:"current",frontMatter:{id:"blocks-structure",title:"Structure",sidebar_label:"Structure"},sidebar:"docs",previous:{title:"Registration",permalink:"/docs/legacy/v5/basics/blocks-registration"},next:{title:"Global Manifest",permalink:"/docs/legacy/v5/basics/blocks-global-manifest"}},u={},p=[{value:"Blocks folder",id:"blocks-folder",level:3},{value:"Assets",id:"assets",level:3},{value:"Components",id:"components",level:3},{value:"Custom",id:"custom",level:3},{value:"Variations",id:"variations",level:3},{value:"Wrapper",id:"wrapper",level:3},{value:"Manifest.json",id:"manifestjson",level:3},{value:"Blocks.php",id:"blocksphp",level:3}],d={toc:p};function f(e){var t=e.components,r=(0,n.Z)(e,l);return(0,a.kt)("wrapper",(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/infinum/eightshift-frontend-libs/tree/4.0.0/blocks/init/src/blocks/"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/source-eigthshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a",alt:"docs-source"}))),(0,a.kt)("p",null,"For the library to work and register blocks dynamically, a specific folder structure and naming must be followed."),(0,a.kt)("p",null,"Your folder structure should be like this:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"src",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Blocks",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"assets"),(0,a.kt)("li",{parentName:"ul"},"components"),(0,a.kt)("li",{parentName:"ul"},"custom"),(0,a.kt)("li",{parentName:"ul"},"variations"),(0,a.kt)("li",{parentName:"ul"},"wrapper"),(0,a.kt)("li",{parentName:"ul"},"Blocks.php"),(0,a.kt)("li",{parentName:"ul"},"manifest.json")))))),(0,a.kt)("h3",{id:"blocks-folder"},"Blocks folder"),(0,a.kt)("p",null,"This folder contains all the blocks defined in your project. Every block is located in the ",(0,a.kt)("inlineCode",{parentName:"p"},"custom")," folder, and every component is located in the ",(0,a.kt)("inlineCode",{parentName:"p"},"components")," folder. Blocks can be created from multiple block editor components or your project components."),(0,a.kt)("h3",{id:"assets"},"Assets"),(0,a.kt)("p",null,"This folder contains all the additional files for the blocks you only need to use on the front end. Everything that is not a block or a component goes here, such as defining global style, global JavaScript helpers, project images, fonts, etc. Also, we register all blocks, styles, and scripts in the assets folder so that nothing works without this folder."),(0,a.kt)("h3",{id:"components"},"Components"),(0,a.kt)("p",null,"This folder contains all the components that are shared across blocks and project template files. Components are not registered as blocks because they are small chunks of code you can reuse everywhere. For instance, you can create a menu component to be used in the footer but also reused in a separate menu block. Please refer to the ",(0,a.kt)("a",{parentName:"p",href:"blocks-component-structure"},"component structure")," chapter for more details."),(0,a.kt)("h3",{id:"custom"},"Custom"),(0,a.kt)("p",null,"This folder contains all the custom blocks defined and used in your project. Please refer to the ",(0,a.kt)("a",{parentName:"p",href:"block-structure"},"block structure")," chapter for more details."),(0,a.kt)("h3",{id:"variations"},"Variations"),(0,a.kt)("p",null,"This folder contains all the variations blocks defined and used in your project. Please refer to the ",(0,a.kt)("a",{parentName:"p",href:"blocks-variations"},"variations")," chapter for more details."),(0,a.kt)("h3",{id:"wrapper"},"Wrapper"),(0,a.kt)("p",null,"This folder contains a wrapper component that wraps all blocks with shared variables and gives blocks the ability to behave as a section. Please refer to the ",(0,a.kt)("a",{parentName:"p",href:"blocks-wrapper"},"wrapper")," chapter for more details."),(0,a.kt)("h3",{id:"manifestjson"},"Manifest.json"),(0,a.kt)("p",null,"This file contains global settings for the project. It must contain ",(0,a.kt)("inlineCode",{parentName:"p"},"namespace")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"background")," keys. Everything else is optional. Here you can store data you intend to share across toolbars, components, and blocks. Please refer to the ",(0,a.kt)("a",{parentName:"p",href:"block-manifest"},"block manifest")," chapter for more details."),(0,a.kt)("h3",{id:"blocksphp"},"Blocks.php"),(0,a.kt)("p",null,"This is the main service class responsible for registering all the PHP parts of the blocks like:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"dynamic blocks view;"),(0,a.kt)("li",{parentName:"ul"},"custom category for your blocks;"),(0,a.kt)("li",{parentName:"ul"},"default color pallet;"),(0,a.kt)("li",{parentName:"ul"},"what blocks you are going to use; and"),(0,a.kt)("li",{parentName:"ul"},"all the custom functionality that you will write for the project.")))}f.isMDXComponent=!0}}]);