import { defineComponent, h, renderSlot, type PropType } from "vue";
import { type NodeItem } from "@justin-intelligent-form/core/types/justin-intelligent-form";
import Modal from "ant-design-vue/lib/modal";
import Button from "ant-design-vue/lib/button";
import Space from "ant-design-vue/lib/space";
const dialogStyle = {
  position: "absolute",
  right: "150px",
  left: "150px",
  minWidth: "700px",
  width: "auto",
  top: "56px",
  bottom: "30px",
  minHeight: "500px",
};

const bodyStyle = {
  height: "calc(100vh - 108px)",
  padding: 0,
};

export default defineComponent({
  props: {
    record: {
      type: Object as PropType<NodeItem>,
      default: () => ({}),
    },
  },
  emits: ["ok", "close", "update:modelValue"],

  setup(props, { attrs, slots, emit }) {
    return () => {
      const record = {
        ...props.record,
        ...attrs,
        title: props.record?.label ?? "",
        wrapClassName: "epic-modal-ant",
        visible: attrs.modelValue,
        "onUpdate:visible": handleClose,
        style: "top:20px",
        bodyStyle,
        dialogStyle,
        footer: null,
      } as Record<string, any>;
      const children = record.children ?? [];
      delete record.children;

      let vNodeClildren: any = null;
      if (children.length) {
        vNodeClildren = () =>
          children.map((node: NodeItem) =>
            renderSlot(slots, "node", { record: node })
          );
      } else {
        vNodeClildren = () => [renderSlot(slots, "default")];
      }

      function handleOk() {
        emit("ok");
      }

      function handleClose() {
        emit("update:modelValue", false);
        emit("close");
      }

      return h(Modal, record, {
        default: () => [
          h(
            "div",
            { class: "epic-modal-main" },
            renderSlot(slots, "edit-node", {}, vNodeClildren)
          ),
          h(
            "div",
            { class: "epic-modal-footer" },
            h(
              Space,
              { align: "end" },
              {
                default: () => [
                  h(
                    Button,
                    { onClick: handleClose },
                    {
                      default: () => "关闭",
                    }
                  ),
                  h(
                    Button,
                    { type: "primary", onClick: handleOk },
                    {
                      default: () => record.okText ?? "确定",
                    }
                  ),
                ],
              }
            )
          ),
        ],
      });
    };
  },
});
