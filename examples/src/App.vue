<template>
  <div class="demo-content">
    <Designer v-if="showDesigner"/>
    <Builder v-else/>
    <div class="fixed top-2 left-1/2  -translate-x-1/2 grid grid-cols-2 w-1/2 mx-auto place-items-center">
      <span class="cursor-pointer px-5 py-2 bg-gray-400 rounded" :class="{'bg-green-2 text-blue-500':showDesigner}" @click="showDesigner=!showDesigner">编辑器</span>
      <span class="cursor-pointer px-5 py-2 bg-gray-400 rounded" :class="{'bg-green-2 text-blue-500':!showDesigner}"  @click="showDesigner=!showDesigner">渲染器</span>
    </div>
  </div>
</template>
<script lang="ts" setup>
import {ref} from 'vue'
import Designer from './views/designer/index.vue'
import Builder from './views/builder/index.vue'
const showDesigner=ref(true)
</script>
<style lang="less" scoped>
.demo-content {
  height: 100vh;
}
</style>
