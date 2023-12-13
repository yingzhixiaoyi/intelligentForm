import { type ComponentConfigModel } from "@justin-intelligent-form/utils";
export default {
  // component: () => import("ant-design-vue/lib/switch"),
  component: () => import("./index.vue"),
  defaultSchema: {
    label: "开关",
    type: "switch",
    icon: "epic-icon-kaiguan3",
    field: "switch",
    input: true,
    componentProps: {
      defaultValue:false
    },
  },
  config: {
    attribute: [
      {
        label: "字段名",
        type: "input",
        field: "field",
      },
      {
        label: "文字",
        type: "input",
        field: "label",
      },
      {
        label: "默认值",
        type: "switch",
        field: "componentProps.defaultValue",
      },
      {
        label: "选中时内容",
        type: "input",
        field: "componentProps.checkedChildren",
        componentProps: {
          placeholder: "请输入",
        },
      },
      {
        label: "非选中时内容",
        type: "input",
        field: "componentProps.unCheckedChildren",
        componentProps: {
          placeholder: "请输入",
        },
      },
      {
        label: "尺寸",
        type: "select",
        componentProps: {
          placeholder: "请选择",
          allowClear: true,
          options: [
            {
              label: "default",
              value: "default",
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
        label: "禁用",
        type: "switch",
        field: "componentProps.disabled",
      },
      {
        label: "隐藏",
        type: "switch",
        field: "componentProps.hidden",
      },
      {
        label: "表单校验",
        type: "ERuleEditor",
        layout: "vertical",
        field: "rules",
        describe: "校验规则需要配合表单使用",
      },
    ],
    event: [
      {
        type: "change",
        describe: "值变化时",
      },
    ],
  },
  bindModel: "checked",
} as ComponentConfigModel;
