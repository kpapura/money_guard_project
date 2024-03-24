import{a as xe,c as x,b as me,i as H,u as N,R as e,N as ee,d as de,e as I,r as i,f as Ye,L as Ve,g as $,h as F,O as pe,_ as Ue,P as Ge,j as Qe,k as Se,o as Ie,l as te,m as T,B as W,n as Xe,p as B,S as Je,D as Ke,q as Te,s as Le,t as Ze,v as et,w as D,x as tt,y as he,F as nt,z as at,A as st,C as rt,E as ct,G as ot,H as lt,I as De,J as it,K as mt,M as dt,Q as ut,T as _t}from"./assets/vendor-0e4925e7.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const c of r)if(c.type==="childList")for(const m of c.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&s(m)}).observe(document,{childList:!0,subtree:!0});function a(r){const c={};return r.integrity&&(c.integrity=r.integrity),r.referrerPolicy&&(c.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?c.credentials="include":r.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(r){if(r.ep)return;r.ep=!0;const c=a(r);fetch(r.href,c)}})();const k=xe.create({baseURL:"https://wallet.b.goit.study/api/"}),ue=n=>{k.defaults.headers.common.Authorization=`Bearer ${n}`},gt=()=>{k.defaults.headers.common.Authorization=""},Y=x("register",async(n,t)=>{try{const{data:a}=await k.post("auth/sign-up",n);return ue(a.token),a}catch(a){return t.rejectWithValue(a.response.data.message)}}),V=x("login",async(n,t)=>{try{const{data:a}=await k.post("auth/sign-in",n);return ue(a.token),a}catch(a){return console.log(a),t.rejectWithValue(a.response.data.message)}}),Re=x("logout",async(n,t)=>{try{const{data:a}=await k.delete("auth/sign-out");return gt(),a}catch(a){return t.rejectWithValue(a.message)}}),U=x("refresh",async(n,t)=>{const a=t.getState().auth.token;if(!a)return t.rejectWithValue("Token is not exist!");try{ue(a);const{data:s}=await k.get("users/current");return console.log(s),s}catch(s){return t.rejectWithValue(s.message)}}),re={user:{username:"",email:""},token:null,loading:!1,error:!1,isLoggedIn:!1,isRefresh:!1,balance:0},_e=me({name:"auth",initialState:re,selectors:{selectUser:n=>n.user,selectIsLoggedIn:n=>n.isLoggedIn,selectToken:n=>n.isLoggedIn,selectIsRefresh:n=>n.isRefresh,selectBalance:n=>n.balance},reducers:{logout:n=>re},extraReducers:n=>{n.addCase(Re.fulfilled,t=>re).addCase(U.fulfilled,(t,{payload:a})=>{t.user.username=a.username,t.user.email=a.email,t.balance=a.balance,t.isLoggedIn=!0,t.loading=!1,t.isRefresh=!1,t.loading=!1}).addMatcher(H(Y.fulfilled,V.fulfilled),(t,{payload:a})=>{t.user.username=a.user.username,t.user.email=a.user.email,t.user.password=a.user.password,t.token=a.token,t.loading=!1,t.isLoggedIn=!0,t.loading=!1,t.isRefresh=!1}).addMatcher(H(Y.pending,V.pending,U.pending),t=>{t.loading=!0,t.error=null,t.isRefresh=!0}).addMatcher(H(Y.rejected,V.rejected,U.rejected),(t,{payload:a})=>{t.error=a,t.loading=!1,t.isRefresh=!1})}}),Et=_e.reducer,{selectIsLoggedIn:ne,selectUser:pt,selectToken:bs,selectIsRefresh:ht,selectBalance:fs,selectIsLoading:vs}=_e.selectors,{logout:bt}=_e.actions,G=x("fetchTransactionsData",async(n,t)=>{try{const{data:a}=await k.get("transactions");return a}catch(a){return t.rejectWithValue(a.message)}}),Q=x("deleteTransaction",async(n,t)=>{try{return await k.delete(`transactions/${n.id}`),n}catch(a){return t.rejectWithValue(a.message)}}),X=x("addTransaction",async(n,t)=>{try{const{data:a}=await k.post("transactions",n);return a}catch(a){return t.rejectWithValue(a.message)}}),J=x("editTransaction",async(n,t)=>{try{const{data:a}=await k.patch(`/transactions/${n.id}`,n.content);return a}catch(a){return t.rejectWithValue(a.message)}}),K=x("fetchTransactionCategories",async(n,t)=>{try{const{data:a}=await k.get("transaction-categories");return a}catch(a){return t.rejectWithValue(a.message)}}),Z=x("fetchTransactionSummaryController",async(n,t)=>{try{const{data:a}=await k.get(`transactions-summary?month=${n.month}&year=${n.year}`);return a}catch(a){return t.rejectWithValue(a.message)}}),ce=({component:n,redirectTo:t="/"})=>N(ne)?e.createElement(n,null):e.createElement(ee,{to:t}),be=({component:n,redirectTo:t="/"})=>N(ne)?e.createElement(ee,{to:t}):e.createElement(n,null),M="/money_guard_project/assets/sprite-d3dedbbb.svg",ft="_wrap_1nzyu_1",vt="_logo_1nzyu_5",wt="_text_1nzyu_14",oe={wrap:ft,logo:vt,text:wt},yt=({closeModal:n})=>{const t=de(),a=I(),s=()=>{a(Re()),a(bt()),n(),t("/")};return e.createElement("div",{className:oe.wrap},e.createElement("a",{href:"",className:oe.logo},e.createElement("svg",{width:"36",height:"36"},e.createElement("use",{href:"../../img/sprite.svg#icon-logo"})),"Money Guard"),e.createElement("p",{className:oe.text},"Are you sure you want to log out?"),e.createElement("button",{className:"modalButtonColor",onClick:s},"Logout"),e.createElement("button",{className:"modalButton",onClick:n},"Cancel"))},Nt="_closeButton_11uif_2",Ct="_modalContent_11uif_13",kt="_modalWrapper_11uif_33",le={closeButton:Nt,modalContent:Ct,modalWrapper:kt},xt=document.querySelector("#modal"),$e=({closeModal:n,children:t})=>{const a=i.useCallback(r=>{r.key==="Escape"&&n()},[n]);i.useEffect(()=>(document.addEventListener("keydown",a),()=>{document.removeEventListener("keydown",a)}),[n,a]);const s=r=>{r.target===r.currentTarget&&n()};return Ye.createPortal(e.createElement("div",{onClick:s,className:le.modalWrapper},e.createElement("div",{className:le.modalContent},e.createElement("button",{className:le.closeButton,onClick:n},e.createElement("svg",{width:"16",height:"16"},e.createElement("use",{href:"../../img/sprite.svg#icon-close"}))),t)),xt)},Me=()=>{const[n,t]=i.useState(!1);return{isOpen:n,close:()=>t(!1),open:()=>t(!0),toggle:()=>t(c=>!c)}},St="_header_3tysc_1",It="_hederContainer_3tysc_16",Tt="_logo_3tysc_24",Lt="_wrap_3tysc_34",Dt="_user_3tysc_39",Rt="_button_3tysc_45",$t="_icon_3tysc_59",Mt="_heder_3tysc_16",R={header:St,hederContainer:It,logo:Tt,wrap:Lt,user:Dt,button:Rt,icon:$t,heder:Mt},jt=()=>{const{isOpen:n,toggle:t}=Me(),a=N(pt),s=a.email.indexOf("@"),r=a.email.slice(0,s);return e.createElement("header",{className:R.header},e.createElement("div",{className:R.hederContainer},e.createElement(Ve,{to:"/",className:R.logo},e.createElement("svg",{width:"24",height:"23"},e.createElement("use",{xlinkHref:`${M}#icon-logo`})),"Money Guard"),e.createElement("div",{className:R.wrap}," ",e.createElement("p",{className:R.user},r),e.createElement("button",{className:R.button,onClick:t},e.createElement("svg",{width:"18",height:"18",className:R.icon},e.createElement("use",{href:"../../img/sprite.svg#icon-exit"}))," ","Exit")),n&&e.createElement($e,{closeModal:t},e.createElement(yt,{closeModal:t}))))},je=()=>{const[n,t]=i.useState(window.innerWidth),a=()=>{t(window.innerWidth)};return i.useEffect(()=>(window.addEventListener("resize",a),()=>{window.removeEventListener("resize",a)}),[]),{windowWidth:n}},Bt="_navLinkContainer_dgb7w_1",Pt="_navLinkWrapper_dgb7w_5",Wt="_navLinkTitle_dgb7w_11",At="_navLinkIcon_dgb7w_16",Ot="_active_dgb7w_34",f={navLinkContainer:Bt,navLinkWrapper:Pt,navLinkTitle:Wt,navLinkIcon:At,active:Ot},Ft=()=>{const n=je().windowWidth;return e.createElement("div",{className:f.navLinkContainer},e.createElement("div",{className:f.navLinkWrapper},n<768?e.createElement($,{to:"home",className:({isActive:t})=>F(f.navLinkTitle,t&&f.active)},e.createElement("svg",{width:"38",height:"38",className:f.navLinkIcon},e.createElement("use",{href:"../../img/sprite.svg#icon-home"}))):e.createElement($,{to:"home",className:({isActive:t})=>F(f.navLinkTitle,t&&f.active)},e.createElement("svg",{width:"18",height:"18",className:f.navLinkIcon},e.createElement("use",{xlinkHref:`${M}#icon-home`})),"Home"),n<768?e.createElement($,{to:"statistics",className:({isActive:t})=>F(f.navLinkTitle,t&&f.active)},e.createElement("svg",{width:"38",height:"38",className:f.navLinkIcon},e.createElement("use",{xlinkHref:`${M}#icon-statistics`}))):e.createElement($,{to:"statistics",className:({isActive:t})=>F(f.navLinkTitle,t&&f.active)},e.createElement("svg",{width:"18",height:"18",className:f.navLinkIcon},e.createElement("use",{xlinkHref:`${M}#icon-statistics`})),"Statistics"),n<768&&e.createElement($,{to:"/currency",className:({isActive:t})=>F(f.navLinkTitle,t&&f.active)},e.createElement("svg",{width:"38",height:"38",className:f.navLinkIcon},e.createElement("use",{href:"../../img/sprite.svg#icon-currency"})))))},qt=()=>N(ne)?e.createElement(e.Fragment,null,e.createElement(jt,null),e.createElement(Ft,null),e.createElement(pe,null)):e.createElement(e.Fragment,null,e.createElement(pe,null)),Ht="_login_register_section_1x21k_1",zt="_register_login_section_1x21k_2",Yt="_background_container_login_1x21k_13",Vt="_background_container_registration_1x21k_14",Ut="_gradient_container_1x21k_163",Gt="_form_container_1x21k_171",Qt="_form_1x21k_171",Xt="_submit_btn_1x21k_210",Jt="_inactive_btn_1x21k_230",Kt="_password_label_1x21k_247",Zt="_password_input_1x21k_256",en="_error_container_1x21k_266",tn="_username_1x21k_270",nn="_email_1x21k_276",an="_password_1x21k_247",sn="_cpassword_1x21k_288",rn="_eye_1x21k_302",cn="_name_label_1x21k_306",on="_name_input_1x21k_314",ln="_name_user_icon_1x21k_331",mn="_icon_email_cont_1x21k_335",dn="_password_icon_1x21k_339",un="_button_cont_1x21k_343",_n="_strengthBar_1x21k_349",gn="_porgress_container_1x21k_369",En="_logo_wrapper_1x21k_374",pn="_background_img_container_login_1x21k_545",hn="_background_img_container_registration_1x21k_546",bn="_background_container_1x21k_13",d={login_register_section:Ht,register_login_section:zt,background_container_login:Yt,background_container_registration:Vt,gradient_container:Ut,form_container:Gt,form:Qt,submit_btn:Xt,inactive_btn:Jt,password_label:Kt,password_input:Zt,error_container:en,username:tn,email:nn,password:an,cpassword:sn,eye:rn,name_label:cn,name_input:on,name_user_icon:ln,icon_email_cont:mn,password_icon:dn,button_cont:un,strengthBar:_n,porgress_container:gn,logo_wrapper:En,background_img_container_login:pn,background_img_container_registration:hn,background_container:bn},fe=({register:n,errors:t,name:a,placeholder:s,className:r})=>e.createElement(e.Fragment,null,e.createElement("div",{className:d.error_container},e.createElement("label",{className:d.name_label},a==="username"?e.createElement("div",{className:d.name_user_icon},e.createElement("svg",{width:"20",height:"24"},e.createElement("use",{href:"../../img/sprite.svg#icon-user"}))," "):e.createElement("div",{className:d.icon_email_cont},e.createElement("svg",{width:"20",height:"24"},e.createElement("use",{href:"../../img/sprite.svg#icon-email"}))),e.createElement("input",{className:d.name_input,autoComplete:"none",...n(a),type:"text",placeholder:s}))," ",(t==null?void 0:t[a])&&e.createElement("span",{className:d[r]},t[a].message))),fn=({password:n})=>e.createElement("div",{className:d.porgress_container},e.createElement(Ue,{password:n,minLength:6,scoreWordStyle:{display:"none"},className:d.strengthBar})),ve=({register:n,errors:t,name:a,placeholder:s,getValues:r,formType:c,className:m})=>{const[E,l]=i.useState("password"),[g,u]=i.useState("");function h(_){u(_.target.value)}return e.createElement(e.Fragment,null,e.createElement("div",{className:d.error_container},e.createElement("label",{className:d.password_label},e.createElement("div",{className:d.password_icon},e.createElement("svg",{width:"20",height:"20"},e.createElement("use",{href:"../../img/sprite.svg#icon-lock"}))),e.createElement("input",{autoComplete:a,...n(a,{required:"Password is required",validate:_=>_===r("password")||"Passwords do not match"}),type:E,placeholder:s,onChange:h,className:d.password_input})," ",e.createElement("div",{className:d.eye,onClick:()=>{l(E==="password"?"text":"password")}},E==="password"?e.createElement(Ge,{style:{color:"rgba(255, 255, 255, 0.4)"}}):e.createElement(Qe,{style:{color:"rgba(255, 255, 255, 0.6)"}}))),(t==null?void 0:t[a])&&e.createElement("span",{className:d[m]},t[a].message)),a==="password"&&c!=="login"&&e.createElement(fn,{password:g}))},Be=({onDataSubmit:n,formType:t,schema:a})=>{const[s,r]=i.useState(0);i.useEffect(()=>{const u=()=>{r(window.innerWidth)};return window.addEventListener("resize",u),()=>{window.removeEventListener("resize",u)}},[]);const{register:c,reset:m,handleSubmit:E,formState:{errors:l}}=Se({resolver:Ie(a)}),g=u=>{const{passwordConfirmation:h,..._}=u;n(_),m()};return e.createElement(e.Fragment,null,e.createElement("section",{className:t==="login"?`${d.login_register_section}`:`${d.register_login_section}`},t==="login"?e.createElement(e.Fragment,null,e.createElement("div",{className:d.background_img_container_login},e.createElement("div",null),e.createElement("div",null)),e.createElement("div",{className:d.background_container_login},e.createElement("div",null),e.createElement("div",null),e.createElement("div",null),e.createElement("div",null),e.createElement("div",null),e.createElement("div",null))):e.createElement(e.Fragment,null,e.createElement("div",{className:d.background_container_registration},e.createElement("div",null),e.createElement("div",null),e.createElement("div",null),e.createElement("div",null),e.createElement("div",null),e.createElement("div",null)),e.createElement("div",{className:d.background_img_container_registration},e.createElement("div",null),e.createElement("div",null))),e.createElement("div",{className:d.form_container,style:{padding:s<768&&t==="login"?"98px 20px":s>768&&t==="login"?"80px 62px":"40px 62px"}},e.createElement("a",{href:"",className:d.logo_wrapper,style:{paddingBottom:t==="login"?"11px":"0px"}},s<768?e.createElement("svg",{width:"25.5",height:"25.5"},e.createElement("use",{href:"../../img/sprite.svg#icon-logo"})):e.createElement("svg",{width:"36",height:"36"},e.createElement("use",{href:"../../img/sprite.svg#icon-logo"})),"Money Guard"),e.createElement("form",{className:d.form,onSubmit:E(g)},t==="register"&&e.createElement(fe,{register:c,errors:l,name:"username",placeholder:"Name",className:"username"}),e.createElement(fe,{register:c,errors:l,name:"email",placeholder:"E-mail",className:"email"}),e.createElement(ve,{register:c,errors:l,name:"password",placeholder:"Password",onChange:u=>handleChange(u),formType:t,className:"password"}),t==="register"&&e.createElement(e.Fragment,null,e.createElement(ve,{register:c,errors:l,name:"passwordConfirmation",placeholder:"Confirm password",className:"cpassword"})),t==="login"?e.createElement("div",{className:d.button_cont},e.createElement("button",{className:d.submit_btn,type:"submit"},"log in"),e.createElement($,{className:d.inactive_btn,to:"/register"},"register")):e.createElement("div",{className:d.button_cont},e.createElement("button",{className:d.submit_btn,type:"submit"},"register"),e.createElement($,{className:d.inactive_btn,to:"/login"},"log in"))," "))))},vn=te({password:T().required().min(6,"Must be more then 6 symbols").max(12,"Must be less then 12 symbols"),email:T().required().email("Email is not valid")}).required(),wn=()=>{const n=de(),t=I(),a=r=>{t(V(r)).unwrap().then(()=>{n("/home")}).catch(c=>{console.log(c.message),W(c)})},s={email:"tomato9@gmail.com",password:"0000000"};return e.createElement("div",null,e.createElement(Be,{formType:"login",onDataSubmit:a,values:s,schema:vn}))},yn=te({username:T().required(),password:T().required().min(6,"Must be more then 6 symbols").max(12,"Must be less then 12 symbols"),email:T().required().email("Email is not valid"),passwordConfirmation:T().oneOf([Xe("password"),null],"Passwords must match")}).required(),Nn="_registerWrapper_15m0u_1",Cn={registerWrapper:Nn},kn=()=>{const n=I(),t=de(),a=s=>{n(Y(s)).unwrap().then(()=>{t("/home")}).catch(r=>{console.log(r),W(r)})};return e.createElement("div",{className:Cn.registerWrapper},e.createElement(Be,{onDataSubmit:a,formType:"register",schema:yn}))},ge=()=>{const n=B.useMediaQuery({query:"(min-width: 768px)"}),t=B.useMediaQuery({query:"(min-width: 1280px)"}),a=B.useMediaQuery({query:"(max-width: 768px)"}),s=B.useMediaQuery({query:"(max-width: 767px)"}),r=B.useMediaQuery({query:"(orientation: portrait)"}),c=B.useMediaQuery({query:"(min-resolution: 2dppx)"});return{isBigScreenOrTablet:n,isBigScreen:t,isMobile:s,isTabletOrMobile:a,isPortrait:r,isRetina:c}},xn={transactionsList:[],transactionCategories:[],categoriesSummary:[],expenseSummary:0,incomeSummary:0,month:new Date().getMonth()+1,year:new Date().getFullYear(),periodTotal:0,loading:!1,error:!1},Ee=me({name:"transactions",initialState:xn,selectors:{selectTransactions:n=>n.transactionsList,selectIsLoading:n=>n.loading,selectIsError:n=>n.error,selectTransactionCategories:n=>n.transactionCategories,selectMonth:n=>n.month,selectYear:n=>n.year,selectCategoriesSummary:n=>n.categoriesSummary,selectExpenseSummary:n=>n.expenseSummary,selectIncomeSummary:n=>n.incomeSummary,selectPeriodTotal:n=>n.periodTotal},reducers:{selectedYear:(n,{payload:t})=>{n.year=t},selectedMonth:(n,{payload:t})=>{n.month=t}},extraReducers:n=>{n.addCase(G.fulfilled,(t,{payload:a})=>{t.transactionsList=a,t.loading=!1}).addCase(Q.fulfilled,(t,{payload:a})=>{t.transactionsList=t.transactionsList.filter(s=>s.id!==a.id),t.loading=!1}).addCase(X.fulfilled,(t,{payload:a})=>{t.transactionsList.push(a),t.loading=!1}).addCase(J.fulfilled,(t,{payload:a})=>{const s=t.transactionsList.findIndex(r=>r.id===a.id);t.transactionsList.splice(s,1,a),t.loading=!1}).addCase(K.fulfilled,(t,{payload:a})=>{t.transactionCategories=a,t.loading=!1}).addCase(Z.fulfilled,(t,{payload:a})=>{t.categoriesSummary=a.categoriesSummary,t.expenseSummary=a.expenseSummary,t.incomeSummary=a.incomeSummary,t.periodTotal=a.periodTotal,t.loading=!1}).addMatcher(H(G.pending,Q.pending,X.pending,J.pending,K.pending,Z.pending),(t,{payload:a})=>{t.loading=!0,t.error=null}).addMatcher(H(G.rejected,Q.rejected,X.rejected,J.rejected,K.rejected,Z.rejected),(t,{payload:a})=>{t.error=a,t.loading=!1})}}),Sn=Ee.reducer;Ee.actions;const{selectTransactions:In,selectIsLoading:ws,selectIsError:ys,selectTransactionCategories:Pe,selectYear:Ns,selectMonth:Cs,selectCategoriesSummary:Tn,selectExpenseSummary:ks,selectIncomeSummary:xs,selectPeriodTotal:Ss}=Ee.selectors,Ln="_labelExpense_c530i_8",Dn="_labelIncome_c530i_15",Rn="_activeIncome_c530i_46",$n="_activeExpense_c530i_53",Mn="_slider_c530i_59",jn="_round_c530i_106",S={"transaction-switcher":"_transaction-switcher_c530i_2",switch:"_switch_c530i_22",labelExpense:Ln,labelIncome:Dn,activeIncome:Rn,activeExpense:$n,slider:Mn,round:jn},Bn=({onChange:n})=>{const[t,a]=i.useState(!1),s=()=>{a(!t),n(!t)};return e.createElement("div",{className:S["transaction-switcher"]},e.createElement("span",{className:t?S.activeIncome:S.labelIncome},"Income"),e.createElement("label",{className:`${S.switch} ${t?S.income:S.expense}`},e.createElement("input",{type:"checkbox",onChange:s,checked:!t}),e.createElement("span",{className:`${S.slider} ${S.round}`})),e.createElement("span",{className:t?S.labelExpense:S.activeExpense},"Expense"))},Pn="_container_1omsk_2",Wn="_formWrapper_1omsk_13",An="_header_1omsk_21",On="_secondContainer_1omsk_27",Fn="_category_1omsk_30",qn="_boxDate_1omsk_43",Hn="_incomeInput_1omsk_52",zn="_customInput_1omsk_53",Yn="_svgBox_1omsk_70",Vn="_comment_1omsk_91",Un="_selectExpense_1omsk_92",Gn="_btnBox_1omsk_108",Qn="_activeIncome_1omsk_113",Xn="_activeExpense_1omsk_120",Jn="_checkBox_1omsk_160",w={container:Pn,formWrapper:Wn,header:An,secondContainer:On,category:Fn,boxDate:qn,incomeInput:Hn,customInput:zn,svgBox:Yn,comment:Vn,selectExpense:Un,btnBox:Gn,activeIncome:Qn,activeExpense:Xn,checkBox:Jn},we=n=>n<10?"0"+n:n,ye=n=>{const t=n.getFullYear(),a=we(n.getMonth()+1),s=we(n.getDate());return`${t}-${a}-${s}`},Ne=({name:n,register:t,errors:a,placeholder:s,className:r})=>e.createElement("div",{className:w.inputContainer},e.createElement("input",{className:r,...t(n),placeholder:s}),a[n]&&e.createElement("span",null,a[n].message));function We({content:n,categories:t,toggle:a,typeForm:s,onDataSubmit:r,schema:c}){const{register:m,handleSubmit:E,formState:{errors:l},setValue:g,reset:u}=Se({resolver:Ie(c),mode:"onChange"}),[h,_]=i.useState(""),[p,L]=i.useState(""),[A,z]=i.useState(new Date);i.useEffect(()=>{L(n?n.type:"EXPENSE")},[n]),i.useEffect(()=>{g("amount",n&&n.amount)},[n,g]),i.useEffect(()=>{g("comment",n&&n.comment)},[n,g]);const j=i.useMemo(()=>t.map(({id:v,name:ze})=>({value:v,label:ze})),[t]),O=i.useMemo(()=>j.find(v=>(n==null?void 0:n.categoryId)===v.value),[n,j]),ae=v=>{_(v)},He=v=>{s==="add"?(r({transactionDate:ye(A),amount:p==="EXPENSE"?`-${v.amount}`:v.amount,comment:v.comment,type:p,categoryId:p==="EXPENSE"?h.value||j[0].value:"063f1132-ba5d-42b4-951d-44011ca46262"}),u()):(r({transactionDate:ye(A),amount:+v.amount,comment:v.comment}),u()),u()},se=v=>{L(v?"INCOME":"EXPENSE")};return e.createElement("div",{className:w.container},e.createElement("form",{className:w.formWrapper,onSubmit:E(He)},e.createElement("h1",{className:w.header},s==="add"?"Add transaction":"Edit transaction"),s==="add"?e.createElement(Bn,{onChange:se}):e.createElement("div",null,e.createElement("ul",{className:w.checkBox},e.createElement("li",{onClick:()=>{s==="edit"&&p==="EXPENSE"||se(!0)},className:n.type==="INCOME"||p==="INCOME"?w.activeIncome:"",disabled:s==="edit"&&p==="EXPENSE"}," ","Income"),e.createElement("span",null,"/"),e.createElement("li",{onClick:()=>{s==="edit"&&p==="INCOME"||se(!1)},className:p==="EXPENSE"?w.activeExpense:"",disabled:s==="edit"&&p==="INCOME"}," ","Expense"," "))),e.createElement("div",{className:w.secondContainer},p==="EXPENSE"&&e.createElement("div",{className:w.category},e.createElement(Je,{name:"category",className:"react-select-container",classNamePrefix:"react-select",options:j,placeholder:"Select category",defaultValue:O&&O,onChange:ae,isDisabled:s==="edit"}),l.category&&e.createElement("span",null,l.category.message)),e.createElement("div",{className:w.boxDate},e.createElement(Ne,{className:w.incomeInput,name:"amount",placeholder:"0.00",errors:l,register:m}),e.createElement("div",{className:w.svgBox},e.createElement(Ke,{className:w.customInput,selected:n?n.transactionDate:A,onChange:v=>{g("transactionDate",v),z(v)}}),e.createElement("svg",{width:"36",height:"36"},e.createElement("use",{href:"../../img/sprite.svg#icon-date"})),l.transactionDate&&e.createElement("span",null,l.transactionDate.message))),e.createElement(Ne,{className:w.comment,name:"comment",placeholder:"Comment",errors:l,register:m}),e.createElement("div",{className:w.btnBox},e.createElement("button",{className:"modalButtonColor"},s==="add"?"ADD":"EDIT"),e.createElement("button",{type:"button",onClick:a,className:"modalButton"},"CANCEL")))))}const Kn=te({comment:T().required("Describe your transaction").min(5,"Give more details"),transactionDate:Te().required("Please choose the date"),amount:Le().typeError("Please enter the number").min(1,"Number must be at least 1 character").required("Sum is required")});function Zn({categories:n,editContent:t,toggle:a}){const s=I(),r=c=>{s(J({content:{...c},id:t.id})).unwrap().then(m=>{W.success("Changed!"),a()}).catch(m=>{W.error("Credentials is not valid!")})};return e.createElement(We,{schema:Kn,toggle:a,content:t.content,categories:n,onDataSubmit:r,typeForm:"edit"})}const ea=te({comment:T().required("Describe your transaction").min(5,"Give more details"),transactionDate:Te().required("Please choose the date"),amount:Le().typeError("Please enter the number").min(1,"Number must be at least 1 character").required("Sum is required")});function ta({categories:n,toggle:t}){const a=I(),s=r=>{a(X(r)).unwrap().then(()=>{W.success("Transaction was successfully added"),t()}).catch(c=>{W.error("Credentials is not valid!")})};return e.createElement(We,{schema:ea,categories:n,onDataSubmit:s,toggle:t,typeForm:"add"})}const na="_transaction_item_jemjf_1",aa="_income_border_jemjf_6",sa="_expense_border_jemjf_10",ra="_income_text_jemjf_14",ca="_expense_text_jemjf_19",oa="_transactions_table_mobile_jemjf_24",la="_transaction_colum_jemjf_30",ia="_transaction_first_column_jemjf_34",ma="_transaction_row_mobile_jemjf_38",da="_transaction_row_jemjf_38",ua="_table_body_jemjf_57",_a="_btn_delete_jemjf_61",ga="_btn_edit_jemjf_76",Ea="_btn_wrapper_jemjf_86",pa="_icon_edit_jemjf_93",o={transaction_item:na,income_border:aa,expense_border:sa,income_text:ra,expense_text:ca,transactions_table_mobile:oa,transaction_colum:la,transaction_first_column:ia,transaction_row_mobile:ma,transaction_row:da,table_body:ua,btn_delete:_a,btn_edit:ga,btn_wrapper:Ea,icon_edit:pa},Ce=({transaction:n,handleEditItem:t})=>{const{id:a,transactionDate:s,type:r,categoryId:c,comment:m,amount:E}=n,{isBigScreenOrTablet:l,isMobile:g}=ge(),u=I(),h=N(Pe);function _(j){const O=h.find(ae=>ae.id===j);return O?O.name:"Unknown Category"}const p=()=>{u(Q(n))},L=r.toLowerCase()==="income"?"+":"-",A=r.toLowerCase()==="income"?o.income_border:o.expense_border,z=r.toLowerCase()==="income"?o.income_text:o.expense_text;return e.createElement(e.Fragment,null,g&&e.createElement("li",{key:a,className:`${o.transaction_item} ${A}`},e.createElement("table",{className:o.transactions_table_mobile},e.createElement("tbody",{className:o.table_body},e.createElement("tr",{className:o.transaction_row_mobile},e.createElement("td",{className:o.transaction_first_column},"Date"),e.createElement("td",null,s)),e.createElement("tr",{className:o.transaction_row_mobile},e.createElement("td",{className:o.transaction_first_column},"Type"),e.createElement("td",null,L)),e.createElement("tr",{className:o.transaction_row_mobile},e.createElement("td",{className:o.transaction_first_column},"Category"),e.createElement("td",null,_(c))),e.createElement("tr",{className:o.transaction_row_mobile},e.createElement("td",{className:o.transaction_first_column},"Comment"),e.createElement("td",null,m)),e.createElement("tr",{className:o.transaction_row_mobile},e.createElement("td",{className:o.transaction_first_column},"Sum"),e.createElement("td",{className:z},E)),e.createElement("tr",{className:o.transaction_row_mobile},e.createElement("td",null,e.createElement("button",{className:o.btn_delete,onClick:p},"Delete")),e.createElement("td",null,e.createElement("button",{onClick:()=>t({categoryId:c,type:r,amount:E,comment:m,transactionDate:s},a),className:o.btn_edit},e.createElement("svg",{className:o.icon_edit},e.createElement("use",{xlinkHref:`${M}#icon-edit`}))," ","Edit")))))),l&&e.createElement("tr",{className:o.transaction_row},e.createElement("td",{className:o.transaction_colum},s),e.createElement("td",{className:o.transaction_colum,style:{textAlign:"center"}},L),e.createElement("td",{className:o.transaction_colum},_(c)),e.createElement("td",{className:o.transaction_colum},m),e.createElement("td",{className:`${o.transaction_colum} ${z}`,style:{textAlign:"right"}},E),e.createElement("td",{className:o.transaction_colum},e.createElement("div",{className:o.btn_wrapper},e.createElement("button",{onClick:()=>t({categoryId:c,type:r,amount:E,comment:m,transactionDate:s},a),className:o.btn_edit},e.createElement("svg",{className:o.icon_edit},e.createElement("use",{xlinkHref:`${M}#icon-edit`}))),e.createElement("button",{className:o.btn_delete,onClick:p},"Delete")))))},ha="_transactions_section_smf2v_1",ba="_transactions_container_smf2v_34",fa="_transactions_table_smf2v_85",va="_transactions_list_smf2v_92",wa="_transaction_row_head_smf2v_98",ya="_table_body_smf2v_121",Na="_btn_add_smf2v_125",Ca="_icon_plus_smf2v_140",ka="_empty_transactions_smf2v_146",C={transactions_section:ha,transactions_container:ba,transactions_table:fa,transactions_list:va,transaction_row_head:wa,table_body:ya,btn_add:Na,icon_plus:Ca,empty_transactions:ka},xa=()=>{const{isOpen:n,toggle:t}=Me(),[a,s]=i.useState(""),r=N(In),c=N(Pe),{isBigScreenOrTablet:m,isMobile:E}=ge();n?document.body.classList.add("modal-open"):document.body.classList.remove("modal-open");const l=(u,h,_)=>{t(),s({content:u,id:h,name:_}),n&&document.body.classList.add("modal-open")},g=()=>{t(),s(null)};return e.createElement("section",{className:C.transactions_section},e.createElement("div",{className:C.transactions_container},E&&e.createElement("ul",{className:C.transactions_list},r.length>0?r.map(u=>e.createElement(Ce,{handleEditItem:l,key:u.id,transaction:u})):e.createElement("div",{className:C.empty_transactions},"No transactions")),m&&e.createElement(e.Fragment,null,r.length>0?e.createElement("table",{className:C.transactions_table},e.createElement("thead",null,e.createElement("tr",{className:C.transaction_row_head},e.createElement("th",null,"Date"),e.createElement("th",{style:{textAlign:"center"}},"Type"),e.createElement("th",null,"Category"),e.createElement("th",null,"Comment"),e.createElement("th",{style:{textAlign:"right"}},"Sum"),e.createElement("th",null))),e.createElement("tbody",{className:C.table_body},r.map(u=>e.createElement(Ce,{handleEditItem:l,key:u.id,transaction:u})))):e.createElement(e.Fragment,null,e.createElement("table",{className:C.transactions_table},e.createElement("thead",null,e.createElement("tr",{className:C.transaction_row_head},e.createElement("th",null,"Date"),e.createElement("th",{style:{textAlign:"center"}},"Type"),e.createElement("th",null,"Category"),e.createElement("th",null,"Comment"),e.createElement("th",{style:{textAlign:"right"}},"Sum"),e.createElement("th",null)))),e.createElement("div",{className:C.empty_transactions},"No transactions"))),e.createElement("button",{onClick:()=>g(),className:C.btn_add}," ",e.createElement("svg",{className:C.icon_plus},e.createElement("use",{xlinkHref:`${M}#icon-plus`})))),n&&e.createElement($e,{closeModal:t},a?e.createElement(Zn,{editContent:a,categories:c,toggle:t}):e.createElement(ta,{categories:c,toggle:t})))},Ae=x("currency/fetchCurrencyRate",async()=>{const n=localStorage.getItem("currencyRate"),t=localStorage.getItem("lastFetchTime");if(n&&t&&(new Date().getTime()-t)/(1e3*60*60)<1)return JSON.parse(n);try{const a=await xe.get("https://api.monobank.ua/bank/currency");return localStorage.setItem("currencyRate",JSON.stringify(a.data)),localStorage.setItem("lastFetchTime",new Date().getTime().toString()),a.data}catch(a){console.error("Помилка при виконанні запиту до Monobank:",a)}}),Sa={usdRate:null,eurRate:null,lastFetchTime:null},Oe=me({name:"currency",initialState:Sa,selectors:{selectUsdRate:n=>n.usdRate,selectEurRate:n=>n.eurRate,selectLastFetchTime:n=>n.lastFetchTime},extraReducers:n=>{n.addCase(Ae.fulfilled,(t,{payload:a})=>{t.usdRate=a.find(s=>s.currencyCodeA===840&&s.currencyCodeB===980),t.eurRate=a.find(s=>s.currencyCodeA===978&&s.currencyCodeB===980),t.lastFetchTime=new Date().getTime().toString()})}}),Ia=Oe.reducer,{selectUsdRate:Ta,selectEurRate:La,selectLastFetchTime:Da}=Oe.selectors,Ra="_wrapper_d2ubo_14",$a="_title_d2ubo_49",Ma="_row_d2ubo_79",ja="_titleItem_d2ubo_97",Ba="_rowItem_d2ubo_98",Pa="_vector_d2ubo_104",Wa="_image_d2ubo_109",Aa="_secondimage_d2ubo_132",Oa="_smallnumeur_d2ubo_148",Fa="_smallnumusd_d2ubo_158",b={wrapper:Ra,title:$a,row:Ma,titleItem:ja,rowItem:Ba,vector:Pa,image:Wa,secondimage:Aa,smallnumeur:Oa,smallnumusd:Fa};function Fe(){const n=I(),t=N(Ta),a=N(La),s=N(Da),{isDesktopOrLaptop:r,isBigScreen:c,isTabletOrMobile:m,isRetina:E}=ge();let l="../../img/images/currency_mobile.webp",g="../../img/images/line_desc_mob_1x.webp";return window.devicePixelRatio>=2?r||c?(l="../../img/images/currency_desk@2x.webp",g="../../img/images/line_desc_2x.webp"):m&&(l="../../img/images/currency_tablet@2x.webp",g="../../img/images/line_desc_tab_2x.webp"):r||c?(l="../../img/images/currency_desk.webp",g="../../img/images/line_desc_1x.webp"):m&&(l="../../img/images/currency_tablet.webp",g="../../img/images/line_desc_tab_1x.webp"),i.useEffect(()=>{(new Date().getTime()-s)/(1e3*60*60)>1&&n(Ae())},[n,s]),e.createElement("div",{className:b.wrapper},e.createElement("div",{className:b.secondwrapper},e.createElement("ul",{className:b.title},e.createElement("li",{className:b.titleItem},"Currency"),e.createElement("li",{className:b.titleItem},"Purchase"),e.createElement("li",{className:b.titleItem},"Sale")),t&&e.createElement("ul",{className:b.row},e.createElement("li",{className:b.rowItem},"USD"),e.createElement("li",{className:b.rowItem},t.rateBuy),e.createElement("li",{className:b.rowItem},t.rateSell)),a&&e.createElement("ul",{className:b.row},e.createElement("li",{className:b.rowItem},"EUR"),e.createElement("li",{className:b.rowItem},a.rateBuy),e.createElement("li",{className:b.rowItem},a.rateSell)),r&&e.createElement(e.Fragment,null,e.createElement("p",{className:b.smallnumeur}," ",a.rateBuy),e.createElement("p",{className:b.smallnumusd}," ",t.rateBuy)),e.createElement("img",{className:b.image,src:l,alt:"Currency rate"}),e.createElement("img",{className:b.secondimage,src:g,alt:"Currency rate"})))}const qa=()=>{const n=je().windowWidth,t=I();return i.useEffect(()=>{t(G())},[t]),e.createElement(e.Fragment,null,n>=768&&e.createElement(Fe,null),e.createElement(xa,null))},Ha="_loaderWrapper_1hccn_1",za="_loader_1hccn_1",Ya="_spinner_1hccn_1",Va="_loaderName_1hccn_34",ie={loaderWrapper:Ha,loader:za,spinner:Ya,loaderName:Va},ke=()=>e.createElement("div",{className:ie.loaderWrapper},e.createElement("div",{className:ie.loader},e.createElement("span",{className:ie.loaderName}))),Ua="_selectContainers_1ftgu_1",Ga="_select_1ftgu_1",Qa="_option_1ftgu_19",q={selectContainers:Ua,select:Ga,option:Qa},Xa=({onMonthChange:n,onYearChange:t})=>{const a=new Date,s=a.getFullYear(),[r,c]=i.useState(a.getMonth()+1),[m,E]=i.useState(s),l=_=>{c(parseInt(_.target.value)),n(parseInt(_.target.value))},g=_=>{E(parseInt(_.target.value)),t(parseInt(_.target.value))},u=Array.from({length:s-2019},(_,p)=>s-p).reverse(),h=["January","February","March","April","May","June","July","August","September","October","November","December"];return e.createElement("div",{className:q.selectContainers},e.createElement("select",{className:q.select,value:r,onChange:l},h.map((_,p)=>e.createElement("option",{className:q.option,key:p+1,value:p+1},_))),e.createElement("select",{className:q.select,value:m,onChange:g},u.map(_=>e.createElement("option",{className:q.option,key:_,value:_},_))))},Ja="_statisticsContainer_12lnp_1",Ka="_chartContainer_12lnp_27",Za="_title_12lnp_31",es="_tableContainer_12lnp_36",ts="_contentContainer_12lnp_59",P={statisticsContainer:Ja,chartContainer:Ka,title:Za,tableContainer:es,contentContainer:ts},ns="_tableContainer_g4cyy_1",as="_table_g4cyy_1",ss="_tableHeader_g4cyy_12",rs="_tableCell_g4cyy_25",cs="_tableRow_g4cyy_33",os="_paragraphContainer_g4cyy_37",ls="_paragraph_g4cyy_37",y={tableContainer:ns,table:as,tableHeader:ss,tableCell:rs,tableRow:cs,paragraphContainer:os,paragraph:ls},is=({transactionsSummary:n,colors:t})=>{const a=(n==null?void 0:n.categoriesSummary)||[],s=(n==null?void 0:n.incomeSummary)||0,r=(n==null?void 0:n.expenseSummary)||0;return e.createElement("div",{className:y.tableContainer},e.createElement("table",{className:y.table},e.createElement("thead",{className:y.tableHeader},e.createElement("tr",null,e.createElement("th",{className:y.tableCell}),e.createElement("th",{className:y.tableCell},"Category"),e.createElement("th",{className:y.tableCell},"Sum"))),e.createElement("tbody",null,a.map((c,m)=>e.createElement("tr",{key:m,className:y.tableRow},e.createElement("td",{className:y.colorCell},e.createElement("div",{className:y.colorSquare,style:{backgroundColor:t[c.name]}})),e.createElement("td",{className:y.tableCell},c.name),e.createElement("td",{className:y.tableCell},c.total))))),e.createElement("div",{className:y.paragraphContainer},e.createElement("p",{className:y.paragraph},"Income: ",s),e.createElement("p",{className:y.paragraph},"Expenses: ",r)))},ms={},ds=({transactions:n,colors:t})=>{if(!n||!t)return e.createElement("div",null,"No data available");const a={labels:n==null?void 0:n.map(s=>s.name),datasets:[{data:n==null?void 0:n.map(s=>s.total),backgroundColor:n==null?void 0:n.map(s=>t[s.name]),hoverBackgroundColor:n==null?void 0:n.map(s=>t[s.name])}]};return e.createElement("div",{className:ms.chartContainer},e.createElement(Ze,{data:a}))},us=()=>{const n=I(),t=N(Tn),[a,s]=i.useState(new Date().getMonth()+1),[r,c]=i.useState(new Date().getFullYear()),[m,E]=i.useState({});console.log(t),i.useEffect(()=>{n(Z({month:a,year:r}))},[a,r,n]);const l=()=>{const h={};t==null||t.forEach(({name:_,index:p})=>{h[_]=`#${Math.floor(Math.random()*16777215).toString(16)}`}),E(h)};i.useEffect(()=>{l()},[t]);const g=h=>{s(h)},u=h=>{c(h)};return e.createElement("section",{className:P.statisticsContainer},e.createElement("div",{className:P.titleContainer},e.createElement("h2",{className:P.title},"Statistics")),e.createElement("div",{className:P.contentContainer},e.createElement("div",{className:P.chartContainer},e.createElement(ds,{transactions:t,colors:m})),e.createElement("div",{className:P.tableContainer},e.createElement(Xa,{onMonthChange:g,onYearChange:u}),e.createElement(is,{transactionsSummary:t,colors:m}))))};function _s(){const n=N(ne),t=N(ht),a=I();return i.useEffect(()=>{a(U()),a(K())},[a]),t?e.createElement(ke,null):e.createElement(e.Fragment,null,e.createElement(i.Suspense,{fallback:e.createElement(ke,null)},e.createElement(et,null,e.createElement(D,{index:!0,element:e.createElement(be,{component:wn,redirectTo:"/home"})}),e.createElement(D,{path:"register",element:e.createElement(be,{component:kn,redirectTo:"/home"})}),e.createElement(D,{path:"/",element:e.createElement(qt,null)},e.createElement(D,{path:"/home",element:e.createElement(ce,{component:qa,redirectTo:"/"})}),e.createElement(D,{path:"/statistics",element:e.createElement(ce,{component:us,redirectTo:"/"})}),e.createElement(D,{path:"/currency",element:e.createElement(ce,{component:Fe,redirectTo:"/"})})),e.createElement(D,{path:"*",element:n?e.createElement(ee,{to:"/home"}):e.createElement(ee,{to:"/"})}))))}const gs={key:"auth",version:1,storage:De,whitelist:["token"]},Es={key:"root",storage:De},qe=tt({reducer:{auth:he(gs,Et),transactions:Sn,currency:he(Es,Ia)},middleware:n=>n({serializableCheck:{ignoredActions:[nt,at,st,rt,ct,ot]}}),devTools:!1}),ps=lt(qe);it.createRoot(document.getElementById("root")).render(e.createElement(mt,null,e.createElement(dt,{store:qe},e.createElement(ut,{loading:null,persistor:ps},e.createElement(_s,null),e.createElement(_t,{autoClose:1500})))));
//# sourceMappingURL=commonHelpers.js.map
