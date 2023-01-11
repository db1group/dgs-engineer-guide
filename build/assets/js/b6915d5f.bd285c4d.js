"use strict";(self.webpackChunkdb1_tech_guide=self.webpackChunkdb1_tech_guide||[]).push([[6057],{3905:function(e,t,o){o.d(t,{Zo:function(){return u},kt:function(){return m}});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var i=r.createContext({}),c=function(e){var t=r.useContext(i),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(o),d=n,m=p["".concat(i,".").concat(d)]||p[d]||y[d]||a;return o?r.createElement(m,s(s({ref:t},u),{},{components:o})):r.createElement(m,s({ref:t},u))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,s=new Array(a);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[p]="string"==typeof e?e:n,s[1]=l;for(var c=2;c<a;c++)s[c]=o[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},5706:function(e,t,o){o.r(t),o.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var r=o(7462),n=o(3366),a=(o(7294),o(3905)),s=["components"],l={id:"blocks-storybook",title:"Storybook"},i=void 0,c={unversionedId:"legacy/v7/basics/blocks-storybook",id:"legacy/v7/basics/blocks-storybook",title:"Storybook",description:"docs-source",source:"@site/docs/legacy/v7/basics/blocks-storybook.md",sourceDirName:"legacy/v7/basics",slug:"/legacy/v7/basics/blocks-storybook",permalink:"/docs/legacy/v7/basics/blocks-storybook",draft:!1,tags:[],version:"current",frontMatter:{id:"blocks-storybook",title:"Storybook"},sidebar:"docs",previous:{title:"Styles",permalink:"/docs/legacy/v7/basics/blocks-styles"},next:{title:"Helpers",permalink:"/docs/legacy/v7/basics/helpers"}},u={},p=[{value:"Create my custom story",id:"create-my-custom-story",level:2},{value:"Block story",id:"block-story",level:3},{value:"Variation story",id:"variation-story",level:3},{value:"Component story",id:"component-story",level:3}],y={toc:p};function d(e){var t=e.components,o=(0,n.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},y,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/infinum/eightshift-frontend-libs/tree/6.0.0/blocks/init/src/blocks/"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/source-eightshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a",alt:"docs-source"}))),(0,a.kt)("p",null,"We have created a full storybook that hosts all our blocks/components/variations with a fully functional block editor, where you can try out how blocks work and behave."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"To speed up project build time, Eightshift Boilerplate doesn't come with the storybook out of the box; you need to install it. To install Storybook to your project, just type this command in you terminal and follow the instructions:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"wp boilerplate create_blocks_storybook\n")),(0,a.kt)("h2",{id:"create-my-custom-story"},"Create my custom story"),(0,a.kt)("p",null,"You don't need to have stories in your block/component, but we provided you with the ability to use the Storybook for all of your blocks and components. Why not use it? It will speed up your development time. Trust us."),(0,a.kt)("p",null,"If you used our way to set up your project, you already have Storybook ready to use. To start the Storybook, run this command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm run storybook\n")),(0,a.kt)("p",null,"In your project, you also have the ",(0,a.kt)("inlineCode",{parentName:"p"},".storybook")," folder, where all the configuration for Storybook is defined."),(0,a.kt)("p",null,"For your blocks/components/variation to be seen in the Storybook, you must have the ",(0,a.kt)("inlineCode",{parentName:"p"},"docs")," folder and the ",(0,a.kt)("inlineCode",{parentName:"p"},"story.js")," file in it."),(0,a.kt)("h3",{id:"block-story"},"Block story"),(0,a.kt)("p",null,"For all blocks, you don't need to write anything because all blocks stories look the same here is an example of the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/infinum/eightshift-frontend-libs/tree/6.0.0/blocks/init/src/Blocks/custom/heading/docs/story.js"},"heading block story"),"."),(0,a.kt)("p",null,"We pull all the data from the manifest.json file and all the attribute values from the ",(0,a.kt)("inlineCode",{parentName:"p"},"example")," key."),(0,a.kt)("h3",{id:"variation-story"},"Variation story"),(0,a.kt)("p",null,"The same as the block's story."),(0,a.kt)("h3",{id:"component-story"},"Component story"),(0,a.kt)("p",null,"Components are not smart and can't be automatically built into the story. This is why you must create a story of all your components and mock the data.\nYou should set all the mock data in the component ",(0,a.kt)("inlineCode",{parentName:"p"},"manifest.json")," and just provide the story's implementation. We have provided you with the helper that uses example data from you manifests and respects the component's dependency tree. Here you can see and example of ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/infinum/eightshift-frontend-libs/tree/6.0.0/blocks/init/src/Blocks/components/card/docs/story.js"},"card component story"),"."))}d.isMDXComponent=!0}}]);