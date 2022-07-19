"use strict";(self.webpackChunk_eightshift_docs=self.webpackChunk_eightshift_docs||[]).push([[8833],{2231:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});var o=n(3117),r=n(102),s=(n(7294),n(3905)),a=["components"],i={id:"blocks-component-structure",title:"Component Structure"},l=void 0,c={unversionedId:"legacy/v7/basics/blocks-component-structure",id:"legacy/v7/basics/blocks-component-structure",title:"Component Structure",description:"docs-source",source:"@site/docs/legacy/v7/basics/blocks-component-structure.md",sourceDirName:"legacy/v7/basics",slug:"/legacy/v7/basics/blocks-component-structure",permalink:"/eightshift-docs/docs/legacy/v7/basics/blocks-component-structure",tags:[],version:"current",frontMatter:{id:"blocks-component-structure",title:"Component Structure"},sidebar:"docs",previous:{title:"Block Structure",permalink:"/eightshift-docs/docs/legacy/v7/basics/block-structure"},next:{title:"Block Manifest",permalink:"/eightshift-docs/docs/legacy/v7/basics/block-manifest"}},u={},p=[{value:"assets",id:"assets",level:3},{value:"components",id:"components",level:3},{value:"docs",id:"docs",level:3},{value:"heading.php",id:"headingphp",level:3},{value:"heading-editor.scss",id:"heading-editorscss",level:3},{value:"heading-style.scss",id:"heading-stylescss",level:3},{value:"manifest.json",id:"manifestjson",level:3}],d={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,a);return(0,s.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/infinum/eightshift-frontend-libs/tree/develop/blocks/init/src/blocks/"},(0,s.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/source-eightshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a",alt:"docs-source"}))),(0,s.kt)("p",null,"Your custom components are placed in the ",(0,s.kt)("inlineCode",{parentName:"p"},"src/Blocks/components")," folder."),(0,s.kt)("p",null,"For example, let's take the heading component (just replace the heading with your component name)."),(0,s.kt)("p",null,"We suggest you always use the full name and never abbreviate for the component name. If your component has multiple words, you should separate them by a dash; for example, featured-post-block.js."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Block structure should look like this:")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"heading",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"assets",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"index.js"))),(0,s.kt)("li",{parentName:"ul"},"components",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"heading-editor.js"),(0,s.kt)("li",{parentName:"ul"},"heading-options.js"),(0,s.kt)("li",{parentName:"ul"},"heading-toolbar.js"))),(0,s.kt)("li",{parentName:"ul"},"docs",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"story.js"),(0,s.kt)("li",{parentName:"ul"},"readme.mdx"))),(0,s.kt)("li",{parentName:"ul"},"heading.php"),(0,s.kt)("li",{parentName:"ul"},"heading-editor.scss"),(0,s.kt)("li",{parentName:"ul"},"heading-style.scss"),(0,s.kt)("li",{parentName:"ul"},"manifest.json")))),(0,s.kt)("p",null,"For example, you can check the ",(0,s.kt)("a",{parentName:"p",href:"/storybook"},"storybook"),"."),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"All files in components are optional.")),(0,s.kt)("h3",{id:"assets"},"assets"),(0,s.kt)("p",null,"This folder behaves the same as the blocks assets folder. Please check the ",(0,s.kt)("a",{parentName:"p",href:"block-structure#assets"},"block structure")," chapter for more details."),(0,s.kt)("h3",{id:"components"},"components"),(0,s.kt)("p",null,"Components folder holds three files: ",(0,s.kt)("inlineCode",{parentName:"p"},"heading-options.js"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"heading-editor.js"),", and ",(0,s.kt)("inlineCode",{parentName:"p"},"heading-toolbars.js"),". They are used the same way as in blocks to provide functionality based on the location used. The main difference in components is that these files are used inside other blocks to implement functionality from the component."),(0,s.kt)("h3",{id:"docs"},"docs"),(0,s.kt)("p",null,"Docs folder contains everything a component needs to be run inside the Storybook. This part is optional but it will speed up your development time and provide you with the much-needed documentation."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"story.js")," - Storybook entry point for your component. Since components are not blocks, you must provide the mocked data for your component in this file."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"readme.mdx")," - README that describes your component and provides the documentation.")),(0,s.kt)("h3",{id:"headingphp"},"heading.php"),(0,s.kt)("p",null,"This file contains the front-end part (the view) of the component used in your project when the page renders. This file shouldn't contain any business logic, just present the passed attributes. The main difference from block view is that you only have attributes that you passed from a block or a top-level component in this file."),(0,s.kt)("h3",{id:"heading-editorscss"},"heading-editor.scss"),(0,s.kt)("p",null,"This file behaves the same as in blocks. Please check the ",(0,s.kt)("a",{parentName:"p",href:"block-structure#heading-editorscss"},"block structure")," chapter for more details."),(0,s.kt)("h3",{id:"heading-stylescss"},"heading-style.scss"),(0,s.kt)("p",null,"This file behaves the same as in blocks. Please check the ",(0,s.kt)("a",{parentName:"p",href:"block-structure#heading-stylescss"},"block structure")," chapter for more details."),(0,s.kt)("h3",{id:"manifestjson"},"manifest.json"),(0,s.kt)("p",null,"This file contains all the configuration for a component."),(0,s.kt)("p",null,"For more details, check the ",(0,s.kt)("a",{parentName:"p",href:"blocks-component-manifest"},"component manifest")," chapter."))}m.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||s;return n?o.createElement(h,a(a({ref:t},u),{},{components:n})):o.createElement(h,a({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,a=new Array(s);a[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var c=2;c<s;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);