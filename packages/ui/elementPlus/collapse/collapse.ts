import { defineComponent, h, renderSlot, type PropType } from 'vue'
import { ElCollapse } from 'element-plus'
import { type NodeItem } from '@justin-intelligent-form/core/types/justin-intelligent-form'
export default defineComponent({
  props: {
    record: {
      type: Object as PropType<NodeItem>,
      required: true,
      default: () => ({})
    }
  },
  setup (props, { attrs, slots }) {
    return () => {
      const record = {
        ...props.record,
        title: props.record?.label ?? ''
      } as any
      const children = record.children
      delete record.children

      return h(ElCollapse, record, {
        default: () => [
          renderSlot(slots, 'edit-node', {}, () =>
            children.map((record: any) =>
              renderSlot(slots, 'node', { record })
            )
          )
        ]
      })
    }
  }
})
