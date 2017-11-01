import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {},
  mutations: {},
  getters: {},
  plugins: [
    store => {
      // 当 store 初始化后调用
      store.subscribe((mutation, state) => {
        'use strict'
      })
    }
  ]
})

export default store
