import{a as fe,c as C,b as ae,i as W,u as N,R as e,N as X,d as se,e as x,r as m,f as Pe,g as O,O as ie,_ as We,P as Oe,h as je,j as we,o as Ae,k as ye,l as L,B,m as Fe,n as D,S as qe,D as ze,p as Ve,q as I,s as Ue,t as me,F as He,v as Ge,w as Qe,x as Xe,y as Ye,z as Je,A as Ke,C as Ne,E as Ze,G as et,H as tt,I as nt,Q as at}from"./assets/vendor-fb843ec4.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))r(c);new MutationObserver(c=>{for(const o of c)if(o.type==="childList")for(const _ of o.addedNodes)_.tagName==="LINK"&&_.rel==="modulepreload"&&r(_)}).observe(document,{childList:!0,subtree:!0});function a(c){const o={};return c.integrity&&(o.integrity=c.integrity),c.referrerPolicy&&(o.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?o.credentials="include":c.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(c){if(c.ep)return;c.ep=!0;const o=a(c);fetch(c.href,o)}})();const v=fe.create({baseURL:"https://wallet.b.goit.study/api/"}),re=n=>{v.defaults.headers.common.Authorization=`Bearer ${n}`},st=()=>{v.defaults.headers.common.Authorization=""},z=C("register",async(n,t)=>{try{const{data:a}=await v.post("auth/sign-up",n);return re(a.token),a}catch(a){return t.rejectWithValue(a.message)}}),V=C("login",async(n,t)=>{try{const{data:a}=await v.post("auth/sign-in",n);return re(a.token),a}catch(a){return t.rejectWithValue(a.message)}}),ve=C("logout",async(n,t)=>{try{const{data:a}=await v.delete("auth/sign-out");return st(),a}catch(a){return t.rejectWithValue(a.message)}}),U=C("refresh",async(n,t)=>{const a=t.getState().auth.token;if(!a)return t.rejectWithValue("Token is not exist!");try{re(a);const{data:r}=await v.get("users/current");return console.log(r),r}catch(r){return t.rejectWithValue(r.message)}}),J={user:{username:"",email:""},token:null,loading:!1,error:!1,isLoggedIn:!1,isRefresh:!1,balance:0},ce=ae({name:"auth",initialState:J,selectors:{selectUser:n=>n.user,selectIsLoggedIn:n=>n.isLoggedIn,selectToken:n=>n.isLoggedIn,selectIsRefresh:n=>n.isRefresh,selectBalance:n=>n.balance},reducers:{logout:n=>J},extraReducers:n=>{n.addCase(ve.fulfilled,t=>J).addCase(U.fulfilled,(t,{payload:a})=>{t.user.username=a.username,t.user.email=a.email,t.balance=a.balance,t.isLoggedIn=!0,t.loading=!1,t.isRefresh=!1,t.loading=!1}).addMatcher(W(z.fulfilled,V.fulfilled),(t,{payload:a})=>{t.user.username=a.user.username,t.user.email=a.user.email,t.user.password=a.user.password,t.token=a.token,t.loading=!1,t.isLoggedIn=!0,t.loading=!1,t.isRefresh=!1}).addMatcher(W(z.pending,V.pending,U.pending),t=>{t.loading=!0,t.error=null,t.isRefresh=!0}).addMatcher(W(z.rejected,V.rejected,U.rejected),(t,{payload:a})=>{t.error=a,t.loading=!1,t.isRefresh=!1})}}),rt=ce.reducer,{selectIsLoggedIn:Y,selectUser:ct,selectToken:xa,selectIsRefresh:ot,selectBalance:Sa,selectIsLoading:Ta}=ce.selectors,{logout:lt}=ce.actions,K=({component:n,redirectTo:t="/"})=>N(Y)?e.createElement(n,null):e.createElement(X,{to:t}),ue=({component:n,redirectTo:t="/"})=>N(Y)?e.createElement(X,{to:t}):e.createElement(n,null),it="_wrap_1nzyu_1",mt="_logo_1nzyu_5",ut="_text_1nzyu_14",Z={wrap:it,logo:mt,text:ut},dt=({closeModal:n})=>{const t=se(),a=x(),r=()=>{a(ve()),a(lt()),n(),t("/")};return e.createElement("div",{className:Z.wrap},e.createElement("a",{href:"",className:Z.logo},e.createElement("svg",{width:"36",height:"36"},e.createElement("use",{href:"../../img/sprite.svg#icon-logo"})),"Money Guard"),e.createElement("p",{className:Z.text},"Are you sure you want to log out?"),e.createElement("button",{className:"modalButtonColor",onClick:r},"Logout"),e.createElement("button",{className:"modalButton",onClick:n},"Cancel"))},_t="_modalWrapper_4issq_1",gt="_modalContent_4issq_12",Et="_closeButton_4issq_24",ee={modalWrapper:_t,modalContent:gt,closeButton:Et},pt=document.querySelector("#modal"),Ce=({closeModal:n,children:t})=>{const a=m.useCallback(c=>{c.key==="Escape"&&n()},[n]);m.useEffect(()=>(document.addEventListener("keydown",a),()=>{document.removeEventListener("keydown",a)}),[n,a]);const r=c=>{c.target===c.currentTarget&&n()};return Pe.createPortal(e.createElement("div",{onClick:r,className:ee.modalWrapper},e.createElement("div",{className:ee.modalContent},e.createElement("button",{className:ee.closeButton,onClick:n},e.createElement("svg",{width:"16",height:"16"},e.createElement("use",{href:"../../img/sprite.svg#icon-close"}))),t)),pt)},xe=()=>{const[n,t]=m.useState(!1);return{isOpen:n,close:()=>t(!1),open:()=>t(!0),toggle:()=>t(o=>!o)}},ht="_header_1snvw_1",bt="_hederContainer_1snvw_9",ft="_logo_1snvw_17",wt="_wrap_1snvw_27",yt="_user_1snvw_32",Nt="_button_1snvw_38",vt="_icon_1snvw_52",Ct="_heder_1snvw_9",R={header:ht,hederContainer:bt,logo:ft,wrap:wt,user:yt,button:Nt,icon:vt,heder:Ct},xt=()=>{const{isOpen:n,toggle:t}=xe(),a=N(ct),r=a.email.indexOf("@"),c=a.email.slice(0,r);return e.createElement("header",{className:R.header},e.createElement("div",{className:R.hederContainer},e.createElement("a",{href:"",className:R.logo},e.createElement("svg",{width:"24",height:"23"},e.createElement("use",{href:"../../img/sprite.svg#icon-logo"})),"Money Guard"),e.createElement("div",{className:R.wrap}," ",e.createElement("p",{className:R.user},c),e.createElement("button",{className:R.button,onClick:t},e.createElement("svg",{width:"18",height:"18",className:R.icon},e.createElement("use",{href:"../../img/sprite.svg#icon-exit"}))," ","Exit")),n&&e.createElement(Ce,{closeModal:t},e.createElement(dt,{closeModal:t}))))},Se=()=>{const[n,t]=m.useState(window.innerWidth),a=()=>{t(window.innerWidth)};return m.useEffect(()=>(window.addEventListener("resize",a),()=>{window.removeEventListener("resize",a)}),[]),{windowWidth:n}},St=()=>{const n=Se().windowWidth;return e.createElement("div",null,e.createElement(O,{to:"home"},"Home"),e.createElement(O,{to:"statistics"},"Statistics"),n<768&&e.createElement(O,{to:"/currency"},"Currency"))},Tt=()=>N(Y)?e.createElement(e.Fragment,null,e.createElement(xt,null),e.createElement(St,null),e.createElement(ie,null)):e.createElement(e.Fragment,null,e.createElement(ie,null)),kt="_login_register_section_ytntg_1",It="_register_login_section_ytntg_2",Rt="_gradient_container_ytntg_24",Dt="_form_container_ytntg_32",Lt="_form_ytntg_32",Bt="_submit_btn_ytntg_70",$t="_inactive_btn_ytntg_90",Mt="_password_label_ytntg_107",Pt="_password_input_ytntg_116",Wt="_error_container_ytntg_127",Ot="_username_ytntg_131",jt="_email_ytntg_137",At="_password_ytntg_107",Ft="_cpassword_ytntg_149",qt="_eye_ytntg_164",zt="_name_label_ytntg_168",Vt="_name_input_ytntg_176",Ut="_name_user_icon_ytntg_195",Ht="_icon_email_cont_ytntg_199",Gt="_password_icon_ytntg_203",Qt="_button_cont_ytntg_207",Xt="_strengthBar_ytntg_213",Yt="_porgress_container_ytntg_234",Jt="_logo_wrapper_ytntg_239",Kt="_background_container_ytntg_289",i={login_register_section:kt,register_login_section:It,gradient_container:Rt,form_container:Dt,form:Lt,submit_btn:Bt,inactive_btn:$t,password_label:Mt,password_input:Pt,error_container:Wt,username:Ot,email:jt,password:At,cpassword:Ft,eye:qt,name_label:zt,name_input:Vt,name_user_icon:Ut,icon_email_cont:Ht,password_icon:Gt,button_cont:Qt,strengthBar:Xt,porgress_container:Yt,logo_wrapper:Jt,background_container:Kt},de=({register:n,errors:t,name:a,placeholder:r,className:c})=>e.createElement(e.Fragment,null,e.createElement("div",{className:i.error_container},e.createElement("label",{className:i.name_label},a==="username"?e.createElement("div",{className:i.name_user_icon},e.createElement("svg",{width:"20",height:"24"},e.createElement("use",{href:"../../img/sprite.svg#icon-user"}))," "):e.createElement("div",{className:i.icon_email_cont},e.createElement("svg",{width:"20",height:"24"},e.createElement("use",{href:"../../img/sprite.svg#icon-email"}))),e.createElement("input",{className:i.name_input,autoComplete:"none",...n(a),type:"text",placeholder:r}))," ",(t==null?void 0:t[a])&&e.createElement("span",{className:i[c]},t[a].message))),Zt=({password:n})=>e.createElement("div",{className:i.porgress_container},e.createElement(We,{password:n,minLength:6,scoreWordStyle:{display:"none"},className:i.strengthBar})),_e=({register:n,errors:t,name:a,placeholder:r,getValues:c,formType:o,className:_})=>{const[g,u]=m.useState("password"),[E,h]=m.useState("");function d(b){h(b.target.value)}return e.createElement(e.Fragment,null,e.createElement("div",{className:i.error_container},e.createElement("label",{className:i.password_label},e.createElement("div",{className:i.password_icon},e.createElement("svg",{width:"20",height:"20"},e.createElement("use",{href:"../../img/sprite.svg#icon-lock"}))),e.createElement("input",{autoComplete:a,...n(a,{required:"Password is required",validate:b=>b===c("password")||"Passwords do not match"}),type:g,placeholder:r,onChange:d,className:i.password_input})," ",e.createElement("div",{className:i.eye,onClick:()=>{u(g==="password"?"text":"password")}},g==="password"?e.createElement(Oe,{style:{color:"rgba(255, 255, 255, 0.4)"}}):e.createElement(je,{style:{color:"rgba(255, 255, 255, 0.6)"}}))),(t==null?void 0:t[a])&&e.createElement("span",{className:i[_]},t[a].message)),a==="password"&&o!=="login"&&e.createElement(Zt,{password:E}))},Te=({onDataSubmit:n,formType:t,schema:a})=>{const[r,c]=m.useState(0);m.useEffect(()=>{const h=()=>{c(window.innerWidth)};return window.addEventListener("resize",h),()=>{window.removeEventListener("resize",h)}},[]);const{register:o,reset:_,handleSubmit:g,formState:{errors:u}}=we({resolver:Ae(a)}),E=h=>{const{passwordConfirmation:d,...b}=h;n(b),_()};return e.createElement("section",{className:t==="login"?`${i.login_register_section}`:`${i.register_login_section}`}," ",e.createElement("div",{className:i.background_container},e.createElement("div",{className:i.form_container,style:{padding:r<768&&t==="login"?"98px 20px":r>768&&t==="login"?"80px 62px":"40px 62px"}},e.createElement("a",{href:"",className:i.logo_wrapper,style:{paddingBottom:t==="login"?"11px":"0px"}},r<768?e.createElement("svg",{width:"25.5",height:"25.5"},e.createElement("use",{href:"../../img/sprite.svg#icon-logo"})):e.createElement("svg",{width:"36",height:"36"},e.createElement("use",{href:"../../img/sprite.svg#icon-logo"})),"Money Guard"),e.createElement("form",{className:i.form,onSubmit:g(E)},t==="register"&&e.createElement(de,{register:o,errors:u,name:"username",placeholder:"Name",className:"username"}),e.createElement(de,{register:o,errors:u,name:"email",placeholder:"E-mail",className:"email"}),e.createElement(_e,{register:o,errors:u,name:"password",placeholder:"Password",onChange:h=>handleChange(h),formType:t,className:"password"}),t==="register"&&e.createElement(e.Fragment,null,e.createElement(_e,{register:o,errors:u,name:"passwordConfirmation",placeholder:"Confirm password",className:"cpassword"})),t==="login"?e.createElement("div",{className:i.button_cont},e.createElement("button",{className:i.submit_btn,type:"submit"},"log in"),e.createElement(O,{className:i.inactive_btn,to:"/register"},"register")):e.createElement("div",{className:i.button_cont},e.createElement("button",{className:i.submit_btn,type:"submit"},"register"),e.createElement(O,{className:i.inactive_btn,to:"/login"},"log in"))," "))))},en=ye({password:L().required().min(6,"Must be more then 6 symbols").max(12,"Must be less then 12 symbols"),email:L().required().email("Email is not valid")}).required(),tn=()=>{const n=se(),t=x(),a=c=>{t(V(c)).unwrap().then(()=>{n("/home")}).catch(o=>{console.log(o.message),B(o)})},r={email:"tomato9@gmail.com",password:"0000000"};return e.createElement("div",null,e.createElement(Te,{formType:"login",onDataSubmit:a,values:r,schema:en}))},nn=ye({username:L().required(),password:L().required().min(6,"Must be more then 6 symbols").max(12,"Must be less then 12 symbols"),email:L().required().email("Email is not valid"),passwordConfirmation:L().oneOf([Fe("password"),null],"Passwords must match")}).required(),an=()=>{const n=x(),t=se(),a=r=>{n(z(r)).unwrap().then(()=>{t("/home")}).catch(c=>{console.log(c),B(c)})};return e.createElement("div",{className:s.registerWrapper},e.createElement(Te,{onDataSubmit:a,formType:"register",schema:nn}))},j=C("fetchTransactionsData",async(n,t)=>{try{const{data:a}=await v.get("transactions");return a}catch(a){return t.rejectWithValue(a.message)}}),H=C("deleteTransaction",async(n,t)=>{try{return await v.delete(`transactions/${n}`),n}catch(a){return t.rejectWithValue(a.message)}}),G=C("addTransaction",async(n,t)=>{try{const{data:a}=await v.post("transactions",n);return a}catch(a){return t.rejectWithValue(a.message)}}),Q=C("editTransaction",async(n,t)=>{try{const{data:a}=await v.patch(`/transactions/${n.id}`,n.content);return a}catch(a){return t.rejectWithValue(a.message)}}),A=C("fetchTransactionCategories",async(n,t)=>{try{const{data:a}=await v.get("transaction-categories");return a}catch(a){return t.rejectWithValue(a.message)}}),te=C("fetchTransactionSummaryController",async(n,t)=>{try{const{data:a}=await v.get(`transactions-summary?month=${n.month}&year=${n.year}`);return a}catch(a){return t.rejectWithValue(a.message)}}),sn={transactionsList:[],transactionCategories:[],categoriesSummary:[],expenseSummary:0,incomeSummary:0,month:new Date().getMonth()+1,year:new Date().getFullYear(),periodTotal:0,loading:!1,error:!1},oe=ae({name:"transactions",initialState:sn,selectors:{selectTransactions:n=>n.transactionsList,selectIsLoading:n=>n.loading,selectIsError:n=>n.error,selectTransactionCategories:n=>n.transactionCategories,selectMonth:n=>n.month,selectYear:n=>n.year,selectCategoriesSummary:n=>n.categoriesSummary,selectExpenseSummary:n=>n.expenseSummary,selectIncomeSummary:n=>n.incomeSummary,selectPeriodTotal:n=>n.periodTotal},reducers:{selectedYear:(n,{payload:t})=>{n.year=t},selectedMonth:(n,{payload:t})=>{n.month=t}},extraReducers:n=>{n.addCase(j.fulfilled,(t,{payload:a})=>{t.transactionsList=a,t.loading=!1}).addCase(H.fulfilled,(t,{payload:a})=>{t.transactionsList=t.transactionsList.filter(r=>r.id!==a),t.loading=!1}).addCase(G.fulfilled,(t,{payload:a})=>{t.transactionsList.push(a),t.loading=!1}).addCase(Q.fulfilled,(t,{payload:a})=>{const r=t.transactionsList.findIndex(c=>c.id===a.id);t.transactionsList.splice(r,1,a),t.loading=!1}).addCase(A.fulfilled,(t,{payload:a})=>{t.transactionCategories=a,t.loading=!1}).addCase(te.fulfilled,(t,{payload:a})=>{t.categoriesSummary=a.categoriesSummary,t.expenseSummary=a.expenseSummary,t.incomeSummary=a.incomeSummary,t.periodTotal=a.periodTotal,t.loading=!1}).addMatcher(W(j.pending,H.pending,G.pending,Q.pending,A.pending,te.pending),(t,{payload:a})=>{t.loading=!0,t.error=null}).addMatcher(W(j.rejected,H.rejected,G.rejected,Q.rejected,A.rejected,te.rejected),(t,{payload:a})=>{t.error=a,t.loading=!1})}}),rn=oe.reducer;oe.actions;const{selectTransactions:cn,selectIsLoading:ka,selectIsError:Ia,selectTransactionCategories:ke,selectYear:Ra,selectMonth:Da,selectCategoriesSummary:La,selectExpenseSummary:Ba,selectIncomeSummary:$a,selectPeriodTotal:Ma}=oe.selectors,on="_transaction_item_2loug_1",ln="_income_border_2loug_6",mn="_expense_border_2loug_10",un="_income_text_2loug_14",dn="_expense_text_2loug_19",_n="_transactions_table_mobile_2loug_24",gn="_transaction_colum_2loug_30",En="_transaction_first_column_2loug_34",pn="_transaction_row_mobile_2loug_38",hn="_transaction_row_2loug_38",bn="_transactions_table_2loug_24",fn="_btn_delete_2loug_61",wn="_btn_edit_2loug_76",yn="_btn_wrapper_2loug_86",Nn="_icon_edit_2loug_93",l={transaction_item:on,income_border:ln,expense_border:mn,income_text:un,expense_text:dn,transactions_table_mobile:_n,transaction_colum:gn,transaction_first_column:En,transaction_row_mobile:pn,transaction_row:hn,transactions_table:bn,btn_delete:fn,btn_edit:wn,btn_wrapper:yn,icon_edit:Nn},Ie="/money_guard_project/assets/sprite-d3dedbbb.svg",le=()=>{const n=D.useMediaQuery({query:"(min-width: 768px)"}),t=D.useMediaQuery({query:"(min-width: 1280px)"}),a=D.useMediaQuery({query:"(max-width: 768px)"}),r=D.useMediaQuery({query:"(max-width: 767px)"}),c=D.useMediaQuery({query:"(orientation: portrait)"}),o=D.useMediaQuery({query:"(min-resolution: 2dppx)"});return{isBigScreenOrTablet:n,isBigScreen:t,isMobile:r,isTabletOrMobile:a,isPortrait:c,isRetina:o}},ge=({transaction:n,handleEditItem:t})=>{const{id:a,transactionDate:r,type:c,categoryId:o,comment:_,amount:g}=n,{isBigScreenOrTablet:u,isMobile:E}=le(),h=x(),d=N(ke);function b(M){const q=d.find(P=>P.id===M);return q?q.name:"Unknown Category"}const S=M=>{h(H(M))},F=c.toLowerCase()==="income"?"+":"-",k=c.toLowerCase()==="income"?l.income_border:l.expense_border,$=c.toLowerCase()==="income"?l.income_text:l.expense_text;return e.createElement(e.Fragment,null,E&&e.createElement("li",{key:a,className:`${l.transaction_item} ${k}`},e.createElement("table",{className:l.transactions_table_mobile},e.createElement("tbody",null,e.createElement("tr",{className:l.transaction_row_mobile},e.createElement("td",{className:l.transaction_first_column},"Date"),e.createElement("td",null,r)),e.createElement("tr",{className:l.transaction_row_mobile},e.createElement("td",{className:l.transaction_first_column},"Type"),e.createElement("td",null,F)),e.createElement("tr",{className:l.transaction_row_mobile},e.createElement("td",{className:l.transaction_first_column},"Category"),e.createElement("td",null,b(o))),e.createElement("tr",{className:l.transaction_row_mobile},e.createElement("td",{className:l.transaction_first_column},"Comment"),e.createElement("td",null,_)),e.createElement("tr",{className:l.transaction_row_mobile},e.createElement("td",{className:l.transaction_first_column},"Sum"),e.createElement("td",{className:$},g)),e.createElement("tr",{className:l.transaction_row_mobile},e.createElement("td",null,e.createElement("button",{className:l.btn_delete,onClick:()=>S(a)},"Delete")),e.createElement("td",null,e.createElement("button",{onClick:()=>t({categoryId:o,type:c,amount:g,comment:_,transactionDate:r},a),className:l.btn_edit}," ",e.createElement("svg",{className:l.icon_edit},e.createElement("use",{xlinkHref:`${Ie}#icon-edit`}))," ","Edit")))))),u&&e.createElement("tr",{className:l.transaction_row},e.createElement("td",{className:l.transaction_colum},r),e.createElement("td",{className:l.transaction_colum,style:{textAlign:"center"}},F),e.createElement("td",{className:l.transaction_colum},b(o)),e.createElement("td",{className:l.transaction_colum},_),e.createElement("td",{className:`${l.transaction_colum} ${$}`,style:{textAlign:"right"}},g),e.createElement("td",{className:l.transaction_colum}," ",e.createElement("div",{className:l.btn_wrapper},e.createElement("button",{onClick:()=>t({categoryId:o,type:c,amount:g,comment:_,transactionDate:r},a),className:l.btn_edit},"Edit"),e.createElement("button",{className:l.btn_delete,onClick:()=>S(a)},"Delete")))))},vn="_transactions_section_mjcgn_1",Cn="_transactions_container_mjcgn_34",xn="_transactions_table_mjcgn_75",Sn="_transactions_list_mjcgn_82",Tn="_transaction_row_head_mjcgn_88",kn="_btn_add_mjcgn_111",In="_icon_plus_mjcgn_126",Rn="_empty_transactions_mjcgn_132",y={transactions_section:vn,transactions_container:Cn,transactions_table:xn,transactions_list:Sn,transaction_row_head:Tn,btn_add:kn,icon_plus:In,empty_transactions:Rn},Dn="_labelExpense_1gb48_13",Ln="_labelIncome_1gb48_19",Bn="_slider_1gb48_26",$n="_round_1gb48_73",T={switch:"_switch_1gb48_1",labelExpense:Dn,labelIncome:Ln,slider:Bn,round:$n,"transaction-switcher":"_transaction-switcher_1gb48_80"},Mn=({onChange:n})=>{const[t,a]=m.useState(!1),r=()=>{a(!t),n(!t)};return e.createElement("div",{className:T["transaction-switcher"]},e.createElement("span",{className:T.labelIncome},"Income"),e.createElement("label",{className:`${T.switch} ${t?T.income:T.expense}`},e.createElement("input",{type:"checkbox",onChange:r,checked:!t}),e.createElement("span",{className:`${T.slider} ${T.round}`})),e.createElement("span",{className:T.labelExpense},"Expense"))},Pn="_formWrapper_1kidh_1",Wn="_header_1kidh_10",On="_checkBox_1kidh_16",jn="_boxDate_1kidh_27",An="_incomeInput_1kidh_35",Fn="_customInput_1kidh_36",qn="_comment_1kidh_53",zn="_selectExpense_1kidh_54",Vn="_btnBox_1kidh_72",Un="_btn_1kidh_72",Hn="_activeIncome_1kidh_101",Gn="_activeExpense_1kidh_104",Qn="_inputContainer_1kidh_108",w={formWrapper:Pn,header:Wn,checkBox:On,boxDate:jn,incomeInput:An,customInput:Fn,comment:qn,selectExpense:zn,btnBox:Vn,btn:Un,activeIncome:Hn,activeExpense:Gn,inputContainer:Qn},Ee=n=>n<10?"0"+n:n,pe=n=>{const t=n.getFullYear(),a=Ee(n.getMonth()+1),r=Ee(n.getDate());return`${t}-${a}-${r}`},he=({name:n,register:t,errors:a,placeholder:r,className:c})=>e.createElement("div",{className:w.inputContainer},e.createElement("input",{className:c,...t(n),placeholder:r}),a[n]&&e.createElement("span",null,a[n].message));function Re({content:n,categories:t,toggle:a,typeForm:r,onDataSubmit:c}){const{register:o,handleSubmit:_,formState:{errors:g},setValue:u}=we(),[E,h]=m.useState(""),[d,b]=m.useState(""),[S,F]=m.useState(new Date);m.useEffect(()=>{b(n?n.type:"EXPENSE")},[n]),m.useEffect(()=>{u("amount",n&&n.amount)},[n,u]),m.useEffect(()=>{u("comment",n&&n.comment)},[n,u]);const k=m.useMemo(()=>t.map(({id:f,name:Me})=>({value:f,label:Me})),[t]),$=m.useMemo(()=>k.find(f=>(n==null?void 0:n.categoryId)===f.value),[n,k]),M=f=>{h(f)},q=f=>{c(r==="add"?{transactionDate:pe(S),amount:+f.amount,comment:f.comment,type:d,categoryId:d==="EXPENSE"?E.value||k[0].value:"063f1132-ba5d-42b4-951d-44011ca46262"}:{transactionDate:pe(S),amount:+f.amount,comment:f.comment})},P=f=>{b(f?"INCOME":"EXPENSE")};return e.createElement("div",null,e.createElement("form",{className:w.formWrapper,onSubmit:_(q)},e.createElement("h1",{className:w.header},r==="add"?"Add transaction":"Edit transaction"),r==="add"?e.createElement(Mn,{onChange:P}):e.createElement("div",null,e.createElement("ul",{className:w.checkBox},e.createElement("li",{onClick:()=>{r==="edit"&&d==="EXPENSE"||P(!0)},className:n.type==="INCOME"||d==="INCOME"?w.activeIncome:"",disabled:r==="edit"&&d==="EXPENSE"}," ","Income"),e.createElement("span",null,"/"),e.createElement("li",{onClick:()=>{r==="edit"&&d==="INCOME"||P(!1)},className:d==="EXPENSE"?w.activeExpense:"",disabled:r==="edit"&&d==="INCOME"}," ","Expense"," "))),e.createElement("div",null,d==="EXPENSE"&&e.createElement("div",{className:w.inputContainer},e.createElement(qe,{name:"category",options:k,defaultValue:$||k[0],onChange:M,isDisabled:r==="edit"}),g.category&&e.createElement("span",null,g.category.message)),e.createElement("div",{className:w.boxDate},e.createElement(he,{className:w.incomeInput,name:"amount",placeholder:"0.00",errors:g,register:o}),e.createElement("div",{className:w.inputContainer},e.createElement(ze,{className:w.customInput,selected:n?n.transactionDate:S,onChange:f=>{u("transactionDate",f),F(f)}}),g.transactionDate&&e.createElement("span",null,g.transactionDate.message))),e.createElement(he,{className:w.comment,name:"comment",placeholder:"Comment",errors:g,register:o}),e.createElement("div",{className:w.btnBox},e.createElement("button",{className:w.btn},r==="add"?"ADD":"EDIT"),e.createElement("button",{type:"button",onClick:a,className:w.btn},"CANCEL")))))}function Xn({categories:n,editContent:t,toggle:a}){const r=x(),c=o=>{r(Q({content:{...o},id:t.id})).unwrap().then(_=>{B.success("Changed!"),a()}).catch(_=>{B.error("Credentials is not valid!")})};return e.createElement(Re,{toggle:a,content:t.content,categories:n,onDataSubmit:c,typeForm:"edit"})}function Yn({categories:n,toggle:t}){const a=x(),r=c=>{a(G(c)).unwrap().then(()=>{B.success("Transaction was successfully added"),t()}).catch(o=>{B.error("Credentials is not valid!")})};return e.createElement(Re,{categories:n,onDataSubmit:r,toggle:t,typeForm:"add"})}const Jn=()=>{const{isOpen:n,toggle:t}=xe(),[a,r]=m.useState(""),c=x();m.useEffect(()=>{c(j())},[c]),m.useEffect(()=>{c(A())},[c]);const o=N(cn),_=N(ke),{isBigScreenOrTablet:g,isMobile:u}=le(),E=(d,b,S)=>{t(),r({content:d,id:b,name:S})},h=()=>{t(),r(null)};return e.createElement("section",{className:y.transactions_section},e.createElement("div",{className:y.transactions_container},u&&e.createElement("ul",{className:y.transactions_list},o.length>0?o.map(d=>e.createElement(ge,{handleEditItem:E,key:d.id,transaction:d})):e.createElement("div",{className:y.empty_transactions},"No transactions")),g&&e.createElement(e.Fragment,null,o.length>0?e.createElement("table",{className:y.transactions_table},e.createElement("thead",null,e.createElement("tr",{className:y.transaction_row_head},e.createElement("th",null,"Date"),e.createElement("th",{style:{textAlign:"center"}},"Type"),e.createElement("th",null,"Category"),e.createElement("th",null,"Comment"),e.createElement("th",{style:{textAlign:"right"}},"Sum"),e.createElement("th",null))),e.createElement("tbody",{className:y.table_body},o.map(d=>e.createElement(ge,{handleEditItem:E,key:d.id,transaction:d})))):e.createElement(e.Fragment,null,e.createElement("table",{className:y.transactions_table},e.createElement("thead",null,e.createElement("tr",{className:y.transaction_row_head},e.createElement("th",null,"Date"),e.createElement("th",{style:{textAlign:"center"}},"Type"),e.createElement("th",null,"Category"),e.createElement("th",null,"Comment"),e.createElement("th",{style:{textAlign:"right"}},"Sum"),e.createElement("th",null)))),e.createElement("div",{className:y.empty_transactions},"No transactions"))),e.createElement("button",{onClick:()=>h(),className:y.btn_add}," ",e.createElement("svg",{className:y.icon_plus},e.createElement("use",{xlinkHref:`${Ie}#icon-plus`})))),n&&e.createElement(Ce,{closeModal:t},a?e.createElement(Xn,{editContent:a,categories:_,toggle:t}):e.createElement(Yn,{categories:_,toggle:t})))},De=C("currency/fetchCurrencyRate",async()=>{const n=localStorage.getItem("currencyRate"),t=localStorage.getItem("lastFetchTime");if(n&&t&&(new Date().getTime()-t)/(1e3*60*60)<1)return JSON.parse(n);try{const a=await fe.get("https://api.monobank.ua/bank/currency");return localStorage.setItem("currencyRate",JSON.stringify(a.data)),localStorage.setItem("lastFetchTime",new Date().getTime().toString()),a.data}catch(a){console.error("Помилка при виконанні запиту до Monobank:",a)}}),Kn={usdRate:null,eurRate:null,lastFetchTime:null},Le=ae({name:"currency",initialState:Kn,selectors:{selectUsdRate:n=>n.usdRate,selectEurRate:n=>n.eurRate,selectLastFetchTime:n=>n.lastFetchTime},extraReducers:n=>{n.addCase(De.fulfilled,(t,{payload:a})=>{t.usdRate=a.find(r=>r.currencyCodeA===840&&r.currencyCodeB===980),t.eurRate=a.find(r=>r.currencyCodeA===978&&r.currencyCodeB===980),t.lastFetchTime=new Date().getTime().toString()})}}),Zn=Le.reducer,{selectUsdRate:ea,selectEurRate:ta,selectLastFetchTime:na}=Le.selectors,aa="_wrapper_d2ubo_14",sa="_title_d2ubo_49",ra="_row_d2ubo_79",ca="_titleItem_d2ubo_97",oa="_rowItem_d2ubo_98",la="_vector_d2ubo_104",ia="_image_d2ubo_109",ma="_secondimage_d2ubo_132",ua="_smallnumeur_d2ubo_148",da="_smallnumusd_d2ubo_158",p={wrapper:aa,title:sa,row:ra,titleItem:ca,rowItem:oa,vector:la,image:ia,secondimage:ma,smallnumeur:ua,smallnumusd:da};function _a(){const n=x(),t=N(ea),a=N(ta),r=N(na),{isDesktopOrLaptop:c,isBigScreen:o,isTabletOrMobile:_,isRetina:g}=le();let u="../../img/images/currency_mobile.webp",E="../../img/images/line_desc_mob_1x.webp";return window.devicePixelRatio>=2?c||o?(u="../../img/images/currency_desk@2x.webp",E="../../img/images/line_desc_2x.webp"):_&&(u="../../img/images/currency_tablet@2x.webp",E="../../img/images/line_desc_tab_2x.webp"):c||o?(u="../../img/images/currency_desk.webp",E="../../img/images/line_desc_1x.webp"):_&&(u="../../img/images/currency_tablet.webp",E="../../img/images/line_desc_tab_1x.webp"),m.useEffect(()=>{(new Date().getTime()-r)/(1e3*60*60)>1&&n(De())},[n,r]),e.createElement("div",{className:p.wrapper},e.createElement("div",{className:p.secondwrapper},e.createElement("ul",{className:p.title},e.createElement("li",{className:p.titleItem},"Currency"),e.createElement("li",{className:p.titleItem},"Purchase"),e.createElement("li",{className:p.titleItem},"Sale")),t&&e.createElement("ul",{className:p.row},e.createElement("li",{className:p.rowItem},"USD"),e.createElement("li",{className:p.rowItem},t.rateBuy),e.createElement("li",{className:p.rowItem},t.rateSell)),a&&e.createElement("ul",{className:p.row},e.createElement("li",{className:p.rowItem},"EUR"),e.createElement("li",{className:p.rowItem},a.rateBuy),e.createElement("li",{className:p.rowItem},a.rateSell)),c&&e.createElement(e.Fragment,null,e.createElement("p",{className:p.smallnumeur}," ",a.rateBuy),e.createElement("p",{className:p.smallnumusd}," ",t.rateBuy)),e.createElement("img",{className:p.image,src:u,alt:"Currency rate"}),e.createElement("img",{className:p.secondimage,src:E,alt:"Currency rate"})))}const Be=()=>e.createElement(_a,null),ga=()=>{const n=Se().windowWidth,t=x();return m.useEffect(()=>{t(j())},[t]),m.useEffect(()=>{t(A())},[t]),e.createElement(e.Fragment,null,n>=768&&e.createElement(Be,null),e.createElement(Jn,null))},Ea="_loaderWrapper_1hccn_1",pa="_loader_1hccn_1",ha="_spinner_1hccn_1",ba="_loaderName_1hccn_34",ne={loaderWrapper:Ea,loader:pa,spinner:ha,loaderName:ba},be=()=>e.createElement("div",{className:ne.loaderWrapper},e.createElement("div",{className:ne.loader},e.createElement("span",{className:ne.loaderName}))),fa=()=>e.createElement("h2",null,"Statistics");function wa(){const n=N(Y),t=N(ot),a=x();return m.useEffect(()=>{a(U())},[a]),t?e.createElement(be,null):e.createElement(e.Fragment,null,e.createElement(m.Suspense,{fallback:e.createElement(be,null)},e.createElement(Ve,null,e.createElement(I,{path:"/",element:e.createElement(Tt,null)},e.createElement(I,{index:!0,element:e.createElement(ue,{component:tn,redirectTo:"/home"})}),e.createElement(I,{path:"register",element:e.createElement(ue,{component:an,redirectTo:"/home"})}),e.createElement(I,{path:"/home",element:e.createElement(K,{component:ga,redirectTo:"/"})}),e.createElement(I,{path:"/statistics",element:e.createElement(K,{component:fa,redirectTo:"/"})}),e.createElement(I,{path:"/currency",element:e.createElement(K,{component:Be,redirectTo:"/"})})),e.createElement(I,{path:"*",element:n?e.createElement(X,{to:"/home"}):e.createElement(X,{to:"/"})}))))}const ya={key:"auth",version:1,storage:Ne,whitelist:["token"]},Na={key:"root",storage:Ne},$e=Ue({reducer:{auth:me(ya,rt),transactions:rn,currency:me(Na,Zn)},middleware:n=>n({serializableCheck:{ignoredActions:[He,Ge,Qe,Xe,Ye,Je]}}),devTools:!1}),va=Ke($e);Ze.createRoot(document.getElementById("root")).render(e.createElement(et,null,e.createElement(tt,{store:$e},e.createElement(nt,{loading:null,persistor:va},e.createElement(wa,null),e.createElement(at,{autoClose:1500})))));
//# sourceMappingURL=commonHelpers.js.map
