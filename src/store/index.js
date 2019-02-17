import Vue from 'vue'
import Vuex from 'vuex'

import conversation from './modules/conversations'
import message from './modules/messages'
import user from './modules/users'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: { conversation, message, user },
  state: {},
  getters: {},
  mutations: {},
  actions: {
    send ({ dispatch, getters }, payload) {
      payload.user = getters['user/getById']('app-user')
      dispatch('message/send', payload)
    },
    sendSuggestion ({ dispatch, getters }, payload) {
      dispatch('send', {
        data: {
          text: payload.data.displayedText
        }
      })
      dispatch('conversation/handleSuggestion', payload)
    },
    response ({ dispatch, getters, state }) {
      let message = {
        data: {
          text: state.conversation.step.text
        },
        user: getters['user/getById'](getters['conversation/active'].user)
      }
      dispatch('message/send', message)
    }
  }
})
export default store
