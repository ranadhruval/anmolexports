"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1606],{18953:(e,t,a)=>{a.d(t,{Z:()=>l});var s=a(85893);a(67294);var i=a(45587);let l=e=>{let{category:t,title:a}=e;return(0,s.jsx)("section",{className:"breadcrumb__area breadcrumb__style-2 include-bg pt-50 pb-20",children:(0,s.jsx)("div",{className:"container",children:(0,s.jsx)("div",{className:"row",children:(0,s.jsx)("div",{className:"col-xxl-12",children:(0,s.jsx)("div",{className:"breadcrumb__content p-relative z-index-1",children:(0,s.jsxs)("div",{className:"breadcrumb__list has-icon",children:[(0,s.jsxs)("span",{className:"breadcrumb-icon",children:[(0,s.jsx)(i.qk,{})," "]}),(0,s.jsx)("span",{children:(0,s.jsx)("a",{href:"#",children:"Home"})}),(0,s.jsx)("span",{children:(0,s.jsx)("a",{href:"#",children:t})}),(0,s.jsx)("span",{children:a})]})})})})})})}},84163:(e,t,a)=>{a.d(t,{Z:()=>l});var s=a(85893),i=a(4677);let l=function(e){let{loading:t}=e;return(0,s.jsx)("div",{className:"d-flex align-items-center justify-content-center",style:{height:"700px"},children:(0,s.jsx)(i.Z,{loading:t})})}},49339:(e,t,a)=>{a.d(t,{Z:()=>I});var s=a(85893),i=a(67294),l=a(87226),d=a(13236),r=a(41248),c=a(47533),n=a(87536),o=a(13773),p=a(16310),m=a(48813);let{useAddReviewMutation:u}=a(60454).g.injectEndpoints({overrideExisting:!0,endpoints:e=>({addReview:e.mutation({query:e=>({url:"https://shofy-backend.vercel.app/api/review/add",method:"POST",body:e}),invalidatesTags:(e,t,a)=>["Products",{type:"Product",id:a.productId}]})})});var v=a(35445);let x=p.Ry().shape({name:p.Z_().required().label("Name"),email:p.Z_().required().email().label("Email"),comment:p.Z_().required().label("Comment")}),h=e=>{var t,a,l;let{product_id:d}=e,{user:p}=(0,r.v9)(e=>e.auth),[h,j]=(0,i.useState)(0),[N,{}]=u(),{register:b,handleSubmit:w,formState:{errors:f},reset:g}=(0,n.cI)({resolver:(0,c.X)(x)});return(0,s.jsxs)("form",{onSubmit:w(e=>{if(p)N({userId:null==p?void 0:p._id,productId:d,rating:h,comment:e.comment}).then(e=>{var t,a,s;(null==e?void 0:e.error)?(0,v.cB)(null==e?void 0:null===(a=e.error)||void 0===a?void 0:null===(t=a.data)||void 0===t?void 0:t.message):(0,v.t5)(null==e?void 0:null===(s=e.data)||void 0===s?void 0:s.message)});else{(0,v.cB)("Please login first");return}g()}),children:[(0,s.jsxs)("div",{className:"tp-product-details-review-form-rating d-flex align-items-center",children:[(0,s.jsx)("p",{children:"Your Rating :"}),(0,s.jsx)("div",{className:"tp-product-details-review-form-rating-icon d-flex align-items-center",children:(0,s.jsx)(o.i,{onClick:e=>{j(e)},allowFraction:!0,size:16,initialValue:h})})]}),(0,s.jsxs)("div",{className:"tp-product-details-review-input-wrapper",children:[(0,s.jsxs)("div",{className:"tp-product-details-review-input-box",children:[(0,s.jsx)("div",{className:"tp-product-details-review-input",children:(0,s.jsx)("textarea",{...b("comment",{required:"Comment is required!"}),id:"comment",name:"comment",placeholder:"Write your review here..."})}),(0,s.jsx)("div",{className:"tp-product-details-review-input-title",children:(0,s.jsx)("label",{htmlFor:"msg",children:"Your Review"})}),(0,s.jsx)(m.Z,{msg:null===(t=f.name)||void 0===t?void 0:t.comment})]}),(0,s.jsxs)("div",{className:"tp-product-details-review-input-box",children:[(0,s.jsx)("div",{className:"tp-product-details-review-input",children:(0,s.jsx)("input",{...b("name",{required:"Name is required!"}),name:"name",id:"name",type:"text",placeholder:"Shahnewaz Sakil"})}),(0,s.jsx)("div",{className:"tp-product-details-review-input-title",children:(0,s.jsx)("label",{htmlFor:"name",children:"Your Name"})}),(0,s.jsx)(m.Z,{msg:null===(a=f.name)||void 0===a?void 0:a.name})]}),(0,s.jsxs)("div",{className:"tp-product-details-review-input-box",children:[(0,s.jsx)("div",{className:"tp-product-details-review-input",children:(0,s.jsx)("input",{...b("email",{required:"Name is required!"}),name:"email",id:"email",type:"email",placeholder:"shofy@mail.com"})}),(0,s.jsx)("div",{className:"tp-product-details-review-input-title",children:(0,s.jsx)("label",{htmlFor:"email",children:"Your Email"})}),(0,s.jsx)(m.Z,{msg:null===(l=f.name)||void 0===l?void 0:l.email})]})]}),(0,s.jsx)("div",{className:"tp-product-details-review-btn-wrapper",children:(0,s.jsx)("button",{type:"submit",className:"tp-product-details-review-btn",children:"Submit"})})]})};var j=a(27484),N=a.n(j),b=a(25675),w=a.n(b);let f=e=>{let{review:t}=e,{comment:a,createdAt:i,rating:l,userId:d}=t||{};return(0,s.jsxs)("div",{className:"tp-product-details-review-avater d-flex align-items-start",children:[(0,s.jsxs)("div",{className:"tp-product-details-review-avater-thumb",children:[!(null==d?void 0:d.imageURL)&&(0,s.jsx)("h5",{className:"review-name",children:null==d?void 0:d.name[0]}),(0,s.jsx)("a",{href:"#",children:(null==d?void 0:d.imageURL)&&(0,s.jsx)(w(),{src:null==d?void 0:d.imageURL,alt:"user img",width:60,height:60})})]}),(0,s.jsxs)("div",{className:"tp-product-details-review-avater-content",children:[(0,s.jsx)("div",{className:"tp-product-details-review-avater-rating d-flex align-items-center",children:(0,s.jsx)(o.i,{allowFraction:!0,size:16,initialValue:l,readonly:!0})}),(0,s.jsx)("h3",{className:"tp-product-details-review-avater-title",children:null==d?void 0:d.name}),(0,s.jsx)("span",{className:"tp-product-details-review-avater-meta",children:N()(i).format("MMMM D, YYYY")}),(0,s.jsx)("div",{className:"tp-product-details-review-avater-comment",children:(0,s.jsx)("p",{children:a})})]})]})},g=e=>{let{product:t}=e,{_id:a,description:l,additionalInformation:d,reviews:r}=t||{},c=(0,i.useRef)(null),n=(0,i.useRef)(null),o=e=>{e.target.classList.contains("active")&&(n.current.style.left=e.target.offsetLeft+"px",n.current.style.width=e.target.offsetWidth+"px")};function p(e){let{active:t=!1,id:a,title:i,linkRef:l}=e;return(0,s.jsx)("button",{ref:l,className:"nav-link ".concat(t?"active":""),id:"nav-".concat(a,"-tab"),"data-bs-toggle":"tab","data-bs-target":"#nav-".concat(a),type:"button",role:"tab","aria-controls":"nav-".concat(a),"aria-selected":t?"true":"false",tabIndex:"-1",onClick:e=>o(e),children:i})}return(0,i.useEffect)(()=>{var e;(null===(e=c.current)||void 0===e?void 0:e.classList.contains("active"))&&(n.current.style.left=c.current.offsetLeft+"px",n.current.style.width=c.current.offsetWidth+"px")},[]),(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:"tp-product-details-tab-nav tp-tab",children:[(0,s.jsx)("nav",{children:(0,s.jsxs)("div",{className:"nav nav-tabs justify-content-center p-relative tp-product-tab",id:"navPresentationTab",role:"tablist",children:[(0,s.jsx)(p,{active:!0,linkRef:c,id:"desc",title:"Description"}),(0,s.jsx)(p,{id:"additional",title:"Additional information"}),(0,s.jsx)(p,{id:"review",title:"Reviews (".concat(r.length,")")}),(0,s.jsx)("span",{ref:n,id:"productTabMarker",className:"tp-product-details-tab-line"})]})}),(0,s.jsxs)("div",{className:"tab-content",id:"navPresentationTabContent",children:[(0,s.jsx)("div",{className:"tab-pane fade show active",id:"nav-desc",role:"tabpanel","aria-labelledby":"nav-desc-tab",tabIndex:"-1",children:(0,s.jsx)("div",{className:"tp-product-details-desc-wrapper pt-60",children:(0,s.jsx)("div",{className:"row",children:(0,s.jsx)("div",{className:"col-xl-12",children:(0,s.jsx)("div",{className:"tp-product-details-desc-item",children:(0,s.jsx)("div",{className:"row align-items-center",children:(0,s.jsx)("div",{className:"col-lg-12",children:(0,s.jsx)("div",{className:"tp-product-details-desc-content",children:(0,s.jsx)("p",{children:l})})})})})})})})}),(0,s.jsx)("div",{className:"tab-pane fade",id:"nav-additional",role:"tabpanel","aria-labelledby":"nav-additional-tab",tabIndex:"-1",children:(0,s.jsx)("div",{className:"tp-product-details-additional-info ",children:(0,s.jsx)("div",{className:"row justify-content-center",children:(0,s.jsx)("div",{className:"col-xl-10",children:(0,s.jsx)("table",{children:(0,s.jsx)("tbody",{children:null==d?void 0:d.map((e,t)=>(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:e.key}),(0,s.jsx)("td",{children:e.value})]},t))})})})})})}),(0,s.jsx)("div",{className:"tab-pane fade",id:"nav-review",role:"tabpanel","aria-labelledby":"nav-review-tab",tabIndex:"-1",children:(0,s.jsx)("div",{className:"tp-product-details-review-wrapper pt-60",children:(0,s.jsxs)("div",{className:"row",children:[(0,s.jsx)("div",{className:"col-lg-6",children:(0,s.jsx)("div",{className:"tp-product-details-review-statics",children:(0,s.jsxs)("div",{className:"tp-product-details-review-list pr-110",children:[(0,s.jsx)("h3",{className:"tp-product-details-review-title",children:"Rating & Review"}),0===r.length&&(0,s.jsx)("h3",{className:"tp-product-details-review-title",children:"There are no reviews yet."}),r.length>0&&r.map(e=>(0,s.jsx)(f,{review:e},e._id))]})})}),(0,s.jsx)("div",{className:"col-lg-6",children:(0,s.jsxs)("div",{className:"tp-product-details-review-form",children:[(0,s.jsx)("h3",{className:"tp-product-details-review-form-title",children:"Review this product"}),(0,s.jsx)("p",{children:"Your email address will not be published. Required fields are marked *"}),(0,s.jsx)(h,{product_id:a})]})})]})})})]})]})})};var y=a(22546),k=a(50067),_=a(18436),R=a(88361),P=a(47617);let Z={slidesPerView:4,spaceBetween:24,navigation:{nextEl:".tp-related-slider-button-next",prevEl:".tp-related-slider-button-prev"},autoplay:{delay:5e3},breakpoints:{1200:{slidesPerView:4},992:{slidesPerView:3},768:{slidesPerView:2},576:{slidesPerView:2},0:{slidesPerView:1}}},C=e=>{var t,a;let{id:i}=e,{data:l,isError:d,isLoading:r}=(0,_.W)(i),c=null;if(r&&(c=(0,s.jsx)(P._8,{loading:r})),!r&&d&&(c=(0,s.jsx)(m.Z,{msg:"There was an error"})),r||d||(null==l?void 0:null===(t=l.data)||void 0===t?void 0:t.length)!==0||(c=(0,s.jsx)(m.Z,{msg:"No Products found!"})),!r&&!d&&(null==l?void 0:null===(a=l.data)||void 0===a?void 0:a.length)>0){let e=l.data;c=(0,s.jsx)(y.tq,{...Z,modules:[k.pt,k.W_],className:"tp-product-related-slider-active swiper-container mb-10",children:e.map(e=>(0,s.jsx)(y.o5,{children:(0,s.jsx)(R.Z,{product:e,primary_style:!0})},e._id))})}return(0,s.jsx)("div",{className:"tp-product-related-slider",children:c})},I=e=>{let{productItem:t}=e,{_id:a,img:c,imageURLs:n,videoId:o,status:p}=t||{},[m,u]=(0,i.useState)(c);(0,r.I0)(),(0,i.useEffect)(()=>{u(c)},[c]);let v=e=>{u(e.img)};return(0,s.jsxs)("section",{className:"tp-product-details-area",children:[(0,s.jsx)("div",{className:"tp-product-details-top pb-115",children:(0,s.jsx)("div",{className:"container",children:(0,s.jsxs)("div",{className:"row",children:[(0,s.jsx)("div",{className:"col-xl-7 col-lg-6",children:(0,s.jsx)(l.Z,{activeImg:m,handleImageActive:v,imageURLs:n,imgWidth:580,imgHeight:670,videoId:o,status:p})}),(0,s.jsx)("div",{className:"col-xl-5 col-lg-6",children:(0,s.jsx)(d.Z,{productItem:t,handleImageActive:v,activeImg:m,detailsBottom:!0})})]})})}),(0,s.jsx)("div",{className:"tp-product-details-bottom pb-140",children:(0,s.jsx)("div",{className:"container",children:(0,s.jsx)("div",{className:"row",children:(0,s.jsx)("div",{className:"col-xl-12",children:(0,s.jsx)(g,{product:t})})})})}),(0,s.jsx)("section",{className:"tp-related-product pt-95 pb-50",children:(0,s.jsxs)("div",{className:"container",children:[(0,s.jsx)("div",{className:"row",children:(0,s.jsxs)("div",{className:"tp-section-title-wrapper-6 text-center mb-40",children:[(0,s.jsx)("span",{className:"tp-section-title-pre-6",children:"Next day Products"}),(0,s.jsx)("h3",{className:"tp-section-title-6",children:"Related Products"})]})}),(0,s.jsx)("div",{className:"row",children:(0,s.jsx)(C,{id:a})})]})})]})}},88361:(e,t,a)=>{a.d(t,{Z:()=>u});var s=a(85893);a(67294);var i=a(25675),l=a.n(i),d=a(41248),r=a(41664),c=a.n(r),n=a(45587),o=a(83943),p=a(69634),m=a(27935);let u=e=>{let{product:t,prdCenter:a=!1,primary_style:i=!1}=e,{_id:r,img:u,title:v,discount:x,price:h,tags:j,status:N}=t||{},{cart_products:b}=(0,d.v9)(e=>e.cart),{wishlist:w}=(0,d.v9)(e=>e.wishlist),f=b.some(e=>e._id===r),g=w.some(e=>e._id===r),y=(0,d.I0)(),k=e=>{y((0,p.YR)(e))},_=e=>{y((0,m.CZ)(e))};return(0,s.jsxs)("div",{className:"tp-product-item-3 mb-50 ".concat(i?"tp-product-style-primary":""," ").concat(a?"text-center":""),children:[(0,s.jsxs)("div",{className:"tp-product-thumb-3 mb-15 fix p-relative z-index-1",children:[(0,s.jsx)(c(),{href:"/product-details/".concat(r),children:(0,s.jsx)(l(),{src:u,alt:"product image",width:282,height:320})}),(0,s.jsx)("div",{className:"tp-product-badge",children:"out-of-stock"===N&&(0,s.jsx)("span",{className:"product-hot",children:"out-stock"})}),(0,s.jsx)("div",{className:"tp-product-action-3 tp-product-action-blackStyle",children:(0,s.jsxs)("div",{className:"tp-product-action-item-3 d-flex flex-column",children:[f?(0,s.jsxs)(c(),{href:"/cart",className:"tp-product-action-btn-3 ".concat(f?"active":""," tp-product-add-cart-btn text-center"),children:[(0,s.jsx)(n.AP,{}),(0,s.jsx)("span",{className:"tp-product-tooltip",children:"View Cart"})]}):(0,s.jsxs)("button",{type:"button",onClick:()=>k(t),className:"tp-product-action-btn-3 ".concat(f?"active":""," tp-product-add-cart-btn"),disabled:"out-of-stock"===N,children:[(0,s.jsx)(n.AP,{}),(0,s.jsx)("span",{className:"tp-product-tooltip",children:"Add to Cart"})]}),(0,s.jsxs)("button",{onClick:()=>y((0,o.Dz)(t)),className:"tp-product-action-btn-3 tp-product-quick-view-btn",children:[(0,s.jsx)(n.Nx,{}),(0,s.jsx)("span",{className:"tp-product-tooltip",children:"Quick View"})]}),(0,s.jsxs)("button",{disabled:"out-of-stock"===N,onClick:()=>_(t),className:"tp-product-action-btn-3 \n            ".concat(g?"active":""," tp-product-add-to-wishlist-btn"),children:[(0,s.jsx)(n.sq,{}),(0,s.jsx)("span",{className:"tp-product-tooltip",children:"Add To Wishlist"})]})]})}),(0,s.jsx)("div",{className:"tp-product-add-cart-btn-large-wrapper",children:f?(0,s.jsx)(c(),{href:"/cart",className:"tp-product-add-cart-btn-large text-center",children:"View To Cart"}):(0,s.jsx)("button",{onClick:()=>k(t),type:"button",className:"tp-product-add-cart-btn-large",disabled:"out-of-stock"===N,children:"Add To Cart"})})]}),(0,s.jsxs)("div",{className:"tp-product-content-3",children:[(0,s.jsx)("div",{className:"tp-product-tag-3",children:(0,s.jsx)("span",{children:j[1]})}),(0,s.jsx)("h3",{className:"tp-product-title-3",children:(0,s.jsx)(c(),{href:"/product-details/".concat(r),children:v})}),(0,s.jsx)("div",{className:"tp-product-price-wrapper-3",children:(0,s.jsxs)("span",{className:"tp-product-price-3",children:["$",h.toFixed(2)]})})]})]})}}}]);