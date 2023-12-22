<template>
    <Button v-bind="props.record?.componentProps" :style="`${props.record?.componentProps?.class}`" @click="replicationElement">
      <slot>{{ props.record?.content }}</slot>
    </Button>
</template>
<script lang="ts" setup>
import {inject, PropType} from 'vue'
import type {NodeItem} from '@justin-intelligent-form/core/types/justin-intelligent-form'
import Button from 'ant-design-vue/lib/button'
const props = defineProps({
  record: {
    type: Object as PropType<NodeItem>,
    default: () => ({})
  }
})
const pageSchema:any= inject('pageSchema')
let dataObj=JSON.parse(JSON.stringify(pageSchema))

function getId(arr,record) {
  return arr.findLastIndex(item=>item['id']===record['id'])
}
function getItemAddIndex(data,record) {
  if(data['children']){
    let findIndex=getId(data['children'],record)
    if(findIndex>0){
      let itemData=JSON.parse(JSON.stringify(data['children'][findIndex-1]))
      itemData['sort']=itemData['sort']?itemData['sort']:0
      if(itemData['sort']){
        itemData['field']=itemData['field'].slice(0,itemData['field'].length-1)
        itemData['id']=itemData['id'].slice(0,itemData['id'].length-1)
      }
      itemData['sort']++
      itemData['field']=itemData['field']+itemData['sort']
      itemData['id']=itemData['id']+itemData['sort']
      data['children'].splice(findIndex,0,itemData)
    }else{
      data['children'].forEach(item=>getItemAddIndex(item,record))
    }
  }
  if(data['schemas']){
    data['schemas'].forEach(item=>getItemAddIndex(item,record))
  }
}
function replicationElement() {

  pageSchema.schemas=[]
  setTimeout(()=>{
    getItemAddIndex(dataObj,props.record)
    for(let key in dataObj){
      pageSchema[key]=dataObj[key]
    }
  },100)

}

</script>
