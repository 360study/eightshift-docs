"use strict";(self.webpackChunk_eightshift_docs=self.webpackChunk_eightshift_docs||[]).push([[7759],{2635:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return u}});var r=n(3117),o=n(102),a=(n(7294),n(3905)),s=["components"],c={id:"browser-sync",title:"Browsersync"},i=void 0,l={unversionedId:"legacy/v6/basics/browser-sync",id:"legacy/v6/basics/browser-sync",title:"Browsersync",description:"docs-source",source:"@site/docs/legacy/v6/basics/browser-sync.md",sourceDirName:"legacy/v6/basics",slug:"/legacy/v6/basics/browser-sync",permalink:"/docs/legacy/v6/basics/browser-sync",tags:[],version:"current",frontMatter:{id:"browser-sync",title:"Browsersync"},sidebar:"docs",previous:{title:"Fonts",permalink:"/docs/legacy/v6/basics/fonts"},next:{title:"Dynamic Import",permalink:"/docs/legacy/v6/basics/dynamic-import"}},p={},u=[{value:"Using SSL for local development",id:"using-ssl-for-local-development",level:2}],f={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/infinum/eightshift-frontend-libs"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/source-eightshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a",alt:"docs-source"}))),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://browsersync.io/docs"},"Browsersync")," is a Node module that enables you to develop sites faster. It will react to any code change and 'refresh' the site without you needing to refresh it. In the background, it runs a small local server. When configured, it will inject a script on your web page to react to any code change."),(0,a.kt)("p",null,"Besides that, you can test your site on various devices on the same network."),(0,a.kt)("p",null,"It's part of the Eightshift Development Kit by default. When you run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm start\n")),(0,a.kt)("p",null,"it will proxy the page you've specified in the ",(0,a.kt)("inlineCode",{parentName:"p"},"projectUrl")," to your local server."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"[Browsersync] Proxying: https://local-url.test\n[Browsersync] Access URLs:\n--------------------------------------\nLocal: https://localhost:3000\nExternal: https://192.168.0.25:3000\n--------------------------------------\nUI: http://localhost:3001\nUI External: http://localhost:3001\n--------------------------------------\n")),(0,a.kt)("p",null,"Using the IP address, you can open it on any device (mobile phone or tablet) that is connected to the same network, and see how your site looks on that device."),(0,a.kt)("h2",{id:"using-ssl-for-local-development"},"Using SSL for local development"),(0,a.kt)("p",null,"By default, BrowserSync does not work with HTTPS URLs. If you use HTTPS in your local environment you can simply provide an additional key in the Webpack config to make it work."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = (env, argv) => {\n    const projectConfig = {\n        config: {\n            projectDir: __dirname, // Current project directory absolute path.\n            projectUrl: 'local-url.test', // Used for providing browsersync functionality.\n            projectPath: 'wp-content/themes/your-theme-name', // Project path relative to project root.\n            useSsl: true,\n        },\n    };\n\n    // Generate webpack config for this project using options object.\n    return require('./node_modules/@eightshift/frontend-libs/webpack')(argv.mode, projectConfig);\n};\n")))}d.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=l(n),d=o,y=f["".concat(i,".").concat(d)]||f[d]||u[d]||a;return n?r.createElement(y,s(s({ref:t},p),{},{components:n})):r.createElement(y,s({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=f;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,s[1]=c;for(var l=2;l<a;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);