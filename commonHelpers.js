import{R as e,_ as Ne,r as i,A as Ce,a as xe,u as ae,N as X,o as ve,b as se,c as f,d as re,e as T,f as V,g as b,h as G,i as A,j as Se,k as P,O as Te,l as ke,m as S,S as Ie,D as Re,B as j,n as De,p as $,q as Le,s as J,F as $e,t as Me,P as Oe,v as Be,w as Pe,x as je,y as Ae,z as ce,C as Fe,E as qe,G as We,H as Ve,Q as Ge}from"./assets/vendor-794a36dc.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const c of r)if(c.type==="childList")for(const l of c.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function a(r){const c={};return r.integrity&&(c.integrity=r.integrity),r.referrerPolicy&&(c.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?c.credentials="include":r.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(r){if(r.ep)return;r.ep=!0;const c=a(r);fetch(r.href,c)}})();const ze="_form_jpfz7_1",He={form:ze},K=({register:t,errors:n,name:a,placeholder:s})=>e.createElement("label",null,e.createElement("input",{autoComplete:a,...t(a),type:"text",placeholder:s}),(n==null?void 0:n[a])&&e.createElement("span",null,n[a].message)),Ue=({password:t})=>e.createElement(e.Fragment,null,e.createElement(Ne,{password:t,minLength:6,scoreWordStyle:{display:"none"}})),Y=({register:t,errors:n,name:a,placeholder:s,getValues:r})=>{const[c,l]=i.useState("password"),[m,u]=i.useState("");function h(w){u(w.target.value)}return e.createElement("label",null,e.createElement("input",{autoComplete:a,...t(a,{required:"Password is required",validate:w=>{r("password")}}),type:c,placeholder:s,onChange:h})," ",e.createElement("div",{onClick:()=>{l(c==="password"?"text":"password")}},c==="password"?e.createElement(Ce,null):e.createElement(xe,null)),(n==null?void 0:n[a])&&e.createElement("span",null,n[a].message),a==="passwordConfirmation"&&e.createElement(Ue,{password:m}))},oe=({onDataSubmit:t,formType:n,schema:a})=>{const{register:s,reset:r,handleSubmit:c,formState:{errors:l}}=ae({resolver:ve(a)}),m=u=>{delete u.passwordConfirmation,t(u),console.log(u),r()};return e.createElement("form",{className:He.form,onSubmit:c(m)},n==="register"&&e.createElement(K,{register:s,errors:l,name:"username",placeholder:"Name"}),e.createElement(K,{register:s,errors:l,name:"email",placeholder:"Email"}),e.createElement(Y,{register:s,errors:l,name:"password",placeholder:"Password"}),n==="register"&&e.createElement(e.Fragment,null,e.createElement(Y,{register:s,errors:l,name:"passwordConfirmation",placeholder:"Confirm password"})),n==="login"?e.createElement(e.Fragment,null,e.createElement("button",{type:"submit"},"LOG IN"),e.createElement(X,{to:"/register"},"REGISTER")):e.createElement(e.Fragment,null,e.createElement("button",{type:"submit"},"REGISTER"),e.createElement(X,{to:"/login"},"LOGIN")),e.createElement("button",{hidden:!0}))},g=se.create({baseURL:"https://wallet.b.goit.study/api/"}),z=t=>{g.defaults.headers.common.Authorization=`Bearer ${t}`},Qe=()=>{g.defaults.headers.common.Authorization=""},M=f("register",async(t,n)=>{try{const{data:a}=await g.post("auth/sign-up",t);return z(a.token),a}catch(a){return n.rejectWithValue(a.message)}}),O=f("login",async(t,n)=>{try{const{data:a}=await g.post("auth/sign-in",t);return z(a.token),a}catch(a){return n.rejectWithValue(a.message)}}),le=f("logout",async(t,n)=>{try{const{data:a}=await g.delete("auth/sign-out");return Qe(),a}catch(a){return n.rejectWithValue(a.message)}}),B=f("refresh",async(t,n)=>{const a=n.getState().auth.token;if(!a)return n.rejectWithValue("Token is not exist!");try{z(a);const{data:s}=await g.get("users/current");return s}catch(s){return n.rejectWithValue(s.message)}}),Xe=re({password:T().required().min(6,"Must be more then 6 symbols").max(12,"Must be less then 12 symbols"),email:T().required().email("Email is not valid")}).required(),Je=()=>{const t=V(),n=b(),a=r=>{n(O(r)).unwrap().then(()=>{t("/")}).catch(c=>{console.log(c.message)})},s={email:"tomato9@gmail.com",password:"0000000"};return e.createElement("div",null,e.createElement(oe,{formType:"login",onDataSubmit:a,values:s,schema:Xe}))},Ke="_wrap_1nzyu_1",Ye="_logo_1nzyu_5",Ze="_text_1nzyu_14",F={wrap:Ke,logo:Ye,text:Ze},q={user:{username:"",email:""},token:null,loading:!1,error:!1,isLoggedIn:!1,isRefresh:!1,balance:0},H=G({name:"auth",initialState:q,selectors:{selectUser:t=>t.user,selectIsLoggedIn:t=>t.isLoggedIn,selectToken:t=>t.isLoggedIn,selectIsRefresh:t=>t.isRefresh,selectBalance:t=>t.balance},reducers:{logout:t=>q},extraReducers:t=>{t.addCase(le.fulfilled,n=>q).addCase(B.fulfilled,(n,{payload:a})=>{n.user.username=a.username,n.user.email=a.email,n.balance=a.balance,n.isLoggedIn=!0,n.isRefresh=!1,n.loading=!1}).addMatcher(A(M.fulfilled,O.fulfilled),(n,{payload:a})=>{n.user.username=a.user.username,n.user.email=a.user.email,n.user.password=a.user.password,n.token=a.token,n.isLoggedIn=!0,n.loading=!1}).addMatcher(A(M.pending,O.pending,B.pending),n=>{n.loading=!0,n.error=null,n.isRefresh=!0}).addMatcher(A(M.rejected,O.rejected,B.rejected),(n,{payload:a})=>{n.error=a,n.loading=!1,n.isRefresh=!1})}}),et=H.reducer,{selectIsLoggedIn:Cn,selectUser:tt,selectToken:xn,selectIsRefresh:vn,selectBalance:Sn}=H.selectors,{logout:nt}=H.actions,at=({closeModal:t})=>{const n=V(),a=b(),s=()=>{a(le()),a(nt()),t(),n("/login")};return e.createElement("div",{className:F.wrap},e.createElement("a",{href:"",className:F.logo},e.createElement("svg",{width:"36",height:"36"},e.createElement("use",{href:"../../img/sprite.svg#icon-logo"})),"Money Guard"),e.createElement("p",{className:F.text},"Are you sure you want to log out?"),e.createElement("button",{className:"modalButtonColor",onClick:s},"Logout"),e.createElement("button",{className:"modalButton",onClick:t},"Cancel"))},st="_modalWrapper_4issq_1",rt="_modalContent_4issq_12",ct="_closeButton_4issq_24",W={modalWrapper:st,modalContent:rt,closeButton:ct},ot=document.querySelector("#modal"),ie=({closeModal:t,children:n})=>{const a=i.useCallback(r=>{r.key==="Escape"&&t()},[t]);i.useEffect(()=>(document.addEventListener("keydown",a),()=>{document.removeEventListener("keydown",a)}),[t,a]);const s=r=>{r.target===r.currentTarget&&t()};return Se.createPortal(e.createElement("div",{onClick:s,className:W.modalWrapper},e.createElement("div",{className:W.modalContent},e.createElement("button",{className:W.closeButton,onClick:t},e.createElement("svg",{width:"16",height:"16"},e.createElement("use",{href:"../../img/sprite.svg#icon-close"}))),n)),ot)},me=()=>{const[t,n]=i.useState(!1);return{isOpen:t,close:()=>n(!1),open:()=>n(!0),toggle:()=>n(c=>!c)}},lt="_header_1snvw_1",it="_hederContainer_1snvw_9",mt="_logo_1snvw_17",ut="_wrap_1snvw_27",dt="_user_1snvw_32",_t="_button_1snvw_38",Et="_icon_1snvw_52",gt="_heder_1snvw_9",x={header:lt,hederContainer:it,logo:mt,wrap:ut,user:dt,button:_t,icon:Et,heder:gt},ht=()=>{const{isOpen:t,toggle:n}=me(),a=P(tt),s=a.email.indexOf("@"),r=a.email.slice(0,s);return e.createElement("header",{className:x.header},e.createElement("div",{className:x.hederContainer},e.createElement("a",{href:"",className:x.logo},e.createElement("svg",{width:"24",height:"23"},e.createElement("use",{href:"../../img/sprite.svg#icon-logo"})),"Money Guard"),e.createElement("div",{className:x.wrap}," ",e.createElement("p",{className:x.user},r),e.createElement("button",{className:x.button,onClick:n},e.createElement("svg",{width:"18",height:"18",className:x.icon},e.createElement("use",{href:"../../img/sprite.svg#icon-exit"}))," ","Exit")),t&&e.createElement(ie,{closeModal:n},e.createElement(at,{closeModal:n}))))},pt=()=>e.createElement(e.Fragment,null,e.createElement(ht,null),e.createElement(Te,null)),ft=re({username:T().required(),password:T().required().min(6,"Must be more then 6 symbols").max(12,"Must be less then 12 symbols"),email:T().required().email("Email is not valid"),passwordConfirmation:T().oneOf([ke("password"),null],"Passwords must match")}).required(),bt=()=>{const t=b(),n=V(),a=s=>{t(M(s)),n("/login")};return e.createElement("div",null,e.createElement(oe,{onDataSubmit:a,formType:"register",schema:ft}))},U=f("fetchTransactionsData",async(t,n)=>{try{const{data:a}=await g.get("transactions");return a}catch(a){return n.rejectWithValue(a.message)}}),ue=f("deleteTransaction",async(t,n)=>{try{return await g.delete(`transactions/${t}`),t}catch(a){return n.rejectWithValue(a.message)}}),de=f("addTransaction",async(t,n)=>{try{const{data:a}=await g.post("transactions",t);return a}catch(a){return n.rejectWithValue(a.message)}}),_e=f("editTransaction",async(t,n)=>{try{const{data:a}=await g.patch(`/transactions/${t.id}`,t.content);return a}catch(a){return n.rejectWithValue(a.message)}}),Q=f("fetchTransactionCategories",async(t,n)=>{try{const{data:a}=await g.get("transaction-categories");return a}catch(a){return n.rejectWithValue(a.message)}});f("fetchTransactionSummaryController",async(t,n)=>{try{const{data:a}=await g.get("transactions-summary");return a}catch(a){return n.rejectWithValue(a.message)}});const yt={transactionsList:[],transactionCategories:[],transactionSummaryController:null,loading:!1,error:!1},Ee=G({name:"transactions",initialState:yt,selectors:{selectTransactions:t=>t.transactionsList,selectIsLoading:t=>t.loading,selectIsError:t=>t.error,selectTransactionCategories:t=>t.transactionCategories},extraReducers:t=>{t.addCase(U.fulfilled,(n,{payload:a})=>{n.transactionsList=a,n.loading=!1}).addCase(ue.fulfilled,(n,{payload:a})=>{n.transactionsList=n.transactionsList.filter(s=>s.id!==a),n.loading=!1}).addCase(de.fulfilled,(n,{payload:a})=>{n.transactionsList.push(a),n.loading=!1}).addCase(_e.fulfilled,(n,{payload:a})=>{const s=n.transactionsList.findIndex(r=>r.id===a.id);n.transactionsList.splice(s,1,a),n.loading=!1}).addCase(Q.fulfilled,(n,{payload:a})=>{n.transactionCategories=a,n.loading=!1})}}),wt=Ee.reducer,{selectTransactions:Nt,selectIsLoading:Tn,selectIsError:kn,selectTransactionCategories:ge}=Ee.selectors,Ct="_transaction_item_2loug_1",xt="_income_border_2loug_6",vt="_expense_border_2loug_10",St="_income_text_2loug_14",Tt="_expense_text_2loug_19",kt="_transactions_table_mobile_2loug_24",It="_transaction_colum_2loug_30",Rt="_transaction_first_column_2loug_34",Dt="_transaction_row_mobile_2loug_38",Lt="_transaction_row_2loug_38",$t="_transactions_table_2loug_24",Mt="_btn_delete_2loug_61",Ot="_btn_edit_2loug_76",Bt="_btn_wrapper_2loug_86",Pt="_icon_edit_2loug_93",o={transaction_item:Ct,income_border:xt,expense_border:vt,income_text:St,expense_text:Tt,transactions_table_mobile:kt,transaction_colum:It,transaction_first_column:Rt,transaction_row_mobile:Dt,transaction_row:Lt,transactions_table:$t,btn_delete:Mt,btn_edit:Ot,btn_wrapper:Bt,icon_edit:Pt},he="/money_guard_project/assets/sprite-d3dedbbb.svg",pe=()=>{const t=S.useMediaQuery({query:"(min-width: 768px)"}),n=S.useMediaQuery({query:"(min-width: 1280px)"}),a=S.useMediaQuery({query:"(max-width: 768px)"}),s=S.useMediaQuery({query:"(max-width: 767px)"}),r=S.useMediaQuery({query:"(orientation: portrait)"}),c=S.useMediaQuery({query:"(min-resolution: 2dppx)"});return{isBigScreenOrTablet:t,isBigScreen:n,isMobile:s,isTabletOrMobile:a,isPortrait:r,isRetina:c}},Z=({transaction:t,handleEditItem:n})=>{const{id:a,transactionDate:s,type:r,categoryId:c,comment:l,amount:m}=t,{isBigScreenOrTablet:u,isMobile:h}=pe(),w=b(),p=P(ge);function N(I){const L=p.find(R=>R.id===I);return L?L.name:"Unknown Category"}const v=I=>{w(ue(I))},D=r.toLowerCase()==="income"?"+":"-",C=r.toLowerCase()==="income"?o.income_border:o.expense_border,k=r.toLowerCase()==="income"?o.income_text:o.expense_text;return e.createElement(e.Fragment,null,h&&e.createElement("li",{key:a,className:`${o.transaction_item} ${C}`},e.createElement("table",{className:o.transactions_table_mobile},e.createElement("tbody",null,e.createElement("tr",{className:o.transaction_row_mobile},e.createElement("td",{className:o.transaction_first_column},"Date"),e.createElement("td",null,s)),e.createElement("tr",{className:o.transaction_row_mobile},e.createElement("td",{className:o.transaction_first_column},"Type"),e.createElement("td",null,D)),e.createElement("tr",{className:o.transaction_row_mobile},e.createElement("td",{className:o.transaction_first_column},"Category"),e.createElement("td",null,N(c))),e.createElement("tr",{className:o.transaction_row_mobile},e.createElement("td",{className:o.transaction_first_column},"Comment"),e.createElement("td",null,l)),e.createElement("tr",{className:o.transaction_row_mobile},e.createElement("td",{className:o.transaction_first_column},"Sum"),e.createElement("td",{className:k},m)),e.createElement("tr",{className:o.transaction_row_mobile},e.createElement("td",null,e.createElement("button",{className:o.btn_delete,onClick:()=>v(a)},"Delete")),e.createElement("td",null,e.createElement("button",{onClick:()=>n({categoryId:c,type:r,amount:m,comment:l,transactionDate:s},a),className:o.btn_edit}," ",e.createElement("svg",{className:o.icon_edit},e.createElement("use",{xlinkHref:`${he}#icon-edit`}))," ","Edit")))))),u&&e.createElement("tr",{className:o.transaction_row},e.createElement("td",{className:o.transaction_colum},s),e.createElement("td",{className:o.transaction_colum,style:{textAlign:"center"}},D),e.createElement("td",{className:o.transaction_colum},N(c)),e.createElement("td",{className:o.transaction_colum},l),e.createElement("td",{className:`${o.transaction_colum} ${k}`,style:{textAlign:"right"}},m),e.createElement("td",{className:o.transaction_colum}," ",e.createElement("div",{className:o.btn_wrapper},e.createElement("button",{className:o.btn_edit},"Edit"),e.createElement("button",{className:o.btn_delete,onClick:()=>v(a)},"Delete")))))},jt="_transactions_section_mjcgn_1",At="_transactions_container_mjcgn_34",Ft="_transactions_table_mjcgn_75",qt="_transactions_list_mjcgn_82",Wt="_transaction_row_head_mjcgn_88",Vt="_btn_add_mjcgn_111",Gt="_icon_plus_mjcgn_126",zt="_empty_transactions_mjcgn_132",E={transactions_section:jt,transactions_container:At,transactions_table:Ft,transactions_list:qt,transaction_row_head:Wt,btn_add:Vt,icon_plus:Gt,empty_transactions:zt},Ht="_labelExpense_1gb48_13",Ut="_labelIncome_1gb48_19",Qt="_slider_1gb48_26",Xt="_round_1gb48_73",y={switch:"_switch_1gb48_1",labelExpense:Ht,labelIncome:Ut,slider:Qt,round:Xt,"transaction-switcher":"_transaction-switcher_1gb48_80"},Jt=({onChange:t})=>{const[n,a]=i.useState(!1),s=()=>{a(!n),t(!n)};return e.createElement("div",{className:y["transaction-switcher"]},e.createElement("span",{className:y.labelIncome},"Income"),e.createElement("label",{className:`${y.switch} ${n?y.income:y.expense}`},e.createElement("input",{type:"checkbox",onChange:s,checked:!n}),e.createElement("span",{className:`${y.slider} ${y.round}`})),e.createElement("span",{className:y.labelExpense},"Expense"))},Kt="_formWrapper_1kidh_1",Yt="_header_1kidh_10",Zt="_checkBox_1kidh_16",en="_boxDate_1kidh_27",tn="_incomeInput_1kidh_35",nn="_customInput_1kidh_36",an="_comment_1kidh_53",sn="_selectExpense_1kidh_54",rn="_btnBox_1kidh_72",cn="_btn_1kidh_72",on="_activeIncome_1kidh_101",ln="_activeExpense_1kidh_104",mn="_inputContainer_1kidh_108",_={formWrapper:Kt,header:Yt,checkBox:Zt,boxDate:en,incomeInput:tn,customInput:nn,comment:an,selectExpense:sn,btnBox:rn,btn:cn,activeIncome:on,activeExpense:ln,inputContainer:mn},ee=t=>t<10?"0"+t:t,te=t=>{const n=t.getFullYear(),a=ee(t.getMonth()+1),s=ee(t.getDate());return`${n}-${a}-${s}`},ne=({name:t,register:n,errors:a,placeholder:s,className:r})=>e.createElement("div",{className:_.inputContainer},e.createElement("input",{className:r,...n(t),placeholder:s}),a[t]&&e.createElement("span",null,a[t].message));function fe({content:t,categories:n,toggle:a,typeForm:s,onDataSubmit:r}){const{register:c,handleSubmit:l,formState:{errors:m},setValue:u}=ae(),[h,w]=i.useState(""),[p,N]=i.useState(""),[v,D]=i.useState(new Date);i.useEffect(()=>{N(t?t.type:"EXPENSE")},[t]),i.useEffect(()=>{u("amount",t&&t.amount)},[t,u]),i.useEffect(()=>{u("comment",t&&t.comment)},[t,u]);const C=i.useMemo(()=>n.map(({id:d,name:we})=>({value:d,label:we})),[n]),k=i.useMemo(()=>C.find(d=>(t==null?void 0:t.categoryId)===d.value),[t,C]),I=d=>{w(d)},L=d=>{r(s==="add"?{transactionDate:te(v),amount:+d.amount,comment:d.comment,type:p,categoryId:p==="EXPENSE"?h.value||C[0].value:"063f1132-ba5d-42b4-951d-44011ca46262"}:{transactionDate:te(v),amount:+d.amount,comment:d.comment})},R=d=>{N(d?"INCOME":"EXPENSE")};return e.createElement("div",null,e.createElement("form",{className:_.formWrapper,onSubmit:l(L)},e.createElement("h1",{className:_.header},s==="add"?"Add transaction":"Edit transaction"),s==="add"?e.createElement(Jt,{onChange:R}):e.createElement("div",null,e.createElement("ul",{className:_.checkBox},e.createElement("li",{onClick:()=>{s==="edit"&&p==="EXPENSE"||R(!0)},className:t.type==="INCOME"||p==="INCOME"?_.activeIncome:"",disabled:s==="edit"&&p==="EXPENSE"}," ","Income"),e.createElement("span",null,"/"),e.createElement("li",{onClick:()=>{s==="edit"&&p==="INCOME"||R(!1)},className:p==="EXPENSE"?_.activeExpense:"",disabled:s==="edit"&&p==="INCOME"}," ","Expense"," "))),e.createElement("div",null,p==="EXPENSE"&&e.createElement("div",{className:_.inputContainer},e.createElement(Ie,{name:"category",options:C,defaultValue:k||C[0],onChange:I,isDisabled:s==="edit"}),m.category&&e.createElement("span",null,m.category.message)),e.createElement("div",{className:_.boxDate},e.createElement(ne,{className:_.incomeInput,name:"amount",placeholder:"0.00",errors:m,register:c}),e.createElement("div",{className:_.inputContainer},e.createElement(Re,{className:_.customInput,selected:t?t.transactionDate:v,onChange:d=>{u("transactionDate",d),D(d)}}),m.transactionDate&&e.createElement("span",null,m.transactionDate.message))),e.createElement(ne,{className:_.comment,name:"comment",placeholder:"Comment",errors:m,register:c}),e.createElement("div",{className:_.btnBox},e.createElement("button",{className:_.btn},s==="add"?"ADD":"EDIT"),e.createElement("button",{type:"button",onClick:a,className:_.btn},"CANCEL")))))}function un({categories:t,editContent:n,toggle:a}){const s=b(),r=c=>{s(_e({content:{...c},id:n.id})).unwrap().then(l=>{j.success("Changed!"),a()}).catch(l=>{j.error("Credentials is not valid!")})};return e.createElement(fe,{toggle:a,content:n.content,categories:t,onDataSubmit:r,typeForm:"edit"})}function dn({categories:t,toggle:n}){const a=b(),s=r=>{a(de(r)).unwrap().then(()=>{j.success("Transaction was successfully added"),n()}).catch(c=>{j.error("Credentials is not valid!")})};return e.createElement(fe,{categories:t,onDataSubmit:s,toggle:n,typeForm:"add"})}const _n=()=>{const{isOpen:t,toggle:n}=me(),[a,s]=i.useState(""),r=b();i.useEffect(()=>{r(U())},[r]),i.useEffect(()=>{r(Q())},[r]);const c=P(Nt),l=P(ge),{isBigScreenOrTablet:m,isMobile:u}=pe();return e.createElement("section",{className:E.transactions_section},e.createElement("div",{className:E.transactions_container},u&&e.createElement("ul",{className:E.transactions_list},c.length>0?c.map(h=>e.createElement(Z,{key:h.id,transaction:h})):e.createElement("div",{className:E.empty_transactions},"No transactions")),m&&e.createElement(e.Fragment,null,c.length>0?e.createElement("table",{className:E.transactions_table},e.createElement("thead",null,e.createElement("tr",{className:E.transaction_row_head},e.createElement("th",null,"Date"),e.createElement("th",{style:{textAlign:"center"}},"Type"),e.createElement("th",null,"Category"),e.createElement("th",null,"Comment"),e.createElement("th",{style:{textAlign:"right"}},"Sum"),e.createElement("th",null))),e.createElement("tbody",{className:E.table_body},c.map(h=>e.createElement(Z,{key:h.id,transaction:h})))):e.createElement(e.Fragment,null,e.createElement("table",{className:E.transactions_table},e.createElement("thead",null,e.createElement("tr",{className:E.transaction_row_head},e.createElement("th",null,"Date"),e.createElement("th",{style:{textAlign:"center"}},"Type"),e.createElement("th",null,"Category"),e.createElement("th",null,"Comment"),e.createElement("th",{style:{textAlign:"right"}},"Sum"),e.createElement("th",null)))),e.createElement("div",{className:E.empty_transactions},"No transactions"))),e.createElement("button",{className:E.btn_add}," ",e.createElement("svg",{className:E.icon_plus},e.createElement("use",{xlinkHref:`${he}#icon-plus`})))),t&&e.createElement(ie,{closeModal:n},a?e.createElement(un,{editContent:a,categories:l,toggle:n}):e.createElement(dn,{categories:l,toggle:n})))},En=()=>{const t=b();return i.useEffect(()=>{t(U())},[t]),i.useEffect(()=>{t(Q())},[t]),e.createElement(_n,null)};function gn(){const t=b();return i.useEffect(()=>{t(B())},[t]),e.createElement("div",null,e.createElement("h1",null,"Hello"),e.createElement(De,null,e.createElement($,{path:"/",element:e.createElement(pt,null)},e.createElement($,{path:"login",element:e.createElement(Je,null)}),e.createElement($,{path:"register",element:e.createElement(bt,null)}),e.createElement($,{path:"home",element:e.createElement(En,null)}))))}const hn=f("currency/fetchCurrencyRate",async()=>{const t=localStorage.getItem("currencyRate"),n=localStorage.getItem("lastFetchTime");if(t&&n&&(new Date().getTime()-n)/(1e3*60*60)<1)return JSON.parse(t);try{const a=await se.get("https://api.monobank.ua/bank/currency");return localStorage.setItem("currencyRate",JSON.stringify(a.data)),localStorage.setItem("lastFetchTime",new Date().getTime().toString()),a.data}catch(a){console.error("Помилка при виконанні запиту до Monobank:",a)}}),pn={usdRate:null,eurRate:null,lastFetchTime:null},be=G({name:"currency",initialState:pn,selectors:{selectUsdRate:t=>t.usdRate,selectEurRate:t=>t.eurRate,selectLastFetchTime:t=>t.lastFetchTime},extraReducers:t=>{t.addCase(hn.fulfilled,(n,{payload:a})=>{n.usdRate=a.find(s=>s.currencyCodeA===840&&s.currencyCodeB===980),n.eurRate=a.find(s=>s.currencyCodeA===978&&s.currencyCodeB===980),n.lastFetchTime=new Date().getTime().toString()})}}),fn=be.reducer;be.selectors;const bn={key:"auth",version:1,storage:ce,whitelist:["token"]},yn={key:"root",storage:ce},ye=Le({reducer:{auth:J(bn,et),transactions:wt,currency:J(yn,fn)},middleware:t=>t({serializableCheck:{ignoredActions:[$e,Me,Oe,Be,Pe,je]}}),devTools:!1}),wn=Ae(ye);Fe.createRoot(document.getElementById("root")).render(e.createElement(qe,null,e.createElement(We,{store:ye},e.createElement(Ve,{loading:null,persistor:wn},e.createElement(gn,null),e.createElement(Ge,{autoClose:1500})))));
//# sourceMappingURL=commonHelpers.js.map
