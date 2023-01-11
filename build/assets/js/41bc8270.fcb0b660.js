"use strict";(self.webpackChunkdb1_tech_guide=self.webpackChunkdb1_tech_guide||[]).push([[2452],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return b}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),f=o,b=u["".concat(l,".").concat(f)]||u[f]||d[f]||a;return n?r.createElement(b,i(i({ref:t},p),{},{components:n})):r.createElement(b,i({ref:t},p))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2055:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return u}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],c={id:"webpack",title:"Webpack"},l=void 0,s={unversionedId:"legacy/v4/advanced/webpack",id:"legacy/v4/advanced/webpack",title:"Webpack",description:"docs-source",source:"@site/docs/legacy/v4/advanced/webpack.md",sourceDirName:"legacy/v4/advanced",slug:"/legacy/v4/advanced/webpack",permalink:"/docs/legacy/v4/advanced/webpack",draft:!1,tags:[],version:"current",frontMatter:{id:"webpack",title:"Webpack"},sidebar:"docs",previous:{title:"Sass",permalink:"/docs/legacy/v4/advanced/docs-sass"},next:{title:"Browsersync",permalink:"/docs/legacy/v4/advanced/browsersync"}},p={},u=[{value:"Override built-in functionality",id:"override-built-in-functionality",level:2},{value:"Add Custom build",id:"add-custom-build",level:2}],d={toc:u};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/infinum/eightshift-boilerplate/tree/v4.0.0/webpack.config.js"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/source-eigthshift--boilerplate-red?style=for-the-badge&logo=wordpress&labelColor=2a2a2a",alt:"docs-source"}))),(0,a.kt)("p",null,"At its core, webpack is a static module bundler for modern JavaScript applications. When webpack processes your application, it internally builds a dependency graph which maps every module your project needs and generates one or more bundles. Learn more about webpack ",(0,a.kt)("a",{parentName:"p",href:"https://webpack.js.org/concepts/"},"here"),"."),(0,a.kt)("p",null,"Look at how the config is set up on ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/infinum/eightshift-boilerplate/tree/v4.0.0/webpack.config.js"},"Eightshift Boilerplate repo"),"."),(0,a.kt)("p",null,"In order to use this library, you'll need to have a ",(0,a.kt)("inlineCode",{parentName:"p"},"webpack.config.js")," file in the root of your project."),(0,a.kt)("p",null,"This file holds basic configuration that will build your assets correctly and provide browsersync functionality."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"webpack.config.js")," is a main entrypoint for webpack config and looks like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"/* eslint-disable import/no-dynamic-require, global-require */\n\nmodule.exports = (env, argv) => {\n\n  const projectConfig = {\n    config: {\n      projectDir: __dirname, // Current project directory absolute path.\n      projectUrl: 'local-url.test', // Used for providing browsersync functionality.\n      projectPath: 'wp-content/themes/your-theme-name', // Project path relative to project root.\n      assetsPath: 'src/blocks/assets', // Assets path after projectPath location. (add this key only to override the default value.)\n      blocksAssetsPathConfig: 'src/blocks/assets', // Blocks assets path after projectPath location. (add this key only to override the default value.)\n      outputPath: 'public', // Public output path after projectPath location. (add this key only to override the default value.)\n    },\n  };\n\n  // Generate webpack config for this project using options object.\n  const project = require('./node_modules/@eightshift/frontend-libs/webpack')(argv.mode, projectConfig);\n\n  return {\n    ...project,\n  };\n};\n")),(0,a.kt)("h2",{id:"override-built-in-functionality"},"Override built-in functionality"),(0,a.kt)("p",null,"To remove built-in functionality, add a new array to the config called ",(0,a.kt)("inlineCode",{parentName:"p"},"overrides"),".\nIf you provide any of the ",(0,a.kt)("inlineCode",{parentName:"p"},"overrides keys"),", it will remove that config from the build.\nHere is a list of all the features that we use and how to remove them."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"\nconst projectConfig = {\n  config: {\n    ...\n  },\n  overrides: [\n    'application',\n    'applicationAdmin',\n    'applicationBlocks',\n    'applicationBlocksEditor',\n    'filename',\n    'cleanWebpackPlugin',\n    'terserPlugin',\n    'browserSyncPlugin',\n    'providePlugin',\n    'manifestPlugin',\n    'miniCssExtractPlugin',\n    'copyWebpackPlugin',\n    'optimizeCSSAssetsPlugin',\n    'js',\n    'scss',\n    'images',\n    'fonts',\n    'runtimeChunk',\n  ],\n}\n")),(0,a.kt)("h2",{id:"add-custom-build"},"Add Custom build"),(0,a.kt)("p",null,"If you want to add something custom to your build, you can simply use all the native ",(0,a.kt)("a",{parentName:"p",href:"https://webpack.js.org/guides/"},"webpack features")," by providing it like in the example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"/* eslint-disable import/no-dynamic-require, global-require */\n\nconst HtmlWebpackPlugin = require('html-webpack-plugin');\n\nmodule.exports = (env, argv) => {\n\n  ...\n\n  return {\n    ...project,\n    plugins: [\n      ...project.plugins,\n      new HtmlWebpackPlugin(),\n    ],\n  };\n};\n")),(0,a.kt)("p",null,"If you want to override the defaults from the libs, first put it in the ",(0,a.kt)("inlineCode",{parentName:"p"},"overrides")," array, then provide your own config as described above."))}f.isMDXComponent=!0}}]);