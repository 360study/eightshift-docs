"use strict";(self.webpackChunk_eightshift_docs=self.webpackChunk_eightshift_docs||[]).push([[5008],{2660:function(e,t,l){l.r(t),l.d(t,{assets:function(){return p},contentTitle:function(){return a},default:function(){return h},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var o=l(3117),r=l(102),i=(l(7294),l(3905)),n=["components"],s={id:"helpers-javascript",title:"JavaScript"},a=void 0,c={unversionedId:"legacy/v7/basics/helpers-javascript",id:"legacy/v7/basics/helpers-javascript",title:"JavaScript",description:"docs-source",source:"@site/docs/legacy/v7/basics/helpers-javascript.md",sourceDirName:"legacy/v7/basics",slug:"/legacy/v7/basics/helpers-javascript",permalink:"/docs/legacy/v7/basics/helpers-javascript",tags:[],version:"current",frontMatter:{id:"helpers-javascript",title:"JavaScript"},sidebar:"docs",previous:{title:"Helpers",permalink:"/docs/legacy/v7/basics/helpers"},next:{title:"Scss",permalink:"/docs/legacy/v7/basics/helpers-scss"}},p={},u=[{value:"icons",id:"icons",level:3},{value:"illustrations",id:"illustrations",level:3},{value:"blockIcons",id:"blockicons",level:3},{value:"getActions",id:"getactions",level:3},{value:"getOption",id:"getoption",level:3},{value:"getOptionColors",id:"getoptioncolors",level:3},{value:"getOptions",id:"getoptions",level:3},{value:"getPaletteColors",id:"getpalettecolors",level:3},{value:"inserter",id:"inserter",level:3},{value:"outputCssVariablesGlobal",id:"outputcssvariablesglobal",level:3},{value:"outputCssVariables",id:"outputcssvariables",level:3},{value:"getUnique",id:"getunique",level:3},{value:"overrideInnerBlockAttributes",id:"overrideinnerblockattributes",level:3},{value:"overrideInnerBlockSimpleWrapperAttributes",id:"overrideinnerblocksimplewrapperattributes",level:3},{value:"pasteInto",id:"pasteinto",level:3},{value:"props",id:"props",level:3},{value:"getAttributes",id:"getattributes",level:3},{value:"getExample",id:"getexample",level:3},{value:"registerBlocks",id:"registerblocks",level:3},{value:"registerVariations",id:"registervariations",level:3},{value:"ucfirst",id:"ucfirst",level:3},{value:"camelize",id:"camelize",level:3},{value:"checkAttr",id:"checkattr",level:3},{value:"checkAttrResponsive",id:"checkattrresponsive",level:3},{value:"cookies",id:"cookies",level:3},{value:"debounce",id:"debounce",level:3},{value:"devices",id:"devices",level:3},{value:"dynamicImport",id:"dynamicimport",level:3},{value:"elementChildrenHeight",id:"elementchildrenheight",level:3},{value:"escape-string",id:"escape-string",level:3},{value:"navigator",id:"navigator",level:3},{value:"responsiveSelectors",id:"responsiveselectors",level:3},{value:"selector",id:"selector",level:3},{value:"truncateMiddle",id:"truncatemiddle",level:3},{value:"yoastSeo",id:"yoastseo",level:3},{value:"blockDetails",id:"blockdetails",level:3},{value:"Gutenberg",id:"gutenberg",level:3},{value:"storybookDefaultMocksCategories",id:"storybookdefaultmockscategories",level:3},{value:"storybookDefaultMocksColorPalette",id:"storybookdefaultmockscolorpalette",level:3},{value:"storybookWindowObjects,",id:"storybookwindowobjects",level:3},{value:"storybookWpStyles",id:"storybookwpstyles",level:3}],d={toc:u};function h(e){var t=e.components,l=(0,r.Z)(e,n);return(0,i.kt)("wrapper",(0,o.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/infinum/eightshift-frontend-libs/tree/6.0.0/blocks/init/src/blocks/"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/source-eightshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a",alt:"docs-source"}))),(0,i.kt)("p",null,"All JavaScript helpers can be imported from the ",(0,i.kt)("inlineCode",{parentName:"p"},"@eightshift/frontend-libs/scripts")," folder, so you don't need to think about the internal folder structure of Eightshift Frontend Libs. If you want multiple functions imported just concatenate them in the import like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import {\n    camelize,\n    checkAttr,\n    props,\n    ...\n} from '@eightshift/frontend-libs/scripts';\n")),(0,i.kt)("h1",{id:"editor-helpers"},(0,i.kt)("a",{parentName:"h1",href:"https://github.com/infinum/eightshift-frontend-libs/tree/6.0.0/scripts/editor"},"Editor helpers")),(0,i.kt)("p",null,"All of these helpers are generally only used in the Block Editor."),(0,i.kt)("h3",{id:"icons"},"icons"),(0,i.kt)("p",null,"All UI icons."),(0,i.kt)("h3",{id:"illustrations"},"illustrations"),(0,i.kt)("p",null,"Illustrations for helper modals."),(0,i.kt)("h3",{id:"blockicons"},"blockIcons"),(0,i.kt)("p",null,"Block icons, primarily used in block manifests."),(0,i.kt)("h3",{id:"getactions"},"getActions"),(0,i.kt)("p",null,"Create attributes actions from blocks manifest.json.\nThis helper is deprecated and should not be used anymore."),(0,i.kt)("h3",{id:"getoption"},"getOption"),(0,i.kt)("p",null,"Provides ability to override component options from the parent block/component."),(0,i.kt)("h3",{id:"getoptioncolors"},"getOptionColors"),(0,i.kt)("p",null,"Use this hook to filter the global colors out of the component or block manifest.\nThis function is deprecated and getOption should be used."),(0,i.kt)("h3",{id:"getoptions"},"getOptions"),(0,i.kt)("p",null,"Combines two objects of options, one from current component and the other from the parent component."),(0,i.kt)("h3",{id:"getpalettecolors"},"getPaletteColors"),(0,i.kt)("p",null,"Use this hook to read editor-color-palette colors directly from WP built in store."),(0,i.kt)("h3",{id:"inserter"},"inserter"),(0,i.kt)("p",null,"Development inserter made to insert one or multiple blocks in the dom using console."),(0,i.kt)("h3",{id:"outputcssvariablesglobal"},"outputCssVariablesGlobal"),(0,i.kt)("p",null,"Get Global manifest.json and return global variables as CSS variables."),(0,i.kt)("h3",{id:"outputcssvariables"},"outputCssVariables"),(0,i.kt)("p",null,"Get component/block options and process them in CSS variables."),(0,i.kt)("h3",{id:"getunique"},"getUnique"),(0,i.kt)("p",null,"Returns a unique ID generally used for css variables."),(0,i.kt)("h3",{id:"overrideinnerblockattributes"},"overrideInnerBlockAttributes"),(0,i.kt)("p",null,"Used to set attributes on all innerBlocks. This value will be stored in the block editor store and set to a block."),(0,i.kt)("h3",{id:"overrideinnerblocksimplewrapperattributes"},"overrideInnerBlockSimpleWrapperAttributes"),(0,i.kt)("p",null,"Used to set attributes on all innerBlocks preset only for simple wrapper setup. This value will be stored in the block editor store and set to a block."),(0,i.kt)("h3",{id:"pasteinto"},"pasteInto"),(0,i.kt)("p",null,"Paste event handler."),(0,i.kt)("h3",{id:"props"},"props"),(0,i.kt)("p",null,"Output only attributes that are used in the component and remove everything else."),(0,i.kt)("h3",{id:"getattributes"},"getAttributes"),(0,i.kt)("p",null,'Get Block attributes combined in one: "shared, global, wrapper, components, block".'),(0,i.kt)("h3",{id:"getexample"},"getExample"),(0,i.kt)("p",null,'Get Block example attributes combined in one: "components and block".'),(0,i.kt)("h3",{id:"registerblocks"},"registerBlocks"),(0,i.kt)("p",null,"Register all Block Editor blocks using WP ",(0,i.kt)("inlineCode",{parentName:"p"},"registerBlockType")," method."),(0,i.kt)("h3",{id:"registervariations"},"registerVariations"),(0,i.kt)("p",null,"Register all Variations Editor blocks using WP ",(0,i.kt)("inlineCode",{parentName:"p"},"registerBlockVariation")," method."),(0,i.kt)("h3",{id:"ucfirst"},"ucfirst"),(0,i.kt)("p",null,"Convert the first letter of a string to uppercase."),(0,i.kt)("h1",{id:"general-helpers"},(0,i.kt)("a",{parentName:"h1",href:"https://github.com/infinum/eightshift-frontend-libs/tree/6.0.0/scripts/helpers"},"General helpers")),(0,i.kt)("p",null,"These are all helpers generally used anywhere."),(0,i.kt)("h3",{id:"camelize"},"camelize"),(0,i.kt)("p",null,"Returns a camelCase-formatted string."),(0,i.kt)("h3",{id:"checkattr"},"checkAttr"),(0,i.kt)("p",null,"Check if attribute exist in attributes list and add default value if not."),(0,i.kt)("h3",{id:"checkattrresponsive"},"checkAttrResponsive"),(0,i.kt)("p",null,"Map and check attributes for responsive object."),(0,i.kt)("h3",{id:"cookies"},"cookies"),(0,i.kt)("p",null,"Helper to set and unset cookies."),(0,i.kt)("h3",{id:"debounce"},"debounce"),(0,i.kt)("p",null,"Debounces the provided function."),(0,i.kt)("h3",{id:"devices"},"devices"),(0,i.kt)("p",null,"Detect a certain device, so specific functionality can be implemented for it."),(0,i.kt)("h3",{id:"dynamicimport"},"dynamicImport"),(0,i.kt)("p",null,"Loop all paths required using require.context method."),(0,i.kt)("h3",{id:"elementchildrenheight"},"elementChildrenHeight"),(0,i.kt)("p",null,"Returns height of the element measured by height of its children."),(0,i.kt)("h3",{id:"escape-string"},"escape-string"),(0,i.kt)("p",null,"Takes the provided string and removes special characters"),(0,i.kt)("h3",{id:"navigator"},"navigator"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Navigator.vibrate()")," method pulses the vibration hardware on the device, if such hardware exists."),(0,i.kt)("h3",{id:"responsiveselectors"},"responsiveSelectors"),(0,i.kt)("p",null,"Create responsive selectors used for responsive attributes."),(0,i.kt)("h3",{id:"selector"},"selector"),(0,i.kt)("p",null,"Returns BEM selector for HTML class and checks if the condition part is set."),(0,i.kt)("h3",{id:"truncatemiddle"},"truncateMiddle"),(0,i.kt)("p",null,"Slices the string and inputs the provided separator after the specified characters."),(0,i.kt)("h1",{id:"plugins-helpers"},(0,i.kt)("a",{parentName:"h1",href:"https://github.com/infinum/eightshift-frontend-libs/tree/6.0.0/scripts/plugins"},"Plugins helpers")),(0,i.kt)("p",null,"These are all helpers generally only in specific plugins."),(0,i.kt)("h3",{id:"yoastseo"},"yoastSeo"),(0,i.kt)("p",null,'This helper will search all blocks and components manifests and find attributes that have "seo": "true" key.\nThis key will be added in to the content and proceed by the YoastSeo Analysis plugin.'),(0,i.kt)("h1",{id:"storybook-helpers"},(0,i.kt)("a",{parentName:"h1",href:"https://github.com/infinum/eightshift-frontend-libs/tree/6.0.0/scripts/storybook"},"Storybook helpers")),(0,i.kt)("p",null,"These are all helpers generally only in Storybook."),(0,i.kt)("h3",{id:"blockdetails"},"blockDetails"),(0,i.kt)("p",null,"Combine block details in one object."),(0,i.kt)("h3",{id:"gutenberg"},"Gutenberg"),(0,i.kt)("p",null,"Load actual Block Editor and all the magic."),(0,i.kt)("h3",{id:"storybookdefaultmockscategories"},"storybookDefaultMocksCategories"),(0,i.kt)("p",null,"Manually populate categories for blocks. This is generated in the PHP part of the real project."),(0,i.kt)("h3",{id:"storybookdefaultmockscolorpalette"},"storybookDefaultMocksColorPalette"),(0,i.kt)("p",null,"Manually populate blocks color palette. This is generated in the PHP part of the real project."),(0,i.kt)("h3",{id:"storybookwindowobjects"},"storybookWindowObjects,"),(0,i.kt)("p",null,"Loading WP build files."),(0,i.kt)("h3",{id:"storybookwpstyles"},"storybookWpStyles"),(0,i.kt)("p",null,"Loading styles for block editor."))}h.isMDXComponent=!0},3905:function(e,t,l){l.d(t,{Zo:function(){return p},kt:function(){return h}});var o=l(7294);function r(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function i(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,o)}return l}function n(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?i(Object(l),!0).forEach((function(t){r(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):i(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function s(e,t){if(null==e)return{};var l,o,r=function(e,t){if(null==e)return{};var l,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)l=i[o],t.indexOf(l)>=0||(r[l]=e[l]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)l=i[o],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var a=o.createContext({}),c=function(e){var t=o.useContext(a),l=t;return e&&(l="function"==typeof e?e(t):n(n({},t),e)),l},p=function(e){var t=c(e.components);return o.createElement(a.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var l=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(l),h=r,k=d["".concat(a,".").concat(h)]||d[h]||u[h]||i;return l?o.createElement(k,n(n({ref:t},p),{},{components:l})):o.createElement(k,n({ref:t},p))}));function h(e,t){var l=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=l.length,n=new Array(i);n[0]=d;var s={};for(var a in t)hasOwnProperty.call(t,a)&&(s[a]=t[a]);s.originalType=e,s.mdxType="string"==typeof e?e:r,n[1]=s;for(var c=2;c<i;c++)n[c]=l[c];return o.createElement.apply(null,n)}return o.createElement.apply(null,l)}d.displayName="MDXCreateElement"}}]);