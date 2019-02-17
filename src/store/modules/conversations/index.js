import conversations from './data'
import _ from 'underscore'

export default {
  namespaced: true,
  state: {
    active: null,
    step: null
  },
  getters: {
    active: state => {
      return conversations.find(c => c.id === state.active)
    },
    step: (state, getters) => id => {
      return getters.active?.steps.find(s => s.id === id)
    },
    flow: (state, getters) => {
      return state.step && getters.active?.flow.find(f => f.from === state.step.id)
    },
    lastStep: (state, getters) => {
      return !getters.flow
    },
    nextStep: (state, getters) => id => {
      const flow = getters.flow
      if (_.isString(flow.to)) {
        return getters.step(flow.to)
      }
      if (_.isArray(flow.to)) {
        return getters.step(flow.to.find(target => target.id === id)?.step)
      }
    },
    suggestions: (state, getters) => {
      if (!state.active) {
        return conversations.map(c => ({
          id: c.id,
          description: c.description,
          displayedText: c.displayedText
        }))
      }
      const flow = getters.flow
      if (_.isString(flow?.to)) {
        return [
          {
            id: flow.to,
            description: flow.description || flow.displayedText,
            displayedText: flow.displayedText
          }
        ]
      }
      if (_.isArray(flow?.to)) {
        return flow.to.map(target => ({
          id: target.id,
          description: target.description || target.displayedText,
          displayedText: target.displayedText
        }))
      }
      return null
    }
  },
  mutations: {
    start (state, payload) {
      state.active = payload.id
    },
    step (state, payload) {
      state.step = payload
    },
    finish (state) {
      state.step = null
      state.active = null
    }
  },
  actions: {
    handleSuggestion ({ dispatch, getters }, payload) {
      if (getters.active) {
        dispatch('continue', {
          step: payload.data.id
        })
      } else {
        dispatch('start', {
          id: payload.data.id
        })
      }
    },
    start ({ dispatch, commit, getters }, payload) {
      commit('start', payload)
      commit('step', getters.active.steps[0])
      dispatch(
        'response',
        {},
        { root: true }
      )
    },
    continue ({ dispatch, commit, getters }, payload) {
      const nextStep = getters.nextStep(payload.step)
      commit('step', nextStep)
      dispatch(
        'response',
        {},
        { root: true }
      )
      if (getters.lastStep) {
        commit('finish')
      }
    }
  }
}
