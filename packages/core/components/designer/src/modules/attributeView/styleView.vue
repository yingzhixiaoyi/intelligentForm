<template>
  <aside class="epic-attribute-view" :key="checkedNode?.id">
    <div v-for="item in componentStyles" :key="item.field">
      <div v-show="isShow(item)" class="attr-item" :class="item.layout">
        <div class="attr-label" :title="item.label">
          {{ item.label }}
        </div>
        <div class="attr-input">
          <ENode
              :record="{ ...item, componentProps: { ...item.componentProps, ...(item.field === 'componentProps.defaultValue' ? checkedNode?.componentProps : {}), input: false, field: undefined, hidden: false }, show: true, noFormItem: true }"
              :model-value="getAttributeValue(item.field!, item.editData ?? checkedNode!)"
              @update:model-value="handleSetValue($event, item.field!, item, item.editData)"/>
        </div>
      </div>
    </div>
  </aside>
</template>
<script lang="ts" setup>
import ENode from '../../../../node/index'
import {Designer, NodeItem, PageSchema} from '../../../../../types/epic-designer'
import {revoke, getAttributeValue, setAttributeValue} from '@epic-designer/utils'

import {inject, computed, nextTick} from 'vue'

const designer = inject('designer') as Designer
const pageSchema = inject('pageSchema') as PageSchema

const componentStyles: NodeItem[] = [
  {
    label: '宽度',
    type: 'EInputSize',
    field: 'componentProps.style.width'
  },
  {
    label: '高度',
    type: 'EInputSize',
    field: 'componentProps.style.height'
  },
  {
    label: '内边距',
    type: 'EInputSize',
    field: 'componentProps.style.padding'
  },
  {
    label: '外边距',
    type: 'EInputSize',
    field: 'componentProps.style.margin'
  },
  {
    label: '背景色',
    type: 'color-picker',
    field: 'componentProps.style.backgroundColor',
    componentProps: {
      type: 'color',
      style: {}
    },
    onChange: (e) => {
      let data = colorRgb(e.value)
      setTimeout(() => {
        e.values.componentProps.style.backgroundColor = data;
      }, 0)
    },
  },
  {
    label: '字体颜色',
    type: 'color-picker',
    field: 'componentProps.style.color',
    componentProps: {
      type: 'color',
      style: {}
    },
    onChange: (e) => {
      let data = colorRgb(e.value)
      setTimeout(() => {
        e.values.componentProps.style.color = data;
      }, 0)
    },
  }
]

const checkedNode = computed(() => {
  return designer.state.checkedNode
})

function isShow(item: NodeItem) {
  // show属性为boolean类型则直接返回
  if (typeof item.show === 'boolean') {
    return item.show
  }
  return item.show?.({values: checkedNode.value!}) ?? true
}

function colorRgb(colorStr) {
  //十六进制颜色值的正则表达式
  var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
  var sColor = colorStr.toLowerCase();
  if (sColor && reg.test(sColor)) {
    if (sColor.length === 4) {
      var sColorNew = "#";
      for (var i = 1; i < 4; i += 1) {
        sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
      }
      sColor = sColorNew;
    }
    //处理六位的颜色值f
    let sColorChange:any = [];
    for (let i = 1; i < 7; i += 2) {
      sColorChange.push(parseInt("0x" + sColor.slice(i, i + 2)));
    }
    return "rgb(" + sColorChange.join(",") + ")";
  } else {
    return sColor;
  }
}

/**
 * 设置属性值
 */
function handleSetValue(value: any, field: string, item: NodeItem, editData = checkedNode.value) {
  if (typeof item.onChange === 'function') {
    item.onChange({value, values: editData!, componentStyles})
  }
  // 判断是否同步修改属性值
  if (item.changeSync) {
    setAttributeValue(value, field, editData!)
  } else {
    nextTick(() => {
      setAttributeValue(value, field, editData!)
    })
  }
  // 将修改过的组件属性推入撤销操作的栈中
  revoke.push(pageSchema.schemas, '编辑组件属性')
}

</script>
