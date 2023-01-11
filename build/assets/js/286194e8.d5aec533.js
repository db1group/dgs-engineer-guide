"use strict";(self.webpackChunkdb1_tech_guide=self.webpackChunkdb1_tech_guide||[]).push([[6962],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return y}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),g=o,y=p["".concat(l,".").concat(g)]||p[g]||m[g]||a;return n?r.createElement(y,i(i({ref:t},u),{},{components:n})):r.createElement(y,i({ref:t},u))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},4611:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={id:"taxonomy",title:"Taxonomy"},l=void 0,c={unversionedId:"legacy/v4/guides/taxonomy",id:"legacy/v4/guides/taxonomy",title:"Taxonomy",description:"docs-source",source:"@site/docs/legacy/v4/guides/taxonomy.md",sourceDirName:"legacy/v4/guides",slug:"/legacy/v4/guides/taxonomy",permalink:"/docs/legacy/v4/guides/taxonomy",draft:!1,tags:[],version:"current",frontMatter:{id:"taxonomy",title:"Taxonomy"},sidebar:"docs",previous:{title:"Post Type",permalink:"/docs/legacy/v4/guides/post-type"},next:{title:"Registration",permalink:"/docs/legacy/v4/guides/blocks-registration"}},u={},p=[{value:"Example:",id:"example",level:2}],m={toc:p};function g(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/infinum/eightshift-libs/tree/v2.0.0/src/custom-taxonomy"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/source-eigthshift--libs-blue?style=for-the-badge&logo=php&labelColor=2a2a2a",alt:"docs-source"}))),(0,a.kt)("p",null,"Custom Taxonomy class is located in ",(0,a.kt)("inlineCode",{parentName:"p"},"Eightshift Libs"),". To extend it, use ",(0,a.kt)("inlineCode",{parentName:"p"},"Eightshift_Libs\\Custom_Taxonomy\\Base_Taxonomy")," class. This is an abstract class."),(0,a.kt)("h2",{id:"example"},"Example:"),(0,a.kt)("p",null,"To create custom taxonomy:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"make a new class ",(0,a.kt)("inlineCode",{parentName:"li"},"src/custom-taxonomy/class-blog-taxonomy.php"),"."),(0,a.kt)("li",{parentName:"ol"},"implement all the methods provided in the example."),(0,a.kt)("li",{parentName:"ol"},"register the class inside the ",(0,a.kt)("inlineCode",{parentName:"li"},"class-main.php")," file."),(0,a.kt)("li",{parentName:"ol"},"dump autoload.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"<?php\n/**\n * The Blog_Taxonomy specific functionality.\n *\n * @since   1.0.8\n * @package Eightshift_Boilerplate\\Custom_Taxonomy\n */\n\ndeclare( strict_types=1 );\n\nnamespace Eightshift_Boilerplate\\Custom_Taxonomy;\n\nuse Eightshift_Libs\\Custom_Taxonomy\\Base_Taxonomy;\n\n/**\n * Class Blog_Taxonomy\n */\nclass Blog_Taxonomy extends Base_Taxonomy {\n\n  /**\n   * Taxonomy slug costant.\n   *\n   * @var string\n   *\n   * @since 1.0.0\n   */\n  const TAXONOMY_SLUG = 'blog-category';\n\n  /**\n   * Rest API Endpoint slug costant.\n   *\n   * @var string\n   *\n   * @since 1.0.0\n   */\n  const REST_API_ENDPOINT_SLUG = 'blogs-categories';\n\n  /**\n   * Get the slug of the custom taxonomy\n   *\n   * @return string Custom taxonomy slug.\n   *\n   * @since 0.1.0\n   */\n  protected function get_taxonomy_slug() : string {\n    return static::TAXONOMY_SLUG;\n  }\n\n  /**\n   * Get the post type slug to use the taxonomy.\n   *\n   * @return string Custom post type slug.\n   *\n   * @since 0.1.0\n   */\n  protected function get_post_type_slug() : string {\n    return 'post';\n  }\n\n  /**\n   * Get the arguments that configure the custom taxonomy.\n   *\n   * @return array Array of arguments.\n   *\n   * @since 0.1.0\n   */\n  protected function get_taxonomy_arguments() : array {\n    return [\n      'hierarchical'      => true,\n      'label'             => esc_html__( 'Blog Categories', 'eightshift-boilerplate' ),\n      'show_ui'           => true,\n      'show_admin_column' => true,\n      'show_in_nav_menus' => false,\n      'public'            => true,\n      'show_in_rest'      => true,\n      'query_var'         => true,\n      'rest_base'         => static::REST_API_ENDPOINT_SLUG,\n      'rewrite'           => array(\n        'hierarchical'  => true,\n        'with_front'    => false,\n      ),\n    ];\n  }\n}\n")))}g.isMDXComponent=!0}}]);