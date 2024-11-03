"use strict";(()=>{var e={};e.id=7464,e.ids=[7464],e.modules={9393:(e,t,r)=>{r.a(e,async(e,a)=>{try{r.r(t),r.d(t,{config:()=>g,default:()=>p,getServerSideProps:()=>h,getStaticPaths:()=>y,getStaticProps:()=>l,reportWebVitals:()=>m,routeModule:()=>P,unstable_getServerProps:()=>S,unstable_getServerSideProps:()=>q,unstable_getStaticParams:()=>k,unstable_getStaticPaths:()=>x,unstable_getStaticProps:()=>f});var s=r(5872),o=r(3593),i=r(1323),u=r(7997),n=r(784),d=r(4217),c=e([n,d]);[n,d]=c.then?(await c)():c;let p=(0,i.l)(d,"default"),l=(0,i.l)(d,"getStaticProps"),y=(0,i.l)(d,"getStaticPaths"),h=(0,i.l)(d,"getServerSideProps"),g=(0,i.l)(d,"config"),m=(0,i.l)(d,"reportWebVitals"),f=(0,i.l)(d,"unstable_getStaticProps"),x=(0,i.l)(d,"unstable_getStaticPaths"),k=(0,i.l)(d,"unstable_getStaticParams"),S=(0,i.l)(d,"unstable_getServerProps"),q=(0,i.l)(d,"unstable_getServerSideProps"),P=new s.PagesRouteModule({definition:{kind:o.x.PAGES,page:"/email-verify/[token]",pathname:"/email-verify/[token]",bundlePath:"",filename:""},components:{App:n.default,Document:u.default},userland:d});a()}catch(e){a(e)}})},4217:(e,t,r)=>{r.a(e,async(e,a)=>{try{r.r(t),r.d(t,{default:()=>y,getServerSideProps:()=>l});var s=r(997),o=r(1163),i=r(6689),u=r(822),n=r(4717),d=r(3696),c=r(2518),p=e([n,d,c]);[n,d,c]=p.then?(await p)():p;let l=async({params:e})=>({props:{params:e}}),y=({params:e})=>{let t=(0,o.useRouter)(),{data:r,isLoading:a,isError:p,error:l,isSuccess:y}=(0,n.kl)(e.token);return(0,i.useEffect)(()=>{y&&(t.push("/"),(0,d.t5)("Register Success!"))},[t,y]),(0,s.jsx)(c.Z,{children:(0,s.jsx)("div",{className:"d-flex align-items-center justify-content-center",style:{height:"100vh"},children:a?(0,s.jsx)("h3",{children:"Loading ...."}):y?(0,s.jsx)("h2",{children:r?.message}):(0,s.jsx)(u.Z,{msg:l?.data?.error})})})};a()}catch(e){a(e)}})},4717:(e,t,r)=>{r.a(e,async(e,a)=>{try{r.d(t,{$h:()=>y,DW:()=>d,Eo:()=>g,OQ:()=>n,TG:()=>h,gL:()=>p,kl:()=>c,nc:()=>l});var s=r(6703),o=r(5049),i=r(9915),u=e([s,o,i]);[s,o,i]=u.then?(await u)():u;let{useLoginUserMutation:n,useRegisterUserMutation:d,useConfirmEmailQuery:c,useResetPasswordMutation:p,useConfirmForgotPasswordMutation:l,useChangePasswordMutation:y,useUpdateProfileMutation:h,useSignUpProviderMutation:g}=s.g.injectEndpoints({overrideExisting:!0,endpoints:e=>({registerUser:e.mutation({query:e=>({url:"https://shofy-backend.vercel.app/api/user/signup",method:"POST",body:e})}),signUpProvider:e.mutation({query:e=>({url:`https://shofy-backend.vercel.app/api/user/register/${e}`,method:"POST"}),async onQueryStarted(e,{queryFulfilled:t,dispatch:r}){try{let e=await t;i.default.set("userInfo",JSON.stringify({accessToken:e.data.data.token,user:e.data.data.user}),{expires:.5}),r((0,o.nD)({accessToken:e.data.data.token,user:e.data.data.user}))}catch(e){}}}),loginUser:e.mutation({query:e=>({url:"https://shofy-backend.vercel.app/api/user/login",method:"POST",body:e}),async onQueryStarted(e,{queryFulfilled:t,dispatch:r}){try{let e=await t;i.default.set("userInfo",JSON.stringify({accessToken:e.data.data.token,user:e.data.data.user}),{expires:.5}),r((0,o.nD)({accessToken:e.data.data.token,user:e.data.data.user}))}catch(e){}}}),getUser:e.query({query:()=>"https://shofy-backend.vercel.app/api/user/me",async onQueryStarted(e,{queryFulfilled:t,dispatch:r}){try{let e=await t;r((0,o.nD)({user:e.data}))}catch(e){}}}),confirmEmail:e.query({query:e=>`https://shofy-backend.vercel.app/api/user/confirmEmail/${e}`,async onQueryStarted(e,{queryFulfilled:t,dispatch:r}){try{let e=await t;i.default.set("userInfo",JSON.stringify({accessToken:e.data.data.token,user:e.data.data.user}),{expires:.5}),r((0,o.nD)({accessToken:e.data.data.token,user:e.data.data.user}))}catch(e){}}}),resetPassword:e.mutation({query:e=>({url:"https://shofy-backend.vercel.app/api/user/forget-password",method:"PATCH",body:e})}),confirmForgotPassword:e.mutation({query:e=>({url:"https://shofy-backend.vercel.app/api/user/confirm-forget-password",method:"PATCH",body:e})}),changePassword:e.mutation({query:e=>({url:"https://shofy-backend.vercel.app/api/user/change-password",method:"PATCH",body:e})}),updateProfile:e.mutation({query:({id:e,...t})=>({url:`https://shofy-backend.vercel.app/api/user/update-user/${e}`,method:"PUT",body:t}),async onQueryStarted(e,{queryFulfilled:t,dispatch:r}){try{let e=await t;i.default.set("userInfo",JSON.stringify({accessToken:e.data.data.token,user:e.data.data.user}),{expires:.5}),r((0,o.nD)({accessToken:e.data.data.token,user:e.data.data.user}))}catch(e){}}})})});a()}catch(e){a(e)}})},6999:e=>{e.exports=require("@react-oauth/google")},5184:e=>{e.exports=require("@reduxjs/toolkit")},4335:e=>{e.exports=require("@reduxjs/toolkit/query/react")},4515:e=>{e.exports=require("@stripe/react-stripe-js")},943:e=>{e.exports=require("@stripe/stripe-js")},1635:e=>{e.exports=require("dayjs")},2785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},6689:e=>{e.exports=require("react")},6405:e=>{e.exports=require("react-dom")},9931:e=>{e.exports=require("react-modal")},9485:e=>{e.exports=require("react-modal-video")},6022:e=>{e.exports=require("react-redux")},7386:e=>{e.exports=require("react-simple-star-rating")},8176:e=>{e.exports=require("react-spinners")},1305:e=>{e.exports=require("react-timer-hook")},997:e=>{e.exports=require("react/jsx-runtime")},2048:e=>{e.exports=require("fs")},5315:e=>{e.exports=require("path")},6162:e=>{e.exports=require("stream")},1568:e=>{e.exports=require("zlib")},9915:e=>{e.exports=import("js-cookie")},3590:e=>{e.exports=import("react-toastify")}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[6859,6296,1386],()=>r(9393));module.exports=a})();