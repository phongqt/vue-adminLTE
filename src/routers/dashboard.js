import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import UserAdd from '@/components/user/UserAdd'
import UserEdit from '@/components/user/UserEdit'

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
    },
    {
      path: '/user-edit/:id',
      name: 'UserEdit',
      component: UserEdit
    }
  ]
}
