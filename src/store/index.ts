import Vue from 'vue'
import Vuex from 'vuex'
import state from './state';
import getters from './getter';
import mutations from './mutations';
import actions from './action';

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
