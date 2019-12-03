import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import messageA from '../views/messageA.vue'
import systemNotifications from '../views/systemNotifications.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
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
    path: '/chat',
    name: 'chat',
    component: () => import('../views/chat.vue')
  },
  {
    path: '/msgsearch',
    name: 'msgsearch',
    component: () => import('../views/msgsearch.vue')
  },
  {
    path: '/replay',
    name: 'replay',
    component: () => import('../views/replay.vue')
  },
  {
    path: '/replayt',
    name: 'replayt',
    component: () => import('../views/replayt.vue')
  },
  {
    path: '/fabulous',
    name: 'fabulous',
    component: () => import('../views/fabulous.vue')
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
    path: '/message',
    name:"message",
    component: () => import('../views/message.vue'),
    children: [
      {
        path: '',
        name: 'messageA',
        component:messageA,
   
      },{
        path: '/messageB',
        name: 'messageB',
        component: () => import('../views/messageB.vue'),
        children:[
          {
            path:'',
            name:"systemNotifications",
            component:systemNotifications
          },
          {
            path:'/forwardNotification',
            name:"forwardNotification",
            component:() =>import('../views/forwardNotification.vue')
          },
          {
            path:'/followNotification',
            name:"followNotification",
            component:() =>import('../views/followNotification.vue')
          }
        ]
  
      }
    ]
  },
  {
    path: '/comments',
    name: 'comments',
    component: () => import('../views/comments.vue'),
  },
  {
    path: '/commentstwo',
    name: 'commentstwo',
    component: () => import('../views/commentstwo.vue'),
  },
  {
    path:'/search',
    name:'search',
    component:()=>import('../components/search.vue')
  },
  {
    path:'/searchHistory',
    name:'searchHistory',
    component:()=>import('../views/searchHistory.vue'),
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
