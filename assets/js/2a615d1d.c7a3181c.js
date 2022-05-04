"use strict";(self.webpackChunk_eightshift_docs=self.webpackChunk_eightshift_docs||[]).push([[920],{847:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return a},default:function(){return d},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return u}});var o=n(3117),r=n(102),s=(n(7294),n(3905)),c=["components"],i={id:"blocks-structure-component",title:"Component Structure"},a=void 0,l={unversionedId:"legacy/v4/guides/blocks-structure-component",id:"legacy/v4/guides/blocks-structure-component",title:"Component Structure",description:"docs-source",source:"@site/docs/legacy/v4/guides/blocks-structure-component.md",sourceDirName:"legacy/v4/guides",slug:"/legacy/v4/guides/blocks-structure-component",permalink:"/eightshift-docs/docs/legacy/v4/guides/blocks-structure-component",tags:[],version:"current",frontMatter:{id:"blocks-structure-component",title:"Component Structure"},sidebar:"docs",previous:{title:"Block Structure Item",permalink:"/eightshift-docs/docs/legacy/v4/guides/blocks-structure-block-item"},next:{title:"Manifest Structure",permalink:"/eightshift-docs/docs/legacy/v4/guides/blocks-structure-manifest"}},p={},u=[{value:"components",id:"components",level:3},{value:"component-name-editor.js",id:"component-name-editorjs",level:3},{value:"component-name-options.js",id:"component-name-optionsjs",level:3},{value:"component-name-toolbars.js",id:"component-name-toolbarsjs",level:3},{value:"component-name.php",id:"component-namephp",level:3},{value:"component-name-editor.scss",id:"component-name-editorscss",level:3},{value:"component-name-style.scss",id:"component-name-stylescss",level:3},{value:"Note on the component styles",id:"note-on-the-component-styles",level:4}],m={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,c);return(0,s.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/infinum/eightshift-frontend-libs/tree/develop/blocks/init/src/blocks/components/button"},(0,s.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/source-eigthshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a",alt:"docs-source"}))),(0,s.kt)("p",null,"Component naming and folder structure are not as strict as in the case of the block, but for the sake of consistency, it would be better to follow the same principles."),(0,s.kt)("p",null,"Basic component structure should like something this:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"|____component-name\n| |____components\n| | |____component-name-editor.js\n| | |____component-name-options.js\n| | |____component-name-toolbar.js\n| |____component-name.php\n| |____component-name-editor.scss\n| |____component-name-style.scss\n")),(0,s.kt)("p",null,"For example, you can check ",(0,s.kt)("a",{parentName:"p",href:"/storybook"},"storybook"),"."),(0,s.kt)("h3",{id:"components"},"components"),(0,s.kt)("p",null,"This folder contains all the javascript components that are used in the component. The folder can include ",(0,s.kt)("inlineCode",{parentName:"p"},"editor"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"options")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"toolbar")," component."),(0,s.kt)("h3",{id:"component-name-editorjs"},"component-name-editor.js"),(0,s.kt)("p",null,"JavaScript component for handling component editor. The component editor is what will be shown in the main editor screen."),(0,s.kt)("h3",{id:"component-name-optionsjs"},"component-name-options.js"),(0,s.kt)("p",null,"JavaScript component for handling component options. Component options are displayed on the right side of the Block Editor editor. You can set various things here - component color, element sizes (usually font sizes), and other features."),(0,s.kt)("h3",{id:"component-name-toolbarsjs"},"component-name-toolbars.js"),(0,s.kt)("p",null,"JavaScript component for handling component toolbars. Toolbars are displayed at the top of every component - things like font-weight, alignment, etc."),(0,s.kt)("h3",{id:"component-namephp"},"component-name.php"),(0,s.kt)("p",null,"This file contains the front-end part (the view) of the component, used in your project when the page renders. This file shouldn't contain any business logic, just presenting the passed attributes."),(0,s.kt)("h3",{id:"component-name-editorscss"},"component-name-editor.scss"),(0,s.kt)("p",null,"This file only contains the editor styles for the component. Editor styles are only applied to the editor screen in the admin."),(0,s.kt)("h3",{id:"component-name-stylescss"},"component-name-style.scss"),(0,s.kt)("p",null,"This file contains the editor and the front-end styles for the component. These styles will be applied to both the editor screen and your front end. This is just the way the core editor is set up. Each component has the ",(0,s.kt)("inlineCode",{parentName:"p"},"blockClass")," attribute that returns a block name with a block prefix, for example: ",(0,s.kt)("inlineCode",{parentName:"p"},".block-intro"),". You can/must use this naming convention when stying your block. Just like with any other SCSS components, the Block Editor block must also be standalone and easy to copy to different projects (reusable)."),(0,s.kt)("h4",{id:"note-on-the-component-styles"},"Note on the component styles"),(0,s.kt)("p",null,"Component styles should only style the inner component layout and styles such as font sizes, alignment, etc. Any layout placement should be handled either by the wrapper, or a layout."),(0,s.kt)("div",{class:"legacy-badge legacy-badge--v4"}))}d.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var a=o.createContext({}),l=function(e){var t=o.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(a.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,a=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=l(n),d=r,h=m["".concat(a,".").concat(d)]||m[d]||u[d]||s;return n?o.createElement(h,c(c({ref:t},p),{},{components:n})):o.createElement(h,c({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,c=new Array(s);c[0]=m;var i={};for(var a in t)hasOwnProperty.call(t,a)&&(i[a]=t[a]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<s;l++)c[l]=n[l];return o.createElement.apply(null,c)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);