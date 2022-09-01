"use strict";(self.webpackChunk_eightshift_docs=self.webpackChunk_eightshift_docs||[]).push([[9099],{8621:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p}});var r=n(3117),o=n(102),s=(n(7294),n(3905)),a=["components"],i={id:"browser-sync",title:"Browsersync"},c=void 0,l={unversionedId:"basics/browser-sync",id:"basics/browser-sync",title:"Browsersync",description:"docs-source",source:"@site/docs/basics/browser-sync.md",sourceDirName:"basics",slug:"/basics/browser-sync",permalink:"/docs/basics/browser-sync",tags:[],version:"current",frontMatter:{id:"browser-sync",title:"Browsersync"},sidebar:"docs",previous:{title:"Fonts",permalink:"/docs/basics/fonts"},next:{title:"Dynamic Import",permalink:"/docs/basics/dynamic-import"}},u={},p=[{value:"Using SSL for local development",id:"using-ssl-for-local-development",level:2}],d={toc:p};function f(e){var t=e.components,n=(0,o.Z)(e,a);return(0,s.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/infinum/eightshift-frontend-libs"},(0,s.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/source-eightshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a",alt:"docs-source"}))),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://browsersync.io/docs"},"Browsersync")," is a Node module that enables you to develop sites faster. It will react to any code change and 'refresh' the site without you needing to refresh it. In the background, it runs a small local server. When configured, it will inject a script on your web page to react to any code change."),(0,s.kt)("p",null,"Besides that, you can test your site on various devices on the same network."),(0,s.kt)("p",null,"It's part of the Eightshift Development Kit by default. When you run:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"npm start\n")),(0,s.kt)("p",null,"it will proxy the page you've specified in the ",(0,s.kt)("inlineCode",{parentName:"p"},"projectUrl")," to your local server."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"[Browsersync] Proxying: http://local-url.test\n[Browsersync] Access URLs:\n--------------------------------------\nLocal: http://localhost:3000\nExternal: http://192.168.0.25:3000\n--------------------------------------\nUI: http://localhost:3001\nUI External: http://localhost:3001\n--------------------------------------\n")),(0,s.kt)("p",null,"Using the IP address, you can open it on any device (mobile phone or tablet) that is connected to the same network, and see how your site looks on that device."),(0,s.kt)("h2",{id:"using-ssl-for-local-development"},"Using SSL for local development"),(0,s.kt)("p",null,"By default, BrowserSync does not work with HTTPS URLs. If you use HTTPS in your local environment you can simply provide an additional key in the Webpack config to make it work."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = (env, argv) => {\n    const projectConfig = {\n        config: {\n            projectDir: __dirname, // Current project directory absolute path.\n            projectUrl: 'local-url.test', // Used for providing browsersync functionality.\n            projectPath: 'wp-content/themes/your-theme-name', // Project path relative to project root.\n            useSsl: true,\n        },\n    };\n\n    // Generate webpack config for this project using options object.\n    return require('./node_modules/@eightshift/frontend-libs/webpack')(argv.mode, projectConfig);\n};\n")),(0,s.kt)("p",null,"Do note that in order for Browsersync to work correctly and utilise the hot reload functionality, the Chrome dev tools must be visible and the 'Disable cache' option must be enabled in the Network tab. Otherwise, the changes will be cached by the browser.\nSimilar should be set for other browsers as well."))}f.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(n),f=o,h=d["".concat(c,".").concat(f)]||d[f]||p[f]||s;return n?r.createElement(h,a(a({ref:t},u),{},{components:n})):r.createElement(h,a({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var l=2;l<s;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);