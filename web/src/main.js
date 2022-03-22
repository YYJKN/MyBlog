// 引入第三方的插件
import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import router from "./router/router";
import store from './store/store'
import {article,user,comment,img} from './newWork/http'
import './utils/marked'
import './utils/auth'

Vue.prototype.$article = article
Vue.prototype.$user = user
Vue.prototype.$comment = comment
Vue.prototype.$img = img
Vue.prototype.$bus = new Vue()

Vue.prototype.$baseURL = process.env.VUE_APP_BASEURL

Vue.use(ElementUI);

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
