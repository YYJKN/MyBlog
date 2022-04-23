import {user} from '../request'

export async function login(data) {
  return user.post('/login',data)
}
