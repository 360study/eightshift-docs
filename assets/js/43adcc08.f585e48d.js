"use strict";(self.webpackChunk_eightshift_docs=self.webpackChunk_eightshift_docs||[]).push([[2209],{84731:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var a=t(87462),r=t(63366),i=(t(67294),t(3905)),o=["components"],s={id:"extending-classes",title:"Extending Classes"},l=void 0,c={unversionedId:"legacy/v4/guides/extending-classes",id:"legacy/v4/guides/extending-classes",title:"Extending Classes",description:"docs-source",source:"@site/docs/legacy/v4/guides/extending-classes.md",sourceDirName:"legacy/v4/guides",slug:"/legacy/v4/guides/extending-classes",permalink:"/docs/legacy/v4/guides/extending-classes",draft:!1,tags:[],version:"current",frontMatter:{id:"extending-classes",title:"Extending Classes"},sidebar:"docs",previous:{title:"Versions",permalink:"/docs/legacy/v4/versions"},next:{title:"Dependency injection container",permalink:"/docs/legacy/v4/guides/di-container"}},u={},p=[{value:"Important notes",id:"important-notes",level:2},{value:"Example",id:"example",level:2}],d={toc:p};function m(e){var n=e.components,t=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/infinum/eightshift-libs/tree/v2.0.0"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/source-eigthshift--libs-blue?style=for-the-badge&logo=php&labelColor=2a2a2a",alt:"docs-source"}))),(0,i.kt)("p",null,"We are providing abstract classes, interfaces, helpers, dependency injection and namespaces for your project. In general, you can use anything as-is from the vendor library, or you can modify/add the functionality of existing classes by extending them in your project."),(0,i.kt)("p",null,"If you are familiar with the extending classes (object inheritance) in PHP language then you can just skip this chapter but for the rest of you here is an awesome description on how it works:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.php.net/manual/en/language.oop5.interfaces.php"},"Interfaces")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Dependency_injection"},"Dependency Injection")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.php.net/manual/en/language.oop5.abstract.php"},"Abstract Classes")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.php.net/manual/en/language.oop5.inheritance.php"},"Object Inheritance")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.php.net/manual/en/language.namespaces.php"},"Namespaces")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.php.net/manual/en/language.oop5.traits.php"},"Traits"))),(0,i.kt)("p",null,"Please get acquainted with these concepts before you continue because they will help you in the later chapters."),(0,i.kt)("h2",{id:"important-notes"},"Important notes"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"PHP part of this project lives in ",(0,i.kt)("inlineCode",{parentName:"p"},"Eightshift_Libs")," namespace.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"When adding a new class, changing the class name or changing the class file name, don't forget to run ",(0,i.kt)("inlineCode",{parentName:"p"},"composer dump-autoload")," to rebuild the autoload map.")),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"Every class in the lib can be extended and certain parts of it can be overriden or removed. For example, let's look at a way to remove loading of the admin style CSS assets."),(0,i.kt)("p",null,"In order to override the ",(0,i.kt)("inlineCode",{parentName:"p"},"Eightshift_Lib\\Enqueue_Admin")," class, you should create a new class, preferably in the ",(0,i.kt)("inlineCode",{parentName:"p"},"enqueue")," folder in your project.\nIn your ",(0,i.kt)("inlineCode",{parentName:"p"},"enqueue\\class-admin-enqueue.php")," file you'd do:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"<?php\n/**\n * The Admin Enqueue specific functionality.\n *\n * @package Your_Project\\Enqueue\n */\n\ndeclare( strict_types=1 );\n\nnamespace Your_Project\\Enqueue;\n\nuse Eightshift_Libs\\Enqueue\\Enqueue_Admin;\n\nclass Admin_Enqueue extends Enqueue_Admin {\n  /**\n   * Register all the hooks\n   *\n   * @return void\n   *\n   * @since 2.0.0\n   */\n  public function register() {\n    parent::register();\n\n    // We do not want to load the login and admin styles.\n    remove_action( 'login_enqueue_scripts', [ $this, 'enqueue_styles' ] );\n    remove_action( 'admin_enqueue_scripts', [ $this, 'enqueue_styles' ], 50 );\n  }\n}\n")),(0,i.kt)("p",null,"This way, only ",(0,i.kt)("inlineCode",{parentName:"p"},"add_action( 'admin_enqueue_scripts', [ $this, 'enqueue_scripts' ] );")," hook will run, and only admin scripts will be loaded. You just need to be sure to modify your webpack settings so that admin CSS scripts are not bundled."),(0,i.kt)("p",null,"You can do this with other classess in the lib - ",(0,i.kt)("inlineCode",{parentName:"p"},"Blocks"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Columns"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Manifest"),", etc. in the same way."))}m.isMDXComponent=!0},3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(t),m=r,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return t?a.createElement(h,o(o({ref:n},u),{},{components:t})):a.createElement(h,o({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);