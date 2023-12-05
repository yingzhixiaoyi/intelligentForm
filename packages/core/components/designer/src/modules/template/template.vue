<template>
  <div class="epic-outline">
    <Button v-for="(item,index) in modulesList" :key="index" class="block my-4 mx-auto" @click="setPageSchema(item)">
      {{ item['schemas'][0]['label'] }}
    </Button>
  </div>
</template>
<script lang="ts" setup>
import {inject, watch, ref} from 'vue'
import {PageSchema} from '../../../../../types/epic-designer'
import {pluginManager} from "@epic-designer/utils";
const Button = pluginManager.getComponent('button')
let modulesList = ref([])
watch(() => pluginManager.modulesList, (e) => {
  modulesList.value = e.value
}, {immediate: true, deep: true})
let pageSchema = inject('pageSchema') as PageSchema


function setPageSchema(item: PageSchema) {
  pageSchema.schemas = item.schemas
  pageSchema.script = item.script
  item.canvas && (pageSchema.canvas = item.canvas)
}


</script>
