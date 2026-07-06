module.exports=[93695,(a,b,c)=>{b.exports=a.x("next/dist/shared/lib/no-fallback-error.external.js",()=>require("next/dist/shared/lib/no-fallback-error.external.js"))},50373,a=>{"use strict";a.s(["FadeIn",()=>b]);let b=(0,a.i(53157).registerClientReference)(function(){throw Error("Attempted to call FadeIn() from the server but FadeIn is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"[project]/output/lets-travel/src/components/motion/FadeIn.tsx <module evaluation>","FadeIn")},79915,a=>{"use strict";a.s(["FadeIn",()=>b]);let b=(0,a.i(53157).registerClientReference)(function(){throw Error("Attempted to call FadeIn() from the server but FadeIn is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"[project]/output/lets-travel/src/components/motion/FadeIn.tsx","FadeIn")},26642,a=>{"use strict";a.i(50373);var b=a.i(79915);a.n(b)},48778,a=>{"use strict";var b=a.i(63565),c=a.i(26642);a.s(["default",0,function({label:a,title:d,subtitle:e}){return(0,b.jsx)("section",{className:"bg-background py-24 lg:py-32",children:(0,b.jsxs)("div",{className:"mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8",children:[(0,b.jsx)(c.FadeIn,{direction:"up",children:(0,b.jsx)("span",{className:"mb-3 inline-block text-sm font-bold tracking-[0.2em] text-primary",children:a})}),(0,b.jsx)(c.FadeIn,{direction:"up",delay:.05,children:(0,b.jsx)("h1",{className:"text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl",children:d})}),e&&(0,b.jsx)(c.FadeIn,{direction:"up",delay:.1,children:(0,b.jsx)("p",{className:"mt-4 text-lg text-muted-foreground",children:e})})]})})}])},18799,a=>{"use strict";a.s(["default",()=>b]);let b=(0,a.i(53157).registerClientReference)(function(){throw Error("Attempted to call the default export of [project]/output/lets-travel/src/components/common/Image.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"[project]/output/lets-travel/src/components/common/Image.tsx <module evaluation>","default")},72864,a=>{"use strict";a.s(["default",()=>b]);let b=(0,a.i(53157).registerClientReference)(function(){throw Error("Attempted to call the default export of [project]/output/lets-travel/src/components/common/Image.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"[project]/output/lets-travel/src/components/common/Image.tsx","default")},7257,a=>{"use strict";a.i(18799);var b=a.i(72864);a.n(b)},31593,a=>{"use strict";var b=a.i(70846);let c=b.gql`
  fragment PostFields on Post {
    _id
    type
    webId
    clientPortalId
    title
    slug
    excerpt
    content
    status
    featured
    featuredDate
    publishedDate
    scheduledDate
    viewCount
    reactionCounts
    thumbnail {
      name
      url
      type
      size
    }
    images {
      name
      url
      type
      size
    }
    videoUrl
    categoryIds
    categories {
      _id
      name
      slug
    }
    tagIds
    tags {
      _id
      name
      slug
      colorCode
    }
    customFieldsData
    createdAt
    updatedAt
  }
`,d=b.gql`
  ${c}
  query CpPost(
    $_id: String
    $slug: String
    $identifier: String
    $language: String
  ) {
    cpPost(
      _id: $_id
      slug: $slug
      identifier: $identifier
      language: $language
    ) {
      ...PostFields
    }
  }
`,e=b.gql`
  ${c}
  query CpPosts(
    $language: String
    $webId: String
    $featured: Boolean
    $type: String
    $categoryIds: [String]
    $searchValue: String
    $status: PostStatus
    $tagIds: [String]
    $sortField: String
    $sortDirection: String
    $dateField: PostDateField
    $dateFrom: Date
    $dateTo: Date
    $cursor: String
    $limit: Int
  ) {
    cpPosts(
      language: $language
      webId: $webId
      featured: $featured
      type: $type
      categoryIds: $categoryIds
      searchValue: $searchValue
      status: $status
      tagIds: $tagIds
      sortField: $sortField
      sortDirection: $sortDirection
      dateField: $dateField
      dateFrom: $dateFrom
      dateTo: $dateTo
      cursor: $cursor
      limit: $limit
    ) {
      ...PostFields
    }
  }
`;b.gql`
  ${c}
  query CpPostList(
    $language: String
    $webId: String
    $featured: Boolean
    $type: String
    $categoryIds: [String]
    $searchValue: String
    $status: PostStatus
    $tagIds: [String]
    $sortField: String
    $sortDirection: String
    $dateField: PostDateField
    $dateFrom: Date
    $dateTo: Date
    $cursor: String
    $limit: Int
  ) {
    cpPostList(
      language: $language
      webId: $webId
      featured: $featured
      type: $type
      categoryIds: $categoryIds
      searchValue: $searchValue
      status: $status
      tagIds: $tagIds
      sortField: $sortField
      sortDirection: $sortDirection
      dateField: $dateField
      dateFrom: $dateFrom
      dateTo: $dateTo
      cursor: $cursor
      limit: $limit
    ) {
      posts {
        ...PostFields
      }
      totalCount
      pageInfo {
        cursor
        totalCount
      }
    }
  }
`,b.gql`
  ${c}
  query CpMostViewedPosts(
    $days: Int!
    $limit: Int
    $language: String
    $webId: String
    $type: String
  ) {
    cpMostViewedPosts(
      days: $days
      limit: $limit
      language: $language
      webId: $webId
      type: $type
    ) {
      ...PostFields
    }
  }
`,a.s(["CP_POST",0,d,"CP_POSTS",0,e])},32432,a=>{"use strict";var b=a.i(63565),c=a.i(73695),d=a.i(7257);a.s(["default",0,function({post:a}){let e=a.title??"Untitled",f=a.excerpt??"",g=a.thumbnail?.url??"/images/placeholder.png",h=a.slug??"";return(0,b.jsx)(c.Link,{href:`/blog/${h}`,children:(0,b.jsxs)("article",{className:"group h-full overflow-hidden rounded-2xl bg-card shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md",children:[(0,b.jsx)("div",{className:"relative aspect-[16/10] overflow-hidden bg-muted",children:(0,b.jsx)(d.default,{src:g,alt:e,fill:!0,className:"object-cover transition-transform duration-500 group-hover:scale-105"})}),(0,b.jsxs)("div",{className:"p-6",children:[(0,b.jsx)("h3",{className:"text-lg font-bold text-foreground",children:e}),f&&(0,b.jsx)("p",{className:"mt-2 text-sm leading-relaxed text-muted-foreground",children:f})]})]})})}])},3213,a=>{a.v("/_next/static/media/favicon.0x3dzn~oxb6tn.ico"+(globalThis.NEXT_CLIENT_ASSET_SUFFIX||""))},64674,a=>{"use strict";let b={src:a.i(3213).default,width:256,height:256};a.s(["default",0,b])},72434,a=>{"use strict";var b=a.i(63565),c=a.i(89099),d=a.i(31593),e=a.i(48778),f=a.i(32432);async function g({params:a}){let{locale:h}=await a,i=await (0,c.getServerApolloClient)(!1),{data:j}=await i.query({query:d.CP_POSTS,variables:{language:h,status:"published",limit:50},context:{fetchOptions:{next:{revalidate:60}}}}),k=j?.cpPosts??[];return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(e.default,{label:"JOURNAL",title:"Travel tips, stories, and guides",subtitle:"Practical advice and inspiration for your Mongolia adventure."}),(0,b.jsx)("section",{className:"bg-background py-20",children:(0,b.jsx)("div",{className:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",children:0===k.length?(0,b.jsx)("p",{className:"text-center text-muted-foreground",children:"No articles yet."}):(0,b.jsx)("div",{className:"grid gap-8 md:grid-cols-2 lg:grid-cols-3",children:k.map(a=>(0,b.jsx)(f.default,{post:a},a._id))})})})]})}a.s(["default",0,g,"metadata",0,{title:"Journal | Let's Travel Mongolia",description:"Travel tips, stories, and guides for your Mongolia adventure."}])},25929,a=>{a.n(a.i(72434))}];

//# sourceMappingURL=%5Broot-of-the-server%5D__0p5n0p-._.js.map