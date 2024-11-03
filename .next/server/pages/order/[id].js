"use strict";(()=>{var e={};e.id=8441,e.ids=[8441],e.modules={3459:(e,s,r)=>{r.a(e,async(e,t)=>{try{r.r(s),r.d(s,{config:()=>u,default:()=>p,getServerSideProps:()=>h,getStaticPaths:()=>x,getStaticProps:()=>m,reportWebVitals:()=>j,routeModule:()=>y,unstable_getServerProps:()=>N,unstable_getServerSideProps:()=>_,unstable_getStaticParams:()=>b,unstable_getStaticPaths:()=>g,unstable_getStaticProps:()=>v});var a=r(5872),i=r(3593),c=r(1323),l=r(7997),d=r(784),n=r(1162),o=e([d,n]);[d,n]=o.then?(await o)():o;let p=(0,c.l)(n,"default"),m=(0,c.l)(n,"getStaticProps"),x=(0,c.l)(n,"getStaticPaths"),h=(0,c.l)(n,"getServerSideProps"),u=(0,c.l)(n,"config"),j=(0,c.l)(n,"reportWebVitals"),v=(0,c.l)(n,"unstable_getStaticProps"),g=(0,c.l)(n,"unstable_getStaticPaths"),b=(0,c.l)(n,"unstable_getStaticParams"),N=(0,c.l)(n,"unstable_getServerProps"),_=(0,c.l)(n,"unstable_getServerSideProps"),y=new a.PagesRouteModule({definition:{kind:i.x.PAGES,page:"/order/[id]",pathname:"/order/[id]",bundlePath:"",filename:""},components:{App:d.default,Document:l.default},userland:n});t()}catch(e){t(e)}})},639:(e,s,r)=>{r.d(s,{Z:()=>i});var t=r(997),a=r(9663);let i=function({loading:e}){return(0,t.jsx)("div",{className:"d-flex align-items-center justify-content-center",style:{height:"700px"},children:(0,t.jsx)(a.Z,{loading:e})})}},1162:(e,s,r)=>{r.a(e,async(e,t)=>{try{r.r(s),r.d(s,{default:()=>y,getServerSideProps:()=>_});var a=r(997);r(1163);var i=r(6689),c=r(5675),l=r.n(c),d=r(1635),n=r.n(d),o=r(53),p=r.n(o),m=r(1517),x=r(2518),h=r(43),u=r(4452),j=r(1942),v=r(822),g=r(1436),b=r(639),N=e([x,h,g]);[x,h,g]=N.then?(await N)():N;let _=async({params:e})=>({props:{params:e}}),y=({params:e})=>{let s=e.id,r=(0,i.useRef)(),{data:t,isError:c,isLoading:d}=(0,g.T2)(s),o=null;if(d&&(o=(0,a.jsx)(b.Z,{loading:d})),c&&(o=(0,a.jsx)(v.Z,{msg:"There was an error"})),!d&&!c){let{name:e,country:s,city:i,contact:c,invoice:d,createdAt:m,cart:x,shippingCost:h,discount:u,totalAmount:v,paymentMethod:g}=t.order;o=(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("section",{className:"invoice__area pt-120 pb-120",children:(0,a.jsxs)("div",{className:"container",children:[(0,a.jsx)("div",{className:"invoice__msg-wrapper",children:(0,a.jsx)("div",{className:"row",children:(0,a.jsx)("div",{className:"col-xl-12",children:(0,a.jsx)("div",{className:"invoice_msg mb-40",children:(0,a.jsxs)("p",{className:"text-black alert alert-success",children:["Thank you ",(0,a.jsx)("strong",{children:e})," Your order have been received ! "]})})})})}),(0,a.jsxs)("div",{ref:r,className:"invoice__wrapper grey-bg-2 pt-40 pb-40 pl-40 pr-40 tp-invoice-print-wrapper",children:[(0,a.jsx)("div",{className:"invoice__header-wrapper border-2 border-bottom border-white mb-40",children:(0,a.jsx)("div",{className:"row",children:(0,a.jsx)("div",{className:"col-xl-12",children:(0,a.jsx)("div",{className:"invoice__header pb-20",children:(0,a.jsxs)("div",{className:"row align-items-end",children:[(0,a.jsx)("div",{className:"col-md-4 col-sm-6",children:(0,a.jsxs)("div",{className:"invoice__left",children:[(0,a.jsx)(l(),{src:j.Z,alt:"logo"}),(0,a.jsxs)("p",{children:["2879 Elk Creek Road ",(0,a.jsx)("br",{})," Stone Mountain, Georgia "]})]})}),(0,a.jsx)("div",{className:"col-md-8 col-sm-6",children:(0,a.jsx)("div",{className:"invoice__right mt-15 mt-sm-0 text-sm-end",children:(0,a.jsx)("h3",{className:"text-uppercase font-70 mb-20",children:"Invoice"})})})]})})})})}),(0,a.jsx)("div",{className:"invoice__customer mb-30",children:(0,a.jsxs)("div",{className:"row",children:[(0,a.jsx)("div",{className:"col-md-6 col-sm-8",children:(0,a.jsxs)("div",{className:"invoice__customer-details",children:[(0,a.jsx)("h4",{className:"mb-10 text-uppercase",children:e}),(0,a.jsx)("p",{className:"mb-0 text-uppercase",children:s}),(0,a.jsx)("p",{className:"mb-0 text-uppercase",children:i}),(0,a.jsx)("p",{className:"mb-0",children:c})]})}),(0,a.jsx)("div",{className:"col-md-6 col-sm-4",children:(0,a.jsxs)("div",{className:"invoice__details mt-md-0 mt-20 text-md-end",children:[(0,a.jsxs)("p",{className:"mb-0",children:[(0,a.jsx)("strong",{children:"Invoice ID:"})," #",d]}),(0,a.jsxs)("p",{className:"mb-0",children:[(0,a.jsx)("strong",{children:"Date:"})," ",n()(m).format("MMMM D, YYYY")]})]})})]})}),(0,a.jsx)("div",{className:"invoice__order-table pt-30 pb-30 pl-40 pr-40 bg-white mb-30",children:(0,a.jsxs)("table",{className:"table",children:[(0,a.jsx)("thead",{className:"table-light",children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{scope:"col",children:"SL"}),(0,a.jsx)("th",{scope:"col",children:"Product Name"}),(0,a.jsx)("th",{scope:"col",children:"Quantity"}),(0,a.jsx)("th",{scope:"col",children:"Item Price"}),(0,a.jsx)("th",{scope:"col",children:"Amount"})]})}),(0,a.jsx)("tbody",{className:"table-group-divider",children:x.map((e,s)=>(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:s+1}),(0,a.jsx)("td",{children:e.title}),(0,a.jsx)("td",{children:e.orderQuantity}),(0,a.jsxs)("td",{children:["$",e.price]}),(0,a.jsxs)("td",{children:["$",e.price*e.orderQuantity]})]},s))})]})}),(0,a.jsx)("div",{className:"invoice__total pt-40 pb-10 alert-success pl-40 pr-40 mb-30",children:(0,a.jsxs)("div",{className:"row",children:[(0,a.jsx)("div",{className:"col-lg-3 col-md-4",children:(0,a.jsxs)("div",{className:"invoice__payment-method mb-30",children:[(0,a.jsx)("h5",{className:"mb-0",children:"Payment Method"}),(0,a.jsx)("p",{className:"tp-font-medium text-uppercase",children:g})]})}),(0,a.jsx)("div",{className:"col-lg-3 col-md-4",children:(0,a.jsxs)("div",{className:"invoice__shippint-cost mb-30",children:[(0,a.jsx)("h5",{className:"mb-0",children:"Shipping Cost"}),(0,a.jsxs)("p",{className:"tp-font-medium",children:["$",h]})]})}),(0,a.jsx)("div",{className:"col-lg-3 col-md-4",children:(0,a.jsxs)("div",{className:"invoice__discount-cost mb-30",children:[(0,a.jsx)("h5",{className:"mb-0",children:"Discount"}),(0,a.jsxs)("p",{className:"tp-font-medium",children:["$",u.toFixed(2)]})]})}),(0,a.jsx)("div",{className:"col-lg-3 col-md-4",children:(0,a.jsxs)("div",{className:"invoice__total-ammount mb-30",children:[(0,a.jsx)("h5",{className:"mb-0",children:"Total Ammount"}),(0,a.jsx)("p",{className:"tp-font-medium text-danger",children:(0,a.jsxs)("strong",{children:["$",parseInt(v).toFixed(2)]})})]})})]})})]}),(0,a.jsx)("div",{className:"invoice__print text-end mt-3",children:(0,a.jsx)("div",{className:"row",children:(0,a.jsx)("div",{className:"col-xl-12",children:(0,a.jsx)(p(),{trigger:()=>(0,a.jsxs)("button",{type:"button",className:"tp-invoice-print tp-btn tp-btn-black",children:[(0,a.jsx)("span",{className:"mr-5",children:(0,a.jsx)("i",{className:"fa-regular fa-print"})})," ","Print"]}),content:()=>r.current,documentTitle:"Invoice"})})})})]})})})}return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)(x.Z,{children:[(0,a.jsx)(m.Z,{pageTitle:"Order Details"}),(0,a.jsx)(h.Z,{style_2:!0}),o,(0,a.jsx)(u.Z,{primary_style:!0})]})})};t()}catch(e){t(e)}})},1436:(e,s,r)=>{r.a(e,async(e,t)=>{try{r.d(s,{HY:()=>l,SB:()=>o,T2:()=>n,yX:()=>d});var a=r(6703),i=r(9914),c=e([a]);let{useCreatePaymentIntentMutation:l,useSaveOrderMutation:d,useGetUserOrderByIdQuery:n,useGetUserOrdersQuery:o}=(a=(c.then?(await c)():c)[0]).g.injectEndpoints({overrideExisting:!0,endpoints:e=>({createPaymentIntent:e.mutation({query:e=>({url:"https://shofy-backend.vercel.app/api/order/create-payment-intent",method:"POST",body:e}),async onQueryStarted(e,{queryFulfilled:s,dispatch:r}){try{let e=await s;r((0,i.SZ)(e.clientSecret))}catch(e){}}}),saveOrder:e.mutation({query:e=>({url:"https://shofy-backend.vercel.app/api/order/saveOrder",method:"POST",body:e}),invalidatesTags:["UserOrders"],async onQueryStarted(e,{queryFulfilled:s,dispatch:r}){try{await s&&(localStorage.removeItem("couponInfo"),localStorage.removeItem("cart_products"),localStorage.removeItem("shipping_info"))}catch(e){}}}),getUserOrders:e.query({query:()=>"https://shofy-backend.vercel.app/api/user-order",providesTags:["UserOrders"],keepUnusedDataFor:600}),getUserOrderById:e.query({query:e=>`https://shofy-backend.vercel.app/api/user-order/${e}`,providesTags:(e,s,r)=>[{type:"UserOrder",id:r}],keepUnusedDataFor:600})})});t()}catch(e){t(e)}})},6999:e=>{e.exports=require("@react-oauth/google")},5184:e=>{e.exports=require("@reduxjs/toolkit")},4335:e=>{e.exports=require("@reduxjs/toolkit/query/react")},4515:e=>{e.exports=require("@stripe/react-stripe-js")},943:e=>{e.exports=require("@stripe/stripe-js")},1635:e=>{e.exports=require("dayjs")},2785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},968:e=>{e.exports=require("next/head")},6689:e=>{e.exports=require("react")},2807:e=>{e.exports=require("react-copy-to-clipboard")},6405:e=>{e.exports=require("react-dom")},9931:e=>{e.exports=require("react-modal")},9485:e=>{e.exports=require("react-modal-video")},6022:e=>{e.exports=require("react-redux")},7386:e=>{e.exports=require("react-simple-star-rating")},8176:e=>{e.exports=require("react-spinners")},1305:e=>{e.exports=require("react-timer-hook")},53:e=>{e.exports=require("react-to-print")},997:e=>{e.exports=require("react/jsx-runtime")},2048:e=>{e.exports=require("fs")},5315:e=>{e.exports=require("path")},6162:e=>{e.exports=require("stream")},1568:e=>{e.exports=require("zlib")},9915:e=>{e.exports=import("js-cookie")},3590:e=>{e.exports=import("react-toastify")}};var s=require("../../webpack-runtime.js");s.C(e);var r=e=>s(s.s=e),t=s.X(0,[6859,6296,1386,593,4452,43],()=>r(3459));module.exports=t})();