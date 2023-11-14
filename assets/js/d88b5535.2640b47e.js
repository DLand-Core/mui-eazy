"use strict";(self.webpackChunkdocs123=self.webpackChunkdocs123||[]).push([[601],{2362:(n,e,o)=>{o.r(e),o.d(e,{assets:()=>c,contentTitle:()=>m,default:()=>g,frontMatter:()=>l,metadata:()=>d,toc:()=>p});var t=o(7458),s=o(6687),r=o(608),i=o(9100),a=o(4471),u=(o(1092),o(581));const l={sidebar_position:1},m="TabView",d={id:"components/base/tabView",title:"TabView",description:"show code",source:"@site/docs/components/base/tabView.mdx",sourceDirName:"components/base",slug:"/components/base/tabView",permalink:"/mui-eazy/docs/components/base/tabView",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/components/base/tabView.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Base",permalink:"/mui-eazy/docs/category/base"}},c={},p=[{value:"Props",id:"npm2yarn-remark-plugin-configuration",level:2}];function f(n){const e={code:"code",h1:"h1",h2:"h2",pre:"pre",...(0,s.a)(),...n.components},{Details:o}=e;return o||function(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"tabview",children:"TabView"}),"\n","\n","\n",(0,t.jsx)(u.NotifyProvider,{children:(0,t.jsxs)(i.Z,{defaultValue:"Demo",values:[{label:"Demo",value:"Demo"},{label:"PlayGround",value:"PlayGround"}],children:[(0,t.jsx)(a.Z,{value:"PlayGround",children:(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-jsx",metastring:"live noInline",live:!0,children:'export const TabViewProps = () => {\n  let params = {\n    treeRoot: {\n      type: "TreeItemProps",\n      defaultValue: "",\n      desc: "tree item data",\n    },\n    record: {\n      type: "{ [key: string]: TreeItemProps }",\n      defaultValue: "",\n      desc: "the flat result ref of the tree,pass a value to the tree",\n    },\n    update: {\n      type: "() => void",\n      defaultValue: "",\n      desc: "handle cliek",\n    },\n    onSwitch: {\n      type: "(id: string, record: any) => void;",\n      defaultValue: "",\n      desc: "handle tree item click",\n    },\n    sx: {\n      type: "SxProps<Theme>",\n      defaultValue: "",\n      desc: "custom styles.",\n    },\n  };\n  return <PropsTable params={params} />;\n};\nconst useFormConfig_1 = (props: { id?: string } = {}): FormConfig => {\n  return useMemo(() => {\n    return {\n      title: {\n        fieldConfig: {\n          required: true,\n        },\n      },\n      sub_title: {\n        label: "subTitle",\n      },\n    };\n  }, []);\n};\nconst useFormConfig_2 = (props: { id?: string } = {}): FormConfig => {\n  return useMemo(() => {\n    return {\n      title: {\n        type: "checkbox",\n        fieldConfig: {\n          required: true,\n        },\n      },\n      sub_title: {\n        label: "subTitle",\n      },\n    };\n  }, []);\n};\nconst useFormConfig_3 = (props: { id?: string } = {}): FormConfig => {\n  return useMemo(() => {\n    return {\n      content: {\n        type: "editer",\n      },\n      name: {\n        label: "subTitle",\n        type: "upload",\n      },\n    };\n  }, []);\n};\n\nconst Demo = () => {\n  const config1 = useFormConfig_1();\n  const config2 = useFormConfig_2();\n  const config3 = useFormConfig_3();\n  const { formNode: formNode1 } = useFields(config1, {\n    onSubmit: (props) => {\n      const { isRight, values, formRef } = props || {};\n      if (isRight) {\n        alert(JSON.stringify(values));\n      }\n    },\n  });\n  const { formNode: formNode2 } = useFields(config2, {\n    onSubmit: (props) => {\n      const { isRight, values, formRef } = props || {};\n      if (isRight) {\n        alert(JSON.stringify(values));\n      }\n    },\n  });\n  const { formNode: formNode3 } = useFields(config3, {\n    onSubmit: (props) => {\n      const { isRight, values, formRef } = props || {};\n      if (isRight) {\n        alert(JSON.stringify(values));\n      }\n    },\n  });\n  const tabValues = useMemo<TabViewItem[]>(() => {\n    return [\n      {\n        label: "tab1",\n        node: formNode1,\n      },\n      {\n        label: "tab2",\n        node: formNode2,\n      },\n      {\n        label: "tab3",\n        node: formNode3,\n      },\n    ];\n  }, []);\n  return <TabView tabs={tabValues} />;\n};\n\nrender(<Demo />);\n'})})}),(0,t.jsx)(a.Z,{value:"Demo",children:(0,t.jsx)(r.Z,{children:(0,t.jsx)(u.TabViewDemo,{})})})]})}),"\n",(0,t.jsxs)(o,{children:[(0,t.jsx)("summary",{children:"show code"}),(0,t.jsxs)(i.Z,{children:[(0,t.jsx)(a.Z,{value:"componennt",children:(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-tsx",metastring:"{5,8,12,41-61} showLineNumbers",children:'import PropsTable from "@site/src/components/PropsTable";\nimport { FormConfig, TabView, TabViewItem, useFields } from "mui-eazy";\nimport { useMemo } from "react";\nconst useFormConfig_1 = (props: { id?: string } = {}): FormConfig => {\n  return useMemo(() => {\n    return {\n      title: {\n        fieldConfig: {\n          required: true,\n        },\n      },\n      sub_title: {\n        label: "subTitle",\n      },\n    };\n  }, []);\n};\nconst useFormConfig_2 = (props: { id?: string } = {}): FormConfig => {\n  return useMemo(() => {\n    return {\n      title: {\n        type: "checkbox",\n        fieldConfig: {\n          required: true,\n        },\n      },\n      sub_title: {\n        label: "subTitle",\n      },\n    };\n  }, []);\n};\nconst useFormConfig_3 = (props: { id?: string } = {}): FormConfig => {\n  return useMemo(() => {\n    return {\n      content: {\n        type: "editer",\n      },\n      name: {\n        label: "subTitle",\n        type: "upload",\n      },\n    };\n  }, []);\n};\n\nconst Demo = () => {\n  const config1 = useFormConfig_1();\n  const config2 = useFormConfig_2();\n  const config3 = useFormConfig_3();\n  const { formNode: formNode1 } = useFields(config1, {\n    onSubmit: (props) => {\n      const { isRight, values, formRef } = props || {};\n      if (isRight) {\n        alert(JSON.stringify(values));\n      }\n    },\n  });\n  const { formNode: formNode2 } = useFields(config2, {\n    onSubmit: (props) => {\n      const { isRight, values, formRef } = props || {};\n      if (isRight) {\n        alert(JSON.stringify(values));\n      }\n    },\n  });\n  const { formNode: formNode3 } = useFields(config3, {\n    onSubmit: (props) => {\n      const { isRight, values, formRef } = props || {};\n      if (isRight) {\n        alert(JSON.stringify(values));\n      }\n    },\n  });\n  const tabValues = useMemo<TabViewItem[]>(() => {\n    return [\n      {\n        label: "tab1",\n        node: formNode1,\n      },\n      {\n        label: "tab2",\n        node: formNode2,\n      },\n      {\n        label: "tab3",\n        node: formNode3,\n      },\n    ];\n  }, []);\n  return <TabView tabs={tabValues} />;\n};\n'})})}),(0,t.jsx)(a.Z,{value:"data",children:(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-tsx",metastring:"{61-68} showLineNumbers",children:'export const imgeList = [\n  "https://qiniu.moderate.run/img/20220831081227.png",\n  "https://qiniu.moderate.run/img/QQ20230420-204615%402x.png",\n  "https://qiniu.moderate.run/img/QQ20230420-205004%402x.png",\n  "https://qiniu.moderate.run/img/20220831081227.png",\n  "https://qiniu.moderate.run/img/QQ20230420-204615%402x.png",\n  "https://qiniu.moderate.run/img/QQ20230420-205004%402x.png",\n  "https://qiniu.moderate.run/img/20220831081227.png",\n  "https://qiniu.moderate.run/img/QQ20230420-204615%402x.png",\n  "https://qiniu.moderate.run/img/QQ20230420-205004%402x.png",\n];\n'})})})]})]}),"\n",(0,t.jsx)(e.h2,{id:"npm2yarn-remark-plugin-configuration",children:"Props"}),"\n",(0,t.jsx)(u.TabViewProps,{})]})}function g(n={}){const{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(f,{...n})}):f(n)}},1092:()=>{}}]);