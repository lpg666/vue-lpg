import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import './utils/rem'
import './utils/client'
import './assets/css/index.scss'

import VueLazyload from 'vue-lazyload'
//
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: require('./assets/img/logo-context.png'),
  loading: require('./assets/img/logo-context.png'),
  attempt: 2
})
//

// 移动端点击事件优化
const FastClick = require('fastclick')
FastClick.attach(document.body)

// 阻止 vue 在启动时生成生产提示
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

// 加载微信sdk
if (process.env.NODE_ENV !== 'development') {
  let weixinScript = document.createElement('script')
  let nowcript = document.getElementsByTagName('script')[0]
  weixinScript.src = '//res.wx.qq.com/open/js/jweixin-1.2.0.js'
  nowcript.parentNode.insertBefore(weixinScript, nowcript)
}
// 启动一个用于移动端的控制台
if (process.env.NODE_ENV !== 'production' && (window.isAndroid || window.isIos)) {
  require.ensure([], () => {
    const Vconsole = require('vconsole')
    new Vconsole()
  })
}
