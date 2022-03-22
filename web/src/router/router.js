import Vue from 'vue'
import VueRouter from "vue-router";

import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'

Nprogress.configure({
  easing: 'ease',  // 动画方式    
  speed: 5000,  // 递增进度条的速度    
  showSpinner: false, // 是否显示加载ico    
  trickleSpeed: 200, // 自动递增间隔    
  minimum: 0.3 // 初始化时的最小百分比
})


Vue.use(VueRouter)

const Home = require('@/views/home/Home').default
const Jishu = require('@/views/jishu/Jishu').default
const Detail = require('@/views/detail/Detail').default
const Life = require('@/views/life/Life').default
const About = require('@/views/about/About').default
const Bbs = require('@/views/bbs/Bbs').default
const Search = require('@/views/search/Search').default

const Register  = require('@/components/common/Register').default
const Login  = require('@/components/common/Login').default

const routes = [
  { path: '/', redirect: '/index' },
  { path: '/index', component: Home },
  { path: '/jishu', component: Jishu },
  { path: '/life', component: Life },
  { path: '/about', component: About },
  { path: '/bbs', component: Bbs },
  { path: '/detail', component: Detail },
  {path:'/register', component: Register},
  {path:'/login', component: Login},
  {path:'/search',name:'search',component:Search}
]

const router = new VueRouter({
  routes,
  mode: 'history',
})

router.beforeEach((to, from, next) => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  // 兼容IE
  window.scrollTo(0, 0);
  // Nprogress.start()
  next()
})

router.afterEach((to,from) => {
  // Nprogress.done()
})
export default router