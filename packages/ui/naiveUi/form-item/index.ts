import { type ComponentConfigModel } from '@justin-intelligent-form/utils'

export default {
  component: () => import('./formItem.vue'),
  defaultSchema: {
    label: '表单项',
    type: 'form-item',
    icon: 'epic-icon-qiapian'
  },
  config: {}
} as ComponentConfigModel
