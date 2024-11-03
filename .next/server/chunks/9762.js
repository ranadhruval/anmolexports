"use strict";exports.id=9762,exports.ids=[9762],exports.modules={684:(e,t,a)=>{a.d(t,{Z:()=>r});var s=a(997);a(6689);var i=a(8203);let r=({category:e,title:t})=>(0,s.jsx)("section",{className:"breadcrumb__area breadcrumb__style-2 include-bg pt-50 pb-20",children:(0,s.jsx)("div",{className:"container",children:(0,s.jsx)("div",{className:"row",children:(0,s.jsx)("div",{className:"col-xxl-12",children:(0,s.jsx)("div",{className:"breadcrumb__content p-relative z-index-1",children:(0,s.jsxs)("div",{className:"breadcrumb__list has-icon",children:[(0,s.jsxs)("span",{className:"breadcrumb-icon",children:[(0,s.jsx)(i.qk,{})," "]}),(0,s.jsx)("span",{children:(0,s.jsx)("a",{href:"#",children:"Home"})}),(0,s.jsx)("span",{children:(0,s.jsx)("a",{href:"#",children:e})}),(0,s.jsx)("span",{children:t})]})})})})})})},1189:(e,t,a)=>{a.a(e,async(e,s)=>{try{a.d(t,{Z:()=>v});var i=a(997),r=a(6689),l=a(1908),d=a(5641),c=a(6022),n=a(7386),o=a(5609),p=a(822),m=a(4060),h=a(3696),u=e([l,d,m,h]);[l,d,m,h]=u.then?(await u)():u;let x=o.object().shape({name:o.string().required().label("Name"),email:o.string().required().email().label("Email"),comment:o.string().required().label("Comment")}),v=({product_id:e})=>{let{user:t}=(0,c.useSelector)(e=>e.auth),[a,s]=(0,r.useState)(0),[o,{}]=(0,m.M)(),{register:u,handleSubmit:v,formState:{errors:j},reset:N}=(0,d.useForm)({resolver:(0,l.yupResolver)(x)});return(0,i.jsxs)("form",{onSubmit:v(s=>{if(t)o({userId:t?._id,productId:e,rating:a,comment:s.comment}).then(e=>{e?.error?(0,h.cB)(e?.error?.data?.message):(0,h.t5)(e?.data?.message)});else{(0,h.cB)("Please login first");return}N()}),children:[(0,i.jsxs)("div",{className:"tp-product-details-review-form-rating d-flex align-items-center",children:[(0,i.jsx)("p",{children:"Your Rating :"}),(0,i.jsx)("div",{className:"tp-product-details-review-form-rating-icon d-flex align-items-center",children:(0,i.jsx)(n.Rating,{onClick:e=>{s(e)},allowFraction:!0,size:16,initialValue:a})})]}),(0,i.jsxs)("div",{className:"tp-product-details-review-input-wrapper",children:[(0,i.jsxs)("div",{className:"tp-product-details-review-input-box",children:[(0,i.jsx)("div",{className:"tp-product-details-review-input",children:(0,i.jsx)("textarea",{...u("comment",{required:"Comment is required!"}),id:"comment",name:"comment",placeholder:"Write your review here..."})}),(0,i.jsx)("div",{className:"tp-product-details-review-input-title",children:(0,i.jsx)("label",{htmlFor:"msg",children:"Your Review"})}),(0,i.jsx)(p.Z,{msg:j.name?.comment})]}),(0,i.jsxs)("div",{className:"tp-product-details-review-input-box",children:[(0,i.jsx)("div",{className:"tp-product-details-review-input",children:(0,i.jsx)("input",{...u("name",{required:"Name is required!"}),name:"name",id:"name",type:"text",placeholder:"Shahnewaz Sakil"})}),(0,i.jsx)("div",{className:"tp-product-details-review-input-title",children:(0,i.jsx)("label",{htmlFor:"name",children:"Your Name"})}),(0,i.jsx)(p.Z,{msg:j.name?.name})]}),(0,i.jsxs)("div",{className:"tp-product-details-review-input-box",children:[(0,i.jsx)("div",{className:"tp-product-details-review-input",children:(0,i.jsx)("input",{...u("email",{required:"Name is required!"}),name:"email",id:"email",type:"email",placeholder:"shofy@mail.com"})}),(0,i.jsx)("div",{className:"tp-product-details-review-input-title",children:(0,i.jsx)("label",{htmlFor:"email",children:"Your Email"})}),(0,i.jsx)(p.Z,{msg:j.name?.email})]})]}),(0,i.jsx)("div",{className:"tp-product-details-review-btn-wrapper",children:(0,i.jsx)("button",{type:"submit",className:"tp-product-details-review-btn",children:"Submit"})})]})};s()}catch(e){s(e)}})},639:(e,t,a)=>{a.d(t,{Z:()=>r});var s=a(997),i=a(9663);let r=function({loading:e}){return(0,s.jsx)("div",{className:"d-flex align-items-center justify-content-center",style:{height:"700px"},children:(0,s.jsx)(i.Z,{loading:e})})}},3224:(e,t,a)=>{a.a(e,async(e,s)=>{try{a.d(t,{Z:()=>n});var i=a(997),r=a(6689),l=a(1189),d=a(8150),c=e([l]);l=(c.then?(await c)():c)[0];let n=({product:e})=>{let{_id:t,description:a,additionalInformation:s,reviews:c}=e||{},n=(0,r.useRef)(null),o=(0,r.useRef)(null),p=e=>{e.target.classList.contains("active")&&(o.current.style.left=e.target.offsetLeft+"px",o.current.style.width=e.target.offsetWidth+"px")};function m({active:e=!1,id:t,title:a,linkRef:s}){return(0,i.jsx)("button",{ref:s,className:`nav-link ${e?"active":""}`,id:`nav-${t}-tab`,"data-bs-toggle":"tab","data-bs-target":`#nav-${t}`,type:"button",role:"tab","aria-controls":`nav-${t}`,"aria-selected":e?"true":"false",tabIndex:"-1",onClick:e=>p(e),children:a})}return(0,r.useEffect)(()=>{n.current?.classList.contains("active")&&(o.current.style.left=n.current.offsetLeft+"px",o.current.style.width=n.current.offsetWidth+"px")},[]),(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{className:"tp-product-details-tab-nav tp-tab",children:[(0,i.jsx)("nav",{children:(0,i.jsxs)("div",{className:"nav nav-tabs justify-content-center p-relative tp-product-tab",id:"navPresentationTab",role:"tablist",children:[(0,i.jsx)(m,{active:!0,linkRef:n,id:"desc",title:"Description"}),(0,i.jsx)(m,{id:"additional",title:"Additional information"}),(0,i.jsx)(m,{id:"review",title:`Reviews (${c.length})`}),(0,i.jsx)("span",{ref:o,id:"productTabMarker",className:"tp-product-details-tab-line"})]})}),(0,i.jsxs)("div",{className:"tab-content",id:"navPresentationTabContent",children:[(0,i.jsx)("div",{className:"tab-pane fade show active",id:"nav-desc",role:"tabpanel","aria-labelledby":"nav-desc-tab",tabIndex:"-1",children:(0,i.jsx)("div",{className:"tp-product-details-desc-wrapper pt-60",children:(0,i.jsx)("div",{className:"row",children:(0,i.jsx)("div",{className:"col-xl-12",children:(0,i.jsx)("div",{className:"tp-product-details-desc-item",children:(0,i.jsx)("div",{className:"row align-items-center",children:(0,i.jsx)("div",{className:"col-lg-12",children:(0,i.jsx)("div",{className:"tp-product-details-desc-content",children:(0,i.jsx)("p",{children:a})})})})})})})})}),(0,i.jsx)("div",{className:"tab-pane fade",id:"nav-additional",role:"tabpanel","aria-labelledby":"nav-additional-tab",tabIndex:"-1",children:(0,i.jsx)("div",{className:"tp-product-details-additional-info ",children:(0,i.jsx)("div",{className:"row justify-content-center",children:(0,i.jsx)("div",{className:"col-xl-10",children:(0,i.jsx)("table",{children:(0,i.jsx)("tbody",{children:s?.map((e,t)=>i.jsxs("tr",{children:[i.jsx("td",{children:e.key}),i.jsx("td",{children:e.value})]},t))})})})})})}),(0,i.jsx)("div",{className:"tab-pane fade",id:"nav-review",role:"tabpanel","aria-labelledby":"nav-review-tab",tabIndex:"-1",children:(0,i.jsx)("div",{className:"tp-product-details-review-wrapper pt-60",children:(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)("div",{className:"col-lg-6",children:(0,i.jsx)("div",{className:"tp-product-details-review-statics",children:(0,i.jsxs)("div",{className:"tp-product-details-review-list pr-110",children:[(0,i.jsx)("h3",{className:"tp-product-details-review-title",children:"Rating & Review"}),0===c.length&&(0,i.jsx)("h3",{className:"tp-product-details-review-title",children:"There are no reviews yet."}),c.length>0&&c.map(e=>(0,i.jsx)(d.Z,{review:e},e._id))]})})}),(0,i.jsx)("div",{className:"col-lg-6",children:(0,i.jsxs)("div",{className:"tp-product-details-review-form",children:[(0,i.jsx)("h3",{className:"tp-product-details-review-form-title",children:"Review this product"}),(0,i.jsx)("p",{children:"Your email address will not be published. Required fields are marked *"}),(0,i.jsx)(l.Z,{product_id:t})]})})]})})})]})]})})};s()}catch(e){s(e)}})},4294:(e,t,a)=>{a.a(e,async(e,s)=>{try{a.d(t,{Z:()=>m});var i=a(997),r=a(6689),l=a(9107),d=a(1779),c=a(6022),n=a(3224),o=a(4467),p=e([d,n,o]);[d,n,o]=p.then?(await p)():p;let m=({productItem:e})=>{let{_id:t,img:a,imageURLs:s,videoId:p,status:m}=e||{},[h,u]=(0,r.useState)(a);(0,c.useDispatch)(),(0,r.useEffect)(()=>{u(a)},[a]);let x=e=>{u(e.img)};return(0,i.jsxs)("section",{className:"tp-product-details-area",children:[(0,i.jsx)("div",{className:"tp-product-details-top pb-115",children:(0,i.jsx)("div",{className:"container",children:(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)("div",{className:"col-xl-7 col-lg-6",children:(0,i.jsx)(l.Z,{activeImg:h,handleImageActive:x,imageURLs:s,imgWidth:580,imgHeight:670,videoId:p,status:m})}),(0,i.jsx)("div",{className:"col-xl-5 col-lg-6",children:(0,i.jsx)(d.Z,{productItem:e,handleImageActive:x,activeImg:h,detailsBottom:!0})})]})})}),(0,i.jsx)("div",{className:"tp-product-details-bottom pb-140",children:(0,i.jsx)("div",{className:"container",children:(0,i.jsx)("div",{className:"row",children:(0,i.jsx)("div",{className:"col-xl-12",children:(0,i.jsx)(n.Z,{product:e})})})})}),(0,i.jsx)("section",{className:"tp-related-product pt-95 pb-50",children:(0,i.jsxs)("div",{className:"container",children:[(0,i.jsx)("div",{className:"row",children:(0,i.jsxs)("div",{className:"tp-section-title-wrapper-6 text-center mb-40",children:[(0,i.jsx)("span",{className:"tp-section-title-pre-6",children:"Next day Products"}),(0,i.jsx)("h3",{className:"tp-section-title-6",children:"Related Products"})]})}),(0,i.jsx)("div",{className:"row",children:(0,i.jsx)(o.Z,{id:t})})]})})]})};s()}catch(e){s(e)}})},4467:(e,t,a)=>{a.a(e,async(e,s)=>{try{a.d(t,{Z:()=>h});var i=a(997);a(6689);var r=a(3015),l=a(3877),d=a(1619),c=a(4917),n=a(822),o=a(4049),p=e([r,l,d,c]);[r,l,d,c]=p.then?(await p)():p;let m={slidesPerView:4,spaceBetween:24,navigation:{nextEl:".tp-related-slider-button-next",prevEl:".tp-related-slider-button-prev"},autoplay:{delay:5e3},breakpoints:{1200:{slidesPerView:4},992:{slidesPerView:3},768:{slidesPerView:2},576:{slidesPerView:2},0:{slidesPerView:1}}},h=({id:e})=>{let{data:t,isError:a,isLoading:s}=(0,d.W)(e),p=null;if(s&&(p=(0,i.jsx)(o._8,{loading:s})),!s&&a&&(p=(0,i.jsx)(n.Z,{msg:"There was an error"})),s||a||t?.data?.length!==0||(p=(0,i.jsx)(n.Z,{msg:"No Products found!"})),!s&&!a&&t?.data?.length>0){let e=t.data;p=(0,i.jsx)(r.Swiper,{...m,modules:[l.Autoplay,l.Navigation],className:"tp-product-related-slider-active swiper-container mb-10",children:e.map(e=>(0,i.jsx)(r.SwiperSlide,{children:(0,i.jsx)(c.Z,{product:e,primary_style:!0})},e._id))})}return(0,i.jsx)("div",{className:"tp-product-related-slider",children:p})};s()}catch(e){s(e)}})},8150:(e,t,a)=>{a.d(t,{Z:()=>n});var s=a(997),i=a(1635),r=a.n(i),l=a(5675),d=a.n(l);a(6689);var c=a(7386);let n=({review:e})=>{let{comment:t,createdAt:a,rating:i,userId:l}=e||{};return(0,s.jsxs)("div",{className:"tp-product-details-review-avater d-flex align-items-start",children:[(0,s.jsxs)("div",{className:"tp-product-details-review-avater-thumb",children:[!l?.imageURL&&(0,s.jsx)("h5",{className:"review-name",children:l?.name[0]}),(0,s.jsx)("a",{href:"#",children:l?.imageURL&&(0,s.jsx)(d(),{src:l?.imageURL,alt:"user img",width:60,height:60})})]}),(0,s.jsxs)("div",{className:"tp-product-details-review-avater-content",children:[(0,s.jsx)("div",{className:"tp-product-details-review-avater-rating d-flex align-items-center",children:(0,s.jsx)(c.Rating,{allowFraction:!0,size:16,initialValue:i,readonly:!0})}),(0,s.jsx)("h3",{className:"tp-product-details-review-avater-title",children:l?.name}),(0,s.jsx)("span",{className:"tp-product-details-review-avater-meta",children:r()(a).format("MMMM D, YYYY")}),(0,s.jsx)("div",{className:"tp-product-details-review-avater-comment",children:(0,s.jsx)("p",{children:t})})]})]})}},4917:(e,t,a)=>{a.a(e,async(e,s)=>{try{a.d(t,{Z:()=>x});var i=a(997);a(6689);var r=a(5675),l=a.n(r),d=a(6022),c=a(1664),n=a.n(c),o=a(8203),p=a(9825),m=a(3420),h=a(5639),u=e([m,h]);[m,h]=u.then?(await u)():u;let x=({product:e,prdCenter:t=!1,primary_style:a=!1})=>{let{_id:s,img:r,title:c,discount:u,price:x,tags:v,status:j}=e||{},{cart_products:N}=(0,d.useSelector)(e=>e.cart),{wishlist:b}=(0,d.useSelector)(e=>e.wishlist),w=N.some(e=>e._id===s),g=b.some(e=>e._id===s),f=(0,d.useDispatch)(),y=e=>{f((0,m.YR)(e))},k=e=>{f((0,h.CZ)(e))};return(0,i.jsxs)("div",{className:`tp-product-item-3 mb-50 ${a?"tp-product-style-primary":""} ${t?"text-center":""}`,children:[(0,i.jsxs)("div",{className:"tp-product-thumb-3 mb-15 fix p-relative z-index-1",children:[(0,i.jsx)(n(),{href:`/product-details/${s}`,children:(0,i.jsx)(l(),{src:r,alt:"product image",width:282,height:320})}),(0,i.jsx)("div",{className:"tp-product-badge",children:"out-of-stock"===j&&(0,i.jsx)("span",{className:"product-hot",children:"out-stock"})}),(0,i.jsx)("div",{className:"tp-product-action-3 tp-product-action-blackStyle",children:(0,i.jsxs)("div",{className:"tp-product-action-item-3 d-flex flex-column",children:[w?(0,i.jsxs)(n(),{href:"/cart",className:`tp-product-action-btn-3 ${w?"active":""} tp-product-add-cart-btn text-center`,children:[(0,i.jsx)(o.AP,{}),(0,i.jsx)("span",{className:"tp-product-tooltip",children:"View Cart"})]}):(0,i.jsxs)("button",{type:"button",onClick:()=>y(e),className:`tp-product-action-btn-3 ${w?"active":""} tp-product-add-cart-btn`,disabled:"out-of-stock"===j,children:[(0,i.jsx)(o.AP,{}),(0,i.jsx)("span",{className:"tp-product-tooltip",children:"Add to Cart"})]}),(0,i.jsxs)("button",{onClick:()=>f((0,p.Dz)(e)),className:"tp-product-action-btn-3 tp-product-quick-view-btn",children:[(0,i.jsx)(o.Nx,{}),(0,i.jsx)("span",{className:"tp-product-tooltip",children:"Quick View"})]}),(0,i.jsxs)("button",{disabled:"out-of-stock"===j,onClick:()=>k(e),className:`tp-product-action-btn-3 
            ${g?"active":""} tp-product-add-to-wishlist-btn`,children:[(0,i.jsx)(o.sq,{}),(0,i.jsx)("span",{className:"tp-product-tooltip",children:"Add To Wishlist"})]})]})}),(0,i.jsx)("div",{className:"tp-product-add-cart-btn-large-wrapper",children:w?(0,i.jsx)(n(),{href:"/cart",className:"tp-product-add-cart-btn-large text-center",children:"View To Cart"}):(0,i.jsx)("button",{onClick:()=>y(e),type:"button",className:"tp-product-add-cart-btn-large",disabled:"out-of-stock"===j,children:"Add To Cart"})})]}),(0,i.jsxs)("div",{className:"tp-product-content-3",children:[(0,i.jsx)("div",{className:"tp-product-tag-3",children:(0,i.jsx)("span",{children:v[1]})}),(0,i.jsx)("h3",{className:"tp-product-title-3",children:(0,i.jsx)(n(),{href:`/product-details/${s}`,children:c})}),(0,i.jsx)("div",{className:"tp-product-price-wrapper-3",children:(0,i.jsxs)("span",{className:"tp-product-price-3",children:["$",x.toFixed(2)]})})]})]})};s()}catch(e){s(e)}})},4060:(e,t,a)=>{a.a(e,async(e,s)=>{try{a.d(t,{M:()=>l});var i=a(6703),r=e([i]);let{useAddReviewMutation:l}=(i=(r.then?(await r)():r)[0]).g.injectEndpoints({overrideExisting:!0,endpoints:e=>({addReview:e.mutation({query:e=>({url:"https://shofy-backend.vercel.app/api/review/add",method:"POST",body:e}),invalidatesTags:(e,t,a)=>["Products",{type:"Product",id:a.productId}]})})});s()}catch(e){s(e)}})}};