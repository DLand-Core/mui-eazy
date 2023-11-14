"use strict";(self.webpackChunkdocs123=self.webpackChunkdocs123||[]).push([[838],{274:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>m,contentTitle:()=>c,default:()=>h,frontMatter:()=>a,metadata:()=>u,toc:()=>p});var i=o(7458),t=o(6687),r=(o(4069),o(608)),s=o(9100),l=o(4471),d=o(581);const a={sidebar_position:1},c="Field Upload",u={id:"components/pro/Form/field-upload",title:"Field Upload",description:"show code",source:"@site/docs/components/pro/Form/field-upload.mdx",sourceDirName:"components/pro/Form",slug:"/components/pro/Form/field-upload",permalink:"/mui-eazy/docs/components/pro/Form/field-upload",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/components/pro/Form/field-upload.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Field Text",permalink:"/mui-eazy/docs/components/pro/Form/field-text"},next:{title:"Carousel",permalink:"/mui-eazy/docs/components/pro/carousel"}},m={},p=[{value:"Props",id:"npm2yarn-remark-plugin-configuration",level:2},{value:"Type",id:"type",level:2}];function f(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",pre:"pre",ul:"ul",...(0,t.a)(),...e.components},{Details:o}=n;return o||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"field-upload",children:"Field Upload"}),"\n","\n","\n",(0,i.jsx)(d.NotifyProvider,{children:(0,i.jsxs)(s.Z,{defaultValue:"Demo",values:[{label:"Demo",value:"Demo"},{label:"PlayGround",value:"PlayGround"}],children:[(0,i.jsx)(l.Z,{value:"PlayGround",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",metastring:"live noInline",live:!0,children:'const Demo = () => {\n  const formRef = useFormRef({});\n  const { handleSubmit } = formRef;\n  const onSubmit = handleSubmit(() => {\n    notify.success(JSON.stringify(formRef.getValues()));\n  });\n  return (\n    <FormProvider formRef={formRef} onSubmit={onSubmit}>\n      <FieldUpload name="field"></FieldUpload>\n      <Stack\n        direction="row"\n        sx={{\n          justifyContent: "end",\n        }}>\n        <Button\n          sx={{\n            marginTop: "10px",\n          }}\n          variant="contained"\n          type="submit">\n          Submit\n        </Button>\n      </Stack>\n    </FormProvider>\n  );\n};\n\nrender(<Demo />);\n'})})}),(0,i.jsx)(l.Z,{value:"Demo",children:(0,i.jsx)(r.Z,{children:(0,i.jsx)(d.FieldUploadDemo,{})})})]})}),"\n",(0,i.jsxs)(o,{children:[(0,i.jsx)("summary",{children:"show code"}),(0,i.jsx)(s.Z,{children:(0,i.jsx)(l.Z,{value:"componennt",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",metastring:"{5,8,12,41-61} showLineNumbers",children:'export const FieldUploadDemo = () => {\n  const formRef = useFormRef({});\n  const { handleSubmit } = formRef;\n  const onSubmit = handleSubmit(() => {\n    notify.success(JSON.stringify(formRef.getValues()));\n  });\n  return (\n    <FormProvider formRef={formRef} onSubmit={onSubmit}>\n      <FieldUpload name="field"></FieldUpload>\n      <Stack\n        direction="row"\n        sx={{\n          justifyContent: "end",\n        }}>\n        <Button\n          sx={{\n            marginTop: "10px",\n          }}\n          variant="contained"\n          type="submit">\n          Submit\n        </Button>\n      </Stack>\n    </FormProvider>\n  );\n};\n'})})})})]}),"\n",(0,i.jsx)(n.h2,{id:"npm2yarn-remark-plugin-configuration",children:"Props"}),"\n",(0,i.jsx)(n.admonition,{title:"tip",type:"tip",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Type: any, can be customized as needed."}),"\n",(0,i.jsxs)(n.li,{children:["Default value:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Not specified: optional."}),"\n",(0,i.jsx)(n.li,{children:'Specified as "require": mandatory.'}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"Type link: Click to navigate to the details below."}),"\n"]})}),"\n",(0,i.jsx)(n.h2,{id:"type",children:"Type"}),"\n",(0,i.jsx)(d.FieldTextProps,{})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(f,{...e})}):f(e)}}}]);