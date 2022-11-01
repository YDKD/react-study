import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter } from 'react-router-dom'

// import App from './03_小案例/App'
// import App from './04_回顾测试/App'
// import App from './05_生命周期/App'
// import App from './06_父子传值-回调函数/App'
// import App from './07_插槽-children/App'
// import App from './08_插槽-props/App'
// import App from './09_组件通信-context/App'
// import App from './10_setState的三种写法/App'
// import App from './11_获取setState更新后的值/App'
// import App from './12_pureComponent/App'
// import App from './13_数据的不可变性/App'
// import App from './14_ref获取DOM/App'
// import App from './15_ref获取类组件和函数组件/App'
// import App from './16_编写受控表单组件/App'
// import App from './17_高阶组件/App'
// import App from './18_动画过度/App'
// import App from './19_css_module/App'
// import App from './20_css_in_js/App'
// import App from './21_classnames/App'
// import App from './22_redux/App'
// import App from './23_redux应用/App'
// import App from './24_redux-tool-kit/App'
// import App from './25_手写connect/App'
// import App from './26_实现中间件/App'
// import App from './27_router/App'
import App from './28_hooks/08_自定义hooks/App'

import './index.css'

// import './03_小案例/style.css'

// import './04_回顾测试/style/index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  // </React.StrictMode>
)
