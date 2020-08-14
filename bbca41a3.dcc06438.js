(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{160:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return p}));var o=r(1),n=r(9),a=(r(0),r(174)),c={id:"verify",title:"Adding your TryHackMe Level to Discord",sidebar_label:"Verifying your Level"},i={id:"discord/verify",title:"Adding your TryHackMe Level to Discord",description:"Your [**level**](https://docs.tryhackme.com/docs/general/tryhackme-levels) on TryHackMe can be copied across as a role on the discord server. To do so, you will need to perform the following steps:",source:"@site/docs/discord/verify.md",permalink:"/docs/discord/verify",editUrl:"https://github.com/tryhackmeltd/docs.tryhackme.com/edit/master/docs/discord/verify.md",lastUpdatedBy:"Ben (CMNatic)",lastUpdatedAt:1594476380,sidebar_label:"Verifying your Level",sidebar:"docs",previous:{title:"Getting Started with the TryHackMe Discord Server",permalink:"/docs/discord/discord-getting-started"},next:{title:"King of the Hill",permalink:"/docs/koth/king-of-the-hill"}},l=[],s={rightToc:l};function p(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Your ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://docs.tryhackme.com/docs/general/tryhackme-levels"}),Object(a.b)("strong",{parentName:"a"},"level"))," on TryHackMe can be copied across as a role on the discord server. To do so, you will need to perform the following steps:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},'First, navigate to your profile on TryHackMe and click on the "Other" Tab:')),Object(a.b)("p",null,Object(a.b)("img",Object(o.a)({parentName:"p"},{src:"https://i.imgur.com/YwtTCyv.png",alt:"Profile-Demo"}))),Object(a.b)("ol",{start:2},Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},'Copy your Discord token, then switch over to Discord. Make sure that you do not share it with anyone who isn\'t the "TryHackMe" Bot in the TryHackMeDiscord. The Bot is in ',Object(a.b)("strong",{parentName:"p"},"purple")," and has the THM logo as shown later on with a Discord-coloured blue next to it.")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Join the TryHackMeDiscord. The steps to do so are detailed ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:""}),Object(a.b)("strong",{parentName:"a"},"here")))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},'Look for the "TryHackMe Bot" on the top right of the user list.')),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},'Right click the "TryHackMe Bot" and press "Message"\n',Object(a.b)("img",Object(o.a)({parentName:"p"},{src:"https://i.imgur.com/4zWeIAZ.png",alt:"THMBotDM"})))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Ensuring you're messaging the TryHackMeBot, type ",Object(a.b)("inlineCode",{parentName:"p"},"!verify")," into the message box that appears. ",Object(a.b)("strong",{parentName:"p"},"Press Space, then paste your token")," like below:"))),Object(a.b)("p",null,Object(a.b)("img",Object(o.a)({parentName:"p"},{src:"https://i.imgur.com/3PvcJhQ.png",alt:"Verify Token"}))),Object(a.b)("ol",{start:7},Object(a.b)("li",{parentName:"ol"},'Press "Enter" and the bot will update your roles!')),Object(a.b)("p",null,"Your role within the Discord will now automatically update every 24 hours. However, if you'd that to be reflected quicker, you will have to perform the same process again."),Object(a.b)("p",null,"For security, your Discord token on the TryHackMe site can only be assigned to one Discord account at a time. Get in touch with the Moderators there if you need it removed."))}p.isMDXComponent=!0},174:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var o=r(0),n=r.n(o);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=n.a.createContext({}),p=function(e){var t=n.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i({},t,{},e)),r},b=function(e){var t=p(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=Object(o.forwardRef)((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(r),u=o,m=b["".concat(c,".").concat(u)]||b[u]||d[u]||a;return r?n.a.createElement(m,i({ref:t},s,{components:r})):n.a.createElement(m,i({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=r[s];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);