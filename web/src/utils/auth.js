import element from 'element-ui'
import Vue from 'vue'

function auth() {
  const email = this.$store.state.userInfo.email
  if(!email) {
    element.Message.warning("请登录")
    return 0
  }else
    return 1
}


Vue.prototype.$auth = auth