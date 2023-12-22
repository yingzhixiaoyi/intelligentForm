<template>
    <Button v-bind="props.record?.componentProps"  :style="`${props.record?.componentProps?.class}`">
      <slot>{{ props.record?.content }}</slot>
    </Button>
</template>
<script lang="ts" setup>
import {PropType} from 'vue'
import type {NodeItem} from '@justin-intelligent-form/core/types/justin-intelligent-form'
import Button from 'ant-design-vue/lib/button'
const props = defineProps({
  record: {
    type: Object as PropType<NodeItem>,
    default: () => ({})
  }
})
</script>
