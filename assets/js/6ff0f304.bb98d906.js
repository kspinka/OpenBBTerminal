"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[89284],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=p(n),u=o,h=c["".concat(s,".").concat(u)]||c[u]||d[u]||i;return n?a.createElement(h,r(r({ref:t},m),{},{components:n})):a.createElement(h,r({ref:t},m))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(67294),o=n(86010);const i="tabItem_Ymn6";function r(e){let{children:t,hidden:n,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(i,r),hidden:n},t)}},65099:(e,t,n)=>{n.d(t,{Z:()=>k});var a=n(87462),o=n(67294),i=n(10412),r=n(86010),l=n(72389),s=n(67392),p=n(7094),m=n(12466);const d="tabItem_hGfb";var c=n(16550);function u(){const e=function(){const e=i.Z.canUseDOM?navigator.userAgent:"";return e.indexOf("Windows")>-1?"Windows":e.indexOf("Mac")>-1?"Mac":e.indexOf("X11")>-1?"UNIX":e.indexOf("Linux")>-1?"Linux":"Other"}();return"Windows"===e?"windows":"Mac"===e?"mac":"Linux"===e||"UNIX"===e?"python":"windows"}function h(e){var t;const{lazy:n,block:i,defaultValue:l,values:h,groupId:k,className:g}=e,b=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),N=h??b.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),f=(0,s.l)(N,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const w=null===l?l:l??(null==(t=b.find((e=>e.props.default)))?void 0:t.props.value)??b[0].props.value;if(null!==w&&!N.some((e=>e.value===w)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${w}" but none of its children has the corresponding value. Available values are: ${N.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:v}=(0,p.U)(),{pathname:O,search:T}=(0,c.TH)(),I=function(e,t){const n=e.substring(1).split("&");for(let a=0;a<n.length;a++){let e=n[a].split("=");if(decodeURIComponent(e[0])==t)return decodeURIComponent(e[1])}return null}(T,"tab"),x=u(),[B,C]=(0,o.useState)(O.startsWith("/terminal/quickstart/installation")?I&&["mac","windows","python","docker"].includes(I)?I:x:w),S=[],{blockElementScrollPositionUntilNextRender:D}=(0,m.o5)();if(null!=k){const e=y[k];null!=e&&e!==B&&N.some((t=>t.value===e))&&C(e)}const M=e=>{const t=e.currentTarget,n=S.indexOf(t),a=N[n].value;a!==B&&(D(t),C(a),null!=k&&v(k,String(a)))},W=e=>{var t;let n=null;switch(e.key){case"Enter":M(e);break;case"ArrowRight":{const t=S.indexOf(e.currentTarget)+1;n=S[t]??S[0];break}case"ArrowLeft":{const t=S.indexOf(e.currentTarget)-1;n=S[t]??S[S.length-1];break}}null==(t=n)||t.focus()};return o.createElement("div",null,o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("_group-tab list-none -ml-7 my-6 overflow-auto")},N.map((e=>{let{value:t,label:n,attributes:i}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:B===t?0:-1,"aria-selected":B===t,key:t,ref:e=>S.push(e),onKeyDown:W,onClick:M},i,{className:(0,r.Z)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",d,null==i?void 0:i.className,{"border-b-2 pointer-events-none":B===t,"border-b-2 text-[#669dcb] border-[#669dcb]":B===t&&O.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":B===t&&O.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":B!==t&&O.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":B!==t&&O.startsWith("/terminal")})}),n??t)})),o.createElement("li",{className:"w-full border-b border-grey-400 pointer-events-none py-1 mb-[12px]"})),n?(0,o.cloneElement)(b.filter((e=>e.props.value===B))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==B})))))}function k(e){const t=(0,l.Z)();return o.createElement(h,(0,a.Z)({key:String(t)},e))}},20033:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>m,default:()=>k,frontMatter:()=>p,metadata:()=>d,toc:()=>u});var a=n(87462),o=n(67294),i=n(3905),r=n(65099),l=n(85162);function s(e){let{href:t,label:n,type:a}=e;return o.createElement("a",{href:t,className:"button button--primary !no-underline inline-flex gap-4 h-10 items-center",rel:"noreferrer noopener",target:"_blank"},"windows"===a?o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-4",height:88,width:88,viewBox:"0 0 88 88"},o.createElement("path",{d:"m0 12.402 35.687-4.86.016 34.423-35.67.203zm35.67 33.529.028 34.453L.028 75.48.026 45.7zm4.326-39.025L87.314 0v41.527l-47.318.376zm47.329 39.349-.011 41.34-47.318-6.678-.066-34.739z",fill:"currentColor"})):o.createElement("svg",{className:"w-4 -mt-1",xmlns:"http://www.w3.org/2000/svg",xmlSpace:"preserve",width:814,height:1e3,viewBox:"0 0 814 1000"},o.createElement("path",{fill:"currentColor",d:"M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105.6-57-155.5-127C46.7 790.7 0 663 0 541.8c0-194.4 126.4-297.5 250.8-297.5 66.1 0 121.2 43.4 162.7 43.4 39.5 0 101.1-46 176.3-46 28.5 0 130.9 2.6 198.3 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z"})),n)}const p={sidebar_position:1,title:"Installation"},m=void 0,d={unversionedId:"quickstart/installation",id:"quickstart/installation",title:"Installation",description:"The OpenBB Terminal can be directly installed on your computer via our installation program. Within this section, you are guided through the installation process and how to launch the program. If you struggle with the installation process, please don\u2019t hesitate to reach us on Discord or visit our contact page.",source:"@site/content/terminal/quickstart/installation.md",sourceDirName:"quickstart",slug:"/quickstart/installation",permalink:"/terminal/quickstart/installation",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/quickstart/installation.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Installation"},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/terminal/"},next:{title:"Requirements",permalink:"/terminal/quickstart/requirements"}},c={},u=[],h={toc:u};function k(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The OpenBB Terminal can be directly installed on your computer via our installation program. Within this section, you are guided through the installation process and how to launch the program. If you struggle with the installation process, please don\u2019t hesitate to reach us on ",(0,i.kt)("a",{parentName:"p",href:"https://openbb.co/discord"},"Discord")," or visit our ",(0,i.kt)("a",{parentName:"p",href:"https://openbb.co/contact"},"contact page"),"."),(0,i.kt)("p",null,"OpenBB Terminal is available in all major platforms. With MacOS/Windows you can easily install with the installer (instructions below). It is also available to install on Linux with Docker or from source."),(0,i.kt)("admonition",{title:"Installation Instructions",type:"info"},(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"windows",label:"Windows",mdxType:"TabItem"},"Install on Windows",(0,i.kt)("div",{class:"gdoc-page"}),(0,i.kt)("p",null,"Download the installer from the button below:"),(0,i.kt)(s,{type:"windows",href:"https://github.com/OpenBB-finance/OpenBBTerminal/releases/download/v2.1.0/Windows10.OpenBB.Terminal.v2.1.0.exe",label:"Windows Installer",mdxType:"InstallerButton"}),(0,i.kt)("p",null,"When the file is downloaded, use the following steps to run the OpenBB Terminal:"),(0,i.kt)("div",{class:"gdoc-columns"},(0,i.kt)("div",{class:"gdoc-columns__content gdoc-markdown--nested"},(0,i.kt)("p",null,(0,i.kt)("strong",null,"Step 1: Double-click the ",(0,i.kt)("code",null,".exe")," file that got downloaded to your ",(0,i.kt)("code",null,"Downloads")," folder")),(0,i.kt)("p",{align:"center"},(0,i.kt)("a",{target:"_blank",href:"https://openbb-web-assets.s3.amazonaws.com/docs/installation/install_step_1.png"},(0,i.kt)("img",{width:"500",alt:"windows_protected_your_pc",src:"https://openbb-web-assets.s3.amazonaws.com/docs/installation/install_step_1.png"})))),(0,i.kt)("div",{class:"gdoc-columns__content gdoc-markdown--nested"},(0,i.kt)("p",null,(0,i.kt)("strong",null,"Step 2: Follow the prompts clicking ",(0,i.kt)("code",null,"Next >")," where needed to complete the installation process"))),(0,i.kt)("div",{class:"gdoc-columns__content gdoc-markdown--nested"},(0,i.kt)("p",null,(0,i.kt)("strong",null,"Step 3: Double-click on the application that appeared on your Desktop, you are now able to run the OpenBB Terminal")),(0,i.kt)("p",{align:"center"},(0,i.kt)("a",{target:"_blank",href:"https://openbb-web-assets.s3.amazonaws.com/docs/installation/icon.png"},(0,i.kt)("img",{width:"100",alt:"run_the_terminal",src:"https://openbb-web-assets.s3.amazonaws.com/docs/installation/icon.png"}))),(0,i.kt)("p",null,"The first time this takes a bit longer to load, this can take up to a few minutes. If everything was successful you should see a screen like the one below : "),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{width:"500",alt:"run_the_terminal",src:"https://openbb-web-assets.s3.amazonaws.com/docs/installation/final_install.png"}))))),(0,i.kt)(l.Z,{value:"mac",label:"MacOS",mdxType:"TabItem"},"Install on macOS",(0,i.kt)("p",{parentName:"admonition"},"For Mac there are two installers available, one for Intel and one for Apple Silicon (M1). Please download the correct one for your machine."),(0,i.kt)("ul",null,(0,i.kt)("li",null,"If you are using Mac Intel: ",(0,i.kt)("br",null),(0,i.kt)(s,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/releases/download/v2.1.0/x86.64.MacOS.OpenBB.Terminal.v2.1.0.dmg",label:"Mac Intel Installer",mdxType:"InstallerButton"})),(0,i.kt)("li",null,"If you are using Mac Apple Silicon (M1): ",(0,i.kt)("br",null),(0,i.kt)(s,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/releases/download/v2.1.0/ARM64.MacOS.OpenBB.Terminal.v2.1.0.dmg",label:"Mac M1 Installer",mdxType:"InstallerButton"}))),(0,i.kt)("p",null,"When the DMG file is downloaded, use the following steps to run the OpenBB Terminal:"),(0,i.kt)("div",{class:"gdoc-columns"},(0,i.kt)("div",{class:"gdoc-columns__content gdoc-markdown--nested"},(0,i.kt)("p",null,(0,i.kt)("strong",null,"Step 1: Open the downloaded ",(0,i.kt)("code",null,"OpenBB Terminal.dmg")," and drag the ",(0,i.kt)("code",null,"OpenBB Terminal")," folder into your ",(0,i.kt)("code",null,"Applications"))),(0,i.kt)("p",null,"A link to the ",(0,i.kt)("code",null,"Applications")," folder is presented on the screen. Note that this should take some time as it is extracting the files from the .dmg file."),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{width:"70%",alt:"image",src:"https://user-images.githubusercontent.com/11668535/173027899-9b25ae4f-1eef-462c-9dc9-86086e9cf197.png"}))),(0,i.kt)("div",{class:"gdoc-columns__content gdoc-markdown--nested"},(0,i.kt)("p",null,(0,i.kt)("strong",null,"Step 2: Open the ",(0,i.kt)("code",null,"OpenBB Terminal")," app in the folder that you have just copied to your ",(0,i.kt)("code",null,"Applications"),".")),(0,i.kt)("p",null,"During first launch if you get a message saying that the application can\u2019t be launched, do the following: Right-Click the app and select ",(0,i.kt)("code",null,"Open"),". You will see a message saying that macOS was not able to check whether the application contains malicious software. Click ",(0,i.kt)("code",null,"Open")," to proceed."),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{width:"70%",alt:"image",src:"https://user-images.githubusercontent.com/11668535/173027798-b4d25a20-d932-4ed9-a8ce-f911c4ee4342.png"}))))),(0,i.kt)(l.Z,{value:"docker",label:"Docker",mdxType:"TabItem"},(0,i.kt)("p",null,"Install with Docker"),(0,i.kt)("p",{parentName:"admonition"},"Here we will detail how to run OpenBB Terminal Docker image."),(0,i.kt)("p",{parentName:"admonition"},"Please check the section matching to your OS."),(0,i.kt)("h2",{parentName:"admonition",id:"1-windows"},"1. Windows"),(0,i.kt)("h3",{parentName:"admonition",id:"11-install-docker-desktop"},"1.1. Install Docker Desktop"),(0,i.kt)("p",{parentName:"admonition"},"You can find ",(0,i.kt)("inlineCode",{parentName:"p"},"Docker Desktop")," for Windows here: ",(0,i.kt)("a",{parentName:"p",href:"https://www.docker.com/products/docker-desktop"},"Download Docker Desktop")),(0,i.kt)("h3",{parentName:"admonition",id:"12-start-docker"},"1.2. Start Docker"),(0,i.kt)("p",{parentName:"admonition"},"Execute the following command:"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker info\n")),(0,i.kt)("p",{parentName:"admonition"},"If you have something like this, it means you haven't started Docker:"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker info\nServer:\nERROR: Cannot connect to the Docker daemon at unix:///var/run/docker.sock.\nIs the docker daemon running?\n")),(0,i.kt)("p",{parentName:"admonition"},"Start Docker, this is how the right output looks like:"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker info\nClient:\n Context:    default\n Debug Mode: false\n\nServer:\n Containers: 14\n  Running: 2\n  Paused: 1\n  Stopped: 10\n")),(0,i.kt)("h3",{parentName:"admonition",id:"13-install-vcxsrv"},"1.3. Install VcXsrv"),(0,i.kt)("p",{parentName:"admonition"},"To display charts with your container, you need : VcXsrv."),(0,i.kt)("p",{parentName:"admonition"},"You can download VcXsrv here : ",(0,i.kt)("a",{parentName:"p",href:"https://sourceforge.net/projects/vcxsrv"},"Download VcXsrv")),(0,i.kt)("p",{parentName:"admonition"},"When running VcXsrv program check the option: ",(0,i.kt)("inlineCode",{parentName:"p"},"Disable access control")),(0,i.kt)("h3",{parentName:"admonition",id:"14-pull-and-run-the-container"},"1.4. Pull and run the container"),(0,i.kt)("p",{parentName:"admonition"},"Execute this commands:"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o docker-compose.yaml https://raw.githubusercontent.com/OpenBB-finance/OpenBBTerminal/main/build/docker/docker-compose.yaml\n\ndocker compose run openbb\n")),(0,i.kt)("p",{parentName:"admonition"},"This will download and run the file: ",(0,i.kt)("inlineCode",{parentName:"p"},"docker-compose.yaml")),(0,i.kt)("p",{parentName:"admonition"},"This file contents the settings to pull and run OpenBB Terminal Docker image."),(0,i.kt)("h2",{parentName:"admonition",id:"2-macos"},"2. macOS"),(0,i.kt)("h3",{parentName:"admonition",id:"21-install-and-run-docker-desktop"},"2.1. Install and run Docker Desktop"),(0,i.kt)("p",{parentName:"admonition"},"Install and run Docker Desktop as describe above in this document."),(0,i.kt)("h3",{parentName:"admonition",id:"22-install-xquartz"},"2.2. Install XQuartz"),(0,i.kt)("p",{parentName:"admonition"},"You can download XQuartz here: ",(0,i.kt)("a",{parentName:"p",href:"https://www.xquartz.org"},"Download XQuartz")),(0,i.kt)("p",{parentName:"admonition"},"Open X Quartz."),(0,i.kt)("p",{parentName:"admonition"},"Then on ",(0,i.kt)("inlineCode",{parentName:"p"},"Preferences > Security"),"."),(0,i.kt)("p",{parentName:"admonition"},"Make sure both of these options are enabled:"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Authenticate connections")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Allow connections from network clients"))),(0,i.kt)("p",{parentName:"admonition"},"It should look like this:\n",(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/18151143/132548605-235d774b-9aa6-4a45-afcf-58fb775d376a.png",alt:"Screen Shot 2021-09-08 at 12 21 48 PM"})),(0,i.kt)("h3",{parentName:"admonition",id:"23-get-docker-ip"},"2.3. Get Docker IP"),(0,i.kt)("p",{parentName:"admonition"},"To get Docker IP you can use this command:"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'IP=$(ifconfig | grep inet | grep -v "127.0.0.1" | awk \'$1=="inet" {print $2}\')\n')),(0,i.kt)("h3",{parentName:"admonition",id:"24-pull-and-run-the-container"},"2.4. Pull and run the container"),(0,i.kt)("p",{parentName:"admonition"},"Execute this commands:"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o docker-compose.yaml https://raw.githubusercontent.com/OpenBB-finance/OpenBBTerminal/main/build/docker/docker-compose.yaml\n\nxhost +$IP\ndocker compose run -e DISPLAY=$IP:0 openbb\n")),(0,i.kt)("p",{parentName:"admonition"},"This will download and run the file: ",(0,i.kt)("inlineCode",{parentName:"p"},"docker-compose.yaml")),(0,i.kt)("p",{parentName:"admonition"},"This file contents the settings to pull and run OpenBB Terminal Docker image."),(0,i.kt)("p",{parentName:"admonition"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"xhost +$IP")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"DISPLAY=$IP:0")," parts are there to allow charts display."),(0,i.kt)("h2",{parentName:"admonition",id:"3-linux"},"3. Linux"),(0,i.kt)("h3",{parentName:"admonition",id:"31-install-and-run-docker-desktop"},"3.1. Install and run Docker Desktop"),(0,i.kt)("p",{parentName:"admonition"},"Install and run Docker Desktop as describe above in this document."),(0,i.kt)("h3",{parentName:"admonition",id:"32-pull-and-run-the-container"},"3.2. Pull and run the container"),(0,i.kt)("p",{parentName:"admonition"},"Execute this commands:"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o docker-compose.yaml https://raw.githubusercontent.com/OpenBB-finance/OpenBBTerminal/main/build/docker/docker-compose.yaml\n\nxhost +local:\ndocker compose run openbb\n")),(0,i.kt)("p",{parentName:"admonition"},"Note: if you're using remote docker host, you can connect with ",(0,i.kt)("inlineCode",{parentName:"p"},"ssh -X <FQDN/IP>"),"."),(0,i.kt)("h2",{parentName:"admonition",id:"4-advanced-without-docker-compose"},"4. Advanced: without Docker Compose"),(0,i.kt)("p",{parentName:"admonition"},"To run directly the docker image you can use the following command:"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --rm -it \\\n  -v ~/.openbb_terminal/:/home/python/.openbb_terminal \\\n  -v ~/OpenBBUserData:/home/python/OpenBBUserData \\\n  ghcr.io/openbb-finance/openbbterminal/openbb:latest\n"))),(0,i.kt)(l.Z,{value:"python",label:"Python",mdxType:"TabItem"},"This installation type supports both Windows and Unix systems (Linux + MacOS).",(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},"NOTE for Windows users:")," For Windows users who prefer to use an environment similar to what Linux and macOS users use, we recommend Windows Subsystem for Linux (WSL). WSL emulates a Linux machine inside your Windows system. If this is the case - jump to the ",(0,i.kt)("a",{href:"#installing-wsl-only-for-windows-users"},"Installing WSL (Only for Windows users)")," section before proceeding."),(0,i.kt)("h3",{parentName:"admonition",id:"installing-the-terminal"},"Installing the terminal"),(0,i.kt)("p",{parentName:"admonition"},"These steps are common in all operating systems (Windows with or without WSL, MacOS or Linux)."),(0,i.kt)("p",{parentName:"admonition"},"This project supports Python 3.8 and 3.9. By default, the newly created virtual environment will use Python 3.9.13"),(0,i.kt)("p",{parentName:"admonition"},"Our current recommendation is to use this project with Anaconda's Python distribution - either full ",(0,i.kt)("a",{parentName:"p",href:"https://www.anaconda.com/products/distribution"},(0,i.kt)("strong",{parentName:"a"},"Anaconda3 Latest"))," or ",(0,i.kt)("a",{parentName:"p",href:"https://docs.conda.io/en/latest/miniconda.html"},(0,i.kt)("strong",{parentName:"a"},"Miniconda3 Latest")),' (recommended). Several features in this project utilize Machine Learning. Machine Learning Python dependencies are optional. For MacOS systems, the "Miniconda3 MacOSX 64-bit" version that works on both Intel and M1 macs is recommended.'),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},"NOTE:")," We recommend using ",(0,i.kt)("inlineCode",{parentName:"p"},"conda")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"poetry")," because it just works. You can use other python\ndistributions and use raw ",(0,i.kt)("inlineCode",{parentName:"p"},"pip")," instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"poetry")," but you will very likely bump into installation\nissues."),(0,i.kt)("h4",{parentName:"admonition",id:"1-install-miniconda"},"1. ",(0,i.kt)("a",{parentName:"h4",href:"https://docs.conda.io/en/latest/miniconda.html"},"Install Miniconda")),(0,i.kt)("p",{parentName:"admonition"},"Miniconda is a python environment and package manager. It is required if you want to\nhave the dependencies working straight away."),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Go ",(0,i.kt)("a",{parentName:"p",href:"https://docs.conda.io/en/latest/miniconda.html#latest-miniconda-installer-links"},"here")," to find the download for your operating system or use the links below:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If you are using macOS ",(0,i.kt)("a",{parentName:"p",href:"https://repo.anaconda.com/miniconda/Miniconda3-latest-MacOSX-x86_64.sh"},"Miniconda for MacOS"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If you are using WSL or Linux ",(0,i.kt)("a",{parentName:"p",href:"https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh"},"Miniconda for Linux"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If you are using a Raspberry PI ",(0,i.kt)("a",{parentName:"p",href:"https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-aarch64.sh"},"Miniconda for Raspberry PI"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If you are using Windows ",(0,i.kt)("a",{parentName:"p",href:"https://repo.anaconda.com/miniconda/Miniconda3-latest-Windows-x86_64.exe"},"Miniconda for Windows"),"."),(0,i.kt)("p",{parentName:"li"},"   ",(0,i.kt)("strong",{parentName:"p"},"ONLY REQUIRED ON WINDOWS IF NOT USING WSL"),", Install/update Microsoft C++ Build Tools from here: ",(0,i.kt)("a",{parentName:"p",href:"https://visualstudio.microsoft.com/visual-cpp-build-tools/"},"https://visualstudio.microsoft.com/visual-cpp-build-tools/")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"NOTE for macOS users:")," The link above gets you the Intel version of miniconda meaning if you're on an Apple Silicon powered machine you will be using the terminal through Apple's rosetta2 layer. We recommend sticking to this distribution for better compatibility until the dependency developers fully catch up with Apple's transition to Apple Silicon.")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"After following the steps, confirm that you have it by opening a terminal and running: ",(0,i.kt)("inlineCode",{parentName:"p"},"conda -V"),". The output should be something along the lines of: ",(0,i.kt)("inlineCode",{parentName:"p"},"conda 22.9.0")))),(0,i.kt)("h4",{parentName:"admonition",id:"2-install-cmake"},"2. Install CMake"),(0,i.kt)("p",{parentName:"admonition"},"CMake is required by several python modules."),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},"On Linux or Raspberry Pi:")),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt update\nsudo apt install -y gcc cmake\n")),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},"On macOS:")),(0,i.kt)("p",{parentName:"admonition"},"Check if you have homebrew installed by running ",(0,i.kt)("inlineCode",{parentName:"p"},"brew --version")),(0,i.kt)("p",{parentName:"admonition"},"If you don't have homebrew installed run:"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"\nbrew install cmake\n')),(0,i.kt)("p",{parentName:"admonition"},"If you have homebrew installed run:"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"brew install cmake\n")),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},"On Windows:")),(0,i.kt)("p",{parentName:"admonition"},"If you have followed the instructions in step 1 of this guide CMake was installed as a part of you Microsoft C++ Build Tools"),(0,i.kt)("h4",{parentName:"admonition",id:"3-install-git"},"3. Install git"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"conda install -c anaconda git\n")),(0,i.kt)("h4",{parentName:"admonition",id:"4-clone-the-project"},"4. Clone the Project"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"Via HTTPS: ",(0,i.kt)("inlineCode",{parentName:"li"},"git clone https://github.com/OpenBB-finance/OpenBBTerminal.git")),(0,i.kt)("li",{parentName:"ul"},"via SSH: ",(0,i.kt)("inlineCode",{parentName:"li"},"git clone git@github.com:OpenBB-finance/OpenBBTerminal.git"))),(0,i.kt)("h4",{parentName:"admonition",id:"5-navigate-into-the-projects-folder"},"5. Navigate into the project's folder"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd OpenBBTerminal/\n")),(0,i.kt)("h4",{parentName:"admonition",id:"6-create-environment"},"6. Create Environment"),(0,i.kt)("p",{parentName:"admonition"},"You can name the environment whatever you want. Although you could use names such as: ",(0,i.kt)("inlineCode",{parentName:"p"},"welikethestock"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"thisistheway")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"diamondhands"),", we recommend something simple and intuitive like ",(0,i.kt)("inlineCode",{parentName:"p"},"obb"),". This is because this name will be used from now onwards."),(0,i.kt)("p",{parentName:"admonition"},"Please note, the following setup has been confirmed to work for all OS (including M1) with the standard miniconda distribution. If you are using a different distribution, you will need to install it manually before proceeding."),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"conda env create -n obb --file build/conda/conda-3-9-env.yaml\n")),(0,i.kt)("p",{parentName:"admonition"},"Or, to include machine learning type:"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"conda env create -n obb --file build/conda/conda-3-9-env-full.yaml\n")),(0,i.kt)("p",{parentName:"admonition"},"Note: Using python 3.10+ can lead to undesirable functionality for certain commands."),(0,i.kt)("h4",{parentName:"admonition",id:"7-activate-the-virtual-environment"},"7. Activate the virtual environment"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"conda activate obb\n")),(0,i.kt)("p",{parentName:"admonition"},"Note: At the end, you can deactivate it with: ",(0,i.kt)("inlineCode",{parentName:"p"},"conda deactivate"),"."),(0,i.kt)("h4",{parentName:"admonition",id:"8-install-dependencies-with-poetry"},"8. Install dependencies with poetry"),(0,i.kt)("p",{parentName:"admonition"},"Install the main dependencies with"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"poetry install\n")),(0,i.kt)("p",{parentName:"admonition"},"You are good to go with the core of the OpenBB Terminal. To install additional toolkits proceed with the following commands:"),(0,i.kt)("p",{parentName:"admonition"},"To install the Portfolio Optimization Toolkit run:"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"poetry install -E optimization\n")),(0,i.kt)("p",{parentName:"admonition"},"To install the Machine Learning Toolkit run:"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"poetry install -E prediction\n")),(0,i.kt)("p",{parentName:"admonition"},"To install both the Portfolio Optimization and the Machine Learning Toolkit run:"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"poetry install -E all\n")),(0,i.kt)("h4",{parentName:"admonition",id:"9-youre-ready-to-use-the-terminal"},"9. You're ready to use the terminal!"),(0,i.kt)("p",{parentName:"admonition"},"Start the terminal by running:"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"openbb\n")),(0,i.kt)("p",{parentName:"admonition"},"Or the old-fashioned way:"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"python terminal.py\n")),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},"NOTE:")," When you close the terminal and re-open it, the only command you need to re-call is ",(0,i.kt)("inlineCode",{parentName:"p"},"conda activate obb")," before you call ",(0,i.kt)("inlineCode",{parentName:"p"},"openbb")," again."),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},"TROUBLESHOOT:")," If you are having troubles with installation, check out the ",(0,i.kt)("a",{parentName:"p",href:"/terminal/quickstart/faq"},"FAQ page"),". You can also reach for help on our ",(0,i.kt)("a",{parentName:"p",href:"https://discord.gg/Up2QGbMKHY"},"discord"),"."),(0,i.kt)("h2",{parentName:"admonition",id:"advanced-user-install---custom-installation-procedures"},"Advanced User Install - Custom installation procedures"),(0,i.kt)("p",{parentName:"admonition"},"By default we advise using ",(0,i.kt)("inlineCode",{parentName:"p"},"conda")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"poetry")," for environment setup and dependency management. Conda ships binaries for packages like ",(0,i.kt)("inlineCode",{parentName:"p"},"numpy")," so these dependencies are not built from source locally by ",(0,i.kt)("inlineCode",{parentName:"p"},"pip"),". Poetry solves the dependency tree in a way that the dependencies of dependencies of dependencies use versions that are compatible with each other."),(0,i.kt)("p",{parentName:"admonition"},"If you are using a conda environment the ",(0,i.kt)("inlineCode",{parentName:"p"},"build/conda")," folder contains multiple ",(0,i.kt)("inlineCode",{parentName:"p"},".yaml")," configuration files that you can choose from."),(0,i.kt)("p",{parentName:"admonition"},"If you are using other python distributions we highly recommend that you use some virtual environment like ",(0,i.kt)("inlineCode",{parentName:"p"},"virtualenv")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"pyenv")," for installing the terminal dependency libraries."),(0,i.kt)("p",{parentName:"admonition"},"Requirements files that you can find in the project root:"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"requirements.txt")," list all the dependencies without Machine Learning libraries"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"requirements-full.txt")," list all the dependencies with Machine Learning libraries")),(0,i.kt)("p",{parentName:"admonition"},"You can install them with with pip"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"pip install -r requirements.txt\n")),(0,i.kt)("p",{parentName:"admonition"},"The dependency tree is solved by poetry."),(0,i.kt)("p",{parentName:"admonition"},"Note: The libraries specified in the requirements files have been tested and work for the purpose of this project, however, these may be older versions. Hence, it is recommended for the user to set up a virtual python environment prior to installing these. This allows to keep dependencies required by different projects in separate places."),(0,i.kt)("h3",{parentName:"admonition",id:"installing-wsl-only-for-windows-users"},"Installing WSL (Only for Windows users)"),(0,i.kt)("p",{parentName:"admonition"},"If you are using Windows you first you need to install WSL. The process is simple and a tutorial can be found ",(0,i.kt)("a",{parentName:"p",href:"https://www.sitepoint.com/wsl2/"},"here"),". Once you reach the section ",(0,i.kt)("strong",{parentName:"p"},"Update Linux")," on that tutorial, you should have a linux machine installed and can proceed to the next steps."),(0,i.kt)("p",{parentName:"admonition"},"Since WSL installation is headless by default (i.e., you have only access to a terminal running a linux distribution) you need some extra steps to be able to visualize the charts produced by the terminal (more detailed tutorial ",(0,i.kt)("a",{parentName:"p",href:"https://medium.com/@shaoyenyu/make-matplotlib-works-correctly-with-x-server-in-wsl2-9d9928b4e36a"},"here"),"):"),(0,i.kt)("ol",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Dynamically export the DISPLAY environment variable in WSL2:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# add to the end of ~/.bashrc file\nexport DISPLAY=$(cat /etc/resolv.conf | grep nameserver | awk '{print $2}'):0\n# source the file\nsource ~/.bashrc\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Download and install ",(0,i.kt)("a",{parentName:"p",href:"https://sourceforge.net/projects/vcxsrv/"},"VcXsrv"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'When running the program is important to check "Disable access control"'))),(0,i.kt)("p",{parentName:"admonition"},"After this, ",(0,i.kt)("inlineCode",{parentName:"p"},"VcXsrv")," should be running successfully and we can proceed to terminal installation.")))))}k.isMDXComponent=!0}}]);