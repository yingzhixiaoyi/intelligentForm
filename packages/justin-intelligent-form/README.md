

<h3 align="center" style="background-image:-webkit-linear-gradient(left,#44c0fa,#c26cf6);-webkit-background-clip:text;-webkit-text-fill-color:transparent;">justin-intelligent-form
</h3>


<h4 align="center">一个开箱即用的拖拽式的可视化低代码设计器</h4>

<p align="center">
  <a href="https://github.com/vuejs/core">
    <img src="https://img.shields.io/badge/vue-3.3.4-brightgreen.svg" alt="vue">
  </a>
  <a href="https://github.com/microsoft/TypeScript">
    <img src="https://img.shields.io/badge/typescript-5.1.6-blue" alt="ant-design-vue">
  </a>
  <a href="#">
    <img src="https://img.shields.io/github/license/mashape/apistatus.svg" alt="license">
  </a>
</p>


📦github仓库：[https://github.com/yingzhixiaoyi/intelligentForm](https://github.com/yingzhixiaoyi/intelligentForm)



#### 演示视频

https://github.com/yingzhixiaoyi/intelligentForm/assets/57881800/d3a7df15-06e0-4741-9547-ed55bfa523fa



#### 演示图片

![演示图片](https://gitee.com/yingzhixiaoyi/mdnice/raw/master/1703211040885.jpg)

## 简介

`智能表单设计器`，是一个功能强大、开箱即用的拖拽式低代码设计器。它基于 Vue3 开发，兼容多套 UI 组件库，除了基础的页面设计功能，EDesigner 还提供了强大的扩展功能，可以让开发者根据自己的需求自由扩展和定制组件。使用 JSON 配置来生成页面，可帮助开发者快速生成页面，提高开发效率。它提供了两个重要组件：`e-designer` 设计器和 `e-builder` 生成器。


## 最新版本

[![](https://img.shields.io/npm/v/justin-intelligent-form.svg?style=flat-square)](https://www.npmjs.com/package/justin-intelligent-form)



#### 功能

- [x] 拖拽设计
- [x] 自定义 actionBar
- [x] 布局组件扩展
- [x] 自定义组件扩展
- [x] 事件扩展
- [x] 组件懒加载
- [x] 完善布局
- [x] 组件属性自定义
- [x] 支持不同 UI
- [x] 插件扩展
- [x] 模板扩展
- [x] 组件切换显示



## 核心组件介绍

#### e-designer 设计器

`e-designer` 是一个可视化设计器组件，用户可以通过拖拽组件的方式快速生成 JSON 配置。它提供了丰富的组件库和配置项，用户可以根据需要选择合适的组件并配置相应的属性、事件和动作。设计器还提供了实时预览功能，用户可以随时查看所设计页面的效果。最终，用户可以将 JSON 配置导出，用于页面的生成和修改。

#### e-builder 生成器

`e-builder` 是一个页面构建组件，它可以将设计器生成的 JSON 配置构建成页面，完成组件的渲染、事件绑定和数据回显等操作。

## 安装 justin-intelligent-form

```bash
npm i justin-intelligent-form
```

justin-intelligent-form 目标是支持多 UI 兼容,目前支持以下 UI

- element-plus
- ant-design-vue
- naive-ui

## 选择 UI 组件库

- ### 选择 element-plus

```bash
npm i element-plus
```

main.ts 或者 main.js 引入注册组件

```javascript
// 引入Element plus样式
import "element-plus/dist/index.css";
// 引入k-designer样式
import "justin-intelligent-form/dist/style.css";
import { pluginManager, setupElementPlus } from "justin-intelligent-form";
// 注册Element UI
setupElementPlus(pluginManager);
```

- ### 选择 ant-design-vue 

```bash
npm i ant-design-vue
```

main.ts 或者 main.js 引入注册组件

```javascript
// 引入k-designer样式
import "justin-intelligent-form/dist/style.css";
// 引入antd UI 重置样式
import "ant-design-vue/dist/reset.css";
import { pluginManager, setupAntd } from "justin-intelligent-form";
// 使用Antd UI
setupAntd(pluginManager);
```
- #### 注：ant-design-vue v3.x版本需要改成下面方式
```javascript
// 引入antd UI样式
import "ant-design-vue/dist/antd.css";
// 引入k-designer样式
import "justin-intelligent-form/dist/style.css";
import { pluginManager, setupAntdV3 } from "justin-intelligent-form";
// 使用Antd UI
setupAntdV3(pluginManager);
```


- ### 选择 naive-ui


main.ts 或者 main.js 引入注册组件

```javascript
// 引入k-designer样式
import "justin-intelligent-form/dist/style.css";
import { pluginManager, setupNaiveUi } from "justin-intelligent-form";
// 注册Naive Ui
setupNaiveUi(pluginManager);
```

## EDesigner(设计器) 基础用法

```vue
<template>
  <div class="h-full">
    <EDesigner />
  </div>
</template>
<script setup lang="ts">
import { EDesigner } from "justin-intelligent-form";
</script>
<style>
.h-full {
  height: 100vh;
}
</style>
```
## EBuilder(生成器) 基础用法

```vue
<template>
  <div>
    <EBuilder :pageSchema="pageSchema" />
  </div>
</template>
<script setup>
import { EBuilder } from "justin-intelligent-form";

const pageSchema = {
  "schemas": [
    {
      "type": "page",
      "id": "root",
      "label": "页面",
      "children": [
        {
          "label": "测试问卷三",
          "type": "card",
          "icon": "epic-icon-qiapian",
          "children": [
            {
              "label": "表单",
              "type": "form",
              "icon": "epic-icon-daibanshixiang",
              "labelWidth": 100,
              "name": "default",
              "componentProps": {
                "layout": "horizontal",
                "labelWidth": 100,
                "labelLayout": "fixed",
                "labelCol": {
                  "span": 5
                },
                "wrapperCol": {
                  "span": 19
                },
                "hideRequiredMark": false,
                "colon": true,
                "labelAlign": "right",
                "size": "middle"
              },
              "children": [
                {
                  "label": "栅格布局",
                  "type": "row",
                  "icon": "epic-icon-zhage",
                  "childImmovable": true,
                  "children": [],
                  "componentProps": {
                    "gutter": 10
                  },
                  "id": "row_4c3wbkbi"
                },
                {
                  "label": "栅格布局",
                  "type": "row",
                  "icon": "epic-icon-zhage",
                  "childImmovable": true,
                  "children": [
                    {
                      "type": "col",
                      "children": [],
                      "componentProps": {
                        "span": 2
                      },
                      "id": "col_te7xynx3"
                    },
                    {
                      "type": "col",
                      "children": [
                        {
                          "label": "姓名",
                          "type": "input",
                          "field": "input_h07dbxmq",
                          "icon": "epic-icon-write",
                          "input": true,
                          "componentProps": {
                            "bordered": true,
                            "placeholder": "请输入"
                          },
                          "id": "input_h07dbxmq",
                          "rules": [
                            {
                              "required": true,
                              "message": "必填项",
                              "type": "string",
                              "trigger": [
                                "change"
                              ]
                            }
                          ]
                        },
                        {
                          "label": "门诊编号",
                          "type": "input",
                          "field": "input_n1s6knsh",
                          "icon": "epic-icon-write",
                          "input": true,
                          "componentProps": {
                            "bordered": true,
                            "placeholder": "请输入"
                          },
                          "id": "input_n1s6knsh",
                          "rules": [
                            {
                              "required": true,
                              "message": "必填项",
                              "type": "string",
                              "trigger": [
                                "change"
                              ]
                            }
                          ]
                        },
                        {
                          "label": "1、今天感觉身体感觉如何？",
                          "type": "text",
                          "field": "text_32linsa0",
                          "icon": "epic-icon-liebiao",
                          "input": false,
                          "componentProps": {
                            "size": "h3"
                          },
                          "id": "text_32linsa0"
                        },
                        {
                          "label": "舒适状况",
                          "type": "radio",
                          "icon": "epic-icon-danxuan-cuxiantiao",
                          "field": "isFeel",
                          "input": true,
                          "componentProps": {
                            "options": [
                              {
                                "label": "舒适",
                                "value": 1
                              },
                              {
                                "label": "不舒适",
                                "value": 2
                              },
                              {
                                "label": "其他",
                                "value": "3"
                              }
                            ],
                            "optionType": "default"
                          },
                          "id": "radio_wszbepup",
                          "rules": [
                            {
                              "required": true,
                              "message": "必填项",
                              "type": "number",
                              "trigger": [
                                "change"
                              ]
                            }
                          ]
                        },
                        {
                          "label": "2、今天想吃些什么菜系？",
                          "type": "text",
                          "field": "text_tj0vosa8",
                          "icon": "epic-icon-liebiao",
                          "input": false,
                          "componentProps": {
                            "size": "h3"
                          },
                          "id": "text_tj0vosa8"
                        },
                        {
                          "label": "菜系选择",
                          "type": "checkbox",
                          "icon": "epic-icon-duoxuan1",
                          "field": "caixi",
                          "input": true,
                          "componentProps": {
                            "options": [
                              {
                                "label": "粤菜",
                                "value": "粤菜"
                              },
                              {
                                "label": "湘菜",
                                "value": "湘菜"
                              },
                              {
                                "label": "川菜",
                                "value": "川菜"
                              }
                            ]
                          },
                          "id": "checkbox_znfdrxyk",
                          "rules": [
                            {
                              "required": true,
                              "message": "必填项",
                              "type": "array",
                              "trigger": [
                                "change"
                              ]
                            }
                          ]
                        },
                        {
                          "label": "3、今天几点起床的？",
                          "type": "text",
                          "field": "text_h8r28ku3",
                          "icon": "epic-icon-liebiao",
                          "input": false,
                          "componentProps": {
                            "size": "h3"
                          },
                          "id": "text_h8r28ku3"
                        },
                        {
                          "label": "选择时间",
                          "type": "time",
                          "icon": "epic-icon-time",
                          "field": "time_d5qjg1vd",
                          "input": true,
                          "componentProps": {
                            "valueFormat": "HH:mm:ss",
                            "size": "middle",
                            "placement": "bottomLeft",
                            "placeholder": "请输入"
                          },
                          "id": "time_d5qjg1vd",
                          "rules": [
                            {
                              "required": true,
                              "message": "必填项",
                              "type": "string",
                              "trigger": [
                                "change"
                              ]
                            }
                          ]
                        },
                        {
                          "label": "4、准备什么时候去复查？",
                          "type": "text",
                          "field": "text_6klafu5q",
                          "icon": "epic-icon-liebiao",
                          "input": false,
                          "componentProps": {
                            "size": "h3"
                          },
                          "id": "text_6klafu5q"
                        },
                        {
                          "label": "选择框",
                          "type": "select",
                          "icon": "epic-icon-xiala",
                          "field": "select_h7q5og95",
                          "input": true,
                          "componentProps": {
                            "options": [
                              {
                                "label": "本周",
                                "value": "本周"
                              },
                              {
                                "label": "下周",
                                "value": "下周"
                              },
                              {
                                "label": "下下周",
                                "value": "下下周"
                              }
                            ],
                            "listHeight": 256,
                            "style": {
                              "width": "100%"
                            },
                            "placeholder": "请选择",
                            "placement": "bottomLeft"
                          },
                          "id": "select_h7q5og95",
                          "rules": [
                            {
                              "required": true,
                              "message": "必填项",
                              "type": "string",
                              "trigger": [
                                "change"
                              ]
                            }
                          ]
                        },
                        {
                          "label": "5、评价一下目前的身体状况",
                          "type": "text",
                          "field": "text_mmx0s0vt",
                          "icon": "epic-icon-liebiao",
                          "input": false,
                          "componentProps": {
                            "size": "h3"
                          },
                          "id": "text_mmx0s0vt"
                        },
                        {
                          "label": "文本域",
                          "type": "textarea",
                          "field": "textarea_9vxilhqk",
                          "icon": "epic-icon-edit",
                          "input": true,
                          "componentProps": {
                            "placeholder": "请输入"
                          },
                          "id": "textarea_9vxilhqk",
                          "rules": [
                            {
                              "required": true,
                              "message": "必填项",
                              "type": "string",
                              "trigger": [
                                "change"
                              ]
                            }
                          ]
                        },
                        {
                          "label": "6、对本次服务打分",
                          "type": "text",
                          "field": "text_olszgo2m",
                          "icon": "epic-icon-liebiao",
                          "input": false,
                          "componentProps": {
                            "size": "h3"
                          },
                          "id": "text_olszgo2m"
                        },
                        {
                          "label": "评分",
                          "type": "slider",
                          "icon": "epic-icon-menu",
                          "field": "slider_krevesue",
                          "input": true,
                          "componentProps": {},
                          "id": "slider_krevesue",
                          "rules": [
                            {
                              "required": true,
                              "message": "必填项",
                              "type": "number",
                              "trigger": [
                                "change"
                              ]
                            }
                          ]
                        }
                      ],
                      "componentProps": {
                        "span": 20
                      },
                      "id": "col_m15m6e4h"
                    },
                    {
                      "type": "col",
                      "children": [],
                      "componentProps": {
                        "span": 2
                      },
                      "id": "col_p79z65fi"
                    }
                  ],
                  "componentProps": {
                    "gutter": 10
                  },
                  "id": "row_yx5qoejs"
                },
                {
                  "label": "栅格布局",
                  "type": "row",
                  "icon": "epic-icon-zhage",
                  "childImmovable": true,
                  "children": [],
                  "componentProps": {
                    "gutter": 10
                  },
                  "id": "row_6klpsk5l"
                },
                {
                  "label": "栅格布局",
                  "type": "row",
                  "icon": "epic-icon-zhage",
                  "childImmovable": true,
                  "children": [
                    {
                      "type": "col",
                      "children": [
                        {
                          "label": "校验数据",
                          "type": "button",
                          "field": "button_ldgksvwq",
                          "icon": "epic-icon-button-remove",
                          "input": false,
                          "componentProps": {
                            "style": {
                              "width": "50%"
                            },
                            "class": "display:block;margin-left:auto;margin-right:auto"
                          },
                          "id": "button_ldgksvwq",
                          "on": {
                            "click": [
                              {
                                "type": "component",
                                "methodName": "validate",
                                "componentId": "form_lm4kbt9h"
                              }
                            ]
                          }
                        }
                      ],
                      "componentProps": {
                        "span": 6
                      },
                      "id": "col_bhbdgxse"
                    },
                    {
                      "type": "col",
                      "children": [
                        {
                          "label": "取消验证",
                          "type": "button",
                          "field": "button_wktrd506",
                          "icon": "epic-icon-button-remove",
                          "input": false,
                          "componentProps": {
                            "style": {
                              "width": "50%"
                            },
                            "type": "default",
                            "class": "display:block;margin-left:auto;margin-right:auto"
                          },
                          "id": "button_wktrd506",
                          "on": {
                            "click": [
                              {
                                "type": "custom",
                                "methodName": "clearValidate",
                                "componentId": null
                              }
                            ]
                          }
                        }
                      ],
                      "componentProps": {
                        "span": 6
                      },
                      "id": "col_1os0us4b"
                    },
                    {
                      "type": "col",
                      "children": [
                        {
                          "label": "提交数据",
                          "type": "button",
                          "field": "button_5so7wa0b",
                          "icon": "epic-icon-button-remove",
                          "input": false,
                          "componentProps": {
                            "style": {
                              "width": "50%"
                            },
                            "type": "primary",
                            "class": "display:block;margin-left:auto;margin-right:auto"
                          },
                          "id": "button_5so7wa0b",
                          "on": {
                            "click": [
                              {
                                "type": "public",
                                "methodName": "submit",
                                "componentId": null
                              }
                            ]
                          }
                        }
                      ],
                      "componentProps": {
                        "span": 6
                      },
                      "id": "col_5lask45x"
                    },
                    {
                      "type": "col",
                      "children": [
                        {
                          "label": "关闭弹窗",
                          "type": "button",
                          "field": "button_lmr46b7j",
                          "icon": "epic-icon-button-remove",
                          "input": false,
                          "componentProps": {
                            "style": {
                              "width": "50%"
                            },
                            "type": "default",
                            "class": "display:block;margin-left:auto;margin-right:auto"
                          },
                          "id": "button_lmr46b7j",
                          "on": {
                            "click": [
                              {
                                "type": "public",
                                "methodName": "close",
                                "componentId": null
                              }
                            ]
                          }
                        }
                      ],
                      "componentProps": {
                        "span": 6
                      },
                      "id": "col_8xslh9um"
                    }
                  ],
                  "componentProps": {
                    "gutter": 10
                  },
                  "id": "row_hlght2m5"
                }
              ],
              "id": "form_lm4kbt9h"
            }
          ],
          "id": "card_jd86jb0x"
        }
      ],
      "componentProps": {
        "style": {
          "padding": "16px"
        }
      },
      "name": "调查问卷三"
    }
  ],
  "script": "\n  const { defineExpose,publicMethods } = epic;\n\n  function test (){\n      console.log('test',publicMethods)\n      publicMethods.formTest&&publicMethods.formTest()\n  }\n  function clearValidate (){\n      console.log('clearValidate',publicMethods)\n      publicMethods.formClearValidate&&publicMethods.formClearValidate()\n  }\n\n  // 通过defineExpose暴露的函数或者属性\n  defineExpose({test,clearValidate})",
  "canvas": {}
}
</script>
```

#### EDesigner(设计器) 调用外部方法

```vue
<template>
	<EBuilder  ref="DesignRenderDom"  :pageSchema="pageSchema" />  
</template>

<script lang="ts" setup>
	import { EBuilder, pluginManager } from 'justin-intelligent-form';
	
	const DesignRenderDom = ref();
	
	pluginManager.addPublicMethod({
    methodName: 'formClearValidate',
    method: () => DesignRenderDom.value.clearValidate(),
  });
</script>
```

#### EDesigner(设计器) 模板操作方法

```ts
    /**
     * 添加模板方法
     *
     */
    addModulesMethod(data: PageSchema): void;
    /**
     * 添加模板方法
     *
     */
    setModulesMethod(data: any): void;
    /**
     * 清空模板方法
     *
     */
    resetModulesMethod(data: PageSchema): void;
```

