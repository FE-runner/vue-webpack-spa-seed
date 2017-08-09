import * as types from './mutation-types';

export default {
  state: {
    temp: 1
  },
  mutations: {
    [types.TEMP_1](substate, payload) {
      substate.temp = payload;
    }
  },
  actions: {
    [types.TEMP_1]({
      commit
    }, payLoad) {
      return new Promise((resolve, reject) => {
        commit(types.TEMP_1, payLoad);
        resolve();
      });
    }
  }
};
