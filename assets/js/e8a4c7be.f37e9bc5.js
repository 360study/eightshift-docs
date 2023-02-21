"use strict";(self.webpackChunk_eightshift_docs=self.webpackChunk_eightshift_docs||[]).push([[3749],{29717:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var o=n(87462),r=n(63366),a=(n(67294),n(3905)),i=["components"],l={id:"5-6",title:"Version 5 to 6"},s=void 0,p={unversionedId:"migrations/5-6",id:"migrations/5-6",title:"Version 5 to 6",description:"This migration guide is represents migration for:",source:"@site/docs/migrations/5-6.md",sourceDirName:"migrations",slug:"/migrations/5-6",permalink:"/docs/migrations/5-6",draft:!1,tags:[],version:"current",frontMatter:{id:"5-6",title:"Version 5 to 6"},sidebar:"docs",previous:{title:"Version 6 to 7",permalink:"/docs/migrations/6-7"},next:{title:"Versions",permalink:"/docs/legacy/v8/versions"}},u={},c=[{value:"JavaScrip changes:",id:"javascrip-changes",level:3},{value:"getOptionColors helper",id:"getoptioncolors-helper",level:4},{value:"getOptions changed to getOption and properties changed",id:"getoptions-changed-to-getoption-and-properties-changed",level:4},{value:"getOptions new helper",id:"getoptions-new-helper",level:4},{value:"getOptions for color",id:"getoptions-for-color",level:4},{value:"props helper properties changed",id:"props-helper-properties-changed",level:4},{value:"setAttributes now must use getAttrKey helper",id:"setattributes-now-must-use-getattrkey-helper",level:4},{value:"checkAttr | checkAttrResponsive no longer supports componentName parameter",id:"checkattr--checkattrresponsive-no-longer-supports-componentname-parameter",level:4},{value:"move checkAttr from hte attributes spread",id:"move-checkattr-from-hte-attributes-spread",level:4},{value:"Included keys in props helper.",id:"included-keys-in-props-helper",level:4},{value:"PHP changes",id:"php-changes",level:3},{value:"props helper removed from Block.php",id:"props-helper-removed-from-blockphp",level:4},{value:"props helper properties changed",id:"props-helper-properties-changed-1",level:4},{value:"Help",id:"help",level:3}],m={toc:c};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This migration guide is represents migration for:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/infinum/eightshift-boilerplate/releases/tag/6.0.0"},"eightshift/boilerplate")," - ",(0,a.kt)("strong",{parentName:"li"},"5+ --\x3e 6.0.0")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/infinum/eightshift-frontend-libs/releases/tag/5.0.0"},"eightshift/frontend-libs")," - ",(0,a.kt)("strong",{parentName:"li"},"4+ --\x3e 5.0.0")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/infinum/eightshift-libs/releases/tag/4.0.0"},"eightshift/libs")," - ",(0,a.kt)("strong",{parentName:"li"},"3+ --\x3e 4.0.0"))),(0,a.kt)("h3",{id:"javascrip-changes"},"JavaScrip changes:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Migration time: ~30min.")),(0,a.kt)("h4",{id:"getoptioncolors-helper"},"getOptionColors helper"),(0,a.kt)("p",null,"Moved from ",(0,a.kt)("inlineCode",{parentName:"p"},"get-option-colors.js")," file to ",(0,a.kt)("inlineCode",{parentName:"p"},"get-options.js"),". Import remained the same."),(0,a.kt)("h4",{id:"getoptions-changed-to-getoption-and-properties-changed"},"getOptions changed to getOption and properties changed"),(0,a.kt)("p",null,"Example: ",(0,a.kt)("inlineCode",{parentName:"p"},"buttonSize"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Old usage: ",(0,a.kt)("inlineCode",{parentName:"li"},"getOptions(manifest, componentName, 'size', options);")),(0,a.kt)("li",{parentName:"ul"},"New usage: ",(0,a.kt)("inlineCode",{parentName:"li"},"getOption('buttonSize', attributes, manifest);"))),(0,a.kt)("h4",{id:"getoptions-new-helper"},"getOptions new helper"),(0,a.kt)("p",null,"A new helper was created for easier merging of component options and attributes passed from the parent component."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Old usage: ",(0,a.kt)("inlineCode",{parentName:"li"},"const options = {...manifestOptions, ...attributes.options};")),(0,a.kt)("li",{parentName:"ul"},"New usage: ",(0,a.kt)("inlineCode",{parentName:"li"},"options={getOptions(attributes, manifest)}"))),(0,a.kt)("h4",{id:"getoptions-for-color"},"getOptions for color"),(0,a.kt)("p",null,"getOptions helper now supports color returns."),(0,a.kt)("p",null,"Example: ",(0,a.kt)("inlineCode",{parentName:"p"},"buttonColor")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Old usage: ",(0,a.kt)("inlineCode",{parentName:"li"},"getOptionColors(getOptions(manifest, componentName, 'color', options);")),(0,a.kt)("li",{parentName:"ul"},"New usage: ",(0,a.kt)("inlineCode",{parentName:"li"},"getOption('buttonColor', attributes, manifest, true);"))),(0,a.kt)("h4",{id:"props-helper-properties-changed"},"props helper properties changed"),(0,a.kt)("p",null,"Now it only supports 2 properties (earlier it was 4)\nSecond property is the component name you are passing into, if the component name was changed, that name should be passed. It supports camelCase and kebab-case as a component name. It should be the same as defined in the manifest.json.\nAlso keys was swiped."),(0,a.kt)("p",null,"Example 1:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Old usage: ",(0,a.kt)("inlineCode",{parentName:"li"},"{...props(attributes, 'image')}")),(0,a.kt)("li",{parentName:"ul"},"New usage: ",(0,a.kt)("inlineCode",{parentName:"li"},"{...props('image', attributes)}"))),(0,a.kt)("p",null,"Example 2:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Old usage: ",(0,a.kt)("inlineCode",{parentName:"li"},"{...props(attributes, 'heading', 'intro')}")),(0,a.kt)("li",{parentName:"ul"},"New usage: ",(0,a.kt)("inlineCode",{parentName:"li"},"{...props('intro', attributes)}"))),(0,a.kt)("p",null,"Example 3:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Old usage: ",(0,a.kt)("inlineCode",{parentName:"li"},"{...props(attributes, 'button', '', true)}")),(0,a.kt)("li",{parentName:"ul"},"New usage: ",(0,a.kt)("inlineCode",{parentName:"li"},"{...props('button', attributes)}"))),(0,a.kt)("h4",{id:"setattributes-now-must-use-getattrkey-helper"},"setAttributes now must use getAttrKey helper"),(0,a.kt)("p",null,"In order to use full flexibility of components each ",(0,a.kt)("inlineCode",{parentName:"p"},"setAttributes")," function must have ",(0,a.kt)("inlineCode",{parentName:"p"},"getAttrKey")," helper used to get the correct attribute name."),(0,a.kt)("p",null,"Example: ",(0,a.kt)("inlineCode",{parentName:"p"},"buttonColor")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Old usage: ",(0,a.kt)("inlineCode",{parentName:"li"},"onChange={(value) => setAttributes({ [`${componentName}Color`]: value })}")),(0,a.kt)("li",{parentName:"ul"},"New usage: ",(0,a.kt)("inlineCode",{parentName:"li"},"onChange={(value) => setAttributes({ [getAttrKey('buttonColor', attributes, manifest)]: value })}"))),(0,a.kt)("h4",{id:"checkattr--checkattrresponsive-no-longer-supports-componentname-parameter"},"checkAttr | checkAttrResponsive no longer supports componentName parameter"),(0,a.kt)("p",null,"Example: ",(0,a.kt)("inlineCode",{parentName:"p"},"buttonContent")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Old usage: ",(0,a.kt)("inlineCode",{parentName:"li"},"checkAttr('buttonContent', attributes, manifest, componentName);")),(0,a.kt)("li",{parentName:"ul"},"New usage: ",(0,a.kt)("inlineCode",{parentName:"li"},"checkAttr('buttonContent', attributes, manifest);"))),(0,a.kt)("h4",{id:"move-checkattr-from-hte-attributes-spread"},"move checkAttr from hte attributes spread"),(0,a.kt)("p",null,"Old usage:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"    const {\n        setAttributes,\n        componentClass = manifestComponentClass,\n        selectorClass = componentClass,\n        additionalClass,\n        blockClass,\n\n        buttonUse = checkAttr('buttonUse', attributes, manifest),\n\n        buttonType = checkAttr('buttonType', attributes, manifest),\n        buttonIconPosition = checkAttr('buttonIconPosition', attributes, manifest),\n        buttonIconUse = checkAttr('buttonIconUse', attributes, manifest),\n        buttonIsLink = checkAttr('buttonIsLink', attributes, manifest),\n    } = attributes;\n")),(0,a.kt)("p",null,"New usage:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"    const {\n        setAttributes,\n        componentClass = manifestComponentClass,\n        selectorClass = componentClass,\n        additionalClass,\n        blockClass,\n    } = attributes;\n\n    const buttonUse = checkAttr('buttonUse', attributes, manifest);\n    const buttonType = checkAttr('buttonType', attributes, manifest);\n    const buttonIconPosition = checkAttr('buttonIconPosition', attributes, manifest);\n    const buttonIconUse = checkAttr('buttonIconUse', attributes, manifest);\n    const buttonIsLink = checkAttr('buttonIsLink', attributes, manifest);\n")),(0,a.kt)("h4",{id:"included-keys-in-props-helper"},"Included keys in props helper."),(0,a.kt)("p",null,"You don't need to pass this helpers if you don't want to override them because they are passed using props helper.\nThis is true only for the passing inside the components. For the block you need to pass them manually.\nExample:\nBlock > Component - need to pass setAttributes\nComponent > Component - no need to pass setAttributes or anything other that you are not overriding."),(0,a.kt)("h3",{id:"php-changes"},"PHP changes"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Migration time: ~30min.")),(0,a.kt)("h4",{id:"props-helper-removed-from-blockphp"},"props helper removed from Block.php"),(0,a.kt)("p",null,"Remove props function from Blocks.php class and the accommodating use call on the top of the file."),(0,a.kt)("h4",{id:"props-helper-properties-changed-1"},"props helper properties changed"),(0,a.kt)("p",null,"The same as in JS, and replace Block with Component method."),(0,a.kt)("p",null,"Example 1:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Old usage: ",(0,a.kt)("inlineCode",{parentName:"li"},"Blocks::props($attributes, 'button', '', true)")),(0,a.kt)("li",{parentName:"ul"},"New usage: ",(0,a.kt)("inlineCode",{parentName:"li"},"Components::props('button', $attributes)"))),(0,a.kt)("p",null,"Example 2:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Old usage: ",(0,a.kt)("inlineCode",{parentName:"li"},"Blocks::props($attributes, 'button')")),(0,a.kt)("li",{parentName:"ul"},"New usage: ",(0,a.kt)("inlineCode",{parentName:"li"},"Components::props('button', $attributes)"))),(0,a.kt)("p",null,"Example 3:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Old usage: ",(0,a.kt)("inlineCode",{parentName:"li"},"Blocks::props($attributes, 'button', 'new')")),(0,a.kt)("li",{parentName:"ul"},"New usage: ",(0,a.kt)("inlineCode",{parentName:"li"},"Components::props('new', $attributes)"))),(0,a.kt)("h3",{id:"help"},"Help"),(0,a.kt)("p",null,"We made this few regexes to help you with the migrations."),(0,a.kt)("p",null,"Swipe props helper in JS:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\\{...props\\(attributes, (['\"]{1}[a-zA-Z\\-]+['\"]{1})\\)\\} to {...props($1, attributes)}\n")),(0,a.kt)("p",null,"Swipe props helper in PHP:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Components::props\\(\\$attributes, ('[a-zA-Z\\-]+')\\) to Components::props($1, $attributes)\n")))}d.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,h=m["".concat(s,".").concat(d)]||m[d]||c[d]||a;return n?o.createElement(h,i(i({ref:t},u),{},{components:n})):o.createElement(h,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);