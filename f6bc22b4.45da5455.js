(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{153:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return p}));var o=n(1),r=n(6),a=(n(0),n(158)),c={id:"components-color-palette",title:"Color Palette"},l={id:"advanced/components-color-palette",title:"Color Palette",description:"[![docs-source](https://img.shields.io/badge/source-eigthshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a)](https://github.com/infinum/eightshift-frontend-libs/blob/develop/components/color-palette-custom/color-palette-custom.js)",source:"@site/docs/advanced/components-color-palette.md",permalink:"/eightshift-docs/docs/advanced/components-color-palette",sidebar:"docs",previous:{title:"Error Logger",permalink:"/eightshift-docs/docs/advanced/helpers-error-logger-helpers"},next:{title:"Heading Level",permalink:"/eightshift-docs/docs/advanced/components-heading-level"}},i=[{value:"Usage",id:"usage",children:[{value:"Options",id:"options",children:[]}]}],s={rightToc:i};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/infinum/eightshift-frontend-libs/blob/develop/components/color-palette-custom/color-palette-custom.js"}),Object(a.b)("img",Object(o.a)({parentName:"a"},{src:"https://img.shields.io/badge/source-eigthshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a",alt:"docs-source"})))),Object(a.b)("p",null,"This is a custom React component that renders a custom color picker exactly the same as the native block editor component, but on the ",Object(a.b)("inlineCode",{parentName:"p"},"save")," method in the attributes, we save the color name and not the color hex value."),Object(a.b)("h2",{id:"usage"},"Usage"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),'import { ColorPaletteCustom } from \'EightshiftComponentColorPalette\';\n\n{onChangeStyleColor &&\n  <ColorPaletteCustom\n    label={__(\'Heading Color\', \'eightshift-boilerplate\')}\n    colors={[\n      {\n        "name": "scarlet",\n        "color": "#D8262C"\n      },\n      {\n        "name": "guard",\n        "color": "#C00100"\n      },\n    ]}\n    value={styleColor}\n    onChange={onChangeStyleColor}\n  />\n}\n')),Object(a.b)("h3",{id:"options"},"Options"),Object(a.b)("p",null,"All the options are the same as in the native block editor component that you can see ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://developer.wordpress.org/block-editor/components/color-palette/"}),"here"),"."))}p.isMDXComponent=!0},158:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},u=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=Object(o.forwardRef)((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(n),b=o,m=u["".concat(c,".").concat(b)]||u[b]||d[b]||a;return n?r.a.createElement(m,l({ref:t},s,{components:n})):r.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=b;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,c[1]=l;for(var s=2;s<a;s++)c[s]=n[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);