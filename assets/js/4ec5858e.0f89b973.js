"use strict";(self.webpackChunk_eightshift_docs=self.webpackChunk_eightshift_docs||[]).push([[7993],{3217:function(e,r,t){t.r(r),t.d(r,{assets:function(){return p},contentTitle:function(){return i},default:function(){return g},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var n=t(3117),a=t(102),o=(t(7294),t(3905)),l=["components"],s={id:"helpers-error-logger-helpers",title:"Error Logger"},i=void 0,c={unversionedId:"legacy/v4/advanced/helpers-error-logger-helpers",id:"legacy/v4/advanced/helpers-error-logger-helpers",title:"Error Logger",description:"docs-source",source:"@site/docs/legacy/v4/advanced/helpers-error-logger.md",sourceDirName:"legacy/v4/advanced",slug:"/legacy/v4/advanced/helpers-error-logger-helpers",permalink:"/docs/legacy/v4/advanced/helpers-error-logger-helpers",tags:[],version:"current",frontMatter:{id:"helpers-error-logger-helpers",title:"Error Logger"},sidebar:"docs",previous:{title:"Shortcode",permalink:"/docs/legacy/v4/advanced/helpers-shortcode-helpers"},next:{title:"Color Palette",permalink:"/docs/legacy/v4/advanced/components-color-palette"}},p={},u=[{value:"rest_response_handler",id:"rest_response_handler",level:2}],d={toc:u};function g(e){var r=e.components,t=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/infinum/eightshift-libs/blob/develop/src/helpers/trait-error-logger.php"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/source-eigthshift--libs-blue?style=for-the-badge&logo=php&labelColor=2a2a2a",alt:"docs-source"}))),(0,o.kt)("p",null,"Object trait is located in ",(0,o.kt)("inlineCode",{parentName:"p"},"Eightshift Libs"),". To extend it, use ",(0,o.kt)("inlineCode",{parentName:"p"},"Eightshift_Libs\\Helpers\\Error_Logger")," class."),(0,o.kt)("p",null,"If you are working with Ajax or REST API in your project, this logger will come in handy. We have created this simple trait helper that you can use in any PHP class as a ",(0,o.kt)("a",{parentName:"p",href:"/docs/legacy/v4/guides/extending-classes"},"trait"),"."),(0,o.kt)("h2",{id:"rest_response_handler"},"rest_response_handler"),(0,o.kt)("p",null,"Ensure correct response for rest using the handler function."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"@param integer     $code   Response Status code.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"@param string      $status Response Status name. (success/error).")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"@param string|null $msg    Response Message.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"@param array|null  $data   Response additional data.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"@return \\WP_Error|array \\WP_Error instance with error message and status or array."))),(0,o.kt)("div",{class:"legacy-badge legacy-badge--v4"}))}g.isMDXComponent=!0},3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return g}});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),c=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},p=function(e){var r=c(e.components);return n.createElement(i.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(t),g=a,f=d["".concat(i,".").concat(g)]||d[g]||u[g]||o;return t?n.createElement(f,l(l({ref:r},p),{},{components:t})):n.createElement(f,l({ref:r},p))}));function g(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=d;var s={};for(var i in r)hasOwnProperty.call(r,i)&&(s[i]=r[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var c=2;c<o;c++)l[c]=t[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);