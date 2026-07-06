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
`,a.s(["CP_POST",0,d,"CP_POSTS",0,e])},3213,a=>{a.v("/_next/static/media/favicon.0x3dzn~oxb6tn.ico"+(globalThis.NEXT_CLIENT_ASSET_SUFFIX||""))},64674,a=>{"use strict";let b={src:a.i(3213).default,width:256,height:256};a.s(["default",0,b])},64597,a=>{"use strict";var b=a.i(63565),c=a.i(89099),d=a.i(31593),e=a.i(73695);a.i(17277);var f=a.i(50410),g=a.i(7257);async function h({params:a}){let{locale:b,slug:e}=await a,f=await (0,c.getServerApolloClient)(!1),{data:g}=await f.query({query:d.CP_POST,variables:{slug:e,language:b},context:{fetchOptions:{next:{revalidate:60}}}}),i=g?.cpPost??null;return i?{title:`${i.title} | Let's Travel Mongolia`,description:i.excerpt??void 0,openGraph:{title:i.title,description:i.excerpt??void 0,type:"article",images:i.thumbnail?.url?[{url:i.thumbnail.url}]:[]}}:{}}async function i(){let a=await (0,c.getServerApolloClient)(!1);return(await Promise.all(e.routing.locales.map(async b=>{let{data:c}=await a.query({query:d.CP_POSTS,variables:{language:b,status:"published",limit:100},context:{fetchOptions:{next:{revalidate:60}}}});return(c?.cpPosts??[]).map(a=>({locale:b,slug:a.slug??""}))}))).flat()}async function j({params:a}){let{locale:e,slug:h}=await a,i=await (0,c.getServerApolloClient)(!1),{data:k}=await i.query({query:d.CP_POST,variables:{slug:h,language:e},context:{fetchOptions:{next:{revalidate:60}}}}),l=k?.cpPost??null;return l||(0,f.notFound)(),(0,b.jsxs)("article",{className:"bg-background pb-20",children:[(0,b.jsxs)("div",{className:"mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8",children:[(0,b.jsx)("span",{className:"text-sm font-bold tracking-[0.2em] text-primary",children:"TRAVEL GUIDE"}),(0,b.jsx)("h1",{className:"mt-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl",children:l.title}),l.publishedDate&&(0,b.jsx)("p",{className:"mt-4 text-sm text-muted-foreground",children:new Date(l.publishedDate).toLocaleDateString(e,{year:"numeric",month:"long",day:"numeric"})})]}),l.thumbnail?.url&&(0,b.jsx)("div",{className:"mx-auto max-w-5xl px-4 sm:px-6 lg:px-8",children:(0,b.jsx)("div",{className:"relative aspect-[21/9] overflow-hidden rounded-2xl bg-muted",children:(0,b.jsx)(g.default,{src:l.thumbnail.url,alt:l.title??"",fill:!0,className:"object-cover",priority:!0})})}),(0,b.jsx)("div",{className:"mx-auto max-w-3xl px-4 pt-12 sm:px-6 lg:px-8",children:(0,b.jsx)("div",{className:"prose prose-lg max-w-none text-foreground",dangerouslySetInnerHTML:{__html:l.content??""}})})]})}a.s(["default",0,j,"generateMetadata",0,h,"generateStaticParams",0,i])},23305,a=>{a.n(a.i(64597))}];

//# sourceMappingURL=%5Broot-of-the-server%5D__0u3c617._.js.map