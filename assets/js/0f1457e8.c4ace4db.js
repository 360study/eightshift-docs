"use strict";(self.webpackChunk_eightshift_docs=self.webpackChunk_eightshift_docs||[]).push([[5534],{5217:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return u}});var a=r(3117),n=r(102),l=(r(7294),r(3905)),i=["components"],o={id:"helpers-object-helpers",title:"Object"},s=void 0,c={unversionedId:"legacy/v4/advanced/helpers-object-helpers",id:"legacy/v4/advanced/helpers-object-helpers",title:"Object",description:"docs-source",source:"@site/docs/legacy/v4/advanced/helpers-object.md",sourceDirName:"legacy/v4/advanced",slug:"/legacy/v4/advanced/helpers-object-helpers",permalink:"/eightshift-docs/docs/legacy/v4/advanced/helpers-object-helpers",tags:[],version:"current",frontMatter:{id:"helpers-object-helpers",title:"Object"},sidebar:"docs",previous:{title:"Aliases",permalink:"/eightshift-docs/docs/legacy/v4/advanced/helpers-aliases-helpers"},next:{title:"Components",permalink:"/eightshift-docs/docs/legacy/v4/advanced/helpers-components-helpers"}},p={},u=[{value:"is_valid_xml",id:"is_valid_xml",level:2},{value:"is_json",id:"is_json",level:2},{value:"flatten_array",id:"flatten_array",level:2},{value:"sanitize_array",id:"sanitize_array",level:2},{value:"sort_array_by_order_key",id:"sort_array_by_order_key",level:2}],d={toc:u};function m(e){var t=e.components,r=(0,n.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/infinum/eightshift-libs/blob/develop/src/helpers/class-object-helper.php"},(0,l.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/source-eigthshift--libs-blue?style=for-the-badge&logo=php&labelColor=2a2a2a",alt:"docs-source"}))),(0,l.kt)("p",null,"Object trait is located in ",(0,l.kt)("inlineCode",{parentName:"p"},"Eightshift Libs"),". To extend it, use ",(0,l.kt)("inlineCode",{parentName:"p"},"Eightshift_Libs\\Helpers\\Object_Helper")," class."),(0,l.kt)("p",null,"All of us have some custom helpers and stuff that we use around on multiple the project. We have created this simple trait helper that you can use in any PHP class as a ",(0,l.kt)("a",{parentName:"p",href:"/docs/legacy/v4/guides/extending-classes"},"trait"),"."),(0,l.kt)("h2",{id:"is_valid_xml"},"is_valid_xml"),(0,l.kt)("p",null,"Check if the provided XML is valid. It uses a ",(0,l.kt)("inlineCode",{parentName:"p"},"DOMDocument")," library."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"@param xml $xml Full xml document."),(0,l.kt)("li",{parentName:"ul"},"@return boolean")),(0,l.kt)("h2",{id:"is_json"},"is_json"),(0,l.kt)("p",null,"Check if provided JSON is valid."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"@param string $string String to check."),(0,l.kt)("li",{parentName:"ul"},"@return bool")),(0,l.kt)("h2",{id:"flatten_array"},"flatten_array"),(0,l.kt)("p",null,"Flattens a multidimensional array."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"@param  array $array Multidimensional array."),(0,l.kt)("li",{parentName:"ul"},"@return array")),(0,l.kt)("h2",{id:"sanitize_array"},"sanitize_array"),(0,l.kt)("p",null,"Sanitize all the values in an array."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"@param array  $array                 Provided array.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"@param string $sanitization_function WordPress function used for sanitization purposes.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"@link ",(0,l.kt)("a",{parentName:"p",href:"https://developer.wordpress.org/themes/theme-security/data-sanitization-escaping/"},"https://developer.wordpress.org/themes/theme-security/data-sanitization-escaping/"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"@return array"))),(0,l.kt)("h2",{id:"sort_array_by_order_key"},"sort_array_by_order_key"),(0,l.kt)("p",null,"Sort array by order key. It is used to sort terms."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"@param array $items Items array to sort. Must have order key."),(0,l.kt)("li",{parentName:"ul"},"@return array")),(0,l.kt)("div",{class:"legacy-badge legacy-badge--v4"}))}m.isMDXComponent=!0},3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(r),m=n,y=d["".concat(s,".").concat(m)]||d[m]||u[m]||l;return r?a.createElement(y,i(i({ref:t},p),{},{components:r})):a.createElement(y,i({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var c=2;c<l;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);