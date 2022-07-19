"use strict";(self.webpackChunk_eightshift_docs=self.webpackChunk_eightshift_docs||[]).push([[6790],{3557:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return r},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var a=n(3117),i=n(102),o=(n(7294),n(3905)),s=["components"],l={id:"architecture-concepts",title:"Architecture concepts"},r=void 0,c={unversionedId:"legacy/v7/basics/architecture-concepts",id:"legacy/v7/basics/architecture-concepts",title:"Architecture concepts",description:"Project structure",source:"@site/docs/legacy/v7/basics/architecture-concepts.md",sourceDirName:"legacy/v7/basics",slug:"/legacy/v7/basics/architecture-concepts",permalink:"/eightshift-docs/docs/legacy/v7/basics/architecture-concepts",tags:[],version:"current",frontMatter:{id:"architecture-concepts",title:"Architecture concepts"},sidebar:"docs",previous:{title:"WP-CLI",permalink:"/eightshift-docs/docs/legacy/v7/basics/wp-cli"},next:{title:"General",permalink:"/eightshift-docs/docs/legacy/v7/basics/backend"}},p={},u=[{value:"Project structure",id:"project-structure",level:2},{value:"Object-oriented paradigms",id:"object-oriented-paradigms",level:2},{value:"Blocks and Components",id:"blocks-and-components",level:2},{value:"The Manifest",id:"the-manifest",level:2},{value:"The directory structure in detail",id:"the-directory-structure-in-detail",level:2},{value:"Blocks",id:"blocks",level:4},{value:"Columns",id:"columns",level:4},{value:"Config",id:"config",level:4},{value:"CustomMeta",id:"custommeta",level:4},{value:"CustomPostType",id:"customposttype",level:4},{value:"CustomTaxonomy",id:"customtaxonomy",level:4},{value:"Enqueue",id:"enqueue",level:4},{value:"Exception",id:"exception",level:4},{value:"Helpers",id:"helpers",level:4},{value:"I18n",id:"i18n",level:4},{value:"Main",id:"main",level:4},{value:"Manifest",id:"manifest",level:4},{value:"Media",id:"media",level:4},{value:"Menu",id:"menu",level:4},{value:"ModifyAdminAppearance",id:"modifyadminappearance",level:4},{value:"Plugin",id:"plugin",level:4},{value:"Rest",id:"rest",level:4},{value:"ThemeOptions",id:"themeoptions",level:4},{value:"View",id:"view",level:4},{value:".storybook",id:"storybook",level:4},{value:".gitignore",id:"gitignore",level:4},{value:".eslintignore",id:"eslintignore",level:4},{value:".eslintrc",id:"eslintrc",level:4},{value:".stylelintrc",id:"stylelintrc",level:4},{value:"babel.config.js",id:"babelconfigjs",level:4},{value:"composer.json",id:"composerjson",level:4},{value:"composer.lock",id:"composerlock",level:4},{value:"package-lock.json",id:"package-lockjson",level:4},{value:"package.json",id:"packagejson",level:4},{value:"phpcs.xml.dist",id:"phpcsxmldist",level:4},{value:"postcss.config.js",id:"postcssconfigjs",level:4},{value:"webpack.config.js",id:"webpackconfigjs",level:4}],d={toc:u};function m(e){var t=e.components,n=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"project-structure"},"Project structure"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/infinum/eightshift-libs"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/source-eightshift--libs-blue?style=for-the-badge&logo=php&labelColor=2a2a2a",alt:"docs-source"}))),(0,o.kt)("p",null,"Eightshift Development Kit follows a strict project structure to support autoloading, dependency injection and ",(0,o.kt)("inlineCode",{parentName:"p"},"wp boilerplate")," commands, as well as conventions to increase codebase understanding between developers. As an added benefit, following this structure and conventions makes your codebase more consistent and organized."),(0,o.kt)("p",null,"While Eightshift Development Kit provides required theme files and common theme files such as ",(0,o.kt)("inlineCode",{parentName:"p"},"style.css")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"functions.php"),", they're used differently to what you might expect if you've worked with WordPress themes previously. For instance, ",(0,o.kt)("inlineCode",{parentName:"p"},"style.css")," is used only to register theme metadata, and doesn't contain any actual styles, as they're built using Webpack and use cache busting. ",(0,o.kt)("inlineCode",{parentName:"p"},"functions.php")," simply bootstraps the execution lifecycle. We also provide very basic template partials, such as ",(0,o.kt)("inlineCode",{parentName:"p"},"single.php"),", which you can acommodate to your needs. An idea to consider is replacing some of them with pages that are editable in Gutenberg."),(0,o.kt)("p",null,"While you'll find some additional configuration files such as ",(0,o.kt)("inlineCode",{parentName:"p"},"webpack.config.js")," in the project root, the majority of your projects codebase should live in the ",(0,o.kt)("inlineCode",{parentName:"p"},"src")," directory, which is autoloaded via Composer following PSR-4 conventions. This implies that every directory under ",(0,o.kt)("inlineCode",{parentName:"p"},"src")," is a namespace under your base namespace (which is your project name), and PHP files inside of those directories are classes in that namespace, with exceptions for filenames that aren't in ",(0,o.kt)("inlineCode",{parentName:"p"},"StudlyCase"),". "),(0,o.kt)("p",null,"An Eightshift Development Kit convention is to structure namespaces around features and functionality, so for instance, all custom post types would be part of the ",(0,o.kt)("inlineCode",{parentName:"p"},"ProjectName\\CustomPostType")," namespace."),(0,o.kt)("h2",{id:"object-oriented-paradigms"},"Object-oriented paradigms"),(0,o.kt)("p",null,"Eightshift Libs is entirely object-oriented, providing abstract classes for internal library functionality, interfaces you can use to implement certain classes to make use of Eightshift Development Kit features, as well as concrete class implementations for use in projects."),(0,o.kt)("p",null,"Our use of OOP allows you to extend, modify or even replace Eightshift Development Kit functionality safely, without breaking compatibility or harming your project."),(0,o.kt)("p",null,"One of the most important interfaces in Eightshift Libs is the ",(0,o.kt)("inlineCode",{parentName:"p"},"ServiceInterface"),". Classes that implement it are called service classes. This isn't a common pattern in PHP OOP. In Eightshift Development Kit, a service class represents a part of the project's functionality and has a ",(0,o.kt)("inlineCode",{parentName:"p"},"register")," method that sets up the action and filter hooks for the service. If you need to add an action or a filter, you should do that in a service class. All your service classes are automatically loaded and can have dependencies injected using dependency injection."),(0,o.kt)("p",null,"To ensure there are no naming collisions caused by Composer dependencies, we use the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/infinum/imposter-plugin"},"Imposter Composer plugin")," to contain them in the ",(0,o.kt)("inlineCode",{parentName:"p"},"{ProjectName}Vendor")," namespace. This comes with a few caveats which you should be aware of, and about which you can read more in the ",(0,o.kt)("a",{parentName:"p",href:"namespaces"},"namespaces chapter"),"."),(0,o.kt)("p",null,"Read more about ",(0,o.kt)("a",{parentName:"p",href:"namespaces"},"namespaces and Imposter"),", ",(0,o.kt)("a",{parentName:"p",href:"extending-classes"},"extending classes and service classes"),", and ",(0,o.kt)("a",{parentName:"p",href:"autowiring"},"dependency injection and autowiring"),"."),(0,o.kt)("h2",{id:"blocks-and-components"},"Blocks and Components"),(0,o.kt)("p",null,"While Blocks and Components will be covered in much more detail in the ",(0,o.kt)("a",{parentName:"p",href:"blocks"},"Blocks chapter"),", it's worth getting acquainted with the concepts from the start."),(0,o.kt)("p",null,"In Gutenberg, Blocks are an abstract unit for structuring content. The same applies in Eightshift, with an additional concept of ",(0,o.kt)("em",{parentName:"p"},"Components"),", which are abstract units for structuring blocks and layouts. "),(0,o.kt)("p",null,"Components are mostly similar to Blocks, with a few key differences:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Components can not be inserted by users in Gutenberg, and are not registered as block types"),(0,o.kt)("li",{parentName:"ul"},"Components can be rendered in any context using the ",(0,o.kt)("inlineCode",{parentName:"li"},"Components::render")," method, with arbitrary attribute values passed to them"),(0,o.kt)("li",{parentName:"ul"},"Blocks are usually only rendered using the render callback provided when registering the block",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Note that in the Eightshift Development Kit, the render callback is provided for you by Eightshift Libs. It automatically adds the wrapper if necessary and sets up your block view."))),(0,o.kt)("li",{parentName:"ul"},"Components don't implement the ",(0,o.kt)("inlineCode",{parentName:"li"},"{blockName}-block.js")," file")),(0,o.kt)("p",null,"Blocks and Components have the same structure, which makes extracting components from existing blocks trivially easy."),(0,o.kt)("p",null,"Components can be ",(0,o.kt)("em",{parentName:"p"},"composed")," into a block. In other words, blocks can consist out of zero or more components. Component composition is handled in the block manifest, allows you to avoid using InnerBlocks to include functionality shared with other blocks, and serializes component attributes to the block using prefixed attributes for each component instance depending on your manifest definitions."),(0,o.kt)("p",null,"To learn more about the differences between blocks and components, read ",(0,o.kt)("a",{parentName:"p",href:"/blog/components-and-blocks"},"Igor's blog post on Components and blocks"),". To learn how to use blocks and components to build your projects, read the ",(0,o.kt)("a",{parentName:"p",href:"blocks"},"Blocks chapter"),"."),(0,o.kt)("h2",{id:"the-manifest"},"The Manifest"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"manifest.json")," files contain metadata, configurations and variables. "),(0,o.kt)("p",null,"Every Eightshift project has one global ",(0,o.kt)("inlineCode",{parentName:"p"},"manifest.json")," file stored in ",(0,o.kt)("inlineCode",{parentName:"p"},"src/Blocks/manifest.json"),", which contains global settings, properties, and variables. "),(0,o.kt)("p",null,"Furthermore, every Eightshift block, component, and variation has its own manifest file which is used to provide data required for block registration, such as a list of attributes, the block name, and the template for the inserter example. These local manifest files allow you to define arrays of options for attribute values that your blocks or components can consume. Manifest files also allow you to define relationships between attribute values and CSS variable values, which allows you a great deal of power when styling your blocks and components, as well as saves time as you don't have to provide conditional CSS classes."),(0,o.kt)("p",null,"To learn more about the ",(0,o.kt)("a",{parentName:"p",href:"/eightshift-docs/docs/legacy/v7/basics/blocks-global-manifest"},"global manifest"),", ",(0,o.kt)("a",{parentName:"p",href:"/eightshift-docs/docs/legacy/v7/basics/block-manifest"},"block manifest"),", ",(0,o.kt)("a",{parentName:"p",href:"/eightshift-docs/docs/legacy/v7/basics/blocks-component-manifest"},"component manifest")," and using ",(0,o.kt)("a",{parentName:"p",href:"/eightshift-docs/docs/legacy/v7/basics/blocks-styles"},"the manifest to provide CSS variables for use in block styling"),", read the respective articles in the ",(0,o.kt)("a",{parentName:"p",href:"blocks-important"},"Blocks chapter"),". For information about manifest structure, refer to the manifest schemas available in Eightshift Frontend Libs and linked to in the manifest files. "),(0,o.kt)("h2",{id:"the-directory-structure-in-detail"},"The directory structure in detail"),(0,o.kt)("p",null,"Your project might contain a different set of namespaces and classes in the ",(0,o.kt)("inlineCode",{parentName:"p"},"src")," folder, depending on what you've included using wp boilerplate commands.\nBy default, your project will include the ",(0,o.kt)("inlineCode",{parentName:"p"},"Blocks"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Config"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Enqueue"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Main"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Manifest")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Menu")," namespaces. You can include classes from Eightshift Libs to provide additional functionality manually or using wp boilerplate."),(0,o.kt)("p",null,"This chapter also doesn't cover all of the namespaces and classes in Eightshift Libs, or their use. Check out the source code documentation for all available namespaces and classes."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"src",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Blocks",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"assets"),(0,o.kt)("li",{parentName:"ul"},"components"),(0,o.kt)("li",{parentName:"ul"},"custom"),(0,o.kt)("li",{parentName:"ul"},"variations"),(0,o.kt)("li",{parentName:"ul"},"wrapper"))),(0,o.kt)("li",{parentName:"ul"},"Columns"),(0,o.kt)("li",{parentName:"ul"},"Config"),(0,o.kt)("li",{parentName:"ul"},"CustomMeta"),(0,o.kt)("li",{parentName:"ul"},"CustomPostType"),(0,o.kt)("li",{parentName:"ul"},"CustomTaxonomy"),(0,o.kt)("li",{parentName:"ul"},"Enqueue",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Admin"),(0,o.kt)("li",{parentName:"ul"},"Blocks"),(0,o.kt)("li",{parentName:"ul"},"Theme"))),(0,o.kt)("li",{parentName:"ul"},"Exception"),(0,o.kt)("li",{parentName:"ul"},"Helpers"),(0,o.kt)("li",{parentName:"ul"},"I18n"),(0,o.kt)("li",{parentName:"ul"},"Main"),(0,o.kt)("li",{parentName:"ul"},"Manifest"),(0,o.kt)("li",{parentName:"ul"},"Media"),(0,o.kt)("li",{parentName:"ul"},"Menu"),(0,o.kt)("li",{parentName:"ul"},"ModifyAdminAppearance"),(0,o.kt)("li",{parentName:"ul"},"Plugin"),(0,o.kt)("li",{parentName:"ul"},"Rest"),(0,o.kt)("li",{parentName:"ul"},"ThemeOptions"),(0,o.kt)("li",{parentName:"ul"},"View"))),(0,o.kt)("li",{parentName:"ul"},".storybook"),(0,o.kt)("li",{parentName:"ul"},".gitignore"),(0,o.kt)("li",{parentName:"ul"},".eslintignore"),(0,o.kt)("li",{parentName:"ul"},".eslintrc"),(0,o.kt)("li",{parentName:"ul"},".stylelintrc"),(0,o.kt)("li",{parentName:"ul"},"babel.config.js"),(0,o.kt)("li",{parentName:"ul"},"composer.json"),(0,o.kt)("li",{parentName:"ul"},"composer.lock"),(0,o.kt)("li",{parentName:"ul"},"package-lock.json"),(0,o.kt)("li",{parentName:"ul"},"package.json"),(0,o.kt)("li",{parentName:"ul"},"phpcs.xml.dist"),(0,o.kt)("li",{parentName:"ul"},"postcss.config.js"),(0,o.kt)("li",{parentName:"ul"},"README.md"),(0,o.kt)("li",{parentName:"ul"},"webpack.config.js")),(0,o.kt)("h4",{id:"blocks"},"Blocks"),(0,o.kt)("p",null,"The Blocks namespace contains the Blocks class used for block registration. This directory also contains shared assets, components, blocks, variations, and the wrapper."),(0,o.kt)("p",null,"Read about blocks in detail in the ",(0,o.kt)("a",{parentName:"p",href:"blocks"},"Blocks chapter"),"."),(0,o.kt)("h4",{id:"columns"},"Columns"),(0,o.kt)("p",null,"This namespace contains all the custom admin listing columns hooks in your project. These include listing column hooks for post types, taxonomy, and user lists, such as ",(0,o.kt)("inlineCode",{parentName:"p"},"manage_{$post_type}_posts_columns"),"."),(0,o.kt)("h4",{id:"config"},"Config"),(0,o.kt)("p",null,"The Config class provides getter methods for your project's configuration, such as ",(0,o.kt)("inlineCode",{parentName:"p"},"getProjectName")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"getProjectVersion"),"."),(0,o.kt)("h4",{id:"custommeta"},"CustomMeta"),(0,o.kt)("p",null,"This class contains all the custom meta hooks for your project."),(0,o.kt)("h4",{id:"customposttype"},"CustomPostType"),(0,o.kt)("p",null,"This namespace contains classes that register all custom post type hooks for your project. For better code consistency and to save time on boilerplating, Eightshift Development Kit provides an example class implementation you can use with ",(0,o.kt)("inlineCode",{parentName:"p"},"wp boilerplate create_post_type"),"."),(0,o.kt)("h4",{id:"customtaxonomy"},"CustomTaxonomy"),(0,o.kt)("p",null,"This namespace contains classes that register all custom taxonomy hooks for your project. For better code consistency and to save time on boilerplating, Eightshift Development Kit provides an example class implementation you can use with ",(0,o.kt)("inlineCode",{parentName:"p"},"wp boilerplate create_taxonomy"),"."),(0,o.kt)("h4",{id:"enqueue"},"Enqueue"),(0,o.kt)("p",null,"These Enqueue namespace classes handle loading JavaScript and CSS assets, depending on the location you want to use it:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Admin")," - Used in the admin (not block editor) panel. You can find the files inside the ",(0,o.kt)("inlineCode",{parentName:"li"},"assets")," folder with the ",(0,o.kt)("inlineCode",{parentName:"li"},"-admin")," suffix."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Blocks")," - Used in the block editor. You can find the files inside the ",(0,o.kt)("inlineCode",{parentName:"li"},"src/Blocks/assets")," folder. As blocks are complicated, we have files loaded only in the admin-editor part of the project, those files have an ",(0,o.kt)("inlineCode",{parentName:"li"},"-editor")," suffix. The rest of the files with no suffix load on the admin-editor part and the project's front end."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Theme")," - Used in the theme (frontend) part of your project. You can find the files inside the ",(0,o.kt)("inlineCode",{parentName:"li"},"assets")," folder with no suffix. You would use these files for the assets related to your project that is not associated with components and blocks. These files are rarely used, as styles and JavaScript functionality are usually provided at component, block, or wrapper levels.")),(0,o.kt)("p",null,"Using any of these classes is optional, and you can use only what you need. The ",(0,o.kt)("inlineCode",{parentName:"p"},"wp boilerplate setup_theme")," command will set up all of the three classes already implemented. Keep in mind that Enqueue classes work in combination with the Webpack build of your project."),(0,o.kt)("p",null,"All of the asset files mentioned are prefixed with ",(0,o.kt)("inlineCode",{parentName:"p"},"application"),". If you don't like the prefix, you can change it by providing project overrides for constants used in Eightshift Libs. If you change the file names, you must make changes to the Webpack build process as well. For modifying the Webpack configuration, read the ",(0,o.kt)("a",{parentName:"p",href:"webpack"},"Webpack chapter"),"."),(0,o.kt)("h4",{id:"exception"},"Exception"),(0,o.kt)("p",null,"This namespace contains all exceptions that can be thrown from the project."),(0,o.kt)("h4",{id:"helpers"},"Helpers"),(0,o.kt)("p",null,"All the backend helpers provided by Eightshift Libs are part of the Helpers namespace. Generally, you can use them from Eightshift Libs without extending or modifying them."),(0,o.kt)("h4",{id:"i18n"},"I18n"),(0,o.kt)("p",null,"Classes in this namespace are used to define all hooks related to internationalization and localization. For more information about i18n and l10n, check out ",(0,o.kt)("a",{parentName:"p",href:"tips-tricks"},"Tips and tricks"),"."),(0,o.kt)("h4",{id:"main"},"Main"),(0,o.kt)("p",null,"The Main namespace contains the ",(0,o.kt)("inlineCode",{parentName:"p"},"Main")," class, which sets up the dependency injection container and autowiring using ",(0,o.kt)("inlineCode",{parentName:"p"},"AbstractMain")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Autowiring")," classes. For most projects, ",(0,o.kt)("inlineCode",{parentName:"p"},"Main")," can be used automagically without any work on your part, but as with all of the Eightshift Development Kit, you can extend it to suit your needs."),(0,o.kt)("p",null,"You can provide manual service classes here as well. Learn more in the ",(0,o.kt)("a",{parentName:"p",href:"autowiring"},"autowiring chapter"),"."),(0,o.kt)("h4",{id:"manifest"},"Manifest"),(0,o.kt)("p",null,"The Manifest namespace provides the ",(0,o.kt)("inlineCode",{parentName:"p"},"manifest.json")," file location and helpers to return the full path for a specific asset. Learn more about the manifest in the ",(0,o.kt)("a",{parentName:"p",href:"manifest"},"manifest chapter"),"."),(0,o.kt)("h4",{id:"media"},"Media"),(0,o.kt)("p",null,"The Media namespace is used to add custom implementations for media, such as adding custom image sizes, enabling SVG image support, etc. By default, it registers theme support for title tags, HTML5 and post thumbnails."),(0,o.kt)("h4",{id:"menu"},"Menu"),(0,o.kt)("p",null,"This class is used to register menu positions."),(0,o.kt)("h4",{id:"modifyadminappearance"},"ModifyAdminAppearance"),(0,o.kt)("p",null,"This class is used to change admin appearance. We use it to change the admin color palette depending on the environment."),(0,o.kt)("h4",{id:"plugin"},"Plugin"),(0,o.kt)("p",null,"This namespace is used only in the plugin boilerplate and holds classes required for activation and deactivation of the plugin."),(0,o.kt)("h4",{id:"rest"},"Rest"),(0,o.kt)("p",null,"The Rest namespace provides classes for handling REST API fields and routes. This is covered in more detail in the ",(0,o.kt)("a",{parentName:"p",href:"rest"},"REST chapter"),"."),(0,o.kt)("h4",{id:"themeoptions"},"ThemeOptions"),(0,o.kt)("p",null,"This namespace is used to add admin menu configuration panels such as ",(0,o.kt)("em",{parentName:"p"},"Theme Options"),", usually using ACF. "),(0,o.kt)("h4",{id:"view"},"View"),(0,o.kt)("p",null,"This namespace is used to add filters used when escaping unsafe tags using ",(0,o.kt)("inlineCode",{parentName:"p"},"wp_kses_post")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"wp_kses")," functions."),(0,o.kt)("h4",{id:"storybook"},".storybook"),(0,o.kt)("p",null,"This folder contains all of the files necessary to run the storybook in your project. Read more ",(0,o.kt)("a",{parentName:"p",href:"https://storybook.js.org/"},"about the Storybook project"),"."),(0,o.kt)("h4",{id:"gitignore"},".gitignore"),(0,o.kt)("p",null,"As the name implies, this file is used to define restrictions to which files Git watches. Read more ",(0,o.kt)("a",{parentName:"p",href:"https://git-scm.com/"},"about Git"),"."),(0,o.kt)("h4",{id:"eslintignore"},".eslintignore"),(0,o.kt)("p",null,"Defines files and folders which ESLint should ignore when linting."),(0,o.kt)("h4",{id:"eslintrc"},".eslintrc"),(0,o.kt)("p",null,"Provides definitions used for linting JavaScript files. Read more ",(0,o.kt)("a",{parentName:"p",href:"https://eslint.org/"},"about ESLint"),"."),(0,o.kt)("h4",{id:"stylelintrc"},".stylelintrc"),(0,o.kt)("p",null,"Provides definitions used for linting SCSS/CSS stylesheets. Read more ",(0,o.kt)("a",{parentName:"p",href:"https://stylelint.io/"},"about Stylelint"),"."),(0,o.kt)("h4",{id:"babelconfigjs"},"babel.config.js"),(0,o.kt)("p",null,"Provides Babel configuration, which determines how your JavaScript code will be compiled, what standard you will use, and much more. Read more ",(0,o.kt)("a",{parentName:"p",href:"https://babeljs.io/"},"about Babel"),"."),(0,o.kt)("h4",{id:"composerjson"},"composer.json"),(0,o.kt)("p",null,"Contains a list of your project's Composer dependencies, as well as project metadata and configuration. Dependencies can be added and installed using ",(0,o.kt)("inlineCode",{parentName:"p"},"composer install"),". Read more ",(0,o.kt)("a",{parentName:"p",href:"https://getcomposer.org/"},"about Composer"),"."),(0,o.kt)("h4",{id:"composerlock"},"composer.lock"),(0,o.kt)("p",null,"Lock files are used to set the package version to the exact release. This ensures that everyone has the same package version when installing."),(0,o.kt)("h4",{id:"package-lockjson"},"package-lock.json"),(0,o.kt)("p",null,"The same as ",(0,o.kt)("inlineCode",{parentName:"p"},"composer.lock"),", but for node_modules."),(0,o.kt)("h4",{id:"packagejson"},"package.json"),(0,o.kt)("p",null,"Contains a list of your project's npm dependencies, as well as project metadata and configuration. Dependencies can be added and installed using ",(0,o.kt)("inlineCode",{parentName:"p"},"npm install"),". Read more ",(0,o.kt)("a",{parentName:"p",href:"https://nodejs.dev/"},"about npm"),"."),(0,o.kt)("h4",{id:"phpcsxmldist"},"phpcs.xml.dist"),(0,o.kt)("p",null,"Provides definitions used for linting PHP files. Read more ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/squizlabs/PHP_CodeSniffer"},"about PHPCS"),"."),(0,o.kt)("h4",{id:"postcssconfigjs"},"postcss.config.js"),(0,o.kt)("p",null,"PostCSS works in collaboration with Webpack and defines what additional plugins you are going to use when building your CSS files. Read more ",(0,o.kt)("a",{parentName:"p",href:"https://postcss.org/"},"about PostCSS"),"."),(0,o.kt)("h4",{id:"webpackconfigjs"},"webpack.config.js"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"webpack.config.js")," provides Webpack configuration, used when building your JavaScript and CSS files. This is covered in more detail in the ",(0,o.kt)("a",{parentName:"p",href:"webpack"},"Webpack chapter"),"."))}m.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var r=a.createContext({}),c=function(e){var t=a.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(r.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,r=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,h=d["".concat(r,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(h,s(s({ref:t},p),{},{components:n})):a.createElement(h,s({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=d;var l={};for(var r in t)hasOwnProperty.call(t,r)&&(l[r]=t[r]);l.originalType=e,l.mdxType="string"==typeof e?e:i,s[1]=l;for(var c=2;c<o;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);