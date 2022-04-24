import {user} from '../request'

export function login(data) {
  return user.post('/login',data)
}

export function userQuery(data) {
  return user.post('/query',data)
}

export function userQueryOne(id) {
  return user.get('/queryOne?id=' +id )
}

export function setAuth(data) {
  return user.post('/setAuth',data)
}
