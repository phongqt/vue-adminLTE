import request from '@/providers/request'

function getAll (page, limit, orderBy = 'UserName', isDecs = false) {
  return request.get('user?page=' + page + '&limit=' + limit + '&orderBy=' + orderBy + '&isDecs=' + isDecs)
}

function login (model) {
  return request.post('authenticate', model)
}

function addUser (model) {
  return request.post('/user', model)
}
export default { getAll, login, addUser }
