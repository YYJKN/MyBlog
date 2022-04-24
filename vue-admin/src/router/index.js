import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: {title: 'Dashboard', icon: 'dashboard'}
    }]
  },

  {
    path: '/user',
    component: Layout,
    name: 'user',
    meta: {title: '用户管理', icon: 'user'},
    redirect: '/user/index',
    alwaysShow: true,
    children: [{
      path: 'index',
      name: 'index',
      component: () => import('@/views/user/index'),
      meta: {title: "用户列表", icon: 'el-icon-s-order'}
    },
      {
        path: 'view',
        name: 'view',
        hidden: true,
        component: () => import('@/views/user/edit'),
        meta: {title: "查看用户", icon: 'el-icon-setting'}
      },
      {
        path: 'edit',
        name: 'edit',
        hidden: true,
        component: () => import('@/views/user/edit'),
        meta: {title: "用户编辑", icon: 'el-icon-setting'}
      }
    ]
  },
  {
    path: '/article',
    component: Layout,
    name:'article',
    meta: {title:'文章管理',icon:'el-icon-tickets'},
    redirect: '/article/index',
    alwaysShow: true,
    children: [{
      path:'index',
      name:'index',
      component: () => import('@/views/article/index'),
      meta: {title:'文章列表', icon:'el-icon-s-order'}
    },
      {
        path:'view',
        name:'view',
        hidden:true,
        component: () => import('@/views/article/index'),
        meta: {title:'文章编辑', icon:'el-icon-s-order'}
      }]
  },

  // 404 page must be placed at the end !!!
  {path: '*', redirect: '/404', hidden: true}
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({y: 0}),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
