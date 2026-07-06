module.exports=[93695,(a,b,c)=>{b.exports=a.x("next/dist/shared/lib/no-fallback-error.external.js",()=>require("next/dist/shared/lib/no-fallback-error.external.js"))},18799,a=>{"use strict";a.s(["default",()=>b]);let b=(0,a.i(53157).registerClientReference)(function(){throw Error("Attempted to call the default export of [project]/output/lets-travel/src/components/common/Image.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"[project]/output/lets-travel/src/components/common/Image.tsx <module evaluation>","default")},72864,a=>{"use strict";a.s(["default",()=>b]);let b=(0,a.i(53157).registerClientReference)(function(){throw Error("Attempted to call the default export of [project]/output/lets-travel/src/components/common/Image.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"[project]/output/lets-travel/src/components/common/Image.tsx","default")},7257,a=>{"use strict";a.i(18799);var b=a.i(72864);a.n(b)},31593,a=>{"use strict";var b=a.i(70846);let c=b.gql`
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
`,a.s(["CP_POST",0,d,"CP_POSTS",0,e])},54345,a=>{"use strict";var b=a.i(70846);let c=b.gql`
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
`,a.s(["CP_PAGES",0,d])},50373,a=>{"use strict";a.s(["FadeIn",()=>b]);let b=(0,a.i(53157).registerClientReference)(function(){throw Error("Attempted to call FadeIn() from the server but FadeIn is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"[project]/output/lets-travel/src/components/motion/FadeIn.tsx <module evaluation>","FadeIn")},79915,a=>{"use strict";a.s(["FadeIn",()=>b]);let b=(0,a.i(53157).registerClientReference)(function(){throw Error("Attempted to call FadeIn() from the server but FadeIn is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"[project]/output/lets-travel/src/components/motion/FadeIn.tsx","FadeIn")},26642,a=>{"use strict";a.i(50373);var b=a.i(79915);a.n(b)},48778,a=>{"use strict";var b=a.i(63565),c=a.i(26642);a.s(["default",0,function({label:a,title:d,subtitle:e}){return(0,b.jsx)("section",{className:"bg-background py-24 lg:py-32",children:(0,b.jsxs)("div",{className:"mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8",children:[(0,b.jsx)(c.FadeIn,{direction:"up",children:(0,b.jsx)("span",{className:"mb-3 inline-block text-sm font-bold tracking-[0.2em] text-primary",children:a})}),(0,b.jsx)(c.FadeIn,{direction:"up",delay:.05,children:(0,b.jsx)("h1",{className:"text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl",children:d})}),e&&(0,b.jsx)(c.FadeIn,{direction:"up",delay:.1,children:(0,b.jsx)("p",{className:"mt-4 text-lg text-muted-foreground",children:e})})]})})}])},6217,a=>{"use strict";var b=a.i(63565),c=a.i(73695),d=a.i(7257);a.s(["default",0,function({post:a}){let e=a.title??"Untitled",f=a.excerpt??"",g=a.thumbnail?.url??"/images/placeholder.png",h=a.slug??"";return(0,b.jsx)(c.Link,{href:`/tours/${h}`,children:(0,b.jsxs)("article",{className:"group h-full overflow-hidden rounded-2xl bg-card shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md",children:[(0,b.jsx)("div",{className:"relative aspect-[16/10] overflow-hidden bg-muted",children:(0,b.jsx)(d.default,{src:g,alt:e,fill:!0,className:"object-cover transition-transform duration-500 group-hover:scale-105"})}),(0,b.jsxs)("div",{className:"p-6",children:[(0,b.jsx)("h3",{className:"text-xl font-bold text-foreground",children:e}),f&&(0,b.jsx)("p",{className:"mt-3 text-sm leading-relaxed text-muted-foreground",children:f})]})]})})}])},3213,a=>{a.v("/_next/static/media/favicon.0x3dzn~oxb6tn.ico"+(globalThis.NEXT_CLIENT_ASSET_SUFFIX||""))},64674,a=>{"use strict";let b={src:a.i(3213).default,width:256,height:256};a.s(["default",0,b])},45102,a=>{"use strict";var b=a.i(63565),c=a.i(89099),d=a.i(54345),e=a.i(31593),f=a.i(48778),g=a.i(6217);async function h({params:a}){let{locale:i}=await a,j=await (0,c.getServerApolloClient)(!1),[{data:k},{data:l}]=await Promise.all([j.query({query:d.CP_PAGES,variables:{language:i},context:{fetchOptions:{next:{revalidate:60}}}}),j.query({query:e.CP_POSTS,variables:{language:i,status:"published",limit:50},context:{fetchOptions:{next:{revalidate:60}}}})]),m=(k?.cpPages??[]).find(a=>"tours"===a.slug||"services"===a.slug),n=(l?.cpPosts??[]).filter(a=>a.categories?.some(a=>"tours"===a.slug||"services"===a.slug));return 0===n.length?(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(f.default,{label:"OUR TOURS",title:"Handcrafted journeys across Mongolia",subtitle:"Filter by duration, activity, or theme and find the trip that matches your spirit of adventure."}),(0,b.jsx)("section",{className:"py-20 text-center",children:(0,b.jsx)("p",{className:"text-muted-foreground",children:"No tours available yet."})})]}):(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(f.default,{label:"OUR TOURS",title:m?.name||"Handcrafted journeys across Mongolia",subtitle:m?.description||"Find the trip that matches your spirit of adventure."}),(0,b.jsx)("section",{className:"bg-background py-20",children:(0,b.jsx)("div",{className:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",children:(0,b.jsx)("div",{className:"grid gap-8 md:grid-cols-2 lg:grid-cols-3",children:n.map(a=>(0,b.jsx)(g.default,{post:a},a._id))})})})]})}a.s(["default",0,h,"metadata",0,{title:"Tours | Let's Travel Mongolia",description:"Handcrafted journeys across the Gobi, steppes, and nomadic heartland of Mongolia."}])},77809,a=>{a.n(a.i(45102))}];

//# sourceMappingURL=%5Broot-of-the-server%5D__0j9ex6m._.js.map