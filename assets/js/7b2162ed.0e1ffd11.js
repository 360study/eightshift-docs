"use strict";(self.webpackChunk_eightshift_docs=self.webpackChunk_eightshift_docs||[]).push([[9087],{62110:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),o=["components"],s={id:"helpers-javascript",title:"JavaScript",sidebar_label:"JavaScript"},i=void 0,p={unversionedId:"legacy/v5/basics/helpers-javascript",id:"legacy/v5/basics/helpers-javascript",title:"JavaScript",description:"docs-source",source:"@site/docs/legacy/v5/basics/helpers-javascript.md",sourceDirName:"legacy/v5/basics",slug:"/legacy/v5/basics/helpers-javascript",permalink:"/docs/legacy/v5/basics/helpers-javascript",draft:!1,tags:[],version:"current",frontMatter:{id:"helpers-javascript",title:"JavaScript",sidebar_label:"JavaScript"},sidebar:"docs",previous:{title:"Helpers",permalink:"/docs/legacy/v5/basics/helpers"},next:{title:"Scss",permalink:"/docs/legacy/v5/basics/helpers-scss"}},c={},u=[{value:"camelize",id:"camelize",level:2},{value:"checkAttr",id:"checkattr",level:2},{value:"checkAttrResponsive",id:"checkattrresponsive",level:2},{value:"cookies",id:"cookies",level:2},{value:"debounce",id:"debounce",level:2},{value:"devices",id:"devices",level:2},{value:"dynamicImport",id:"dynamicimport",level:2},{value:"elementChildrenHeight",id:"elementchildrenheight",level:2},{value:"escape-string",id:"escape-string",level:2},{value:"responsiveSelectors",id:"responsiveselectors",level:2},{value:"selector",id:"selector",level:2},{value:"getOptionsColor",id:"getoptionscolor",level:2},{value:"getOptions",id:"getoptions",level:2},{value:"getPaletteColors",id:"getpalettecolors",level:2},{value:"outputCssVariablesGlobal",id:"outputcssvariablesglobal",level:2},{value:"outputCssVariables",id:"outputcssvariables",level:2},{value:"getUnique",id:"getunique",level:2},{value:"overrideInnerBlockAttributes",id:"overrideinnerblockattributes",level:2},{value:"overrideInnerBlockSimpleWrapperAttributes",id:"overrideinnerblocksimplewrapperattributes",level:2},{value:"props",id:"props",level:2},{value:"ucfirst",id:"ucfirst",level:2}],m={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/infinum/eightshift-frontend-libs/tree/4.0.0/blocks/init/src/blocks/"},(0,l.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/source-eigthshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a",alt:"docs-source"}))),(0,l.kt)("h2",{id:"camelize"},"camelize"),(0,l.kt)("p",null,"Returns a camel-cased string."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"@param {string} string Add string to convert.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Usage:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import { checkAttr } from '@eightshift/frontend-libs/scripts/helpers';\n\ncamelize('New super Test-title');\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Output:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"newSuperTestTitle\n")),(0,l.kt)("h2",{id:"checkattr"},"checkAttr"),(0,l.kt)("p",null,"Checks whether the attributes exist in the attributes list. If the value is not set, it checks for the default value. If the default value is not set, it adds a fallback value depending on the type, or if ",(0,l.kt)("inlineCode",{parentName:"p"},"undefinedAllowed")," is set to ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),", it sets it to ",(0,l.kt)("inlineCode",{parentName:"p"},"undefined"),"."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"@param {string}  key Key to check."),(0,l.kt)("li",{parentName:"ul"},"@param {array}   attributes Array of attributes."),(0,l.kt)("li",{parentName:"ul"},"@param {array}   manifest Array of default attributes from manifest.json."),(0,l.kt)("li",{parentName:"ul"},"@param {string}  componentName The real component name."),(0,l.kt)("li",{parentName:"ul"},"@param {boolean} undefinedAllowed Allowed detection of undefined values.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Usage:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"    import { checkAttr } from '@eightshift/frontend-libs/scripts/helpers';\n\n    checkAttr('buttonUse', attributes, manifest, componentName, undefinedAllowed);\n")),(0,l.kt)("h2",{id:"checkattrresponsive"},"checkAttrResponsive"),(0,l.kt)("p",null,"Map and check attributes for responsive object from ",(0,l.kt)("inlineCode",{parentName:"p"},"responsiveAttributes")," property from manifest."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"@param {string}  keyName Key name to find in responsiveAttributes object."),(0,l.kt)("li",{parentName:"ul"},"@param {array}   attributes Array of attributes."),(0,l.kt)("li",{parentName:"ul"},"@param {array}   manifest Array of default attributes from manifest.json."),(0,l.kt)("li",{parentName:"ul"},"@param {string}  componentName The real component name."),(0,l.kt)("li",{parentName:"ul"},"@param {boolean} undefinedAllowed Allowed detection of undefined values."),(0,l.kt)("li",{parentName:"ul"},"@throws \\Exception If missing responsiveAttributes or keyName in responsiveAttributes."),(0,l.kt)("li",{parentName:"ul"},"@throws \\Exception If missing keyName in responsiveAttributes."),(0,l.kt)("li",{parentName:"ul"},"@return mixed")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Manifest:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "attributes": {\n        "headingContentSpacingLarge": {\n            "type": "integer",\n            "variable": "default",\n            "default": 10,\n        },\n        "headingContentSpacingDesktop": {\n            "type": "integer",\n            "variable": "default",\n            "default": 5,\n        },\n        "headingContentSpacingTablet": {\n            "type": "integer",\n            "variable": "default",\n            "default": 3,\n        },\n        "headingContentSpacingMobile": {\n            "type": "integer",\n            "variable": "default",\n            "default": 1,\n        }\n    },\n    "responsiveAttributes": {\n        "headingContentSpacing": {\n            "large": "headingContentSpacingLarge",\n            "desktop": "headingContentSpacingDesktop",\n            "tablet": "headingContentSpacingTablet",\n            "mobile": "headingContentSpacingMobile"\n        }\n    }\n}\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Usage:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"    import { checkAttrResponsive } from '@eightshift/frontend-libs/scripts/helpers';\n\n    checkAttrResponsive('headingContentSpacing', attributes, manifest, componentName, undefinedAllowed);\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Output:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"[\n    large: 10,\n    desktop: 5,\n    tablet: 3,\n    mobile: 1,\n]\n")),(0,l.kt)("h2",{id:"cookies"},"cookies"),(0,l.kt)("p",null,"Used to set and get cookie values."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Usage:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"    import { cookies } from '@eightshift/frontend-libs/scripts/helpers';\n\n    cookies.setCookie('gdpr', '2', cookies.setOneDay(), '/');\n\n    cookies.getCookie('gdpr');\n")),(0,l.kt)("h2",{id:"debounce"},"debounce"),(0,l.kt)("p",null,"Debounces the provided function. For more information, check ",(0,l.kt)("a",{parentName:"p",href:"https://davidwalsh.name/javascript-debounce-function"},"this blog post"),"."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"@param {function} func Provided function to apply debounce."),(0,l.kt)("li",{parentName:"ul"},"@param {int} wait Wait time for debounce.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Usage:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"    import { debounce } from '@eightshift/frontend-libs/scripts/helpers';\n\n    debounce(() => {\n        // callback function.\n    }, 250);\n")),(0,l.kt)("h2",{id:"devices"},"devices"),(0,l.kt)("p",null,"Checks if your browser's navigator is a specific device."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Usage:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"    import { device } from '@eightshift/frontend-libs/scripts/helpers';\n\n    device.iPhone();\n")),(0,l.kt)("h2",{id:"dynamicimport"},"dynamicImport"),(0,l.kt)("p",null,"Used to get (require) all the files using the ",(0,l.kt)("inlineCode",{parentName:"p"},"require.context")," method. It will find all files recursively in the folder using a regex. The following example will require all assets/index.js files inside the custom folder, so there is no need to manually add the files to the build."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"@param {object} paths All require.context patch to iterate.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Usage:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"    import { dynamicImport } from '@eightshift/frontend-libs/scripts/helpers';\n\n    dynamicImport(require.context('./../../custom', true, /assets\\/index.js$/));\n")),(0,l.kt)("h2",{id:"elementchildrenheight"},"elementChildrenHeight"),(0,l.kt)("p",null,"Returns the height of the element measured by the height of its children."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"@param {object} element DOM element")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Usage:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import { dynamicImport } from '@eightshift/frontend-libs/scripts/helpers';\n\nelementChildrenHeight('.js-item');\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Output:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'<div class="js-item" style="height: 100px"></div>\n<div class="js-item" style="height: 100px"></div>\n<div class="js-item" style="height: 100px"></div>\n')),(0,l.kt)("h2",{id:"escape-string"},"escape-string"),(0,l.kt)("p",null,"Takes the provided string and removes special characters. Characters that will be removed: ",(0,l.kt)("inlineCode",{parentName:"p"},"([;&,.+*~':\"!^#$%@[\\]()=>|]"),"."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"@param {string} $key Key to check.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Usage:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"    import { escapeString } from '@eightshift/frontend-libs/scripts/helpers';\n\n    escapeString.escapeString('Special string');\n")),(0,l.kt)("h2",{id:"responsiveselectors"},"responsiveSelectors"),(0,l.kt)("p",null,"Create responsive selectors used for responsive attributes."),(0,l.kt)("p",null,"Useful if you want to show how the responsive behavior looks in the editor."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"@param {array}   items        Array of breakpoints."),(0,l.kt)("li",{parentName:"ul"},"@param {string}  selector     Selector for this breakpoint."),(0,l.kt)("li",{parentName:"ul"},"@param {string}  parent       Parent block selector."),(0,l.kt)("li",{parentName:"ul"},"@param {boolean} use_modifier If false, you can use this selector for visibility.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Usage:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"    import { responsiveSelectors } from '@eightshift/frontend-libs/scripts/helpers';\n\n    responsiveSelectors($attributes['width'], 'width', $blockClass);\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Output:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"    .block-column__width-large--4\n")),(0,l.kt)("h2",{id:"selector"},"selector"),(0,l.kt)("p",null,"Returns BEM selector for HTML class and checks if the condition part is set."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"@param {boolean} condition Check condition."),(0,l.kt)("li",{parentName:"ul"},"@param {string}  block BEM Block selector."),(0,l.kt)("li",{parentName:"ul"},"@param {string}  element BEM Element selector."),(0,l.kt)("li",{parentName:"ul"},"@param {string}  modifier BEM Modifier selector."),(0,l.kt)("li",{parentName:"ul"},"@return {string}")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Usage:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"    import { selector } from '@eightshift/frontend-libs/scripts/helpers';\n\n    selector(!(buttonContent && buttonUrl), `${componentClass}-placeholder`);\n\n    selector(test, componentClass, elementClass);\n\n    selector(!newTest, componentClass, elementClass, modifierClass);\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Equivalent:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"    !(buttonContent && buttonUrl) ? `${componentClass}-placeholder` : '';\n\n    test ? `${componentClass}__${elementClass}` : '';\n\n    !(newTest) ? `${componentClass}__${elementClass}--${modifierClass}` : '';\n\n")),(0,l.kt)("h2",{id:"getoptionscolor"},"getOptionsColor"),(0,l.kt)("p",null,"Use this hook to filter the global colors out of the component or block manifest"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"@param {array} colors Array of colors to filter.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Usage:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import { getOptions } from '@eightshift/frontend-libs/scripts/editor';\n\n<ColorPaletteCustom\n        label={\n            <>\n                <Icon icon={icons.color} />\n                {__('Color', 'eightshift-frontend-libs')}\n            </>\n        }\n        colors={getOptionColors(getOptions(manifest, componentName, 'color', options))}\n        value={headingColor}\n        onChange={(value) => setAttributes({ [`${componentName}Color`]: value })}\n/>\n")),(0,l.kt)("h2",{id:"getoptions"},"getOptions"),(0,l.kt)("p",null,"Provides the ability to override component options from the parent block/component.\nThe components must have the same option names as attribute standard with ",(0,l.kt)("inlineCode",{parentName:"p"},"componentName")," prefix."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"@param {object} manifest Original manifest from the component."),(0,l.kt)("li",{parentName:"ul"},"@param {string} componentName Current componentName. This is changed depending on the passed componentName."),(0,l.kt)("li",{parentName:"ul"},"@param {string} attribute Attribute name to check without componentName prefix. Value is auto camelCased."),(0,l.kt)("li",{parentName:"ul"},"@param {object} options Options provided by the parent block/component.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Usage:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import { getOptions } from '@eightshift/frontend-libs/scripts/editor';\n\n<SelectControl\n    label={\n        <>\n            <Icon icon={icons.size} />\n            {__('Type', 'eightshift-frontend-libs')}\n        </>\n    }\n    value={buttonType}\n    options={getOptions(manifest, componentName, 'type', options)}\n    onChange={(value) => setAttributes({ [`${componentName}Type`]: value })}\n/>\n")),(0,l.kt)("h2",{id:"getpalettecolors"},"getPaletteColors"),(0,l.kt)("p",null,"Use this hook to read editor-color-palette colors directly from WP built-in store."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Requires WP => 5.3")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Usage:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"    import { getPaletteColors } from '@eightshift/frontend-libs/scripts/editor';\n\n    getPaletteColors();\n")),(0,l.kt)("h2",{id:"outputcssvariablesglobal"},"outputCssVariablesGlobal"),(0,l.kt)("p",null,"Get global manifest.json and return ",(0,l.kt)("inlineCode",{parentName:"p"},"globalVariables")," as CSS variables."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"@param array globalManifest Array of global variables data.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Data:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'const manifestGlobal = {\n    "globalVariables": {\n        "maxCols": 12,\n        "breakpoints": {\n            "mobile": 479,\n            "tablet": 1279,\n            "desktop": 1919,\n            "large": 1920\n        },\n        "containers": {\n            "default": "1330px"\n        },\n        "gutters": {\n            "none": "0",\n            "default": "25px",\n            "big": "50px"\n        },\n        "sectionSpacing": {\n            "min":  -300,\n            "max":  300,\n            "step": 10\n        },\n        "sectionInSpacing": {\n            "min":  0,\n            "max":  300,\n            "step": 10\n        },\n        "colors": [\n            {\n                "name": "Infinum",\n                "slug": "infinum",\n                "color": "#D8262C"\n            },\n            {\n                "name": "Black",\n                "slug": "black",\n                "color": "#111111"\n            }\n        ]\n    }\n};\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Usage:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import { getUnique } from '@eightshift/frontend-libs/scripts/editor';\nimport globalSettings from './../../manifest.json';\n\noutputCssVariablesGlobal(globalSettings);\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Output:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"<style>\n    :root {\n        --global-max-cols: 12;\n        --global-breakpoints-mobile: 479;\n        --global-breakpoints-tablet: 1279;\n        --global-breakpoints-desktop: 1919;\n        --global-breakpoints-large: 1920;\n        --global-containers-default: 1330px;\n        --global-gutters-none: 0;\n        --global-gutters-default: 25px;\n        --global-gutters-big: 50px;\n        --global-section-spacing-min: -300;\n        --global-section-spacing-max: 300;\n        --global-section-spacing-step: 10;\n        --global-section-in-spacing-min: 0;\n        --global-section-in-spacing-max: 300;\n        --global-section-in-spacing-step: 10;\n        --global-colors-infinum: #D8262C;\n        --global-colors-black: #111111;\n        --global-colors-white: #FFFFFF;\n    }\n</style>\n")),(0,l.kt)("h2",{id:"outputcssvariables"},"outputCssVariables"),(0,l.kt)("p",null,"Get component/block options and process them in CSS variables."),(0,l.kt)("p",null,"For detailed usage check ",(0,l.kt)("a",{parentName:"p",href:"blocks-styles"},"block styles"),";"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"@param array  $attributes Built attributes."),(0,l.kt)("li",{parentName:"ul"},"@param array  $manifest Component/block manifest data."),(0,l.kt)("li",{parentName:"ul"},"@param string $unique Unique key."),(0,l.kt)("li",{parentName:"ul"},"@param array  $globalManifest Global manifest array.")),(0,l.kt)("h2",{id:"getunique"},"getUnique"),(0,l.kt)("p",null,"Return unique ID for block processing."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Usage:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import { getUnique } from '@eightshift/frontend-libs/scripts/editor';\n\ngetUnique();\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Output:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"891273981374b98127419287\n")),(0,l.kt)("h2",{id:"overrideinnerblockattributes"},"overrideInnerBlockAttributes"),(0,l.kt)("p",null,"Used to set attributes on all innerBlocks. This value will be stored in the block editor store and set to a block."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Usage:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"    import { useSelect } from '@wordpress/data';\n    import { overrideInnerBlockAttributes } from '@eightshift/frontend-libs/scripts/editor';\n\n    useSelect((select) => {\n        overrideInnerBlockAttributes(\n            select,\n            props.clientId,\n            {\n                wrapperDisable: true,\n            }\n        );\n    });\n")),(0,l.kt)("h2",{id:"overrideinnerblocksimplewrapperattributes"},"overrideInnerBlockSimpleWrapperAttributes"),(0,l.kt)("p",null,"Used to set attributes on all innerBlocks preset only for simple wrapper setup. This value will be stored in the block editor store and set to a block."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Usage:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"    import { useSelect } from '@wordpress/data';\n    import { overrideInnerBlockSimpleWrapperAttributes } from '@eightshift/frontend-libs/scripts/editor';\n\n    useSelect((select) => {\n        overrideInnerBlockSimpleWrapperAttributes(\n            select,\n            props.clientId,\n        );\n    });\n")),(0,l.kt)("h2",{id:"props"},"props"),(0,l.kt)("p",null,"Output only attributes that are used in the component and remove everything else."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"@param {object}  attributes Object of attributes from block/component."),(0,l.kt)("li",{parentName:"ul"},"@param {string}  realName Old key to use, generally this is the name of the block/component."),(0,l.kt)("li",{parentName:"ul"},"@param {string}  newName New key to use to rename attributes."),(0,l.kt)("li",{parentName:"ul"},"@param {boolean} isBlock Check if helper is used on block or component."),(0,l.kt)("li",{parentName:"ul"},"@param {string}  globalManifestData If global manifest is not provided use the default path.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Data:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const attributes = {\n    buttonColor: 'red',\n    buttonSize: 'big',\n    buttonIcon: 'blue',\n    blockName: 'button',\n    wrapperSize: 'big',\n    wrapperType: 'normal',\n};\n\nconst blockName = 'button';\nconst componentName = 'button';\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Usage:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import { props } from '@eightshift/frontend-libs/scripts/editor';\n\n{...props(attributes, blockName, '', true)}\n\n{...props(attributes, componentName)}\n\n{...props(attributes, 'typography', componentName)}\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Output:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"{\n    buttonColor: 'red',\n    buttonSize: 'big',\n    buttonIcon: 'blue',\n    blockName: 'button',\n};\n\n{\n    buttonColor: 'red',\n    buttonSize: 'big',\n    buttonIcon: 'blue',\n    blockName: 'button',\n};\n\n{\n    typographyColor: 'red',\n    typographySize: 'big',\n    typographyIcon: 'blue',\n};\n")),(0,l.kt)("h2",{id:"ucfirst"},"ucfirst"),(0,l.kt)("p",null,"Converts the first letter of a string to uppercase."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Usage:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"    import { ucfirst } from '@eightshift/frontend-libs/scripts/editor';\n\n    ucfirst('custom');\n")))}d.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,k=m["".concat(i,".").concat(d)]||m[d]||u[d]||l;return n?a.createElement(k,o(o({ref:t},c),{},{components:n})):a.createElement(k,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);