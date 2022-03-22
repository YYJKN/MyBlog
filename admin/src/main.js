import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

import router from './router/index.js'
import {article,imgUpload} from './http'

Vue.prototype.$article = article;
Vue.prototype.$imgUpload = imgUpload



Vue.use(ElementUI);
Vue.use(mavonEditor);


Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
}).$mount('#app');
