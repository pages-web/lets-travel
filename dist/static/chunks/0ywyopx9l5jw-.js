(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,72941,e=>{"use strict";var s=e.i(88392),r=e.i(72820);e.s(["MotionButton",0,function({children:e,className:t,type:a="button",disabled:i,onClick:n}){return(0,s.jsx)(r.motion.button,{type:a,disabled:i,onClick:n,className:t,whileHover:i?void 0:{scale:1.02},whileTap:i?void 0:{scale:.98},transition:{duration:.2},children:e})}])},42248,e=>{"use strict";var s=e.i(88392),r=e.i(34517),t=e.i(33088);let a=t.gql`
  mutation ClientPortalUserRegister(
    $phone: String
    $email: String
    $username: String
    $password: String
    $firstName: String
    $lastName: String
    $userType: CPUserType
    $code: String
    $propertiesData: JSON
  ) {
    clientPortalUserRegister(
      phone: $phone
      email: $email
      username: $username
      password: $password
      firstName: $firstName
      lastName: $lastName
      userType: $userType
      code: $code
      propertiesData: $propertiesData
    ) {
      _id
      email
      phone
      username
      firstName
      lastName
      isVerified
      isEmailVerified
      isPhoneVerified
      createdAt
    }
  }
`;var i=e.i(77036),n=e.i(87920),o=e.i(18323),l=e.i(93323),d=e.i(72941);e.s(["default",0,function(){let e=(0,n.useRouter)(),{refetch:t}=(0,i.useAuth)(),m=(0,o.useTranslations)("auth"),[u,{loading:c,error:p}]=(0,r.useMutation)(a);async function g(s){s.preventDefault();let r=new FormData(s.currentTarget),a=r.get("email"),i=r.get("password"),n=r.get("firstName"),o=r.get("lastName");try{await u({variables:{email:a,password:i,firstName:n,lastName:o}}),await t(),e.push("/account")}catch{}}return(0,s.jsxs)("div",{className:"mx-auto max-w-md px-4 py-20",children:[(0,s.jsx)("h1",{className:"text-3xl font-extrabold text-foreground",children:m("register")}),(0,s.jsxs)("form",{onSubmit:g,className:"mt-8 space-y-6",children:[(0,s.jsxs)("div",{className:"grid gap-4 md:grid-cols-2",children:[(0,s.jsxs)("div",{className:"space-y-2",children:[(0,s.jsx)("label",{htmlFor:"firstName",className:"text-sm font-semibold text-foreground",children:"First name"}),(0,s.jsx)("input",{id:"firstName",name:"firstName",type:"text",required:!0,className:"w-full rounded-lg border border-input bg-secondary px-4 py-3 text-foreground outline-none focus:ring-2 focus:ring-ring"})]}),(0,s.jsxs)("div",{className:"space-y-2",children:[(0,s.jsx)("label",{htmlFor:"lastName",className:"text-sm font-semibold text-foreground",children:"Last name"}),(0,s.jsx)("input",{id:"lastName",name:"lastName",type:"text",required:!0,className:"w-full rounded-lg border border-input bg-secondary px-4 py-3 text-foreground outline-none focus:ring-2 focus:ring-ring"})]})]}),(0,s.jsxs)("div",{className:"space-y-2",children:[(0,s.jsx)("label",{htmlFor:"email",className:"text-sm font-semibold text-foreground",children:"Email"}),(0,s.jsx)("input",{id:"email",name:"email",type:"email",required:!0,className:"w-full rounded-lg border border-input bg-secondary px-4 py-3 text-foreground outline-none focus:ring-2 focus:ring-ring"})]}),(0,s.jsxs)("div",{className:"space-y-2",children:[(0,s.jsx)("label",{htmlFor:"password",className:"text-sm font-semibold text-foreground",children:"Password"}),(0,s.jsx)("input",{id:"password",name:"password",type:"password",required:!0,className:"w-full rounded-lg border border-input bg-secondary px-4 py-3 text-foreground outline-none focus:ring-2 focus:ring-ring"})]}),p&&(0,s.jsx)("p",{className:"text-sm text-destructive",children:p.message}),(0,s.jsx)(d.MotionButton,{type:"submit",disabled:c,className:"w-full rounded-md bg-primary py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 disabled:opacity-50",children:c?"...":m("register")})]}),(0,s.jsxs)("p",{className:"mt-6 text-center text-sm text-muted-foreground",children:["Already have an account?"," ",(0,s.jsx)(l.Link,{href:"/login",className:"text-primary hover:underline",children:m("login")})]})]})}],42248)}]);