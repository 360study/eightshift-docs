"use strict";(self.webpackChunk_eightshift_docs=self.webpackChunk_eightshift_docs||[]).push([[4799],{2559:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return u}});var o=n(3117),r=n(102),a=(n(7294),n(3905)),l=["components"],c={id:"components-color-palette",title:"Color Palette"},i=void 0,s={unversionedId:"legacy/v4/advanced/components-color-palette",id:"legacy/v4/advanced/components-color-palette",title:"Color Palette",description:"docs-source",source:"@site/docs/legacy/v4/advanced/components-color-palette.md",sourceDirName:"legacy/v4/advanced",slug:"/legacy/v4/advanced/components-color-palette",permalink:"/eightshift-docs/docs/legacy/v4/advanced/components-color-palette",tags:[],version:"current",frontMatter:{id:"components-color-palette",title:"Color Palette"},sidebar:"docs",previous:{title:"Error Logger",permalink:"/eightshift-docs/docs/legacy/v4/advanced/helpers-error-logger-helpers"},next:{title:"Heading Level",permalink:"/eightshift-docs/docs/legacy/v4/advanced/components-heading-level"}},p={},u=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:3}],d={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/infinum/eightshift-frontend-libs/blob/develop/components/color-palette-custom/color-palette-custom.js"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/source-eigthshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a",alt:"docs-source"}))),(0,a.kt)("p",null,"This is a custom React component that renders a custom color picker exactly the same as the native block editor component, but on the ",(0,a.kt)("inlineCode",{parentName:"p"},"save")," method in the attributes, we save the color name and not the color hex value."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import { ColorPaletteCustom } from \'EightshiftComponentColorPalette\';\n\n{onChangeStyleColor &&\n  <ColorPaletteCustom\n    label={__(\'Heading Color\', \'eightshift-boilerplate\')}\n    colors={[\n      {\n        "name": "scarlet",\n        "color": "#D8262C"\n      },\n      {\n        "name": "guard",\n        "color": "#C00100"\n      },\n    ]}\n    value={styleColor}\n    onChange={onChangeStyleColor}\n  />\n}\n')),(0,a.kt)("h3",{id:"options"},"Options"),(0,a.kt)("p",null,"All the options are the same as in the native block editor component that you can see ",(0,a.kt)("a",{parentName:"p",href:"https://developer.wordpress.org/block-editor/components/color-palette/"},"here"),"."),(0,a.kt)("div",{class:"legacy-badge legacy-badge--v4"}))}m.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=o.createContext({}),s=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return o.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,f=d["".concat(i,".").concat(m)]||d[m]||u[m]||a;return n?o.createElement(f,l(l({ref:t},p),{},{components:n})):o.createElement(f,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var s=2;s<a;s++)l[s]=n[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);