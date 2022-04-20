import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

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
  },
  plugins: [vuexLocal.plugin]
})

export default store