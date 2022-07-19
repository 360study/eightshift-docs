"use strict";(self.webpackChunk_eightshift_docs=self.webpackChunk_eightshift_docs||[]).push([[1364],{9311:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u}});var n=r(3117),a=r(102),o=(r(7294),r(3905)),s=["components"],i={id:"blocks-patterns",title:"Patterns"},l=void 0,c={unversionedId:"legacy/v6/basics/blocks-patterns",id:"legacy/v6/basics/blocks-patterns",title:"Patterns",description:"docs-source",source:"@site/docs/legacy/v6/basics/blocks-patterns.md",sourceDirName:"legacy/v6/basics",slug:"/legacy/v6/basics/blocks-patterns",permalink:"/eightshift-docs/docs/legacy/v6/basics/blocks-patterns",tags:[],version:"current",frontMatter:{id:"blocks-patterns",title:"Patterns"},sidebar:"docs",previous:{title:"Variations",permalink:"/eightshift-docs/docs/legacy/v6/basics/blocks-variations"},next:{title:"Transforms",permalink:"/eightshift-docs/docs/legacy/v6/basics/blocks-transforms"}},p={},u=[{value:"Remove all core patterns",id:"remove-all-core-patterns",level:3}],d={toc:u};function f(e){var t=e.components,r=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/infinum/eightshift-frontend-libs/tree/develop/blocks/init/src/blocks/"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/source-eightshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a",alt:"docs-source"}))),(0,o.kt)("p",null,"Block Patterns are predefined block layouts, ready to insert and tweak."),(0,o.kt)("p",null,"You can check the ",(0,o.kt)("a",{parentName:"p",href:"https://developer.wordpress.org/block-editor/developers/block-api/block-patterns/"},"WordPress documentation")," on this subject."),(0,o.kt)("p",null,"Patterns are (as we understand them) the same thing as block variations. The main difference is that you can provide full layouts with patterns, as described in ",(0,o.kt)("a",{parentName:"p",href:"blocks-variations#limitations"},"this chapter"),". You can also provide the full page layouts with our variations."),(0,o.kt)("p",null,"This means that the only differences between our variations and block patterns are:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Variations")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Variations provide data using our manifest.json file (the rest is handled using JavaScript)."),(0,o.kt)("li",{parentName:"ul"},"Variations appear in the editor next to the static blocks.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Patterns")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Patterns are registered using PHP."),(0,o.kt)("li",{parentName:"ul"},"Patterns appear in the editor inside the special tab for patterns.")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"We will soon provide WP-CLI command to automaticity create block patterns, boilerplate class, for you to use.")),(0,o.kt)("h3",{id:"remove-all-core-patterns"},"Remove all core patterns"),(0,o.kt)("p",null,"If you don't use core blocks, core patterns won't work. Don't confuse your users and remove them (but feel free to add new patterns based on your own custom blocks!)"),(0,o.kt)("p",null,"To remove all core patterns add this code to you ",(0,o.kt)("inlineCode",{parentName:"p"},"src/Blocks/Blocks.php")," class."),(0,o.kt)("p",null,"Filter goes in the register method:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"// Remove block patterns.\nadd_filter('block_editor_settings', [$this, 'removeCorePatterns']);\n")),(0,o.kt)("p",null,"Callback method:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"/**\n    * Remove core block patterns\n    *\n    * @param array $settings Array of block editor settings to filter out.\n    *\n    * @return array Filtered array.\n    */\npublic function removeCorePatterns(array $settings): array\n{\n    $settings['__experimentalBlockPatterns'] = [];\n\n    return $settings;\n}\n")))}f.isMDXComponent=!0},3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(r),f=a,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||o;return r?n.createElement(m,s(s({ref:t},p),{},{components:r})):n.createElement(m,s({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);