"use strict";(self.webpackChunkdocs123=self.webpackChunkdocs123||[]).push([[572],{950:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>u,contentTitle:()=>a,default:()=>h,frontMatter:()=>d,metadata:()=>m,toc:()=>p});var i=o(7458),t=o(6687),r=(o(4069),o(608)),s=o(9100),l=o(4471),c=o(581);const d={sidebar_position:1},a="Field Checkbox",m={id:"components/pro/Form/field-checkbox",title:"Field Checkbox",description:"show code",source:"@site/docs/components/pro/Form/field-checkbox.mdx",sourceDirName:"components/pro/Form",slug:"/components/pro/Form/field-checkbox",permalink:"/mui-eazy/docs/components/pro/Form/field-checkbox",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/components/pro/Form/field-checkbox.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Field AutoComplete",permalink:"/mui-eazy/docs/components/pro/Form/field-autoComplete"},next:{title:"Field Code",permalink:"/mui-eazy/docs/components/pro/Form/field-code"}},u={},p=[{value:"Props",id:"npm2yarn-remark-plugin-configuration",level:2},{value:"Type",id:"type",level:2}];function f(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",pre:"pre",ul:"ul",...(0,t.a)(),...e.components},{Details:o}=n;return o||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"field-checkbox",children:"Field Checkbox"}),"\n","\n","\n",(0,i.jsx)(c.NotifyProvider,{children:(0,i.jsxs)(s.Z,{defaultValue:"Demo",values:[{label:"Demo",value:"Demo"},{label:"PlayGround",value:"PlayGround"}],children:[(0,i.jsx)(l.Z,{value:"PlayGround",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",metastring:"live noInline",live:!0,children:'const Demo = () => {\n  const formRef = useFormRef({});\n  const { handleSubmit } = formRef;\n  const onSubmit = handleSubmit(() => {\n    notify.success(JSON.stringify(formRef.getValues()));\n  });\n  return (\n    <FormProvider formRef={formRef} onSubmit={onSubmit}>\n      <FieldCheckbox label={"field"} name="field"></FieldCheckbox>\n      <Stack\n        direction="row"\n        sx={{\n          justifyContent: "end",\n        }}>\n        <Button\n          sx={{\n            marginTop: "10px",\n          }}\n          variant="contained"\n          type="submit">\n          Submit\n        </Button>\n      </Stack>\n    </FormProvider>\n  );\n};\n\nrender(<Demo />);\n'})})}),(0,i.jsx)(l.Z,{value:"Demo",children:(0,i.jsx)(r.Z,{children:(0,i.jsx)(c.FieldCheckboxDemo,{})})})]})}),"\n",(0,i.jsxs)(o,{children:[(0,i.jsx)("summary",{children:"show code"}),(0,i.jsx)(s.Z,{children:(0,i.jsx)(l.Z,{value:"componennt",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",metastring:"{5,8,12,41-61} showLineNumbers",children:'import { Button, Stack } from "@mui/material";\nimport PropsTable from "@site/src/components/PropsTable";\nimport { NotifyProvider } from "mui-eazy";\nimport {\n  useFormRef,\n  FieldDatePicker,\n  FormProvider,\n  notify,\n  LocalizationProvider,\n} from "mui-eazy";\n\nexport const FieldCheckboxDemo = () => {\n  const formRef = useFormRef({});\n  const { handleSubmit } = formRef;\n  const onSubmit = handleSubmit(() => {\n    notify.success(JSON.stringify(formRef.getValues()));\n  });\n  return (\n    <FormProvider formRef={formRef} onSubmit={onSubmit}>\n      <FieldCheckbox label={"field"} name="field"></FieldCheckbox>\n      <Stack\n        direction="row"\n        sx={{\n          justifyContent: "end",\n        }}>\n        <Button\n          sx={{\n            marginTop: "10px",\n          }}\n          variant="contained"\n          type="submit">\n          Submit\n        </Button>\n      </Stack>\n    </FormProvider>\n  );\n};\n'})})})})]}),"\n",(0,i.jsx)(n.h2,{id:"npm2yarn-remark-plugin-configuration",children:"Props"}),"\n",(0,i.jsx)(n.admonition,{title:"tip",type:"tip",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Type: any, can be customized as needed."}),"\n",(0,i.jsxs)(n.li,{children:["Default value:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Not specified: optional."}),"\n",(0,i.jsx)(n.li,{children:'Specified as "require": mandatory.'}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"Type link: Click to navigate to the details below."}),"\n"]})}),"\n",(0,i.jsx)(n.h2,{id:"type",children:"Type"}),"\n",(0,i.jsx)(c.FieldTextProps,{})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(f,{...e})}):f(e)}}}]);