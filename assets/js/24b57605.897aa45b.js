"use strict";(self.webpackChunk_eightshift_docs=self.webpackChunk_eightshift_docs||[]).push([[725],{67419:function(e,t,o){o.r(t),o.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var n=o(87462),a=o(63366),r=(o(67294),o(3905)),i=["components"],s={id:"blocks",title:"Blocks"},l=void 0,c={unversionedId:"legacy/v7/basics/blocks",id:"legacy/v7/basics/blocks",title:"Blocks",description:"docs-source",source:"@site/docs/legacy/v7/basics/blocks.md",sourceDirName:"legacy/v7/basics",slug:"/legacy/v7/basics/blocks",permalink:"/docs/legacy/v7/basics/blocks",draft:!1,tags:[],version:"current",frontMatter:{id:"blocks",title:"Blocks"},sidebar:"docs",previous:{title:"Dynamic Import",permalink:"/docs/legacy/v7/basics/dynamic-import"},next:{title:"Important",permalink:"/docs/legacy/v7/basics/blocks-important"}},u={},d=[{value:"Types of blocks",id:"types-of-blocks",level:2},{value:"Static blocks",id:"static-blocks",level:3},{value:"Dynamic blocks",id:"dynamic-blocks",level:3},{value:"Eightshift blocks",id:"eightshift-blocks",level:2}],h={toc:d};function p(e){var t=e.components,o=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/infinum/eightshift-frontend-libs/tree/6.0.0/blocks/init/src/blocks/"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/source-eightshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a",alt:"docs-source"}))),(0,r.kt)("p",null,"Since WordPress 5.0, we were introduced to the new editing experience using the so-called Gutenberg blocks. With blocks, the idea is to have the same look and feel in the editor as on the front end. As a developer, you just got a new technology that you should know if you want to build a great project on WordPress. That new technology is React because everything regarding blocks is done using React."),(0,r.kt)("p",null,"Don't get discouraged just yet, because the WordPress team has made the process of creating blocks relatively easy. But we are not here to talk about the simple stuff. We want to do more complex projects with custom blocks, so follow along and see what we have prepared here."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"You can read everything regarding blocks in the ",(0,r.kt)("a",{parentName:"p",href:"https://developer.wordpress.org/block-editor/tutorials/block-tutorial/"},"WordPress documentation"),". We will not be explaining how everything natively works in this documentation. Instead, we will only describe how to use our setup and how it correlates with the native one. Everything that you can't find here, please look up in the WordPress Handbook.")),(0,r.kt)("h2",{id:"types-of-blocks"},"Types of blocks"),(0,r.kt)("p",null,"WordPress Core Editor team has provided us with two different kinds of blocks:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Static blocks"),(0,r.kt)("li",{parentName:"ul"},"Dynamic blocks")),(0,r.kt)("h3",{id:"static-blocks"},"Static blocks"),(0,r.kt)("p",null,"These are the blocks that you can see in the core. Almost every block from WordPress comes this way. With static blocks, you have the same content on the front end as you do in the editor. This was accomplished by providing the same layout in the save callback as in the edit callback."),(0,r.kt)("p",null,"The drawback of building blocks this way is that you must also provide the HTML markup that you will use on the front-end, inside the save callback. That method saves everything to the database, and you can't just change the HTML markup without some transformations or deprecation methods. If you change the markup while working on it, you'll get an error in the editor screen, and you'll have to add the content again."),(0,r.kt)("p",null,"We don't like this approach because of how it stores the HTML content in the database. Lucky for us, WordPress has provided a different kind of blocks for this matter. They are called dynamic blocks."),(0,r.kt)("h3",{id:"dynamic-blocks"},"Dynamic blocks"),(0,r.kt)("p",null,"As you already saw in the previous chapter, the main difference between static and dynamic blocks is storing content in the database. For many dynamic blocks, the save callback function should be returned as null, which tells the editor to save only the block attributes to the database. These attributes are then passed into the server-side rendering callback, so you can decide how to display the block on the front end of your site."),(0,r.kt)("p",null,"This means that you write code using React and JSX in the editor, and you must provide the same code in the PHP for the front-end. Yes, it is a lot of work because you must switch technologies and do the same thing multiple times, but we tried to make this process as simple as possible."),(0,r.kt)("p",null,"Follow along and see what we prepared. From now on, we'll be talking only about dynamic blocks in this documentation."),(0,r.kt)("h2",{id:"eightshift-blocks"},"Eightshift blocks"),(0,r.kt)("p",null,"Our setup's main advantage is that you don't need to do a bunch of boilerplate every time you want to create a new block for your project. Also, we have a bunch of cool features we think you might like:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Separated blocks from components."),(0,r.kt)("li",{parentName:"ul"},"You have a predefined structure for everything."),(0,r.kt)("li",{parentName:"ul"},"If you follow the structure we provided, everything is registered and called automatically."),(0,r.kt)("li",{parentName:"ul"},'You don\'t have to worry: "did I register this the right way?", "what style goes where?", etc.'),(0,r.kt)("li",{parentName:"ul"},"Storybook for your project."),(0,r.kt)("li",{parentName:"ul"},"A dozen of the pre-created blocks from our end. Once we create a new block in some of our projects, we make it available in the libs."),(0,r.kt)("li",{parentName:"ul"},"Easy usage of blocks and components with our ",(0,r.kt)("a",{parentName:"li",href:"wp-cli"},"WP-CLI")," commands."),(0,r.kt)("li",{parentName:"ul"},"Setup that shares configuration between JS, PHP, and SCSS files."),(0,r.kt)("li",{parentName:"ul"},"Wrapper that comes with every block and allows you to control how a block behaves in the layout entirely."),(0,r.kt)("li",{parentName:"ul"},"Everything is responsive. Yes, you read that correctly; we created options that you can control on multiple breakpoints."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Everything is configurable and editable from your project.")),(0,r.kt)("li",{parentName:"ul"},"Linting standards."),(0,r.kt)("li",{parentName:"ul"},"Multiple helpers work the same on JS and PHP side, so it is easy to copy code from one language to another."),(0,r.kt)("li",{parentName:"ul"},"And much, much more.")))}p.isMDXComponent=!0},3905:function(e,t,o){o.d(t,{Zo:function(){return u},kt:function(){return p}});var n=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=c(o),p=a,b=h["".concat(l,".").concat(p)]||h[p]||d[p]||r;return o?n.createElement(b,i(i({ref:t},u),{},{components:o})):n.createElement(b,i({ref:t},u))}));function p(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<r;c++)i[c]=o[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}h.displayName="MDXCreateElement"}}]);