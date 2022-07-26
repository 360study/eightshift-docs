"use strict";(self.webpackChunk_eightshift_docs=self.webpackChunk_eightshift_docs||[]).push([[5039],{4032:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var o=r(3117),n=r(102),a=(r(7294),r(3905)),s=["components"],l={id:"blocks-reusable",title:"Reusable Blocks"},i=void 0,c={unversionedId:"legacy/v7/basics/blocks-reusable",id:"legacy/v7/basics/blocks-reusable",title:"Reusable Blocks",description:"docs-source",source:"@site/docs/legacy/v7/basics/blocks-reusable.md",sourceDirName:"legacy/v7/basics",slug:"/legacy/v7/basics/blocks-reusable",permalink:"/docs/legacy/v7/basics/blocks-reusable",tags:[],version:"current",frontMatter:{id:"blocks-reusable",title:"Reusable Blocks"},sidebar:"docs",previous:{title:"Special Use Cases",permalink:"/docs/legacy/v7/basics/blocks-special-use-cases"},next:{title:"Styles",permalink:"/docs/legacy/v7/basics/blocks-styles"}},u={},p=[{value:"Register admin sidemenu",id:"register-admin-sidemenu",level:3},{value:"Use the reusable block as a partial",id:"use-the-reusable-block-as-a-partial",level:3}],b={toc:p};function f(e){var t=e.components,r=(0,n.Z)(e,s);return(0,a.kt)("wrapper",(0,o.Z)({},b,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/infinum/eightshift-frontend-libs/tree/develop/blocks/init/src/blocks/"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/source-eightshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a",alt:"docs-source"}))),(0,a.kt)("p",null,"Block editor provides us with the reusable blocks out of the box. These blocks are a custom post type that holds blocks that you can call in your editor to reuse in multiple places. So if you change your reusable block that change will impact all places where this block is imported."),(0,a.kt)("h3",{id:"register-admin-sidemenu"},"Register admin sidemenu"),(0,a.kt)("p",null,"Reusable blocks can be accessed from the block editors options page but to help our editors, we like to add a new menu in the admin sidebar where you can easily access all your reusable blocks. If you use our custom blocks setup this sidebar menu will be added by default."),(0,a.kt)("h3",{id:"use-the-reusable-block-as-a-partial"},"Use the reusable block as a partial"),(0,a.kt)("p",null,"We also like to use a reusable block for website parts that were previously hardcoded in the theme and are not a part of the block editor. We like to use this footer of additional options in categories and terms."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Here are the steps:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Create a new reusable block for your partial."),(0,a.kt)("li",{parentName:"ul"},"Create a config where you can configure what reusable block are you going to use in your theme. We like to use ACF PRO and its option to create a theme options page."),(0,a.kt)("li",{parentName:"ul"},"Call this option in your theme and output your block.")),(0,a.kt)("p",null,"The first two steps are easy enough, but here is an example for the third step:"),(0,a.kt)("p",null,"footer.php"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"// Check if the footer partial is set and use the contents of it.\n$footerPartialId = '1'; // here you provide your way to get the option set in the second step.\n\nif (!empty($footerPartialId)) {\n    $footerBlocks = parse_blocks(get_the_content(null, null, $footerPartialId));\n\n    foreach ($footerBlocks as $block) {\n        echo wp_kses_post(\\apply_filters('the_content', \\render_block($block)));\n    }\n}\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Notes about reusable blocks, they're not native WP search friendly (as in the content you only have the WP block comment markup that there's a specific reusable block there). So if you use a lot of these in the content of a page / post, it might affect your search relevancy.")))}f.isMDXComponent=!0},3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=o.createContext({}),c=function(e){var t=o.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return o.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},b=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),b=c(r),f=n,d=b["".concat(i,".").concat(f)]||b[f]||p[f]||a;return r?o.createElement(d,s(s({ref:t},u),{},{components:r})):o.createElement(d,s({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,s=new Array(a);s[0]=b;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,s[1]=l;for(var c=2;c<a;c++)s[c]=r[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);