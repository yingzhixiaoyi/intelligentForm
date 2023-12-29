<template>
  <Input  v-bind="props.record?.componentProps" :style="`${props.record?.componentProps?.class}`"
          @input="getChange">
  </Input>
</template>
<script lang="ts" setup>
import {PropType} from 'vue'
import type {NodeItem} from '@justin-intelligent-form/core/types/justin-intelligent-form'
import Input from 'ant-design-vue/lib/input'

const props = defineProps({
  record: {
    type: Object as PropType<NodeItem>,
    default: () => ({})
  }
})
function getChange(e) {
  props.record.componentProps.defaultValue=e.target._value
}
</script>
