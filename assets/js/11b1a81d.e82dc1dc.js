"use strict";(self.webpackChunkmui_eazy_docs=self.webpackChunkmui_eazy_docs||[]).push([[1466],{7254:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>m,metadata:()=>u,toc:()=>p});var o=t(7458),i=t(1048),r=(t(5989),t(1162)),l=t(2117),s=t(3328),a=t(5437);const m={sidebar_position:1},d="Field AutoComplete",u={id:"components/pro/Form/field-autoComplete",title:"Field AutoComplete",description:"show code",source:"@site/docs/components/pro/Form/field-autoComplete.mdx",sourceDirName:"components/pro/Form",slug:"/components/pro/Form/field-autoComplete",permalink:"/mui-eazy/docs/components/pro/Form/field-autoComplete",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/components/pro/Form/field-autoComplete.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Form",permalink:"/mui-eazy/docs/components/pro/Form/"},next:{title:"Field Checkbox",permalink:"/mui-eazy/docs/components/pro/Form/field-checkbox"}},c={},p=[{value:"Props",id:"npm2yarn-remark-plugin-configuration",level:2},{value:"Type",id:"type",level:2}];function f(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",pre:"pre",ul:"ul",...(0,i.a)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"field-autocomplete",children:"Field AutoComplete"}),"\n","\n","\n",(0,o.jsx)(a.NotifyProvider,{children:(0,o.jsxs)(l.Z,{defaultValue:"Demo",values:[{label:"Demo",value:"Demo"},{label:"PlayGround",value:"PlayGround"}],children:[(0,o.jsx)(s.Z,{value:"PlayGround",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",metastring:"live noInline",live:!0,children:'const Demo = () => {\n  const formRef = useFormRef({});\n  const { handleSubmit } = formRef;\n  const onSubmit = handleSubmit(() => {\n    notify.success(JSON.stringify(formRef.getValues()));\n  });\n  const options = ["1", "2"];\n  return (\n    <FormProvider formRef={formRef} onSubmit={onSubmit}>\n      <FieldSelect label="Field" name="Field">\n        {options?.map((item: any) => {\n          return (\n            <MenuItem\n              key={typeof item == "string" ? item : item.key}\n              value={typeof item == "string" ? item : item.value}>\n              {typeof item == "string" ? item : item.label}\n            </MenuItem>\n          );\n        })}\n      </FieldSelect>\n      <Stack\n        direction="row"\n        sx={{\n          justifyContent: "end",\n        }}>\n        <Button\n          sx={{\n            marginTop: "10px",\n          }}\n          variant="contained"\n          type="submit">\n          Submit\n        </Button>\n      </Stack>\n    </FormProvider>\n  );\n};\n\nrender(<Demo />);\n'})})}),(0,o.jsx)(s.Z,{value:"Demo",children:(0,o.jsx)(r.Z,{children:(0,o.jsx)(a.FieldAutoCompleteDemo,{})})})]})}),"\n",(0,o.jsxs)(t,{children:[(0,o.jsx)("summary",{children:"show code"}),(0,o.jsx)(l.Z,{children:(0,o.jsx)(s.Z,{value:"componennt",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",metastring:"{5,8,12,41-61} showLineNumbers",children:'import { Button, MenuItem, Stack } from "@mui/material";\nimport PropsTable from "@site/src/components/PropsTable";\nimport { FieldSelect, FormProvider, notify, useFormRef } from "../components";\nexport const FieldTextProps = () => {\n  let params = {\n    name: {\n      type: "string",\n      defaultValue: "",\n      desc: "form item name",\n    },\n    label: {\n      type: "number",\n      defaultValue: "",\n      desc: "form item label",\n    },\n    defaultValue: {\n      type: "any",\n      defaultValue: "",\n      desc: "The default value. Use when the component is not controlled.",\n    },\n    value: {\n      type: "any",\n      defaultValue: "",\n      desc: "The value of the input element, required for a controlled component.",\n    },\n    type: {\n      type: "string",\n      defaultValue: "",\n      desc: "Type of the input element. It should be a valid HTML5 input type.",\n    },\n    required: {\n      type: "boolean",\n      defaultValue: "false",\n      desc: "If true, the label is displayed as required and the input element is required.",\n    },\n  };\n  return <PropsTable params={params} />;\n};\n\nconst Demo = () => {\n  const formRef = useFormRef({});\n  const { handleSubmit } = formRef;\n  const onSubmit = handleSubmit(() => {\n    notify.success(JSON.stringify(formRef.getValues()));\n  });\n  const options = ["1", "2"];\n  return (\n    <FormProvider formRef={formRef} onSubmit={onSubmit}>\n      <FieldSelect label="Field" name="Field">\n        {options?.map((item: any) => {\n          return (\n            <MenuItem\n              key={typeof item == "string" ? item : item.key}\n              value={typeof item == "string" ? item : item.value}>\n              {typeof item == "string" ? item : item.label}\n            </MenuItem>\n          );\n        })}\n      </FieldSelect>\n      <Stack\n        direction="row"\n        sx={{\n          justifyContent: "end",\n        }}>\n        <Button\n          sx={{\n            marginTop: "10px",\n          }}\n          variant="contained"\n          type="submit">\n          Submit\n        </Button>\n      </Stack>\n    </FormProvider>\n  );\n};\n\nexport default Demo;\n'})})})})]}),"\n",(0,o.jsx)(n.h2,{id:"npm2yarn-remark-plugin-configuration",children:"Props"}),"\n",(0,o.jsx)(n.admonition,{title:"tip",type:"tip",children:(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Type: any, can be customized as needed."}),"\n",(0,o.jsxs)(n.li,{children:["Default value:","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Not specified: optional."}),"\n",(0,o.jsx)(n.li,{children:'Specified as "require": mandatory.'}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.li,{children:"Type link: Click to navigate to the details below."}),"\n"]})}),"\n",(0,o.jsx)(n.h2,{id:"type",children:"Type"}),"\n",(0,o.jsx)(a.FieldTextProps,{})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(f,{...e})}):f(e)}}}]);