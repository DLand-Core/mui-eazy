"use strict";(self.webpackChunkmui_eazy_docs=self.webpackChunkmui_eazy_docs||[]).push([[7909],{1918:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>h,frontMatter:()=>a,metadata:()=>m,toc:()=>p});var o=i(7458),r=i(1048),t=(i(5989),i(1162)),s=i(2117),l=i(3328),d=i(5437);const a={sidebar_position:1},c="Field Slider",m={id:"components/pro/Form/field-slider",title:"Field Slider",description:"show code",source:"@site/docs/components/pro/Form/field-slider.mdx",sourceDirName:"components/pro/Form",slug:"/components/pro/Form/field-slider",permalink:"/mui-eazy/docs/components/pro/Form/field-slider",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/components/pro/Form/field-slider.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Field Select",permalink:"/mui-eazy/docs/components/pro/Form/field-select"},next:{title:"Field Switch",permalink:"/mui-eazy/docs/components/pro/Form/field-switch"}},u={},p=[{value:"Props",id:"npm2yarn-remark-plugin-configuration",level:2},{value:"Type",id:"type",level:2}];function f(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",pre:"pre",ul:"ul",...(0,r.a)(),...e.components},{Details:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"field-slider",children:"Field Slider"}),"\n","\n","\n",(0,o.jsx)(d.NotifyProvider,{children:(0,o.jsxs)(s.Z,{defaultValue:"Demo",values:[{label:"Demo",value:"Demo"},{label:"PlayGround",value:"PlayGround"}],children:[(0,o.jsx)(l.Z,{value:"PlayGround",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",metastring:"live noInline",live:!0,children:'const Demo = () => {\n  const formRef = useFormRef({});\n  const { handleSubmit } = formRef;\n  const onSubmit = handleSubmit(() => {\n    notify.success(JSON.stringify(formRef.getValues()));\n  });\n  return (\n    <FormProvider formRef={formRef} onSubmit={onSubmit}>\n      <FieldSlider name="field"></FieldSlider>\n      <Stack\n        direction="row"\n        sx={{\n          justifyContent: "end",\n        }}>\n        <Button\n          sx={{\n            marginTop: "10px",\n          }}\n          variant="contained"\n          type="submit">\n          Submit\n        </Button>\n      </Stack>\n    </FormProvider>\n  );\n};\n\nrender(<Demo />);\n'})})}),(0,o.jsx)(l.Z,{value:"Demo",children:(0,o.jsx)(t.Z,{children:(0,o.jsx)(d.FieldSliderDemo,{})})})]})}),"\n",(0,o.jsxs)(i,{children:[(0,o.jsx)("summary",{children:"show code"}),(0,o.jsx)(s.Z,{children:(0,o.jsx)(l.Z,{value:"componennt",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",metastring:"{5,8,12,41-61} showLineNumbers",children:'import { Button, Stack } from "@mui/material";\nimport PropsTable from "@site/src/components/PropsTable";\nimport { NotifyProvider } from "mui-eazy";\nimport {\n  useFormRef,\n  FieldDatePicker,\n  FormProvider,\n  notify,\n  LocalizationProvider,\n} from "mui-eazy";\n\nexport const FieldSliderDemo = () => {\n  const formRef = useFormRef({});\n  const { handleSubmit } = formRef;\n  const onSubmit = handleSubmit(() => {\n    notify.success(JSON.stringify(formRef.getValues()));\n  });\n  return (\n    <FormProvider formRef={formRef} onSubmit={onSubmit}>\n      <FieldSlider name="field"></FieldSlider>\n      <Stack\n        direction="row"\n        sx={{\n          justifyContent: "end",\n        }}>\n        <Button\n          sx={{\n            marginTop: "10px",\n          }}\n          variant="contained"\n          type="submit">\n          Submit\n        </Button>\n      </Stack>\n    </FormProvider>\n  );\n};\n'})})})})]}),"\n",(0,o.jsx)(n.h2,{id:"npm2yarn-remark-plugin-configuration",children:"Props"}),"\n",(0,o.jsx)(n.admonition,{title:"tip",type:"tip",children:(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Type: any, can be customized as needed."}),"\n",(0,o.jsxs)(n.li,{children:["Default value:","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Not specified: optional."}),"\n",(0,o.jsx)(n.li,{children:'Specified as "require": mandatory.'}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.li,{children:"Type link: Click to navigate to the details below."}),"\n"]})}),"\n",(0,o.jsx)(n.h2,{id:"type",children:"Type"}),"\n",(0,o.jsx)(d.FieldTextProps,{})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(f,{...e})}):f(e)}}}]);