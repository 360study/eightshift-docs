"use strict";(self.webpackChunk_eightshift_docs=self.webpackChunk_eightshift_docs||[]).push([[1302],{3109:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return b}});var n=r(3117),o=r(102),a=(r(7294),r(3905)),i=["components"],s={id:"blocks-attributes",title:"Attributes",sidebar_label:"Attributes"},c=void 0,l={unversionedId:"legacy/v5/basics/blocks-attributes",id:"legacy/v5/basics/blocks-attributes",title:"Attributes",description:"docs-source",source:"@site/docs/legacy/v5/basics/blocks-attributes.md",sourceDirName:"legacy/v5/basics",slug:"/legacy/v5/basics/blocks-attributes",permalink:"/docs/legacy/v5/basics/blocks-attributes",tags:[],version:"current",frontMatter:{id:"blocks-attributes",title:"Attributes",sidebar_label:"Attributes"},sidebar:"docs",previous:{title:"Component Manifest",permalink:"/docs/legacy/v5/basics/blocks-component-manifest"},next:{title:"Component in a Block",permalink:"/docs/legacy/v5/basics/blocks-component-in-block"}},u={},b=[],p={toc:b};function f(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/infinum/eightshift-frontend-libs/tree/develop/blocks/init/src/blocks/"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/source-eigthshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a",alt:"docs-source"}))),(0,a.kt)("p",null,"If you were to reference the native ",(0,a.kt)("a",{parentName:"p",href:"https://developer.wordpress.org/block-editor/developers/block-api/block-attributes/"},"WordPress documentation")," about attributes in blocks, you can see that they support different types of attributes. In this chapter, we want to point out that you should avoid using objects for your attributes."),(0,a.kt)("p",null,"The reason for this is that you can't control what key of that object is stored in the database once the attribute changes. When you change one key, the ",(0,a.kt)("inlineCode",{parentName:"p"},"setAttributes")," method will store the entire object in the database and you'll lose the best feature of block editor - the default attributes."),(0,a.kt)("p",null,"You can also look at this from the Reacts perspective: setting the entire object every time the key changes is bad for performance."),(0,a.kt)("p",null,"Yes, you can use objects, but we recommend using them only when you want to store multiple keys simultaneously."),(0,a.kt)("div",{class:"legacy-badge legacy-badge--v5"}))}f.isMDXComponent=!0},3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),f=o,d=p["".concat(c,".").concat(f)]||p[f]||b[f]||a;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"}}]);