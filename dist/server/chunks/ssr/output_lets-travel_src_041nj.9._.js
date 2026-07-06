module.exports=[66192,a=>{"use strict";var b=a.i(50878),c=a.i(74225);a.s(["MotionButton",0,function({children:a,className:d,type:e="button",disabled:f,onClick:g}){return(0,b.jsx)(c.motion.button,{type:e,disabled:f,onClick:g,className:d,whileHover:f?void 0:{scale:1.02},whileTap:f?void 0:{scale:.98},transition:{duration:.2},children:a})}])},20108,a=>{"use strict";var b=a.i(50878),c=a.i(92656),d=a.i(76745);let e=d.gql`
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
`;var f=a.i(19555),g=a.i(59010),h=a.i(45687),i=a.i(13944),j=a.i(66192);a.s(["default",0,function(){let a=(0,g.useRouter)(),{refetch:d}=(0,f.useAuth)(),k=(0,h.useTranslations)("auth"),[l,{loading:m,error:n}]=(0,c.useMutation)(e);async function o(b){b.preventDefault();let c=new FormData(b.currentTarget),e=c.get("email"),f=c.get("password"),g=c.get("firstName"),h=c.get("lastName");try{await l({variables:{email:e,password:f,firstName:g,lastName:h}}),await d(),a.push("/account")}catch{}}return(0,b.jsxs)("div",{className:"mx-auto max-w-md px-4 py-20",children:[(0,b.jsx)("h1",{className:"text-3xl font-extrabold text-foreground",children:k("register")}),(0,b.jsxs)("form",{onSubmit:o,className:"mt-8 space-y-6",children:[(0,b.jsxs)("div",{className:"grid gap-4 md:grid-cols-2",children:[(0,b.jsxs)("div",{className:"space-y-2",children:[(0,b.jsx)("label",{htmlFor:"firstName",className:"text-sm font-semibold text-foreground",children:"First name"}),(0,b.jsx)("input",{id:"firstName",name:"firstName",type:"text",required:!0,className:"w-full rounded-lg border border-input bg-secondary px-4 py-3 text-foreground outline-none focus:ring-2 focus:ring-ring"})]}),(0,b.jsxs)("div",{className:"space-y-2",children:[(0,b.jsx)("label",{htmlFor:"lastName",className:"text-sm font-semibold text-foreground",children:"Last name"}),(0,b.jsx)("input",{id:"lastName",name:"lastName",type:"text",required:!0,className:"w-full rounded-lg border border-input bg-secondary px-4 py-3 text-foreground outline-none focus:ring-2 focus:ring-ring"})]})]}),(0,b.jsxs)("div",{className:"space-y-2",children:[(0,b.jsx)("label",{htmlFor:"email",className:"text-sm font-semibold text-foreground",children:"Email"}),(0,b.jsx)("input",{id:"email",name:"email",type:"email",required:!0,className:"w-full rounded-lg border border-input bg-secondary px-4 py-3 text-foreground outline-none focus:ring-2 focus:ring-ring"})]}),(0,b.jsxs)("div",{className:"space-y-2",children:[(0,b.jsx)("label",{htmlFor:"password",className:"text-sm font-semibold text-foreground",children:"Password"}),(0,b.jsx)("input",{id:"password",name:"password",type:"password",required:!0,className:"w-full rounded-lg border border-input bg-secondary px-4 py-3 text-foreground outline-none focus:ring-2 focus:ring-ring"})]}),n&&(0,b.jsx)("p",{className:"text-sm text-destructive",children:n.message}),(0,b.jsx)(j.MotionButton,{type:"submit",disabled:m,className:"w-full rounded-md bg-primary py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 disabled:opacity-50",children:m?"...":k("register")})]}),(0,b.jsxs)("p",{className:"mt-6 text-center text-sm text-muted-foreground",children:["Already have an account?"," ",(0,b.jsx)(i.Link,{href:"/login",className:"text-primary hover:underline",children:k("login")})]})]})}],20108)}];

//# sourceMappingURL=output_lets-travel_src_041nj.9._.js.map