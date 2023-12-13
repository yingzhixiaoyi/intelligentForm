import { type ComponentConfigModel } from '@justin-intelligent-form/utils'
export default {
  component: () => import('./uploadFile'),
  defaultSchema: {
    label: '上传文件',
    type: 'upload-file',
    icon: 'epic-icon-upload',
    field: 'uploadFile',
    input: true,
    componentProps: {
      action: 'https://mock.presstime.cn/mock/6562298755736ae9dfa4646a/epic/upload'
    }
  },
  config: {
    attribute: [
      {
        label: '字段名',
        type: 'input',
        field: 'field'
      },
      {
        label: '文字',
        type: 'input',
        field: 'label'
      },
      {
        label: '请求地址',
        type: 'input',
        field: 'componentProps.action'
      },
      {
        label: '上传文件字段',
        type: 'input',
        field: 'componentProps.name',
        componentProps: {
          placeholder: '请输入'
        }
      },
      {
        label: '允许上传最大数量',
        type: 'number',
        field: 'componentProps.max',
        componentProps: {
          min:0,
          placeholder: '请输入'
        }
      },
      {
        label: '展示文件列表',
        type: 'switch',
        field: 'componentProps.showFileList'
      },
      {
        label: '多选',
        type: 'switch',
        field: 'componentProps.multiple'
      },
      {
        label: '禁用',
        type: 'switch',
        field: 'componentProps.disabled'
      },
      {
        label: '隐藏',
        type: 'switch',
        field: 'componentProps.hidden'
      },
      {
        label: '表单校验',
        type: 'ERuleEditor',
        layout: 'vertical',
        field: 'rules',
        describe: '校验规则需要配合表单使用'
      }
    ]
  },
  bindModel: 'modelValue'
} as ComponentConfigModel
