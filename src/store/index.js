import Vue from 'vue';
import Vuex from 'vuex';

import temp from './temp.js';

Vue.use(Vuex);

export default new Vuex.Store({
  // 严格模式会导致object的引用方式处理state变量失效
  // strict: true,
  modules: {
    temp
  }
});
