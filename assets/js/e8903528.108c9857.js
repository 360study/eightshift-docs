"use strict";(self.webpackChunk_eightshift_docs=self.webpackChunk_eightshift_docs||[]).push([[4897],{292:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var r=n(3117),o=n(102),a=(n(7294),n(3905)),i=["components"],l={id:"blocks-important",title:"Important",sidebar_label:"Important"},c=void 0,s={unversionedId:"legacy/v5/basics/blocks-important",id:"legacy/v5/basics/blocks-important",title:"Important",description:"docs-source",source:"@site/docs/legacy/v5/basics/blocks-important.md",sourceDirName:"legacy/v5/basics",slug:"/legacy/v5/basics/blocks-important",permalink:"/docs/legacy/v5/basics/blocks-important",tags:[],version:"current",frontMatter:{id:"blocks-important",title:"Important",sidebar_label:"Important"},sidebar:"docs",previous:{title:"Blocks",permalink:"/docs/legacy/v5/basics/blocks"},next:{title:"Intro",permalink:"/docs/legacy/v5/basics/blocks-intro"}},u={},p=[],m={toc:p};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/infinum/eightshift-frontend-libs/tree/4.0.0/blocks/init/src/blocks/"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/source-eigthshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a",alt:"docs-source"}))),(0,a.kt)("p",null,"Before you start developing and changing anything on your block/components, you should keep in mind how we have managed to create this setup and some of the side effects of automatic file loading."),(0,a.kt)("p",null,"We require all our JS files using the ",(0,a.kt)("inlineCode",{parentName:"p"},"require.context")," and all our SCSS files using the ",(0,a.kt)("inlineCode",{parentName:"p"},"webpack-import-glob-loader"),"."),(0,a.kt)("p",null,"All files are required during the project's ",(0,a.kt)("inlineCode",{parentName:"p"},"compile-time"),". This means that we can't get any new files after the compile time is over. This approach gives you the ability to not worry whether you loaded the file or not. You can focus on your code and leave the messy stuff to the boilerplate."),(0,a.kt)("p",null,"Since all the files are required during the ",(0,a.kt)("inlineCode",{parentName:"p"},"compile-time"),", every time you change the file structure, you must restart the Webpack watch."),(0,a.kt)("p",null,"You ",(0,a.kt)("strong",{parentName:"p"},"must restart")," Webpack watch when:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"adding a new block/component/variation;"),(0,a.kt)("li",{parentName:"ul"},"changing the names of any files in the block/component/variation folder (for example, you made a typo in a block's name);"),(0,a.kt)("li",{parentName:"ul"},"removing any file from the block/component/variation folder; and"),(0,a.kt)("li",{parentName:"ul"},"changing the block name in the block manifest.json.")),(0,a.kt)("p",null,"You ",(0,a.kt)("strong",{parentName:"p"},"don't need to restart")," Webpack watch when you:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"add/remove styles;"),(0,a.kt)("li",{parentName:"ul"},"add/remove JS implementation in the files;"),(0,a.kt)("li",{parentName:"ul"},"add/remove PHP implementation in the files; and"),(0,a.kt)("li",{parentName:"ul"},"make changes on anything other than blockName in the manifest.json.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Remember this note because, in 90 per cent of cases, your error occurs when you made changes to the files and didn't restart the Webpack watch.")),(0,a.kt)("div",{class:"legacy-badge legacy-badge--v5"}))}f.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(n),f=o,d=m["".concat(c,".").concat(f)]||m[f]||p[f]||a;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);