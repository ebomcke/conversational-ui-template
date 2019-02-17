import uuidv1 from 'uuid/v1'

export default {
  namespaced: true,
  state: {
    messages: []
  },
  mutations: {
    add (state, payload) {
      let { data, user, type } = payload
      const message = {
        id: uuidv1(),
        when: new Date(),
        type: type || 'simple-text-message',
        data,
        user
      }
      state.messages = [
        ...state.messages,
        message
      ]
    }
  },
  actions: {
    send ({ commit }, payload) {
      commit('add', payload)
    }
  }
}
