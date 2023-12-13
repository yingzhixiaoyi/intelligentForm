import { defineComponent, h, renderSlot, type PropType } from 'vue'
import { ElButton } from 'element-plus'
import { type NodeItem } from '@justin-intelligent-form/core/types/justin-intelligent-form'

// 二次封装组件
export default defineComponent({
  props: {
    record: {
      type: Object as PropType<NodeItem>,
      default: () => ({})
    }
  },
  setup (props, { emit, slots }) {
    return () => {
      const componentProps: Record<string, any> = {
        ...props.record?.componentProps
      }

      return h(ElButton, componentProps, {
        default: () =>
          renderSlot(slots, 'default', {}, () => [props.record?.label])
      })
    }
  }
})
