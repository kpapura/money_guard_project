import{x as u,e as g,R as e,u as _,L as d}from"./vendor-b754cceb.js";import{v as h,w as E,u as w,x as p}from"../commonHelpers.js";import{u as v,M as b}from"./useModal-b49a64ae.js";import{s as n}from"./sprite-aa48e9ee.js";const x="_wrap_1nzyu_1",N="_logo_1nzyu_5",f="_text_1nzyu_14",r={wrap:x,logo:N,text:f},C=({closeModal:s})=>{const o=u(),a=g(),c=()=>{a(h()),a(E()),s(),o("/")};return e.createElement("div",{className:r.wrap},e.createElement("a",{href:"",className:r.logo},e.createElement("svg",{width:"36",height:"36"},e.createElement("use",{href:"../../img/sprite.svg#icon-logo"})),"Money Guard"),e.createElement("p",{className:r.text},"Are you sure you want to log out?"),e.createElement("button",{className:"modalButtonColor",onClick:c},"Logout"),e.createElement("button",{className:"modalButton",onClick:s},"Cancel"))},k="_header_1wqbv_1",q="_hederContainer_1wqbv_22",y="_logo_1wqbv_41",M="_wrap_1wqbv_55",$="_user_1wqbv_61",L="_button_1wqbv_67",z="_icon_1wqbv_93",t={header:k,hederContainer:q,logo:y,wrap:M,user:$,button:L,icon:z},G=()=>{const{isOpen:s,toggle:o}=v(),{isBigScreenOrTablet:a,isMobile:c}=w(),l=_(p),i=l.email.indexOf("@"),m=l.email.slice(0,i);return e.createElement("header",{className:t.header},e.createElement("div",{className:t.hederContainer},e.createElement(d,{to:"/",className:t.logo},a?e.createElement("svg",{width:"24",height:"23"},e.createElement("use",{xlinkHref:`${n}#icon-logo`})):e.createElement("svg",{width:"17",height:"17"},e.createElement("use",{xlinkHref:`${n}#icon-logo`})),"Money Guard"),e.createElement("div",{className:t.wrap}," ",e.createElement("p",{className:t.user},m),e.createElement("button",{className:t.button,onClick:o},e.createElement("svg",{width:"18",height:"18",className:t.icon},e.createElement("use",{href:`${n}#icon-exit`})),a?"Exit":"")),s&&e.createElement(b,{closeModal:o},e.createElement(C,{closeModal:o}))))};export{G as default};
//# sourceMappingURL=Header-9b88377e.js.map