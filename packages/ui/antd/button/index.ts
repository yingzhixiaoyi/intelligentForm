import {type ComponentConfigModel} from '@justin-intelligent-form/utils'

export default {
    component: () => import('./button.vue'),
    defaultSchema: {
        label: '按钮',
        content: '按钮',
        type: 'button',
        field: 'input',
        icon: 'epic-icon-button-remove',
        input: true,
        canDisabled: true,
        componentProps: {}
    },
    config: {
        attribute: [
            {
                label: '标题',
                type: 'input',
                field: 'label'
            },
            {
                label: '内容',
                type: 'input',
                field: 'content'
            },
            {
                label: '类型',
                type: 'select',
                componentProps: {
                    placeholder: '请选择',
                    clearable: true,
                    options: [
                        {
                            label: 'primary',
                            value: 'primary'
                        },
                        {
                            label: 'ghost',
                            value: 'ghost'
                        },
                        {
                            label: 'dashed',
                            value: 'dashed'
                        },
                        {
                            label: 'link',
                            value: 'link'
                        },
                        {
                            label: 'text',
                            value: 'text'
                        },
                        {
                            label: 'default',
                            value: 'default'
                        }
                    ]
                },
                field: 'componentProps.type'
            },
            {
                label: "对齐方式",
                type: "select",
                componentProps: {
                    placeholder: "请选择",
                    allowClear: !0,
                    options: [
                        {
                            label: "左对齐",
                            value: ""
                        },
                        {
                            label: "居中对齐",
                            value: "display:block;margin-left:auto;margin-right:auto"
                        },
                        {
                            label: "右对齐",
                            value: "display:block;margin-left:auto"
                        },

                    ]
                },
                field: "componentProps.class"
            },
            {
                label: '链接',
                type: 'input',
                field: 'componentProps.href',
                componentProps: {
                    allowClear: true,
                    placeholder: '请输入'
                }
            },
            {
                label: '链接打开方式',
                type: 'select',
                field: 'componentProps.target',
                show: ({values}) => values.componentProps.href,
                componentProps: {
                    placeholder: '请选择',
                    clearable: true,
                    options: [
                        {
                            label: 'blank',
                            value: '_blank'
                        },
                        {
                            label: 'parent',
                            value: '_parent'
                        },
                        {
                            label: 'self',
                            value: '_self'
                        },
                        {
                            label: 'top',
                            value: '_top'
                        },
                    ]
                }
            },
            {
                label: '尺寸',
                type: 'select',
                componentProps: {
                    placeholder: "请选择",
                    allowClear: true,
                    options: [
                        {
                            label: 'default',
                            value: 'default'
                        },
                        {
                            label: 'small',
                            value: 'small'
                        },
                        {
                            label: 'large',
                            value: 'large'
                        }
                    ]
                },
                field: 'componentProps.size'
            },
            {
                label: '形状',
                type: 'select',
                componentProps: {
                    placeholder: '请选择',
                    clearable: true,
                    options: [
                        {
                            label: 'default',
                            value: 'default'
                        },
                        {
                            label: 'circle',
                            value: 'circle'
                        },
                        {
                            label: 'round',
                            value: 'round'
                        }
                    ]
                },
                field: 'componentProps.shape'
            },
            {
                label: '危险按钮',
                type: 'switch',
                field: 'componentProps.danger'
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
        ],
        event: [
            {
                type: "click",
                describe: "点击按钮时",
            },
            {
                type: "dblclick",
                describe: "双击按钮时",
            }
        ]
    }
} as ComponentConfigModel
