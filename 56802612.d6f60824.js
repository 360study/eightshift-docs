(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{178:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return b}));var n=r(1),o=r(9),i=(r(0),r(249)),a={id:"blocks-registration",title:"Registration",sidebar_label:"Registration"},c={id:"basics/blocks-registration",title:"Registration",description:"[![docs-source](https://img.shields.io/badge/source-eigthshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a)](https://github.com/infinum/eightshift-frontend-libs/tree/develop/blocks/init/src/blocks/)",source:"@site/docs/basics/blocks-registration.md",permalink:"/eightshift-docs/docs/basics/blocks-registration",sidebar_label:"Registration",sidebar:"docs",previous:{title:"Intro",permalink:"/eightshift-docs/docs/basics/blocks-intro"},next:{title:"Structure",permalink:"/eightshift-docs/docs/basics/blocks-structure"}},s=[],l={rightToc:s};function b(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/infinum/eightshift-frontend-libs/tree/develop/blocks/init/src/blocks/"}),Object(i.b)("img",Object(n.a)({parentName:"a"},{src:"https://img.shields.io/badge/source-eigthshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a",alt:"docs-source"})))),Object(i.b)("p",null,"Our setup works if you follow our naming convention and strict folder structure for all blocks, components, variations, patterns, and wrapper."),Object(i.b)("p",null,"By following our structure, we can find all files using the ",Object(i.b)("inlineCode",{parentName:"p"},"require.context")," regular expression inside the ",Object(i.b)("inlineCode",{parentName:"p"},"Blocks")," folder. Alongside some JavaScript magic, we have been able to leave out all those unnecessary steps when creating new blocks like:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"providing style files."),Object(i.b)("li",{parentName:"ul"},"writing register method."),Object(i.b)("li",{parentName:"ul"},"setting PHP method for registering dynamic blocks."),Object(i.b)("li",{parentName:"ul"},"including files when adding new components.")),Object(i.b)("p",null,"You can check out how this works inside the ",Object(i.b)("inlineCode",{parentName:"p"},"src/Blocks/assets/scripts/application-blocks-editor.js")," file."),Object(i.b)("p",null,"Please follow our ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"blocks-structure"}),"blocks structure folder")," to see the naming standard and how blocks are set."))}b.isMDXComponent=!0},249:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),b=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},u=function(e){var t=b(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=b(r),f=n,d=u["".concat(a,".").concat(f)]||u[f]||p[f]||i;return r?o.a.createElement(d,c({ref:t},l,{components:r})):o.a.createElement(d,c({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var l=2;l<i;l++)a[l]=r[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);