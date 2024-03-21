import{a as k,c as i,b as y,d as c,e as E,R as l,f as T,i as d,p as C,g as j,h as I,j as S,F as b,k as P,P as V,l as W,m as v,n as _,o as q,q as x,r as A,Q as M}from"./assets/vendor-d833e123.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const u of n.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&o(u)}).observe(document,{childList:!0,subtree:!0});function e(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(s){if(s.ep)return;s.ep=!0;const n=e(s);fetch(s.href,n)}})();const a=k.create({baseURL:"https://wallet.b.goit.study/api/"}),g=r=>{a.defaults.headers.common.Authorization=`Bearer ${r}`},O=()=>{a.defaults.headers.common.Authorization=""},f=i("register",async(r,t)=>{try{const{data:e}=await a.post("auth/sign-up",r);return g(e.token),console.log(e),e}catch(e){return t.rejectWithValue(e.message)}}),m=i("login",async(r,t)=>{try{const{data:e}=await a.post("auth/sign-in",r);return g(e.token),console.log(e),e}catch(e){return t.rejectWithValue(e.message)}}),$=i("logout",async(r,t)=>{try{const{data:e}=await a.delete("auth/sign-out");return console.log(e),O(),e}catch(e){return t.rejectWithValue(e.message)}}),h=i("refresh",async(r,t)=>{const e=t.getState().auth.token;if(!e)return t.rejectWithValue("Token is not exist!");try{g(e);const{data:o}=await a.get("users/current");return o}catch(o){return t.rejectWithValue(o.message)}});y({password:c().required().min(6,"Must be more then 6 symbols").max(12,"Must be less then 12 symbols"),email:c().required().email("Email is not valid")}).required();y({username:c().required(),password:c().required().min(6,"Must be more then 6 symbols").max(12,"Must be less then 12 symbols"),email:c().required().email("Email is not valid"),passwordConfirmation:c().oneOf([E("password"),null],"Passwords must match")}).required();const U=i("fetchTransactionsData",async(r,t)=>{try{const{data:e}=await a.get("transactions");return e}catch(e){return t.rejectWithValue(e.message)}}),z=i("deleteTransaction",async(r,t)=>{try{const{data:e}=await a.delete(`transactions/${r}`);return e.id}catch(e){return t.rejectWithValue(e.message)}}),D=i("addTransaction",async(r,t)=>{try{const{data:e}=await a.post("transactions",r);return e}catch(e){return t.rejectWithValue(e.message)}}),F=i("editTransaction",async(r,t)=>{try{const{data:e}=await a.patch(`/transactions/${r.id}`,r);return e}catch(e){return t.rejectWithValue(e.message)}}),G=i("fetchTransactionCategories",async(r,t)=>{try{const{data:e}=await a.get("transaction-categories");return e}catch(e){return t.rejectWithValue(e.message)}});i("fetchTransactionSummaryController",async(r,t)=>{try{const{data:e}=await a.get("transactions-summary");return e}catch(e){return t.rejectWithValue(e.message)}});function H(){return l.createElement("div",null,l.createElement("h1",null,"Hello"))}const p={user:{username:"",email:""},token:null,loading:!1,error:!1,isLoggedIn:!1,isRefresh:!1},w=T({name:"auth",initialState:p,selectors:{selectUser:r=>r.username,selectIsLoggedIn:r=>r.isLoggedIn,selectToken:r=>r.isLoggedIn,selectIsRefresh:r=>r.isRefresh},extraReducers:r=>{r.addCase($.fulfilled,t=>p).addCase(h.fulfilled,(t,{payload:e})=>{t.user.username=e.username,t.user.email=e.email,t.isLoggedIn=!0,t.isRefresh=!1}).addMatcher(d(f.fulfilled,m.fulfilled),(t,{payload:e})=>{t.user.username=e.user.username,t.user.email=e.user.email,t.user.password=e.user.password,t.token=e.token,t.isLoggedIn=!0}).addMatcher(d(f.pending,m.pending,h.pending),t=>{t.loading=!0,t.error=null,t.isRefresh=!0}).addMatcher(d(f.rejected,m.rejected,h.rejected),(t,{payload:e})=>{t.error=e,t.loading=!1,t.isRefresh=!1})}}),N=w.reducer;w.selectors;const B={transactionsList:[],transactionCategories:[],transactionSummaryController:null,loading:!1,error:!1},L=T({name:"transactions",initialState:B,selectors:{selectTransactions:r=>r.transactionsList,selectIsLoading:r=>r.loading,selectIsError:r=>r.error},extraReducers:r=>{r.addCase(U.fulfilled,(t,{payload:e})=>{t.transactionsList=e,t.loading=!1}).addCase(z.fulfilled,(t,{payload:e})=>{t.transactionsList=t.transactionsList.filter(o=>o.id!==e),t.loading=!1}).addCase(D.fulfilled,(t,{payload:e})=>{t.transactionsList.push(e),t.loading=!1}).addCase(F.fulfilled,(t,{payload:e})=>{const o=t.transactionsList.findIndex(s=>s.id===e.id);t.transactionsList.splice(o,1,e),t.loading=!1}).addCase(G.fulfilled,(t,{payload:e})=>{t.transactionCategories=e,t.loading=!1})}}),K=L.reducer;L.selectors;const Q={key:"auth",version:1,storage:S,whitelist:["token"]},Y=C(Q,N),R=j({reducer:{auth:Y,transactions:K},middleware:r=>r({serializableCheck:{ignoredActions:[b,P,V,W,v,_]}}),devTools:!1}),J=I(R);q.createRoot(document.getElementById("root")).render(l.createElement(x,{store:R},l.createElement(A,{loading:null,persistor:J},l.createElement(H,null),l.createElement(M,{autoClose:1500}))));
//# sourceMappingURL=commonHelpers.js.map
