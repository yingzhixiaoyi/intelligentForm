<template>
  <div v-if="props.record.label==='单选框'">
    <Group v-model:value="props.record.componentProps.defaultValue"  v-bind="props.record?.componentProps">
      <Radio v-for="item in props.record.componentProps.options" :value="item.value" :key="item.value">
        {{ item.label }}
      </Radio>
    </Group>
  </div>
  <Group v-else  v-bind="props.record?.componentProps"></Group>
</template>
<script setup lang="ts">
import {PropType} from 'vue'
import type {NodeItem} from '@justin-intelligent-form/core/types/justin-intelligent-form'
import Radio from 'ant-design-vue/lib/radio'
import Group from 'ant-design-vue/lib/radio/Group'

const props = defineProps({
  record: {
    type: Object as PropType<NodeItem>,
    default: () => ({})
  }
})
</script>
<style scoped lang="less">

</style>