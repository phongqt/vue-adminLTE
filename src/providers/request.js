import axios from 'axios'
import Token from '@/providers/token'

export const http = axios.create({
  baseURL: 'http://localhost:4500/api/',
  headers: {
    Authorization: Token.getToken()
  }
})

var result = {
  success: false,
  data: null,
  message: '',
  code: 500
}

var _get = function (api) {
  return http.get(api).then(response => {
    return handleSuccess(response)
  }).catch(error => {
    return handleError(error)
  })
}

var _post = function (api, data) {
  return http.post(api, data).then(response => {
    return handleSuccess(response)
  }).catch(error => {
    return handleError(error)
  })
}

var _put = function (api, data) {
  return http.put(api, data).then(response => {
    return handleSuccess(response)
  }).catch(error => {
    return handleError(error)
  })
}

var _delete = function (api) {
  return http.delete(api).then(response => {
    return handleSuccess(response)
  }).catch(error => {
    return handleError(error)
  })
}

function handleSuccess (response) {
  result.code = response.status
  result.success = response.data.success
  if (result.success && response.data.data) {
    let data = response.data.data
    result.data = data.data ? data.data : data
  }
  result.message = response.data.message
  return result
}

function handleError (error) {
  result.code = 500
  result.data = null
  result.message = error
  result.success = false
  return result
}

export default {
  get: _get,
  post: _post,
  put: _put,
  delete: _delete
}
