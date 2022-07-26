"use strict";(self.webpackChunk_eightshift_docs=self.webpackChunk_eightshift_docs||[]).push([[4460],{1591:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return f}});var r=n(3117),a=n(102),o=(n(7294),n(3905)),i=["components"],s={id:"manifest",title:"Manifest",sidebar_label:"Manifest"},l=void 0,c={unversionedId:"legacy/v5/basics/manifest",id:"legacy/v5/basics/manifest",title:"Manifest",description:"docs-source",source:"@site/docs/legacy/v5/basics/manifest.md",sourceDirName:"legacy/v5/basics",slug:"/legacy/v5/basics/manifest",permalink:"/docs/legacy/v5/basics/manifest",tags:[],version:"current",frontMatter:{id:"manifest",title:"Manifest",sidebar_label:"Manifest"},sidebar:"docs",previous:{title:"The Structure",permalink:"/docs/legacy/v5/basics/the-structure"},next:{title:"Rest Intro",permalink:"/docs/legacy/v5/basics/rest"}},u={},f=[{value:"How to use it",id:"how-to-use-it",level:2},{value:"Why not just fetch the asset the old-fashioned way?",id:"why-not-just-fetch-the-asset-the-old-fashioned-way",level:2}],p={toc:f};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/infinum/eightshift-libs"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/source-eigthshift--libs-blue?style=for-the-badge&logo=php&labelColor=2a2a2a",alt:"docs-source"}))),(0,o.kt)("p",null,"In the build process, Webpack creates all the static files from your assets folder and also ",(0,o.kt)("inlineCode",{parentName:"p"},"manifest.json")," inside the public folder. The manifest file contains a key/value list that we use to call the location of the assets dynamically."),(0,o.kt)("p",null,"This class provides ",(0,o.kt)("inlineCode",{parentName:"p"},"manifest.json")," file location and helpers to return the full path for a specific asset."),(0,o.kt)("h2",{id:"how-to-use-it"},"How to use it"),(0,o.kt)("p",null,"First, install the manifest class if you didn't use the default project installation using this command:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"wp boilerplate create_manifest")),(0,o.kt)("p",null,"You will see a custom filter you can use to fetch the item from the public folder in your class. This is the custom filter:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"/**\n * Manifest item filter name constant.\n *\n * @var string\n */\npublic const MANIFEST_ITEM = 'manifest-item';\n\n/**\n * Register all hooks. Changed filter name to manifest.\n *\n * @return void\n */\npublic function register(): void\n{\n    \\add_filter(static::MANIFEST_ITEM, [ $this, 'getAssetsManifestItem' ]);\n}\n")),(0,o.kt)("p",null,"To use this filter, add the following code and provide the correct name of your asset:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"use CoolProject\\Manifest\\Manifest;\n\n$logo = \\apply_filters(Manifest::MANIFEST_ITEM, 'logo.svg');\n")),(0,o.kt)("p",null,"And that's it. This filter will check the public folder for the ",(0,o.kt)("inlineCode",{parentName:"p"},"manifest.json")," file, parse it, and return the value of the provided key."),(0,o.kt)("p",null,"If there is no ",(0,o.kt)("inlineCode",{parentName:"p"},"manifest.json")," file or you provided the wrong asset name, there will be a descriptive message for you."),(0,o.kt)("h2",{id:"why-not-just-fetch-the-asset-the-old-fashioned-way"},"Why not just fetch the asset the old-fashioned way?"),(0,o.kt)("p",null,"By the old-fashioned way, we mean running something like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"$logo = get_template_directory_uri() . 'public/logo.svg';\n")),(0,o.kt)("p",null,"You can definitely do this. But with our filter, if you want to change the public folder location or public folder name for some reason, you can change it in one place and you're done."),(0,o.kt)("p",null,"If you are using the old-fashioned way, you would need to search and replace the whole project and implement the change. There is always a chance you would miss something, break the project, etc."),(0,o.kt)("div",{class:"legacy-badge legacy-badge--v5"}))}d.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),d=a,h=p["".concat(l,".").concat(d)]||p[d]||f[d]||o;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);