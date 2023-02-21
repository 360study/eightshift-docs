"use strict";(self.webpackChunk_eightshift_docs=self.webpackChunk_eightshift_docs||[]).push([[6007],{50915:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return u}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),s=["components"],a={id:"dynamic-import",title:"Dynamic Import"},l=void 0,c={unversionedId:"basics/dynamic-import",id:"basics/dynamic-import",title:"Dynamic Import",description:"docs-source",source:"@site/docs/basics/dynamic-import.md",sourceDirName:"basics",slug:"/basics/dynamic-import",permalink:"/docs/basics/dynamic-import",draft:!1,tags:[],version:"current",frontMatter:{id:"dynamic-import",title:"Dynamic Import"},sidebar:"docs",previous:{title:"Browsersync",permalink:"/docs/basics/browser-sync"},next:{title:"Blocks",permalink:"/docs/basics/blocks"}},p={},u=[{value:"How does it work?",id:"how-does-it-work",level:2},{value:"Example",id:"example",level:2},{value:"index.js",id:"indexjs",level:3},{value:"carousel-slider.js",id:"carousel-sliderjs",level:3}],m={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/infinum/eightshift-frontend-libs"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/source-eightshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a",alt:"docs-source"}))),(0,i.kt)("p",null,"As JavaScript code runs on the visitor's device, it's crucial that it's as fast and optimized as possible. A powerful tool from Webpack called ",(0,i.kt)("a",{parentName:"p",href:"https://webpack.js.org/guides/code-splitting/#dynamic-imports"},"dynamic imports")," helps with that."),(0,i.kt)("p",null,"Dynamic imports provide us the ability to load our JavaScript code only when it's used. "),(0,i.kt)("p",null,"By writing all JavaScript code using dynamic imports, we can reap significant benefits:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"optimize loading time"),(0,i.kt)("li",{parentName:"ul"},"reduce the size of finished bundled JavaScript code"),(0,i.kt)("li",{parentName:"ul"},"have websites that are fast, which can positively impact your SEO rating")),(0,i.kt)("h2",{id:"how-does-it-work"},"How does it work?"),(0,i.kt)("p",null,"In a nutshell, you load all your code using JavaScript promises. Webpack splits all these promises into separate file chunks. Once the condition to resolve the promise is set (generally, if a selector is present in the DOM), Webpack automatically injects your chunk in the DOM and loads it up. This is why you will see a bunch of smaller files (",(0,i.kt)("inlineCode",{parentName:"p"},"0.js"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"1.js"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"2.js"),", etc) in your public folder instead of a single large file."),(0,i.kt)("p",null,"You don't need to think about this. Webpack just does it for you."),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"For example, let's make a carousel. An Eightshift convention is to write JavaScript code using classes, so we'll provide an example for that. However, you can use this approach with functions as well."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"We have two files:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"index.js")," - the main entry point for your JavaScript feature."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"className.js")," - class with your JavaScript features that you can reuse.")),(0,i.kt)("h3",{id:"indexjs"},"index.js"),(0,i.kt)("p",null,"This is a version where you have multiple instances of a feature on one page. If you are creating a feature for your block/component, you'll use something along these lines."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import domReady from '@wordpress/dom-ready';\nimport { blockJsClass, blockName } from '../manifest.json';\n\n// Use this helper to make sure this code is executed when everything in DOM is set.\ndomReady(() => {\n\n  // Provide selectors to check.\n  const selector = `.${blockJsClass}`;\n  const elements = document.querySelectorAll(selector);\n\n  // This is the important part - if this condition is true, this promise will resolve and your chunk will be loaded in the DOM.\n  if (!elements.length) {\n    return;\n  }\n\n  // Normally load and resolve a promise on file import.\n  const { CarouselSlider } = await import('./carousel-slider');\n\n  // Loop possible multiple iterations.\n  [...elements].forEach((element) => {\n    const carouselSlider = new CarouselSlider({\n      element,\n      nextElement: `${selector}-next-arrow`,\n      prevElement: `${selector}-prev-arrow`,\n    });\n\n    // Run and init function that starts everything in your class.\n    carouselSlider.init();\n  });\n});\n")),(0,i.kt)("p",null,"If you are sure you will have only one instance of this feature on one-page, you can use the following code in your ",(0,i.kt)("inlineCode",{parentName:"p"},"index.js")," file."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import domReady from '@wordpress/dom-ready';\nimport { blockJsClass, blockName } from '../manifest.json';\n\n// Use this helper to make sure this code is executed when everything in DOM is set.\ndomReady(() => {\n\n  // Provide selectors to check.\n  const selector = `.${blockJsClass}`;\n  const element = document.querySelector(selector);\n\n  // This is the important part. Because of it, your code will only be imported when there's an element on the page that uses it.\n  if (!element) {\n    return;\n  }\n\n  // Normally load and resolve a promise on file import.\n  const { CarouselSlider } = await import('./carousel-slider');\n\n  const carouselSlider = new CarouselSlider({\n    element,\n    nextElement: `${selector}-next-arrow`,\n    prevElement: `${selector}-prev-arrow`,\n  });\n\n  // Run and init function that starts everything in your class.\n  carouselSlider.init();\n});\n")),(0,i.kt)("h3",{id:"carousel-sliderjs"},"carousel-slider.js"),(0,i.kt)("p",null,"This is a normal class with some JavaScript functionality."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import Swiper from 'swiper';\n\nexport class CarouselSlider {\n  constructor(options) {\n    this.element = options.element;\n    this.nextElement = options.nextElement;\n    this.prevElement = options.prevElement;\n  }\n\n  init() {\n    new Swiper(\n      this.element,\n      {\n        // ...\n        navigation: {\n          nextEl: this.nextElement,\n          prevEl: this.prevElement,\n        },\n        // ...\n      }\n    );\n  }\n}\n")))}d.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(f,s(s({ref:t},p),{},{components:n})):r.createElement(f,s({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=m;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var c=2;c<i;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);