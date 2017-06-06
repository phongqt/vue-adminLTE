import axios from 'axios'

var defaultUrl = 'http://localhost:4500/api/'

var result = {
  success: Boolean,
  data: Object,
  message: String,
  code: Number
}

var get = function (api) {
  return axios.get(defaultUrl + api).then(response => {
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
  return axios.post(defaultUrl + api, JSON.stringify(data))
}

export default {
  get,
  post
}
