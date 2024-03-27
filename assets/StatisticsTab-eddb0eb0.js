import{k as e,T as S,r as d,S as N,l as f,o as h}from"./vendor-32dc92c3.js";import{i as k,j as y,k as w,m as R,n as D,o as M,p as v}from"../commonHelpers2.js";const T="_tableParagraphContainer_kw8me_1",H="_tableContainer_kw8me_26",F="_table_kw8me_1",Y="_tableHeader_kw8me_58",P="_tableCellBox_kw8me_73",$="_tableCell_kw8me_73",A="_tableHeadCell_kw8me_88",W="_tableHeadCellRight_kw8me_95",q="_tableCellRight_kw8me_102",B="_tableRow_kw8me_111",I="_paragraphContainer_kw8me_120",J="_paragraph_kw8me_120",U="_income_kw8me_141",L="_expense_kw8me_144",n={tableParagraphContainer:T,tableContainer:H,table:F,tableHeader:Y,tableCellBox:P,tableCell:$,tableHeadCell:A,tableHeadCellRight:W,tableCellRight:q,tableRow:B,paragraphContainer:I,paragraph:J,income:U,expense:L},j=({transactionsSummary:t,colors:a,incomeSummary:m,expenseSummary:o})=>{const i=m.toLocaleString("ru-RU",{minimumFractionDigits:2,maximumFractionDigits:2}),r=o.toLocaleString("ru-RU",{minimumFractionDigits:2,maximumFractionDigits:2});return e.createElement("div",{className:n.tableParagraphContainer},e.createElement("div",{className:n.tableContainer},e.createElement("table",{className:n.table},e.createElement("thead",null,e.createElement("tr",{className:n.tableHeader},e.createElement("th",{style:{textAlign:"left"},className:n.tableCellHead},"Category"),e.createElement("th",{style:{textAlign:"right"},className:n.tableCellHead},"Sum"))),e.createElement("tbody",null,t.map((s,_)=>e.createElement("tr",{key:_,className:n.tableRow},e.createElement("td",{className:n.tableCell},e.createElement("div",{style:{display:"flex",alignItems:"center"}},e.createElement("div",{className:n.colorSquare,style:{marginRight:"16px",width:"24px",height:"24px",backgroundColor:a[s.name]}}),s.name)),e.createElement("td",{style:{textAlign:"right"},className:n.tableCell},s.total.toLocaleString("ru-RU",{minimumFractionDigits:2,maximumFractionDigits:2}).replace("-",""))))))),e.createElement("div",{className:n.paragraphContainer},e.createElement("p",{className:n.paragraph},"Income:",e.createElement("span",{className:n.income},i)),e.createElement("p",{className:n.paragraph},"Expenses:",e.createElement("span",{className:n.expense},r.toString().replace("-","")))))},O="_chartWrapper_ddg19_1",z="_chartContainer_ddg19_9",G="_doughnut_ddg19_17",K="_periodText_ddg19_31",b={chartWrapper:O,chartContainer:z,doughnut:G,periodText:K},Q=({transactions:t,colors:a,period:m})=>{if(!t.length||!a)return e.createElement("div",null,"No data available");const o=m.toFixed(2),i={datasets:[{data:t==null?void 0:t.map(r=>r.total),backgroundColor:t==null?void 0:t.map(r=>a[r.name]),hoverBackgroundColor:t==null?void 0:t.map(r=>a[r.name]),cutout:"75%",borderWidth:0,hoverOffset:1}]};return e.createElement("div",{className:b.chartContainer},e.createElement("div",{className:b.chartWrapper},e.createElement(S,{data:i,className:b.doughnut}),e.createElement("p",{className:b.periodText}," ₴ ",o)))},V="_selectContainers_1ekq8_1",X="_select_1ekq8_1",Z="_option_1ekq8_21",ee={selectContainers:V,select:X,option:Z};const te=({onMonthChange:t,onYearChange:a})=>{const m=new Date,o=m.getFullYear(),[i,r]=d.useState(m.getMonth()+1),[s,_]=d.useState(o),g=l=>{r(l.value),t(l.value)},C=l=>{_(l.value),a(l.value)},E=Array.from({length:o-2019},(l,x)=>o-x).reverse(),p=[{value:1,label:"January"},{value:2,label:"February"},{value:3,label:"March"},{value:4,label:"April"},{value:5,label:"May"},{value:6,label:"June"},{value:7,label:"July"},{value:8,label:"August"},{value:9,label:"September"},{value:10,label:"October"},{value:11,label:"November"},{value:12,label:"December"}],c=E.map(l=>({value:l,label:l}));return e.createElement("div",{className:ee.selectContainers},e.createElement(N,{className:"react_select_container_special",classNamePrefix:"react_select",value:p.find(l=>l.value===i),options:p,onChange:g}),e.createElement(N,{className:"react_select_container",classNamePrefix:"react_select",value:c.find(l=>l.value===s),options:c,onChange:C}))},ae="_statisticsContainer_1axr6_1",le="_contentContainer_1axr6_29",ne="_title_1axr6_48",re="_tableContainer_1axr6_56",oe="_noStat_1axr6_78",u={statisticsContainer:ae,contentContainer:le,title:ne,tableContainer:re,noStat:oe},me=()=>{const t=f(),a=h(k),m=h(y),o=h(w),i=h(R),r=h(D),s=h(M),[_,g]=d.useState({});d.useEffect(()=>{t(v({month:r,year:s}))},[r,s,t]);const C=()=>{const c={};a==null||a.forEach(({name:l,index:x})=>{c[l]=`#${Math.floor(Math.random()*16777215).toString(16)}`}),g(c)};d.useEffect(()=>{C()},[a]);const E=c=>{t(v({month:c,year:s}))},p=c=>{t(v({month:r,year:c}))};return a.length===0?e.createElement("h3",{className:u.noStat},"No statistics"):e.createElement("section",{className:u.statisticsContainer},e.createElement("h2",{className:u.title},"Statistics"),e.createElement("div",{className:u.contentContainer},e.createElement(Q,{transactions:a,period:i,colors:_}),e.createElement("div",{className:u.tableContainer},e.createElement(te,{onMonthChange:E,onYearChange:p}),e.createElement(j,{transactionsSummary:a,colors:_,incomeSummary:m,expenseSummary:o}))))};export{me as default};
//# sourceMappingURL=StatisticsTab-eddb0eb0.js.map
