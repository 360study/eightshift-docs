"use strict";(self.webpackChunk_eightshift_docs=self.webpackChunk_eightshift_docs||[]).push([[4683],{9175:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return r},default:function(){return h},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var o=n(3117),a=n(102),i=(n(7294),n(3905)),l=["components"],s={id:"blocks-component-in-block",title:"Component in a Block",sidebar_label:"Component in a Block"},r=void 0,p={unversionedId:"legacy/v5/basics/blocks-component-in-block",id:"legacy/v5/basics/blocks-component-in-block",title:"Component in a Block",description:"docs-source",source:"@site/docs/legacy/v5/basics/blocks-component-in-block.md",sourceDirName:"legacy/v5/basics",slug:"/legacy/v5/basics/blocks-component-in-block",permalink:"/docs/legacy/v5/basics/blocks-component-in-block",tags:[],version:"current",frontMatter:{id:"blocks-component-in-block",title:"Component in a Block",sidebar_label:"Component in a Block"},sidebar:"docs",previous:{title:"Attributes",permalink:"/docs/legacy/v5/basics/blocks-attributes"},next:{title:"Wrapper",permalink:"/docs/legacy/v5/basics/blocks-wrapper"}},c={},u=[{value:"I want to use one heading component in my block.",id:"i-want-to-use-one-heading-component-in-my-block",level:3},{value:"I want to use one heading and paragraph component in my block.",id:"i-want-to-use-one-heading-and-paragraph-component-in-my-block",level:3},{value:"I want two heading components in my block.",id:"i-want-two-heading-components-in-my-block",level:3},{value:"I want to override a default attribute of a component in a block.",id:"i-want-to-override-a-default-attribute-of-a-component-in-a-block",level:3},{value:"I want to use a component that uses more components (componentCeption).",id:"i-want-to-use-a-component-that-uses-more-components-componentception",level:3},{value:"I don&#39;t need all the component options in my block.",id:"i-dont-need-all-the-component-options-in-my-block",level:3},{value:"I don&#39;t want my editor to be able to change component options in my block.",id:"i-dont-want-my-editor-to-be-able-to-change-component-options-in-my-block",level:3},{value:"How do my example attributes behave when I use components in blocks?",id:"how-do-my-example-attributes-behave-when-i-use-components-in-blocks",level:3},{value:"I have a component name that has multiple strings in a name, will this work?",id:"i-have-a-component-name-that-has-multiple-strings-in-a-name-will-this-work",level:3},{value:"I have a component that I want to use manually",id:"i-have-a-component-that-i-want-to-use-manually",level:3},{value:"I want to limit which options are shown for components inside a block/component",id:"i-want-to-limit-which-options-are-shown-for-components-inside-a-blockcomponent",level:3},{value:"I want to only pass attributes to the component that I&#39;m going to use",id:"i-want-to-only-pass-attributes-to-the-component-that-im-going-to-use",level:3}],m={toc:u};function h(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/infinum/eightshift-frontend-libs/tree/4.0.0/blocks/init/src/blocks/"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/source-eigthshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a",alt:"docs-source"}))),(0,i.kt)("p",null,"Blocks and components work perfectly together because they are made that way. We simplified this as much as possible but there always a few things you need to do manually."),(0,i.kt)("p",null,"Try to think of your development process in this way:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Each component must be standalone and ideally not depend on any other components (sometimes this is not possible but keep this to a minimum)."),(0,i.kt)("li",{parentName:"ul"},"Components must not be aware of the layout they are used in."),(0,i.kt)("li",{parentName:"ul"},"No global styles. Instead, all styles should be contained to the block/component. For more details, check ",(0,i.kt)("a",{parentName:"li",href:"writing-styles"},"this link"),"."),(0,i.kt)("li",{parentName:"ul"},"You should define all heading variations in a ",(0,i.kt)("inlineCode",{parentName:"li"},"heading")," component. You can then use this component everywhere you have a heading instead of writing a new implementation. In practice: don't do ",(0,i.kt)("inlineCode",{parentName:"li"},"<h2>$heading</h2>")," but render the ",(0,i.kt)("inlineCode",{parentName:"li"},"heading")," component instead using the helpers defined in the ",(0,i.kt)("a",{parentName:"li",href:"helpers"},"helpers section"),". The heading is just an example, but this applies to every component."),(0,i.kt)("li",{parentName:"ul"},"You can have multiple heading components in one block.")),(0,i.kt)("h3",{id:"i-want-to-use-one-heading-component-in-my-block"},"I want to use one heading component in my block."),(0,i.kt)("p",null,"If you have a heading component with these attributes:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"src/Blocks/components/heading/manifest.json")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"attributes": {\n    "headingContent": {\n        "type": "string"\n    },\n    "headingLevel": {\n        "type": "integer",\n        "default": 2\n    },\n    "headingSize": {\n        "type": "string",\n        "default": "default"\n    },\n}\n')),(0,i.kt)("p",null,"and you want to use the heading component in the Jumbotron block, you can use it by adding a component's key in the Jumbotron block manifest like this:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"src/Blocks/custom/jumbotron/manifest.json")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"attributes": {\n    "content": {\n        "type": "string"\n        "default": "test",\n    }\n},\n"components": {\n    "heading": "heading"\n}\n')),(0,i.kt)("p",null,"In your block attributes object, you will now have these keys:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'\n// Attributes from the component.\n"headingContent": "",\n"headingLevel": 2,\n"headingSize": "default",\n\n// Attributes from the block.\n"content": "test",\n')),(0,i.kt)("p",null,"As you can see in the example, you can merge component attributes in your block attributes. Keep in mind that, in the provided example, the components' attributes will be injected in the block attributes with the same name as defined in the components manifest."),(0,i.kt)("h3",{id:"i-want-to-use-one-heading-and-paragraph-component-in-my-block"},"I want to use one heading and paragraph component in my block."),(0,i.kt)("p",null,"You can do this by following the same principle as before. Here is an example:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"src/Blocks/custom/jumbotron/manifest.json")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"attributes": {\n    "content": {\n        "type": "string"\n        "default": "test",\n    }\n},\n"components": {\n    "heading": "heading"\n    "paragraph": "paragraph"\n}\n')),(0,i.kt)("h3",{id:"i-want-two-heading-components-in-my-block"},"I want two heading components in my block."),(0,i.kt)("p",null,"As you already saw in the previous examples, the heading key and value are the same in the components object. The key represents the ",(0,i.kt)("inlineCode",{parentName:"p"},"components attributes prefix"),", and the value represents the ",(0,i.kt)("inlineCode",{parentName:"p"},"actual component name"),"."),(0,i.kt)("p",null,"If you want to use the heading component in your block, follow this example:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"src/Blocks/custom/jumbotron/manifest.json")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"attributes": {\n    "content": {\n        "type": "string"\n        "default": "test",\n    }\n},\n"components": {\n    "heading": "heading"\n    "intro": "heading"\n}\n')),(0,i.kt)("p",null,"In your block attributes object, you will now have these keys:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'\n// Attributes from the first component.\n"headingContent": "",\n"headingLevel": 2,\n"headingSize": "default",\n\n// Attributes from the second component.\n"introContent": "",\n"introLevel": 2,\n"introSize": "default",\n\n// Attributes from the block.\n"content": "test",\n')),(0,i.kt)("h3",{id:"i-want-to-override-a-default-attribute-of-a-component-in-a-block"},"I want to override a default attribute of a component in a block."),(0,i.kt)("p",null,"We build all our attributes by merging attributes objects in this order:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"global attributes (global settings);"),(0,i.kt)("li",{parentName:"ul"},"wrapper attributes;"),(0,i.kt)("li",{parentName:"ul"},"component attributes; and"),(0,i.kt)("li",{parentName:"ul"},"block attributes.")),(0,i.kt)("p",null,"By following the basic principle of merging objects, if you have two keys with the same name, the last one will always override the previous. Now that you know how attributes are built, you can follow this example for your answer."),(0,i.kt)("p",null,"If you have a heading component with these attributes:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"src/Blocks/components/heading/manifest.json")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"attributes": {\n    "headingContent": {\n        "type": "string"\n    },\n    "headingLevel": {\n        "type": "integer",\n        "default": 2\n    },\n    "headingSize": {\n        "type": "string",\n        "default": "default"\n    },\n}\n')),(0,i.kt)("p",null,"and you want to override one or multiple default attributes from the heading component."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"src/Blocks/custom/jumbotron/manifest.json")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"attributes": {\n    "content": {\n        "type": "string"\n        "default": "test",\n    },\n    "headingSize": {\n        "type": "string",\n        "default": "small"\n    }\n},\n"components": {\n    "heading": "heading"\n}\n')),(0,i.kt)("p",null,"In your block attributes object, you will now have these keys:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'\n// Attributes from the component.\n"headingContent": "",\n"headingLevel": 2,\n"headingSize": "small", // changed in the block attributes.\n\n// Attributes from the block.\n"content": "test",\n')),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Keep in mind that we handle the attributes data necessary to have multiple components in one block but you must provide the correct props inside your files to mock the custom attribute names. The best way to see how this is done is to check the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/infinum/eightshift-frontend-libs/tree/4.0.0/blocks/init/src/Blocks/custom/card"},"card block"),".")),(0,i.kt)("h3",{id:"i-want-to-use-a-component-that-uses-more-components-componentception"},"I want to use a component that uses more components (componentCeption)."),(0,i.kt)("p",null,"For example, if you have a block called cards grid that uses a card component, that card component uses a heading component."),(0,i.kt)("p",null,"If you have a heading component with these attributes:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"src/Blocks/components/heading/manifest.json")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"attributes": {\n    "headingContent": {\n        "type": "string"\n    },\n    "headingLevel": {\n        "type": "integer",\n        "default": 2\n    },\n    "headingSize": {\n        "type": "string",\n        "default": "default"\n    },\n}\n')),(0,i.kt)("p",null,"and you have a card component:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"src/Blocks/components/card/manifest.json")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"attributes": {\n    "superCard": {\n        "type": "boolean"\n        "default": true,\n    },\n},\n"components": {\n    "heading": "heading"\n}\n')),(0,i.kt)("p",null,"and you have a cards grid block:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"src/Blocks/custom/cards-grid/manifest.json")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"attributes": {\n    "content": {\n        "type": "string"\n        "default": "test",\n    },\n},\n"components": {\n    "card": "card"\n}\n')),(0,i.kt)("p",null,"in your block attributes object, you will now have these keys:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'\n// Attributes from the heading component.\n"headingContent": "",\n"headingLevel": 2,\n"headingSize": "default",\n\n// Attributes from the card component.\n"superCard": true,\n\n// Attributes from the block.\n"content": "test",\n')),(0,i.kt)("p",null,"As you can see in the example, you have all the attributes from the card and heading component inside your card's grid block."),(0,i.kt)("h3",{id:"i-dont-need-all-the-component-options-in-my-block"},"I don't need all the component options in my block."),(0,i.kt)("p",null,"All our components come with a few common attributes that we recommend you also implement in your components. One of those attributes is ",(0,i.kt)("inlineCode",{parentName:"p"},"buttonUse"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"buttonUse": true,\n')),(0,i.kt)("p",null,"This attribute is available in all three components (editor, toolbar, options). If set to ",(0,i.kt)("strong",{parentName:"p"},"false"),", it will remove this component from the DOM. This is useful if you want to hide all markup from the DOM."),(0,i.kt)("p",null,"For example, you have a Jumbotron block and a heading that you want to populate if necessary. If you add content to the heading, everything looks good. But if you don't add it, you'll still see a placeholder for that heading in the block editor. That affects how you perceive it, and a user may think this block will look like that on the front end (with the placeholder text). So if you have a component that you will not populate on some block, switch the toggle to false, and you will hide it from the DOM. This is useful for content editors."),(0,i.kt)("h3",{id:"i-dont-want-my-editor-to-be-able-to-change-component-options-in-my-block"},"I don't want my editor to be able to change component options in my block."),(0,i.kt)("p",null,"Another attribute that you can use is ",(0,i.kt)("inlineCode",{parentName:"p"},"buttonShowControls"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"buttonShowControls": true,\n')),(0,i.kt)("p",null,"This attribute is available in the options component only. You can't set it up via block editor, only from code. You would use it if you wanted to use a heading component and set all the defaults, without your content editor changing how the heading looks. It can add the heading content from the editor section without changing any of the options. You can set this option in the manifest or pass it manually via props."),(0,i.kt)("h3",{id:"how-do-my-example-attributes-behave-when-i-use-components-in-blocks"},"How do my example attributes behave when I use components in blocks?"),(0,i.kt)("p",null,"Exactly the same way as attributes."),(0,i.kt)("h3",{id:"i-have-a-component-name-that-has-multiple-strings-in-a-name-will-this-work"},"I have a component name that has multiple strings in a name, will this work?"),(0,i.kt)("p",null,"By multiple strings in a name we mean that component name has multiple words, for example, ",(0,i.kt)("inlineCode",{parentName:"p"},"jumbotron-cta"),". The problem here is that we define components with dash and attributes with camelcase. That's why you have to fix this. We have provided you with a helper. The helper makes camelcase on all your component-name strings."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example:")),(0,i.kt)("p",null,"You have a component named ",(0,i.kt)("inlineCode",{parentName:"p"},"jumbotron-cta")," and you want to use it in your block. As described on this page, you will create a ",(0,i.kt)("inlineCode",{parentName:"p"},"components")," key in your ",(0,i.kt)("inlineCode",{parentName:"p"},"manifest.json")," and use ",(0,i.kt)("inlineCode",{parentName:"p"},"jumbotron-cta"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "components": {\n        "jumbotron-cta": "jumbotron-cta"\n    }\n}\n')),(0,i.kt)("p",null,"But in all places in your component where you use ",(0,i.kt)("inlineCode",{parentName:"p"},"setAttributes")," you must use ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/infinum/eightshift-frontend-libs/tree/4.0.0/scripts/helpers/camelize.js"},"camelize helper")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"\nimport { camelize } from '@eightshift/frontend-libs/scripts/helpers';\n\n<ToggleControl\n     label={'Custom Label'}\n     onChange={(value) => setAttributes({ [`${camelize(componentName)}Use`]: value })}\n/>\n")),(0,i.kt)("h3",{id:"i-have-a-component-that-i-want-to-use-manually"},"I have a component that I want to use manually"),(0,i.kt)("p",null,"We created this cool way of importing attributes and loading components in your blocks or other components. However, that doesn't mean that you can't have instances where you have to load components manually. In that case, you have to provide all the attributes that you want to use manually. The attributes that you didn't provide will not be magically set from the manifest, but you can make your life easier and map it like this."),(0,i.kt)("p",null,"For example, you have a ",(0,i.kt)("inlineCode",{parentName:"p"},"card")," component that you will use in the ",(0,i.kt)("inlineCode",{parentName:"p"},"featured-posts")," block."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"featured-posts.php")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"// Fetch and parse manifest using custom helper.\n$cardManifest = Components::getManifest(dirname(__DIR__, 2) . '/components/card');\n\necho wp_kses_post(\n    Components::render(\n        'card',\n        [\n            'headingColor' => $cardManifest['attributes']['headingColor']['default'],\n            'headingSize' => $cardManifest['attributes']['headingSize']['default'],\n            'headingWeight' => $cardManifest['attributes']['headingWeight']['default'],\n            'headingContent' => __('Custom content for heading', 'textdomain'),\n\n            'paragraphContent' => __('Custom content for paragraph', 'textdomain'),\n            'paragraphSize' => $cardManifest['attributes']['paragraphSize']['default'],\n        ]\n    )\n);\n")),(0,i.kt)("h3",{id:"i-want-to-limit-which-options-are-shown-for-components-inside-a-blockcomponent"},"I want to limit which options are shown for components inside a block/component"),(0,i.kt)("p",null,"Let's say you have a block that has a ",(0,i.kt)("inlineCode",{parentName:"p"},"Heading")," component inside it."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Heading")," has 10 text sizes and 5 colors, but for that block, only 2 colors and 3 text sizes are allowed.\nTo achieve this you must prepare your component to be able to use this feature:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Your component options must be named the same name as their attribute value. In the example, you can see that the options key for ",(0,i.kt)("inlineCode",{parentName:"li"},"typographySize")," is the same name as in the attributes.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "attributes": {\n    "typographySize": {\n      "type": "string",\n      "default": "16-text-roman"\n    },\n    "typographyColor": {\n      "type": "string",\n      "default": "black",\n      "variable": true,\n      "color": true\n    },\n  },\n  "options": {\n    "typographySize": [\n      {\n        "label": "180 Display",\n        "value": "180-default"\n      },\n      {\n        "label": "120 Display",\n        "value": "120-default"\n      },\n      {\n        "label": "80 Display",\n        "value": "80-default"\n      },\n      {\n        "label": "52 Display",\n        "value": "52-default"\n      },\n      {\n        "label": "36 Text",\n        "value": "36-text"\n      }\n    ],\n    "typographyColor": [\n      "black",\n      "white",\n      "grey100",\n      "grey200"\n    ]\n  }\n}\n')),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Every option in your component must use ",(0,i.kt)("inlineCode",{parentName:"li"},"getOptions")," helper for the prop that is used to provide options. Details about the helper can be found ",(0,i.kt)("a",{parentName:"li",href:"helpers-javascript#getoptions"},"here"),".")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"SelectControl Example:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"<SelectControl\n  label={\n    <>\n      <Icon icon={icons.textSize} />\n      {__('Text size', 'eightshift-boilerplate')}\n    </>\n  }\n  value={typographySize}\n  options={getOptions(manifest, componentName, 'size', options)}\n  onChange={(value) => setAttributes({ [`${componentName}Size`]: value })}\n/>\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"ColorPaletteCustom Example:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"<ColorPaletteCustom\n  label={\n    <>\n      <Icon icon={icons.color} />\n      {__('Color', 'eightshift-boilerplate')}\n    </>\n  }\n  colors={getOptionColors(getOptions(manifest, componentName, 'color', options))}\n  value={typographyColor}\n  onChange={(value) => setAttributes({ [`${componentName}Color`]: value })}\n/>\n")),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"In the component/blocks for which you are going to override the options, you must provide an options prop that is going to override the default one.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"heading-options.js")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"<HeadingOptions\n  options={options}\n  // ...\n/>\n")),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"In the component/blocks for which you are going to override options, you must provide the override in the ",(0,i.kt)("inlineCode",{parentName:"li"},"manifest.json")," by following the same naming as in the component.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "options": {\n    "headingSize": [\n      "80-default",\n      "52-default"\n    ],\n    "headingColor": [\n      "black",\n      "white"\n    ]\n  }\n}\n')),(0,i.kt)("p",null,"And this is it. You are now able to override the options from the parent block/component."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Keep in mind that you can only override SelectControl, ColorPaletteCustom, and AlignmentToolbar.")),(0,i.kt)("h3",{id:"i-want-to-only-pass-attributes-to-the-component-that-im-going-to-use"},"I want to only pass attributes to the component that I'm going to use"),(0,i.kt)("p",null,"At one point in time, we agreed on naming standards for all component attributes. That way we made sure that you wouldn't get any collisions when using multiple components. So we said it is ok to spread all attributes to the component and let the component handle what it needs. Well, that approach is ok but it can bite you in the a.. at the point that you least expect."),(0,i.kt)("p",null,"That is why we created this ",(0,i.kt)("a",{parentName:"p",href:"helpers-javascript#props"},"props helper"),"."),(0,i.kt)("p",null,"As described in ",(0,i.kt)("a",{parentName:"p",href:"blocks-component-in-block#i-want-to-limit-which-options-are-shown-for-components-inside-a-blockcomponent"},"this chapter")," you must follow the attributes naming convention and use ",(0,i.kt)("inlineCode",{parentName:"p"},"components")," key in the block/component manifest."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Let's set a layout for this example:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"components",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"heading"),(0,i.kt)("li",{parentName:"ul"},"typography"))),(0,i.kt)("li",{parentName:"ul"},"custom",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"heading")))),(0,i.kt)("p",null,"You have block ",(0,i.kt)("inlineCode",{parentName:"p"},"heading")," that uses component ",(0,i.kt)("inlineCode",{parentName:"p"},"heading")," and that component uses another component called ",(0,i.kt)("inlineCode",{parentName:"p"},"typography"),".\nWe are putting only relevant code in the example:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Block Heading manifest.json:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "blockName": "heading",\n  "components": {\n    "heading": "heading"\n  },\n}\n')),(0,i.kt)("p",null,"In the ",(0,i.kt)("inlineCode",{parentName:"p"},"components")," key, you must provide components that you are going to be using in this block. There are more options in the example at the beginning of this chapter."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Block heading-editor.js:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import React from 'react';\nimport { props } from '@eightshift/frontend-libs/scripts/editor';\nimport { HeadingEditor as HeadingEditorComponent } from '../../../components/heading/components/heading-editor';\nimport manifest from './../manifest.json';\n\nexport const HeadingEditor = ({attributes, setAttributes}) => {\n  const {\n    blockName,\n  } = manifest;\n\n  const {\n    blockClass,\n  } = attributes;\n\n  return (\n    <div className={blockClass}>\n      <HeadingEditorComponent\n        setAttributes={setAttributes}\n        {...props(attributes, blockName, '', true)}\n      />\n    </div>\n  );\n};\n")),(0,i.kt)("p",null,"In JavaScript, you spread the results of the props helper."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Block heading.php:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\n/**\n * Template for the Heading Block view.\n *\n * @package Redesign\n */\n\nuse Redesign\\Blocks\\Blocks;\nuse RedesignVendor\\EightshiftLibs\\Helpers\\Components;\n\n$manifest = Components::getManifest(__DIR__);\n$blockName = $attributes['blockName'] ?? $manifest['blockName'];\n\n$blockClass =  Components::checkAttr('blockClass', $attributes, $manifest);\n\n?>\n\n<div class=\"<?php echo esc_attr($blockClass); ?>\">\n  <?php\n  echo Components::render( // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped\n    'heading',\n    Blocks::props($attributes, $blockName, '', true)\n  );\n  ?>\n</div>\n")),(0,i.kt)("p",null,"In PHP you just provide the results of the props helper. As you can see in the ",(0,i.kt)("a",{parentName:"p",href:"helpers-javascript#props"},"props helper docs")," you must provide the fourth parameter to be ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," to distinguish if this is a block or a component."),(0,i.kt)("p",null,"Now, let's see how the ",(0,i.kt)("inlineCode",{parentName:"p"},"Component heading")," looks like."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Heading component manifest.json:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "componentName": "heading",\n  "components": {\n    "heading": "typography"\n  },\n}\n')),(0,i.kt)("p",null,"In the ",(0,i.kt)("inlineCode",{parentName:"p"},"heading")," component we are using the ",(0,i.kt)("inlineCode",{parentName:"p"},"typography")," component but we are not using the default component name. Instead, we are changing the attribute name from ",(0,i.kt)("inlineCode",{parentName:"p"},"typography")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"heading"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Component heading-editor.js:")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"The same is for options or toolbar components!")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import React from 'react';\nimport { props } from '@eightshift/frontend-libs/scripts/editor';\nimport { TypographyEditor } from './../../typography/components/typography-editor';\nimport manifest from './../manifest.json';\n \nexport const HeadingEditor = (attributes) => {\n  const {\n    setAttributes,\n    componentName = manifest.componentName,\n    blockClass,\n  } = attributes;\n\n  return (\n    <>\n      <TypographyEditor\n        selectorClass={componentName}\n        blockClass={blockClass}\n        setAttributes={setAttributes}\n        {...props(attributes, 'typography', componentName)}\n      />\n    </>\n  );\n};\n")),(0,i.kt)("p",null,"The difference here is that you don't need to provide the fourth parameter because this is a component. In this example, you are swapping attribute names so we must provide the target component name as a ",(0,i.kt)("inlineCode",{parentName:"p"},"second")," parameter and the current component name as a ",(0,i.kt)("inlineCode",{parentName:"p"},"third")," parameter."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"heading.php part")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\nuse Redesign\\Blocks\\Blocks;\nuse RedesignVendor\\EightshiftLibs\\Helpers\\Components;\n\n$manifest = Components::getManifest(__DIR__);\n$componentName = $attributes['componentName'] ?? $manifest['componentName'];\n\n$blockClass = $attributes['blockClass'] ?? '';\n\necho Components::render( // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped\n  'typography',\n  array_merge(\n    [\n      'selectorClass' => 'heading',\n      'blockClass' => $blockClass,\n    ],\n    Blocks::props($attributes, 'typography', $componentName)\n  )\n);\n")),(0,i.kt)("p",null,"The PHP part looks similar to the JS block part."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Typography")),(0,i.kt)("p",null,"There is nothing special that you need to do in the last component in the tree other than following the attributes naming convention."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Summing it all up")),(0,i.kt)("p",null,"Block:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Components")," key in the ",(0,i.kt)("inlineCode",{parentName:"li"},"manifest.json")," is used to provide/change the attribute names on the block registration process."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Props helper")," will provide all the attributes used in the block and it will follow the dependency tree to the end so that all the attributes from the children components will also be provided as a result.")),(0,i.kt)("p",null,"Components:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Components")," key in the ",(0,i.kt)("inlineCode",{parentName:"li"},"manifest.json")," is used to determine the dependency tree when passing the attributes from parent to children."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Props helper")," will provide only those attributes that are used in the children's components recursively. The same as props helper in the block.")),(0,i.kt)("p",null,"For more details please read the ",(0,i.kt)("a",{parentName:"p",href:"helpers-javascript#props"},"props helper docs"),"."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"You should avoid spreading attributes as props but rather use this helper because it provides only what is used in the component.")),(0,i.kt)("div",{class:"legacy-badge legacy-badge--v5"}))}h.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var r=o.createContext({}),p=function(e){var t=o.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(r.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),h=a,d=m["".concat(r,".").concat(h)]||m[h]||u[h]||i;return n?o.createElement(d,l(l({ref:t},c),{},{components:n})):o.createElement(d,l({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var s={};for(var r in t)hasOwnProperty.call(t,r)&&(s[r]=t[r]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var p=2;p<i;p++)l[p]=n[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);