import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login/Login'
import Register from '@/components/register/Register'
import Commodity from '@/components/views/Commodity'
import Member from '@/components/views/Member'
import Pos from '@/components/views/Pos'
import StoreManagement from '@/components/views/shop/StoreManagement'
import ClerkManagement from '@/components/views/shop/ClerkManagement'
import Statistics from '@/components/views/Statistics'
import PersonalAccount from '@/components/views/setup/PersonalAccount'
import PaymentSettings from '@/components/views/setup/PaymentSettings'
import Excessive from '@/components/views/Excessive'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register/Register',
      name: 'Register',
      component: Register
    },
    {
      path: '/',
      component: Excessive,
      children: [
        {
          path: '/',
          name: 'Pos',
          component: Pos
        },
        {
          path: '/views/StoreManagement',
          name: 'StoreManagement',
          component: StoreManagement
        },
        {
          path: '/views/ClerkManagement',
          name: 'ClerkManagement',
          component: ClerkManagement
        },
        {
          path: '/views/Commodity',
          name: 'Commodity',
          component: Commodity
        },
        {
          path: '/views/Member',
          name: 'Member',
          component: Member
        },
        {
          path: '/views/Statistics',
          name: 'Statistics',
          component: Statistics
        },
        {
          path: '/views/PersonalAccount',
          name: 'PersonalAccount',
          component: PersonalAccount
        },
        {
          path: '/views/PaymentSettings',
          name: 'PaymentSettings',
          component: PaymentSettings
        }
      ]
    }
  ]
})
