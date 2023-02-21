"use strict";(self.webpackChunk_eightshift_docs=self.webpackChunk_eightshift_docs||[]).push([[1740],{72093:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return p}});var a=t(87462),i=t(63366),s=(t(67294),t(3905)),r=["components"],o={id:"di-container",title:"Dependency injection container"},c=void 0,l={unversionedId:"legacy/v4/guides/di-container",id:"legacy/v4/guides/di-container",title:"Dependency injection container",description:"docs-source",source:"@site/docs/legacy/v4/guides/di-container.md",sourceDirName:"legacy/v4/guides",slug:"/legacy/v4/guides/di-container",permalink:"/docs/legacy/v4/guides/di-container",draft:!1,tags:[],version:"current",frontMatter:{id:"di-container",title:"Dependency injection container"},sidebar:"docs",previous:{title:"Extending Classes",permalink:"/docs/legacy/v4/guides/extending-classes"},next:{title:"Project Config",permalink:"/docs/legacy/v4/guides/config"}},u={},p=[{value:"Useful hint",id:"useful-hint",level:2}],d={toc:p};function h(e){var n=e.components,t=(0,i.Z)(e,r);return(0,s.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/infinum/eightshift-libs/tree/v2.0.0/src/class-main.php"},(0,s.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/source-eigthshift--libs-blue?style=for-the-badge&logo=php&labelColor=2a2a2a",alt:"docs-source"}))),(0,s.kt)("p",null,"Dependency injection is a way of implementing inversion of control design pattern. It's used to handle the dependencies between multiple classes without the direct instantiation of one class in another - which causes tight coupling in the code, and makes it less testable and harder to maintain.\nDependency injection is a way of implementing inversion of control design pattern. It's used to handle the dependencies between multiple classes without the direct instantiation of one class in another - which causes tight coupling in the code and makes it less testable and harder to maintain."),(0,s.kt)("p",null,"In general, if you instantiate another class like this inside your class"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"new SuperClass()\n")),(0,s.kt)("p",null,"that should be avoided because it tightly couples two classes."),(0,s.kt)("p",null,"Eightshift libs are using ",(0,s.kt)("a",{parentName:"p",href:"http://php-di.org/"},"PHP-DI")," as an implementation of a dependency injection container. We'll explain the implementation by following the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/infinum/eightshift-boilerplate/tree/v4.0.0/src/class-main.php"},"eightshift-boilerplate")," example."),(0,s.kt)("p",null,"In your main class, which is used to store all the dependencies in your code, and which extends the main eightshift-lib class (",(0,s.kt)("inlineCode",{parentName:"p"},"Eightshift_Libs\\Core\\Main"),"), you need to define a method called ",(0,s.kt)("inlineCode",{parentName:"p"},"get_service_classes()")," which contains an array of service classes (those that have a way to register hooks in your WordPress project):"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"protected function get_service_classes() : array {\n  return [\n\n    // Config.\n    Config::class,\n\n    // Manifest.\n    Lib_Manifest\\Manifest::class => [ Config::class ],\n\n    // I18n.\n    Lib_I18n\\I18n::class => [ Config::class ],\n\n    // Enqueue.\n    Lib_Enqueue\\Enqueue_Admin::class => [ Config::class, Lib_Manifest\\Manifest::class ],\n    Lib_Enqueue\\Enqueue_Theme::class => [ Config::class, Lib_Manifest\\Manifest::class ],\n    Lib_Enqueue\\Enqueue_Blocks::class => [ Config::class, Lib_Manifest\\Manifest::class ],\n\n    // Login.\n    Lib_Login\\Login::class,\n\n    // Media.\n    Media\\Media::class,\n\n    // Admin.\n    Admin\\Modify_Admin_Appearance::class,\n\n    // Menu.\n    Menu\\Menu::class,\n\n    // Blocks.\n    Lib_Blocks\\Blocks::class => [ Config::class ],\n  ];\n}\n")),(0,s.kt)("p",null,"Whenever a class has a dependency on another class, you'd add this dependency through a process of constructor injection. For instance, the ",(0,s.kt)("inlineCode",{parentName:"p"},"Enqueue_Admin")," class depends on both the ",(0,s.kt)("inlineCode",{parentName:"p"},"Config")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"Manifest")," classes. Looking at the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/infinum/eightshift-libs/tree/v2.0.0/src/enqueue/class-enqueue-admin.php"},"implementation")," we have:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"class Enqueue_Admin implements Service {\n  public function __construct( Config_Data $config, Manifest_Data $manifest ) {\n    $this->config   = $config;\n    $this->manifest = $manifest;\n  }\n}\n")),(0,s.kt)("p",null,"Notice that we could add ",(0,s.kt)("inlineCode",{parentName:"p"},"Lib_Manifest\\Manifest")," as a type hint in the constructor of the ",(0,s.kt)("inlineCode",{parentName:"p"},"Enqueue_Admin")," class and ",(0,s.kt)("inlineCode",{parentName:"p"},"Lib_Manifest\\Config")," as well, but instead, we used their ",(0,s.kt)("em",{parentName:"p"},"interfaces"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"Config_Data")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"Manifest_Data"),". If we used concrete classes, we wouldn't have to add these in the ",(0,s.kt)("inlineCode",{parentName:"p"},"get_service_classes()")," method array, because the DI container lib would be able to figure out what class the ",(0,s.kt)("inlineCode",{parentName:"p"},"Enqueue_Admin")," class uses as a dependency through a process called ",(0,s.kt)("a",{parentName:"p",href:"https://www.php.net/manual/en/intro.reflection.php"},"reflection"),"."),(0,s.kt)("p",null,"This, however, creates a tight coupling - the ",(0,s.kt)("inlineCode",{parentName:"p"},"Enqueue_Admin")," class now ",(0,s.kt)("strong",{parentName:"p"},"always")," depends on these concrete classes, and we cannot easily replace them if we want to create automated tests.\nThis is why we use interfaces since interface only mandates the contract our class needs to honor - not the implementation of that contract."),(0,s.kt)("p",null,"By adding the interfaces we need to say to our DI container what the classes, that implement these interfaces, actually are. This is why we needed to define:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"Lib_Enqueue\\Enqueue_Admin::class => [ Config::class, Lib_Manifest\\Manifest::class ]\n")),(0,s.kt)("p",null,"in our ",(0,s.kt)("inlineCode",{parentName:"p"},"get_service_classes()")," method."),(0,s.kt)("p",null,"The beauty of this method is that we can easily add mocks in our automated tests:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"protected function get_service_classes() : array {\n  $services = [\n    Lib_Enqueue\\Enqueue_Admin::class => [ Config::class, Lib_Manifest\\Manifest::class ],\n    // Other classes go here.\n  ];\n\n  if ( getenv('TEST') ) {\n    $services[ Lib_Enqueue\\Enqueue_Admin::class ] => [ Fixture\\Config::class, Fixture\\Manifest::class ];\n  }\n\n  return $services;\n}\n")),(0,s.kt)("p",null,"If we had an environment variable ",(0,s.kt)("inlineCode",{parentName:"p"},"TEST")," defined in our ",(0,s.kt)("inlineCode",{parentName:"p"},"phpunit.xml")," defined, this means that the ",(0,s.kt)("inlineCode",{parentName:"p"},"Lib_Enqueue\\Enqueue_Admin")," class will get overwritten during the test run, and we can pass the fake classes from the ",(0,s.kt)("inlineCode",{parentName:"p"},"Fixture")," namespace."),(0,s.kt)("p",null,"This is just a simple example, but one that could prove useful when writing testable code in the future, and something to be mindful of."),(0,s.kt)("h2",{id:"useful-hint"},"Useful hint"),(0,s.kt)("p",null,"Don't pass too many dependencies in your classes. Having more than three dependencies is usually a sign that your class may be doing too much, and that it should probably be broken down into more different classes."))}h.isMDXComponent=!0},3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return h}});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=a.createContext({}),l=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},u=function(e){var n=l(e.components);return a.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,s=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=l(t),h=i,f=d["".concat(c,".").concat(h)]||d[h]||p[h]||s;return t?a.createElement(f,r(r({ref:n},u),{},{components:t})):a.createElement(f,r({ref:n},u))}));function h(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var s=t.length,r=new Array(s);r[0]=d;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var l=2;l<s;l++)r[l]=t[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);