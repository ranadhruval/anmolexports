"use strict";(()=>{var e={};e.id=4800,e.ids=[4800],e.modules={1013:(e,t,s)=>{s.a(e,async(e,r)=>{try{s.r(t),s.d(t,{config:()=>g,default:()=>p,getServerSideProps:()=>h,getStaticPaths:()=>u,getStaticProps:()=>x,reportWebVitals:()=>j,routeModule:()=>S,unstable_getServerProps:()=>w,unstable_getServerSideProps:()=>N,unstable_getStaticParams:()=>b,unstable_getStaticPaths:()=>v,unstable_getStaticProps:()=>m});var a=s(5872),i=s(3593),l=s(1323),o=s(7997),d=s(784),c=s(5720),n=e([d,c]);[d,c]=n.then?(await n)():n;let p=(0,l.l)(c,"default"),x=(0,l.l)(c,"getStaticProps"),u=(0,l.l)(c,"getStaticPaths"),h=(0,l.l)(c,"getServerSideProps"),g=(0,l.l)(c,"config"),j=(0,l.l)(c,"reportWebVitals"),m=(0,l.l)(c,"unstable_getStaticProps"),v=(0,l.l)(c,"unstable_getStaticPaths"),b=(0,l.l)(c,"unstable_getStaticParams"),w=(0,l.l)(c,"unstable_getServerProps"),N=(0,l.l)(c,"unstable_getServerSideProps"),S=new a.PagesRouteModule({definition:{kind:i.x.PAGES,page:"/shop",pathname:"/shop",bundlePath:"",filename:""},components:{App:d.default,Document:o.default},userland:c});r()}catch(e){r(e)}})},6571:(e,t,s)=>{s.d(t,{Z:()=>o});var r=s(997);s(6689);var a=s(9663);function i({loading:e,width:t}){return(0,r.jsx)("div",{style:{height:`${t}px`},children:(0,r.jsx)(a.Z,{loading:e})})}function l({loading:e}){return(0,r.jsx)("div",{className:"col-xl-4 col-md-6 col-sm-6",children:(0,r.jsx)(i,{loading:e,width:"300"})})}let o=({loading:e,shopRight:t=!1})=>(0,r.jsx)("section",{className:"tp-shop-area",children:(0,r.jsx)("div",{className:"container",children:(0,r.jsxs)("div",{className:"row",children:[!t&&(0,r.jsxs)("div",{className:"col-xl-3 col-lg-4",children:[(0,r.jsx)(i,{loading:e,width:"80"}),(0,r.jsx)(i,{loading:e,width:"100"}),(0,r.jsx)(i,{loading:e,width:"220"}),(0,r.jsx)(i,{loading:e,width:"180"}),(0,r.jsx)(i,{loading:e,width:"180"}),(0,r.jsx)(i,{loading:e,width:"180"})]}),(0,r.jsx)("div",{className:"col-xl-9 col-lg-8",children:(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)(l,{loading:e}),(0,r.jsx)(l,{loading:e}),(0,r.jsx)(l,{loading:e}),(0,r.jsx)(l,{loading:e}),(0,r.jsx)(l,{loading:e}),(0,r.jsx)(l,{loading:e}),(0,r.jsx)(l,{loading:e}),(0,r.jsx)(l,{loading:e}),(0,r.jsx)(l,{loading:e}),(0,r.jsx)(l,{loading:e}),(0,r.jsx)(l,{loading:e}),(0,r.jsx)(l,{loading:e})]})}),t&&(0,r.jsxs)("div",{className:"col-xl-3 col-lg-4",children:[(0,r.jsx)(i,{loading:e,width:"80"}),(0,r.jsx)(i,{loading:e,width:"100"}),(0,r.jsx)(i,{loading:e,width:"220"}),(0,r.jsx)(i,{loading:e,width:"180"}),(0,r.jsx)(i,{loading:e,width:"180"}),(0,r.jsx)(i,{loading:e,width:"180"})]})]})})})},7314:(e,t,s)=>{s.a(e,async(e,r)=>{try{s.d(t,{Z:()=>b});var a=s(997),i=s(6689),l=s(9081),o=s(9956),d=s(8766),c=s(3626),n=s(8349),p=s(783),x=s(1940),u=s(7906),h=s(1067),g=s(6674),j=s(5144),m=s(8702),v=e([o,d,c,p,u,h]);[o,d,c,p,u,h]=v.then?(await v)():v;let b=({all_products:e,products:t,otherProps:s})=>{let{priceFilterValues:r,selectHandleFilter:v,currPage:b,setCurrPage:w}=s,[N,S]=(0,i.useState)(t),[f,P]=(0,i.useState)(0),[q,Z]=(0,i.useState)(12),y=e.reduce((e,t)=>t.price>e?t.price:e,0);return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("section",{className:"tp-shop-area pb-120",children:(0,a.jsx)("div",{className:"container",children:(0,a.jsxs)("div",{className:"row",children:[(0,a.jsx)("div",{className:"col-xl-3 col-lg-4",children:(0,a.jsxs)("div",{className:"tp-shop-sidebar mr-10",children:[(0,a.jsx)(n.Z,{priceFilterValues:r,maxPrice:y}),(0,a.jsx)(x.Z,{setCurrPage:w}),(0,a.jsx)(d.Z,{setCurrPage:w}),(0,a.jsx)(c.Z,{setCurrPage:w}),(0,a.jsx)(u.Z,{}),(0,a.jsx)(p.Z,{setCurrPage:w}),(0,a.jsx)(m.Z,{})]})}),(0,a.jsx)("div",{className:"col-xl-9 col-lg-8",children:(0,a.jsxs)("div",{className:"tp-shop-main-wrapper",children:[(0,a.jsx)("div",{className:"tp-shop-top mb-45",children:(0,a.jsxs)("div",{className:"row",children:[(0,a.jsx)("div",{className:"col-xl-6",children:(0,a.jsx)(g.Z,{showing:0===t.length?0:N.slice(f,f+q).length,total:e.length})}),(0,a.jsx)("div",{className:"col-xl-6",children:(0,a.jsx)(j.Z,{selectHandleFilter:v})})]})}),0===t.length&&(0,a.jsx)("h2",{children:"No products found"}),t.length>0&&(0,a.jsx)("div",{className:"tp-shop-items-wrapper tp-shop-item-primary",children:(0,a.jsxs)("div",{className:"tab-content",id:"productTabContent",children:[(0,a.jsx)("div",{className:"tab-pane fade show active",id:"grid-tab-pane",role:"tabpanel","aria-labelledby":"grid-tab",tabIndex:"0",children:(0,a.jsx)("div",{className:"row",children:N.slice(f,f+q).map(e=>(0,a.jsx)("div",{className:"col-xl-4 col-md-6 col-sm-6",children:(0,a.jsx)(o.Z,{product:e})},e._id))})}),(0,a.jsx)("div",{className:"tab-pane fade",id:"list-tab-pane",role:"tabpanel","aria-labelledby":"list-tab",tabIndex:"0",children:(0,a.jsx)("div",{className:"tp-shop-list-wrapper tp-shop-item-primary mb-70",children:(0,a.jsx)("div",{className:"row",children:(0,a.jsx)("div",{className:"col-xl-12",children:N.slice(f,f+q).map(e=>(0,a.jsx)(h.Z,{product:e},e._id))})})})})]})}),t.length>0&&(0,a.jsx)("div",{className:"tp-shop-pagination mt-20",children:(0,a.jsx)("div",{className:"tp-pagination",children:(0,a.jsx)(l.Z,{items:t,countOfPage:12,paginatedData:(e,t,s)=>{S(e),P(t),Z(s)},currPage:b,setCurrPage:w})})})]})})]})})})})};r()}catch(e){r(e)}})},5720:(e,t,s)=>{s.a(e,async(e,r)=>{try{s.r(t),s.d(t,{default:()=>m,getServerSideProps:()=>v});var a=s(997),i=s(6689),l=s(1517),o=s(2518),d=s(43),c=s(7032),n=s(7314),p=s(1619),x=s(822),u=s(4452),h=s(1259),g=s(6571),j=e([o,d,n,p,h]);[o,d,n,p,h]=j.then?(await j)():j;let m=({query:e})=>{let{data:t,isError:s,isLoading:r}=(0,p.Jy)(),[j,m]=(0,i.useState)([0,0]),[v,b]=(0,i.useState)(""),[w,N]=(0,i.useState)(1);(0,i.useEffect)(()=>{if(!r&&!s&&t?.data?.length>0){let e=t.data.reduce((e,t)=>t.price>e?t.price:e,0);m([0,e])}},[r,s,t]);let S={priceFilterValues:{priceValue:j,handleChanges:e=>{N(1),m(e)}},selectHandleFilter:e=>{b(e.value)},currPage:w,setCurrPage:N},f=null;if(r&&(f=(0,a.jsx)(g.Z,{loading:r})),!r&&s&&(f=(0,a.jsx)("div",{className:"pb-80 text-center",children:(0,a.jsx)(x.Z,{msg:"There was an error"})})),r||s||t?.data?.length!==0||(f=(0,a.jsx)(x.Z,{msg:"No Products found!"})),!r&&!s&&t?.data?.length>0){let s=t.data;v&&(s="Default Sorting"===v?t.data:"Low to High"===v?t.data.slice().sort((e,t)=>Number(e.price)-Number(t.price)):"High to Low"===v?t.data.slice().sort((e,t)=>Number(t.price)-Number(e.price)):"New Added"===v?t.data.slice().sort((e,t)=>new Date(t.createdAt)-new Date(e.createdAt)):"On Sale"===v?t.data.filter(e=>e.discount>0):t.data),s=s.filter(e=>e.price>=j[0]&&e.price<=j[1]),e.status&&("on-sale"===e.status?s=s.filter(e=>e.discount>0):"in-stock"===e.status&&(s=s.filter(e=>"in-stock"===e.status))),e.category&&(s=s.filter(t=>t.parent.toLowerCase().replace("&","").split(" ").join("-")===e.category)),e.subCategory&&(s=s.filter(t=>t.children.toLowerCase().replace("&","").split(" ").join("-")===e.subCategory)),e.color&&(s=s.filter(t=>{for(let s=0;s<t.imageURLs.length;s++){let r=t.imageURLs[s]?.color;if(r&&r?.name.toLowerCase().replace("&","").split(" ").join("-")===e.color)return!0}return!1})),e.brand&&(s=s.filter(t=>t.brand.name.toLowerCase().replace("&","").split(" ").join("-")===e.brand)),f=(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.Z,{all_products:t.data,products:s,otherProps:S}),(0,a.jsx)(h.Z,{all_products:t.data,otherProps:S})]})}return(0,a.jsxs)(o.Z,{children:[(0,a.jsx)(l.Z,{pageTitle:"Shop"}),(0,a.jsx)(d.Z,{style_2:!0}),(0,a.jsx)(c.Z,{title:"Shop Grid",subtitle:"Shop Grid"}),f,(0,a.jsx)(u.Z,{primary_style:!0})]})},v=async e=>{let{query:t}=e;return{props:{query:t}}};r()}catch(e){r(e)}})},6999:e=>{e.exports=require("@react-oauth/google")},5184:e=>{e.exports=require("@reduxjs/toolkit")},4335:e=>{e.exports=require("@reduxjs/toolkit/query/react")},4515:e=>{e.exports=require("@stripe/react-stripe-js")},943:e=>{e.exports=require("@stripe/stripe-js")},1635:e=>{e.exports=require("dayjs")},2785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},968:e=>{e.exports=require("next/head")},6689:e=>{e.exports=require("react")},2807:e=>{e.exports=require("react-copy-to-clipboard")},6405:e=>{e.exports=require("react-dom")},9931:e=>{e.exports=require("react-modal")},9485:e=>{e.exports=require("react-modal-video")},2037:e=>{e.exports=require("react-range")},6022:e=>{e.exports=require("react-redux")},7386:e=>{e.exports=require("react-simple-star-rating")},8176:e=>{e.exports=require("react-spinners")},1305:e=>{e.exports=require("react-timer-hook")},997:e=>{e.exports=require("react/jsx-runtime")},2048:e=>{e.exports=require("fs")},5315:e=>{e.exports=require("path")},6162:e=>{e.exports=require("stream")},1568:e=>{e.exports=require("zlib")},9915:e=>{e.exports=import("js-cookie")},3590:e=>{e.exports=import("react-toastify")}};var t=require("../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[6859,6296,1386,593,4452,43,490],()=>s(1013));module.exports=r})();