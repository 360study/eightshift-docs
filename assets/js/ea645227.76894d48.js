"use strict";(self.webpackChunk_eightshift_docs=self.webpackChunk_eightshift_docs||[]).push([[3511],{85988:function(e,t,o){o.r(t),o.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return r},metadata:function(){return c},toc:function(){return p}});var n=o(87462),a=o(63366),i=(o(67294),o(3905)),l=["components"],r={id:"blocks-faq",title:"Faq"},s=void 0,c={unversionedId:"legacy/v8/basics/blocks-faq",id:"legacy/v8/basics/blocks-faq",title:"Faq",description:"docs-source",source:"@site/docs/legacy/v8/basics/blocks-faq.md",sourceDirName:"legacy/v8/basics",slug:"/legacy/v8/basics/blocks-faq",permalink:"/docs/legacy/v8/basics/blocks-faq",draft:!1,tags:[],version:"current",frontMatter:{id:"blocks-faq",title:"Faq"},sidebar:"docs",previous:{title:"Important",permalink:"/docs/legacy/v8/basics/blocks-important"},next:{title:"Registration",permalink:"/docs/legacy/v8/basics/blocks-registration"}},u={},p=[{value:"Why do all my blocks look the same and have the same name structure?",id:"why-do-all-my-blocks-look-the-same-and-have-the-same-name-structure",level:3},{value:"What is the difference between components and blocks?",id:"what-is-the-difference-between-components-and-blocks",level:3},{value:"Do I need to have Storybook stories in my block?",id:"do-i-need-to-have-storybook-stories-in-my-block",level:3},{value:"Do you support block variations, and how can I use them?",id:"do-you-support-block-variations-and-how-can-i-use-them",level:3},{value:"Do you support patterns, and how can I use them?",id:"do-you-support-patterns-and-how-can-i-use-them",level:3},{value:"What is a wrapper?",id:"what-is-a-wrapper",level:3},{value:"Do you support inner blocks?",id:"do-you-support-inner-blocks",level:3},{value:"Why do you use manifest.json in all blocks and components?",id:"why-do-you-use-manifestjson-in-all-blocks-and-components",level:3},{value:"Why do you use global manifest.json?",id:"why-do-you-use-global-manifestjson",level:3},{value:"If I want to create a new block/component, what do I do?",id:"if-i-want-to-create-a-new-blockcomponent-what-do-i-do",level:3},{value:"What if I add a block and it throws an error that it is missing some components, what do I do?",id:"what-if-i-add-a-block-and-it-throws-an-error-that-it-is-missing-some-components-what-do-i-do",level:3},{value:"How can I use your pre-made blocks?",id:"how-can-i-use-your-pre-made-blocks",level:3},{value:"Can I use block/component from Eightshift-frontend-libs directly?",id:"can-i-use-blockcomponent-from-eightshift-frontend-libs-directly",level:3},{value:"I want to change attributes on inner blocks. How do I do it?",id:"i-want-to-change-attributes-on-inner-blocks-how-do-i-do-it",level:3},{value:"Do I need to write JS and PHP implementation for all my blocks?",id:"do-i-need-to-write-js-and-php-implementation-for-all-my-blocks",level:3},{value:"How do I use components in blocks?",id:"how-do-i-use-components-in-blocks",level:3},{value:"How do I use multiple heading components in my block?",id:"how-do-i-use-multiple-heading-components-in-my-block",level:3},{value:"Where can I define my global styles?",id:"where-can-i-define-my-global-styles",level:3},{value:"Where can I define global typography for all my blocks/components?",id:"where-can-i-define-global-typography-for-all-my-blockscomponents",level:3},{value:"Can I make a component with WP_Query logic in it?",id:"can-i-make-a-component-with-wp_query-logic-in-it",level:3},{value:"Do I need to make components for all my blocks?",id:"do-i-need-to-make-components-for-all-my-blocks",level:3},{value:"Will this setup work with full site editing?",id:"will-this-setup-work-with-full-site-editing",level:3},{value:"Can I use core blocks with your setup?",id:"can-i-use-core-blocks-with-your-setup",level:3},{value:"How can I limit my blocklist?",id:"how-can-i-limit-my-blocklist",level:3},{value:"How to allow only one pattern category?",id:"how-to-allow-only-one-pattern-category",level:3},{value:"Can I have blocks in multiple categories?",id:"can-i-have-blocks-in-multiple-categories",level:3},{value:"How can I add a new block category?",id:"how-can-i-add-a-new-block-category",level:3},{value:"What if you don&#39;t yet support something from the native setup? What can I do?",id:"what-if-you-dont-yet-support-something-from-the-native-setup-what-can-i-do",level:3},{value:"Why is my blocks folder called <code>custom</code> and not <code>blocks</code>, for example?",id:"why-is-my-blocks-folder-called-custom-and-not-blocks-for-example",level:3},{value:"In the global manifest, you have a key called \u201ccustomBlocksName\u201d: \u201ceightshift-block\u201d. Can I change this to my-project-name-block?",id:"in-the-global-manifest-you-have-a-key-called-customblocksname-eightshift-block-can-i-change-this-to-my-project-name-block",level:3},{value:"Simple vs Compound blocks",id:"simple-vs-compound-blocks",level:3},{value:"Naming is hard",id:"naming-is-hard",level:3}],d={toc:p};function h(e){var t=e.components,o=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/infinum/eightshift-frontend-libs/tree/develop/blocks/init/src/Blocks/"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/source-eightshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a",alt:"docs-source"}))),(0,i.kt)("p",null,"Before we dive into blocks and see how everything is set, we should describe this setup's mindset.\nIf you've managed to set up your project by this point with the ",(0,i.kt)("a",{parentName:"p",href:"wp-cli"},"WP-CLI")," command ",(0,i.kt)("inlineCode",{parentName:"p"},"init theme"),", you might have a few questions. We will try to answer all those questions here."),(0,i.kt)("h3",{id:"why-do-all-my-blocks-look-the-same-and-have-the-same-name-structure"},"Why do all my blocks look the same and have the same name structure?"),(0,i.kt)("p",null,"This is so because we defined the name structure for all our blocks and components to load everything automatically. For more information, please check the ",(0,i.kt)("a",{parentName:"p",href:"block-structure"},"block structure")," and ",(0,i.kt)("a",{parentName:"p",href:"blocks-component-structure"},"component structure")," chapters."),(0,i.kt)("h3",{id:"what-is-the-difference-between-components-and-blocks"},"What is the difference between components and blocks?"),(0,i.kt)("p",null,"The main difference is that blocks are available in the block editor's block picker, and components are not. With that being said, blocks are registered using the ",(0,i.kt)("inlineCode",{parentName:"p"},"registerBlockType")," method, and components are just here for you to bundle some functionality in one place and reuse it wherever you need."),(0,i.kt)("p",null,"For more information about blocks, read the ",(0,i.kt)("a",{parentName:"p",href:"block-structure"},"block structure")," chapter. To find out more about components, read the ",(0,i.kt)("a",{parentName:"p",href:"blocks-component-structure"},"component structure")," chapter."),(0,i.kt)("h3",{id:"do-i-need-to-have-storybook-stories-in-my-block"},"Do I need to have Storybook stories in my block?"),(0,i.kt)("p",null,"No, you don't. But we provided you with the ability to use the Storybook for all of your blocks and components. Why not use it? It will speed up your development time. Trust us. \ud83d\ude42"),(0,i.kt)("p",null,"For more details on how to write stories, check out ",(0,i.kt)("a",{parentName:"p",href:"blocks-storybook"},"this chapter"),"."),(0,i.kt)("h3",{id:"do-you-support-block-variations-and-how-can-i-use-them"},"Do you support block variations, and how can I use them?"),(0,i.kt)("p",null,"Yes, we do. All block variations are located in the ",(0,i.kt)("inlineCode",{parentName:"p"},"src/Blocks/variations")," folder. For more information about this, please check the ",(0,i.kt)("a",{parentName:"p",href:"blocks-variations"},"variations")," chapter."),(0,i.kt)("h3",{id:"do-you-support-patterns-and-how-can-i-use-them"},"Do you support patterns, and how can I use them?"),(0,i.kt)("p",null,"Yes, we do. For more information, please read the ",(0,i.kt)("a",{parentName:"p",href:"blocks-patterns"},"patterns")," chapter."),(0,i.kt)("h3",{id:"what-is-a-wrapper"},"What is a wrapper?"),(0,i.kt)("p",null,"Read about wrappers in ",(0,i.kt)("a",{parentName:"p",href:"blocks-wrapper"},"this chapter"),"."),(0,i.kt)("h3",{id:"do-you-support-inner-blocks"},"Do you support inner blocks?"),(0,i.kt)("p",null,"Yes, we support everything that the core natively supports.  You can find more information on how to use them in ",(0,i.kt)("a",{parentName:"p",href:"block-manifest"},"this chapter"),"."),(0,i.kt)("h3",{id:"why-do-you-use-manifestjson-in-all-blocks-and-components"},"Why do you use manifest.json in all blocks and components?"),(0,i.kt)("p",null,"So that we can provide content, attributes, options, and much more across multiple different files in multiple contexts (in both PHP and JS). You can read all about it in ",(0,i.kt)("a",{parentName:"p",href:"block-manifest"},"this chapter"),"."),(0,i.kt)("h3",{id:"why-do-you-use-global-manifestjson"},"Why do you use global manifest.json?"),(0,i.kt)("p",null,"The answer is the same as the previous one. In the global ",(0,i.kt)("inlineCode",{parentName:"p"},"manifest.json"),", we have options that are shared across all blocks and components. Read more about it in ",(0,i.kt)("a",{parentName:"p",href:"blocks-global-manifest"},"this chapter"),"."),(0,i.kt)("h3",{id:"if-i-want-to-create-a-new-blockcomponent-what-do-i-do"},"If I want to create a new block/component, what do I do?"),(0,i.kt)("p",null,"In your terminal, write"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"wp boilerplate blocks use-block --name=example\n")),(0,i.kt)("p",null,"and style that block however you seem fit."),(0,i.kt)("h3",{id:"what-if-i-add-a-block-and-it-throws-an-error-that-it-is-missing-some-components-what-do-i-do"},"What if I add a block and it throws an error that it is missing some components, what do I do?"),(0,i.kt)("p",null,"All blocks/components have some kind of documentation and in that documentation we have a list of dependencies each block/component needs to have in the project in order for it to work. For example you can look in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/infinum/eightshift-frontend-libs/blob/develop/blocks/init/src/Blocks/custom/heading/docs/readme.mdx"},"heading block"),", as you can see the heading blocks depends on the heading component, so if you install a heading block before heading component it will resolve in to an error. So please be sure that your block/component installation follows the correct order."),(0,i.kt)("h3",{id:"how-can-i-use-your-pre-made-blocks"},"How can I use your pre-made blocks?"),(0,i.kt)("p",null,"You can check all available blocks/components using these two commands"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"wp boilerplate blocks use-block --help\n\nwp boilerplate blocks use-component --help\n")),(0,i.kt)("h3",{id:"can-i-use-blockcomponent-from-eightshift-frontend-libs-directly"},"Can I use block/component from Eightshift-frontend-libs directly?"),(0,i.kt)("p",null,"It depends. You can't use things from the blocks folder like ",(0,i.kt)("inlineCode",{parentName:"p"},"components"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"custom"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"variations"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"wrapper"),", etc. They are meant to be copied to your project, styled, and changed depending on your project's needs."),(0,i.kt)("p",null,"You can move things from a block to your project using the commands described ",(0,i.kt)("a",{parentName:"p",href:"#how-can-i-use-your-pre-made-blocks"},"above"),"."),(0,i.kt)("h3",{id:"i-want-to-change-attributes-on-inner-blocks-how-do-i-do-it"},"I want to change attributes on inner blocks. How do I do it?"),(0,i.kt)("p",null,"We described how attributes are used and combined in ",(0,i.kt)("a",{parentName:"p",href:"blocks-attributes"},"this chapter")," and ",(0,i.kt)("a",{parentName:"p",href:"blocks-component-in-block"},"this chapter"),"."),(0,i.kt)("h3",{id:"do-i-need-to-write-js-and-php-implementation-for-all-my-blocks"},"Do I need to write JS and PHP implementation for all my blocks?"),(0,i.kt)("p",null,"For a block, you must provide the JS and PHP implementations because it won't work without them."),(0,i.kt)("p",null,"For components, if you are not using the JS part, you don't need to write one, but we recommend you do so because the JS part is used in Storybook."),(0,i.kt)("p",null,"If you have a more advanced block and don't benefit from writing the JS implementation of the block, you can always use the ",(0,i.kt)("a",{parentName:"p",href:"https://developer.wordpress.org/block-editor/packages/packages-server-side-render/"},"ServerSideRender component")," form the core. If you have no inputs in the editor from the admin, there is no need to write JS implementation of the block. Just use ",(0,i.kt)("inlineCode",{parentName:"p"},"ServerSideRender")," component in that case."),(0,i.kt)("h3",{id:"how-do-i-use-components-in-blocks"},"How do I use components in blocks?"),(0,i.kt)("p",null,"Please check out ",(0,i.kt)("a",{parentName:"p",href:"blocks-component-in-block"},"this chapter")," for more information."),(0,i.kt)("h3",{id:"how-do-i-use-multiple-heading-components-in-my-block"},"How do I use multiple heading components in my block?"),(0,i.kt)("p",null,"You can follow the instructions given in ",(0,i.kt)("a",{parentName:"p",href:"blocks-component-in-block"},"this chapter"),"."),(0,i.kt)("h3",{id:"where-can-i-define-my-global-styles"},"Where can I define my global styles?"),(0,i.kt)("p",null,"You can follow the instructions given in ",(0,i.kt)("a",{parentName:"p",href:"writing-styles"},"this chapter"),"."),(0,i.kt)("h3",{id:"where-can-i-define-global-typography-for-all-my-blockscomponents"},"Where can I define global typography for all my blocks/components?"),(0,i.kt)("p",null,"You can follow the instructions given in ",(0,i.kt)("a",{parentName:"p",href:"writing-styles"},"this chapter"),"."),(0,i.kt)("h3",{id:"can-i-make-a-component-with-wp_query-logic-in-it"},"Can I make a component with WP_Query logic in it?"),(0,i.kt)("p",null,"Yes, you can, but think of the component as a dumb and simple piece of code that should not hold any business logic. A component should only be used as a view. If you need to write WP_Query logic, you can do that in a block and just pass the data to your component as props."),(0,i.kt)("h3",{id:"do-i-need-to-make-components-for-all-my-blocks"},"Do I need to make components for all my blocks?"),(0,i.kt)("p",null,"No, it might look like that from the examples provided, but that is not the case. You should create components depending on your needs."),(0,i.kt)("p",null,"Ask yourself, will I reuse this functionality anywhere else?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If the answer is ",(0,i.kt)("strong",{parentName:"li"},"yes"),", create a component."),(0,i.kt)("li",{parentName:"ul"},"If the answer is ",(0,i.kt)("strong",{parentName:"li"},"no"),", don't create a component.")),(0,i.kt)("p",null,"Our recommendation is not to burden yourself with components from the beginning. Start creating blocks and, if you find yourself in need of code that you already wrote, just extract it in a component."),(0,i.kt)("h3",{id:"will-this-setup-work-with-full-site-editing"},"Will this setup work with full site editing?"),(0,i.kt)("p",null,"Yes, it will. We are constantly upgrading this documentation and our code to say that it will work with full site editing. This boilerplate was made for the Infinum/Eightshift WordPress team, so we are constantly using it in our projects."),(0,i.kt)("h3",{id:"can-i-use-core-blocks-with-your-setup"},"Can I use core blocks with your setup?"),(0,i.kt)("p",null,"Yes, you can. We are working on the ability to override core blocks in our smart way. Until we make this work, you can use everything that is already defined in the core documentation."),(0,i.kt)("p",null,"We avoid using core blocks because they add different class naming and additional markup that makes it harder to style things."),(0,i.kt)("p",null,"Also, they are prone to breaking changes every several months, so we prefer to write our own implementation."),(0,i.kt)("h3",{id:"how-can-i-limit-my-blocklist"},"How can I limit my blocklist?"),(0,i.kt)("p",null,"Easy. We have a method you can extend that limits your project's block to the only block from your project. You should put this filter in your project's ",(0,i.kt)("inlineCode",{parentName:"p"},"src/Blocks/Blocks.php")," file under the ",(0,i.kt)("inlineCode",{parentName:"p"},"register")," method:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"  // Limits the usage of only custom project blocks.\n  add_filter('allowed_block_types_all', [ $this, 'getAllBlocksList' ], 10, 2);\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Important note: For WordPress versions > 5 and < 5.8 you would need to use the example bellow.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"  // Limits the usage of only custom project blocks - legacy.\n  add_filter('allowed_block_types', [ $this, 'getAllBlocksListOld' ], 10, 2);\n")),(0,i.kt)("h3",{id:"how-to-allow-only-one-pattern-category"},"How to allow only one pattern category?"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Coming soon")),(0,i.kt)("h3",{id:"can-i-have-blocks-in-multiple-categories"},"Can I have blocks in multiple categories?"),(0,i.kt)("p",null,"In your block manifest, you can define in what category your block will appear. You can create a new category for your project or use our category. We created our category called ",(0,i.kt)("inlineCode",{parentName:"p"},"eightshift")," using this filter:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"  // Create a new custom category for custom blocks.\n  add_filter('block_categories', [ $this, 'getCustomCategory' ]);\n")),(0,i.kt)("h3",{id:"how-can-i-add-a-new-block-category"},"How can I add a new block category?"),(0,i.kt)("p",null,"You can provide your implementation, or you can extend our method for registering a custom category. Here is how you do it:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"public function register(): void\n{\n  // Create a new custom category for custom blocks.\n  add_filter('block_categories', [ $this, 'getCustomCategory' ]);\n}\n\n /**\n  * Create a custom category to assign all custom blocks\n  *\n  * This category will be shown on all blocks list in the \"Add Block\" button.\n  *\n  * @param array[]  $categories Array of all block categories.\n  * @param \\WP_Post $post Post being loaded.\n  *\n  * @return array[] Array of block categories.\n  */\npublic function getCustomCategory(array $categories, \\WP_Post $post): array\n{\n  return array_merge(\n    parent::getCustomCategory($categories, $post),\n    [\n      [\n        'slug' => 'custom-category-name',\n        'title' => \\esc_html__('Custom Category', 'project-text-domain'),\n        'icon' => 'admin-settings',\n      ],\n    ]\n  );\n}\n")),(0,i.kt)("h3",{id:"what-if-you-dont-yet-support-something-from-the-native-setup-what-can-i-do"},"What if you don't yet support something from the native setup? What can I do?"),(0,i.kt)("p",null,"As we described in ",(0,i.kt)("a",{parentName:"p",href:"blocks"},"this chapter"),", if we don't support something natively from the core or you can't find it in this documentation, you can always use it in the normal native way from the ",(0,i.kt)("a",{parentName:"p",href:"https://developer.wordpress.org/block-editor/tutorials/block-tutorial/"},"WordPress documentation"),". Also, if you think we are missing something, please open a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/infinum/eightshift-frontend-libs/pulls"},"pull request")," or an ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/infinum/eightshift-frontend-libs/issues"},"issue")," on our GitHub repository."),(0,i.kt)("h3",{id:"why-is-my-blocks-folder-called-custom-and-not-blocks-for-example"},"Why is my blocks folder called ",(0,i.kt)("inlineCode",{parentName:"h3"},"custom")," and not ",(0,i.kt)("inlineCode",{parentName:"h3"},"blocks"),", for example?"),(0,i.kt)("p",null,"The idea was to put all your custom blocks inside the custom folder and all core block in the core folder. This boilerplate is not designed only for your custom block, but you can use it as an ultimate block setup."),(0,i.kt)("p",null,"And folder structure ",(0,i.kt)("inlineCode",{parentName:"p"},"src/Blocks/blocks")," is kind of weird."),(0,i.kt)("h3",{id:"in-the-global-manifest-you-have-a-key-called-customblocksname-eightshift-block-can-i-change-this-to-my-project-name-block"},"In the global manifest, you have a key called \u201ccustomBlocksName\u201d: \u201ceightshift-block\u201d. Can I change this to my-project-name-block?"),(0,i.kt)("p",null,"You can, but you shouldn't. We use this key to provide the CSS selectors on all our custom blocks in the block editor. Additional styles are added to this selector for the wrapper to work on full width and remove some of the native block editor styles."),(0,i.kt)("p",null,"So don't remove or change this \ud83d\ude05."),(0,i.kt)("h3",{id:"simple-vs-compound-blocks"},"Simple vs Compound blocks"),(0,i.kt)("p",null,"In a nutshell, there is no difference between blocks. The WordPress core block is a block, but we like to make a distinction between what is simple and what is a compound block."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Simple block")," is a block that is used just as is and provides a small isolated functionality. For example: heading, paragraph, button, etc."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Compound block")," is a block built from multiple components. For example: card, featured posts, etc"),(0,i.kt)("h3",{id:"naming-is-hard"},"Naming is hard"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"There are only two hard things in Computer Science: cache invalidation and naming things. - Phil Karlton")),(0,i.kt)("p",null,"Yes, naming is hard, and no matter how long your development experience is you will always struggle with names for your components, block, files, variables, functions, etc."),(0,i.kt)("p",null,"Here are some of our recommendations to ease your pain:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Always try to name your block based on ",(0,i.kt)("strong",{parentName:"li"},"what they are"),", rather than ",(0,i.kt)("strong",{parentName:"li"},"what they will be used for"),". For example, if you have a component card for custom post-type ",(0,i.kt)("inlineCode",{parentName:"li"},"books"),", you should never call this component ",(0,i.kt)("inlineCode",{parentName:"li"},"card-book"),". Instead, use a more generic name like ",(0,i.kt)("inlineCode",{parentName:"li"},"card-product"),"."),(0,i.kt)("li",{parentName:"ul"},"Make your names as generic as possible for better reusability, but specific enough to fully understand what the block/component is used for."),(0,i.kt)("li",{parentName:"ul"},"Always think about the future. How can this feature be used in some other way?"),(0,i.kt)("li",{parentName:"ul"},'When naming your attributes ask yourself: "is this attribute going to be used in any other way?". For example, you have an attribute for adding font-weight: bold to your text. You can create an attribute called font-weight and set it as a ',(0,i.kt)("inlineCode",{parentName:"li"},"boolean")," type and that will be ok if you have only one font-weight. A better way would be to put it as a string and provide a ",(0,i.kt)("inlineCode",{parentName:"li"},"SelectControl")," component if there is any possibility that in the future you will have additional font-weight."),(0,i.kt)("li",{parentName:"ul"},"Name booleans positively as a question. Example: ",(0,i.kt)("inlineCode",{parentName:"li"},"isValid"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"isLoading"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"isComplete"),"."),(0,i.kt)("li",{parentName:"ul"},"Don\u2019t hesitate to use longer names."),(0,i.kt)("li",{parentName:"ul"},"Use singular names."),(0,i.kt)("li",{parentName:"ul"},"The variables or functions should be named by their work: Name of variables/functions should always try to express their meaning without diving into the code base try to pack meaningful information inside the name."),(0,i.kt)("li",{parentName:"ul"},"Naming should be simple enough to be understood by everyone: Using complex words to describe a simple thing only creates hassle while reading the code. Also, use simple English."),(0,i.kt)("li",{parentName:"ul"},"You might not be the only person working on your particular project in the future. Think about the next person. Your naming will provide an insight into the process and project."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"BE CONSISTENT"),".")))}h.isMDXComponent=!0},3905:function(e,t,o){o.d(t,{Zo:function(){return u},kt:function(){return h}});var n=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function r(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),d=c(o),h=a,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||i;return o?n.createElement(m,l(l({ref:t},u),{},{components:o})):n.createElement(m,l({ref:t},u))}));function h(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=o.length,l=new Array(i);l[0]=d;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:a,l[1]=r;for(var c=2;c<i;c++)l[c]=o[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"}}]);