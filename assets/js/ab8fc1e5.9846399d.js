"use strict";(self.webpackChunk_eightshift_docs=self.webpackChunk_eightshift_docs||[]).push([[6840],{41680:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],s={id:"rest-route",title:"Rest Route",sidebar_label:"Rest Route"},c=void 0,l={unversionedId:"legacy/v5/basics/rest-route",id:"legacy/v5/basics/rest-route",title:"Rest Route",description:"docs-source",source:"@site/docs/legacy/v5/basics/rest-route.md",sourceDirName:"legacy/v5/basics",slug:"/legacy/v5/basics/rest-route",permalink:"/docs/legacy/v5/basics/rest-route",draft:!1,tags:[],version:"current",frontMatter:{id:"rest-route",title:"Rest Route",sidebar_label:"Rest Route"},sidebar:"docs",previous:{title:"Rest Field",permalink:"/docs/legacy/v5/basics/rest-field"},next:{title:"Front End",permalink:"/docs/legacy/v5/basics/frontend"}},u={},p=[{value:"Test it in action",id:"test-it-in-action",level:2}],d={toc:p};function f(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/infinum/eightshift-libs/tree/3.0.0/"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/source-eigthshift--libs-blue?style=for-the-badge&logo=php&labelColor=2a2a2a",alt:"docs-source"}))),(0,i.kt)("p",null,"This class is used to create a new Rest API route."),(0,i.kt)("p",null,"To create a new class for the Rest API route, run this command:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"wp boilerplate create_rest_route")),(0,i.kt)("p",null,"The output will ask you to input the correct endpoint slug and method (",(0,i.kt)("inlineCode",{parentName:"p"},"POST"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"GET"),", etc.). Everything else will be done for you, setting the namespace, package, vendor prefixes, class, and folder name, and you will be set to write your field implementation in the ",(0,i.kt)("inlineCode",{parentName:"p"},"routeCallback")," method."),(0,i.kt)("h2",{id:"test-it-in-action"},"Test it in action"),(0,i.kt)("p",null,"To test it in action, you should check the ",(0,i.kt)("inlineCode",{parentName:"p"},"wp-json")," path in your browser. You can do that with something like this:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"domain.ext/wp-json/routeNamespace/routeVersion/routeName")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"This link will be different based on your project implementation.")))}f.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),f=o,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);