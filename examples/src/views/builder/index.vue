<template>
  <div>
    <EBuilder ref="kfb" :pageSchema="pageSchema" @ready="handleReady">
    </EBuilder>
    <button @click="handleGetData">
      改变disabled状态
    </button>
    <button @click="setFormData">赋值</button>
    <button @click="clearValidate">清空校验</button>
  </div>
</template>

<script lang="ts" setup>
import {ref, onMounted} from 'vue'
import {EBuilder, PageManager, PageSchema} from '@epic-designer/core'
import {pluginManager} from "@epic-designer/utils";

pluginManager.addPublicMethod({
  methodName: 'formSubmit',
  method: handleGetData
})
let pageSchema = ref<PageSchema>({
  "schemas": [
    {
      "type": "page",
      "id": "root",
      "label": "页面",
      "children": [
        {
          "label": "测试题型一",
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
                          "label": "输入框",
                          "type": "input",
                          "field": "input_bhcgsgen",
                          "icon": "epic-icon-write",
                          "input": true,
                          "componentProps": {
                            "bordered": true,
                            "placeholder": "请输入"
                          },
                          "id": "input_bhcgsgen",
                          "rules": [
                            {
                              "required": true,
                              "message": "必填项",
                              "type": "string",
                              "trigger": [
                                "change",
                                "blur"
                              ]
                            }
                          ]
                        },
                        {
                          "label": "选择框",
                          "type": "select",
                          "icon": "epic-icon-xiala",
                          "field": "select_wx91d4hp",
                          "input": true,
                          "componentProps": {
                            "options": [
                              {
                                "label": "选项1",
                                "value": "选项1"
                              },
                              {
                                "label": "选项2",
                                "value": "选项2"
                              }
                            ],
                            "listHeight": 256,
                            "style": {
                              "width": "100%"
                            },
                            "placeholder": "请选择",
                            "placement": "bottomLeft"
                          },
                          "id": "select_wx91d4hp",
                          "rules": [
                            {
                              "required": true,
                              "message": "必填项",
                              "type": "string",
                              "trigger": [
                                "change",
                                "blur"
                              ]
                            }
                          ]
                        },
                        {
                          "label": "单选框",
                          "type": "radio",
                          "icon": "epic-icon-danxuan-cuxiantiao",
                          "field": "radio_jshg5j2d",
                          "input": true,
                          "componentProps": {
                            "options": [
                              {
                                "label": "选项1",
                                "value": 1
                              },
                              {
                                "label": "选项2",
                                "value": 2
                              }
                            ],
                            "optionType": "default"
                          },
                          "id": "radio_jshg5j2d",
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
                          "label": "时间选择器",
                          "type": "time",
                          "icon": "epic-icon-time",
                          "field": "time_xa0lkx0f",
                          "input": true,
                          "componentProps": {
                            "valueFormat": "HH:mm:ss",
                            "size": "middle",
                            "placement": "bottomLeft",
                            "placeholder": "请输入"
                          },
                          "id": "time_xa0lkx0f",
                          "rules": [
                            {
                              "required": true,
                              "message": "必填项",
                              "type": "string",
                              "trigger": [
                                "change",
                                "blur"
                              ]
                            }
                          ]
                        },
                        {
                          "label": "按钮",
                          "type": "button",
                          "field": "button_y9eye9c9",
                          "icon": "epic-icon-button-remove",
                          "input": false,
                          "componentProps": {
                            "type": "primary",
                            "class": "display:block;margin-left:auto;margin-right:auto",
                            "style": {
                              "width": "20%"
                            }
                          },
                          "id": "button_y9eye9c9",
                          "on": {
                            "click": [
                              {
                                "type": "component",
                                "methodName": "validate",
                                "componentId": "form_dql3iva7"
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
                      "componentProps": {
                        "span": 12
                      },
                      "id": "col_14cskv4i"
                    },
                    {
                      "type": "col",
                      "children": [
                        {
                          "label": "数字输入框",
                          "type": "number",
                          "icon": "epic-icon-number",
                          "field": "number_ip5j4rkm",
                          "input": true,
                          "componentProps": {
                            "style": {
                              "width": "100%"
                            },
                            "placeholder": "请输入"
                          },
                          "id": "number_ip5j4rkm",
                          "rules": [
                            {
                              "required": true,
                              "message": "必填项",
                              "type": "number",
                              "trigger": [
                                "change",
                                "blur"
                              ]
                            }
                          ]
                        },
                        {
                          "label": "多选框",
                          "type": "checkbox",
                          "icon": "epic-icon-duoxuan1",
                          "field": "checkbox_49kjkee9",
                          "input": true,
                          "componentProps": {
                            "options": [
                              {
                                "label": "选项1",
                                "value": "选项1"
                              },
                              {
                                "label": "选项2",
                                "value": "选项2"
                              }
                            ]
                          },
                          "id": "checkbox_49kjkee9",
                          "rules": [
                            {
                              "required": true,
                              "message": "必填项",
                              "type": "array",
                              "trigger": [
                                "change",
                                "blur"
                              ]
                            }
                          ]
                        },
                        {
                          "label": "日期选择器",
                          "type": "date",
                          "icon": "epic-icon-calendar",
                          "field": "date_elta6rlt",
                          "input": true,
                          "componentProps": {
                            "valueFormat": "YYYY-MM-DD",
                            "type": "date",
                            "placeholder": "请选择"
                          },
                          "id": "date_elta6rlt",
                          "rules": [
                            {
                              "required": true,
                              "message": "必填项",
                              "type": "string",
                              "trigger": [
                                "change",
                                "blur"
                              ]
                            }
                          ]
                        },
                        {
                          "label": "滑块",
                          "type": "slider",
                          "icon": "epic-icon-menu",
                          "field": "slider_wr8i00xb",
                          "input": true,
                          "id": "slider_wr8i00xb",
                          "rules": [
                            {
                              "required": true,
                              "message": "必填项",
                              "type": "number",
                              "trigger": [
                                "change",
                                "blur"
                              ]
                            }
                          ]
                        },
                        {
                          "label": "按钮",
                          "type": "button",
                          "field": "button_1822yyuk",
                          "icon": "epic-icon-button-remove",
                          "input": false,
                          "componentProps": {},
                          "id": "button_1822yyuk",
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
                        "span": 12
                      },
                      "id": "col_nagfb545"
                    }
                  ],
                  "componentProps": {
                    "gutter": 10
                  },
                  "id": "row_c3lkmp3e"
                }
              ],
              "id": "form_dql3iva7"
            }
          ],
          "id": "card_pfgjnpct"
        }
      ],
      "componentProps": {
        "style": {
          "padding": "16px"
        }
      },
      "name": "题型一"
    }
  ],
  "script": `
  const { defineExpose,publicMethods } = epic;
  function test (){
      console.log('test',publicMethods)
      publicMethods.getReady&&publicMethods.getReady()
  }
  // 通过defineExpose暴露的函数或者属性

  defineExpose({test })`

})

const kfb = ref<any>(null)
let flag = true

async function handleGetData() {
  flag = !flag
  kfb.value.changeDisabled(pageSchema.value, flag)

}


function clearValidate() {
  kfb.value.clearValidate()
}

async function setFormData() {
  let obj = {
    "switch_beo1j8a5": false,
    "input_6rw3ozc2": "1",
    "select_mqm93lk5": "选项2",
    "radio_vx9jtpuk": 2,
    "checkbox_yws0v3pa": [
      "选项2"
    ],
    "slider_e51uux3d": 11,
    "textarea_rc1v4r07": "11"
  }
  kfb.value.setData(obj)

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
