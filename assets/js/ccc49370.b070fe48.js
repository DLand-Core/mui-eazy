"use strict";(self.webpackChunkmui_eazy_docs=self.webpackChunkmui_eazy_docs||[]).push([[6103],{7973:(e,t,n)=>{n.r(t),n.d(t,{default:()=>x});n(2983);var a=n(4517),s=n(8190),i=n(1105),o=n(5709),r=n(4726),l=n(5662),c=n(1286),d=n(4249),u=n(7458);function m(e){const{nextItem:t,prevItem:n}=e;return(0,u.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,c.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"}),children:[n&&(0,u.jsx)(d.Z,{...n,subLabel:(0,u.jsx)(c.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post",children:"Newer Post"})}),t&&(0,u.jsx)(d.Z,{...t,subLabel:(0,u.jsx)(c.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post",children:"Older Post"}),isNext:!0})]})}function h(){const{assets:e,metadata:t}=(0,o.C)(),{title:n,description:a,date:i,tags:r,authors:l,frontMatter:c}=t,{keywords:d}=c,m=e.image??c.image;return(0,u.jsxs)(s.d,{title:n,description:a,keywords:d,image:m,children:[(0,u.jsx)("meta",{property:"og:type",content:"article"}),(0,u.jsx)("meta",{property:"article:published_time",content:i}),l.some((e=>e.url))&&(0,u.jsx)("meta",{property:"article:author",content:l.map((e=>e.url)).filter(Boolean).join(",")}),r.length>0&&(0,u.jsx)("meta",{property:"article:tag",content:r.map((e=>e.label)).join(",")})]})}var g=n(9734),v=n(5557);function f(e){let{sidebar:t,children:n}=e;const{metadata:a,toc:s}=(0,o.C)(),{nextItem:i,prevItem:c,frontMatter:d,unlisted:h}=a,{hide_table_of_contents:f,toc_min_heading_level:x,toc_max_heading_level:p}=d;return(0,u.jsxs)(r.Z,{sidebar:t,toc:!f&&s.length>0?(0,u.jsx)(g.Z,{toc:s,minHeadingLevel:x,maxHeadingLevel:p}):void 0,children:[h&&(0,u.jsx)(v.Z,{}),(0,u.jsx)(l.Z,{children:n}),(i||c)&&(0,u.jsx)(m,{nextItem:i,prevItem:c})]})}function x(e){const t=e.content;return(0,u.jsx)(o.n,{content:e.content,isBlogPostPage:!0,children:(0,u.jsxs)(s.FG,{className:(0,a.Z)(i.k.wrapper.blogPages,i.k.page.blogPostPage),children:[(0,u.jsx)(h,{}),(0,u.jsx)(f,{sidebar:e.sidebar,children:(0,u.jsx)(t,{})})]})})}},9734:(e,t,n)=>{n.d(t,{Z:()=>c});n(2983);var a=n(4517),s=n(3382);const i={tableOfContents:"tableOfContents_nz1V",docItemContainer:"docItemContainer_eoPv"};var o=n(7458);const r="table-of-contents__link toc-highlight",l="table-of-contents__link--active";function c(e){let{className:t,...n}=e;return(0,o.jsx)("div",{className:(0,a.Z)(i.tableOfContents,"thin-scrollbar",t),children:(0,o.jsx)(s.Z,{...n,linkClassName:r,linkActiveClassName:l})})}},3382:(e,t,n)=>{n.d(t,{Z:()=>v});var a=n(2983),s=n(8966);function i(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n,...s}=e;n>=0?t[n].children.push(s):a.push(s)})),a}function o(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return t.flatMap((e=>{const t=o({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[{...e,children:t}]:t}))}function r(e){const t=e.getBoundingClientRect();return t.top===t.bottom?r(e.parentNode):t}function l(e,t){let{anchorTopOffset:n}=t;const a=e.find((e=>r(e).top>=n));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(r(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function c(){const e=(0,a.useRef)(0),{navbar:{hideOnScroll:t}}=(0,s.L)();return(0,a.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function d(e){const t=(0,a.useRef)(void 0),n=c();(0,a.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:s,minHeadingLevel:i,maxHeadingLevel:o}=e;function r(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),r=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const a=[];for(let s=t;s<=n;s+=1)a.push(`h${s}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:i,maxHeadingLevel:o}),c=l(r,{anchorTopOffset:n.current}),d=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(s),e.classList.add(s),t.current=e):e.classList.remove(s)}(e,e===d)}))}return document.addEventListener("scroll",r),document.addEventListener("resize",r),r(),()=>{document.removeEventListener("scroll",r),document.removeEventListener("resize",r)}}),[e,n])}var u=n(9258),m=n(7458);function h(e){let{toc:t,className:n,linkClassName:a,isChild:s}=e;return t.length?(0,m.jsx)("ul",{className:s?void 0:n,children:t.map((e=>(0,m.jsxs)("li",{children:[(0,m.jsx)(u.Z,{to:`#${e.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,m.jsx)(h,{isChild:!0,toc:e.children,className:n,linkClassName:a})]},e.id)))}):null}const g=a.memo(h);function v(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:r="table-of-contents__link",linkActiveClassName:l,minHeadingLevel:c,maxHeadingLevel:u,...h}=e;const v=(0,s.L)(),f=c??v.tableOfContents.minHeadingLevel,x=u??v.tableOfContents.maxHeadingLevel,p=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:s}=e;return(0,a.useMemo)((()=>o({toc:i(t),minHeadingLevel:n,maxHeadingLevel:s})),[t,n,s])}({toc:t,minHeadingLevel:f,maxHeadingLevel:x});return d((0,a.useMemo)((()=>{if(r&&l)return{linkClassName:r,linkActiveClassName:l,minHeadingLevel:f,maxHeadingLevel:x}}),[r,l,f,x])),(0,m.jsx)(g,{toc:p,className:n,linkClassName:r,...h})}},5557:(e,t,n)=>{n.d(t,{Z:()=>h});n(2983);var a=n(4517),s=n(1286),i=n(3849),o=n(7458);function r(){return(0,o.jsx)(s.Z,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function l(){return(0,o.jsx)(s.Z,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,o.jsx)(i.Z,{children:(0,o.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var d=n(1105),u=n(4418);function m(e){let{className:t}=e;return(0,o.jsx)(u.Z,{type:"caution",title:(0,o.jsx)(r,{}),className:(0,a.Z)(t,d.k.common.unlistedBanner),children:(0,o.jsx)(l,{})})}function h(e){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(c,{}),(0,o.jsx)(m,{...e})]})}},2621:(e,t,n)=>{n.d(t,{Z:()=>p});var a=n(2983),s=n(6615),i=n(1547),o=n(7860),r=n.n(o),l=n(5629),c=n(7458);function d(e){let{children:t,color:n}=e;return(0,c.jsx)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"},children:t})}var u=n(4517),m=n(9258);const h="tweetQuote_h8Rz",g="avatarImg_b51M";function v(e){let{url:t,handle:n,name:a,job:s,children:i}=e;const o=`https://unavatar.io/twitter/${n}`,r=`https://twitter.com/${n}`;return(0,c.jsxs)("figure",{className:h,children:[(0,c.jsx)("blockquote",{children:(0,c.jsx)(m.Z,{to:t,children:i})}),(0,c.jsx)("figcaption",{children:(0,c.jsx)(m.Z,{to:r,rel:"nofollow",children:(0,c.jsxs)("div",{className:"avatar",children:[(0,c.jsx)("img",{alt:a,className:(0,u.Z)("avatar__photo",g),src:o}),(0,c.jsxs)("div",{className:(0,u.Z)("avatar__intro"),children:[(0,c.jsx)("strong",{className:"avatar__name",children:(0,c.jsx)("cite",{children:a})}),(0,c.jsx)("small",{className:"avatar__subtitle",itemProp:"description",children:s})]})]})})})]})}var f=n(5761);let x={};f.Z.canUseDOM&&(x=n(6340));const p=f.Z.canUseDOM?{React:a,dayjs:r(),Yup:l,Highlight:d,TweetQuote:v,...a,...s,...i,...x}:{React:a,dayjs:r(),Yup:l,Highlight:d,TweetQuote:v,...a,...i}}}]);