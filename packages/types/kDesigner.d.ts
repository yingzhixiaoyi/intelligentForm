export interface NodeItem {
    label?: string;
    field?: string;
    slotName?: string;
    type: string;
    componentProps?: any;
    id?: string;
    rules?: any;
    labelCol?: any;
    wrapperCol?: any;
    children?: NodeItem[];
    [propName: string]: any;
}

export interface FormConfig {
    layout?: string;
    labelWidth?: string;
    labelLayout: any;
    labelCol: any;
    wrapperCol: any;
    hideRequiredMark?: boolean;
    customStyle?: string;
}

export interface FormSchema {
    nodes: NodeItem[]
    config: FormConfig
}

export interface FormDataModel {
    [field: string]: any
}

export interface SchemaGroupItem {
    title: string,
    list: string[]
}

export interface SchemaNodeGroupItem {
    title: string,
    list: NodeItem[]
}