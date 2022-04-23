import router from './router'
import store from './store'
import { Message } from 'element-ui'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

NProgress.configure({ showSpinner: false })

router.beforeEach(async(to, from, next) => {
  // start progress bar
  NProgress.start()
  if(to.path !== '/login') {
    if(!store.getters.token) {
      Message.error('请登录')
      router.push('/login')
    }else {
      next()
    }
  }else {
    next()
  }
})

router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})
