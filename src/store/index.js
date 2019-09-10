import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default () => new Vuex.Store({
  state: () => ({
    current: '',
  }),

  actions: {
    change: ({ commit }, data) => {
      commit('change', data)
    },
  },

  mutations: {
    change: (state, data) => {
      state.current = data
    },
  },
})
