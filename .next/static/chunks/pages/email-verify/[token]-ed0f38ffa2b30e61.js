(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7464],{59892:(e,t,a)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/email-verify/[token]",function(){return a(42657)}])},42657:(e,t,a)=>{"use strict";a.r(t),a.d(t,{__N_SSP:()=>i,default:()=>l});var s=a(85893),r=a(11163),n=a(67294),o=a(48813),d=a(99057),u=a(35445),c=a(4976),i=!0;let l=e=>{var t;let{params:a}=e,i=(0,r.useRouter)(),{data:l,isLoading:p,isError:y,error:h,isSuccess:f}=(0,d.kl)(a.token);return(0,n.useEffect)(()=>{f&&(i.push("/"),(0,u.t5)("Register Success!"))},[i,f]),(0,s.jsx)(c.Z,{children:(0,s.jsx)("div",{className:"d-flex align-items-center justify-content-center",style:{height:"100vh"},children:p?(0,s.jsx)("h3",{children:"Loading ...."}):f?(0,s.jsx)("h2",{children:null==l?void 0:l.message}):(0,s.jsx)(o.Z,{msg:null==h?void 0:null===(t=h.data)||void 0===t?void 0:t.error})})})}},99057:(e,t,a)=>{"use strict";a.d(t,{$h:()=>l,DW:()=>d,Eo:()=>y,OQ:()=>o,TG:()=>p,gL:()=>c,kl:()=>u,nc:()=>i});var s=a(60454),r=a(97),n=a(31955);let{useLoginUserMutation:o,useRegisterUserMutation:d,useConfirmEmailQuery:u,useResetPasswordMutation:c,useConfirmForgotPasswordMutation:i,useChangePasswordMutation:l,useUpdateProfileMutation:p,useSignUpProviderMutation:y}=s.g.injectEndpoints({overrideExisting:!0,endpoints:e=>({registerUser:e.mutation({query:e=>({url:"https://shofy-backend.vercel.app/api/user/signup",method:"POST",body:e})}),signUpProvider:e.mutation({query:e=>({url:"https://shofy-backend.vercel.app/api/user/register/".concat(e),method:"POST"}),async onQueryStarted(e,t){let{queryFulfilled:a,dispatch:s}=t;try{let e=await a;n.Z.set("userInfo",JSON.stringify({accessToken:e.data.data.token,user:e.data.data.user}),{expires:.5}),s((0,r.nD)({accessToken:e.data.data.token,user:e.data.data.user}))}catch(e){}}}),loginUser:e.mutation({query:e=>({url:"https://shofy-backend.vercel.app/api/user/login",method:"POST",body:e}),async onQueryStarted(e,t){let{queryFulfilled:a,dispatch:s}=t;try{let e=await a;n.Z.set("userInfo",JSON.stringify({accessToken:e.data.data.token,user:e.data.data.user}),{expires:.5}),s((0,r.nD)({accessToken:e.data.data.token,user:e.data.data.user}))}catch(e){}}}),getUser:e.query({query:()=>"https://shofy-backend.vercel.app/api/user/me",async onQueryStarted(e,t){let{queryFulfilled:a,dispatch:s}=t;try{let e=await a;s((0,r.nD)({user:e.data}))}catch(e){}}}),confirmEmail:e.query({query:e=>"https://shofy-backend.vercel.app/api/user/confirmEmail/".concat(e),async onQueryStarted(e,t){let{queryFulfilled:a,dispatch:s}=t;try{let e=await a;n.Z.set("userInfo",JSON.stringify({accessToken:e.data.data.token,user:e.data.data.user}),{expires:.5}),s((0,r.nD)({accessToken:e.data.data.token,user:e.data.data.user}))}catch(e){}}}),resetPassword:e.mutation({query:e=>({url:"https://shofy-backend.vercel.app/api/user/forget-password",method:"PATCH",body:e})}),confirmForgotPassword:e.mutation({query:e=>({url:"https://shofy-backend.vercel.app/api/user/confirm-forget-password",method:"PATCH",body:e})}),changePassword:e.mutation({query:e=>({url:"https://shofy-backend.vercel.app/api/user/change-password",method:"PATCH",body:e})}),updateProfile:e.mutation({query:e=>{let{id:t,...a}=e;return{url:"https://shofy-backend.vercel.app/api/user/update-user/".concat(t),method:"PUT",body:a}},async onQueryStarted(e,t){let{queryFulfilled:a,dispatch:s}=t;try{let e=await a;n.Z.set("userInfo",JSON.stringify({accessToken:e.data.data.token,user:e.data.data.user}),{expires:.5}),s((0,r.nD)({accessToken:e.data.data.token,user:e.data.data.user}))}catch(e){}}})})})}},e=>{var t=t=>e(e.s=t);e.O(0,[6911,5735,2888,9774,179],()=>t(59892)),_N_E=e.O()}]);