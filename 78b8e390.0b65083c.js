(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{131:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return s})),t.d(r,"rightToc",(function(){return c})),t.d(r,"default",(function(){return p}));var n=t(1),a=t(6),o=(t(0),t(158)),i={id:"helpers-error-logger-helpers",title:"Error Logger"},s={id:"advanced/helpers-error-logger-helpers",title:"Error Logger",description:"[![docs-source](https://img.shields.io/badge/source-eigthshift--libs-blue?style=for-the-badge&logo=php&labelColor=2a2a2a)](https://github.com/infinum/eightshift-libs/blob/develop/src/helpers/trait-error-logger.php)",source:"@site/docs/advanced/helpers-error-logger.md",permalink:"/eightshift-docs/docs/advanced/helpers-error-logger-helpers",sidebar:"docs",previous:{title:"Shortcode",permalink:"/eightshift-docs/docs/advanced/helpers-shortcode-helpers"},next:{title:"Color Palette",permalink:"/eightshift-docs/docs/advanced/components-color-palette"}},c=[{value:"rest_response_handler",id:"rest_response_handler",children:[]}],l={rightToc:c};function p(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/infinum/eightshift-libs/blob/develop/src/helpers/trait-error-logger.php"}),Object(o.b)("img",Object(n.a)({parentName:"a"},{src:"https://img.shields.io/badge/source-eigthshift--libs-blue?style=for-the-badge&logo=php&labelColor=2a2a2a",alt:"docs-source"})))),Object(o.b)("p",null,"Object trait is located in ",Object(o.b)("inlineCode",{parentName:"p"},"Eightshift Libs"),". To extend it, use ",Object(o.b)("inlineCode",{parentName:"p"},"Eightshift_Libs\\Helpers\\Error_Logger")," class."),Object(o.b)("p",null,"If you are working with Ajax or REST API in your project, this logger will come in handy. We have created this simple trait helper that you can use in any PHP class as a ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/eightshift-docs/docs/guides/extending-classes"}),"trait"),". To see all of the class helper go ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/infinum/eightshift-libs/blob/develop/src/helpers/trait-error-logger.php"}),"here"),"."),Object(o.b)("h2",{id:"rest_response_handler"},"rest_response_handler"),Object(o.b)("p",null,"Ensure correct response for rest using the handler function."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"@param integer     $code   Response Status code.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"@param string      $status Response Status name. (success/error).")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"@param string|null $msg    Response Message.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"@param array|null  $data   Response additional data.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"@return \\WP_Error|array \\WP_Error instance with error message and status or array."))))}p.isMDXComponent=!0},158:function(e,r,t){"use strict";t.d(r,"a",(function(){return b})),t.d(r,"b",(function(){return h}));var n=t(0),a=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),p=function(e){var r=a.a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):s({},r,{},e)),t},b=function(e){var r=p(e.components);return a.a.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},d=Object(n.forwardRef)((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=p(t),d=n,h=b["".concat(i,".").concat(d)]||b[d]||u[d]||o;return t?a.a.createElement(h,s({ref:r},l,{components:t})):a.a.createElement(h,s({ref:r},l))}));function h(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);