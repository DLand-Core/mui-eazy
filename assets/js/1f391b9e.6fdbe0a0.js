"use strict";(self.webpackChunkdocs123=self.webpackChunkdocs123||[]).push([[85],{8094:(e,n,t)=>{t.r(n),t.d(n,{default:()=>u});t(2983);var a=t(4517),s=t(5882),i=t(1105),l=t(7126),r=t(9949),c=t(9734),o=t(5557);const d={mdxPageWrapper:"mdxPageWrapper_FkQY"};var m=t(7458);function u(e){const{content:n}=e,{metadata:{title:t,description:u,frontMatter:h,unlisted:f},assets:v}=n,{keywords:x,wrapperClassName:g,hide_table_of_contents:p}=h,j=v.image??h.image;return(0,m.jsx)(s.FG,{className:(0,a.Z)(g??i.k.wrapper.mdxPages,i.k.page.mdxPage),children:(0,m.jsxs)(l.Z,{children:[(0,m.jsx)(s.d,{title:t,description:u,keywords:x,image:j}),(0,m.jsx)("main",{className:"container container--fluid margin-vert--lg",children:(0,m.jsxs)("div",{className:(0,a.Z)("row",d.mdxPageWrapper),children:[(0,m.jsxs)("div",{className:(0,a.Z)("col",!p&&"col--8"),children:[f&&(0,m.jsx)(o.Z,{}),(0,m.jsx)("article",{children:(0,m.jsx)(r.Z,{children:(0,m.jsx)(n,{})})})]}),!p&&n.toc.length>0&&(0,m.jsx)("div",{className:"col col--2",children:(0,m.jsx)(c.Z,{toc:n.toc,minHeadingLevel:h.toc_min_heading_level,maxHeadingLevel:h.toc_max_heading_level})})]})})]})})}},9734:(e,n,t)=>{t.d(n,{Z:()=>o});t(2983);var a=t(4517),s=t(3382);const i={tableOfContents:"tableOfContents_nz1V",docItemContainer:"docItemContainer_eoPv"};var l=t(7458);const r="table-of-contents__link toc-highlight",c="table-of-contents__link--active";function o(e){let{className:n,...t}=e;return(0,l.jsx)("div",{className:(0,a.Z)(i.tableOfContents,"thin-scrollbar",n),children:(0,l.jsx)(s.Z,{...t,linkClassName:r,linkActiveClassName:c})})}},3382:(e,n,t)=>{t.d(n,{Z:()=>v});var a=t(2983),s=t(8966);function i(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),t=Array(7).fill(-1);n.forEach(((e,n)=>{const a=t.slice(2,e.level);e.parentIndex=Math.max(...a),t[e.level]=n}));const a=[];return n.forEach((e=>{const{parentIndex:t,...s}=e;t>=0?n[t].children.push(s):a.push(s)})),a}function l(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:a}=e;return n.flatMap((e=>{const n=l({toc:e.children,minHeadingLevel:t,maxHeadingLevel:a});return function(e){return e.level>=t&&e.level<=a}(e)?[{...e,children:n}]:n}))}function r(e){const n=e.getBoundingClientRect();return n.top===n.bottom?r(e.parentNode):n}function c(e,n){let{anchorTopOffset:t}=n;const a=e.find((e=>r(e).top>=t));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(r(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function o(){const e=(0,a.useRef)(0),{navbar:{hideOnScroll:n}}=(0,s.L)();return(0,a.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function d(e){const n=(0,a.useRef)(void 0),t=o();(0,a.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:s,minHeadingLevel:i,maxHeadingLevel:l}=e;function r(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),r=function(e){let{minHeadingLevel:n,maxHeadingLevel:t}=e;const a=[];for(let s=n;s<=t;s+=1)a.push(`h${s}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:i,maxHeadingLevel:l}),o=c(r,{anchorTopOffset:t.current}),d=e.find((e=>o&&o.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(s),e.classList.add(s),n.current=e):e.classList.remove(s)}(e,e===d)}))}return document.addEventListener("scroll",r),document.addEventListener("resize",r),r(),()=>{document.removeEventListener("scroll",r),document.removeEventListener("resize",r)}}),[e,t])}var m=t(8685),u=t(7458);function h(e){let{toc:n,className:t,linkClassName:a,isChild:s}=e;return n.length?(0,u.jsx)("ul",{className:s?void 0:t,children:n.map((e=>(0,u.jsxs)("li",{children:[(0,u.jsx)(m.Z,{to:`#${e.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,u.jsx)(h,{isChild:!0,toc:e.children,className:t,linkClassName:a})]},e.id)))}):null}const f=a.memo(h);function v(e){let{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:r="table-of-contents__link",linkActiveClassName:c,minHeadingLevel:o,maxHeadingLevel:m,...h}=e;const v=(0,s.L)(),x=o??v.tableOfContents.minHeadingLevel,g=m??v.tableOfContents.maxHeadingLevel,p=function(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:s}=e;return(0,a.useMemo)((()=>l({toc:i(n),minHeadingLevel:t,maxHeadingLevel:s})),[n,t,s])}({toc:n,minHeadingLevel:x,maxHeadingLevel:g});return d((0,a.useMemo)((()=>{if(r&&c)return{linkClassName:r,linkActiveClassName:c,minHeadingLevel:x,maxHeadingLevel:g}}),[r,c,x,g])),(0,u.jsx)(f,{toc:p,className:t,linkClassName:r,...h})}},5557:(e,n,t)=>{t.d(n,{Z:()=>h});t(2983);var a=t(4517),s=t(8246),i=t(2160),l=t(7458);function r(){return(0,l.jsx)(s.Z,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function c(){return(0,l.jsx)(s.Z,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function o(){return(0,l.jsx)(i.Z,{children:(0,l.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var d=t(1105),m=t(4418);function u(e){let{className:n}=e;return(0,l.jsx)(m.Z,{type:"caution",title:(0,l.jsx)(r,{}),className:(0,a.Z)(n,d.k.common.unlistedBanner),children:(0,l.jsx)(c,{})})}function h(e){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o,{}),(0,l.jsx)(u,{...e})]})}},2621:(e,n,t)=>{t.d(n,{Z:()=>p});var a=t(2983),s=t(581),i=t(8895),l=t(7860),r=t.n(l),c=t(5629),o=t(7458);function d(e){let{children:n,color:t}=e;return(0,o.jsx)("span",{style:{backgroundColor:t,borderRadius:"2px",color:"#fff",padding:"0.2rem"},children:n})}var m=t(4517),u=t(8685);const h="tweetQuote_h8Rz",f="avatarImg_b51M";function v(e){let{url:n,handle:t,name:a,job:s,children:i}=e;const l=`https://unavatar.io/twitter/${t}`,r=`https://twitter.com/${t}`;return(0,o.jsxs)("figure",{className:h,children:[(0,o.jsx)("blockquote",{children:(0,o.jsx)(u.Z,{to:n,children:i})}),(0,o.jsx)("figcaption",{children:(0,o.jsx)(u.Z,{to:r,rel:"nofollow",children:(0,o.jsxs)("div",{className:"avatar",children:[(0,o.jsx)("img",{alt:a,className:(0,m.Z)("avatar__photo",f),src:l}),(0,o.jsxs)("div",{className:(0,m.Z)("avatar__intro"),children:[(0,o.jsx)("strong",{className:"avatar__name",children:(0,o.jsx)("cite",{children:a})}),(0,o.jsx)("small",{className:"avatar__subtitle",itemProp:"description",children:s})]})]})})})]})}var x=t(4625);let g={};x.Z.canUseDOM&&(g=t(6340));const p=x.Z.canUseDOM?{React:a,dayjs:r(),Yup:c,Highlight:d,TweetQuote:v,...a,...s,...i,...g}:{React:a,dayjs:r(),Yup:c,Highlight:d,TweetQuote:v,...a,...i}}}]);