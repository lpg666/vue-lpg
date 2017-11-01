// 有时候我们想把某个路由下的所有组件都打包在同个异步块 (chunk) 中。只需要使用命名 chunk，一个特殊的注释语法来提供 chunk name (需要 Webpack > 2.4)
// _import 业务页面
// _idemo 开发组件页面

const _import = file => () => import('@/views/' + file + '.vue')
const _idemo = file => () => import('@/components/' + file + '.vue')

export default [
  {
    path: '/',
    redirect: '/install/index'
  },
  {
    path: '/index',
    component: _import('common/index'),
    meta: {title: '首页'}
  },
  {
    path: '/install',
    component: _import('install/wrap'),
    meta: {title: '业务首页'},
    children: [
      {
        path: '/',
        redirect: '/install/index'
      },
      {
        path: 'index',
        component: _import('install/index'),
        meta: {title: '业务首页'}
      }
    ]
  },
  {
    path: '/demos',
    component: _import('install/wrap'),
    meta: {title: '组件页'},
    children: [
      {
        path: '/',
        redirect: '/demos/index'
      },
      {
        path: 'index',
        component: _idemo('button/demo'),
        meta: {title: 'button'}
      }
    ]
  }
]
