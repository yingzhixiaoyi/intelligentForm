<template>
  <Group  v-bind="props.record?.componentProps" :style="`${props.record?.componentProps?.class}`"
         @change="getChange">
  </Group>
</template>
<script lang="ts" setup>
import {PropType} from 'vue'
import type {NodeItem} from '@justin-intelligent-form/core/types/justin-intelligent-form'
import Group from 'ant-design-vue/lib/checkbox/Group'

const props = defineProps({
  record: {
    type: Object as PropType<NodeItem>,
    default: () => ({})
  }
})
function getChange(e) {
    props.record.componentProps.defaultValue=e
}
</script>
