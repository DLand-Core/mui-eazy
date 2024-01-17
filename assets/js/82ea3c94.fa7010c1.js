"use strict";(self.webpackChunkmui_eazy_docs=self.webpackChunkmui_eazy_docs||[]).push([[7663],{5645:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>m,toc:()=>p});var i=o(7458),t=o(1048),r=(o(5989),o(1162)),s=o(2117),a=o(3328),d=o(5437);const l={sidebar_position:1},c="Field DatePicker",m={id:"components/pro/Form/field-datePicker",title:"Field DatePicker",description:"show code",source:"@site/docs/components/pro/Form/field-datePicker.mdx",sourceDirName:"components/pro/Form",slug:"/components/pro/Form/field-datePicker",permalink:"/mui-eazy/docs/components/pro/Form/field-datePicker",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/components/pro/Form/field-datePicker.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Field Code",permalink:"/mui-eazy/docs/components/pro/Form/field-code"},next:{title:"Field Editor",permalink:"/mui-eazy/docs/components/pro/Form/field-editor"}},u={},p=[{value:"Props",id:"npm2yarn-remark-plugin-configuration",level:2},{value:"Type",id:"type",level:2}];function f(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",pre:"pre",ul:"ul",...(0,t.a)(),...e.components},{Details:o}=n;return o||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"field-datepicker",children:"Field DatePicker"}),"\n","\n","\n",(0,i.jsx)(d.NotifyProvider,{children:(0,i.jsxs)(s.Z,{defaultValue:"Demo",values:[{label:"Demo",value:"Demo"},{label:"PlayGround",value:"PlayGround"}],children:[(0,i.jsx)(a.Z,{value:"PlayGround",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",metastring:"live noInline",live:!0,children:'const Demo = () => {\n  const formRef = useFormRef({});\n  const { handleSubmit } = formRef;\n  const onSubmit = handleSubmit(() => {\n    notify.success(JSON.stringify(formRef.getValues()));\n  });\n  return (\n    <FormProvider formRef={formRef} onSubmit={onSubmit}>\n      <FieldDatePicker\n        sx={{\n          width: "100%",\n        }}\n        name="test"\n        label="Field Text"\n      />\n      <Stack\n        direction="row"\n        sx={{\n          justifyContent: "end",\n        }}>\n        <Button\n          sx={{\n            marginTop: "10px",\n          }}\n          variant="contained"\n          type="submit">\n          Submit\n        </Button>\n      </Stack>\n    </FormProvider>\n  );\n};\n\nrender(<Demo />);\n'})})}),(0,i.jsx)(a.Z,{value:"Demo",children:(0,i.jsx)(r.Z,{children:(0,i.jsx)(d.FieldDatePickerDemo,{})})})]})}),"\n",(0,i.jsxs)(o,{children:[(0,i.jsx)("summary",{children:"show code"}),(0,i.jsx)(s.Z,{children:(0,i.jsx)(a.Z,{value:"componennt",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",metastring:"{5,8,12,41-61} showLineNumbers",children:'import { Button, Stack } from "@mui/material";\nimport PropsTable from "@site/src/components/PropsTable";\nimport {\n  FieldDatePicker,\n  FormProvider,\n  notify,\n  useFormRef,\n} from "../components";\n\nconst Demo = () => {\n  const formRef = useFormRef({});\n  const { handleSubmit } = formRef;\n  const onSubmit = handleSubmit(() => {\n    notify.success("enjoy~");\n  });\n  return (\n    <FormProvider formRef={formRef} onSubmit={onSubmit}>\n      <FieldDatePicker\n        sx={{\n          width: "100%",\n        }}\n        name="test"\n        label="Field Text"\n      />\n      <Stack\n        direction="row"\n        sx={{\n          justifyContent: "end",\n        }}>\n        <Button\n          sx={{\n            marginTop: "10px",\n          }}\n          variant="contained"\n          type="submit">\n          Submit\n        </Button>\n      </Stack>\n    </FormProvider>\n  );\n};\n\nexport default Demo;\n'})})})})]}),"\n",(0,i.jsx)(n.h2,{id:"npm2yarn-remark-plugin-configuration",children:"Props"}),"\n",(0,i.jsx)(n.admonition,{title:"tip",type:"tip",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Type: any, can be customized as needed."}),"\n",(0,i.jsxs)(n.li,{children:["Default value:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Not specified: optional."}),"\n",(0,i.jsx)(n.li,{children:'Specified as "require": mandatory.'}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"Type link: Click to navigate to the details below."}),"\n"]})}),"\n",(0,i.jsx)(n.h2,{id:"type",children:"Type"}),"\n",(0,i.jsx)(d.FieldTextProps,{})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(f,{...e})}):f(e)}}}]);