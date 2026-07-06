module.exports=[93695,(a,b,c)=>{b.exports=a.x("next/dist/shared/lib/no-fallback-error.external.js",()=>require("next/dist/shared/lib/no-fallback-error.external.js"))},54345,a=>{"use strict";var b=a.i(70846);let c=b.gql`
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
`,a.s(["CP_PAGES",0,d])},18799,a=>{"use strict";a.s(["default",()=>b]);let b=(0,a.i(53157).registerClientReference)(function(){throw Error("Attempted to call the default export of [project]/output/lets-travel/src/components/common/Image.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"[project]/output/lets-travel/src/components/common/Image.tsx <module evaluation>","default")},72864,a=>{"use strict";a.s(["default",()=>b]);let b=(0,a.i(53157).registerClientReference)(function(){throw Error("Attempted to call the default export of [project]/output/lets-travel/src/components/common/Image.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"[project]/output/lets-travel/src/components/common/Image.tsx","default")},7257,a=>{"use strict";a.i(18799);var b=a.i(72864);a.n(b)},31593,a=>{"use strict";var b=a.i(70846);let c=b.gql`
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
`,a.s(["CP_POST",0,d,"CP_POSTS",0,e])},6217,a=>{"use strict";var b=a.i(63565),c=a.i(73695),d=a.i(7257);a.s(["default",0,function({post:a}){let e=a.title??"Untitled",f=a.excerpt??"",g=a.thumbnail?.url??"/images/placeholder.png",h=a.slug??"";return(0,b.jsx)(c.Link,{href:`/tours/${h}`,children:(0,b.jsxs)("article",{className:"group h-full overflow-hidden rounded-2xl bg-card shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md",children:[(0,b.jsx)("div",{className:"relative aspect-[16/10] overflow-hidden bg-muted",children:(0,b.jsx)(d.default,{src:g,alt:e,fill:!0,className:"object-cover transition-transform duration-500 group-hover:scale-105"})}),(0,b.jsxs)("div",{className:"p-6",children:[(0,b.jsx)("h3",{className:"text-xl font-bold text-foreground",children:e}),f&&(0,b.jsx)("p",{className:"mt-3 text-sm leading-relaxed text-muted-foreground",children:f})]})]})})}])},32432,a=>{"use strict";var b=a.i(63565),c=a.i(73695),d=a.i(7257);a.s(["default",0,function({post:a}){let e=a.title??"Untitled",f=a.excerpt??"",g=a.thumbnail?.url??"/images/placeholder.png",h=a.slug??"";return(0,b.jsx)(c.Link,{href:`/blog/${h}`,children:(0,b.jsxs)("article",{className:"group h-full overflow-hidden rounded-2xl bg-card shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md",children:[(0,b.jsx)("div",{className:"relative aspect-[16/10] overflow-hidden bg-muted",children:(0,b.jsx)(d.default,{src:g,alt:e,fill:!0,className:"object-cover transition-transform duration-500 group-hover:scale-105"})}),(0,b.jsxs)("div",{className:"p-6",children:[(0,b.jsx)("h3",{className:"text-lg font-bold text-foreground",children:e}),f&&(0,b.jsx)("p",{className:"mt-2 text-sm leading-relaxed text-muted-foreground",children:f})]})]})})}])},3213,a=>{a.v("/_next/static/media/favicon.0x3dzn~oxb6tn.ico"+(globalThis.NEXT_CLIENT_ASSET_SUFFIX||""))},64674,a=>{"use strict";let b={src:a.i(3213).default,width:256,height:256};a.s(["default",0,b])},29098,a=>{"use strict";var b=a.i(63565),c=a.i(89099),d=a.i(54345),e=a.i(31593),f=a.i(73695);a.i(17277);var g=a.i(50410),h=a.i(6217),i=a.i(32432);async function j({params:a}){let{locale:b,slug:e}=await a,f=await (0,c.getServerApolloClient)(),{data:g}=await f.query({query:d.CP_PAGES,variables:{language:b},context:{fetchOptions:{next:{revalidate:60}}}}),h=(g?.cpPages??[]).find(a=>a.slug===e);return h?{title:`${h.name} | Let's Travel Mongolia`,description:h.description??void 0,openGraph:{title:h.name,description:h.description??void 0,type:"website"}}:{}}async function k(){let a=await (0,c.getServerApolloClient)(!1);return(await Promise.all(f.routing.locales.map(async b=>{let{data:c}=await a.query({query:d.CP_PAGES,variables:{language:b},context:{fetchOptions:{next:{revalidate:60}}}});return(c?.cpPages??[]).map(a=>({locale:b,slug:a.slug??""}))}))).flat()}async function l({params:a}){let{locale:f,slug:j}=await a,k=await (0,c.getServerApolloClient)(),[{data:m},{data:n}]=await Promise.all([k.query({query:d.CP_PAGES,variables:{language:f},context:{fetchOptions:{next:{revalidate:60}}}}),k.query({query:e.CP_POSTS,variables:{language:f,status:"published",limit:100},context:{fetchOptions:{next:{revalidate:60}}}})]),o=(m?.cpPages??[]).find(a=>a.slug===j);o||(0,g.notFound)();let p=n?.cpPosts??[];return(0,b.jsxs)("article",{className:"bg-background pb-20",children:[(0,b.jsxs)("div",{className:"mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8",children:[(0,b.jsx)("h1",{className:"text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl",children:o.name}),o.description&&(0,b.jsx)("p",{className:"mt-4 text-lg text-muted-foreground",children:o.description})]}),o.content&&(0,b.jsx)("div",{className:"mx-auto max-w-3xl px-4 sm:px-6 lg:px-8",children:(0,b.jsx)("div",{className:"prose prose-lg max-w-none text-foreground",dangerouslySetInnerHTML:{__html:o.content}})}),"services"===j&&(0,b.jsx)("section",{className:"py-20",children:(0,b.jsxs)("div",{className:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",children:[(0,b.jsx)("h2",{className:"mb-12 text-center text-3xl font-extrabold text-foreground",children:"Featured Tours"}),(0,b.jsx)("div",{className:"grid gap-8 md:grid-cols-2 lg:grid-cols-3",children:p.filter(a=>a.categories?.some(a=>"tours"===a.slug||"services"===a.slug)).map(a=>(0,b.jsx)(h.default,{post:a},a._id))})]})}),"blog"===j&&(0,b.jsx)("section",{className:"py-20",children:(0,b.jsx)("div",{className:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",children:(0,b.jsx)("div",{className:"grid gap-8 md:grid-cols-2 lg:grid-cols-3",children:p.map(a=>(0,b.jsx)(i.default,{post:a},a._id))})})})]})}a.s(["default",0,l,"generateMetadata",0,j,"generateStaticParams",0,k])},47056,a=>{a.n(a.i(29098))}];

//# sourceMappingURL=%5Broot-of-the-server%5D__0.l9lbr._.js.map