import{c as l,a as _,u as v,R as n,b,i,r as d,d as P,e as I,O as A,p as M,f as V,g as W,h as x,F as U,j as $,P as B,k as F,l as G,m as q,n as z,o as H,q as J,Q as K}from"./assets/vendor-89a721cd.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const c of a)if(c.type==="childList")for(const m of c.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&s(m)}).observe(document,{childList:!0,subtree:!0});function t(a){const c={};return a.integrity&&(c.integrity=a.integrity),a.referrerPolicy&&(c.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?c.credentials="include":a.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(a){if(a.ep)return;a.ep=!0;const c=t(a);fetch(a.href,c)}})();const Q=l("currency/fetchCurrencyRate",async()=>{const r=localStorage.getItem("currencyRate"),e=localStorage.getItem("lastFetchTime");if(r&&e&&(new Date().getTime()-e)/(1e3*60*60)<1)return JSON.parse(r);try{const t=await _.get("https://api.monobank.ua/bank/currency");return localStorage.setItem("currencyRate",JSON.stringify(t.data)),localStorage.setItem("lastFetchTime",new Date().getTime().toString()),t.data}catch(t){console.error("Помилка при виконанні запиту до Monobank:",t)}}),C={};function Y(){const r=v(s=>s.currency.currencyRate);if(!r)return n.createElement("p",null,"Loading...");const e=r.find(s=>s.currencyCodeA===840&&s.currencyCodeB===980),t=r.find(s=>s.currencyCodeA===978&&s.currencyCodeB===980);return n.createElement("div",{className:C.wrapper},n.createElement("table",null,n.createElement("thead",{className:C.title},n.createElement("tr",null,n.createElement("th",null,"Currency"),n.createElement("th",null,"Purchase"),n.createElement("th",null,"Sale"))),n.createElement("tbody",null,e&&n.createElement("tr",null,n.createElement("td",null,"USD"),n.createElement("td",null,e.rateBuy),n.createElement("td",null,e.rateSell)),t&&n.createElement("tr",null,n.createElement("td",null,"EUR"),n.createElement("td",null,t.rateBuy),n.createElement("td",null,t.rateSell)))))}const X="_header_1150w_1",Z="_logo_1150w_7",ee="_wrap_1150w_12",te="_button_1150w_16",u={header:X,logo:Z,wrap:ee,button:te},o=_.create({baseURL:"https://wallet.b.goit.study/api/"}),w=r=>{o.defaults.headers.common.Authorization=`Bearer ${r}`},re=()=>{o.defaults.headers.common.Authorization=""},g=l("register",async(r,e)=>{try{const{data:t}=await o.post("auth/sign-up",r);return w(t.token),console.log(t),t}catch(t){return e.rejectWithValue(t.message)}}),f=l("login",async(r,e)=>{try{const{data:t}=await o.post("auth/sign-in",r);return w(t.token),console.log(t),t}catch(t){return e.rejectWithValue(t.message)}}),j=l("logout",async(r,e)=>{try{const{data:t}=await o.delete("auth/sign-out");return console.log(t),re(),t}catch(t){return e.rejectWithValue(t.message)}}),h=l("refresh",async(r,e)=>{const t=e.getState().auth.token;if(!t)return e.rejectWithValue("Token is not exist!");try{w(t);const{data:s}=await o.get("users/current");return s}catch(s){return e.rejectWithValue(s.message)}}),S={user:{username:"",email:""},token:null,loading:!1,error:!1,isLoggedIn:!1,isRefresh:!1},O=b({name:"auth",initialState:S,selectors:{selectUser:r=>r.username,selectIsLoggedIn:r=>r.isLoggedIn,selectToken:r=>r.isLoggedIn,selectIsRefresh:r=>r.isRefresh},extraReducers:r=>{r.addCase(j.fulfilled,e=>S).addCase(h.fulfilled,(e,{payload:t})=>{e.user.username=t.username,e.user.email=t.email,e.isLoggedIn=!0,e.isRefresh=!1}).addMatcher(i(g.fulfilled,f.fulfilled),(e,{payload:t})=>{e.user.username=t.user.username,e.user.email=t.user.email,e.token=t.token,e.isLoggedIn=!0}).addMatcher(i(g.pending,f.pending,h.pending),e=>{e.loading=!0,e.error=null,e.isRefresh=!0}).addMatcher(i(g.rejected,f.rejected,h.rejected),(e,{payload:t})=>{e.error=t,e.loading=!1,e.isRefresh=!1})}}),ne=O.reducer,{selectIsLoggedIn:we,selectUser:ae,selectToken:Ce,selectIsRefresh:Se}=O.selectors,se=()=>{const[r,e]=d.useState(!1);return{isOpen:r,close:()=>e(!1),open:()=>e(!0),toggle:()=>e(c=>!c)}},ce="_backdrop_174ij_1",oe="_modal_174ij_10",L={backdrop:ce,modal:oe},le=document.querySelector("#modal"),ie=({closeModal:r,children:e})=>{const t=d.useCallback(a=>{a.key==="Escape"&&r()},[r]);d.useEffect(()=>(document.addEventListener("keydown",t),()=>{document.removeEventListener("keydown",t)}),[r,t]);const s=a=>{a.target===a.currentTarget&&r()};return P.createPortal(n.createElement("div",{onClick:s,className:L.backdrop},n.createElement("div",{className:L.modal},e)),le)},ue="_logo_18de6_1",de={logo:ue},me=({closeModal:r})=>{const e=I(),t=()=>{e(j()),r()};return n.createElement("div",null,n.createElement("a",{href:"",className:de.logo},n.createElement("svg",{width:"16",height:"16"},n.createElement("use",{href:"../../img/sprite.svg#icon-logo"})),"Money Guard"),n.createElement("p",null,"Are you sure you want to log out?"),n.createElement("button",{onClick:t},"Logout"),n.createElement("button",{onClick:r},"Cancel"))},ge=()=>{const{isOpen:r,toggle:e}=se(),t=v(ae);return n.createElement("header",{className:u.header},n.createElement("a",{href:"",className:u.logo},n.createElement("svg",{width:"16",height:"16"},n.createElement("use",{href:"../../img/sprite.svg#icon-logo"})),"Money Guard"),n.createElement("div",{className:u.wrap}," ",n.createElement("p",null,t,"User"),n.createElement("button",{className:u.button,onClick:e}," ",n.createElement("svg",{width:"16",height:"16"},n.createElement("use",{href:"../../img/sprite.svg#icon-exit"})))),r&&n.createElement(ie,{closeModal:e},n.createElement(me,{closeModal:e})))},fe=()=>n.createElement("div",null,n.createElement("h1",null,"helo"),n.createElement(ge,null),n.createElement(A,null));function he(){const r=I();return d.useEffect(()=>{r(Q())},[r]),n.createElement("div",null,n.createElement("h1",null,"Мій додаток"),n.createElement(Y,null),n.createElement(fe,null))}const p=l("fetchTransactionsData",async(r,e)=>{try{const{data:t}=await o.get("transactions");return t}catch(t){return e.rejectWithValue(t.message)}}),E=l("deleteTransaction",async(r,e)=>{try{const{data:t}=await o.delete(`transactions/${r}`);return t.id}catch(t){return e.rejectWithValue(t.message)}}),y=l("addTransaction",async(r,e)=>{try{const{data:t}=await o.post("transactions",r);return t}catch(t){return e.rejectWithValue(t.message)}}),T=l("editTransaction",async(r,e)=>{try{const{data:t}=await o.patch(`/transactions/${r.id}`,r);return t}catch(t){return e.rejectWithValue(t.message)}}),k=l("fetchTransactionCategories",async(r,e)=>{try{const{data:t}=await o.get("transaction-categories");return t}catch(t){return e.rejectWithValue(t.message)}}),R=l("fetchTransactionSummaryController",async(r,e)=>{try{const{data:t}=await o.get("transactions-summary");return t}catch(t){return e.rejectWithValue(t.message)}}),pe={transactionsList:[],transactionCategories:[],transactionSummaryController:null,loading:!1,error:!1},N=b({name:"transactions",initialState:pe,selectors:{selectTransactions:r=>r.transactionsList,selectIsLoading:r=>r.loading,selectIsError:r=>r.error},extraReducers:r=>{r.addCase(p.fulfilled,(e,{payload:t})=>{e.transactionsList=t,e.loading=!1}).addCase(E.fulfilled,(e,{payload:t})=>{e.transactionsList=e.transactionsList.filter(s=>s.id!==t),e.loading=!1}).addCase(y.fulfilled,(e,{payload:t})=>{e.transactionsList.push(t),e.loading=!1}).addCase(T.fulfilled,(e,{payload:t})=>{const s=e.transactionsList.findIndex(a=>a.id===t.id);e.transactionsList.splice(s,1,t),e.loading=!1}).addCase(k.fulfilled,(e,{payload:t})=>{e.transactionCategories=t,e.loading=!1}).addCase(R.fulfilled,(e,{payload:t})=>{e.transactionSummaryController=t,e.loading=!1}).addMatcher(i(p.pending,E.pending,y.pending,T.pending,k.pending,R.pending),(e,{payload:t})=>{e.loading=!0,e.error=null}).addMatcher(i(p.rejected,E.rejected,y.rejected,T.rejected,k.rejected,R.rejected),(e,{payload:t})=>{e.error=t,e.loading=!1})}}),Ee=N.reducer;N.selectors;const ye={key:"auth",version:1,storage:x,whitelist:["token"]},Te=M(ye,ne),D=V({reducer:{auth:Te,transactions:Ee},middleware:r=>r({serializableCheck:{ignoredActions:[U,$,B,F,G,q]}}),devTools:!1}),ke=W(D);z.createRoot(document.getElementById("root")).render(n.createElement(n.StrictMode,null,n.createElement(H,{store:D},n.createElement(J,{loading:null,persistor:ke},n.createElement(he,null),n.createElement(K,{autoClose:1500})))));
//# sourceMappingURL=commonHelpers.js.map
