(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{153:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(1),a=n(9),i=(n(0),n(308)),o={id:"plugin",title:"Create a new WordPress plugin",sidebar_label:"Create New Plugin"},c={id:"plugin",title:"Create a new WordPress plugin",description:"Let's create a new plugin!",source:"@site/docs/plugin.md",permalink:"/eightshift-docs/docs/plugin",sidebar_label:"Create New Plugin",sidebar:"docs",previous:{title:"Create a new WordPress theme",permalink:"/eightshift-docs/docs/theme"},next:{title:"Additional Libraries",permalink:"/eightshift-docs/docs/additional-libraries"}},l=[{value:"What is next?",id:"what-is-next",children:[]}],s={rightToc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Let's create a new plugin!"),Object(i.b)("p",null,"Navigate to your WordPress plugins folder and run the following command:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"npx create-wp-project plugin\n")),Object(i.b)("p",null,"The script will prompt you for a plugin name and local development URL (used for BrowserSync). After that, your new plugin will be installed:"),Object(i.b)("p",null,Object(i.b)("img",Object(r.a)({parentName:"p"},{src:"/eightshift-docs/img/setup.gif",alt:null}))),Object(i.b)("p",null,"After the script is finished, please follow the instructions provided by the setup script."),Object(i.b)("p",null,"All additional steps after the initial setup are done using WP_CLI commands, so please make sure that you have WP-CLI set and ready to use."),Object(i.b)("h2",{id:"what-is-next"},"What is next?"),Object(i.b)("p",null,"Now that we have the plugin set on your local environment, let's do something with it."),Object(i.b)("p",null,"Please make sure you read the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"basics/basics"}),"Basics chapter")," to better understand how the project is set and what is included to make your developing experience as smooth as possible."))}p.isMDXComponent=!0},308:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},u=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),b=r,f=u["".concat(o,".").concat(b)]||u[b]||d[b]||i;return n?a.a.createElement(f,c({ref:t},s,{components:n})):a.a.createElement(f,c({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);