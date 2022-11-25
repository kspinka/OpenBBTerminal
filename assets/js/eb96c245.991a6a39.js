"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[11882],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),m=n,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return r?a.createElement(f,o(o({ref:t},p),{},{components:r})):a.createElement(f,o({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},75206:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const i={title:"fraud",description:"OpenBB Terminal Function"},o="fraud",s={unversionedId:"reference/stocks/fa/fraud",id:"reference/stocks/fa/fraud",title:"fraud",description:"OpenBB Terminal Function",source:"@site/content/terminal/reference/stocks/fa/fraud.md",sourceDirName:"reference/stocks/fa",slug:"/reference/stocks/fa/fraud",permalink:"/terminal/reference/stocks/fa/fraud",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/stocks/fa/fraud.md",tags:[],version:"current",frontMatter:{title:"fraud",description:"OpenBB Terminal Function"},sidebar:"tutorialSidebar",previous:{title:"enterprise",permalink:"/terminal/reference/stocks/fa/enterprise"},next:{title:"growth",permalink:"/terminal/reference/stocks/fa/growth"}},l={},c=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}],p={toc:c};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"fraud"},"fraud"),(0,n.kt)("p",null,"M-score: ------------------------------------------------ The Beneish model is a statistical model that uses financial ratios calculated with accounting data of a specific company in order to check if it is likely (high probability) that the reported earnings of the company have been manipulated. A score of -5 to -2.22 indicated a low chance of fraud, a score of -2.22 to -1.78 indicates a moderate change of fraud, and a score above -1.78 indicated a high chance of fraud.","[Source: Wikipedia]"," DSRI: Days Sales in Receivables Index gauges whether receivables and revenue are out of balance, a large number is expected to be associated with a higher likelihood that revenues and earnings are overstated. GMI: Gross Margin Index shows if gross margins are deteriorating. Research suggests that firms with worsening gross margin are more likely to engage in earnings management, therefore there should be a positive correlation between GMI and probability of earnings management. AQI: Asset Quality Index measures the proportion of assets where potential benefit is less certain. A positive relation between AQI and earnings manipulation is expected. SGI: Sales Growth Index shows the amount of growth companies are having. Higher growth companies are more likely to commit fraud so there should be a positive relation between SGI and earnings management. DEPI: Depreciation Index is the ratio for the rate of depreciation. A DEPI greater than 1 shows that the depreciation rate has slowed and is positively correlated with earnings management. SGAI: Sales General and Administrative Expenses Index measures the change in SG&A over sales. There should be a positive relationship between SGAI and earnings management. LVGI: Leverage Index represents change in leverage. A LVGI greater than one indicates a lower change of fraud. TATA: Total Accruals to Total Assets is a proxy for the extent that cash underlies earnings. A higher number is associated with a higher likelihood of manipulation. Z-score: ------------------------------------------------ The Zmijewski Score is a bankruptcy model used to predict a firm's bankruptcy in two years. The ratio uses in the Zmijewski score were determined by probit analysis (think of probit as probability unit). In this case, scores less than .5 represent a higher probability of default. One of the criticisms that Zmijewski made was that other bankruptcy scoring models oversampled distressed firms and favored situations with more complete data.","[Source: YCharts]"," McKee-score: ------------------------------------------------ The McKee Score is a bankruptcy model used to predict a firm's bankruptcy in one yearIt looks at a company's size, profitability, and liquidity to determine the probability.This model is 80% accurate in predicting bankruptcy."),(0,n.kt)("h3",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"fraud [-e] [-d]\n")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"),(0,n.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"exp"),(0,n.kt)("td",{parentName:"tr",align:null},"Shows an explanation for the metrics"),(0,n.kt)("td",{parentName:"tr",align:null},"False"),(0,n.kt)("td",{parentName:"tr",align:null},"True"),(0,n.kt)("td",{parentName:"tr",align:null},"None")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"detail"),(0,n.kt)("td",{parentName:"tr",align:null},"Shows the details for calculating the mscore"),(0,n.kt)("td",{parentName:"tr",align:null},"False"),(0,n.kt)("td",{parentName:"tr",align:null},"True"),(0,n.kt)("td",{parentName:"tr",align:null},"None")))),(0,n.kt)("hr",null))}d.isMDXComponent=!0}}]);