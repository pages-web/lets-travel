module.exports=[93695,(a,b,c)=>{b.exports=a.x("next/dist/shared/lib/no-fallback-error.external.js",()=>require("next/dist/shared/lib/no-fallback-error.external.js"))},18799,a=>{"use strict";a.s(["default",()=>b]);let b=(0,a.i(53157).registerClientReference)(function(){throw Error("Attempted to call the default export of [project]/output/lets-travel/src/components/common/Image.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"[project]/output/lets-travel/src/components/common/Image.tsx <module evaluation>","default")},72864,a=>{"use strict";a.s(["default",()=>b]);let b=(0,a.i(53157).registerClientReference)(function(){throw Error("Attempted to call the default export of [project]/output/lets-travel/src/components/common/Image.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"[project]/output/lets-travel/src/components/common/Image.tsx","default")},7257,a=>{"use strict";a.i(18799);var b=a.i(72864);a.n(b)},54345,a=>{"use strict";var b=a.i(70846);let c=b.gql`
  fragment PageFields on Page {
    _id
    clientPortalId
    name
    slug
    description
    content
    status
    type
    parentId
    thumbnail {
      name
      url
      type
      size
    }
    pageImages {
      name
      url
      type
      size
    }
    videoUrl
    pageItems {
      _id
      name
      type
      content
      order
      objectType
      objectId
      config
    }
    customFieldsData
    createdAt
    updatedAt
  }
`,d=b.gql`
  ${c}
  query CpPages($language: String) {
    cpPages(language: $language) {
      ...PageFields
    }
  }
`;b.gql`
  ${c}
  query CpPageList($language: String, $cursor: String, $limit: Int) {
    cpPageList(language: $language, cursor: $cursor, limit: $limit) {
      pages {
        ...PageFields
      }
      totalCount
      pageInfo {
        cursor
        totalCount
      }
    }
  }
`,a.s(["CP_PAGES",0,d])},50373,a=>{"use strict";a.s(["FadeIn",()=>b]);let b=(0,a.i(53157).registerClientReference)(function(){throw Error("Attempted to call FadeIn() from the server but FadeIn is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"[project]/output/lets-travel/src/components/motion/FadeIn.tsx <module evaluation>","FadeIn")},79915,a=>{"use strict";a.s(["FadeIn",()=>b]);let b=(0,a.i(53157).registerClientReference)(function(){throw Error("Attempted to call FadeIn() from the server but FadeIn is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"[project]/output/lets-travel/src/components/motion/FadeIn.tsx","FadeIn")},26642,a=>{"use strict";a.i(50373);var b=a.i(79915);a.n(b)},48778,a=>{"use strict";var b=a.i(63565),c=a.i(26642);a.s(["default",0,function({label:a,title:d,subtitle:e}){return(0,b.jsx)("section",{className:"bg-background py-24 lg:py-32",children:(0,b.jsxs)("div",{className:"mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8",children:[(0,b.jsx)(c.FadeIn,{direction:"up",children:(0,b.jsx)("span",{className:"mb-3 inline-block text-sm font-bold tracking-[0.2em] text-primary",children:a})}),(0,b.jsx)(c.FadeIn,{direction:"up",delay:.05,children:(0,b.jsx)("h1",{className:"text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl",children:d})}),e&&(0,b.jsx)(c.FadeIn,{direction:"up",delay:.1,children:(0,b.jsx)("p",{className:"mt-4 text-lg text-muted-foreground",children:e})})]})})}])},3213,a=>{a.v("/_next/static/media/favicon.0x3dzn~oxb6tn.ico"+(globalThis.NEXT_CLIENT_ASSET_SUFFIX||""))},64674,a=>{"use strict";let b={src:a.i(3213).default,width:256,height:256};a.s(["default",0,b])},14199,a=>{"use strict";var b=a.i(63565),c=a.i(89099),d=a.i(54345),e=a.i(48778),f=a.i(7257);async function g({params:a}){let{locale:h}=await a,i=await (0,c.getServerApolloClient)(),{data:j}=await i.query({query:d.CP_PAGES,variables:{language:h},context:{fetchOptions:{next:{revalidate:60}}}}),k=(j?.cpPages??[]).find(a=>"about"===a.slug);return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(e.default,{label:"ABOUT US",title:k?.name||"Mongolia's most trusted travel partner",subtitle:k?.description||"Local expertise and global standards since 2008."}),(0,b.jsx)("section",{className:"bg-background py-20",children:(0,b.jsxs)("div",{className:"mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8",children:[(0,b.jsxs)("div",{className:"space-y-6",children:[(0,b.jsx)("h2",{className:"text-3xl font-extrabold text-foreground",children:"Our story"}),(0,b.jsx)("p",{className:"text-base leading-relaxed text-muted-foreground",children:"Let's Travel was founded by Mongolian guides who believed travelers deserved more authentic, responsible, and carefully planned journeys. What started as a small team has grown into a trusted operator serving thousands of guests each year."}),(0,b.jsx)("p",{className:"text-base leading-relaxed text-muted-foreground",children:"We work directly with local communities, train our own guides, and obsess over every detail so you can focus on the experience."})]}),(0,b.jsx)("div",{className:"relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted",children:(0,b.jsx)(f.default,{src:"/images/about-team.jpg",alt:"Let's Travel team",fill:!0,className:"object-cover"})})]})}),(0,b.jsx)("section",{className:"bg-card py-20",children:(0,b.jsxs)("div",{className:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",children:[(0,b.jsx)("h2",{className:"mb-12 text-center text-3xl font-extrabold text-foreground",children:"Our values"}),(0,b.jsx)("div",{className:"grid gap-6 md:grid-cols-3",children:[{title:"Authenticity",desc:"Real connections with local people and places."},{title:"Responsibility",desc:"We protect landscapes and support communities."},{title:"Craftsmanship",desc:"Every itinerary is built with care and expertise."}].map(a=>(0,b.jsxs)("div",{className:"rounded-xl bg-background p-8",children:[(0,b.jsx)("h3",{className:"text-lg font-bold text-foreground",children:a.title}),(0,b.jsx)("p",{className:"mt-2 text-sm text-muted-foreground",children:a.desc})]},a.title))})]})}),k?.content&&(0,b.jsx)("section",{className:"bg-background py-20",children:(0,b.jsx)("div",{className:"prose prose-lg mx-auto max-w-3xl px-4 text-foreground",dangerouslySetInnerHTML:{__html:k.content}})})]})}a.s(["default",0,g,"metadata",0,{title:"About Us | Let's Travel Mongolia",description:"Two decades of crafting unforgettable journeys with local expertise and global standards."}])},89402,a=>{a.n(a.i(14199))}];

//# sourceMappingURL=%5Broot-of-the-server%5D__001gykp._.js.map