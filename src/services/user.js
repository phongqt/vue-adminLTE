import request from '@/providers/request'

function getAll (page, limit) {
  return request.get('user?page=' + page + '&limit=' + limit)
}

function login (model) {
  return request.post('authenticate', model)
}
export default { getAll, login }
