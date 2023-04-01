import { ComponentConfigModel } from '../../pluginManager'
export default {
  component: () => import("./src/KButton"),
  //component: ElButton,
  defaultSchema: {
    label: "按钮",
    type: "button",
    field: "input",
    icon: "icon-write",
    isInput: false,
  },
  config: {
    attribute: [
      {
        label: "标题",
        type: "input",
        field: "label",
      },
      {
        label: "类型",
        type: "select",
        componentProps: {
          placeholder: "请选择",
          clearable: true,
          options: [
            {
              label: "primary",
              value: "primary",
            },
            {
              label: "success",
              value: "success",
            },
            {
              label: "info",
              value: "info",
            },
            {
              label: "warning",
              value: "warning",
            },
            {
              label: "warning",
              value: "warning",
            },
          ],
        },
        field: "componentProps.type",
      },
      {
        label: "朴素按钮",
        type: "switch",
        field: "componentProps.plain",
      },
      {
        label: "圆角按钮",
        type: "switch",
        field: "componentProps.round",
      },
      {
        label: "圆形按钮",
        type: "switch",
        field: "componentProps.circle",
      },

      {
        label: "动作",
        type: "action",
        field: "componentProps.eventActions",
        componentProps: {
          eventActions: [
            {
              type: "onClick",
              actions: [],
            },
          ],
        },
      },
    ],
  },
} as ComponentConfigModel;