"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[75106],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=l,f=m["".concat(p,".").concat(d)]||m[d]||s[d]||o;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,a=new Array(o);a[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:l,a[1]=i;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},81336:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(87462),l=(n(67294),n(3905));const o={title:"bench",description:"OpenBB SDK Function"},a="bench",i={unversionedId:"reference/portfolio/bench",id:"reference/portfolio/bench",title:"bench",description:"OpenBB SDK Function",source:"@site/content/sdk/reference/portfolio/bench.md",sourceDirName:"reference/portfolio",slug:"/reference/portfolio/bench",permalink:"/sdk/reference/portfolio/bench",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/reference/portfolio/bench.md",tags:[],version:"current",frontMatter:{title:"bench",description:"OpenBB SDK Function"},sidebar:"tutorialSidebar",previous:{title:"sectors",permalink:"/sdk/reference/portfolio/alloc/sectors"},next:{title:"distr",permalink:"/sdk/reference/portfolio/distr"}},p={},c=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2}],u={toc:c};function s(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"bench"},"bench"),(0,l.kt)("p",null,"Load benchmark into portfolio"),(0,l.kt)("p",null,"Source Code: [",(0,l.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_model.py#L93"},"link"),"]"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"openbb.portfolio.bench(portfolio_engine: portfolio_engine.PortfolioEngine, symbol: str, full_shares: bool = False)\n")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"portfolio_engine"),(0,l.kt)("td",{parentName:"tr",align:null},"PortfolioEngine"),(0,l.kt)("td",{parentName:"tr",align:null},"PortfolioEngine class instance, this will hold transactions and perform calculations.",(0,l.kt)("br",null),"Use ",(0,l.kt)("inlineCode",{parentName:"td"},"portfolio.load")," to create a PortfolioEngine."),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"symbol"),(0,l.kt)("td",{parentName:"tr",align:null},"str"),(0,l.kt)("td",{parentName:"tr",align:null},"Benchmark symbol to download data"),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"full_shares"),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to mimic the portfolio trades exactly (partial shares) or round down the",(0,l.kt)("br",null),"quantity to the nearest number"),(0,l.kt)("td",{parentName:"tr",align:null},"False"),(0,l.kt)("td",{parentName:"tr",align:null},"True")))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"returns"},"Returns"),(0,l.kt)("p",null,"This function does not return anything"),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'from openbb_terminal.sdk import openbb\np = openbb.portfolio.load("openbb_terminal/miscellaneous/portfolio_examples/holdings/example.csv")\noutput = openbb.portfolio.bench(p, symbol="SPY")\n')),(0,l.kt)("hr",null))}s.isMDXComponent=!0}}]);