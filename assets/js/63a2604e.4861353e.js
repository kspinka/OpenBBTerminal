"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[67057],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=i.createContext({}),l=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return i.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,g=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return n?i.createElement(g,a(a({ref:t},c),{},{components:n})):i.createElement(g,a({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},78255:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var i=n(87462),r=(n(67294),n(3905));const o={title:"Hedge",keywords:["Options","stocks","derivatives","puts","calls","oi","vol","greeks","hedge","gamme","delta","theta","rho","vanna","vomma","phi","charm","iv","volatility","implied","realized","price","last","bid","ask","expiry","expiration","chains","chain","put","call","strategy"],excerpt:"This guide introduces the Hedge submenu, within the Options menu, providing examples in use."},a=void 0,s={unversionedId:"guides/intros/stocks/options/hedge",id:"guides/intros/stocks/options/hedge",title:"Hedge",description:"The Hedge menu is designed to help the user calculate positions within the selected expiration chain to be directionally neutral. Enter the submenu after choosing the desired expiration date by using the command, hedge, from the Options menu.",source:"@site/content/terminal/guides/intros/stocks/options/hedge.md",sourceDirName:"guides/intros/stocks/options",slug:"/guides/intros/stocks/options/hedge",permalink:"/terminal/guides/intros/stocks/options/hedge",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/guides/intros/stocks/options/hedge.md",tags:[],version:"current",frontMatter:{title:"Hedge",keywords:["Options","stocks","derivatives","puts","calls","oi","vol","greeks","hedge","gamme","delta","theta","rho","vanna","vomma","phi","charm","iv","volatility","implied","realized","price","last","bid","ask","expiry","expiration","chains","chain","put","call","strategy"],excerpt:"This guide introduces the Hedge submenu, within the Options menu, providing examples in use."},sidebar:"tutorialSidebar",previous:{title:"Options",permalink:"/terminal/guides/intros/stocks/options/"},next:{title:"Options Pricing",permalink:"/terminal/guides/intros/stocks/options/pricing"}},p={},l=[{value:"How to use",id:"how-to-use",level:3},{value:"Examples",id:"examples",level:3}],c={toc:l};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The Hedge menu is designed to help the user calculate positions within the selected expiration chain to be directionally neutral. Enter the submenu after choosing the desired ",(0,r.kt)("a",{href:"/terminal/reference/stocks/options/exp",target:"_blank",rel:"noreferrer noopener"},"expiration")," date by using the command, ",(0,r.kt)("inlineCode",{parentName:"p"},"hedge"),", from the Options menu."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/172286199-ec6e202d-4955-4557-9ba6-7d4db6fbdd55.png",alt:"The Options Hedge Submenu"})),(0,r.kt)("h3",{id:"how-to-use"},"How to use"),(0,r.kt)("p",null,"The first step is to pick the underlying position for the calculation. Scroll the list populated by autocomplete, or type in the choice."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/172286267-9c164764-271f-4847-adc7-52bfb82e1138.png",alt:"Picking underlying position"})),(0,r.kt)("p",null,"The strike prices for puts and calls are shown with the ",(0,r.kt)("inlineCode",{parentName:"p"},"list")," command. Use this table to add or remove options from the calculation."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/172286323-62e69fe1-dc37-42a1-8fdb-d3287ff0ac38.png",alt:"List of strikes"})),(0,r.kt)("p",null,"Add the first option with the corresponding index number for the strike price, attaching flags for a put and for short, ",(0,r.kt)("inlineCode",{parentName:"p"},"-s")," & ",(0,r.kt)("inlineCode",{parentName:"p"},"-p"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/172286367-a15f57fe-a10f-402c-9bf6-5e7dd34dedb4.png",alt:"Adding Option A to the calculation"})),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"rmv")," command removes added options. With an underlying position and two positions added, ",(0,r.kt)("inlineCode",{parentName:"p"},"sop")," will display the results based on the inputs provided."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/172286429-a0d6710d-a5a0-49e5-9938-f3b9aaebb236.png",alt:"Position sizing for delta neutral"})),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"plot")," will display an options payoff chart, using the provided values."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/172286525-4ede89ec-4ed7-4843-a0fa-ec306efe3b67.png",alt:"Options payoff diagram"})),(0,r.kt)("h3",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Substituting Option A for a different trade."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/172286582-1f5e153a-a900-427a-a7fc-f596648de599.png",alt:"Hedge Example"})),(0,r.kt)("p",null,"Substuting Option B from the same example above."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/172286627-0f6f6a60-d76c-4e24-9fdd-8e65e137097e.png",alt:"Hedge Example"})),(0,r.kt)("p",null,"Moving Option B down one strike."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/172286669-82a98127-fe74-43fd-bcc9-ed874f746bdc.png",alt:"Hedge Example"})))}u.isMDXComponent=!0}}]);