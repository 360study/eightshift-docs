"use strict";(self.webpackChunk_eightshift_docs=self.webpackChunk_eightshift_docs||[]).push([[505],{573:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return h},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var a=n(3117),l=n(102),o=(n(7294),n(3905)),r=["components"],s={id:"writing-styles",title:"Writing Styles",sidebar_label:"Writing Styles"},i=void 0,c={unversionedId:"legacy/v5/basics/writing-styles",id:"legacy/v5/basics/writing-styles",title:"Writing Styles",description:"docs-source",source:"@site/docs/legacy/v5/basics/writing-styles.md",sourceDirName:"legacy/v5/basics",slug:"/legacy/v5/basics/writing-styles",permalink:"/docs/legacy/v5/basics/writing-styles",tags:[],version:"current",frontMatter:{id:"writing-styles",title:"Writing Styles",sidebar_label:"Writing Styles"},sidebar:"docs",previous:{title:"Global Settings",permalink:"/docs/legacy/v5/basics/global-settings"},next:{title:"Fonts",permalink:"/docs/legacy/v5/basics/fonts"}},u={},p=[{value:"Never use HEX color values in your files",id:"never-use-hex-color-values-in-your-files",level:3},{value:"Never use the actual color name as a variable name",id:"never-use-the-actual-color-name-as-a-variable-name",level:3},{value:"All external variables must go to a components map",id:"all-external-variables-must-go-to-a-components-map",level:3},{value:"Never mix multiple maps in a single component",id:"never-mix-multiple-maps-in-a-single-component",level:3},{value:"Where can I define global typography for all my blocks/components?",id:"where-can-i-define-global-typography-for-all-my-blockscomponents",level:3}],m={toc:p};function h(e){var t=e.components,n=(0,l.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/infinum/eightshift-frontend-libs/tree/4.0.0"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/source-eigthshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a",alt:"docs-source"}))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This chapter is only relevant in setups that don't use CSS variables. If you are using CSS variables please skip to the ",(0,o.kt)("a",{parentName:"p",href:"blocks-styles"},"Blocks Styles chapter")," chapter.")),(0,o.kt)("p",null,"Everyone says that writing styles is easy and that is usually doesn't require a lot of thinking. But, like everything in programming, if you don't think about it, the problems add up, and you end up with a headache."),(0,o.kt)("p",null,"Here are some of the recommendations that we use when writing our styles. It's also how we manage everything to be as modular as possible."),(0,o.kt)("h3",{id:"never-use-hex-color-values-in-your-files"},"Never use HEX color values in your files"),(0,o.kt)("p",null,"Like in Bootstrap or any other front-end framework, you should never use hex color values in multiple places. You should assign that hex value to a variable and use that variable all over. That way, if you ever need to change the color, simply change the value in one place and it will be consistently applied all over the project."),(0,o.kt)("p",null,"You can read more about defining your colors in the ",(0,o.kt)("a",{parentName:"p",href:"global-settings"},"global settings")," chapter."),(0,o.kt)("h3",{id:"never-use-the-actual-color-name-as-a-variable-name"},"Never use the actual color name as a variable name"),(0,o.kt)("p",null,"You can name your variables whatever you like, but we recommend that you never use the actual color name as a variable name. It would be best if you used some generic variable name."),(0,o.kt)("p",null,"For example, you can call blue color r2d2-color. With this approach, if your designer chooses to change the project's color scheme at any point, you only need to change one variable value and you're done."),(0,o.kt)("p",null,"We like to use ",(0,o.kt)("a",{parentName:"p",href:"https://chir.ag/projects/name-that-color"},"this site")," for our color names. Also, we recommend using simple names like:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Cornflower Blue will be ",(0,o.kt)("inlineCode",{parentName:"li"},"$base-corn-color")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"$base-flower-color")," name.")),(0,o.kt)("h3",{id:"all-external-variables-must-go-to-a-components-map"},"All external variables must go to a components map"),(0,o.kt)("p",null,"We use maps for a lot of stuff in our boilerplate. The reason is that:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"maps can contain multiple variables in one place,"),(0,o.kt)("li",{parentName:"ul"},"you don't need to write multiple variables at the top,"),(0,o.kt)("li",{parentName:"ul"},"you can nest functionalities,"),(0,o.kt)("li",{parentName:"ul"},"you can have multiple values with the same name and just change the top-level map,"),(0,o.kt)("li",{parentName:"ul"},"etc.")),(0,o.kt)("p",null,"We also have many helpers, which you can check in our ",(0,o.kt)("a",{parentName:"p",href:"/sass"},"SASS docs"),"."),(0,o.kt)("p",null,"In the component map, you should only add things that you will reuse in your component."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Examples:")),(0,o.kt)("p",null,"A simple variable in a map:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scss"},"$social-links: (\n  icon-color: global-settings(colors, black),\n);\n\n.social-links {\n  color: map-get-strict($social-links, icon-color);\n}\n")),(0,o.kt)("p",null,"Nested variables in a map:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scss"},"$social-links: (\n  colors: (\n    dark: global-settings(colors, black),\n    light: global-settings(colors, white),\n  ),\n  sizes: (\n    small: 10px,\n    big: 20px,\n  )\n);\n\n.social-links {\n  color: map-get-deep($social-links, colors, dark);\n\n  &--light {\n    color: map-get-deep($social-links, colors, light);\n  }\n\n  &__sizes {\n    font-size: map-get-deep($social-links, sizes, small);\n\n\n    &--big {\n      font-size: map-get-deep($social-links, sizes, big);\n    }\n  }\n}\n")),(0,o.kt)("h3",{id:"never-mix-multiple-maps-in-a-single-component"},"Never mix multiple maps in a single component"),(0,o.kt)("p",null,"You want all your styles to be contained to a single component and not dependent on external components. Sometimes this can't be avoided."),(0,o.kt)("p",null,"In that case, you should define a key in the component variable for the external map and define it like this:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example:")),(0,o.kt)("p",null,"External map in ",(0,o.kt)("inlineCode",{parentName:"p"},"assets/styles/parts/utils/_z-index.scss"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scss"},"$zindex: (\n  header: 100,\n  drawer: 99,\n  overlay: 98,\n);\n")),(0,o.kt)("p",null,"Your component:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scss"},"$header: (\n  index: map-get-strict($zindex, header),\n);\n\n.header {\n  z-index: map-get-strict($header, index);\n}\n")),(0,o.kt)("h3",{id:"where-can-i-define-global-typography-for-all-my-blockscomponents"},"Where can I define global typography for all my blocks/components?"),(0,o.kt)("p",null,"Well, nowhere. Try to move your way of thinking from Bootstrap or any other front-end framework where you define global typography in one place."),(0,o.kt)("p",null,"Why is that? Because we use component-based development and you should think in that way. Each component is responsible for its own styles."),(0,o.kt)("p",null,"You should define styles with all sizes, colors, and variations for the heading component and reuse that component wherever you need any kind of heading. The same applies to any other component. This is why you don't need global typography, styles, etc."),(0,o.kt)("p",null,"Global styles and variables are only used for things you want to share across components (that should be reduced to a minimum)."),(0,o.kt)("div",{class:"legacy-badge legacy-badge--v5"}))}h.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(n),h=l,d=m["".concat(i,".").concat(h)]||m[h]||p[h]||o;return n?a.createElement(d,r(r({ref:t},u),{},{components:n})):a.createElement(d,r({ref:t},u))}));function h(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,r=new Array(o);r[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:l,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);