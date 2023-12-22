<template>
  <Suspense @resolve="handleReady">
    <template #default>
      <div class="epic-builder-main">
        <ENode v-for="(item, index) in pageSchemaReactive.schemas" :key="index" :record="item"/>
      </div>
    </template>
    <template #fallback>
      <div class="loading-box">
        <EAsyncLoader/>
      </div>
    </template>
  </Suspense>
</template>

<script lang="ts" setup>
import ENode from '../../node'
import {
  reactive,
  provide,
  ref,
  watch,
  useSlots,
  nextTick,
  getCurrentInstance,
  type ComponentInternalInstance
} from 'vue'
import {PageSchema, FormDataModel} from '../../../types/justin-intelligent-form'
import {loadAsyncComponent, deepCompareAndModify, deepClone, usePageManager} from '@justin-intelligent-form/utils'

const EAsyncLoader = loadAsyncComponent(() => import('../../asyncLoader/index.vue'))

const pageManager = usePageManager()
const emit = defineEmits<{
  ready: any
}>()
const slots = useSlots()
const forms = ref<any>({})
const ready = ref<boolean>(false)
const props = defineProps<{
  pageSchema: PageSchema
}>()

const pageSchemaReactive = reactive<PageSchema>({
  schemas: []
})

watch(() => props.pageSchema, e => {
  deepCompareAndModify(pageSchemaReactive, e)
}, {
  immediate: true,
  deep: true
})

watch(() => pageSchemaReactive.script, e => {
  if (e && e !== '') {
    pageManager.setMethods(e)
  }
}, {
  immediate: true
})

provide('slots', slots)
provide('pageManager', pageManager)
provide('forms', forms)
provide('pageSchema', pageSchemaReactive)

/**
 * 跳过验证直接获取表单数据
 * @param formName 表单name
 */
function getData(formName = 'default'): Promise<FormDataModel | boolean> {
  return new Promise(async (resolve, reject) => {

    // 判断表单是否已经初始化
    if (!ready.value) {
      // 监听表单初始化状态
      const unwatch = watch(ready, () => {
        // 注销监听
        unwatch()
        resolve(getData(formName))
      })
      return
    }

    const form = forms.value?.[formName]
    // 通过表单查询不到表单实例
    if (!form) {
      // console.error(`表单 [name=${formName}] 不存在`)
      reject(`表单 [name=${formName}] 不存在`)
      return false
    }

    const formData = deepClone(await form.getData())
    resolve(formData)
  })

}


function clearValidate(formName:string = 'default'): void {
  // 判断表单是否已经初始化
  if (!ready.value) {
    return
  }

  const form = forms.value?.[formName]
  // 通过表单查询不到表单实例
  if (!form) {
    console.error(`表单 [name=${formName}] 不存在`)
    return
  }
  form.clearValidate()
}

/**
 * 验证并获取数据
 * @param formName 表单name
 */
function validate(formName = 'default'): Promise<FormDataModel | boolean> {
  return new Promise(async (resolve, reject) => {
    // 判断表单是否已经初始化
    if (!ready.value) {
      // 监听表单初始化状态
      const unwatch = watch(ready, () => {
        // 注销监听
        unwatch()
        resolve(getData(formName))
      })
      return
    }

    const form = forms.value?.[formName]
    // 通过表单查询不到表单实例
    if (!form) {
      // console.error(`表单 [name=${formName}] 不存在`)
      reject(`表单 [name=${formName}] 不存在`)
      return false
    }
    await form.validate()
    const formData = await form.getData()
    resolve(formData)
  })

}
/**
 * 改变disabled状态
 *
 */
function changeDisabled(data:any, type:any) {
  if (Object.prototype.toString.call(data) === '[object Array]') {
    data.forEach(item => changeDisabled(item, type))
  } else if (Object.prototype.toString.call(data) === '[object Object]') {
    if (data['componentProps']&&data['canDisabled']) {
      data['componentProps']['disabled'] = type
    }
    if (data['children']) {
      changeDisabled(data['children'], type)
    }
    if (data['schemas']) {
      changeDisabled(data['schemas'], type)
    }
  }
}
/**
 * setFormData 方法
 *
 */
function setFormData(data:any, value:any) {
  if (Object.prototype.toString.call(data) === '[object Array]') {
    data.forEach(item => setFormData(item, value))
  } else if (Object.prototype.toString.call(data) === '[object Object]') {
    if (data['componentProps'] && data['componentProps']['disabled']) {
      console.log('disabled状态下不可编辑')
      return;
    }
    if (value.hasOwnProperty(data['id'])) {
      data['componentProps']['defaultValue'] = value[data['id']]
      return
    }
    if (data['children']) {
      setFormData(data['children'], value)
    }
    if (data['schemas']) {
      setFormData(data['schemas'], value)
    }
  }
}
/**
 * 设置表单数据
 * @param data
 */
function setData(data: FormDataModel, formName = 'default') {
  // 判断表单是否已经初始化
  if (!ready.value) {
    // 监听表单初始化状态
    const unwatch = watch(ready, () => {
      // 注销监听
      unwatch()
      setData(data, formName)

    })
    return
  }


  const form = forms.value?.[formName]
  // 通过表单查询不到表单实例
  if (!form) {
    console.error(`表单 [name=${formName}] 不存在`)
    return false
  }
  setFormData(pageSchemaReactive,data)
  form.setData(data)
}

const {proxy} = getCurrentInstance() as ComponentInternalInstance

/**
 * 组件（包含异步组件）加载完成后
 */
function handleReady() {
  // 等待DOM更新循环结束后
  nextTick(() => {
    ready.value = true

    emit('ready', pageManager)

    // 注入builder对象
    proxy && pageManager.addComponentInstance('builder', proxy)
  })
}

defineExpose({
  ready,
  getData,
  setData,
  validate,
  clearValidate,
  changeDisabled,
  setFormData,
  form:forms.value
})
</script>
