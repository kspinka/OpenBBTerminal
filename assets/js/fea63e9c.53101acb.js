"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[99479],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>k});var n=a(67294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var u=n.createContext({}),p=function(t){var e=n.useContext(u),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},d=function(t){var e=p(t.components);return n.createElement(u.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,u=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),s=p(a),k=l,N=s["".concat(u,".").concat(k)]||s[k]||m[k]||r;return a?n.createElement(N,o(o({ref:e},d),{},{components:a})):n.createElement(N,o({ref:e},d))}));function k(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,o=new Array(r);o[0]=s;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i.mdxType="string"==typeof t?t:l,o[1]=i;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},63785:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>u,default:()=>k,frontMatter:()=>i,metadata:()=>p,toc:()=>m});var n=a(87462),l=(a(67294),a(3905)),r=a(65099),o=a(85162);const i={title:"tft",description:"OpenBB SDK Function"},u="tft",p={unversionedId:"reference/forecast/tft",id:"reference/forecast/tft",title:"tft",description:"OpenBB SDK Function",source:"@site/content/sdk/reference/forecast/tft.md",sourceDirName:"reference/forecast",slug:"/reference/forecast/tft",permalink:"/sdk/reference/forecast/tft",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/reference/forecast/tft.md",tags:[],version:"current",frontMatter:{title:"tft",description:"OpenBB SDK Function"},sidebar:"tutorialSidebar",previous:{title:"tcn",permalink:"/sdk/reference/forecast/tcn"},next:{title:"theta",permalink:"/sdk/reference/forecast/theta"}},d={},m=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Parameters",id:"parameters-1",level:2},{value:"Returns",id:"returns-1",level:2}],s={toc:m};function k(t){let{components:e,...a}=t;return(0,l.kt)("wrapper",(0,n.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"tft"},"tft"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"model",label:"Model",default:!0,mdxType:"TabItem"},(0,l.kt)("p",null,"Performs Temporal Fusion Transformer forecasting"),(0,l.kt)("p",null,"Source Code: [",(0,l.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/forecast/tft_model.py#L26"},"link"),"]"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'openbb.forecast.tft(data: Union[pd.Series, pd.DataFrame], target_column: str = "close", n_predict: int = 5, past_covariates: str = None, train_split: float = 0.85, forecast_horizon: int = 5, input_chunk_length: int = 14, output_chunk_length: int = 5, hidden_size: int = 16, lstm_layers: int = 1, num_attention_heads: int = 4, full_attention: bool = False, dropout: float = 0.1, hidden_continuous_size: int = 8, n_epochs: int = 200, batch_size: int = 32, model_save_name: str = "tft_model", force_reset: bool = True, save_checkpoints: bool = True)\n')),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"data (Union","[pd.Series, pd.DataFrame]",")"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Input Data"),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"target_column"),(0,l.kt)("td",{parentName:"tr",align:null},"Optional","[str]"),(0,l.kt)("td",{parentName:"tr",align:null},'Target column to forecast. Defaults to "close".'),(0,l.kt)("td",{parentName:"tr",align:null},"close"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"n_predict"),(0,l.kt)("td",{parentName:"tr",align:null},"(int, optional)"),(0,l.kt)("td",{parentName:"tr",align:null},"Days to predict. Defaults to 5."),(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"train_split"),(0,l.kt)("td",{parentName:"tr",align:null},"(float, optional)"),(0,l.kt)("td",{parentName:"tr",align:null},"Train/val split. Defaults to 0.85."),(0,l.kt)("td",{parentName:"tr",align:null},"0.85"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"past_covariates"),(0,l.kt)("td",{parentName:"tr",align:null},"(str, optional)"),(0,l.kt)("td",{parentName:"tr",align:null},"Multiple secondary columns to factor in when forecasting. Defaults to None."),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"forecast_horizon"),(0,l.kt)("td",{parentName:"tr",align:null},"(int, optional)"),(0,l.kt)("td",{parentName:"tr",align:null},"Forecast horizon when performing historical forecasting. Defaults to 5."),(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"input_chunk_length"),(0,l.kt)("td",{parentName:"tr",align:null},"(int, optional)"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of past time steps that are fed to the forecasting module at prediction time.",(0,l.kt)("br",null),"Defaults to 14."),(0,l.kt)("td",{parentName:"tr",align:null},"14"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"output_chunk_length"),(0,l.kt)("td",{parentName:"tr",align:null},"(int, optional)"),(0,l.kt)("td",{parentName:"tr",align:null},"The length of the forecast of the model. Defaults to 5."),(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"hidden_size"),(0,l.kt)("td",{parentName:"tr",align:null},"(int, optional)"),(0,l.kt)("td",{parentName:"tr",align:null},"Hidden state size of the TFT. Defaults to 16."),(0,l.kt)("td",{parentName:"tr",align:null},"16"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"lstm_layers"),(0,l.kt)("td",{parentName:"tr",align:null},"(int, optional)"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of layers for the Long Short Term Memory Encoder and Decoder. Defaults to 16."),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"num_attention_headers"),(0,l.kt)("td",{parentName:"tr",align:null},"(int, optional)"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of attention heads. Defaults to 4."),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"full_attention"),(0,l.kt)("td",{parentName:"tr",align:null},"(bool, optional)"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to apply a multi-head attention query. Defaults to False>"),(0,l.kt)("td",{parentName:"tr",align:null},"False"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"dropout"),(0,l.kt)("td",{parentName:"tr",align:null},"(float, optional)"),(0,l.kt)("td",{parentName:"tr",align:null},"Fraction of neurons affected by dropout. Defaults to 0.1."),(0,l.kt)("td",{parentName:"tr",align:null},"0.1"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"hidden_continuous_size"),(0,l.kt)("td",{parentName:"tr",align:null},"(int, optional)"),(0,l.kt)("td",{parentName:"tr",align:null},"Default hidden size for processing continuous variables. Defaults to 8."),(0,l.kt)("td",{parentName:"tr",align:null},"8"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"n_epochs"),(0,l.kt)("td",{parentName:"tr",align:null},"(int, optional)"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of epochs to run during training. Defaults to 200."),(0,l.kt)("td",{parentName:"tr",align:null},"200"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"batch_size"),(0,l.kt)("td",{parentName:"tr",align:null},"(int, optional)"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of samples to pass through network during a single epoch. Defaults to 32."),(0,l.kt)("td",{parentName:"tr",align:null},"32"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"model_save_name"),(0,l.kt)("td",{parentName:"tr",align:null},"(str, optional)"),(0,l.kt)("td",{parentName:"tr",align:null},"The name for the model. Defaults to tft_model"),(0,l.kt)("td",{parentName:"tr",align:null},"tft_model"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"force_reset"),(0,l.kt)("td",{parentName:"tr",align:null},"(bool, optional)"),(0,l.kt)("td",{parentName:"tr",align:null},"If set to True, any previously-existing model with the same name will be reset",(0,l.kt)("br",null),"(all checkpoints will be discarded). Defaults to True."),(0,l.kt)("td",{parentName:"tr",align:null},"True"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"save_checkpoints"),(0,l.kt)("td",{parentName:"tr",align:null},"(bool, optional)"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether or not to automatically save the untrained model and checkpoints from training.",(0,l.kt)("br",null),"Defaults to True."),(0,l.kt)("td",{parentName:"tr",align:null},"True"),(0,l.kt)("td",{parentName:"tr",align:null},"True")))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"returns"},"Returns"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Adjusted Data series,",(0,l.kt)("br",null),"List of historical fcast values,",(0,l.kt)("br",null),"List of predicted fcast values,",(0,l.kt)("br",null),"Optional","[float]"," - precision,",(0,l.kt)("br",null),"Fit Prob. TFT model object.")))),(0,l.kt)("hr",null)),(0,l.kt)(o.Z,{value:"view",label:"Chart",mdxType:"TabItem"},(0,l.kt)("p",null,"Display Temporal Fusion Transformer forecast"),(0,l.kt)("p",null,"Source Code: [",(0,l.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/forecast/tft_view.py#L20"},"link"),"]"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'openbb.forecast.tft_chart(data: Union[pd.Series, pd.DataFrame], target_column: str = "close", dataset_name: str = "", n_predict: int = 5, past_covariates: str = None, train_split: float = 0.85, forecast_horizon: int = 5, input_chunk_length: int = 14, output_chunk_length: int = 5, hidden_size: int = 16, lstm_layers: int = 1, num_attention_heads: int = 4, full_attention: bool = False, dropout: float = 0.1, hidden_continuous_size: int = 8, n_epochs: int = 200, batch_size: int = 32, model_save_name: str = "tft_model", force_reset: bool = True, save_checkpoints: bool = True, export: str = "", residuals: bool = False, forecast_only: bool = False, start_date: Optional[datetime.datetime] = None, end_date: Optional[datetime.datetime] = None, naive: bool = False, export_pred_raw: bool = False, external_axes: Optional[List[axes]] = None)\n')),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"parameters-1"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"data (Union","[pd.Series, pd.DataFrame]",")"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Input Data"),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"target_column"),(0,l.kt)("td",{parentName:"tr",align:null},"Optional","[str]",":"),(0,l.kt)("td",{parentName:"tr",align:null},'Target column to forecast. Defaults to "close".'),(0,l.kt)("td",{parentName:"tr",align:null},"close"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"dataset_name str"),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"The name of the ticker to be predicted"),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"n_predict (int, optional)"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Days to predict. Defaults to 5."),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"train_split (float, optional)"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Train/val split. Defaults to 0.85."),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"past_covariates (str, optional)"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Multiple secondary columns to factor in when forecasting. Defaults to None."),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"forecast_horizon (int, optional)"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Forecast horizon when performing historical forecasting. Defaults to 5."),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"input_chunk_length (int, optional)"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Number of past time steps that are fed to the forecasting module at prediction time.",(0,l.kt)("br",null),"Defaults to 14."),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"output_chunk_length (int, optional)"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"The length of the forecast of the model. Defaults to 5."),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"hidden_size (int, optional)"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Hidden state size of the TFT. Defaults to 16."),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"lstm_layers (int, optional)"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Number of layers for the Long Short Term Memory Encoder and Decoder. Defaults to 16."),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"num_attention_headers (int, optional)"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Number of attention heads. Defaults to 4."),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"full_attention (bool, optional)"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to apply a multi-head attention query. Defaults to False>"),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"dropout (float, optional)"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Fraction of neurons affected by dropout. Defaults to 0.1."),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"hidden_continuous_size (int, optional)"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Default hidden size for processing continuous variables. Defaults to 8."),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"n_epochs (int, optional)"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Number of epochs to run during training. Defaults to 200."),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"batch_size (int, optional)"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Number of samples to pass through network during a single epoch. Defaults to 32."),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"model_save_name (str, optional)"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"The name for the model. Defaults to tft_model"),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"force_reset (bool, optional)"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"If set to True, any previously-existing model with the same name will be reset",(0,l.kt)("br",null),"(all checkpoints will be discarded). Defaults to True."),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"save_checkpoints (bool, optional)"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Whether or not to automatically save the untrained model and checkpoints from training.",(0,l.kt)("br",null),"Defaults to True."),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"residuals"),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to show residuals for the model. Defaults to False."),(0,l.kt)("td",{parentName:"tr",align:null},"False"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"forecast_only"),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to only show dates in the forecasting range. Defaults to False."),(0,l.kt)("td",{parentName:"tr",align:null},"False"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"start_date"),(0,l.kt)("td",{parentName:"tr",align:null},"Optional","[datetime]"),(0,l.kt)("td",{parentName:"tr",align:null},"The starting date to perform analysis, data before this is trimmed. Defaults to None."),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"end_date"),(0,l.kt)("td",{parentName:"tr",align:null},"Optional","[datetime]"),(0,l.kt)("td",{parentName:"tr",align:null},"The ending date to perform analysis, data after this is trimmed. Defaults to None."),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"naive"),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to show the naive baseline. This just assumes the closing price will be the same",(0,l.kt)("br",null),"as the previous day's closing price. Defaults to False."),(0,l.kt)("td",{parentName:"tr",align:null},"False"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"external_axes"),(0,l.kt)("td",{parentName:"tr",align:null},"Optional[List","[plt.axes]","]"),(0,l.kt)("td",{parentName:"tr",align:null},"External axes to plot on"),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"True")))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"returns-1"},"Returns"),(0,l.kt)("p",null,"This function does not return anything"),(0,l.kt)("hr",null))))}k.isMDXComponent=!0},85162:(t,e,a)=>{a.d(e,{Z:()=>o});var n=a(67294),l=a(86010);const r="tabItem_Ymn6";function o(t){let{children:e,hidden:a,className:o}=t;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,o),hidden:a},e)}},65099:(t,e,a)=>{a.d(e,{Z:()=>k});var n=a(87462),l=a(67294),r=a(86010),o=a(72389),i=a(67392),u=a(7094),p=a(12466);const d="tabItem_hGfb";var m=a(16550);function s(t){var e;const{lazy:a,block:o,defaultValue:s,values:k,groupId:N,className:g}=t,c=l.Children.map(t.children,(t=>{if((0,l.isValidElement)(t)&&"value"in t.props)return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=k??c.map((t=>{let{props:{value:e,label:a,attributes:n}}=t;return{value:e,label:a,attributes:n}})),h=(0,i.l)(f,((t,e)=>t.value===e.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===s?s:s??(null==(e=c.find((t=>t.props.default)))?void 0:e.props.value)??c[0].props.value;if(null!==b&&!f.some((t=>t.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${f.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:T}=(0,u.U)(),[_,v]=(0,l.useState)(b),D=[],{blockElementScrollPositionUntilNextRender:w}=(0,p.o5)();if(null!=N){const t=y[N];null!=t&&t!==_&&f.some((e=>e.value===t))&&v(t)}const O=t=>{const e=t.currentTarget,a=D.indexOf(e),n=f[a].value;n!==_&&(w(e),v(n),null!=N&&T(N,String(n)))},x=t=>{var e;let a=null;switch(t.key){case"Enter":O(t);break;case"ArrowRight":{const e=D.indexOf(t.currentTarget)+1;a=D[e]??D[0];break}case"ArrowLeft":{const e=D.indexOf(t.currentTarget)-1;a=D[e]??D[D.length-1];break}}null==(e=a)||e.focus()},{pathname:F}=(0,m.TH)();return l.createElement("div",null,l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("_group-tab list-none lg:-ml-7 my-6")},f.map((t=>{let{value:e,label:a,attributes:o}=t;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:_===e?0:-1,"aria-selected":_===e,key:e,ref:t=>D.push(t),onKeyDown:x,onClick:O},o,{className:(0,r.Z)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase text-sm border-b",d,null==o?void 0:o.className,{"border-b-2 pointer-events-none":_===e,"cursor-pointer":_!==e,"border-b-2 text-[#669dcb] border-[#669dcb]":_===e&&F.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":_===e&&F.startsWith("/sdk"),"border-grey-600 text-grey-600 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":_!==e&&F.startsWith("/sdk"),"border-grey-600 text-grey-600 hover:text-[#abd2f1] hover:border-[#abd2f1]":_!==e&&F.startsWith("/terminal")})}),a??e)})),l.createElement("li",{className:"w-full border-b border-grey-600 pointer-events-none py-1 mb-[9.5px]"})),a?(0,l.cloneElement)(c.filter((t=>t.props.value===_))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},c.map(((t,e)=>(0,l.cloneElement)(t,{key:e,hidden:t.props.value!==_})))))}function k(t){const e=(0,o.Z)();return l.createElement(s,(0,n.Z)({key:String(e)},t))}}}]);