import Vue from 'vue'
import Vuex from 'vuex'

import message from './modules/messages'
import user from './modules/users'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: { message, user },
  state: {},
  getters: {},
  mutations: {},
  actions: {
    send ({ dispatch, getters }, payload) {
      payload.user = getters['user/getById']('app-user')
      dispatch('message/send', payload)
    }
  }
})
export default store
