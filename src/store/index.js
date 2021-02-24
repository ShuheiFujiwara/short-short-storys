import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)
 
const store = new Vuex.Store({
  store: {
      userName: 'unknown'
  },
  getters: {},
  mutations: {
      setUserName(state, userName){
        state.userName = userName;
      }
  },
  actions: {}
})
 
export default store