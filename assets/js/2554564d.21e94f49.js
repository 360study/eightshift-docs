"use strict";(self.webpackChunk_eightshift_docs=self.webpackChunk_eightshift_docs||[]).push([[7019],{22191:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],l={id:"blocks-get-actions-helper",title:"GetActions Helper"},s=void 0,u={unversionedId:"legacy/v4/guides/blocks-get-actions-helper",id:"legacy/v4/guides/blocks-get-actions-helper",title:"GetActions Helper",description:"docs-source",source:"@site/docs/legacy/v4/guides/blocks-get-actions-helper.md",sourceDirName:"legacy/v4/guides",slug:"/legacy/v4/guides/blocks-get-actions-helper",permalink:"/docs/legacy/v4/guides/blocks-get-actions-helper",draft:!1,tags:[],version:"current",frontMatter:{id:"blocks-get-actions-helper",title:"GetActions Helper"},sidebar:"docs",previous:{title:"Render Block View Helper",permalink:"/docs/legacy/v4/guides/blocks-render-block-view-helper"},next:{title:"Filter Attributes Override",permalink:"/docs/legacy/v4/guides/blocks-filter-block-attributes-override"}},c={},p=[{value:"Default Attribute",id:"default-attribute",level:2},{value:"Usage",id:"usage",level:3},{value:"Media Attribute",id:"media-attribute",level:2},{value:"Usage",id:"usage-1",level:3},{value:"Object/Array Attribute",id:"objectarray-attribute",level:2},{value:"Usage",id:"usage-2",level:3}],d={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/infinum/eightshift-frontend-libs/tree/v2.0.0/scripts/get-actions.js"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/source-eigthshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a",alt:"docs-source"}))),(0,i.kt)("p",null,"This helper will create attributes actions from blocks ",(0,i.kt)("inlineCode",{parentName:"p"},"manifest.json"),".\nActions are passed in child components to update props on an event (",(0,i.kt)("inlineCode",{parentName:"p"},"onChange"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"onClick"),", etc.)."),(0,i.kt)("h2",{id:"default-attribute"},"Default Attribute"),(0,i.kt)("p",null,"Default function output is ",(0,i.kt)("inlineCode",{parentName:"p"},"onChange")," + attribute name.\nExample: ",(0,i.kt)("inlineCode",{parentName:"p"},"onChangeContent"),"."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"manifest.json")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "attributes": {\n    "content": {\n      "type": "string"\n    },\n    "styleSize": {\n      "type": "string",\n      "default": "default"\n    }\n  }\n}\n')),(0,i.kt)("h3",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { getActions } from 'EighshiftBlocksGetActions';\nimport manifest from './manifest.json';\n\nconst actions = getActions(props, manifest);\n")),(0,i.kt)("p",null,"Output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const actions = {\n  onChangeContent: (value) => {\n    setAttributes({\n      content: value,\n    });\n  },\n  onChangeStyleSize: (value) => {\n    setAttributes({\n      styleSize: value,\n    });\n  },\n};\n")),(0,i.kt)("h2",{id:"media-attribute"},"Media Attribute"),(0,i.kt)("p",null,"If the attribute needs to save multiple values at the same time for media (images, video, etc.). ",(0,i.kt)("inlineCode",{parentName:"p"},"ID")," value is used on the front-end using the PHP methods to fetch images, and ",(0,i.kt)("inlineCode",{parentName:"p"},"URL")," is used in the editor to provide image preview."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"manifest.json")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "attributes": {\n    "media": {\n      "type": "object",\n      "default": {\n        "id": 0,\n        "url": "",\n        "title": ""\n      },\n      "items": {\n        "type": "object"\n      },\n      "mediaAction": true\n    },\n  }\n}\n')),(0,i.kt)("h3",{id:"usage-1"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { getActions } from 'EighshiftBlocksGetActions';\nimport manifest from './manifest.json';\n\nconst actions = getActions(props, manifest);\n")),(0,i.kt)("p",null,"Output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'const actions = {\n  onChangeMediaContent: (value) => {\n    setAttributes({\n      media: {\n        id: 0,\n        url: "",\n        title: "",\n      },\n    });\n  },\n};\n')),(0,i.kt)("h2",{id:"objectarray-attribute"},"Object/Array Attribute"),(0,i.kt)("p",null,"If attribute needs to save multiple values at the same time, generally used for arrays and objects."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"manifest.json")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "attributes": {\n    "heading": {\n      "type": "object",\n      "default": {\n        "content": "",\n        "level": 2,\n        "styleAlign": "left",\n      },\n      "items": {\n        "type": "object"\n      },\n      "multipleProps": true\n    }\n  }\n}\n')),(0,i.kt)("h3",{id:"usage-2"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { getActions } from 'EighshiftBlocksGetActions';\nimport manifest from './manifest.json';\n\nconst actions = getActions(props, manifest);\n")),(0,i.kt)("p",null,"Output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const actions = {\n  onChangeHeadingContent: (value) => {\n    setAttributes({\n      content: value,\n    });\n  },\n  onChangeHeadingLevel: (value) => {\n    setAttributes({\n      level: value,\n    });\n  },\n  onChangeHeadingStyleAlign: (value) => {\n    setAttributes({\n      styleAlign: value,\n    });\n  },\n};\n")))}m.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,g=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(g,o(o({ref:t},c),{},{components:n})):r.createElement(g,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);