"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[77015],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>s});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(n),s=a,f=m["".concat(c,".").concat(s)]||m[s]||d[s]||l;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9462:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const l={title:"altindex",description:"OpenBB Terminal Function"},i="altindex",o={unversionedId:"reference/crypto/ov/altindex",id:"reference/crypto/ov/altindex",title:"altindex",description:"OpenBB Terminal Function",source:"@site/content/terminal/reference/crypto/ov/altindex.md",sourceDirName:"reference/crypto/ov",slug:"/reference/crypto/ov/altindex",permalink:"/terminal/reference/crypto/ov/altindex",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/crypto/ov/altindex.md",tags:[],version:"current",frontMatter:{title:"altindex",description:"OpenBB Terminal Function"},sidebar:"tutorialSidebar",previous:{title:"whales",permalink:"/terminal/reference/crypto/onchain/whales"},next:{title:"btcrb",permalink:"/terminal/reference/crypto/ov/btcrb"}},c={},p=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}],u={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"altindex"},"altindex"),(0,a.kt)("p",null,"Display altcoin index overtime. If 75% of the Top 50 coins performed better than Bitcoin over periods of time (30, 90 or 365 days) it is Altcoin Season. Excluded from the Top 50 are Stablecoins (Tether, DAI\u2026) and asset backed tokens (WBTC, stETH, cLINK,\u2026) ","[Source: https://blockchaincenter.net]"),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"altindex [-p {30,90,365}] [-s SINCE] [-u UNTIL]\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"),(0,a.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"period"),(0,a.kt)("td",{parentName:"tr",align:null},"Period of time to check if how altcoins have performed against btc (30, 90, 365)"),(0,a.kt)("td",{parentName:"tr",align:null},"365"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"30, 90, 365")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"since"),(0,a.kt)("td",{parentName:"tr",align:null},"Start date (default: 1 year before, e.g., 2021-01-01)"),(0,a.kt)("td",{parentName:"tr",align:null},"2021-11-25"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"until"),(0,a.kt)("td",{parentName:"tr",align:null},"Final date. Default is current date"),(0,a.kt)("td",{parentName:"tr",align:null},"2022-11-25"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")))),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/46355364/154068454-43dbc146-31df-4b25-bf14-0b12284afc6d.png",alt:"altindex"})),(0,a.kt)("hr",null))}d.isMDXComponent=!0}}]);