<template>
  <div class="h-full flex flex-col">
    <div class="pb-2">
      预设连接函数编辑
    </div>
    <div class="p-10">
      <hr>
      <p class="text-lg">使用组件时;methods存在 <span
          class="text-red">{{ pluginManager.publicMethods[($attrs['methodName'] as any)]['bindPublicMethod'] }}</span> 即可调用。
      </p>
      <p>import {pluginManager} from "@epic-designer/utils";</p>
      <p> pluginManager.addPublicMethod({</p>
      <p> methodName: '{{ pluginManager.publicMethods[($attrs['methodName'] as any)]['bindPublicMethod'] }}',</p>
      <p> method: {{ pluginManager.publicMethods[($attrs['methodName'] as any)]['bindPublicMethod'] }}</p>
      <p>})</p>

      <hr>
      <p>函数内容详情：</p>
      <p> {{ pluginManager.publicMethods[($attrs['methodName'] as any)]['methodName'] }}: {</p>
      <p> describe: {{ pluginManager.publicMethods[($attrs['methodName'] as any)]['describe'] }},</p>
      <p> methodName: '{{ pluginManager.publicMethods[($attrs['methodName'] as any)]['bindPublicMethod'] }}',</p>
      <p> method: () => {</p>
      <p> this.publicMethods.{{ pluginManager.publicMethods[($attrs['methodName'] as any)]['bindPublicMethod'] }}&&
        this.publicMethods.{{ pluginManager.publicMethods[($attrs['methodName'] as any)]['bindPublicMethod'] }}.method()</p>
      <p>},</p>
      <p>}</p>
    </div>
  </div>
</template>
<script lang="ts" setup>
import {pluginManager} from '@epic-designer/utils'
</script>
