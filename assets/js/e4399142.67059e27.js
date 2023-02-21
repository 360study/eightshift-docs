"use strict";(self.webpackChunk_eightshift_docs=self.webpackChunk_eightshift_docs||[]).push([[3347],{57962:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),l=["components"],s={id:"blocks-structure",title:"Blocks Structure"},i=void 0,c={unversionedId:"legacy/v4/guides/blocks-structure",id:"legacy/v4/guides/blocks-structure",title:"Blocks Structure",description:"docs-source",source:"@site/docs/legacy/v4/guides/blocks-structure.md",sourceDirName:"legacy/v4/guides",slug:"/legacy/v4/guides/blocks-structure",permalink:"/docs/legacy/v4/guides/blocks-structure",draft:!1,tags:[],version:"current",frontMatter:{id:"blocks-structure",title:"Blocks Structure"},sidebar:"docs",previous:{title:"Registration",permalink:"/docs/legacy/v4/guides/blocks-registration"},next:{title:"Block Structure Item",permalink:"/docs/legacy/v4/guides/blocks-structure-block-item"}},u={},d=[{value:"Blocks folder",id:"blocks-folder",level:3},{value:"assets",id:"assets",level:3},{value:"components",id:"components",level:3},{value:"custom",id:"custom",level:3},{value:"layout",id:"layout",level:3},{value:"wrapper",id:"wrapper",level:3},{value:"manifest.json",id:"manifestjson",level:3}],p={toc:d};function f(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/infinum/eightshift-frontend-libs/tree/v2.0.0/blocks/init/src/blocks/"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/source-eigthshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a",alt:"docs-source"}))),(0,a.kt)("p",null,"In order for the library to work and register blocks dynamically, a specific folder structure and naming must be followed."),(0,a.kt)("p",null,"Your folder structure should like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"theme-name\n|____ src\n| |____blocks\n| | |____assets\n| | |____components\n| | |____custom\n| | |____layout\n| | |____wrapper\n| | |____manifest.json\n")),(0,a.kt)("p",null,"In the case you need to override the default way styles and scripts are enqueued, you'd extend the ",(0,a.kt)("inlineCode",{parentName:"p"},"class-enqueue.php"),", and in the case you need to override or extend the default way blocks are behaving, you'd extend the ",(0,a.kt)("inlineCode",{parentName:"p"},"class-blocks.php")," inside your theme/plugin."),(0,a.kt)("h3",{id:"blocks-folder"},"Blocks folder"),(0,a.kt)("p",null,"This folder contains all the Block Editor blocks defined in your project. Each block is located in the ",(0,a.kt)("inlineCode",{parentName:"p"},"custom")," folder, and every component is located in the ",(0,a.kt)("inlineCode",{parentName:"p"},"components")," folder. Block Editor blocks are comprised of one or more smaller components."),(0,a.kt)("h3",{id:"assets"},"assets"),(0,a.kt)("p",null,"This folder contains all the additional javascript, images, fonts and style functionality for the blocks that you only need to use on the front-end and in the editor (admin)."),(0,a.kt)("h3",{id:"components"},"components"),(0,a.kt)("p",null,"This folder contains all the components that are shared across blocks. Components are not registered as blocks."),(0,a.kt)("h3",{id:"custom"},"custom"),(0,a.kt)("p",null,"This folder contains all the custom Block Editor blocks defined and used in your project."),(0,a.kt)("h3",{id:"layout"},"layout"),(0,a.kt)("p",null,"This folder contains all other layout elements such as header or footer. Each layout part goes in its own folder, and they contain PHP, JS and SCSS files."),(0,a.kt)("h3",{id:"wrapper"},"wrapper"),(0,a.kt)("p",null,"This folder contains a wrapper component that wraps all blocks with shared variables and gives blocks the ability to behave as a section."),(0,a.kt)("h3",{id:"manifestjson"},"manifest.json"),(0,a.kt)("p",null,"This file contains global settings for the project. It must contain ",(0,a.kt)("inlineCode",{parentName:"p"},"namespace")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"background")," keys. Everything else is optional. You can store data here that you intend to share across toolbars, components and blocks."),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "namespace": "eightshift-boilerplate", // Required.\n  "background": "#900000", // Required.\n  "maxCols": 12, // Optional.\n  "colors": { // Optional.\n    "primary": {\n      "name": "primary",\n      "color": "#C3151B"\n    },\n    "black": {\n      "name": "black",\n      "color": "#000000"\n    },\n    "white": {\n      "name": "white",\n      "color": "#FFFFFF"\n    }\n  }\n}\n')))}f.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),f=o,m=p["".concat(i,".").concat(f)]||p[f]||d[f]||a;return n?r.createElement(m,l(l({ref:t},u),{},{components:n})):r.createElement(m,l({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);