"use strict";(self.webpackChunkdocs123=self.webpackChunkdocs123||[]).push([[4013],{4726:(e,s,t)=>{t.d(s,{Z:()=>v});var a=t(2983),i=t(4517),r=t(7126),l=t(4090),n=t(8685),c=t(8246),o=t(3729),m=t(1045);function d(e){const{pathname:s}=(0,o.TH)();return(0,a.useMemo)((()=>e.filter((e=>function(e,s){return!(e.unlisted&&!(0,m.Mg)(e.permalink,s))}(e,s)))),[e,s])}const g={sidebar:"sidebar_EoaC",sidebarItemTitle:"sidebarItemTitle_n4Bv",sidebarItemList:"sidebarItemList_UTiY",sidebarItem:"sidebarItem_ye3g",sidebarItemLink:"sidebarItemLink_zqLH",sidebarItemLinkActive:"sidebarItemLinkActive_nkLZ"};var u=t(7458);function h(e){let{sidebar:s}=e;const t=d(s.items);return(0,u.jsx)("aside",{className:"col col--3",children:(0,u.jsxs)("nav",{className:(0,i.Z)(g.sidebar,"thin-scrollbar"),"aria-label":(0,c.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[(0,u.jsx)("div",{className:(0,i.Z)(g.sidebarItemTitle,"margin-bottom--md"),children:s.title}),(0,u.jsx)("ul",{className:(0,i.Z)(g.sidebarItemList,"clean-list"),children:t.map((e=>(0,u.jsx)("li",{className:g.sidebarItem,children:(0,u.jsx)(n.Z,{isNavLink:!0,to:e.permalink,className:g.sidebarItemLink,activeClassName:g.sidebarItemLinkActive,children:e.title})},e.permalink)))})]})})}var b=t(2471);function j(e){let{sidebar:s}=e;const t=d(s.items);return(0,u.jsx)("ul",{className:"menu__list",children:t.map((e=>(0,u.jsx)("li",{className:"menu__list-item",children:(0,u.jsx)(n.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active",children:e.title})},e.permalink)))})}function p(e){return(0,u.jsx)(b.Zo,{component:j,props:e})}function x(e){let{sidebar:s}=e;const t=(0,l.i)();return s?.items.length?"mobile"===t?(0,u.jsx)(p,{sidebar:s}):(0,u.jsx)(h,{sidebar:s}):null}function v(e){const{sidebar:s,toc:t,children:a,...l}=e,n=s&&s.items.length>0;return(0,u.jsx)(r.Z,{...l,children:(0,u.jsx)("div",{className:"container margin-vert--lg",children:(0,u.jsxs)("div",{className:"row",children:[(0,u.jsx)(x,{sidebar:s}),(0,u.jsx)("main",{className:(0,i.Z)("col",{"col--7":n,"col--9 col--offset-1":!n}),itemScope:!0,itemType:"https://schema.org/Blog",children:a}),t&&(0,u.jsx)("div",{className:"col col--2",children:t})]})})})}},7314:(e,s,t)=>{t.r(s),t.d(s,{default:()=>j});t(2983);var a=t(4517),i=t(8246);const r=()=>(0,i.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});var l=t(5882),n=t(1105),c=t(4726),o=t(2475),m=t(2925);const d={tag:"tag_m3jy"};var g=t(7458);function u(e){let{letterEntry:s}=e;return(0,g.jsxs)("article",{children:[(0,g.jsx)(m.Z,{as:"h2",id:s.letter,children:s.letter}),(0,g.jsx)("ul",{className:"padding--none",children:s.tags.map((e=>(0,g.jsx)("li",{className:d.tag,children:(0,g.jsx)(o.Z,{...e})},e.permalink)))}),(0,g.jsx)("hr",{})]})}function h(e){let{tags:s}=e;const t=function(e){const s={};return Object.values(e).forEach((e=>{const t=function(e){return e[0].toUpperCase()}(e.label);s[t]??=[],s[t].push(e)})),Object.entries(s).sort(((e,s)=>{let[t]=e,[a]=s;return t.localeCompare(a)})).map((e=>{let[s,t]=e;return{letter:s,tags:t.sort(((e,s)=>e.label.localeCompare(s.label)))}}))}(s);return(0,g.jsx)("section",{className:"margin-vert--lg",children:t.map((e=>(0,g.jsx)(u,{letterEntry:e},e.letter)))})}var b=t(4382);function j(e){let{tags:s,sidebar:t}=e;const i=r();return(0,g.jsxs)(l.FG,{className:(0,a.Z)(n.k.wrapper.blogPages,n.k.page.blogTagsListPage),children:[(0,g.jsx)(l.d,{title:i}),(0,g.jsx)(b.Z,{tag:"blog_tags_list"}),(0,g.jsxs)(c.Z,{sidebar:t,children:[(0,g.jsx)(m.Z,{as:"h1",children:i}),(0,g.jsx)(h,{tags:s})]})]})}},2475:(e,s,t)=>{t.d(s,{Z:()=>n});t(2983);var a=t(4517),i=t(8685);const r={tag:"tag_sBel",tagRegular:"tagRegular_HS3G",tagWithCount:"tagWithCount_HWZU"};var l=t(7458);function n(e){let{permalink:s,label:t,count:n}=e;return(0,l.jsxs)(i.Z,{href:s,className:(0,a.Z)(r.tag,n?r.tagWithCount:r.tagRegular),children:[t,n&&(0,l.jsx)("span",{children:n})]})}}}]);