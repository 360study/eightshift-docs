"use strict";(self.webpackChunk_eightshift_docs=self.webpackChunk_eightshift_docs||[]).push([[4337],{5437:function(e,t,n){n.r(t),n.d(t,{default:function(){return r}});var a=n(7294),i=n(2263),s=n(4996),l=n(2434),c=n(3040);function r(){var e=(0,i.Z)().siteConfig,t=void 0===e?{}:e;return a.createElement(l.Z,{title:"Get Started",description:t.tagline,keywords:t.customFields.keywords,metaImage:(0,s.Z)("img/"+t.customFields.image)},a.createElement(c.Z,null))}},4408:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(7294),i=n(4996);function s(e){var t="shift-arrow",n=e.componentClass;return a.createElement("img",{className:" shift-arrow "+n+"__"+t,src:(0,i.Z)("img/ic-arrow.svg")})}},1421:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(7294);function i(e){var t="shift-container",n=e.componentClass,i=e.size,s=void 0===i?"default":i,l=e.children;return a.createElement(a.Fragment,null,l&&a.createElement("div",{className:"\n          "+t+"\n          "+t+"__size--"+s+"\n          "+n+"__"+t+"\n        "},l))}},5280:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(7294);function i(e){var t="shift-heading",n=e.componentClass,i=e.title,s=e.subtitle,l=e.align,c=void 0===l?"center":l,r=e.titleSize,o=void 0===r?"default":r;return a.createElement(a.Fragment,null,i&&a.createElement("div",{className:"\n          shift-heading\n          "+n+"__"+t+"\n          "+t+"__align--"+c+"\n        "},i&&a.createElement("div",{className:t+"__title "+t+"__title-size--"+o},i),s&&a.createElement("div",{className:t+"__subtitle",dangerouslySetInnerHTML:{__html:s}})))}},3040:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(7294),i=n(4996),s=n(5280),l=n(1421),c=n(4408);function r(){var e="shift-get-started",t=[{bg:(0,i.Z)("img/ic-theme-bg.svg"),icon:(0,i.Z)("img/ic-theme.svg"),type:"theme",label:'I want a new WordPress <span class="'+e+'__label-highlight">theme</span>',link:(0,i.Z)("/docs/theme")},{bg:(0,i.Z)("img/ic-plugin-bg.svg"),icon:(0,i.Z)("img/ic-plugin.svg"),type:"plugin",label:'I want a new WordPress <span class="'+e+'__label-highlight">plugin</span>',link:(0,i.Z)("/docs/plugin")}].map((function(t,n){var i=t.bg,s=t.icon,l=t.type,r=t.label,o=t.link;return a.createElement("div",{className:e+"__item "+e+"__item--"+l,key:n},a.createElement("a",{className:e+"__link",href:o},a.createElement("div",{className:e+"__icon"},a.createElement("img",{className:e+"__icon-bg",src:i}),a.createElement("img",{className:e+"__icon-img",src:s})),a.createElement("div",{className:e+"__label",dangerouslySetInnerHTML:{__html:r}}),a.createElement(c.Z,{componentClass:e})))}));return a.createElement("div",{className:e},a.createElement(l.Z,{componentClass:e,size:"small"},a.createElement(s.Z,{componentClass:e,title:"Choose one of the options to get started",subtitle:"We've built a bot to automate the tedious process of setting up a new project, so you can focus on your code. Just choose where you want to start."}),a.createElement("div",{className:e+"__content"},t)))}}}]);