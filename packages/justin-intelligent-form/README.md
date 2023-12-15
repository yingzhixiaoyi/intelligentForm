

<h3 align="center" style="background-image:-webkit-linear-gradient(left,#44c0fa,#c26cf6);-webkit-background-clip:text;-webkit-text-fill-color:transparent;">justin-intelligent-form
</h3>


<h4 align="center">一个开箱即用的拖拽式的可视化低代码设计器</h4>

<p align="center">
  <a href="https://github.com/vuejs/core">
    <img src="https://img.shields.io/badge/vue-3.3.4-brightgreen.svg" alt="vue">
  </a>
  <a href="https://github.com/microsoft/TypeScript">
    <img src="https://img.shields.io/badge/typescript-5.1.6-blue" alt="ant-design-vue">
  </a>
  <a href="#">
    <img src="https://img.shields.io/github/license/mashape/apistatus.svg" alt="license">
  </a>
</p>


📦github仓库：[https://github.com/yingzhixiaoyi/intelligentForm](https://github.com/yingzhixiaoyi/intelligentForm)


<iframe src="https://gitee.com/yingzhixiaoyi/mdnice/raw/master/202312150913.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>



<!-- mp4格式 -->
<video id="video" width="500" height="250" controls="controls" autoplay>
      <source id="mp4" src="https://gitee.com/yingzhixiaoyi/mdnice/raw/master/202312150913.mp4" type="video/mp4">
</videos>



## 简介

`智能表单设计器`，是一个功能强大、开箱即用的拖拽式低代码设计器。它基于 Vue3 开发，兼容多套 UI 组件库，除了基础的页面设计功能，EDesigner 还提供了强大的扩展功能，可以让开发者根据自己的需求自由扩展和定制组件。此外，EpicDesigner使用 JSON 配置来生成页面，可帮助开发者快速生成页面，提高开发效率。它提供了两个重要组件：`e-designer` 设计器和 `e-builder` 生成器。


## 最新版本

[![](https://img.shields.io/npm/v/justin-intelligent-form.svg?style=flat-square)](https://www.npmjs.com/package/justin-intelligent-form)

[查看更新日志](./docs/updateLog.md)

#### 功能

- [x] 拖拽设计
- [x] 自定义 actionBar
- [x] 布局组件扩展
- [x] 自定义组件扩展
- [x] 事件扩展
- [x] 组件懒加载
- [x] 完善布局
- [x] 组件属性自定义
- [x] 支持不同 UI
- [x] 插件扩展
- [x] 模板扩展



## 核心组件介绍

#### e-designer 设计器

`e-designer` 是一个可视化设计器组件，用户可以通过拖拽组件的方式快速生成 JSON 配置。它提供了丰富的组件库和配置项，用户可以根据需要选择合适的组件并配置相应的属性、事件和动作。设计器还提供了实时预览功能，用户可以随时查看所设计页面的效果。最终，用户可以将 JSON 配置导出，用于页面的生成和修改。

#### e-builder 生成器

`e-builder` 是一个页面构建组件，它可以将设计器生成的 JSON 配置构建成页面，完成组件的渲染、事件绑定和数据回显等操作。

## 安装 justin-intelligent-form

```bash
npm i justin-intelligent-form
```

justin-intelligent-form 目标是支持多 UI 兼容,目前支持以下 UI

- element-plus
- ant-design-vue
- naive-ui

## 选择 UI 组件库

- ### 选择 element-plus

```bash
npm i element-plus
```

main.ts 或者 main.js 引入注册组件

```javascript
// 引入Element plus样式
import "element-plus/dist/index.css";
// 引入k-designer样式
import "justin-intelligent-form/dist/style.css";
import { pluginManager, setupElementPlus } from "justin-intelligent-form";
// 注册Element UI
setupElementPlus(pluginManager);
```

- ### 选择 ant-design-vue 

```bash
npm i ant-design-vue
```

main.ts 或者 main.js 引入注册组件

```javascript
// 引入k-designer样式
import "justin-intelligent-form/dist/style.css";
// 引入antd UI 重置样式
import "ant-design-vue/dist/reset.css";
import { pluginManager, setupAntd } from "justin-intelligent-form";
// 使用Antd UI
setupAntd(pluginManager);
```
- #### 注：ant-design-vue v3.x版本需要改成下面方式
```javascript
// 引入antd UI样式
import "ant-design-vue/dist/antd.css";
// 引入k-designer样式
import "justin-intelligent-form/dist/style.css";
import { pluginManager, setupAntdV3 } from "justin-intelligent-form";
// 使用Antd UI
setupAntdV3(pluginManager);
```


- ### 选择 naive-ui


main.ts 或者 main.js 引入注册组件

```javascript
// 引入k-designer样式
import "justin-intelligent-form/dist/style.css";
import { pluginManager, setupNaiveUi } from "justin-intelligent-form";
// 注册Naive Ui
setupNaiveUi(pluginManager);
```

## EDesigner(设计器) 基础用法

```vue
<template>
  <div class="h-full">
    <EDesigner />
  </div>
</template>
<script setup lang="ts">
import { EDesigner } from "justin-intelligent-form";
</script>
<style>
.h-full {
  height: 100vh;
}
</style>
```
## EBuilder(生成器) 基础用法

```vue
<template>
  <div>
    <EBuilder :pageSchema="pageSchema" />
  </div>
</template>
<script setup>
import { EBuilder } from "justin-intelligent-form";

const pageSchema = {
  schemas: [
    {
      type: "page",
      id: "root",
      children: [
        {
          label: "输入框",
          type: "input",
          field: "input",
          icon: "epic-icon-write",
          input: true,
          componentProps: {
            defaultValue: "",
            placeholder: "请输入",
            size: "default",
            type: "text",
          },
          id: "gbm1xhrrj5s00",
        },
      ],
      componentProps: {
        style: {
          padding: "16px",
        },
      },
    },
  ],
};
</script>
```

#### EDesigner(设计器) 调用外部方法

```vue
<template>
	<EBuilder  ref="DesignRenderDom"  :pageSchema="pageSchema" />  
</template>

<script lang="ts" setup>
	import { EBuilder, pluginManager } from 'justin-intelligent-form';
	
	const DesignRenderDom = ref();
	
	pluginManager.addPublicMethod({
    methodName: 'formClearValidate',
    method: () => DesignRenderDom.value.clearValidate(),
  });
</script>
```

#### EDesigner(设计器) 模板操作方法

```ts
    /**
     * 添加模板方法
     *
     */
    addModulesMethod(data: PageSchema): void;
    /**
     * 添加模板方法
     *
     */
    setModulesMethod(data: any): void;
    /**
     * 清空模板方法
     *
     */
    resetModulesMethod(data: PageSchema): void;
```

