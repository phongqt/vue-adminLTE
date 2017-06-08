import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import DashboardRouter from '@/routers/dashboard'
import Login from '@/components/user/Login'
import Token from '@/providers/token'

Vue.use(Router)
function requireAuth (to, from, next) {
  if (!checkAuth()) {
    next({
      path: '/login'
    })
  } else {
    next()
  }
}

function checkAuth () {
  return !!Token.getToken()
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Admin',
      component: Home,
      beforeEnter: requireAuth,
      children: DashboardRouter.children
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
