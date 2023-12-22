<template>
  <h1 class="leading-8" v-if="props.record?.componentProps?.size==='h1'">{{ props.record?.content }}</h1>
  <h2 class="leading-8" v-else-if="props.record?.componentProps?.size==='h2'">{{ props.record?.content }}</h2>
  <h3 class="leading-8" v-else-if="props.record?.componentProps?.size==='h3'">{{ props.record?.content }}</h3>
  <h4 class="leading-8" v-else-if="props.record?.componentProps?.size==='h4'">{{ props.record?.content }}</h4>
  <h5 class="leading-8" v-else-if="props.record?.componentProps?.size==='h5'">{{ props.record?.content }}</h5>
  <h6 class="leading-8" v-else-if="props.record?.componentProps?.size==='h6'">{{ props.record?.content }}</h6>
  <h3 class="leading-8" v-else>{{ props.record?.content }}</h3>
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
