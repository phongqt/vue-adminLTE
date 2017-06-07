var key = 'token'
function setToken (value) {
  localStorage.setItem(key, value)
}

function getToken () {
  return localStorage.getItem(key)
}

function removeToken () {
  localStorage.removeItem(key)
}

export default { setToken, getToken, removeToken }
