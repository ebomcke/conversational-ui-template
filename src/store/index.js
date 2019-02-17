import Vue from 'vue'
import Vuex from 'vuex'

import message from './modules/messages'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: { message },
  state: {},
  getters: {},
  mutations: {},
  actions: {
    send ({ dispatch }, payload) {
      dispatch('message/send', payload)
    }
  }
})
export default store
