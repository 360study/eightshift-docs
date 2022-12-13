"use strict";(self.webpackChunk_eightshift_docs=self.webpackChunk_eightshift_docs||[]).push([[6224],{1078:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return c}});var o=n(3117),a=n(102),r=(n(7294),n(3905)),s=["components"],i={title:"Using Custom Post Types and Taxonomies",description:"How to register and use custom post types and taxonomies with Eightshift Dev Kit",slug:"using-cpts-and-taxonomies",authors:"obradovic",date:new Date("2022-12-13T00:00:00.000Z"),tags:["eightshift","boilerplate","cpt","custom post type","taxonomy","taxonomies","terms"],hide_table_of_contents:!1},l=void 0,p={permalink:"/blog/using-cpts-and-taxonomies",source:"@site/blog/2022-12-13-using-cpts-and-taxonomies.md",title:"Using Custom Post Types and Taxonomies",description:"How to register and use custom post types and taxonomies with Eightshift Dev Kit",date:"2022-12-13T00:00:00.000Z",formattedDate:"December 13, 2022",tags:[{label:"eightshift",permalink:"/blog/tags/eightshift"},{label:"boilerplate",permalink:"/blog/tags/boilerplate"},{label:"cpt",permalink:"/blog/tags/cpt"},{label:"custom post type",permalink:"/blog/tags/custom-post-type"},{label:"taxonomy",permalink:"/blog/tags/taxonomy"},{label:"taxonomies",permalink:"/blog/tags/taxonomies"},{label:"terms",permalink:"/blog/tags/terms"}],readingTime:4.11,truncated:!0,authors:[{name:"Igor Obradovi\u0107",title:"WordPress Engineer",url:"https://github.com/iobrado",imageURL:"https://avatars.githubusercontent.com/u/23059501?v=4",key:"obradovic"}],frontMatter:{title:"Using Custom Post Types and Taxonomies",description:"How to register and use custom post types and taxonomies with Eightshift Dev Kit",slug:"using-cpts-and-taxonomies",authors:"obradovic",date:"2022-12-13T00:00:00.000Z",tags:["eightshift","boilerplate","cpt","custom post type","taxonomy","taxonomies","terms"],hide_table_of_contents:!1},nextItem:{title:"Block Variations",permalink:"/blog/block-variations"}},u={authorsImageUrls:[void 0]},c=[{value:"Why should you use CPTs?",id:"why-should-you-use-cpts",level:2},{value:"Registering Custom Post Types",id:"registering-custom-post-types",level:2},{value:"Registering Taxonomies",id:"registering-taxonomies",level:2},{value:"Structure",id:"structure",level:2},{value:"Modifying options",id:"modifying-options",level:2},{value:"Clashing slugs",id:"clashing-slugs",level:2},{value:"Further reading",id:"further-reading",level:2}],m={toc:c};function g(e){var t=e.components,n=(0,a.Z)(e,s);return(0,r.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"WordPress offers two default ways to group content by content type - using posts or pages. Posts and pages are registered as default post types in the WordPress app. But sometimes, that is not enough. That's where custom post types (CPT) and custom taxonomies come in. This blog post will cover the basics of registering CPTs and taxonomies using Eightshift Dev Kit."),(0,r.kt)("h2",{id:"why-should-you-use-cpts"},"Why should you use CPTs?"),(0,r.kt)("p",null,"The great thing about WordPress is how extensible it is. With projects becoming more complex, the need for additional post types and taxonomies increases. Sure, you can cram everything into default posts or pages, but this can become very chaotic. Using custom post types allows you to manage your content much better. You can separate events and projects from news articles for instance."),(0,r.kt)("p",null,"Post ",(0,r.kt)("inlineCode",{parentName:"p"},"category")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"tag")," are taxonomies - a grouping you can further separate by terms belonging to that taxonomy. WordPress, since version 2.3.0 offers a way to register your own, custom taxonomies."),(0,r.kt)("h2",{id:"registering-custom-post-types"},"Registering Custom Post Types"),(0,r.kt)("p",null,"For this exercise, we'll create a new post type called ",(0,r.kt)("inlineCode",{parentName:"p"},"Projects"),". To make the process of registering new CPTs as easy as possible, we'll use a WP-CLI command to create our CPT with the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wp boilerplate create post-type --label='Project' --plural_label='Projects' --slug='project' --rewrite_url='project' --rest_endpoint_slug='projects'\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"If your new CPT is not working, try flushing rewrite rules by re-saving the settings in ",(0,r.kt)("strong",{parentName:"p"},"Settings -> Permalinks")," or by using ",(0,r.kt)("inlineCode",{parentName:"p"},"wp cache flush")," CLI command")),(0,r.kt)("p",null,"Your new post type is registered and ready to use! Easy, right?"),(0,r.kt)("p",null,"Sometimes all these parameters can be a bit confusing, so here's a quick reference of best practices when setting these parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Singular/Plural"),(0,r.kt)("th",{parentName:"tr",align:null},"Writing style"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"label"),(0,r.kt)("td",{parentName:"tr",align:null},"Singular"),(0,r.kt)("td",{parentName:"tr",align:null},"Regular"),(0,r.kt)("td",{parentName:"tr",align:null},"Project")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"plural_label"),(0,r.kt)("td",{parentName:"tr",align:null},"Plural"),(0,r.kt)("td",{parentName:"tr",align:null},"Regular"),(0,r.kt)("td",{parentName:"tr",align:null},"Projects")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"slug"),(0,r.kt)("td",{parentName:"tr",align:null},"Singular"),(0,r.kt)("td",{parentName:"tr",align:null},"kebab-case"),(0,r.kt)("td",{parentName:"tr",align:null},"project")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"rewrite_url"),(0,r.kt)("td",{parentName:"tr",align:null},"Singular"),(0,r.kt)("td",{parentName:"tr",align:null},"kebab-case"),(0,r.kt)("td",{parentName:"tr",align:null},"project")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"rest_endpoint_slug"),(0,r.kt)("td",{parentName:"tr",align:null},"Plural"),(0,r.kt)("td",{parentName:"tr",align:null},"kebab-case"),(0,r.kt)("td",{parentName:"tr",align:null},"projects")))),(0,r.kt)("p",null,"There is a reason for this naming convention. For example:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"slug")," is attached to a single custom post type in the database, which is why it is written in singular"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"rest_endpoint_slug")," is used to fetch a collection of posts from that custom post type, which is why it should be written in plural")),(0,r.kt)("h2",{id:"registering-taxonomies"},"Registering Taxonomies"),(0,r.kt)("p",null,"Now that we have the new custom post type, we need a way to group the projects. We'll create a custom taxonomy called ",(0,r.kt)("inlineCode",{parentName:"p"},"Project Technology"),". As with the CPT registration, the easiest way to register taxonomies is by using the following WP-CLI command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wp boilerplate create taxonomy --label='Project Technology' --plural_label='Project Technologies' --slug='project-technology' --rest_endpoint_slug='project-technologies' --post_type_slug='project'\n")),(0,r.kt)("p",null,"Similar suggestions apply to the parameters when naming taxonomies as well. Be sure to write the correct post type slug for which you are registering this new taxonomy!"),(0,r.kt)("h2",{id:"structure"},"Structure"),(0,r.kt)("p",null,"When checking your codebase after adding these new custom post types and taxonomies, you'll notice the post types are located inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"src/CustomPostType")," folder, and the taxonomies are located inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"src/CustomTaxonomy")," folder. Following the ",(0,r.kt)("strong",{parentName:"p"},"Single Responsibility Principle"),", each post type or taxonomy is in a separate class."),(0,r.kt)("h2",{id:"modifying-options"},"Modifying options"),(0,r.kt)("p",null,"Our custom post type and taxonomy are ready to use, but we still want to make some changes. For starters, we want another icon and for the Projects to be located below the Posts in the WordPress admin menu. In ",(0,r.kt)("inlineCode",{parentName:"p"},"src/CustomPostType/ProjectPostType.php"),", find the ",(0,r.kt)("inlineCode",{parentName:"p"},"MENU_POSITION")," constant and change it to ",(0,r.kt)("inlineCode",{parentName:"p"},"5"),". The lower the number, the higher it will be in the menu."),(0,r.kt)("p",null,"Next, we want to update the icon representing the new post type in the menu. These icons are named dashicons. Change the ",(0,r.kt)("inlineCode",{parentName:"p"},"MENU_ICON")," constant to ",(0,r.kt)("inlineCode",{parentName:"p"},"dashicons-clipboard"),". If you want another icon for your CPT, here is the list of ",(0,r.kt)("a",{parentName:"p",href:"https://developer.wordpress.org/resource/dashicons/"},"available dashicons"),". Finally, we want to remove the author and comments. In ",(0,r.kt)("inlineCode",{parentName:"p"},"getPostTypeArguments()")," method, find the key ",(0,r.kt)("inlineCode",{parentName:"p"},"supports")," in the return value and remove ",(0,r.kt)("inlineCode",{parentName:"p"},"author")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"comments")," from the array."),(0,r.kt)("h2",{id:"clashing-slugs"},"Clashing slugs"),(0,r.kt)("p",null,"Something that can happen when working on your project is that you have the same slugs for your custom post type and your page, for example. Let's say you have a page with a slug ",(0,r.kt)("inlineCode",{parentName:"p"},"project"),", and a custom post type with a slug ",(0,r.kt)("inlineCode",{parentName:"p"},"project"),". When trying to access the page, you'll keep getting the Project CPT archive. To fix it, you have to change one of the slugs or write a custom redirection rule (which we don't recommend, as the redirections are tricky to handle in WordPress)."),(0,r.kt)("h2",{id:"further-reading"},"Further reading"),(0,r.kt)("p",null,"For the best overview of all the options you have when registering your custom post type or taxonomy, we recommend checking the official WordPress docs for the ",(0,r.kt)("a",{parentName:"p",href:"https://developer.wordpress.org/reference/functions/register_post_type/"},"register_post_type()")," and ",(0,r.kt)("a",{parentName:"p",href:"https://developer.wordpress.org/reference/functions/register_taxonomy/"},"register_taxonomy()")," functions."),(0,r.kt)("p",null,"If you would like to know more about taxonomies and terms, along with how they are stored in the database, you can read more about it in the ",(0,r.kt)("a",{parentName:"p",href:"https://developer.wordpress.org/themes/basics/categories-tags-custom-taxonomies/"},"Categories, Tags, & Custom Taxonomies")," page of the WordPress docs."))}g.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return g}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(n),g=a,h=m["".concat(l,".").concat(g)]||m[g]||c[g]||r;return n?o.createElement(h,s(s({ref:t},u),{},{components:n})):o.createElement(h,s({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<r;p++)s[p]=n[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);