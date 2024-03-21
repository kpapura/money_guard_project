import{R as r,r as R,A,a as V,u as W,N as g,o as N,b as _,c,d as b,e as u,f as v,g as I,O as M,h as G,i as $,j as E,k,l as y,p as B,m as D,n as z,q as U,F as H,s as K,P as Q,t as Y,v as J,w as X,x as Z,B as ee,y as te,z as re,Q as se}from"./assets/vendor-64bbee20.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function e(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(n){if(n.ep)return;n.ep=!0;const o=e(n);fetch(n.href,o)}})();const ae="_form_jpfz7_1",ne={form:ae},S=({register:s,errors:t,name:e,placeholder:a})=>r.createElement("label",null,r.createElement("input",{autoComplete:e,...s(e),type:"text",placeholder:a}),(t==null?void 0:t[e])&&r.createElement("span",null,t[e].message)),oe=()=>r.createElement("div",null,"ProgressBar"),C=({register:s,errors:t,name:e,placeholder:a,getValues:n})=>{const[o,i]=R.useState("password"),[d,m]=R.useState("");function q(p){m(p.target.value)}return r.createElement("label",null,r.createElement("input",{autoComplete:e,...s(e,{required:"Password is required",validate:p=>{n("password")}}),type:o,placeholder:a,onChange:q})," ",r.createElement("div",{onClick:()=>{i(o==="password"?"text":"password")}},o==="password"?r.createElement(A,null):r.createElement(V,null)),(t==null?void 0:t[e])&&r.createElement("span",null,t[e].message),e==="passwordConfirmation"&&r.createElement(oe,{password:d}))},P=({onDataSubmit:s,formType:t,schema:e})=>{const{register:a,reset:n,handleSubmit:o,formState:{errors:i}}=W({resolver:N(e)}),d=m=>{delete m.passwordConfirmation,s(m),console.log(m),n()};return r.createElement("form",{className:ne.form,onSubmit:o(d)},t==="register"&&r.createElement(S,{register:a,errors:i,name:"username",placeholder:"Name"}),r.createElement(S,{register:a,errors:i,name:"email",placeholder:"Email"}),r.createElement(C,{register:a,errors:i,name:"password",placeholder:"Password"}),t==="register"&&r.createElement(r.Fragment,null,r.createElement(C,{register:a,errors:i,name:"passwordConfirmation",placeholder:"Confirm password"})),t==="login"?r.createElement(r.Fragment,null,r.createElement(g,{to:"/login",onClick:o(d)},"LOG IN"),r.createElement(g,{to:"/register"},"REGISTER")):r.createElement(r.Fragment,null,r.createElement(g,{to:"/register",onClick:o(d)},"REGISTER"),r.createElement(g,{to:"/login"},"LOGIN")),r.createElement("button",{hidden:!0}))},l=_.create({baseURL:"https://wallet.b.goit.study/api/"}),T=s=>{l.defaults.headers.common.Authorization=`Bearer ${s}`},le=()=>{l.defaults.headers.common.Authorization=""},h=c("register",async(s,t)=>{try{const{data:e}=await l.post("auth/sign-up",s);return T(e.token),console.log(e),e}catch(e){return t.rejectWithValue(e.message)}}),f=c("login",async(s,t)=>{try{const{data:e}=await l.post("auth/sign-in",s);return T(e.token),console.log(e),e}catch(e){return t.rejectWithValue(e.message)}}),ie=c("logout",async(s,t)=>{try{const{data:e}=await l.delete("auth/sign-out");return console.log(e),le(),e}catch(e){return t.rejectWithValue(e.message)}}),w=c("refresh",async(s,t)=>{const e=t.getState().auth.token;if(!e)return t.rejectWithValue("Token is not exist!");try{T(e);const{data:a}=await l.get("users/current");return a}catch(a){return t.rejectWithValue(a.message)}}),ce=b({password:u().required().min(6,"Must be more then 6 symbols").max(12,"Must be less then 12 symbols"),email:u().required().email("Email is not valid")}).required(),j=()=>{const s=v(),t=I(),e=n=>{t(f(n)).unwrap().then(()=>{s("/")}).catch(o=>{console.log(o.message)})},a={email:"tomato9@gmail.com",password:"0000000"};return r.createElement("div",null,r.createElement(P,{formType:"login",onDataSubmit:e,values:a,schema:ce}))},ue=()=>r.createElement("main",null,r.createElement(j,null),r.createElement(M,null)),de=b({username:u().required(),password:u().required().min(6,"Must be more then 6 symbols").max(12,"Must be less then 12 symbols"),email:u().required().email("Email is not valid"),passwordConfirmation:u().oneOf([G("password"),null],"Passwords must match")}).required(),me=()=>{const s=I(),t=v(),e=a=>{s(h(a)),t("/login")};return r.createElement("div",null,r.createElement(P,{onDataSubmit:e,formType:"register",schema:de}))},ge=c("fetchTransactionsData",async(s,t)=>{try{const{data:e}=await l.get("transactions");return e}catch(e){return t.rejectWithValue(e.message)}}),he=c("deleteTransaction",async(s,t)=>{try{const{data:e}=await l.delete(`transactions/${s}`);return e.id}catch(e){return t.rejectWithValue(e.message)}}),fe=c("addTransaction",async(s,t)=>{try{const{data:e}=await l.post("transactions",s);return e}catch(e){return t.rejectWithValue(e.message)}}),pe=c("editTransaction",async(s,t)=>{try{const{data:e}=await l.patch(`/transactions/${s.id}`,s);return e}catch(e){return t.rejectWithValue(e.message)}}),Ee=c("fetchTransactionCategories",async(s,t)=>{try{const{data:e}=await l.get("transaction-categories");return e}catch(e){return t.rejectWithValue(e.message)}});c("fetchTransactionSummaryController",async(s,t)=>{try{const{data:e}=await l.get("transactions-summary");return e}catch(e){return t.rejectWithValue(e.message)}});function ye(){return r.createElement("div",null,r.createElement("h1",null,"Hello"),r.createElement($,null,r.createElement(E,{path:"/",element:r.createElement(ue,null)},r.createElement(E,{path:"login",element:r.createElement(j,null)}),r.createElement(E,{path:"register",element:r.createElement(me,null)}))))}const L={user:{username:"",email:""},token:null,loading:!1,error:!1,isLoggedIn:!1,isRefresh:!1},x=k({name:"auth",initialState:L,selectors:{selectUser:s=>s.username,selectIsLoggedIn:s=>s.isLoggedIn,selectToken:s=>s.isLoggedIn,selectIsRefresh:s=>s.isRefresh},extraReducers:s=>{s.addCase(ie.fulfilled,t=>L).addCase(w.fulfilled,(t,{payload:e})=>{t.user.username=e.username,t.user.email=e.email,t.isLoggedIn=!0,t.isRefresh=!1}).addMatcher(y(h.fulfilled,f.fulfilled),(t,{payload:e})=>{t.user.username=e.user.username,t.user.email=e.user.email,t.user.password=e.user.password,t.token=e.token,t.isLoggedIn=!0}).addMatcher(y(h.pending,f.pending,w.pending),t=>{t.loading=!0,t.error=null,t.isRefresh=!0}).addMatcher(y(h.rejected,f.rejected,w.rejected),(t,{payload:e})=>{t.error=e,t.loading=!1,t.isRefresh=!1})}}),we=x.reducer;x.selectors;const Te={transactionsList:[],transactionCategories:[],transactionSummaryController:null,loading:!1,error:!1},F=k({name:"transactions",initialState:Te,selectors:{selectTransactions:s=>s.transactionsList,selectIsLoading:s=>s.loading,selectIsError:s=>s.error},extraReducers:s=>{s.addCase(ge.fulfilled,(t,{payload:e})=>{t.transactionsList=e,t.loading=!1}).addCase(he.fulfilled,(t,{payload:e})=>{t.transactionsList=t.transactionsList.filter(a=>a.id!==e),t.loading=!1}).addCase(fe.fulfilled,(t,{payload:e})=>{t.transactionsList.push(e),t.loading=!1}).addCase(pe.fulfilled,(t,{payload:e})=>{const a=t.transactionsList.findIndex(n=>n.id===e.id);t.transactionsList.splice(a,1,e),t.loading=!1}).addCase(Ee.fulfilled,(t,{payload:e})=>{t.transactionCategories=e,t.loading=!1})}}),Re=F.reducer;F.selectors;const Se={key:"auth",version:1,storage:U,whitelist:["token"]},Ce=B(Se,we),O=D({reducer:{auth:Ce,transactions:Re},middleware:s=>s({serializableCheck:{ignoredActions:[H,K,Q,Y,J,X]}}),devTools:!1}),Le=z(O);Z.createRoot(document.getElementById("root")).render(r.createElement(r.StrictMode,null,r.createElement(ee,null,r.createElement(te,{store:O},r.createElement(re,{loading:null,persistor:Le},r.createElement(ye,null),r.createElement(se,{autoClose:1500}))))));
//# sourceMappingURL=commonHelpers.js.map
