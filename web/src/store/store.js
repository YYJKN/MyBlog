import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    userInfo: {}
  },
  getters: {
    getUserInfo(state) {
      return state.userInfo
    }
  },
  mutations:{
    updateUserInfo(state,payload) {
      state.userInfo = payload
      localStorage.userInfo = JSON.stringify(payload)
    }
  }
})

export default store