import {defineComponent, h, watch} from 'vue'
import datePicker from 'ant-design-vue/lib/date-picker'

// 二次封装组件
export default defineComponent({
    emits: ['update:value'],
    setup(_, {emit, attrs}) {
        watch(
            () => attrs.type,
            () => {
                handleUpdate()
            }
        )

        function handleUpdate(e = null): void {
            emit('update:value', e)
        }

        return () => {
            let cmp: any = datePicker
            const type = attrs.type


            const props: Record<string, any> = {
                ...attrs,
                'onUpdate:value': handleUpdate,
                disabledDate
            }

            function disabledDate(current) {
                let start = false, end = false;
                if (props.record.componentProps.disableBeFor) {
                    start = +new Date(current) < +new Date(+new Date() - (+props.record.componentProps.disableBeFor) * 1000 * 60 * 60 * 24)
                }
                if (props.record.componentProps.disableAfter) {
                    end = +new Date(current) > +new Date(+new Date() + (+props.record.componentProps.disableAfter) * 1000 * 60 * 60 * 24)
                }
                return start || end
            }

            // 判断显示类型，渲染相应组件
            if (type === 'daterange') {
                // 默认值与组件类型不匹配时需清空默认值
                if (typeof props.value !== 'object' && props.value !== null) {
                    props.value = null
                }
                cmp = datePicker.RangePicker
            } else if (type === 'month') {
                // 默认值与组件类型不匹配时需清空默认值
                if (typeof props.value === 'object') props.value = null
                cmp = datePicker.MonthPicker
            } else {
                // 默认值与组件类型不匹配时需清空默认值
                if (typeof props.value === 'object') props.value = null
            }
            return [h(cmp, props)]
        }
    }
})
