import axios from 'axios'
import Token from '@/providers/token'

var defaultUrl = 'http://localhost:4500/api/'

export const http = axios.create({
  baseURL: 'http://localhost:4500/api/',
  headers: {
    Authorization: Token.getToken()
  }
})

var result = {
  success: Boolean,
  data: Object,
  message: String,
  code: Number
}

var get = function (api) {
  return http.get(defaultUrl + api).then(response => {
    result = response.data
    return result
  }).catch(error => {
    result.code = 500
    result.data = null
    result.message = error
    result.success = false
    return result
  })
}

var post = function (api, data) {
  return http.post(defaultUrl + api, data).then(response => {
    result = response.data
    result.code = response.status
    return result
  }).catch(error => {
    result.code = 500
    result.data = null
    result.message = error
    result.success = false
    return result
  })
}

export default {
  get,
  post
}
