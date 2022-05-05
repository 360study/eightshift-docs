"use strict";(self.webpackChunk_eightshift_docs=self.webpackChunk_eightshift_docs||[]).push([[4279],{6926:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return u}});var r=n(3117),i=n(102),a=(n(7294),n(3905)),s=["components"],o={id:"rest-field-example",title:"Field Example"},l=void 0,c={unversionedId:"legacy/v4/guides/rest-field-example",id:"legacy/v4/guides/rest-field-example",title:"Field Example",description:"docs-source",source:"@site/docs/legacy/v4/guides/rest-field-example.md",sourceDirName:"legacy/v4/guides",slug:"/legacy/v4/guides/rest-field-example",permalink:"/eightshift-docs/docs/legacy/v4/guides/rest-field-example",tags:[],version:"current",frontMatter:{id:"rest-field-example",title:"Field Example"},sidebar:"docs",previous:{title:"Rest Intro",permalink:"/eightshift-docs/docs/legacy/v4/guides/rest-intro"},next:{title:"Route Example",permalink:"/eightshift-docs/docs/legacy/v4/guides/rest-route-example"}},p={},u=[{value:"Example:",id:"example",level:2},{value:"Test in action",id:"test-in-action",level:3}],d={toc:u};function f(e){var t=e.components,n=(0,i.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/infinum/eightshift-libs/tree/master/src/rest"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/source-eigthshift--libs-blue?style=for-the-badge&logo=php&labelColor=2a2a2a",alt:"docs-source"}))),(0,a.kt)("p",null,"REST Field class is located in ",(0,a.kt)("inlineCode",{parentName:"p"},"Eightshift Libs"),". To extend it, use ",(0,a.kt)("inlineCode",{parentName:"p"},"use Eightshift_Libs\\Rest\\Base_Field")," class. This is an abstract class."),(0,a.kt)("h2",{id:"example"},"Example:"),(0,a.kt)("p",null,"To create custom REST Field:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"make a new class ",(0,a.kt)("inlineCode",{parentName:"li"},"src/rest-routes/fields/class-example-field.php"),"."),(0,a.kt)("li",{parentName:"ol"},"implement all the methods provided in the example."),(0,a.kt)("li",{parentName:"ol"},"register the class inside the ",(0,a.kt)("inlineCode",{parentName:"li"},"class-main.php")," file."),(0,a.kt)("li",{parentName:"ol"},"dump autoload.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"<?php\n/**\n * The class register field for example endpoint\n *\n * @since   1.0.0\n * @package Eightshift_Boilerplate\\Rest_Routes\\Fields\n */\n\n declare( strict_types=1 );\n\nnamespace Eightshift_Boilerplate\\Rest_Routes\\Fields;\n\nuse Eightshift_Libs\\Rest\\Base_Field;\nuse Eightshift_Libs\\Rest\\Callable_Field;\n\n/**\n * Class Register Field\n */\nclass Example_Field extends Base_Field implements Callable_Field {\n\n  /**\n   * Method that returns field object type.\n   * Object(s) the field is being registered to, \"post\"|\"term\"|\"comment\" etc.\n   *\n   * @return string|array\n   *\n   * @since 2.0.0 Added in the project\n   */\n  protected function get_object_type() : string {\n    return 'post';\n  }\n\n  /**\n   * Get the name of the field you want to register or override.\n   *\n   * @return string The attribute name.\n   *\n   * @since 2.0.0 Added in the project\n   */\n  protected function get_field_name() : string {\n    return 'example-field-name';\n  }\n\n  /**\n   * Get callback arguments array\n   *\n   * @return array Either an array of options for the endpoint, or an array of arrays for multiple methods.\n   *\n   * @since 2.0.0 Added in the project\n   */\n  protected function get_callback_arguments() : array {\n    return [\n      'get_callback' => [ $this, 'field_callback' ],\n    ];\n  }\n\n  /**\n   * Method that returns rest response\n   *\n   * @param object|array $object      Post or custom post type object of the request.\n   * @param string       $attr        Rest field/attr string identifier from the second parameter of your register_rest_field() declaration.\n   * @param object       $request     Full request payload \u2013 as a WP_REST_Request object.\n   * @param string       $object_type The object type which the field is registered against. Typically first parameter of your register_rest_field() declaration.\n   *\n   * @return mixed If response generated an error, WP_Error, if response\n   *               is already an instance, WP_HTTP_Response, otherwise\n   *               returns a new WP_REST_Response instance.\n   *\n   * @since 0.8.0 Removing type hinting void for php 7.0.\n   * @since 0.2.0 Removed type hinting from first argument because it can be object|array.\n   * @since 0.1.0\n   */\n  public function field_callback( $object, string $attr, $request, string $object_type ) : string {\n    return \\rest_ensure_response( 'output data' );\n  }\n}\n\n")),(0,a.kt)("h3",{id:"test-in-action"},"Test in action"),(0,a.kt)("p",null,"To test it in action for default boilerplate the link would be:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"domain.ext/wp-json/eightshift-boilerplate/v2/posts"),"."),(0,a.kt)("p",null,"This link will be different based on your project implementation."),(0,a.kt)("div",{class:"legacy-badge legacy-badge--v4"}))}f.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(n),f=i,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(m,s(s({ref:t},p),{},{components:n})):r.createElement(m,s({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,s=new Array(a);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);