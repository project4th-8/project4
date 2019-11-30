import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

 const cons =[{
  title:'A基金上线',
  userid:1,
  username:'dada',
  times:'2018-3-1',
  contents:'sasasasasasasasasasdqwdwqdwqddqw',
  fenx:'121',
  pingl:'2312',
  zan:'123'
},
{
  title:'B基金上线',
  userid:1,
  username:'dada',
  times:'2018-3-1',
  contents:'sasasasasasasasasasdqwdwqdwqddqw',
  fenx:'121',
  pingl:'2312',
  zan:'123'
},
{
  title:'C基金上线',
  userid:1,
  username:'dada',
  times:'2018-3-1',
  contents:'sasasasasasasasasasdqwdwqdwqddqw',
  fenx:'121',
  pingl:'2312',
  zan:'123'
}] 

const fundlists = [{
  title:'A基金',
  count:'3124',
  profit:'1152',
  states: true,
  time:'2019-12-21'
},
{
  title:'B基金',
  count:'3124',
  profit:'1152',
  states: true,
  time:'2019-12-21'
},
{
  title:'H基金',
  count:'3124',
  profit:'1152',
  states: true,
  time:'2019-12-21'
},
{
  title:'Asfafsaddqwdqw基金',
  count:'3124',
  profit:'1152',
  states: true,
  time:'2019-12-21'
}]

export default new Vuex.Store({
  state: {
    cons : [],
    fundlists: [],
    isLogin: true,
    userInfo:{}
  },
  getters:{

  },
  mutations: {
    getCons(state,n) {
      state.cons = n
    },
    getfundlists(state,n) {
      state.fundlists = n
    }
  },
  actions: {
    getConsSync({commit}) {
      setTimeout(function() {
        commit('getCons',cons,1000)
      })
    },
    getfundlistsSync({commit} ) {
      setTimeout(function() {
        commit('getfundlists',fundlists,1000)
      });
    }
  },
  modules: {
  }
})
