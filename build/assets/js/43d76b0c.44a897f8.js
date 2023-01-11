"use strict";(self.webpackChunkdb1_tech_guide=self.webpackChunkdb1_tech_guide||[]).push([[710],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),d=o,h=p["".concat(l,".").concat(d)]||p[d]||f[d]||r;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6838:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),i=["components"],s={id:"manifest",title:"Assets Manifest"},l=void 0,c={unversionedId:"legacy/v6/basics/manifest",id:"legacy/v6/basics/manifest",title:"Assets Manifest",description:"docs-source",source:"@site/docs/legacy/v6/basics/manifest.md",sourceDirName:"legacy/v6/basics",slug:"/legacy/v6/basics/manifest",permalink:"/docs/legacy/v6/basics/manifest",draft:!1,tags:[],version:"current",frontMatter:{id:"manifest",title:"Assets Manifest"},sidebar:"docs",previous:{title:"Example Class",permalink:"/docs/legacy/v6/basics/example-class"},next:{title:"REST Intro",permalink:"/docs/legacy/v6/basics/rest"}},u={},p=[{value:"How to use it",id:"how-to-use-it",level:2},{value:"Why not just fetch the asset the old-fashioned way?",id:"why-not-just-fetch-the-asset-the-old-fashioned-way",level:2}],f={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/infinum/eightshift-libs/tree/4.0.0"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/source-eightshift--libs-blue?style=for-the-badge&logo=php&labelColor=2a2a2a",alt:"docs-source"}))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This ",(0,r.kt)("inlineCode",{parentName:"p"},"manifest.json")," file is generated by Webpack, and is different from the rest of Eightshift manifests described elsewhere in the documentation.")),(0,r.kt)("p",null,"In the build process, Webpack creates all the static files from your assets folder and a ",(0,r.kt)("inlineCode",{parentName:"p"},"manifest.json")," file inside the public folder. The manifest file contains a list of key/value pairs that we use to set the location of the assets dynamically."),(0,r.kt)("p",null,"This class provides the location of the ",(0,r.kt)("inlineCode",{parentName:"p"},"manifest.json")," file and helpers to return the full path for a specific asset."),(0,r.kt)("h2",{id:"how-to-use-it"},"How to use it"),(0,r.kt)("p",null,"First, install the manifest class using this command:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"wp boilerplate create_manifest")),(0,r.kt)("p",null,"You will see a custom filter you can use to fetch an item from the public folder in your class. This is the custom filter:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"/**\n * Manifest item filter name constant.\n *\n * @var string\n */\npublic const MANIFEST_ITEM = 'manifest-item';\n\n/**\n * Register all hooks. Changed filter name to manifest.\n *\n * @return void\n */\npublic function register(): void\n{\n    \\add_filter(static::MANIFEST_ITEM, [ $this, 'getAssetsManifestItem' ]);\n}\n")),(0,r.kt)("p",null,"To use this filter to fetch asset URLs, add the following code and provide the correct name of your asset:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"use CoolProject\\Manifest\\Manifest;\n\n$logo = \\apply_filters(Manifest::MANIFEST_ITEM, 'logo.svg');\n")),(0,r.kt)("p",null,"And that's it. This filter will check the public folder for the ",(0,r.kt)("inlineCode",{parentName:"p"},"manifest.json")," file, parse it, and return the value of the provided key."),(0,r.kt)("p",null,"If there is no ",(0,r.kt)("inlineCode",{parentName:"p"},"manifest.json")," file or you provided the wrong asset name, there will be a descriptive message for you."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"If you are using multiple boilerplates in one project don't forget to change the filter name defined in the ",(0,r.kt)("inlineCode",{parentName:"p"},"MANIFEST_ITEM")," constant.")),(0,r.kt)("h2",{id:"why-not-just-fetch-the-asset-the-old-fashioned-way"},"Why not just fetch the asset the old-fashioned way?"),(0,r.kt)("p",null,"By the old-fashioned way, we mean doing something like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"$logo = get_template_directory_uri() . 'public/logo.svg';\n")),(0,r.kt)("p",null,"You can definitely do this. However, using the manifest approach, if you want to change the public folder location or public folder name for some reason, you can change it in one place and you're done."),(0,r.kt)("p",null,"If you are using the old-fashioned way, you would need to search and replace the whole project and implement the change. There is always a chance you will miss something and somehow break the project."))}d.isMDXComponent=!0}}]);