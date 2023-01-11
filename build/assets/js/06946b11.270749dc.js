"use strict";(self.webpackChunkdb1_tech_guide=self.webpackChunkdb1_tech_guide||[]).push([[9701],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var o=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=o.createContext({}),c=function(e){var t=o.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return o.createElement(i.Provider,{value:t},e.children)},p="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),d=a,f=p["".concat(i,".").concat(d)]||p[d]||b[d]||n;return r?o.createElement(f,l(l({ref:t},u),{},{components:r})):o.createElement(f,l({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,l=new Array(n);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:a,l[1]=s;for(var c=2;c<n;c++)l[c]=r[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8614:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var o=r(7462),a=r(3366),n=(r(7294),r(3905)),l=["components"],s={id:"blocks-reusable",title:"Reusable Blocks",sidebar_label:"Reusable Blocks"},i=void 0,c={unversionedId:"legacy/v5/basics/blocks-reusable",id:"legacy/v5/basics/blocks-reusable",title:"Reusable Blocks",description:"docs-source",source:"@site/docs/legacy/v5/basics/blocks-reusable.md",sourceDirName:"legacy/v5/basics",slug:"/legacy/v5/basics/blocks-reusable",permalink:"/docs/legacy/v5/basics/blocks-reusable",draft:!1,tags:[],version:"current",frontMatter:{id:"blocks-reusable",title:"Reusable Blocks",sidebar_label:"Reusable Blocks"},sidebar:"docs",previous:{title:"Special Use Cases",permalink:"/docs/legacy/v5/basics/blocks-special-use-cases"},next:{title:"Styles",permalink:"/docs/legacy/v5/basics/blocks-styles"}},u={},p=[{value:"Register admin sidemenu",id:"register-admin-sidemenu",level:3},{value:"Use the reusable block as a partial",id:"use-the-reusable-block-as-a-partial",level:3}],b={toc:p};function d(e){var t=e.components,r=(0,a.Z)(e,l);return(0,n.kt)("wrapper",(0,o.Z)({},b,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/infinum/eightshift-frontend-libs/tree/4.0.0/blocks/init/src/blocks/"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/source-eigthshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a",alt:"docs-source"}))),(0,n.kt)("p",null,"Block editor provides us with the reusable blocks out of the box. These blocks are a custom post type that holds blocks that you can call in your editor to reuse in multiple places. So if you change your reusable block that change will impact all places where this block is imported."),(0,n.kt)("h3",{id:"register-admin-sidemenu"},"Register admin sidemenu"),(0,n.kt)("p",null,"Reusable blocks can be accessed from the block editors options page but to help our editors, we like to add a new menu in the admin sidebar where you can easily access all your reusable blocks. If you use our custom blocks setup this sidebar menu will be added by default."),(0,n.kt)("h3",{id:"use-the-reusable-block-as-a-partial"},"Use the reusable block as a partial"),(0,n.kt)("p",null,"We also like to use a reusable block for website parts that were previously hardcoded in the theme and are not a part of the block editor. We like to use this footer of additional options in categories and terms."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Here are the steps:")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Create a new reusable block for your partial."),(0,n.kt)("li",{parentName:"ol"},"Create a config where you can configure what reusable block are you going to use in your theme. We like to use ACF PRO and its option to create a theme options page."),(0,n.kt)("li",{parentName:"ol"},"Call this option in your theme and output your block.")),(0,n.kt)("p",null,"The first two steps are easy enough, but here is an example for the third step:"),(0,n.kt)("p",null,"footer.php"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-php"},"// Check if the footer partial is set and use the contents of it.\n$footerPartialId = '1'; // here you provide your way to get the option set in the second step.\n\nif (!empty($footerPartialId)) {\n    $footerBlocks = parse_blocks(get_the_content(null, null, $footerPartialId));\n\n    foreach ($footerBlocks as $block) {\n        echo wp_kses_post(\\apply_filters('the_content', \\render_block($block)));\n    }\n}\n")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Notes about reusable blocks, they're not native WP search friendly (as in the content you only have the WP block comment markup that there's a specific reusable block there). So if you use a lot of these in the content of a page / post, it might affect your search relevancy.")))}d.isMDXComponent=!0}}]);