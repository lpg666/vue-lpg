import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import NProgress from 'nprogress'
import '@/assets/css/widget/nprogress.scss'

NProgress.configure({ showSpinner: false })

Vue.use(VueRouter)

let router = new VueRouter({
  routes: routes,
  mode: 'history',
  scrollBehavior: (to, from, savedPosition) => {
    return savedPosition || { x: 0, y: 0 }
  }
})

router.beforeEach((to, from, next) => {
  // 开始进度条
  if (!window.isWeixin || from.path !== '/') {
    NProgress.start()
    NProgress.inc()
  }
  next()
})

router.afterEach(route => {
  // 全局获取页面title
  document.title = route.meta.title
  // 使加载的进度条完成
  setTimeout(() => {
    NProgress.done()
  }, 200)
})

export default router
