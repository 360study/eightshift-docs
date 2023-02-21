"use strict";(self.webpackChunk_eightshift_docs=self.webpackChunk_eightshift_docs||[]).push([[5669],{28238:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],l={id:"blocks-filter-block-attributes-override",title:"Filter Attributes Override"},c=void 0,s={unversionedId:"legacy/v4/guides/blocks-filter-block-attributes-override",id:"legacy/v4/guides/blocks-filter-block-attributes-override",title:"Filter Attributes Override",description:"docs-source",source:"@site/docs/legacy/v4/guides/blocks-filer-block-attributes-override.md",sourceDirName:"legacy/v4/guides",slug:"/legacy/v4/guides/blocks-filter-block-attributes-override",permalink:"/docs/legacy/v4/guides/blocks-filter-block-attributes-override",draft:!1,tags:[],version:"current",frontMatter:{id:"blocks-filter-block-attributes-override",title:"Filter Attributes Override"},sidebar:"docs",previous:{title:"GetActions Helper",permalink:"/docs/legacy/v4/guides/blocks-get-actions-helper"},next:{title:"i18n",permalink:"/docs/legacy/v4/guides/i18n"}},u={},p=[{value:"Example",id:"example",level:2}],d={toc:p};function f(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/infinum/eightshift-libs/tree/v2.0.0/src/blocks/class-blocks.php"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/source-eigthshift--libs-blue?style=for-the-badge&logo=php&labelColor=2a2a2a",alt:"docs-source"}))),(0,a.kt)("p",null,"This filter gives you the ability to hook your changes to block/wrapper attributes after they are registered in the block editor but before they are rendered in React."),(0,a.kt)("p",null,"The usage of this method is vast. You can, for example, use it to provide different block/wrapper defaults depending on the post type. For example, you have a button block that you want to have the default color red, but on the post type ",(0,a.kt)("inlineCode",{parentName:"p"},"post"),", you want that button to be black by default. Using this hook, you can easily do this."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This method can only change the default values of the attributes. Once the value is saved in the database and it is different from the default, it will stay in the database, and all these changes won't apply to it.")),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"If you haven't already, create a new class in a file ",(0,a.kt)("inlineCode",{parentName:"p"},"src/blocks/class-blocks.php")," and extend the ",(0,a.kt)("inlineCode",{parentName:"p"},"Eightshift_Libs\\Blocks\\Blocks")," class from the lib."),(0,a.kt)("p",null,"How to extend a class ",(0,a.kt)("a",{parentName:"p",href:"extending-classes"},"check here"),"."),(0,a.kt)("p",null,"Then in the filter provide a callback method that contains the overrides."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"  /**\n   * Register all the hooks\n   *\n   * @since 1.0.0\n   *\n   * @return void\n   */\n  public function register() {\n    parent::register();\n\n    add_filter( $this->config->get_config( static::BLOCK_ATTRIBUTES_FILTER_NAME ), [ $this, 'override_wrapper' ] );\n  }\n\n  /**\n   * Override wrapper on all blocks.\n   *\n   * @param array $attr Array of blocks details.\n   * @return array\n   */\n  public function override_wrapper ( array $attr ) : array {\n\n    if ( get_post_type() === 'post' ) {\n      $attr['styleBackgroundColor']['default'] = 'black';\n    }\n\n    return $attr;\n  }\n")))}f.isMDXComponent=!0},3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(r),f=o,b=d["".concat(c,".").concat(f)]||d[f]||p[f]||a;return r?n.createElement(b,i(i({ref:t},u),{},{components:r})):n.createElement(b,i({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);