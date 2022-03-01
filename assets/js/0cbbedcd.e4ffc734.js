"use strict";(self.webpackChunk_eightshift_docs=self.webpackChunk_eightshift_docs||[]).push([[6854],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(n),f=o,h=p["".concat(c,".").concat(f)]||p[f]||d[f]||s;return n?r.createElement(h,a(a({ref:t},u),{},{components:n})):r.createElement(h,a({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var l=2;l<s;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3509:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},assets:function(){return u},toc:function(){return d},default:function(){return f}});var r=n(7462),o=n(3366),s=(n(7294),n(3905)),a=["components"],i={id:"docs-sass",title:"Sass"},c=void 0,l={unversionedId:"legacy/v4/advanced/docs-sass",id:"legacy/v4/advanced/docs-sass",title:"Sass",description:"For years we have collected a list of useful SASS mixins, functions, and all other stuff that you can use in a project. You don't need to have all this in your project; check out our documentation and import it from Eightshift Frontend Libs.",source:"@site/docs/legacy/v4/advanced/sass-docs.md",sourceDirName:"legacy/v4/advanced",slug:"/legacy/v4/advanced/docs-sass",permalink:"/eightshift-docs/docs/legacy/v4/advanced/docs-sass",tags:[],version:"current",frontMatter:{id:"docs-sass",title:"Sass"},sidebar:"docs",previous:{title:"Storybook",permalink:"/eightshift-docs/docs/legacy/v4/advanced/docs-storybook"},next:{title:"Webpack",permalink:"/eightshift-docs/docs/legacy/v4/advanced/webpack"}},u={},d=[{value:"Default usage",id:"default-usage",level:2},{value:"Not using Webpack Build",id:"not-using-webpack-build",level:2}],p={toc:d};function f(e){var t=e.components,n=(0,o.Z)(e,a);return(0,s.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"For years we have collected a list of useful SASS mixins, functions, and all other stuff that you can use in a project. You don't need to have all this in your project; check out our documentation and import it from Eightshift Frontend Libs."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Visit ",(0,s.kt)("a",{parentName:"strong",href:"/eightshift-docs/sass"},"SassDocs")," for more details.")),(0,s.kt)("h2",{id:"default-usage"},"Default usage"),(0,s.kt)("p",null,"Sass mixing, functions, helpers are located in ",(0,s.kt)("inlineCode",{parentName:"p"},"node_modules/@eighshift/frontent-libs/styles/scss/eightshift-frontend-libs.scss")," file. If you are using our webpack build then you are all set, and you can use it by importing it to your project like this:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-scss"},"@import 'EighshiftFrontendLibs';\n")),(0,s.kt)("h2",{id:"not-using-webpack-build"},"Not using Webpack Build"),(0,s.kt)("p",null,"To be able to use ",(0,s.kt)("inlineCode",{parentName:"p"},"EighshiftFrontendLibs")," as a shorthand, we have provided and ",(0,s.kt)("inlineCode",{parentName:"p"},"alias")," in our webpack build under the ",(0,s.kt)("inlineCode",{parentName:"p"},"resolve")," object key."),(0,s.kt)("p",null,"If you don't use our full build for some reason and want only to use Eightshift Frontend Libs you can provide this in your webpack build:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"resolve: {\n  alias: {\n    EighshiftFrontendLibs: path.resolve('node_modules', '@eightshift', 'frontend-libs', 'styles', 'scss', 'eightshift-frontend-libs.scss'),\n  }\n}\n")),(0,s.kt)("p",null,"and then importing it like this:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-scss"},"@import 'EighshiftFrontendLibs';\n")),(0,s.kt)("p",null,"or you can import it directly like this, but be careful where your node_modules folder is located:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-scss"},"@import 'node_modules/@eightshift/frontend-libs/styles/scss/eightshift-frontend-libs.scss';\n")),(0,s.kt)("div",{class:"legacy-badge legacy-badge--v4"}))}f.isMDXComponent=!0}}]);