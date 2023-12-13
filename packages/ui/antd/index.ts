// 注册ant-design-vue ui
import {type PluginManager} from "@justin-intelligent-form/utils";
import Input from "./input";
import Textarea from "./textarea";
import InputNumber from "./input-number";
import InputPassword from "./input-password";
import Radio from "./radio";
import Checkbox from "./checkbox";
import Select from "./select";
import Slider from "./slider";
import TimePicker from "./time-picker";
import DatePicker from "./date-picker";
import Cascader from "./cascader";
import Switch from "./switch";
import UploadImage from "./upload-image";
import UploadFile from "./upload-file";
import Card from "./card";
import Row from "./row";
import Col from "./col";
import Form from "./form";
import FormItem from "./form-item";
import Button from "./button";
import Modal from "./modal";
import colorPicker from "./color-picker";
import text from "./text";

export function setupAntd(pluginManager: PluginManager): void {
    // 异步加载组件
    pluginManager.component(
        "Collapse",
        async () => await import("ant-design-vue/lib/collapse")
    );
    pluginManager.component(
        "CollapseItem",
        async () => await import("ant-design-vue/lib/collapse/CollapsePanel")
    );
    pluginManager.component(
        "Tabs",
        async () => await import("ant-design-vue/lib/tabs")
    );
    pluginManager.component(
        "TabPane",
        async () => (await import("ant-design-vue/lib/tabs")).TabPane
    );

    const componentArray = [
        Form,
        FormItem,
        Input,
        Textarea,
        InputNumber,
        InputPassword,
        Radio,
        Checkbox,
        Select,
        Slider,
        TimePicker,
        DatePicker,
        Cascader,
        Switch,
        UploadImage,
        UploadFile,
        Card,
        Row,
        Col,
        Button,
        Modal,
        colorPicker,
        text
    ];

    componentArray.forEach((item) => {
        pluginManager.registerComponent(item);
    });

    // 设置分组显示
    pluginManager.setSchemaGroup([
        {
            title: "表单",
            list: [
                "form",
                "input",
                "textarea",
                "number",
                "password",
                "select",
                "cascader",
                "checkbox",
                "radio",
                "date",
                "time",
                "slider",
                "switch",
                "color-picker",
                "upload-file",
                "upload-image",
                "button",
                "text"
            ],
        },
        {
            title: "布局",
            list: ["card", "row"],
        },
    ]);
}
