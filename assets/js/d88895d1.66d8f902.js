"use strict";(self.webpackChunk_eightshift_docs=self.webpackChunk_eightshift_docs||[]).push([[1528],{6472:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var r=n(3117),o=n(102),a=(n(7294),n(3905)),i=["components"],l={id:"browsersync",title:"Browsersync"},s=void 0,c={unversionedId:"legacy/v4/advanced/browsersync",id:"legacy/v4/advanced/browsersync",title:"Browsersync",description:"docs-source",source:"@site/docs/legacy/v4/advanced/browsersync.md",sourceDirName:"legacy/v4/advanced",slug:"/legacy/v4/advanced/browsersync",permalink:"/docs/legacy/v4/advanced/browsersync",tags:[],version:"current",frontMatter:{id:"browsersync",title:"Browsersync"},sidebar:"docs",previous:{title:"Webpack",permalink:"/docs/legacy/v4/advanced/webpack"},next:{title:"Aliases",permalink:"/docs/legacy/v4/advanced/helpers-aliases-helpers"}},u={},p=[{value:"Override default functionality",id:"override-default-functionality",level:2}],d={toc:p};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/infinum/eightshift-frontend-libs/blob/develop/webpack/development.js"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/source-eigthshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a",alt:"docs-source"}))),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://browsersync.io/docs"},"Browsersync")," is a Node module that enables you to develop sites faster. It will react to any code change and will 'refresh' the site without you needing to refresh it. In the background, it runs a small local server. When configured it will inject a script on your web page that will react to any code change."),(0,a.kt)("p",null,"Besides that, you can test your site on various devices on the same network."),(0,a.kt)("p",null,"If comes by default with the libs, and when you run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm start\n")),(0,a.kt)("p",null,"it will proxy the page you've specified in the ",(0,a.kt)("inlineCode",{parentName:"p"},"projectUrl")," to your local server"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"[Browsersync] Proxying: https://local-url.test\n[Browsersync] Access URLs:\n --------------------------------------\n       Local: https://localhost:3000\n    External: https://192.168.0.25:3000\n --------------------------------------\n          UI: http://localhost:3001\n UI External: http://localhost:3001\n --------------------------------------\n")),(0,a.kt)("p",null,"Using the IP address you can open it on any device (mobile phone or a tablet) that is connected to the same network and you'll see how your site looks like on them."),(0,a.kt)("h2",{id:"override-default-functionality"},"Override default functionality"),(0,a.kt)("p",null,"If you need to override the default settings (because you are using https, or want to change some default configuration), you'll first need to disable the default config and add your own."),(0,a.kt)("p",null,"For example, if you want to use ",(0,a.kt)("inlineCode",{parentName:"p"},"https")," instead of ",(0,a.kt)("inlineCode",{parentName:"p"},"http")," in your local development you'd put in your ",(0,a.kt)("inlineCode",{parentName:"p"},"webpack.config.js"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"/* eslint-disable import/no-dynamic-require, global-require */\n\nconst BrowserSyncPlugin = require('browser-sync-webpack-plugin');\n\n/**\n * This is a main entrypoint for Webpack config.\n * All the settings are pulled from node_modules/@eightshift/frontend-libs/webpack.\n * We are loading mostly used configuration but you can always override or turn off the default setup and provide your own.\n * Please referer to Eightshift-libs wiki for details.\n */\nmodule.exports = (env, argv) => {\n\n    const projectConfig = {\n        config: {\n            projectDir: __dirname, // Current project directory absolute path.\n            projectUrl: 'local-url.test', // Used for providing browsersync functionality.\n            projectPath: 'wp-content/themes/your-theme-name', // Project path relative to project root.\n        },\n        overrides: [\n            'browserSyncPlugin', // Disable the default.\n        ],\n    };\n\n    // Generate webpack config for this project using options object.\n    const project = require('./node_modules/@eightshift/frontend-libs/webpack')(argv.mode, projectConfig);\n\n    return {\n        ...project,\n        plugins: [\n            ...project.plugins,\n            new BrowserSyncPlugin({\n                host: 'localhost',\n                port: 3000,\n                proxy: 'https://local-url.test', // It's important to add the protocol when using https!\n                https: true,\n            }, {\n                reload: false,\n            }),\n        ],\n    };\n};\n")),(0,a.kt)("div",{class:"legacy-badge legacy-badge--v4"}))}f.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),f=o,y=d["".concat(s,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(y,i(i({ref:t},u),{},{components:n})):r.createElement(y,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);