"use strict";(self.webpackChunk_eightshift_docs=self.webpackChunk_eightshift_docs||[]).push([[5526],{766:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return f}});var r=n(3117),o=n(102),a=(n(7294),n(3905)),s=["components"],i={id:"fonts",title:"Fonts"},c=void 0,l={unversionedId:"legacy/v7/basics/fonts",id:"legacy/v7/basics/fonts",title:"Fonts",description:"docs-source",source:"@site/docs/legacy/v7/basics/fonts.md",sourceDirName:"legacy/v7/basics",slug:"/legacy/v7/basics/fonts",permalink:"/eightshift-docs/docs/legacy/v7/basics/fonts",tags:[],version:"current",frontMatter:{id:"fonts",title:"Fonts"},sidebar:"docs",previous:{title:"Writing Styles",permalink:"/eightshift-docs/docs/legacy/v7/basics/writing-styles"},next:{title:"Browsersync",permalink:"/eightshift-docs/docs/legacy/v7/basics/browser-sync"}},u={},f=[],p={toc:f};function d(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/infinum/eightshift-frontend-libs"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/source-eightshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a",alt:"docs-source"}))),(0,a.kt)("p",null,"Fonts can be added to your project in multiple ways, depending on your project's needs. In general, if you can use fonts from an external source like Google Fonts, use that approach because the fonts are loaded smartly. On the other hand, if you have fonts that are added to your project, below are the steps to follow to make them available in the project."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Put your font files in this folder: ",(0,a.kt)("inlineCode",{parentName:"li"},"assets/fonts"),"."),(0,a.kt)("li",{parentName:"ul"},"Import each file in the ",(0,a.kt)("inlineCode",{parentName:"li"},"assets/fonts/index.js")," so that Webpack knows how to process these files in its build process."),(0,a.kt)("li",{parentName:"ul"},"In your project, load the font family using font-face ",(0,a.kt)("a",{parentName:"li",href:"/sass"},"method"),". We recommend that you create a new file ",(0,a.kt)("inlineCode",{parentName:"li"},"assets/styles/parts/utils/_defaults.scss")," and put everything in that file.")))}d.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(n),d=o,y=p["".concat(c,".").concat(d)]||p[d]||f[d]||a;return n?r.createElement(y,s(s({ref:t},u),{},{components:n})):r.createElement(y,s({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);