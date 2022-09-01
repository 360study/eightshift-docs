"use strict";(self.webpackChunk_eightshift_docs=self.webpackChunk_eightshift_docs||[]).push([[653],{5961:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var s=n(3117),a=n(102),i=(n(7294),n(3905)),r=["components"],l={id:"enqueue",title:"Enqueue"},o=void 0,u={unversionedId:"legacy/v4/guides/enqueue",id:"legacy/v4/guides/enqueue",title:"Enqueue",description:"docs-source",source:"@site/docs/legacy/v4/guides/enqueue.md",sourceDirName:"legacy/v4/guides",slug:"/legacy/v4/guides/enqueue",permalink:"/docs/legacy/v4/guides/enqueue",tags:[],version:"current",frontMatter:{id:"enqueue",title:"Enqueue"},sidebar:"docs",previous:{title:"Manifest",permalink:"/docs/legacy/v4/guides/manifest"},next:{title:"Post Type",permalink:"/docs/legacy/v4/guides/post-type"}},c={},p=[{value:"Enqueue_Admin",id:"enqueue_admin",level:2},{value:"Enqueue_Blocks",id:"enqueue_blocks",level:2},{value:"Enqueue_Theme",id:"enqueue_theme",level:2},{value:"Additional",id:"additional",level:2}],d={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,s.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/infinum/eightshift-libs/tree/v2.0.0/src/enqueue"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/source-eigthshift--libs-blue?style=for-the-badge&logo=php&labelColor=2a2a2a",alt:"docs-source"}))),(0,i.kt)("p",null,"When enqueuing assets you can either use ready made classes from the libs:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Eightshift_Libs\\Enqueue\\Enqueue_Admin")," class."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Eightshift_Libs\\Enqueue\\Enqueue_Blocks")," class."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Eightshift_Libs\\Enqueue\\Enqueue_Theme")," class.")),(0,i.kt)("p",null,"or you can modify their functionalities by extending them."),(0,i.kt)("p",null,"These classes will handle JavaScript and CSS files of the project for different parts like: Admin area, Block Editor area of Theme area (front end)."),(0,i.kt)("p",null,"The usage of any of these classes is optional, and you can use only what you need. Eightshift Boilerplate comes with all three classes already implemented."),(0,i.kt)("p",null,"Each of these classes implement actions that can be deregistered using the standard ",(0,i.kt)("a",{parentName:"p",href:"https://developer.wordpress.org/reference/functions/remove_action/"},"WordPress way"),"."),(0,i.kt)("p",null,"Enqueue classes work in combination with ",(0,i.kt)("a",{parentName:"p",href:"/docs/legacy/v4/advanced/webpack"},"webpack build")," of your project."),(0,i.kt)("p",null,"File names are defined inside class constants that can be changed by extending the class and providing the overrides for the constants. If you change the file names, you must provide changes to the webpack build process as well."),(0,i.kt)("h2",{id:"enqueue_admin"},"Enqueue_Admin"),(0,i.kt)("p",null,"This class provides way to enqueue assets for the ",(0,i.kt)("strong",{parentName:"p"},"Admin")," part of the project."),(0,i.kt)("p",null,"It implements these hooks in the register method:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"\n// Login only style.\nadd_action( 'login_enqueue_scripts', [ $this, 'enqueue_styles' ] );\n\n// Admin only style.\nadd_action( 'admin_enqueue_scripts', [ $this, 'enqueue_styles' ], 50 );\n\n// Admin only script.\nadd_action( 'admin_enqueue_scripts', [ $this, 'enqueue_scripts' ] );\n")),(0,i.kt)("p",null,"Class constants:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"\n  const ADMIN_SCRIPT_URI = 'applicationAdmin.js';\n\n  const ADMIN_STYLE_URI  = 'applicationAdmin.css';\n")),(0,i.kt)("h2",{id:"enqueue_blocks"},"Enqueue_Blocks"),(0,i.kt)("p",null,"This class provides assets for ",(0,i.kt)("strong",{parentName:"p"},"Block Editor")," part of the project."),(0,i.kt)("p",null,"It implements these hooks:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"\n// Editor only script.\nadd_action( 'enqueue_block_editor_assets', [ $this, 'enqueue_block_editor_script' ] );\n\n// Editor only style.\nadd_action( 'enqueue_block_editor_assets', [ $this, 'enqueue_block_editor_style' ], 50 );\n\n// Editor and front-end style.\nadd_action( 'enqueue_block_assets', [ $this, 'enqueue_block_style' ], 50 );\n\n// Frontend only script.\nadd_action( 'wp_enqueue_scripts', [ $this, 'enqueue_block_script' ] );\n")),(0,i.kt)("p",null,"Class constants:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"\n  const BLOCKS_EDITOR_SCRIPT_URI = 'applicationBlocksEditor.js';\n  const BLOCKS_EDITOR_STYLE_URI  = 'applicationBlocksEditor.css';\n\n  const BLOCKS_STYLE_URI  = 'applicationBlocks.css';\n  const BLOCKS_SCRIPT_URI = 'applicationBlocks.js';\n")),(0,i.kt)("h2",{id:"enqueue_theme"},"Enqueue_Theme"),(0,i.kt)("p",null,"This class provides assets for ",(0,i.kt)("strong",{parentName:"p"},"Theme")," part of the project."),(0,i.kt)("p",null,"It implements these hooks:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"\n// Theme only style.\nadd_action( 'wp_enqueue_scripts', [ $this, 'enqueue_styles' ], 10 );\n\n// Theme only script.\nadd_action( 'wp_enqueue_scripts', [ $this, 'enqueue_scripts' ] );\n")),(0,i.kt)("p",null,"Class constants:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"\n  const THEME_SCRIPT_URI = 'application.js';\n  const THEME_STYLE_URI  = 'application.css';\n")),(0,i.kt)("h2",{id:"additional"},"Additional"),(0,i.kt)("p",null,"Each of these 3 classes extends ",(0,i.kt)("inlineCode",{parentName:"p"},"Eightshift_Libs\\Enqueue\\Assets")," class that holds some useful methods that you can extend. These methods can be used in all enqueue classes."),(0,i.kt)("p",null,"You can find the Assets class ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/infinum/eightshift-libs/tree/v2.0.0/src/enqueue"},"here"),"."),(0,i.kt)("p",null,"Provided methods:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"get_frontend_script_dependencies()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"get_admin_script_dependencies()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"get_localizations()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"get_frontend_style_dependencies()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"get_admin_style_dependencies()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"get_media()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"script_in_footer()"))),(0,i.kt)("div",{class:"legacy-badge legacy-badge--v4"}))}m.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var s=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,s,a=function(e,t){if(null==e)return{};var n,s,a={},i=Object.keys(e);for(s=0;s<i.length;s++)n=i[s],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)n=i[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=s.createContext({}),u=function(e){var t=s.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=u(e.components);return s.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},d=s.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,h=d["".concat(o,".").concat(m)]||d[m]||p[m]||i;return n?s.createElement(h,r(r({ref:t},c),{},{components:n})):s.createElement(h,r({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var u=2;u<i;u++)r[u]=n[u];return s.createElement.apply(null,r)}return s.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);