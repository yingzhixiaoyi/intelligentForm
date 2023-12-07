<template>
  <div>
    <EBuilder ref="kfb" :pageSchema="pageSchema" @ready="handleReady">
    </EBuilder>
    <div @click="handleGetData">
      改变disabled状态
    </div>
  </div>
</template>

<script lang="ts" setup>
import {ref, onMounted} from 'vue'
import {EBuilder, PageManager, PageSchema} from '@epic-designer/core'
import {pluginManager} from "@epic-designer/utils";
let pageSchema = ref<PageSchema>({
  "schemas": [
    {
      "type": "page",
      "id": "root",
      "label": "问卷调查",
      "children": [
        {
          "label": "测试问卷",
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
                  "children": [
                    {
                      "type": "col",
                      "children": [
                        {
                          "label": "姓名",
                          "type": "input",
                          "field": "input_6rw3ozc2",
                          "icon": "epic-icon-write",
                          "input": true,
                          "componentProps": {
                            "bordered": true,
                            "placeholder": "请输入",
                            "style": {},
                            "disabled": true
                          },
                          "id": "input_6rw3ozc2",
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
                        }
                      ],
                      "componentProps": {
                        "span": 12
                      },
                      "id": "col_lnbrmigk"
                    },
                    {
                      "type": "col",
                      "children": [
                        {
                          "label": "性别",
                          "type": "select",
                          "icon": "epic-icon-xiala",
                          "field": "select_mqm93lk5",
                          "input": true,
                          "componentProps": {
                            "options": [
                              {
                                "label": "男",
                                "value": "选项1"
                              },
                              {
                                "label": "女",
                                "value": "选项2"
                              }
                            ],
                            "listHeight": 256,
                            "style": {
                              "width": "100%"
                            },
                            "placeholder": "请选择",
                            "placement": "bottomLeft",
                            "disabled": true
                          },
                          "id": "select_mqm93lk5",
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
                        }
                      ],
                      "componentProps": {
                        "span": 12
                      },
                      "id": "col_qvvvp5ej"
                    }
                  ],
                  "componentProps": {
                    "gutter": 10
                  },
                  "id": "row_epn38h0h"
                },
                {
                  "label": "1，今天是否有吃药？",
                  "type": "text",
                  "field": "text_gu9fyck8",
                  "icon": "epic-icon-liebiao",
                  "input": false,
                  "componentProps": {
                    "size": "h3"
                  },
                  "id": "text_gu9fyck8"
                },
                {
                  "label": "单选框",
                  "type": "radio",
                  "icon": "epic-icon-danxuan-cuxiantiao",
                  "field": "radio_vx9jtpuk",
                  "input": true,
                  "componentProps": {
                    "options": [
                      {
                        "label": "吃了",
                        "value": 1
                      },
                      {
                        "label": "没吃",
                        "value": 2
                      }
                    ],
                    "optionType": "default",
                    "defaultValue": 2,
                    "disabled": true
                  },
                  "id": "radio_vx9jtpuk",
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
                  "label": "2，今天晚上想吃什么？",
                  "type": "text",
                  "field": "text_vvfrc1yq",
                  "icon": "epic-icon-liebiao",
                  "input": false,
                  "componentProps": {
                    "size": "h3"
                  },
                  "id": "text_vvfrc1yq"
                },
                {
                  "label": "多选框",
                  "type": "checkbox",
                  "icon": "epic-icon-duoxuan1",
                  "field": "checkbox_yws0v3pa",
                  "input": true,
                  "componentProps": {
                    "options": [
                      {
                        "label": "烧鸡",
                        "value": "选项1"
                      },
                      {
                        "label": "烧鸭",
                        "value": "选项2"
                      },
                      {
                        "label": "烧鹅",
                        "value": "选项3"
                      }
                    ],
                    "disabled": true
                  },
                  "id": "checkbox_yws0v3pa",
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
                  "label": "3，今天的心情评分如何？",
                  "type": "text",
                  "field": "text_av77aojn",
                  "icon": "epic-icon-liebiao",
                  "input": false,
                  "componentProps": {
                    "size": "h4"
                  },
                  "id": "text_av77aojn"
                },
                {
                  "label": "滑块",
                  "type": "slider",
                  "icon": "epic-icon-menu",
                  "field": "slider_e51uux3d",
                  "input": true,
                  "id": "slider_e51uux3d",
                  "componentProps": {
                    "disabled": true
                  }
                },
                {
                  "label": "4，今天有什么感想？",
                  "type": "text",
                  "field": "text_7hfknr8s",
                  "icon": "epic-icon-liebiao",
                  "input": false,
                  "componentProps": {
                    "size": "h4"
                  },
                  "id": "text_7hfknr8s"
                },
                {
                  "label": "文本域",
                  "type": "textarea",
                  "field": "textarea_rc1v4r07",
                  "icon": "epic-icon-edit",
                  "input": true,
                  "componentProps": {
                    "placeholder": "请输入",
                    "disabled": true
                  },
                  "id": "textarea_rc1v4r07",
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
                  "label": "5，明天是否要通知是按时吃药？",
                  "type": "text",
                  "field": "text_ttoo9i5i",
                  "icon": "epic-icon-liebiao",
                  "input": false,
                  "componentProps": {
                    "size": "h4"
                  },
                  "id": "text_ttoo9i5i"
                },
                {
                  "label": "开关",
                  "type": "switch",
                  "icon": "epic-icon-kaiguan3",
                  "field": "switch_beo1j8a5",
                  "input": true,
                  "componentProps": {
                    "defaultValue": true,
                    "disabled": true
                  },
                  "id": "switch_beo1j8a5",
                  "rules": [
                    {
                      "required": true,
                      "message": "必填项",
                      "type": "boolean",
                      "trigger": [
                        "change"
                      ]
                    }
                  ]
                },
                {
                  "label": "按钮",
                  "type": "button",
                  "field": "button_z651seiv",
                  "icon": "epic-icon-button-remove",
                  "input": false,
                  "componentProps": {
                    "type": "primary",
                    "class": "display:block;margin-left:auto;margin-right:auto",
                    "style": {
                      "width": "50%"
                    }
                  },
                  "id": "button_z651seiv",
                  "on": {
                    "click": [
                      {
                        "type": "component",
                        "methodName": "validate",
                        "componentId": "form_riwfjy9f"
                      },
                      {
                        "type": "custom",
                        "methodName": "submit",
                        "componentId": null
                      }
                    ]
                  }
                }
              ],
              "id": "form_riwfjy9f"
            }
          ],
          "id": "card_1u0p4edl",
          "componentProps": {
            "hidden": false
          }
        }
      ],
      "componentProps": {
        "style": {
          "padding": "16px"
        }
      },
      "name": "问卷调查"
    }
  ],
  "script": "const { defineExpose, find } = epic;\n\nfunction submit (){\n    console.log('test')\n}\n\n// 通过defineExpose暴露的函数或者属性\ndefineExpose({\n submit \n})"
})

const kfb = ref<any>(null)
let flag = true

async function handleGetData() {
  flag = !flag
  pluginManager.changeDisabled(pageSchema.value, flag)

}




function handleReady(pageManager: PageManager) {
  console.log(pageManager, 75)
}

// 表单赋值
onMounted(async () => {
  /*  kfb.value?.setData({
      'upload': [{
        name: 'xxx',
        uid: 'xxx',
        status:
          "success",
        url: 'http://cdn.kcz66.com/%E5%A4%B4%E5%83%8F.jpg'
      }]
    })*/

  // const data = await kfb.value?.getData()

})


</script>
