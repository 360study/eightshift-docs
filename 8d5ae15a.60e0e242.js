(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{233:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(1),o=n(9),r=(n(0),n(308)),i={id:"wp-cli",title:"WP-CLI"},l={id:"basics/wp-cli",title:"WP-CLI",description:"[![docs-source](https://img.shields.io/badge/source-eigthshift--libs-blue?style=for-the-badge&logo=php&labelColor=2a2a2a)](https://github.com/infinum/eightshift-libs)",source:"@site/docs/basics/wp-cli.md",permalink:"/eightshift-docs/docs/basics/wp-cli",sidebar:"docs",previous:{title:"Basics",permalink:"/eightshift-docs/docs/basics/basics"},next:{title:"Backend",permalink:"/eightshift-docs/docs/basics/backend"}},c=[{value:"How it works",id:"how-it-works",children:[]},{value:"Options and commands",id:"options-and-commands",children:[{value:"Commands",id:"commands",children:[]}]},{value:"Running commands in multisite",id:"running-commands-in-multisite",children:[]}],s={rightToc:c};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/infinum/eightshift-libs"}),Object(r.b)("img",Object(a.a)({parentName:"a"},{src:"https://img.shields.io/badge/source-eigthshift--libs-blue?style=for-the-badge&logo=php&labelColor=2a2a2a",alt:"docs-source"})))),Object(r.b)("p",null,"We have already mentioned the WP-CLI feature of Eightshift Boilerplate. Now, let's dig a little deeper into this awesome feature. We took our time to set up a bunch of WP-CLI commands that will help you set everything up and use all our features without worrying about correct names, files, and organization."),Object(r.b)("h2",{id:"how-it-works"},"How it works"),Object(r.b)("p",null,"In your project's entry point, you have something like this:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-php"}),"/**\n * Run all WP-CLI commands.\n */\nif (class_exists(Cli::class)) {\n  (new Cli())->load('boilerplate');\n}\n")),Object(r.b)("p",null,"This code loads WP-CLI class from Eightshift Libs responsible for registering all of our custom commands. Keep in mind that, since WP-CLI code loads inside the theme/plugin, that same theme/plugin ",Object(r.b)("strong",{parentName:"p"},"must")," be activated in the WordPress admin."),Object(r.b)("p",null,"To run the WP-CLI command and see what you can use, run this command in your terminal:"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"wp boilerplate --help")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"By default, your project's WP-CLI commands run under the parent name ",Object(r.b)("inlineCode",{parentName:"p"},"boilerplate")," defined in the upper code.")),Object(r.b)("p",null,"You can change that by simply replacing the string inside the load method like this:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-php"}),"/**\n * Run all WP-CLI commands.\n */\nif (class_exists(Cli::class)) {\n  (new Cli())->load('superCoolTheme');\n}\n")),Object(r.b)("p",null,"Now, your project's WP-CLI loads like this:"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"wp superCoolTheme --help"),"."),Object(r.b)("p",null,"This is especially handy when you have multiple Eightshift Boilerplate powered themes or plugins installed. In that case, you should change the WP-CLI parent name on each of the projects."),Object(r.b)("h2",{id:"options-and-commands"},"Options and commands"),Object(r.b)("p",null,"When you type each command in the terminal, it will do some action. Some commands will ask you for additional parameters. You can see them if you run the ",Object(r.b)("inlineCode",{parentName:"p"},"command name")," and ",Object(r.b)("inlineCode",{parentName:"p"},"--help")," like this:"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"wp boilerplate create_config --help")),Object(r.b)("p",null,"Under the ",Object(r.b)("inlineCode",{parentName:"p"},"OPTIONS"),", you can see all required and optional parameters you can pass to the command to fine-tune your output."),Object(r.b)("h3",{id:"commands"},"Commands"),Object(r.b)("p",null,"We have defined a few command prefixes:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"create")," - services classes that will be copied to your project."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"init")," - additional functions, methods and helpers that will be copied to your project."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"run")," - commands used to run an action directly from Eightshift Libs. They will not copy anything to your project."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"setup")," - commands that runs multiple already defined commands from the list."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"use")," - commands used for blocks and block-related stuff. They will copy various files and folders from the blocks folder to your project.")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"Make WP-CLI your best friend, and your coding life will be much more comfortable, trust us."))),Object(r.b)("p",null,"We will explain some classes that we think are necessary in more detail in the next chapter. For the rest of the classes, you can find the descriptions by running ",Object(r.b)("inlineCode",{parentName:"p"},"--help")," after each command."),Object(r.b)("h2",{id:"running-commands-in-multisite"},"Running commands in multisite"),Object(r.b)("p",null,"When you are running a multisite setup you must always provide the additional ",Object(r.b)("inlineCode",{parentName:"p"},"--url")," parameter because without that parameter WordPress will always run the code from the current primary domain set in the ",Object(r.b)("inlineCode",{parentName:"p"},"wp-config.php"),"."),Object(r.b)("p",null,"Here is an example for command running from the primary domain:"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"wp boilerplate create_config")),Object(r.b)("p",null,"and here is an example for command running in the sub site:"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"wp boilerplate create_config --url='custom.domain.com'")))}p.isMDXComponent=!0},308:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},u=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,d=u["".concat(i,".").concat(m)]||u[m]||b[m]||r;return n?o.a.createElement(d,l({ref:t},s,{components:n})):o.a.createElement(d,l({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);