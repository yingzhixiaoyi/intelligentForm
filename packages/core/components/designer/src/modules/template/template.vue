<template>
  <div class="epic-outline">
    <Button v-for="(item,index) in modulesList" :key="index" class="block my-4 mx-auto" @click="setPageSchema(item)">
      {{ item['schemas'][0]['name'] }}
    </Button>
  </div>
</template>
<script lang="ts" setup>
import {inject, watch, ref} from 'vue'
import {PageSchema} from '../../../../../types/justin-intelligent-form'
import {pluginManager} from "@justin-intelligent-form/utils";
const Button = pluginManager.getComponent('button')
let modulesList = ref([])
watch(() => pluginManager.modulesList, (e) => {
  modulesList.value = e.value
}, {immediate: true, deep: true})
let pageSchema = inject('pageSchema') as any


function setPageSchema(item: PageSchema) {
  pageSchema.schemas = [{}]
  pageSchema.script = ''
  pageSchema.canvas = {}
  setTimeout(() => {
    pageSchema.schemas = item.schemas
    pageSchema.script = item.script
    item.canvas && (pageSchema.canvas = item.canvas)
  }, 0)
}


</script>
