import { type ComponentConfigModel } from '@justin-intelligent-form/utils'
export default {
  component: () => import('ant-design-vue/lib/input'),
  defaultSchema: {
    label: '颜色选择器',
    type: 'color-picker',
    field: 'color-picker',
    icon: 'epic-icon-yanse',
    input: true,
    canDisabled:true,
    componentProps: {
      type: 'color',
      style: {
        width: '80px'
      }
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
        label: '标题',
        type: 'input',
        field: 'label'
      },
      {
        label: '默认值',
        type: 'input',
        field: 'componentProps.defaultValue'
      },
      {
        label: "尺寸",
        type: "select",
        componentProps: {
          placeholder: "请选择",
          allowClear: true,
          options: [
            {
              label: "large",
              value: "large",
            },
            {
              label: "middle",
              value: "middle",
            },
            {
              label: "small",
              value: "small",
            },
          ],
        },
        field: "componentProps.size",
      },
      {
        label: '可清空',
        type: 'switch',
        field: 'componentProps.allowClear'
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
    ],
    event: [
      {
        type: 'change',
        describe: '值变化时'
      }
    ],
    action: []
  },
  bindModel: 'value'
} as ComponentConfigModel
