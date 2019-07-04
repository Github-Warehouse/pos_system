import Vue from 'vue'
import Router from 'vue-router'
import Pos from '@/components/views/Pos'
import Shop from '@/components/views/Shop'
import Commodity from '@/components/views/Commodity'
import Register from '@/components/register/Register'
import Excessive from '@/components/excessive/Excessive'
import Login from '@/components/login/Login'

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
        }
      ]
    }
  ]
})
