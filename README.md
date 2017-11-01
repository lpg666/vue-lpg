# lpg

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

# 通用构建

> 入口文件（mian.js）:
```bash
  1.导入包，库，组件，通用方法
  2.定义全局变量
  3.初始化时需执行的方法。例如：定位，获取渠道，加载微信SDK，启动控制台
```
> 路由配置（/router）：
``` bash
原来的 /router/index.js 用于配置导航守卫，页面加载进度条，页面统计
新建 /router/routes.js 用于路由命名，并import routes from './routes.js'
export default new Router({
     routes:routes,
     base:String,      // 基路径 
     scrollBehavior: (to, from, savedPosition) => {     //滚动行为
          return savedPosition || { x: 0, y: 0 }
     },
     linkActiveClass:String     //全局链接激活时样式
})
在 routes.js 定义方法用于路由懒加载的文件路径和类型区分
// _import 为业务页面
// _idemo  为开发组件页面
// views/ common通用块 & install业务块 & system系统块
// components/组件命名/demo(UI类) & index(组件)
const _import = file => () => import('@/views' + file + '.vue')
const _idemo = file => () => import('@/components' + file + '.vue')
```
> Vuex配置（/store）：
```
    ...
```
> 组件（/components ）：
``` bash
UI组件
import Button from './components/button'
Vue.component(Button.name, Button);
Button.name指向的是button.vue的name属性

全局方法类调用
import Loading from './components/loading'
Vue.prototype.$loading = Loading
调用方式：this.$loading.fanction()
```
> 全局js库（src/utils ）：
``` bash
1.可以把常用的操作封装一下。类似js=>jq
2.把正则校验等封装
3.把常用的格式转换封装
4.把常用缓存操作封装
....
``` 
> API（/api.js & index.js）：
```bash
1.全局配置请求库
配置在index.js 例如token的处理；全局返回码提示；跨域处理；设置不同环境接口域
2.把api的url按name:url的格式封装
export default (init, old) => {
    return {
        categoryList:     init('url'),
        getVerifyCode:    old('url'),
    }
}
调用方式:
import api from '@/api'
api.categoryList.get()
```
> 开发规范
```bash
/docs     设计稿，项目说明文档等
功能模块文件内写说明文档     README.md

```

