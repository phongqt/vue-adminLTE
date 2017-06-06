import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import DashboardRouter from '@/routers/dashboard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Admin',
      component: Home,
      children: DashboardRouter.children
    }
  ]
})
