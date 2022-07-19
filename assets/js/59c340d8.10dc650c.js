"use strict";(self.webpackChunk_eightshift_docs=self.webpackChunk_eightshift_docs||[]).push([[3304],{3094:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return b},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var r=n(3117),o=n(102),a=(n(7294),n(3905)),i=["components"],s={id:"blocks-attributes",title:"Attributes"},l=void 0,c={unversionedId:"legacy/v7/basics/blocks-attributes",id:"legacy/v7/basics/blocks-attributes",title:"Attributes",description:"docs-source",source:"@site/docs/legacy/v7/basics/blocks-attributes.md",sourceDirName:"legacy/v7/basics",slug:"/legacy/v7/basics/blocks-attributes",permalink:"/eightshift-docs/docs/legacy/v7/basics/blocks-attributes",tags:[],version:"current",frontMatter:{id:"blocks-attributes",title:"Attributes"},sidebar:"docs",previous:{title:"Component Manifest",permalink:"/eightshift-docs/docs/legacy/v7/basics/blocks-component-manifest"},next:{title:"Component in a Block",permalink:"/eightshift-docs/docs/legacy/v7/basics/blocks-component-in-block"}},u={},p=[{value:"Structure",id:"structure",level:3}],d={toc:p};function b(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/infinum/eightshift-frontend-libs/tree/develop/blocks/init/src/blocks/"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/source-eightshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a",alt:"docs-source"}))),(0,a.kt)("p",null,"If you were to reference the native ",(0,a.kt)("a",{parentName:"p",href:"https://developer.wordpress.org/block-editor/developers/block-api/block-attributes/"},"WordPress documentation")," about attributes in blocks, you can see that they support different types of attributes. In this chapter, we want to point out that you should avoid using objects for your attributes."),(0,a.kt)("p",null,"The reason for this is that you can't control what key of that object is stored in the database once the attribute changes. When you change one key, the ",(0,a.kt)("inlineCode",{parentName:"p"},"setAttributes")," method will store the entire object in the database and you'll lose the best feature of block editor - the default attributes."),(0,a.kt)("p",null,"You can also look at this from the Reacts perspective: setting the entire object every time the key changes is bad for performance."),(0,a.kt)("p",null,"Yes, you can use objects, but we recommend using them only when you want to store multiple keys simultaneously."),(0,a.kt)("h3",{id:"structure"},"Structure"),(0,a.kt)("p",null,"All attributes in the block/component must begin with the exact same prefix as it is defined in the ",(0,a.kt)("inlineCode",{parentName:"p"},"blockName")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"componentName"),". The reason behind this naming standard is that our helpers can automatically resolve and know what prefix to use when renaming the component name in the dependency tree. For more details about this feature please check ",(0,a.kt)("a",{parentName:"p",href:"blocks-component-in-block"},"this chapter"),"."),(0,a.kt)("p",null,"Block example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "blockName": "heading",\n  "attributes": {\n    "headingContent": {\n      "type": "string"\n    },\n    "headingLevel": {\n      "type": "integer",\n      "default": 2\n    }\n  }\n}\n')),(0,a.kt)("p",null,"or"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "blockName": "intro",\n  "attributes": {\n    "introContent": {\n      "type": "string"\n    },\n    "introLevel": {\n      "type": "integer",\n      "default": 2\n    }\n  }\n}\n')),(0,a.kt)("p",null,"Component example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "componentName": "heading",\n  "attributes": {\n    "headingContent": {\n      "type": "string"\n    },\n    "headingLevel": {\n      "type": "integer",\n      "default": 2\n    }\n  }\n}\n')),(0,a.kt)("p",null,"or"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "componentName": "description",\n  "attributes": {\n    "descriptionContent": {\n      "type": "string"\n    },\n    "descriptionLevel": {\n      "type": "integer",\n      "default": 2\n    }\n  }\n}\n')),(0,a.kt)("p",null,"If you have a block/component that contains multiple words you should name it with a dash just like the block/component folder name, but the attributes must follow the ",(0,a.kt)("inlineCode",{parentName:"p"},"camelCase")," naming standard like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "componentName": "intro-heading",\n  "attributes": {\n    "introHeadingContent": {\n      "type": "string"\n    },\n    "introHeadingLevel": {\n      "type": "integer",\n      "default": 2\n    }\n  }\n}\n')))}b.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return b}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),b=o,m=d["".concat(l,".").concat(b)]||d[b]||p[b]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);