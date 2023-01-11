"use strict";(self.webpackChunkdb1_tech_guide=self.webpackChunkdb1_tech_guide||[]).push([[9346],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=i,m=u["".concat(s,".").concat(d)]||u[d]||f[d]||a;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4430:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],l={id:"manifest",title:"Manifest"},s=void 0,c={unversionedId:"legacy/v4/guides/manifest",id:"legacy/v4/guides/manifest",title:"Manifest",description:"docs-source",source:"@site/docs/legacy/v4/guides/manifest.md",sourceDirName:"legacy/v4/guides",slug:"/legacy/v4/guides/manifest",permalink:"/docs/legacy/v4/guides/manifest",draft:!1,tags:[],version:"current",frontMatter:{id:"manifest",title:"Manifest"},sidebar:"docs",previous:{title:"Project Config",permalink:"/docs/legacy/v4/guides/config"},next:{title:"Enqueue",permalink:"/docs/legacy/v4/guides/enqueue"}},p={},u=[{value:"How to use it?",id:"how-to-use-it",level:2},{value:"Example",id:"example",level:2}],f={toc:u};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/infinum/eightshift-libs/tree/v2.0.0/src/manifest"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/source-eigthshift--libs-blue?style=for-the-badge&logo=php&labelColor=2a2a2a",alt:"docs-source"}))),(0,a.kt)("p",null,"Manifest class is located in ",(0,a.kt)("inlineCode",{parentName:"p"},"Eightshift Libs"),". To extend it, use ",(0,a.kt)("inlineCode",{parentName:"p"},"Eightshift_Libs\\Manifest\\Manifest")," class."),(0,a.kt)("p",null,"In the build process, Webpack creates all static files and also ",(0,a.kt)("inlineCode",{parentName:"p"},"manifest.json")," inside the ",(0,a.kt)("inlineCode",{parentName:"p"},"public")," folder. The manifest file contains a key/value list that we use to call the location of the assets dynamically."),(0,a.kt)("p",null,"This class is used to provide ",(0,a.kt)("inlineCode",{parentName:"p"},"manifest.json")," file location and helpers to return the full path for a specific asset."),(0,a.kt)("h2",{id:"how-to-use-it"},"How to use it?"),(0,a.kt)("p",null,"The manifest class provides a filter name that is defined in the lib as a class constant. To apply/call this filter you need to provide ",(0,a.kt)("inlineCode",{parentName:"p"},"Manifest::MANIFEST_ITEM_FILTER_NAME")," filter name inside the project config helper. ",(0,a.kt)("a",{parentName:"p",href:"config"},"Config helper")," is used to append project prefix to a filter name."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"Manifest.json:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "logo.svg": "/wp-content/themes/eightshift-boilerplate/public/logo.svg"\n}\n')),(0,a.kt)("p",null,"Usage:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"use Eightshift_Libs\\Manifest\\Manifest;\n\n$logo_img = apply_filters( Config::get_config( Manifest::MANIFEST_ITEM_FILTER_NAME ), 'logo.svg' );\n")),(0,a.kt)("p",null,"Output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"https://domain.com/wp-content/themes/eightshift-boilerplate/public/logo.svg\n")))}d.isMDXComponent=!0}}]);