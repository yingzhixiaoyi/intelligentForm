<template>
  <h1 v-if="props.record?.componentProps?.size==='h1'">{{ props.record?.label }}</h1>
  <h2 v-else-if="props.record?.componentProps?.size==='h2'">{{ props.record?.label }}</h2>
  <h3 v-else-if="props.record?.componentProps?.size==='h3'">{{ props.record?.label }}</h3>
  <h4 v-else-if="props.record?.componentProps?.size==='h4'">{{ props.record?.label }}</h4>
  <h5 v-else-if="props.record?.componentProps?.size==='h5'">{{ props.record?.label }}</h5>
  <h6 v-else-if="props.record?.componentProps?.size==='h6'">{{ props.record?.label }}</h6>
  <h3 v-else>{{ props.record?.label }}</h3>
</template>
<script setup lang="ts">
import {PropType} from "vue/dist/vue";
import {NodeItem} from "@justin-intelligent-form/core";

const props = defineProps({
  record: {
    type: Object as PropType<NodeItem>,
    default: () => ({})
  }
})
</script>
<style scoped lang="less">

</style>