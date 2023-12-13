import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { pluginManager } from '@justin-intelligent-form/core'
//  使用Elemnt UI
// import 'element-plus/dist/index.css'
// import { setupElementPlus } from '@justin-intelligent-form/ui/elementPlus'
// setupElementPlus(pluginManager)

// 使用Antd UI v4版本
import './style/reset.css';
import { setupAntd } from '@justin-intelligent-form/ui/antd'
setupAntd(pluginManager)

// 使用Antd UI v3 版本
// import 'ant-design-vue/dist/antd.css'
// import { setupAntdV3 } from '@justin-intelligent-form/ui-antdv3'
// setupAntdV3(pluginManager)

// 使用NaiveUi UI
// import { setupNaiveUi } from '@justin-intelligent-form/ui/naiveUi'
// setupNaiveUi(pluginManager)


createApp(App).mount('#app')
