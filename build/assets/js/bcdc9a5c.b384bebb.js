"use strict";(self.webpackChunkdb1_tech_guide=self.webpackChunkdb1_tech_guide||[]).push([[8284],{3905:function(e,n,a){a.d(n,{Zo:function(){return u},kt:function(){return m}});var t=a(7294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function p(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function i(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=t.createContext({}),s=function(e){var n=t.useContext(o),a=n;return e&&(a="function"==typeof e?e(n):p(p({},n),e)),a},u=function(e){var n=s(e.components);return t.createElement(o.Provider,{value:n},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},b=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(a),b=r,m=d["".concat(o,".").concat(b)]||d[b]||c[b]||l;return a?t.createElement(m,p(p({ref:n},u),{},{components:a})):t.createElement(m,p({ref:n},u))}));function m(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=a.length,p=new Array(l);p[0]=b;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i[d]="string"==typeof e?e:r,p[1]=i;for(var s=2;s<l;s++)p[s]=a[s];return t.createElement.apply(null,p)}return t.createElement.apply(null,a)}b.displayName="MDXCreateElement"},3886:function(e,n,a){a.r(n),a.d(n,{assets:function(){return u},contentTitle:function(){return o},default:function(){return b},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return d}});var t=a(7462),r=a(3366),l=(a(7294),a(3905)),p=["components"],i={id:"blocks-styles",title:"Styles"},o=void 0,s={unversionedId:"legacy/v6/basics/blocks-styles",id:"legacy/v6/basics/blocks-styles",title:"Styles",description:"docs-source",source:"@site/docs/legacy/v6/basics/blocks-styles.md",sourceDirName:"legacy/v6/basics",slug:"/legacy/v6/basics/blocks-styles",permalink:"/docs/legacy/v6/basics/blocks-styles",draft:!1,tags:[],version:"current",frontMatter:{id:"blocks-styles",title:"Styles"},sidebar:"docs",previous:{title:"Reusable Blocks",permalink:"/docs/legacy/v6/basics/blocks-reusable"},next:{title:"Storybook",permalink:"/docs/legacy/v6/basics/blocks-storybook"}},u={},d=[{value:"Setup",id:"setup",level:2},{value:"Details",id:"details",level:2},{value:"Global variables",id:"global-variables",level:2},{value:"Variables",id:"variables",level:2},{value:"Default type",id:"default-type",level:2},{value:"Value type",id:"value-type",level:2},{value:"Editor variables",id:"editor-variables",level:2},{value:"Manual variables",id:"manual-variables",level:2},{value:"Manual variables inside the Block editor",id:"manual-variables-inside-the-block-editor",level:2},{value:"Additional options and examples",id:"additional-options-and-examples",level:2},{value:"Color",id:"color",level:3},{value:"Responsive",id:"responsive",level:3},{value:"Responsive Inverse",id:"responsive-inverse",level:3},{value:"Attribute value replacement",id:"attribute-value-replacement",level:3},{value:"Responsive variables",id:"responsive-variables",level:2}],c={toc:d};function b(e){var n=e.components,a=(0,r.Z)(e,p);return(0,l.kt)("wrapper",(0,t.Z)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/infinum/eightshift-frontend-libs/tree/5.0.0/blocks/init/src/blocks/"},(0,l.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/source-eightshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a",alt:"docs-source"}))),(0,l.kt)("p",null,"We decided to remove all support for IE 11.  That decision opened up doors that lead to new, awesome features and all the cool stuff. One of those features is CSS variables with block manifest and global settings."),(0,l.kt)("p",null,"Let's dig into the implementation of CSS variables in your project."),(0,l.kt)("h2",{id:"setup"},"Setup"),(0,l.kt)("p",null,"To be able to use CSS variables you need to implement two helpers in your blocks/components: ",(0,l.kt)("inlineCode",{parentName:"p"},"outputCssVariables")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"getUnique"),". For more details on these helpers, you can read ",(0,l.kt)("a",{parentName:"p",href:"helpers-javascript"},"here"),". "),(0,l.kt)("p",null,"There are a few differences between the JavaScript and PHP implementation due to a way React handles component re-rendering."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"JavaScript component:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import React, { useMemo } from 'react';\nimport { outputCssVariables, getUnique } from '@eightshift/frontend-libs/scripts';\nimport manifest from '../manifest.json';\nimport globalManifest from './../../../manifest.json';\n\nexport const TypographyEditor = (attributes) => {\n\n    // We need to use memo in order to optimise component re-rendering.\n    const unique = useMemo(() => getUnique(), []);\n\n    return (\n        <>\n            {outputCssVariables(attributes, manifest, unique, globalManifest)}\n\n            <div data-id={unique}>\n                {/*Regular component implementation*/}\n            </div>\n        </>\n    );\n};\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"PHP view:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},'use EightshiftLibs\\Helpers\\Components;\n\n$globalManifest = Components::getManifest(dirname(__DIR__, 2));\n$manifest = Components::getManifest(__DIR__);\n\n$unique = Components::getUnique();\n\n?>\n\n<div data-id="<?php echo esc_attr($unique); ?>">\n    <?php echo Components::outputCssVariables($attributes, $manifest, $unique, $globalManifest); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>\n    // Regular component implementation\n</div>\n')),(0,l.kt)("p",null,"Now that we have helpers in place, let's see how they work and what features they offer."),(0,l.kt)("h2",{id:"details"},"Details"),(0,l.kt)("p",null,"CSS variables helper consists of 2 helpers. ",(0,l.kt)("inlineCode",{parentName:"p"},"outputCssVariables")," helper will output all CSS variables set in your blocks/component manifest and ",(0,l.kt)("inlineCode",{parentName:"p"},"getUnique")," helper will make sure that variables are applied only to the exact block/component."),(0,l.kt)("p",null,"If you check your rendered website you can see that you have something like this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<div class="typography" data-id="210c9bbf733ef5c6aa74c49168ac29a7">\n    <style>\n        .typography[data-id=\'210c9bbf733ef5c6aa74c49168ac29a7\'] {\n            --typography-color: var(--global-colors-black);\n            --typography-content-align: left;\n        }\n    </style>\n    ...\n</div>\n')),(0,l.kt)("p",null,"This is all that's required for the magic of CSS variables to work! Now let's see it in action and check out all additional features you can use."),(0,l.kt)("h2",{id:"global-variables"},"Global variables"),(0,l.kt)("p",null,"Now that we know how CSS variables are generated, we have one more helper to describe.\nThe ",(0,l.kt)("inlineCode",{parentName:"p"},"outputCssVariablesGlobal(globalSettings);")," helper is called in the ",(0,l.kt)("inlineCode",{parentName:"p"},"application-blocks-editor.js")," file. It is used to output all CSS variables from the global manifest under the ",(0,l.kt)("inlineCode",{parentName:"p"},"globalVariables")," key, into the ",(0,l.kt)("inlineCode",{parentName:"p"},":root")," selector."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"All of these variables are available to use inside any blocks/components.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Global Manifest:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "namespace": "eightshift-boilerplate",\n    "background": "#D8262C",\n    "foreground": "#FFFFFF",\n    "globalVariables": {\n        "customBlocksName": "eightshift-block",\n        "maxCols": 12,\n        "breakpoints": {\n            "mobile": 479,\n            "tablet": 1279,\n            "desktop": 1919,\n            "large": 1920\n        },\n        "containers": {\n            "default": "1330px"\n        },\n        "gutters": {\n            "none": "0",\n            "default": "25px",\n            "big": "50px"\n        },\n        "sectionSpacing": {\n            "min":  -300,\n            "max":  300,\n            "step": 10\n        },\n        "sectionInSpacing": {\n            "min":  0,\n            "max":  300,\n            "step": 10\n        },\n        "colors": [\n            {\n                "name": "Black",\n                "slug": "black",\n                "color": "#111111"\n            },\n            {\n                "name": "White",\n                "slug": "white",\n                "color": "#FFFFFF"\n            }\n        ]\n    }\n}\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Output:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},"<style>\n    :root {\n        --global-custom-blocks-name: eightshift-block;\n        --global-max-cols: 12;\n        --global-breakpoints-mobile: 479;\n        --global-breakpoints-tablet: 1279;\n        --global-breakpoints-desktop: 1919;\n        --global-breakpoints-large: 1920;\n        --global-containers-default: 1330px;\n        --global-gutters-none: 0;\n        --global-gutters-default: 25px;\n        --global-gutters-big: 50px;\n        --global-section-spacing-min: -300;\n        --global-section-spacing-max: 300;\n        --global-section-spacing-step: 10;\n        --global-section-in-spacing-min: 0;\n        --global-section-in-spacing-max: 300;\n        --global-section-in-spacing-step: 10;\n        --global-colors-black: #111111;\n        --global-colors-white: #FFFFFF;\n    }\n</style>\n")),(0,l.kt)("p",null,"You can use a global variable like any other CSS variable:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},"color: var(--global-colors-white);\n")),(0,l.kt)("h2",{id:"variables"},"Variables"),(0,l.kt)("p",null,"As we said in the beginning, all CSS variables are defined within the block/component manifest."),(0,l.kt)("p",null,"To output an attribute as a CSS variable, you need to set the ",(0,l.kt)("inlineCode",{parentName:"p"},"variables")," key in the block/component ",(0,l.kt)("inlineCode",{parentName:"p"},"manifest")," and define the variable markdown."),(0,l.kt)("p",null,"All css variables are prepared and ready to be used in the responsive manner."),(0,l.kt)("h2",{id:"default-type"},"Default type"),(0,l.kt)("p",null,"Variable ",(0,l.kt)("inlineCode",{parentName:"p"},"default")," will output all variables from the list no matter what you have selected in the attribute. You can use unlimited variables."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Manifest:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "componentClass": "typography",\n    "attributes": {\n        "typographySize": {\n            "type": "string",\n            "default": "120-default"\n        }\n    },\n    "variables": {\n        "typographySize": [\n            {\n                "variable": {\n                    "typography-size": "120px",\n                    "typography-line-height": "calc(var(--typography-size) * 1.2)"\n                }\n            }\n        ]\n    }\n}\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Output:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},"--typography-size: 120px;\n--typography-line-height: 144px;\n")),(0,l.kt)("h2",{id:"value-type"},"Value type"),(0,l.kt)("p",null,"Variable ",(0,l.kt)("inlineCode",{parentName:"p"},"value")," will output all variables depending on attributes value. Everything else is the same as in the default type."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Manifest:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "componentClass": "typography",\n    "attributes": {\n        "typographySize": {\n            "type": "string",\n            "default": "120-default"\n        }\n    },\n    "variables": {\n        "typographySize": {\n            "120-default": [\n                {\n                    "variable": {\n                        "typography-size": "120px",\n                        "typography-line-height": "calc(var(--typography-size) * 1.2)"\n                    }\n                }\n            ]\n        }\n    }\n}\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Output:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},"--typography-size: 120px;\n--typography-line-height: 144px;\n")),(0,l.kt)("h2",{id:"editor-variables"},"Editor variables"),(0,l.kt)("p",null,"Editor variables behave just like regular ",(0,l.kt)("inlineCode",{parentName:"p"},"variables"),", except they are output only inside the Block Editor.\nThey are mostly used for overriding specific behaviour, e.g. showing a hidden element as half-transparent instead of hiding it completely."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Manifest:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "componentName": "wrapper",\n    "title": "Wrapper",\n    "componentClass": "wrapper",\n    "attributes": {\n        "wrapperHide": {\n            "type": "boolean",\n            "default": false\n        }\n    },\n    "variables": {\n        "wrapperHide": {\n            "true": [\n                {\n                    "variable": {\n                        "wrapper-display": "none"\n                    }\n                }\n            ],\n        }\n    },\n    "variablesEditor": {\n        "wrapperHide": {\n            "true": [\n                {\n                    "variable": {\n                        "wrapper-display-opacity": "0.5",\n                        "wrapper-display": "var(--wrapper-display-type, grid)"\n                    }\n                }\n            ]\n        }\n    }\n}\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Output:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},"--wrapper-display: none;\n--wrapper-display-opacity: 0.5;\n--wrapper-display: var(--wrapper-display-type, grid);\n")),(0,l.kt)("h2",{id:"manual-variables"},"Manual variables"),(0,l.kt)("p",null,"Custom CSS variables can be generated and output independently from all the attributes through the ",(0,l.kt)("inlineCode",{parentName:"p"},"variablesCustom")," key. Add it inside the manifest (top level) and add each variable as an array item.\nManual variables will be added at the end of the output."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Manifest:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "attributes": {\n        // ...\n    },\n    "variablesCustom": [\n        "--variable1: test1",\n        "--variable2: test2",\n        "--variable3: test3"\n    ]\n}\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Output:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},"--variable1: test1;\n--variable2: test2;\n--variable3: test3;\n")),(0,l.kt)("h2",{id:"manual-variables-inside-the-block-editor"},"Manual variables inside the Block editor"),(0,l.kt)("p",null,"If you want to add manual variables that only apply inside the Block editor you can use the ",(0,l.kt)("inlineCode",{parentName:"p"},"variablesCustomEditor")," key. Everything works the same as described in the ",(0,l.kt)("strong",{parentName:"p"},"Manual variables")," section.\nIf you define both ",(0,l.kt)("inlineCode",{parentName:"p"},"variablesCustomEditor")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"variables"),", both will be output in the editor, but only ",(0,l.kt)("inlineCode",{parentName:"p"},"variables")," will be output on the frontend."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Manifest:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "attributes": {\n        // ...\n    },\n    "variablesCustomEditor": [\n        "--variable1: test1",\n        "--variable2: test2",\n        "--variable3: test3"\n    ]\n}\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Output:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},"--variable1: test1;\n--variable2: test2;\n--variable3: test3;\n")),(0,l.kt)("h2",{id:"additional-options-and-examples"},"Additional options and examples"),(0,l.kt)("h3",{id:"color"},"Color"),(0,l.kt)("p",null,"Here is an example how to output global variable as a css variable."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Manifest:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "componentClass": "typography",\n    "attributes": {\n        "typographyColor": {\n            "type": "string",\n            "default": "white"\n        }\n    },\n    "variables": {\n        "typographyColor": [\n            {\n                "variable": {\n                    "typography-color": "var(--global-colors-white)"\n                }\n            }\n        ]\n    }\n}\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Output:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},"--typography-color: var(--global-colors-white);\n")),(0,l.kt)("h3",{id:"responsive"},"Responsive"),(0,l.kt)("p",null,"All variables are prepared to be responsive. If you set multiple keys in the manifest list that variable will be outputted in the correct media query. Breakpoints are taken from the global manifest and the order of the output breakpoints."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Global breakpoints must follow the convention from the smallest size to the largest.")),(0,l.kt)("p",null,"If you don't specify breakpoint key, that item will not be wrapped in the media query."),(0,l.kt)("p",null,"If you write breakpoint that isn't defined in the global manifest, that condition will be ignored."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Manifest:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "componentClass": "typography",\n    "attributes": {\n        "typographySize": {\n            "type": "string",\n            "default": "120-default"\n        }\n    },\n    "variables": {\n        "typographySize": [\n            {\n                "variable": {\n                    "typography-size": "30px"\n                }\n            },\n            {\n                "breakpoint": "tablet",\n                "variable": {\n                    "typography-size": "80px"\n                }\n            }\n            {\n                "breakpoint": "large",\n                "variable": {\n                    "typography-size": "120px"\n                }\n            }\n        ]\n    }\n}\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Output:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},".typography[data-id='210c9bbf733ef5c6aa74c49168ac29a7'] {\n    --typography-size: 30px;\n}\n\n@media(min-width: 1279px) {\n    .typography[data-id='210c9bbf733ef5c6aa74c49168ac29a7'] {\n        --typography-size: 80px;\n    }\n}\n\n@media(min-width: 1920px) {\n    .typography[data-id='210c9bbf733ef5c6aa74c49168ac29a7'] {\n        --typography-size: 120px;\n    }\n}\n")),(0,l.kt)("h3",{id:"responsive-inverse"},"Responsive Inverse"),(0,l.kt)("p",null,"By default, we use mobile first approach but if you need desktop first you can use ",(0,l.kt)("inlineCode",{parentName:"p"},"inverse: true")," key."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"If you have multiple mobile/desktop first breakpoints, output will sort them mobile first and then desktop first after that.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Manifest:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "componentClass": "typography",\n    "attributes": {\n        "typographySize": {\n            "type": "string",\n            "default": "120-default"\n        }\n    },\n    "variables": {\n        "typographySize": [\n            {\n                "variable": {\n                    "typography-size": "120px"\n                }\n            },\n            {\n                "breakpoint": "tablet",\n                "inverse": true,\n                "variable": {\n                    "typography-size": "80px"\n                }\n            }\n            {\n                "breakpoint": "mobile",\n                "inverse": true,\n                "variable": {\n                    "typography-size": "320px"\n                }\n            }\n        ]\n    }\n}\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Output:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},".typography[data-id='210c9bbf733ef5c6aa74c49168ac29a7'] {\n    --typography-size: 120px;\n}\n\n@media(max-width: 1279px) {\n    .typography[data-id='210c9bbf733ef5c6aa74c49168ac29a7'] {\n        --typography-size: 80px;\n    }\n}\n\n@media(max-width: 479px) {\n    .typography[data-id='210c9bbf733ef5c6aa74c49168ac29a7'] {\n        --typography-size: 30px;\n    }\n}\n")),(0,l.kt)("h3",{id:"attribute-value-replacement"},"Attribute value replacement"),(0,l.kt)("p",null,"Attribute value replacement variable is used to return the attribute value where you want it in the css variables. To use it just put ",(0,l.kt)("inlineCode",{parentName:"p"},"%value%")," in you css variables."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Manifest:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "componentClass": "typography",\n    "attributes": {\n        "typographySize": {\n            "type": "string",\n            "default": "120"\n        }\n    },\n    "variables": {\n        "typographySize": [\n            {\n                "variable": {\n                    "typography-size": "30px"\n                }\n            },\n            {\n                "breakpoint": "tablet",\n                "variable": {\n                    "typography-size": "80px"\n                }\n            }\n            {\n                "breakpoint": "large",\n                "variable": {\n                    "typography-size": "%value%px"\n                }\n            }\n        ]\n    }\n}\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Output:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},".typography[data-id='210c9bbf733ef5c6aa74c49168ac29a7'] {\n    --typography-size: 30px;\n}\n\n@media(min-width: 1279px) {\n    .typography[data-id='210c9bbf733ef5c6aa74c49168ac29a7'] {\n        --typography-size: 80px;\n    }\n}\n\n@media(min-width: 1920px) {\n    .typography[data-id='210c9bbf733ef5c6aa74c49168ac29a7'] {\n        --typography-size: 120px;\n    }\n}\n")),(0,l.kt)("h2",{id:"responsive-variables"},"Responsive variables"),(0,l.kt)("p",null,"Responsive variables are used for eliminating unnecessary code duplication. For example, if you have 4 separate attributes used for setting a responsive variable where all the attributes have the same output (e.g. ",(0,l.kt)("inlineCode",{parentName:"p"},"%value%"),"), the variables can get cluttered rather quickly."),(0,l.kt)("p",null,"In a top-level manifest key ",(0,l.kt)("inlineCode",{parentName:"p"},"responsiveAttributes"),", you can place a new key (e.g. ",(0,l.kt)("inlineCode",{parentName:"p"},"wrapperHide"),") that represents a common key for your responsive variables. Inside of it, you can list your responsive variables (e.g. ",(0,l.kt)("inlineCode",{parentName:"p"},"wrapperHideLarge"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"wrapperHideDesktop"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"wrapperHideTablet"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"wrapperHideMobile"),") as a key-value pair. The key represents a breakpoint name, and the value represents responsive variable(",(0,l.kt)("inlineCode",{parentName:"p"},"breakpoint"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"responsiveVariableName"),"). Afterwards, you can add that common key inside the ",(0,l.kt)("inlineCode",{parentName:"p"},"variables")," (and/or ",(0,l.kt)("inlineCode",{parentName:"p"},"variablesEditor"),") key and configure the output template."),(0,l.kt)("p",null,"Best practice is to have the attributes named consistently with your breakpoints - in the ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"variableName``breakpointName"))," format (see example below)."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"If you need an extra variable, or are overriding some of the auto-generated variables (from the helper), the variables will be output after the responsive variables. (see ",(0,l.kt)("strong",{parentName:"p"},"Example 2"),")")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Order of responsive attributes is important since generating variables relies on that order. Make sure to use the ",(0,l.kt)("inlineCode",{parentName:"p"},"inverse")," option properly.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example 1")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "componentName": "wrapper",\n    "title": "Wrapper",\n    "componentClass": "wrapper",\n    "attributes": {\n        "wrapperHideLarge": {\n            "type": "boolean",\n            "default": false\n        },\n        "wrapperHideDesktop": {\n            "type": "boolean"\n        },\n        "wrapperHideTablet": {\n            "type": "boolean"\n        }\n    },\n    "responsiveAttributes": {\n        "wrapperHide": {\n            "large": "wrapperHideLarge",\n            "desktop": "wrapperHideDesktop",\n            "tablet": "wrapperHideTablet"\n        }\n    },\n    "variables": {\n        "wrapperHide": {\n            "true": [\n                {\n                    "inverse": true,\n                    "variable": {\n                        "wrapper-display": "none"\n                    }\n                }\n            ],\n            "false": [\n                {\n                    "inverse": true,\n                    "variable": {\n                        "wrapper-display": "var(--wrapper-display-type, grid)"\n                    }\n                }\n            ]\n        }\n    }\n}\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Transformed:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "componentName": "wrapper",\n    "title": "Wrapper",\n    "componentClass": "wrapper",\n    "attributes": {\n        "wrapperHide": {\n            "type": "boolean",\n            "default": false\n        }\n    },\n    "responsiveAttributes": {\n        "wrapperHideLarge": {\n            "type": "boolean",\n            "default": false\n        },\n        "wrapperHideDesktop": {\n            "type": "boolean"\n        },\n        "wrapperHideTablet": {\n            "type": "boolean"\n        }\n    },\n    "variables": {\n        "wrapperHideLarge": {\n            "true": [\n                {\n                    "variable": {\n                        "wrapper-display": "none"\n                    }\n                }\n            ],\n            "false": [\n                {\n                    "variable": {\n                        "wrapper-display": "var(--wrapper-display-type, grid)"\n                    }\n                }\n            ]\n        },\n        "wrapperHideDesktop": {\n            "true": [\n                {\n                    "inverse": true,\n                    "breakpoint": "desktop",\n                    "variable": {\n                        "wrapper-display": "none"\n                    }\n                }\n            ],\n            "false": [\n                {\n                    "inverse": true,\n                    "breakpoint": "desktop",\n                    "variable": {\n                        "wrapper-display": "var(--wrapper-display-type, grid)"\n                    }\n                }\n            ]\n        },\n        "wrapperHideTablet": {\n            "true": [\n                {\n                    "inverse": true,\n                    "breakpoint": "desktop",\n                    "variable": {\n                        "wrapper-display": "none"\n                    }\n                }\n            ],\n            "false": [\n                {\n                    "inverse": true,\n                    "breakpoint": "desktop",\n                    "variable": {\n                        "wrapper-display": "var(--wrapper-display-type, grid)"\n                    }\n                }\n            ]\n        }\n    }\n}\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Output")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},".wrapper[data-id='210c9bbf733ef5c6aa74c49168ac29a7'] {\n    --wrapper-display: var(--wrapper-display-type, grid);\n}\n@media(max-width: 1920px) {\n    .wrapper[data-id='210c9bbf733ef5c6aa74c49168ac29a7'] {\n        --wrapper-display: none;\n    }\n}\n@media(max-width: 1279px) {\n    .wrapper[data-id='210c9bbf733ef5c6aa74c49168ac29a7'] {\n        --wrapper-display: var(--wrapper-display-type, grid);\n    }\n}\n\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example 2")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "componentName": "wrapper",\n    "title": "Wrapper",\n    "componentClass": "wrapper",\n    "attributes": {\n        "wrapperHideLarge": {\n            "type": "boolean",\n            "default": false\n        },\n        "wrapperHideDesktop": {\n            "type": "boolean"\n        },\n        "wrapperHideTablet": {\n            "type": "boolean"\n        }\n    },\n    "responsiveAttributes": {\n        "wrapperHide": {\n            "large": "wrapperHideLarge",\n            "desktop": "wrapperHideDesktop",\n            "tablet": "wrapperHideTablet"\n        }\n    },\n    "variables": {\n        "wrapperHide": {\n            "true": [\n                {\n                    "inverse": true,\n                    "variable": {\n                        "wrapper-display": "none"\n                    }\n                }\n            ],\n            "false": [\n                {\n                    "inverse": true,\n                    "variable": {\n                        "wrapper-display": "var(--wrapper-display-type, grid)"\n                    }\n                }\n            ]\n        },\n        "wrapperHideLarge": {\n            "true": [\n                {\n                    "inverse": true,\n                    "variable": {\n                        "wrapper-display": "block",\n                        "wrapper-opacity": 0\n                    }\n                }\n            ],\n        }\n    }\n}\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Output")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},".wrapper[data-id='210c9bbf733ef5c6aa74c49168ac29a7'] {\n    --wrapper-display: none;\n    --wrapper-display: block;\n    --wrapper-opacity: 0;\n}\n\n")))}b.isMDXComponent=!0}}]);