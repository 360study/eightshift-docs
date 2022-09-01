"use strict";(self.webpackChunk_eightshift_docs=self.webpackChunk_eightshift_docs||[]).push([[1594],{4093:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var r=n(3117),i=n(102),o=(n(7294),n(3905)),a=["components"],l={id:"rest-field",title:"Rest Field",sidebar_label:"Rest Field"},s=void 0,c={unversionedId:"legacy/v5/basics/rest-field",id:"legacy/v5/basics/rest-field",title:"Rest Field",description:"docs-source",source:"@site/docs/legacy/v5/basics/rest-field.md",sourceDirName:"legacy/v5/basics",slug:"/legacy/v5/basics/rest-field",permalink:"/docs/legacy/v5/basics/rest-field",tags:[],version:"current",frontMatter:{id:"rest-field",title:"Rest Field",sidebar_label:"Rest Field"},sidebar:"docs",previous:{title:"Rest Intro",permalink:"/docs/legacy/v5/basics/rest"},next:{title:"Rest Route",permalink:"/docs/legacy/v5/basics/rest-route"}},u={},p=[{value:"Test it in action",id:"test-it-in-action",level:2}],d={toc:p};function f(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/infinum/eightshift-libs/tree/3.0.0/"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/source-eigthshift--libs-blue?style=for-the-badge&logo=php&labelColor=2a2a2a",alt:"docs-source"}))),(0,o.kt)("p",null,"This class is used to update the existing Rest API Field or provide a new field to the existing Rest API."),(0,o.kt)("p",null,"To create a new class for extending the Rest API field, run this command:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"wp boilerplate create_rest_field")),(0,o.kt)("p",null,"The output will ask you to input the correct field name and object type (post, get, etc.). Everything else will be done for you, setting the namespace, package, vendor prefixes, class, and folder name, and you will be set to write your field implementation in the ",(0,o.kt)("inlineCode",{parentName:"p"},"fieldCallback")," method."),(0,o.kt)("h2",{id:"test-it-in-action"},"Test it in action"),(0,o.kt)("p",null,"To test it in action, you should check the ",(0,o.kt)("inlineCode",{parentName:"p"},"wp-json")," path in your browser. You can do something like this:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"domain.ext/wp-json/routeNamespace/routeVersion/routeName")),(0,o.kt)("p",null,"and find the field name."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This link will be different based on your project implementation.")),(0,o.kt)("div",{class:"legacy-badge legacy-badge--v5"}))}f.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),f=i,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);