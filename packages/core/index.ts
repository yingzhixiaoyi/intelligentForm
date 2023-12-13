import 'virtual:uno.css'
import EBuilder from './components/builder/'
import EDesigner from './components/designer/'
import ENode from './components/node/'
import { pluginManager, type PluginManager, type PageManager, usePageManager } from '@justin-intelligent-form/utils'
import { setupComponent } from './extensions'
import './index.less'
export type * from './types/justin-intelligent-form.d'
// 初始化设计器
setupComponent(pluginManager)


// const components = [EBuilder, EDesigner]

// 注册全局组件
// const EDesignr = {
//   install (app: App) {
//     components.forEach((comp) => {
//       app.component(comp.__name ?? '', comp)
//     })
//   },
//   pluginManager,
//   usePageManager
// }

export {
  EBuilder,
  EDesigner,
  ENode,
  pluginManager,
  usePageManager,
  type PluginManager,
  type PageManager
}
// export default EDesignr
