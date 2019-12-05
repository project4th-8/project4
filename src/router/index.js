import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import recommend from '../views/recommend.vue'
import messageA from '../views/messageA.vue'
import systemNotifications from '../views/systemNotifications.vue'
import ScComment from '../views/ScComment.vue'
 
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
        path: 'mtext',
        name: 'mtext',
        component: () => import('../views/Mtext.vue')
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
  {
    path: '/forword',
    name: 'forword',
    component: () => import('../views/forword.vue')
  },
  {
  path: '/chat',
  name: 'chat',
  component: () => import('../views/chat.vue')
} ,
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
  path: '/message',
  component: () => import('../views/message.vue'),
  children: [
    {
      path: '',
      name: 'messageA',
      component:messageA,
    }, 
    {
      path: 'messageB',
      component: () => import('../views/messageB.vue'),
      children: [
        {
          path:'',
          name:"systemNotifications",
          component:systemNotifications
        },
        {
          path:'forwardNotification',
          name:"forwardNotification",
          component:() =>import('../views/forwardNotification.vue')
        },
        {
          path:'followNotification',
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
},
{
  path:'/sccomment',
  name:"sccomment",
  component: ScComment
},
{
  path:'/scpinlun',
  name:'sc',
  component:()=>import('../views/ScPinlun.vue')
},
{
  path:"/sctuijian",
  name:'tuijian',
  component:()=>import('../views/ScTuijian.vue'),
},
{
  path:"/scgeren",
  name:"geren",
  component:()=>import('../views/Scgeren.vue')
},
  {
    path:'/funddetails',
    name:'funddetails',
    component:()=>import('../views/Funddetails.vue')
  },
  {
    path:'/chart',
    name:'chart',
    component:()=>import('../views/chart.vue')
  },
  {
    path: '/isselectdynamic',
    name: 'isselectdynamic',
    component: () => import('../views/Isselectdynamic.vue')
  },
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
