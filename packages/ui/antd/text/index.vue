<template>
  <h1 class="leading-8 mb-[24px]" v-if="props.record?.componentProps?.size==='h1'">{{ props.record?.label }}</h1>
  <h2 class="leading-8 mb-[24px]" v-else-if="props.record?.componentProps?.size==='h2'">{{ props.record?.label }}</h2>
  <h3 class="leading-8 mb-[24px]" v-else-if="props.record?.componentProps?.size==='h3'">{{ props.record?.label }}</h3>
  <h4 class="leading-8 mb-[24px]" v-else-if="props.record?.componentProps?.size==='h4'">{{ props.record?.label }}</h4>
  <h5 class="leading-8 mb-[24px]" v-else-if="props.record?.componentProps?.size==='h5'">{{ props.record?.label }}</h5>
  <h6 class="leading-8 mb-[24px]" v-else-if="props.record?.componentProps?.size==='h6'">{{ props.record?.label }}</h6>
  <h3 class="leading-8 mb-[24px]" v-else>{{ props.record?.label }}</h3>
</template>
<script setup lang="ts">

const props = defineProps({
  record: {
    type: Object ,
    default: () => ({})
  }
})
</script>
<style scoped lang="less">

</style>
