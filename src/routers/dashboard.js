import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import UserAdd from '@/components/user/UserAdd'

Vue.use(Router)

export default {
  children: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/user-add',
      name: 'UserAdd',
      component: UserAdd
    }
  ]
}
