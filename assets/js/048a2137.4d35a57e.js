"use strict";(self.webpackChunk_eightshift_docs=self.webpackChunk_eightshift_docs||[]).push([[1036],{4600:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var o=t(3117),r=t(102),i=(t(7294),t(3905)),a=["components"],l={id:"webpack",title:"Webpack"},c=void 0,s={unversionedId:"basics/webpack",id:"basics/webpack",title:"Webpack",description:"docs-source",source:"@site/docs/basics/webpack.md",sourceDirName:"basics",slug:"/basics/webpack",permalink:"/eightshift-docs/docs/basics/webpack",tags:[],version:"current",frontMatter:{id:"webpack",title:"Webpack"},sidebar:"docs",previous:{title:"General",permalink:"/eightshift-docs/docs/basics/frontend"},next:{title:"SCSS Library",permalink:"/eightshift-docs/docs/basics/library"}},p={},u=[{value:"Override built-in functionality",id:"override-built-in-functionality",level:2},{value:"Add new custom functionality",id:"add-new-custom-functionality",level:2},{value:"Change the default config",id:"change-the-default-config",level:2},{value:"Add a new entrypoint",id:"add-a-new-entrypoint",level:2}],d={toc:u};function f(e){var n=e.components,t=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/infinum/eightshift-frontend-libs"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/source-eightshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a",alt:"docs-source"}))),(0,i.kt)("p",null,"At its core, Webpack is a static module bundler for modern JavaScript applications. When Webpack processes your application, it builds an internal dependency graph that maps every module your project needs and generates one or more bundles. ",(0,i.kt)("a",{parentName:"p",href:"https://webpack.js.org/concepts/"},"Learn more about Webpack"),"."),(0,i.kt)("p",null,"To put it simply, Webpack takes your development files and creates a production-ready version of them based on the config."),(0,i.kt)("p",null,"Eightshift Development Kit comes with everything set up out of the box. In the root of your project, you will find a file called ",(0,i.kt)("inlineCode",{parentName:"p"},"webpack.config.js"),". If you open it, you will see that the configuration is pulled from the Eightshift Frontend Libs library."),(0,i.kt)("p",null,"You can remove this config and write everything from scratch (keep in mind that this is a lot of work), or you can use our config and extend/remove whatever you need."),(0,i.kt)("h2",{id:"override-built-in-functionality"},"Override built-in functionality"),(0,i.kt)("p",null,"To remove built-in functionality, add a new array to the config called ",(0,i.kt)("inlineCode",{parentName:"p"},"overrides"),".\nIf you provide any of the ",(0,i.kt)("inlineCode",{parentName:"p"},"overrides")," keys, it will remove that config from the feature from the build."),(0,i.kt)("p",null,"You can't change our config; you can only remove it and make your own."),(0,i.kt)("p",null,"Here is a list of all the features that we use and how to remove them."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"\nconst projectConfig = {\n  config: {\n    ... everything from default setup\n  },\n  overrides: [\n    // Located in project.js\n    'application',\n    'applicationAdmin',\n    'applicationBlocks',\n    'applicationBlocksEditor',\n    'filename',\n\n    // Located in base.js\n    'cleanWebpackPlugin',\n    'providePlugin',\n    'definePlugin',\n    'miniCssExtractPlugin',\n    'webpackManifestPlugin',\n    'dependencyExtractionWebpackPlugin',\n    'runtimeChunk',\n    'js',\n    'images',\n    'fonts',\n    'scss',\n\n    // Located in development.js\n    'browserSyncPlugin',\n\n    // Located in production.js\n    'terserPlugin',\n    'cssMinimizerPlugin',\n  ],\n}\n")),(0,i.kt)("h2",{id:"add-new-custom-functionality"},"Add new custom functionality"),(0,i.kt)("p",null,"Let's say you want to add a custom ",(0,i.kt)("inlineCode",{parentName:"p"},"html-webpack-plugin")," to the build. You can simply use all the native ",(0,i.kt)("a",{parentName:"p",href:"https://webpack.js.org/guides/"},"webpack features"),", like in this example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const HtmlWebpackPlugin = require('html-webpack-plugin');\n\nmodule.exports = (env, argv) => {\n\n  ...\n\n  return {\n    // Load all projects config from eightshift-frontend-libs.\n    ...project,\n\n    plugins: [\n      // Load all plugins config from eightshift-frontend-libs.\n      ...project.plugins,\n\n      // Add your custom implementation.\n      new HtmlWebpackPlugin(),\n    ],\n  };\n};\n")),(0,i.kt)("h2",{id:"change-the-default-config"},"Change the default config"),(0,i.kt)("p",null,"Let's say you want to change what we made and adjust it to your specific needs. In that case, you should remove our functionality by providing the ",(0,i.kt)("inlineCode",{parentName:"p"},"overrides")," array and create your implementation. For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const BrowserSyncPlugin = require('browser-sync-webpack-plugin');\n\nmodule.exports = (env, argv) => {\n\n  const projectConfig = {\n    config: {\n      // ... everything from default setup\n    },\n    overrides: [\n      'browserSyncPlugin', // this removes our configuration.\n    ],\n  };\n\n  // Generate Webpack config for this project using options object.\n  const project = require('./node_modules/@eightshift/frontend-libs/webpack')(argv.mode, projectConfig);\n\n  return {\n    // Load all projects config from eightshift-frontend-libs.\n    ...project,\n\n    plugins: [\n      // Load all plugins config from eightshift-frontend-libs.\n      ...project.plugins,\n\n      // This provides your configuration.\n      new BrowserSyncPlugin({\n        host: 'localhost',\n        port: 3000,\n        https: true,\n      }),\n    ],\n  };\n")),(0,i.kt)("h2",{id:"add-a-new-entrypoint"},"Add a new entrypoint"),(0,i.kt)("p",null,"Let's say you want to add a new, separate JS and/or CSS build for some specific functionality. This functionality may or may not have anything to do with your WordPress theme or plugin, but it needs to be in separate files. To do that you'd need to add a new entrypoint for Webpack to build in ",(0,i.kt)("inlineCode",{parentName:"p"},"webpack.config.js"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = (env, argv) => {\n\n  ...\n\n  return {\n    // Load all projects config from eightshift-frontend-libs.\n    ...project,\n\n    entry: {\n      // Load all entry points config from eightshift-frontend-libs.\n      ...project.entry,\n\n      // Your custom build entrypoint.\n      newBuild: path.resolve(projectConfig.config.projectDir, 'assets', 'application-newBuild.js'),\n    },\n  };\n};\n")),(0,i.kt)("p",null,"Next thing you'd do is create ",(0,i.kt)("inlineCode",{parentName:"p"},"application-newBuild.js")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"assets/")," directory, in which you'd import and JS or SCSS partials. After restarting the build process, the results should be visible in ",(0,i.kt)("inlineCode",{parentName:"p"},"public/")," directory as new JS or CSS files."))}f.isMDXComponent=!0},3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return f}});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=o.createContext({}),s=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=s(e.components);return o.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(t),f=r,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||i;return t?o.createElement(m,a(a({ref:n},p),{},{components:t})):o.createElement(m,a({ref:n},p))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var s=2;s<i;s++)a[s]=t[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);