import axios from 'axios'
import Vue from 'vue'
import element from 'element-ui'

const article = axios.create({
  baseURL: process.env.VUE_APP_BASEURL + '/article'
})

const user = axios.create({
  baseURL: process.env.VUE_APP_BASEURL + '/user'
})

const comment = axios.create({
  baseURL:process.env.VUE_APP_BASEURL + '/comment'
})

const img = axios.create({
  baseURL:process.env.VUE_APP_BASEURL + '/img'
})

user.interceptors.response.use(res => {
  return res
},err => {
  element.Message.error(err.response.data.message)
})

export { article,user ,comment,img}
