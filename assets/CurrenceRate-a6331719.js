import{e as w,u as l,r as u,R as e}from"./vendor-b754cceb.js";import{g,h as p,i as b,u as E,j as N}from"../commonHelpers2.js";const y="_wrapper_1wdu2_1",f="_secondwrapper_1wdu2_24",I="_imgBox_1wdu2_36",h="_table_1wdu2_46",x="_head_1wdu2_60",B="_tableBody_1wdu2_72",S="_titleRow_1wdu2_82",v="_row_1wdu2_104",D="_titleItem_1wdu2_124",C="_rowItem_1wdu2_132",T="_vector_1wdu2_140",k="_image_1wdu2_145",U="_secondimage_1wdu2_166",F="_smallnumeur_1wdu2_178",L="_smallnumusd_1wdu2_189",t={wrapper:y,secondwrapper:f,imgBox:I,table:h,head:x,tableBody:B,titleRow:S,row:v,titleItem:D,rowItem:C,vector:T,image:k,secondimage:U,smallnumeur:F,smallnumusd:L};function R(r,a,s){let m="",c="";return r?a?(m="../../img/images/currency_desk@2x.webp",c="../../img/images/line_desc_2x.webp"):s?(m="../../img/images/currency_tablet@2x.webp",c="../../img/images/line_desc_tab_2x.webp"):(m="../../img/images/currency_mobile@2x.webp",c="../../img/images/line_desc_mob_2x.webp"):a?(m="../../img/images/currency_desk.webp",c="../../img/images/line_desc_1x.webp"):s?(m="../../img/images/currency_tablet.webp",c="../../img/images/line_desc_tab_1x.webp"):(m="../../img/images/currency_mobile.webp",c="../../img/images/line_desc_mob_1x.webp"),{imageSrc:m,secondImageSrc:c}}function z(){const r=w(),a=l(g),s=l(p),m=l(b),{isDesktopOrLaptop:c,isBigScreen:n,isTabletOrMobile:i,isRetina:o}=E(),{imageSrc:_,secondImageSrc:d}=R(o,n,i);return u.useEffect(()=>{(new Date().getTime()-m)/(1e3*60*60)>1&&r(N())},[r,m]),e.createElement("div",{className:t.wrapper},e.createElement("div",{className:t.secondwrapper},e.createElement("table",{className:t.table},e.createElement("thead",{className:t.head},e.createElement("tr",{className:t.titleRow},e.createElement("th",{className:t.titleItem},"Currency"),e.createElement("th",{className:t.titleItem},"Purchase"),e.createElement("th",{className:t.titleItem},"Sale"))),e.createElement("tbody",{className:t.tableBody},a&&e.createElement("tr",{className:t.row},e.createElement("td",{className:t.rowItem},"USD"),e.createElement("td",{className:t.rowItem},a==null?void 0:a.rateBuy),e.createElement("td",{className:t.rowItem},a==null?void 0:a.rateSell)),s&&e.createElement("tr",{className:t.row},e.createElement("td",{className:t.rowItem},"EUR"),e.createElement("td",{className:t.rowItem},s==null?void 0:s.rateBuy),e.createElement("td",{className:t.rowItem},s==null?void 0:s.rateSell)))),n&&e.createElement(e.Fragment,null,e.createElement("p",{className:t.smallnumeur}," ",s==null?void 0:s.rateBuy),e.createElement("p",{className:t.smallnumusd}," ",a==null?void 0:a.rateBuy)),e.createElement("div",{className:t.imgBox},e.createElement("img",{className:t.image,src:_,alt:"Currency rate"}),e.createElement("img",{className:t.secondimage,src:d,alt:"Currency rate"}))))}export{z as default};
//# sourceMappingURL=CurrenceRate-a6331719.js.map
