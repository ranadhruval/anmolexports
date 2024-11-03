"use strict";(()=>{var e={};e.id=277,e.ids=[277],e.modules={458:(e,s,a)=>{a.a(e,async(e,r)=>{try{a.r(s),a.d(s,{config:()=>u,default:()=>p,getServerSideProps:()=>A,getStaticPaths:()=>h,getStaticProps:()=>m,reportWebVitals:()=>x,routeModule:()=>y,unstable_getServerProps:()=>v,unstable_getServerSideProps:()=>b,unstable_getStaticParams:()=>j,unstable_getStaticPaths:()=>g,unstable_getStaticProps:()=>f});var t=a(5872),i=a(3593),l=a(1323),n=a(7997),d=a(784),o=a(7870),c=e([d,o]);[d,o]=c.then?(await c)():c;let p=(0,l.l)(o,"default"),m=(0,l.l)(o,"getStaticProps"),h=(0,l.l)(o,"getStaticPaths"),A=(0,l.l)(o,"getServerSideProps"),u=(0,l.l)(o,"config"),x=(0,l.l)(o,"reportWebVitals"),f=(0,l.l)(o,"unstable_getStaticProps"),g=(0,l.l)(o,"unstable_getStaticPaths"),j=(0,l.l)(o,"unstable_getStaticParams"),v=(0,l.l)(o,"unstable_getServerProps"),b=(0,l.l)(o,"unstable_getServerSideProps"),y=new t.PagesRouteModule({definition:{kind:i.x.PAGES,page:"/profile",pathname:"/profile",bundlePath:"",filename:""},components:{App:d.default,Document:n.default},userland:o});r()}catch(e){r(e)}})},1371:(e,s,a)=>{a.a(e,async(e,r)=>{try{a.d(s,{Z:()=>u});var t=a(997);a(6689);var i=a(1908),l=a(5641),n=a(6022),d=a(5609),o=a(822),c=a(4717),p=a(3696),m=e([i,l,c,p]);[i,l,c,p]=m.then?(await m)():m;let h=d.object().shape({password:d.string().required().min(6).label("Password"),newPassword:d.string().required().min(6).label("New Password"),confirmPassword:d.string().oneOf([d.ref("newPassword"),null],"Passwords must match")}),A=d.object().shape({newPassword:d.string().required().min(6).label("New Password"),confirmPassword:d.string().oneOf([d.ref("newPassword"),null],"Passwords must match")}),u=()=>{let{user:e}=(0,n.useSelector)(e=>e.auth),[s,{}]=(0,c.$h)(),{register:a,handleSubmit:r,formState:{errors:d},reset:m}=(0,l.useForm)({resolver:(0,i.yupResolver)(e?.googleSignIn?A:h)});return(0,t.jsx)("div",{className:"profile__password",children:(0,t.jsx)("form",{onSubmit:r(a=>{s({email:e?.email,password:a.password,newPassword:a.newPassword,googleSignIn:e?.googleSignIn}).then(e=>{e?.error?(0,p.cB)(e?.error?.data?.message):(0,p.t5)(e?.data?.message)}),m()}),children:(0,t.jsxs)("div",{className:"row",children:[!e?.googleSignIn&&(0,t.jsx)("div",{className:"col-xxl-12",children:(0,t.jsxs)("div",{className:"tp-profile-input-box",children:[(0,t.jsx)("div",{className:"tp-contact-input",children:(0,t.jsx)("input",{...a("password",{required:"Password is required!"}),name:"password",id:"password",type:"password"})}),(0,t.jsx)("div",{className:"tp-profile-input-title",children:(0,t.jsx)("label",{htmlFor:"password",children:"Old Password"})}),(0,t.jsx)(o.Z,{msg:d.password?.message})]})}),(0,t.jsx)("div",{className:"col-xxl-6 col-md-6",children:(0,t.jsxs)("div",{className:"tp-profile-input-box",children:[(0,t.jsx)("div",{className:"tp-profile-input",children:(0,t.jsx)("input",{...a("newPassword",{required:"New Password is required!"}),name:"newPassword",id:"newPassword",type:"password"})}),(0,t.jsx)("div",{className:"tp-profile-input-title",children:(0,t.jsx)("label",{htmlFor:"new_pass",children:"New Password"})}),(0,t.jsx)(o.Z,{msg:d.newPassword?.message})]})}),(0,t.jsx)("div",{className:"col-xxl-6 col-md-6",children:(0,t.jsxs)("div",{className:"tp-profile-input-box",children:[(0,t.jsx)("div",{className:"tp-profile-input",children:(0,t.jsx)("input",{...a("confirmPassword"),name:"confirmPassword",id:"confirmPassword",type:"password"})}),(0,t.jsx)("div",{className:"tp-profile-input-title",children:(0,t.jsx)("label",{htmlFor:"confirmPassword",children:"Confirm Password"})}),(0,t.jsx)(o.Z,{msg:d.confirmPassword?.message})]})}),(0,t.jsx)("div",{className:"col-xxl-6 col-md-6",children:(0,t.jsx)("div",{className:"profile__btn",children:(0,t.jsx)("button",{type:"submit",className:"tp-btn",children:"Update"})})})]})})})};r()}catch(e){r(e)}})},4112:(e,s,a)=>{a.d(s,{Z:()=>d});var r=a(997),t=a(1635),i=a.n(t),l=a(1664),n=a.n(l);a(6689);let d=({orderData:e})=>{let s=e?.orders;return(0,r.jsxs)("div",{className:"profile__ticket table-responsive",children:[!s||s?.length===0&&(0,r.jsx)("div",{style:{height:"210px"},className:"d-flex align-items-center justify-content-center",children:(0,r.jsxs)("div",{className:"text-center",children:[(0,r.jsx)("i",{style:{fontSize:"30px"},className:"fa-solid fa-cart-circle-xmark"}),(0,r.jsx)("p",{children:"You Have no order Yet!"})]})}),s&&s?.length>0&&(0,r.jsxs)("table",{className:"table",children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{scope:"col",children:"Order Id"}),(0,r.jsx)("th",{scope:"col",children:"Order Time"}),(0,r.jsx)("th",{scope:"col",children:"Status"}),(0,r.jsx)("th",{scope:"col",children:"View"})]})}),(0,r.jsx)("tbody",{children:s.map((e,s)=>(0,r.jsxs)("tr",{children:[(0,r.jsxs)("th",{scope:"row",children:["#",e._id.substring(20,25)]}),(0,r.jsx)("td",{"data-info":"title",children:i()(e.createdAt).format("MMMM D, YYYY")}),(0,r.jsx)("td",{"data-info":`status ${"Pending"===e.status?"pending":""}  ${"Processing"===e.status?"hold":""}  ${"Delivered"===e.status?"done":""}`,className:`status ${"Pending"===e.status?"pending":""} ${"Processing"===e.status?"hold":""}  ${"Delivered"===e.status?"done":""}`,children:e.status}),(0,r.jsx)("td",{children:(0,r.jsx)(n(),{href:`/order/${e._id}`,className:"tp-logout-btn",children:"Invoice"})})]},s))})]})]})}},8914:(e,s,a)=>{a.a(e,async(e,r)=>{try{a.d(s,{Z:()=>c});var t=a(997);a(6689);var i=a(1163),l=a(6022),n=a(8203),d=a(5049),o=e([d]);d=(o.then?(await o)():o)[0];let c=({orderData:e})=>{let{user:s}=(0,l.useSelector)(e=>e.auth),a=(0,l.useDispatch)(),r=(0,i.useRouter)();return(0,t.jsxs)("div",{className:"profile__main",children:[(0,t.jsx)("div",{className:"profile__main-top pb-80",children:(0,t.jsxs)("div",{className:"row align-items-center",children:[(0,t.jsx)("div",{className:"col-md-6",children:(0,t.jsx)("div",{className:"profile__main-inner d-flex flex-wrap align-items-center",children:(0,t.jsx)("div",{className:"profile__main-content",children:(0,t.jsxs)("h4",{className:"profile__main-title",children:["Welcome Mr. ",s?.name]})})})}),(0,t.jsx)("div",{className:"col-md-6",children:(0,t.jsx)("div",{className:"profile__main-logout text-sm-end",children:(0,t.jsx)("a",{onClick:()=>{a((0,d._e)()),r.push("/")},className:"cursor-pointer tp-logout-btn",children:"Logout"})})})]})}),(0,t.jsx)("div",{className:"profile__main-info",children:(0,t.jsxs)("div",{className:"row gx-3",children:[(0,t.jsx)("div",{className:"col-md-3 col-sm-6",children:(0,t.jsxs)("div",{className:"profile__main-info-item",children:[(0,t.jsx)("div",{className:"profile__main-info-icon",children:(0,t.jsxs)("span",{children:[(0,t.jsx)("span",{className:"profile-icon-count profile-download",children:e?.totalDoc}),(0,t.jsx)(n.xu,{})]})}),(0,t.jsx)("h4",{className:"profile__main-info-title",children:"Total Order"})]})}),(0,t.jsx)("div",{className:"col-md-3 col-sm-6",children:(0,t.jsxs)("div",{className:"profile__main-info-item",children:[(0,t.jsx)("div",{className:"profile__main-info-icon",children:(0,t.jsxs)("span",{children:[(0,t.jsx)("span",{className:"profile-icon-count profile-order",children:e?.pending}),(0,t.jsx)(n.qb,{})]})}),(0,t.jsx)("h4",{className:"profile__main-info-title",children:"Pending Order"})]})}),(0,t.jsx)("div",{className:"col-md-3 col-sm-6",children:(0,t.jsxs)("div",{className:"profile__main-info-item",children:[(0,t.jsx)("div",{className:"profile__main-info-icon",children:(0,t.jsxs)("span",{children:[(0,t.jsx)("span",{className:"profile-icon-count profile-wishlist",children:e?.processing}),(0,t.jsx)(n._D,{})]})}),(0,t.jsx)("h4",{className:"profile__main-info-title",children:"Processing Order"})]})}),(0,t.jsx)("div",{className:"col-md-3 col-sm-6",children:(0,t.jsxs)("div",{className:"profile__main-info-item",children:[(0,t.jsx)("div",{className:"profile__main-info-icon",children:(0,t.jsxs)("span",{children:[(0,t.jsx)("span",{className:"profile-icon-count profile-wishlist",children:e?.delivered}),(0,t.jsx)(n.Zp,{})]})}),(0,t.jsx)("h4",{className:"profile__main-info-title",children:"Complete Order"})]})})]})})]})};r()}catch(e){r(e)}})},69:(e,s,a)=>{a.a(e,async(e,r)=>{try{a.d(s,{Z:()=>m});var t=a(997);a(6689);var i=a(8719),l=a(4694),n=a(8914),d=a(8286),o=a(1371),c=a(4112),p=e([n,d,o]);[n,d,o]=p.then?(await p)():p;let m=({orderData:e})=>(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("section",{className:"profile__area pt-120 pb-120",children:(0,t.jsx)("div",{className:"container",children:(0,t.jsxs)("div",{className:"profile__inner p-relative",children:[(0,t.jsx)(l.Z,{}),(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("div",{className:"col-xxl-4 col-lg-4",children:(0,t.jsx)("div",{className:"profile__tab mr-40",children:(0,t.jsx)(i.Z,{})})}),(0,t.jsx)("div",{className:"col-xxl-8 col-lg-8",children:(0,t.jsx)("div",{className:"profile__tab-content",children:(0,t.jsxs)("div",{className:"tab-content",id:"profile-tabContent",children:[(0,t.jsx)("div",{className:"tab-pane fade show active",id:"nav-profile",role:"tabpanel","aria-labelledby":"nav-profile-tab",children:(0,t.jsx)(n.Z,{orderData:e})}),(0,t.jsx)("div",{className:"tab-pane fade",id:"nav-information",role:"tabpanel","aria-labelledby":"nav-information-tab",children:(0,t.jsx)(d.Z,{})}),(0,t.jsx)("div",{className:"tab-pane fade",id:"nav-password",role:"tabpanel","aria-labelledby":"nav-password-tab",children:(0,t.jsx)(o.Z,{})}),(0,t.jsx)("div",{className:"tab-pane fade",id:"nav-order",role:"tabpanel","aria-labelledby":"nav-order-tab",children:(0,t.jsx)(c.Z,{orderData:e})})]})})})]})]})})})});r()}catch(e){r(e)}})},8286:(e,s,a)=>{a.a(e,async(e,r)=>{try{a.d(s,{Z:()=>u});var t=a(997);a(6689);var i=a(1908),l=a(5641),n=a(6022),d=a(5609),o=a(822),c=a(8203),p=a(4717),m=a(3696),h=e([i,l,p,m]);[i,l,p,m]=h.then?(await h)():h;let A=d.object().shape({name:d.string().required().label("Name"),email:d.string().required().email().label("Email"),phone:d.string().required().min(11).label("Phone"),address:d.string().required().label("Address"),bio:d.string().required().min(20).label("Bio")}),u=()=>{let{user:e}=(0,n.useSelector)(e=>e.auth),[s,{}]=(0,p.TG)(),{register:a,handleSubmit:r,formState:{errors:d},reset:h}=(0,l.useForm)({resolver:(0,i.yupResolver)(A)});return(0,t.jsxs)("div",{className:"profile__info",children:[(0,t.jsx)("h3",{className:"profile__info-title",children:"Personal Details"}),(0,t.jsx)("div",{className:"profile__info-content",children:(0,t.jsx)("form",{onSubmit:r(a=>{s({id:e?._id,name:a.name,email:a.email,phone:a.phone,address:a.address,bio:a.bio}).then(e=>{e?.error?(0,m.cB)(e?.error?.data?.message):(0,m.t5)(e?.data?.message)}),h()}),children:(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("div",{className:"col-xxl-6 col-md-6",children:(0,t.jsx)("div",{className:"profile__input-box",children:(0,t.jsxs)("div",{className:"profile__input",children:[(0,t.jsx)("input",{...a("name",{required:"Name is required!"}),name:"name",type:"text",placeholder:"Enter your username",defaultValue:e?.name}),(0,t.jsx)("span",{children:(0,t.jsx)(c.M4,{})}),(0,t.jsx)(o.Z,{msg:d.name?.message})]})})}),(0,t.jsx)("div",{className:"col-xxl-6 col-md-6",children:(0,t.jsx)("div",{className:"profile__input-box",children:(0,t.jsxs)("div",{className:"profile__input",children:[(0,t.jsx)("input",{...a("email",{required:"Email is required!"}),name:"email",type:"email",placeholder:"Enter your email",defaultValue:e?.email}),(0,t.jsx)("span",{children:(0,t.jsx)(c.gB,{})}),(0,t.jsx)(o.Z,{msg:d.email?.message})]})})}),(0,t.jsx)("div",{className:"col-xxl-12",children:(0,t.jsx)("div",{className:"profile__input-box",children:(0,t.jsxs)("div",{className:"profile__input",children:[(0,t.jsx)("input",{...a("phone",{required:!0}),name:"phone",type:"text",placeholder:"Enter your number",defaultValue:"0123 456 7889"}),(0,t.jsx)("span",{children:(0,t.jsx)(c.zK,{})}),(0,t.jsx)(o.Z,{msg:d.phone?.message})]})})}),(0,t.jsx)("div",{className:"col-xxl-12",children:(0,t.jsx)("div",{className:"profile__input-box",children:(0,t.jsxs)("div",{className:"profile__input",children:[(0,t.jsx)("input",{...a("address",{required:!0}),name:"address",type:"text",placeholder:"Enter your address",defaultValue:"3304 Randall Drive"}),(0,t.jsx)("span",{children:(0,t.jsx)(c.Bt,{})}),(0,t.jsx)(o.Z,{msg:d.address?.message})]})})}),(0,t.jsx)("div",{className:"col-xxl-12",children:(0,t.jsx)("div",{className:"profile__input-box",children:(0,t.jsxs)("div",{className:"profile__input",children:[(0,t.jsx)("textarea",{...a("bio",{required:!0}),name:"bio",placeholder:"Enter your bio",defaultValue:"Hi there, this is my bio..."}),(0,t.jsx)(o.Z,{msg:d.bio?.message})]})})}),(0,t.jsx)("div",{className:"col-xxl-12",children:(0,t.jsx)("div",{className:"profile__btn",children:(0,t.jsx)("button",{type:"submit",className:"tp-btn",children:"Update Profile"})})})]})})})]})};r()}catch(e){r(e)}})},8719:(e,s,a)=>{a.d(s,{Z:()=>i});var r=a(997);function t({active:e=!1,id:s,title:a,icon:t}){return(0,r.jsxs)("button",{className:`nav-link ${e?"active":""}`,id:`nav-${s}-tab`,"data-bs-toggle":"tab","data-bs-target":`#nav-${s}`,type:"button",role:"tab","aria-controls":s,"aria-selected":e?"true":"false",children:[(0,r.jsx)("span",{children:(0,r.jsx)("i",{className:t})}),a]})}a(6689);let i=()=>(0,r.jsx)("nav",{children:(0,r.jsxs)("div",{className:"nav nav-tabs tp-tab-menu flex-column",id:"profile-tab",role:"tablist",children:[(0,r.jsx)(t,{active:!0,id:"profile",title:"Profile",icon:"fa-regular fa-user-pen"}),(0,r.jsx)(t,{id:"information",title:"Information",icon:"fa-regular fa-circle-info"}),(0,r.jsx)(t,{id:"order",title:"My Orders",icon:"fa-light fa-clipboard-list-check"}),(0,r.jsx)(t,{id:"password",title:"Change Password",icon:"fa-regular fa-lock"})]})})},4694:(e,s,a)=>{a.d(s,{Z:()=>m});var r=a(997);a(6689);var t=a(5675),i=a.n(t);let l={src:"/_next/static/media/laptop.a1df1e73.png",height:44,width:100,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAJ1BMVEVMaXHYcVTcfGHgj3badFbYcVLMZjPedVXXc1bcdFbad1rid1fofl+koolaAAAAC3RSTlMA5fx2sPwF0WE7/mGhnikAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAmSURBVHicY+Bm5WZhAAFuJiZWTgY2BgZ2HiYesBAHIyMjIzMzMwAKBAB9vr9m3AAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:4},n={src:"/_next/static/media/man.6aacd9de.png",height:236,width:230,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAWlBMVEXXbFk4P1U2Ok25kG//voD/xshJSmDg1NT739v9w4719fi1j3Ctim7318P8xJDVm2lVWm7/1KBWX3OZb4ZNTWNmW23syMPKnXjHkKI+R13/rKj/0JvHmnNmW2/ny7VIAAAAG3RSTlMB6zaL/TD9ChLNT8CKo99ctHmlN3niYu5T25q1izq7AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAP0lEQVR4nBWJRw7AIAzADAUSujd0/f+bVXyxJQPEG6Nu++FVwLv0XWcEWV2a1d5S3smsY3gGC8kht2LVdw3wA0x3AfRuEe1xAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8},d={src:"/_next/static/media/shape-1.f9829898.png",height:56,width:100,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAKlBMVEVMaXH///8cKEf/9/b///r/////0sr/+Pjsf23/iXb7h3T/ycHVdGj/yL0Lh/rfAAAADXRSTlMAZBODGSC4eQ65U9e0iV3/kAAAAAlwSFlzAAALEwAACxMBAJqcGAAAACZJREFUeJxjYGDg4mBiYgABTh4wzcLIzcvGyMjCwMrIzszMzMgKAAfAAHO/1qPDAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:4},o={src:"/_next/static/media/shape-2.5054bb58.png",height:213,width:100,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAICAMAAADp7a43AAAABlBMVEVmkKBr2f/e3d6HAAAAAnRSTlMCbXemsl8AAAAJcEhZcwAACxMAAAsTAQCanBgAAAANSURBVHicY2AgCjACAAApAAL8DFy2AAAAAElFTkSuQmCC",blurWidth:4,blurHeight:8},c={src:"/_next/static/media/shape-3.1c36acc5.png",height:35,width:40,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAMAAAACh/xsAAAAJFBMVEXMzdG4zNrv7/H19fXk5Obe3uH////n5+mw1exLntFNotW90eBMQ0b2AAAAAnRSTlPX/uLvQfsAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAzSURBVHicNctJDoBAEMPA4CQ9LP//LwJpbj6UJZIEac3g836UP65DLUCrYjD9jD2ztK8XHVoA5fjzCYwAAAAASUVORK5CYII=",blurWidth:8,blurHeight:7},p={src:"/_next/static/media/shape-4.569d6e39.png",height:47,width:66,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAADFBMVEUAABxMaXEAABsBAhwVi0KIAAAABHRSTlMYAAkky/9GcgAAAAlwSFlzAAALEwAACxMBAJqcGAAAACVJREFUeJwdyrERAAAMgkDQ/XfOmYovIEBRiFJFTX18hx1hW4EcBeoANxfBt40AAAAASUVORK5CYII=",blurWidth:8,blurHeight:6},m=()=>(0,r.jsxs)("div",{className:"profile__shape",children:[(0,r.jsx)(i(),{className:"profile__shape-1",src:l,alt:"laptop-img"}),(0,r.jsx)(i(),{className:"profile__shape-2",src:n,alt:"man-img"}),(0,r.jsx)(i(),{className:"profile__shape-3",src:d,alt:"shape"}),(0,r.jsx)(i(),{className:"profile__shape-4",src:o,alt:"shape"}),(0,r.jsx)(i(),{className:"profile__shape-5",src:c,alt:"shape"}),(0,r.jsx)(i(),{className:"profile__shape-6",src:p,alt:"shape"})]})},7870:(e,s,a)=>{a.a(e,async(e,r)=>{try{a.r(s),a.d(s,{default:()=>x});var t=a(997),i=a(6689),l=a(9915),n=a(1163),d=a(1517),o=a(2518),c=a(43),p=a(4452),m=a(69),h=a(1436),A=a(9663),u=e([l,o,c,m,h]);[l,o,c,m,h]=u.then?(await u)():u;let x=()=>{let e=(0,n.useRouter)(),{data:s,isError:a,isLoading:r}=(0,h.SB)();return((0,i.useEffect)(()=>{l.default.get("userInfo")||e.push("/login")},[e]),r)?(0,t.jsx)("div",{className:"d-flex align-items-center justify-content-center",style:{height:"100vh"},children:(0,t.jsx)(A.Z,{loading:r})}):(0,t.jsxs)(o.Z,{children:[(0,t.jsx)(d.Z,{pageTitle:"Profile"}),(0,t.jsx)(c.Z,{style_2:!0}),(0,t.jsx)(m.Z,{orderData:s}),(0,t.jsx)(p.Z,{style_2:!0})]})};r()}catch(e){r(e)}})},4717:(e,s,a)=>{a.a(e,async(e,r)=>{try{a.d(s,{$h:()=>h,DW:()=>o,Eo:()=>u,OQ:()=>d,TG:()=>A,gL:()=>p,kl:()=>c,nc:()=>m});var t=a(6703),i=a(5049),l=a(9915),n=e([t,i,l]);[t,i,l]=n.then?(await n)():n;let{useLoginUserMutation:d,useRegisterUserMutation:o,useConfirmEmailQuery:c,useResetPasswordMutation:p,useConfirmForgotPasswordMutation:m,useChangePasswordMutation:h,useUpdateProfileMutation:A,useSignUpProviderMutation:u}=t.g.injectEndpoints({overrideExisting:!0,endpoints:e=>({registerUser:e.mutation({query:e=>({url:"https://shofy-backend.vercel.app/api/user/signup",method:"POST",body:e})}),signUpProvider:e.mutation({query:e=>({url:`https://shofy-backend.vercel.app/api/user/register/${e}`,method:"POST"}),async onQueryStarted(e,{queryFulfilled:s,dispatch:a}){try{let e=await s;l.default.set("userInfo",JSON.stringify({accessToken:e.data.data.token,user:e.data.data.user}),{expires:.5}),a((0,i.nD)({accessToken:e.data.data.token,user:e.data.data.user}))}catch(e){}}}),loginUser:e.mutation({query:e=>({url:"https://shofy-backend.vercel.app/api/user/login",method:"POST",body:e}),async onQueryStarted(e,{queryFulfilled:s,dispatch:a}){try{let e=await s;l.default.set("userInfo",JSON.stringify({accessToken:e.data.data.token,user:e.data.data.user}),{expires:.5}),a((0,i.nD)({accessToken:e.data.data.token,user:e.data.data.user}))}catch(e){}}}),getUser:e.query({query:()=>"https://shofy-backend.vercel.app/api/user/me",async onQueryStarted(e,{queryFulfilled:s,dispatch:a}){try{let e=await s;a((0,i.nD)({user:e.data}))}catch(e){}}}),confirmEmail:e.query({query:e=>`https://shofy-backend.vercel.app/api/user/confirmEmail/${e}`,async onQueryStarted(e,{queryFulfilled:s,dispatch:a}){try{let e=await s;l.default.set("userInfo",JSON.stringify({accessToken:e.data.data.token,user:e.data.data.user}),{expires:.5}),a((0,i.nD)({accessToken:e.data.data.token,user:e.data.data.user}))}catch(e){}}}),resetPassword:e.mutation({query:e=>({url:"https://shofy-backend.vercel.app/api/user/forget-password",method:"PATCH",body:e})}),confirmForgotPassword:e.mutation({query:e=>({url:"https://shofy-backend.vercel.app/api/user/confirm-forget-password",method:"PATCH",body:e})}),changePassword:e.mutation({query:e=>({url:"https://shofy-backend.vercel.app/api/user/change-password",method:"PATCH",body:e})}),updateProfile:e.mutation({query:({id:e,...s})=>({url:`https://shofy-backend.vercel.app/api/user/update-user/${e}`,method:"PUT",body:s}),async onQueryStarted(e,{queryFulfilled:s,dispatch:a}){try{let e=await s;l.default.set("userInfo",JSON.stringify({accessToken:e.data.data.token,user:e.data.data.user}),{expires:.5}),a((0,i.nD)({accessToken:e.data.data.token,user:e.data.data.user}))}catch(e){}}})})});r()}catch(e){r(e)}})},1436:(e,s,a)=>{a.a(e,async(e,r)=>{try{a.d(s,{HY:()=>n,SB:()=>c,T2:()=>o,yX:()=>d});var t=a(6703),i=a(9914),l=e([t]);let{useCreatePaymentIntentMutation:n,useSaveOrderMutation:d,useGetUserOrderByIdQuery:o,useGetUserOrdersQuery:c}=(t=(l.then?(await l)():l)[0]).g.injectEndpoints({overrideExisting:!0,endpoints:e=>({createPaymentIntent:e.mutation({query:e=>({url:"https://shofy-backend.vercel.app/api/order/create-payment-intent",method:"POST",body:e}),async onQueryStarted(e,{queryFulfilled:s,dispatch:a}){try{let e=await s;a((0,i.SZ)(e.clientSecret))}catch(e){}}}),saveOrder:e.mutation({query:e=>({url:"https://shofy-backend.vercel.app/api/order/saveOrder",method:"POST",body:e}),invalidatesTags:["UserOrders"],async onQueryStarted(e,{queryFulfilled:s,dispatch:a}){try{await s&&(localStorage.removeItem("couponInfo"),localStorage.removeItem("cart_products"),localStorage.removeItem("shipping_info"))}catch(e){}}}),getUserOrders:e.query({query:()=>"https://shofy-backend.vercel.app/api/user-order",providesTags:["UserOrders"],keepUnusedDataFor:600}),getUserOrderById:e.query({query:e=>`https://shofy-backend.vercel.app/api/user-order/${e}`,providesTags:(e,s,a)=>[{type:"UserOrder",id:a}],keepUnusedDataFor:600})})});r()}catch(e){r(e)}})},6999:e=>{e.exports=require("@react-oauth/google")},5184:e=>{e.exports=require("@reduxjs/toolkit")},4335:e=>{e.exports=require("@reduxjs/toolkit/query/react")},4515:e=>{e.exports=require("@stripe/react-stripe-js")},943:e=>{e.exports=require("@stripe/stripe-js")},1635:e=>{e.exports=require("dayjs")},2785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},968:e=>{e.exports=require("next/head")},6689:e=>{e.exports=require("react")},2807:e=>{e.exports=require("react-copy-to-clipboard")},6405:e=>{e.exports=require("react-dom")},9931:e=>{e.exports=require("react-modal")},9485:e=>{e.exports=require("react-modal-video")},6022:e=>{e.exports=require("react-redux")},7386:e=>{e.exports=require("react-simple-star-rating")},8176:e=>{e.exports=require("react-spinners")},1305:e=>{e.exports=require("react-timer-hook")},997:e=>{e.exports=require("react/jsx-runtime")},5609:e=>{e.exports=require("yup")},2048:e=>{e.exports=require("fs")},5315:e=>{e.exports=require("path")},6162:e=>{e.exports=require("stream")},1568:e=>{e.exports=require("zlib")},1908:e=>{e.exports=import("@hookform/resolvers/yup")},9915:e=>{e.exports=import("js-cookie")},5641:e=>{e.exports=import("react-hook-form")},3590:e=>{e.exports=import("react-toastify")}};var s=require("../webpack-runtime.js");s.C(e);var a=e=>s(s.s=e),r=s.X(0,[6859,6296,1386,593,4452,43],()=>a(458));module.exports=r})();