import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login/Login'
import Register from '@/components/register/Register'
import Commodity from '@/components/views/Commodity'
import Member from '@/components/views/Member'
import Pos from '@/components/views/Pos'
import Shop from '@/components/views/Shop'
import Statistics from '@/components/views/Statistics'
import SetUp from '@/components/views/setup/SetUp'
import Excessive from '@/components/views/Excessive'

Vue.use(Router)

export default new Router({
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
          path: '/views/Shop',
          name: 'Shop',
          component: Shop
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
          path: '/views/SetUp',
          name: 'SetUp',
          component: SetUp
        }
      ]
    }
  ]
})
