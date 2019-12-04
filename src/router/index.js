import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import recommend from '../views/recommend.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home,
    children: [
      {
        path: '',
        component: recommend,
        children: [{
          path: 'allfund',
          name: 'allfund',
          component: () => import('../views/allfund.vue')
        }]
      },
      {
        path: 'text',
        name: 'text',
        component: () => import('../views/text.vue')
      }
    ]

  },
  {
    path:'/createtext',
    name:"createtext",
    component: () => import('../views/createtext.vue')
  }
  ,
  {
    path: '/fund',
    name: 'fund',
    component: () => import('../views/fund.vue')
  },
  {
    path: '/createusercon',
    name: 'createusercon',
    component: () => import('../views/createusercon.vue')
  },
  {
    path: '/recommend',
    name: 'recommend',
    component: () => import('../views/recommend.vue')
  },

  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue')
  },
  {
    path: '/informations',
    name: 'informations',
    component: () => import('../views/Informations.vue')
  },
  {
    path: '/myfans',
    name: 'myfans',
    component: () => import('../views/Myfans.vue')
  },
  {
    path: '/attention',
    name: 'attention',
    component: () => import('../views/Attention.vue')
  },
  {
    path: '/authentication',
    name: 'authentication',
    component: () => import('../views/Authentication.vue')
  },
  {
    path: '/dynamic',
    name: 'dynamic',
    component: () => import('../views/Dynamic.vue')
  },
  {
    path: '/comment',
    name: 'comment',
    component: () => import('../views/Comment.vue')
  },
  {
    path: '/account',
    name: 'account',
    component: () => import('../views/Account.vue')
  },
  {
    path: '/safety',
    name: 'safety',
    component: () => import('../views/Safety.vue')
  },
  {
    path: '/Forgetnext',
    name: 'Forgetnext',
    component: () => import('../views/Forgetnext.vue')
  },
  {
    path: '/Forgetpassword',
    name: 'Forgetpassword',
    component: () => import('../views/Forgetpassword.vue')
  },
  {
    path: '/Login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/Register',
    name: 'Register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/Registernext',
    name: 'Registernext',
    component: () => import('../views/Registernext.vue')
  },
  {
    path: '/Yanzhenglogin',
    name: 'Yanzhenglogin',
    component: () => import('../views/Yanzhenglogin.vue')
  },
  {
    path: '/Yanzhengpassword',
    name: 'Yanzhengpassword',
    component: () => import('../views/Yanzhengpassword.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
