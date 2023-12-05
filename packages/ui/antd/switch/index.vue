

<template>
  <div v-if="props.record.label==='开关'">
    <Switch  v-bind="props.record?.componentProps" v-model:checked="props.record.componentProps.defaultValue">
    </Switch>
  </div>
  <Switch v-else v-bind="props.record?.componentProps" >
    <slot>{{ props.record }}</slot>
  </Switch>
</template>
<script setup lang="ts">
import { PropType } from 'vue'
import type { NodeItem } from '@epic-designer/core/types/epic-designer'
import Switch from 'ant-design-vue/lib/switch'
const props = defineProps({
  record: {
    type: Object as PropType<NodeItem>,
    default: () => ({})
  }
})
</script>
<style scoped lang="less">

</style>