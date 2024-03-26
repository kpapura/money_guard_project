import{r as p,R as e,D as R,G as J,S as U,H as Y,v as q,w as A,I as X,J as L,e as D,y as I,u as z}from"./vendor-b754cceb.js";import{e as Z,a as j,u as O,s as H,d as K,b as Q,c as ee,f as te}from"../commonHelpers2.js";import{u as ae,M as ne}from"./useModal-b49a64ae.js";import{s as S}from"./sprite-aa48e9ee.js";import se from"./Balance-3b9c986f.js";const ce="_labelExpense_quz5u_21",oe="_labelIncome_quz5u_27",re="_activeIncome_quz5u_33",le="_activeExpense_quz5u_40",ie="_slider_quz5u_46",me="_round_quz5u_91",E={"transaction-switcher":"_transaction-switcher_quz5u_2",switch:"_switch_quz5u_9",labelExpense:ce,labelIncome:oe,activeIncome:re,activeExpense:le,slider:ie,round:me},_e=({onChange:t})=>{const[n,c]=p.useState(!1),s=()=>{c(!n),t(!n)};return e.createElement("div",{className:E["transaction-switcher"]},e.createElement("span",{className:n?E.activeIncome:E.labelIncome},"Income"),e.createElement("label",{className:`${E.switch} ${n?E.income:E.expense}`},e.createElement("input",{type:"checkbox",onChange:s,checked:!n}),e.createElement("span",{className:`${E.slider} ${E.round}`})),e.createElement("span",{className:n?E.labelExpense:E.activeExpense},"Expense"))},de="_container_1pzgo_1",ue="_formWrapper_1pzgo_20",Ee="_header_1pzgo_32",pe="_secondContainer_1pzgo_42",be="_category_1pzgo_51",he="_boxDate_1pzgo_64",Ne="_incomeInput_1pzgo_78",ge="_customInput_1pzgo_79",ve="_svgBox_1pzgo_108",xe="_comment_1pzgo_137",we="_selectExpense_1pzgo_138",fe="_btnBox_1pzgo_157",ye="_activeIncome_1pzgo_164",Ce="_activeExpense_1pzgo_171",Ie="_checkBox_1pzgo_177",Se="_inputContainer_1pzgo_190",De="_active_1pzgo_164",ke="_hidden_1pzgo_205",i={container:de,formWrapper:ue,header:Ee,secondContainer:pe,category:be,boxDate:he,incomeInput:Ne,customInput:ge,svgBox:ve,comment:xe,selectExpense:we,btnBox:fe,activeIncome:ye,activeExpense:Ce,checkBox:Ie,inputContainer:Se,active:De,hidden:ke},$=({name:t,register:n,errors:c,placeholder:s,className:o})=>e.createElement("div",{className:i.inputContainer},e.createElement("input",{autoComplete:"off",className:o,...n(t),placeholder:s}),c[t]&&e.createElement("span",null,c[t].message)),B=t=>t<10?"0"+t:t,M=t=>{const n=t.getFullYear(),c=B(t.getMonth()+1),s=B(t.getDate());return`${n}-${c}-${s}`};function W({content:t,categories:n,toggle:c,typeForm:s,onDataSubmit:o,schema:_}){const{register:u,handleSubmit:h,formState:{errors:b},setValue:N}=R({resolver:J(_),mode:"onChange"}),[m,w]=p.useState(null),[r,g]=p.useState(""),[v,k]=p.useState(null),[f,y]=p.useState(!0);p.useEffect(()=>{g(t?t.type:"EXPENSE"),N("amount",t&&+t.amount.toString().replace("-","")),N("comment",t&&t.comment)},[t,N]);const x=p.useMemo(()=>n.map(({id:l,name:G})=>({value:l,label:G})),[n]),C=p.useMemo(()=>x.find(l=>(t==null?void 0:t.categoryId)===l.value),[t,x]),V=l=>{w(l)},F=l=>{if(s==="add"&&r==="EXPENSE"&&m||r==="INCOME")o({transactionDate:M(v),amount:r==="EXPENSE"?+`-${l.amount}`:+l.amount,comment:l.comment,type:r,categoryId:r==="EXPENSE"?m==null?void 0:m.value:"063f1132-ba5d-42b4-951d-44011ca46262"}),y(!0);else if(s==="add"&&!m){y(!1);return}else o({transactionDate:t?t.transactionDate:M(v),amount:r==="EXPENSE"?+`-${l.amount}`:+l.amount,comment:l.comment})},T=l=>{g(l?"INCOME":"EXPENSE")};return e.createElement("div",{className:i.container},e.createElement("form",{className:i.formWrapper,onSubmit:h(F)},e.createElement("h1",{className:i.header},s==="add"?"Add transaction":"Edit transaction"),s==="add"?e.createElement(_e,{onChange:T}):e.createElement("div",null,e.createElement("ul",{className:i.checkBox},e.createElement("li",{onClick:()=>{s==="edit"&&r==="EXPENSE"||T(!0)},className:t.type==="INCOME"||r==="INCOME"?i.activeIncome:"",disabled:s==="edit"&&r==="EXPENSE"}," ","Income"),e.createElement("span",null,"/"),e.createElement("li",{onClick:()=>{s==="edit"&&r==="INCOME"||T(!1)},className:r==="EXPENSE"?i.activeExpense:"",disabled:s==="edit"&&r==="INCOME"}," ","Expense"," "))),e.createElement("div",{className:i.secondContainer},r==="EXPENSE"&&e.createElement("div",{className:i.category},e.createElement(U,{name:"category",className:"react-select-container",classNamePrefix:"react-select",options:x,placeholder:"Select category",defaultValue:C&&C,onChange:V,isDisabled:s==="edit"}),e.createElement("span",{className:f?i.hidden:i.active},"Please, choose the category")),e.createElement("div",{className:i.boxDate},e.createElement($,{className:i.incomeInput,name:"amount",placeholder:"0.00",autoComplete:"false",errors:b,register:u}),e.createElement("div",{className:i.svgBox},e.createElement(Y,{className:i.customInput,selected:t?t.transactionDate:v,placeholderText:"Enter the date",onChange:l=>{N("transactionDate",l),k(l)}}),e.createElement("svg",{width:"36",height:"36"},e.createElement("use",{xlinkHref:`${S}#icon-date`})),b.transactionDate&&e.createElement("span",null,b.transactionDate.message))),e.createElement($,{className:i.comment,name:"comment",placeholder:"Comment",errors:b,register:u}),e.createElement("div",{className:i.btnBox},e.createElement("button",{className:"modalButtonColor"},s==="add"?"ADD":"EDIT"),e.createElement("button",{type:"button",onClick:c,className:"modalButton"},"CANCEL")))))}const Te=q({comment:A().min(5,"Give more details"),transactionDate:X(),amount:L().typeError("Please enter the number").min(1,"Number must be at least 1 character")});function ze({categories:t,editContent:n,toggle:c}){const s=D(),o=_=>{s(Z({content:{..._},id:n.id})).unwrap().then(u=>{I.success("Changed!"),c()}).catch(u=>{I.error("Credentials is not valid!")})};return e.createElement(W,{schema:Te,toggle:c,content:n.content,categories:t,onDataSubmit:o,typeForm:"edit"})}const $e=q({comment:A().required("Describe your transaction").min(5,"Give more details"),transactionDate:X().required("Please choose the date"),amount:L().typeError("Please enter the number").min(1,"Number must be at least 1 character").required("Sum is required")});function Be({categories:t,toggle:n}){const c=D(),s=o=>{c(j(o)).unwrap().then(()=>{I.success("Transaction was successfully added"),n()}).catch(_=>{I.error("Credentials is not valid!")})};return e.createElement(W,{schema:$e,categories:t,onDataSubmit:s,toggle:n,typeForm:"add"})}const Me="_transaction_item_172wv_1",Pe="_income_border_172wv_6",qe="_expense_border_172wv_10",Ae="_income_text_172wv_14",Xe="_expense_text_172wv_19",Le="_transactions_table_mobile_172wv_24",Oe="_transaction_colum_172wv_30",He="_transaction_first_column_172wv_34",We="_transaction_row_mobile_172wv_38",Ve="_transaction_row_172wv_38",Fe="_table_body_172wv_57",Ge="_btn_delete_172wv_61",Re="_btn_edit_172wv_75",Je="_btn_wrapper_172wv_84",Ue="_icon_edit_172wv_91",a={transaction_item:Me,income_border:Pe,expense_border:qe,income_text:Ae,expense_text:Xe,transactions_table_mobile:Le,transaction_colum:Oe,transaction_first_column:He,transaction_row_mobile:We,transaction_row:Ve,table_body:Fe,btn_delete:Ge,btn_edit:Re,btn_wrapper:Je,icon_edit:Ue},P=({transaction:t,handleEditItem:n})=>{const{id:c,transactionDate:s,type:o,categoryId:_,comment:u,amount:h}=t,{isBigScreenOrTablet:b,isMobile:N}=O(),m=D(),w=z(H);function r(y){const x=w.find(C=>C.id===y);return x?x.name:"Unknown Category"}const g=()=>{m(K(t))},v=o.toLowerCase()==="income"?"+":"-",k=o.toLowerCase()==="income"?a.income_border:a.expense_border,f=o.toLowerCase()==="income"?a.income_text:a.expense_text;return e.createElement(e.Fragment,null,N&&e.createElement("li",{key:c,className:`${a.transaction_item} ${k}`},e.createElement("table",{className:a.transactions_table_mobile},e.createElement("tbody",{className:a.table_body},e.createElement("tr",{className:a.transaction_row_mobile},e.createElement("td",{className:a.transaction_first_column},"Date"),e.createElement("td",null,s)),e.createElement("tr",{className:a.transaction_row_mobile},e.createElement("td",{className:a.transaction_first_column},"Type"),e.createElement("td",null,v)),e.createElement("tr",{className:a.transaction_row_mobile},e.createElement("td",{className:a.transaction_first_column},"Category"),e.createElement("td",null,r(_))),e.createElement("tr",{className:a.transaction_row_mobile},e.createElement("td",{className:a.transaction_first_column},"Comment"),e.createElement("td",null,u)),e.createElement("tr",{className:a.transaction_row_mobile},e.createElement("td",{className:a.transaction_first_column},"Sum"),e.createElement("td",{className:f},h)),e.createElement("tr",{className:a.transaction_row_mobile},e.createElement("td",null,e.createElement("button",{className:a.btn_delete,onClick:g},"Delete")),e.createElement("td",null,e.createElement("button",{onClick:()=>n({categoryId:_,type:o,amount:h,comment:u,transactionDate:s},c),className:a.btn_edit},e.createElement("svg",{className:a.icon_edit},e.createElement("use",{xlinkHref:`${S}#icon-edit`}))," ","Edit")))))),b&&e.createElement("tr",{className:a.transaction_row},e.createElement("td",{className:a.transaction_colum},s),e.createElement("td",{className:a.transaction_colum,style:{textAlign:"center"}},v),e.createElement("td",{className:a.transaction_colum},r(_)),e.createElement("td",{className:a.transaction_colum},u),e.createElement("td",{className:`${a.transaction_colum} ${f}`,style:{textAlign:"right"}},h),e.createElement("td",{className:a.transaction_colum},e.createElement("div",{className:a.btn_wrapper},e.createElement("button",{onClick:()=>n({categoryId:_,type:o,amount:h,comment:u,transactionDate:s},c),className:a.btn_edit},e.createElement("svg",{className:a.icon_edit},e.createElement("use",{xlinkHref:`${S}#icon-edit`}))),e.createElement("button",{className:a.btn_delete,onClick:g},"Delete")))))},Ye="_transactions_section_1s0kw_1",Ze="_transactions_container_1s0kw_24",je="_transactions_table_1s0kw_84",Ke="_transactions_list_1s0kw_91",Qe="_transaction_row_head_1s0kw_97",et="_table_body_1s0kw_120",tt="_btn_add_1s0kw_128",at="_icon_plus_1s0kw_162",nt="_empty_transactions_1s0kw_168",d={transactions_section:Ye,transactions_container:Ze,transactions_table:je,transactions_list:Ke,transaction_row_head:Qe,table_body:et,btn_add:tt,icon_plus:at,empty_transactions:nt},st=()=>{const{isOpen:t,toggle:n}=ae(),[c,s]=p.useState(""),o=z(Q),_=z(H),{isBigScreenOrTablet:u,isMobile:h}=O();t?document.body.classList.add("modal-open"):document.body.classList.remove("modal-open");const b=(m,w,r)=>{n(),s({content:m,id:w,name:r}),t&&document.body.classList.add("modal-open")},N=()=>{n(),s(null)};return e.createElement("section",{className:d.transactions_section},e.createElement("div",{className:d.transactions_container},h&&e.createElement("ul",{className:d.transactions_list},o.length>0?o.map(m=>e.createElement(P,{handleEditItem:b,key:m.id,transaction:m})):e.createElement("div",{className:d.empty_transactions},"No transactions")),u&&e.createElement(e.Fragment,null,o.length>0?e.createElement("table",{className:d.transactions_table},e.createElement("thead",null,e.createElement("tr",{className:d.transaction_row_head},e.createElement("th",null,"Date"),e.createElement("th",{style:{textAlign:"center"}},"Type"),e.createElement("th",null,"Category"),e.createElement("th",null,"Comment"),e.createElement("th",{style:{textAlign:"right"}},"Sum"),e.createElement("th",null))),e.createElement("tbody",{className:d.table_body},o.map(m=>e.createElement(P,{handleEditItem:b,key:m.id,transaction:m})))):e.createElement(e.Fragment,null,e.createElement("table",{className:d.transactions_table},e.createElement("thead",null,e.createElement("tr",{className:d.transaction_row_head},e.createElement("th",null,"Date"),e.createElement("th",{style:{textAlign:"center"}},"Type"),e.createElement("th",null,"Category"),e.createElement("th",null,"Comment"),e.createElement("th",{style:{textAlign:"right"}},"Sum"),e.createElement("th",null)))),e.createElement("div",{className:d.empty_transactions},"No transactions"))),e.createElement("button",{onClick:()=>N(),className:d.btn_add}," ",e.createElement("svg",{className:d.icon_plus},e.createElement("use",{xlinkHref:`${S}#icon-plus`})))),t&&e.createElement(ne,{closeModal:n},c?e.createElement(ze,{editContent:c,categories:_,toggle:n}):e.createElement(Be,{categories:_,toggle:n})))},mt=()=>{const t=D(),n=ee().windowWidth;return p.useEffect(()=>{t(te())},[t]),e.createElement(e.Fragment,null,n<768&&e.createElement(se,null),e.createElement(st,null))};export{mt as default};
//# sourceMappingURL=HomeTab-bfceb458.js.map
