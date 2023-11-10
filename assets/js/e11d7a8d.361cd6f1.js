"use strict";(self.webpackChunkdocs123=self.webpackChunkdocs123||[]).push([[7909],{8750:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>m,contentTitle:()=>c,default:()=>b,frontMatter:()=>u,metadata:()=>d,toc:()=>p});var t=r(7458),o=r(6687),i=(r(4069),r(608)),s=r(9100),a=r(4471),l=r(1663);const u={sidebar_position:1},c="Field Slider",d={id:"components/pro/Form/field-slider",title:"Field Slider",description:"Round-robin function, the incoming node, to achieve circular play, scene: round-robin picture, translation",source:"@site/docs/components/pro/Form/field-slider.mdx",sourceDirName:"components/pro/Form",slug:"/components/pro/Form/field-slider",permalink:"/docs/components/pro/Form/field-slider",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/components/pro/Form/field-slider.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Field Select",permalink:"/docs/components/pro/Form/field-select"},next:{title:"Field Switch",permalink:"/docs/components/pro/Form/field-switch"}},m={},p=[{value:"Props",id:"npm2yarn-remark-plugin-configuration",level:2},{value:"Type",id:"type",level:2}];function f(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components},{Details:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"field-slider",children:"Field Slider"}),"\n",(0,t.jsx)(n.p,{children:"Round-robin function, the incoming node, to achieve circular play, scene: round-robin picture, translation"}),"\n","\n","\n",(0,t.jsx)(l.NotifyProvider,{children:(0,t.jsxs)(s.Z,{defaultValue:"Demo",values:[{label:"Demo",value:"Demo"},{label:"PlayGround",value:"PlayGround"}],children:[(0,t.jsx)(a.Z,{value:"PlayGround",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",metastring:"live noInline",live:!0,children:'const Demo = () => {\n  const formRef = useFormRef({});\n  const { handleSubmit } = formRef;\n  const onSubmit = handleSubmit(() => {\n    notify.success(JSON.stringify(formRef.getValues()));\n  });\n  return (\n    <FormProvider formRef={formRef} onSubmit={onSubmit}>\n      <FieldSlider name="field"></FieldSlider>\n      <Stack\n        direction="row"\n        sx={{\n          justifyContent: "end",\n        }}>\n        <Button\n          sx={{\n            marginTop: "10px",\n          }}\n          variant="contained"\n          type="submit">\n          Submit\n        </Button>\n      </Stack>\n    </FormProvider>\n  );\n};\n\nrender(<Demo />);\n'})})}),(0,t.jsx)(a.Z,{value:"Demo",children:(0,t.jsx)(i.Z,{children:(0,t.jsx)(l.FieldSliderDemo,{})})})]})}),"\n",(0,t.jsxs)(r,{children:[(0,t.jsx)("summary",{children:"show code"}),(0,t.jsx)(s.Z,{children:(0,t.jsx)(a.Z,{value:"componennt",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",metastring:"{5,8,12,41-61} showLineNumbers",children:'import { Button, Stack } from "@mui/material";\nimport PropsTable from "@site/src/components/PropsTable";\nimport { NotifyProvider } from "mui-eazy";\nimport {\n  useFormRef,\n  FieldDatePicker,\n  FormProvider,\n  notify,\n  LocalizationProvider,\n} from "mui-eazy";\n\nexport const FieldSliderDemo = () => {\n  const formRef = useFormRef({});\n  const { handleSubmit } = formRef;\n  const onSubmit = handleSubmit(() => {\n    notify.success(JSON.stringify(formRef.getValues()));\n  });\n  return (\n    <FormProvider formRef={formRef} onSubmit={onSubmit}>\n      <FieldSlider name="field"></FieldSlider>\n      <Stack\n        direction="row"\n        sx={{\n          justifyContent: "end",\n        }}>\n        <Button\n          sx={{\n            marginTop: "10px",\n          }}\n          variant="contained"\n          type="submit">\n          Submit\n        </Button>\n      </Stack>\n    </FormProvider>\n  );\n};\n'})})})})]}),"\n",(0,t.jsx)(n.h2,{id:"npm2yarn-remark-plugin-configuration",children:"Props"}),"\n",(0,t.jsx)(n.admonition,{title:"tip",type:"tip",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Type: any, can be customized as needed."}),"\n",(0,t.jsxs)(n.li,{children:["Default value:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Not specified: optional."}),"\n",(0,t.jsx)(n.li,{children:'Specified as "require": mandatory.'}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"Type link: Click to navigate to the details below."}),"\n"]})}),"\n",(0,t.jsx)(n.h2,{id:"type",children:"Type"}),"\n",(0,t.jsx)(l.FieldTextProps,{})]})}function b(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(f,{...e})}):f(e)}},4471:(e,n,r)=>{r.d(n,{Z:()=>s});r(2983);var t=r(4517);const o={tabItem:"tabItem_drg6"};var i=r(7458);function s(e){let{children:n,hidden:r,className:s}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,t.Z)(o.tabItem,s),hidden:r,children:n})}},9100:(e,n,r)=>{r.d(n,{Z:()=>j});var t=r(2983),o=r(4517),i=r(7247),s=r(3729),a=r(5685),l=r(9656),u=r(1559),c=r(1426);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:o}}=e;return{value:n,label:r,attributes:t,default:o}}))}(r);return function(e){const n=(0,u.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function p(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:r}=e;const o=(0,s.k6)(),i=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,l._X)(i),(0,t.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(o.location.search);n.set(i,e),o.replace({...o.location,search:n.toString()})}),[i,o])]}function b(e){const{defaultValue:n,queryString:r=!1,groupId:o}=e,i=m(e),[s,l]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:i}))),[u,d]=f({queryString:r,groupId:o}),[b,h]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[o,i]=(0,c.Nk)(r);return[o,(0,t.useCallback)((e=>{r&&i.set(e)}),[r,i])]}({groupId:o}),v=(()=>{const e=u??b;return p({value:e,tabValues:i})?e:null})();(0,a.Z)((()=>{v&&l(v)}),[v]);return{selectedValue:s,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),h(e)}),[d,h,i]),tabValues:i}}var h=r(9038);const v={tabList:"tabList_yUtf",tabItem:"tabItem_iTH3"};var x=r(7458);function y(e){let{className:n,block:r,selectedValue:t,selectValue:s,tabValues:a}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.o5)(),c=e=>{const n=e.currentTarget,r=l.indexOf(n),o=a[r].value;o!==t&&(u(n),s(o))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;n=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;n=l[r]??l[l.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},n),children:a.map((e=>{let{value:n,label:r,attributes:i}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>l.push(e),onKeyDown:d,onClick:c,...i,className:(0,o.Z)("tabs__item",v.tabItem,i?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function g(e){let{lazy:n,children:r,selectedValue:o}=e;const i=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===o));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==o})))})}function w(e){const n=b(e);return(0,x.jsxs)("div",{className:(0,o.Z)("tabs-container",v.tabList),children:[(0,x.jsx)(y,{...e,...n}),(0,x.jsx)(g,{...e,...n})]})}function j(e){const n=(0,h.Z)();return(0,x.jsx)(w,{...e,children:d(e.children)},String(n))}},608:(e,n,r)=>{r.d(n,{Z:()=>s});r(2983);var t=r(4517);const o={browserWindow:"browserWindow_my1Q",browserWindowHeader:"browserWindowHeader_jXSR",row:"row_KZDM",buttons:"buttons_uHc7",right:"right_oyze",browserWindowAddressBar:"browserWindowAddressBar_Pd8y",dot:"dot_giz1",browserWindowMenuIcon:"browserWindowMenuIcon_Vhuh",bar:"bar_rrRL",browserWindowBody:"browserWindowBody_Idgs"};var i=r(7458);function s(e){let{children:n,minHeight:r,url:s="http://localhost:3000",style:a,bodyStyle:l}=e;return(0,i.jsxs)("div",{className:o.browserWindow,style:{...a,minHeight:r},children:[(0,i.jsxs)("div",{className:o.browserWindowHeader,children:[(0,i.jsxs)("div",{className:o.buttons,children:[(0,i.jsx)("span",{className:o.dot,style:{background:"#f25f58"}}),(0,i.jsx)("span",{className:o.dot,style:{background:"#fbbe3c"}}),(0,i.jsx)("span",{className:o.dot,style:{background:"#58cb42"}})]}),(0,i.jsx)("div",{className:(0,t.Z)(o.browserWindowAddressBar,"text--truncate"),children:s}),(0,i.jsx)("div",{className:o.browserWindowMenuIcon,children:(0,i.jsxs)("div",{children:[(0,i.jsx)("span",{className:o.bar}),(0,i.jsx)("span",{className:o.bar}),(0,i.jsx)("span",{className:o.bar})]})})]}),(0,i.jsx)("div",{className:o.browserWindowBody,style:l,children:n})]})}}}]);