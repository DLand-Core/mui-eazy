"use strict";(self.webpackChunkmui_eazy_docs=self.webpackChunkmui_eazy_docs||[]).push([[5786],{704:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>a,default:()=>h,frontMatter:()=>c,metadata:()=>m,toc:()=>p});var i=n(7458),o=n(6687),r=(n(4069),n(608)),s=n(9100),l=n(4471),d=n(6615);const c={sidebar_position:1},a="Field Switch",m={id:"components/pro/Form/field-switch",title:"Field Switch",description:"show code",source:"@site/docs/components/pro/Form/field-switch.mdx",sourceDirName:"components/pro/Form",slug:"/components/pro/Form/field-switch",permalink:"/mui-eazy/docs/components/pro/Form/field-switch",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/components/pro/Form/field-switch.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Field Slider",permalink:"/mui-eazy/docs/components/pro/Form/field-slider"},next:{title:"Field Text",permalink:"/mui-eazy/docs/components/pro/Form/field-text"}},u={},p=[{value:"Props",id:"npm2yarn-remark-plugin-configuration",level:2},{value:"Type",id:"type",level:2}];function f(t){const e={admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",pre:"pre",ul:"ul",...(0,o.a)(),...t.components},{Details:n}=e;return n||function(t,e){throw new Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"field-switch",children:"Field Switch"}),"\n","\n","\n",(0,i.jsx)(d.NotifyProvider,{children:(0,i.jsxs)(s.Z,{defaultValue:"Demo",values:[{label:"Demo",value:"Demo"},{label:"PlayGround",value:"PlayGround"}],children:[(0,i.jsx)(l.Z,{value:"PlayGround",children:(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-jsx",metastring:"live noInline",live:!0,children:'const Demo = () => {\n\tconst formRef = useFormRef({});\n\tconst {handleSubmit} = formRef;\n\tconst onSubmit = handleSubmit(() => {\n\t\tnotify.success(JSON.stringify(formRef.getValues()));\n\t});\n\treturn (\n\t\t<FormProvider formRef={formRef} onSubmit={onSubmit}>\n\t\t\t<FieldSwitch label={\'field\'} name="field"></FieldSwitch>\n\t\t\t<Stack\n\t\t\t\tdirection="row"\n\t\t\t\tsx={{\n\t\t\t\t\tjustifyContent: \'end\',\n\t\t\t\t}}>\n\t\t\t\t<Button\n\t\t\t\t\tsx={{\n\t\t\t\t\t\tmarginTop: \'10px\',\n\t\t\t\t\t}}\n\t\t\t\t\tvariant="contained"\n\t\t\t\t\ttype="submit">\n\t\t\t\t\tSubmit\n\t\t\t\t</Button>\n\t\t\t</Stack>\n\t\t</FormProvider>\n\t);\n};\n\nrender(<Demo />);\n'})})}),(0,i.jsx)(l.Z,{value:"Demo",children:(0,i.jsx)(r.Z,{children:(0,i.jsx)(d.FieldSwitchDemo,{})})})]})}),"\n",(0,i.jsxs)(n,{children:[(0,i.jsx)("summary",{children:"show code"}),(0,i.jsx)(s.Z,{children:(0,i.jsx)(l.Z,{value:"componennt",children:(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-tsx",metastring:"{5,8,12,41-61} showLineNumbers",children:"import {Button, Stack} from '@mui/material';\nimport PropsTable from '@site/src/components/PropsTable';\nimport {NotifyProvider} from 'mui-eazy';\nimport {\n\tuseFormRef,\n\tFieldDatePicker,\n\tFormProvider,\n\tnotify,\n\tLocalizationProvider,\n} from 'mui-eazy';\n\nexport const FieldSwitchDemo = () => {\n\tconst formRef = useFormRef({});\n\tconst {handleSubmit} = formRef;\n\tconst onSubmit = handleSubmit(() => {\n\t\tnotify.success(JSON.stringify(formRef.getValues()));\n\t});\n\treturn (\n\t\t<FormProvider formRef={formRef} onSubmit={onSubmit}>\n\t\t\t<FieldSwitch label={'field'} name=\"field\"></FieldSwitch>\n\t\t\t<Stack\n\t\t\t\tdirection=\"row\"\n\t\t\t\tsx={{\n\t\t\t\t\tjustifyContent: 'end',\n\t\t\t\t}}>\n\t\t\t\t<Button\n\t\t\t\t\tsx={{\n\t\t\t\t\t\tmarginTop: '10px',\n\t\t\t\t\t}}\n\t\t\t\t\tvariant=\"contained\"\n\t\t\t\t\ttype=\"submit\">\n\t\t\t\t\tSubmit\n\t\t\t\t</Button>\n\t\t\t</Stack>\n\t\t</FormProvider>\n\t);\n};\n"})})})})]}),"\n",(0,i.jsx)(e.h2,{id:"npm2yarn-remark-plugin-configuration",children:"Props"}),"\n",(0,i.jsx)(e.admonition,{title:"tip",type:"tip",children:(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Type: any, can be customized as needed."}),"\n",(0,i.jsxs)(e.li,{children:["Default value:","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Not specified: optional."}),"\n",(0,i.jsx)(e.li,{children:'Specified as "require": mandatory.'}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.li,{children:"Type link: Click to navigate to the details below."}),"\n"]})}),"\n",(0,i.jsx)(e.h2,{id:"type",children:"Type"}),"\n",(0,i.jsx)(d.FieldTextProps,{})]})}function h(t={}){const{wrapper:e}={...(0,o.a)(),...t.components};return e?(0,i.jsx)(e,{...t,children:(0,i.jsx)(f,{...t})}):f(t)}}}]);