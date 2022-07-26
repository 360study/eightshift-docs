"use strict";(self.webpackChunk_eightshift_docs=self.webpackChunk_eightshift_docs||[]).push([[673],{8852:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=n(3117),i=n(102),o=(n(7294),n(3905)),a=["components"],l={id:"plugin",title:"Create a new WordPress plugin",sidebar_label:"Create New Plugin"},s=void 0,u={unversionedId:"plugin",id:"plugin",title:"Create a new WordPress plugin",description:"Let's create a new plugin!",source:"@site/docs/plugin.md",sourceDirName:".",slug:"/plugin",permalink:"/docs/plugin",tags:[],version:"current",frontMatter:{id:"plugin",title:"Create a new WordPress plugin",sidebar_label:"Create New Plugin"},sidebar:"docs",previous:{title:"Create New Theme",permalink:"/docs/theme"},next:{title:"Additional Libraries",permalink:"/docs/additional-libraries"}},c={},p=[{value:"What is next?",id:"what-is-next",level:2}],d={toc:p};function f(e){var t=e.components,l=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Let's create a new plugin!"),(0,o.kt)("p",null,"Navigate to your WordPress plugins folder and run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npx create-wp-project plugin\n")),(0,o.kt)("p",null,"The script will prompt you for a plugin name and local development URL (used for BrowserSync). After that, your new plugin will be installed:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(9995).Z,width:"911",height:"550"})),(0,o.kt)("p",null,"After the script is finished, please follow the instructions provided by the setup script."),(0,o.kt)("p",null,"All additional steps after the initial setup are done using WP_CLI commands, so please make sure that you have WP-CLI set and ready to use."),(0,o.kt)("h2",{id:"what-is-next"},"What is next?"),(0,o.kt)("p",null,"Now that we have the plugin set on your local environment, let's do something with it."),(0,o.kt)("p",null,"Please make sure you read the ",(0,o.kt)("a",{parentName:"p",href:"basics/basics-intro"},"Basics chapter")," to better understand how the project is set and what is included to make your developing experience as smooth as possible."))}f.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),f=i,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9995:function(e,t,n){t.Z=n.p+"assets/images/setup-39fe95633dd527d11fd90285558b5a5c.gif"}}]);