import Vue from 'vue'
import Vuex from 'vuex'
import persistedState from 'vuex-persistedstate'
import * as Cookies from 'js-cookie'

Vue.use(Vuex)

const state = {
  count: 0,
  count1: 0
}

const mutations = {
  mutationsAddCount(state, n = 0) {
    return (state.count += n)
  },
  mutationsReduceCount(state, n = 0) {
    return (state.count1 -= n)
  }
}

const actions = {
  actionsAddCount(context, n = 0) {
    console.log(context)
    return context.commit('mutationsAddCount', n)
  },
  actionsReduceCount({ commit }, n = 0) {
    return commit('mutationsReduceCount', n)
  }
}

const getters = {
  getterCount(state) {
    return (state.count += 10)
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  plugins: [
    persistedState({
      // 默认localStorage
      // storage: window.sessionStorage
      storage: {
        getItem: key => Cookies.get(key),
        setItem: (key, value) => Cookies.set(key, value, { expires: 7 }),
        removeItem: key => Cookies.remove(key)
      },
      reducer(val){
        return {
          count: val.count
        }
      }
    })
  ]
})