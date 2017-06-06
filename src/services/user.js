import request from '@/providers/request'

function getAll (page, limit) {
  return request.get('user?page=' + page + '&limit=' + limit)
}

export default { getAll }
