<template>
  <div>
    <EBuilder ref="kfb" :pageSchema="pageSchema" @ready="handleReady"/>
    <!--    <button @click="handleGetData">
          改变disabled状态
        </button>
        <button @click="setFormData">赋值</button>
        <button @click="clearValidate">清空校验</button>-->
  </div>
</template>

<script lang="ts" setup>
import {ref, onMounted} from 'vue'
import {EBuilder, PageManager, PageSchema} from '@justin-intelligent-form/core'
import {pluginManager} from "@justin-intelligent-form/utils";
import epicData3 from '../modules/epic-data3.json';

pluginManager.addPublicMethod({
  methodName: 'formSubmit',
  method: handleGetData
})
pluginManager.addPublicMethod({
  methodName: 'formClearValidate',
  method: formClearValidate
})
let pageSchema = ref<PageSchema>(epicData3)

const kfb = ref<any>(null)
let flag = true
function formClearValidate() {
  kfb.value.clearValidate()
}
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
