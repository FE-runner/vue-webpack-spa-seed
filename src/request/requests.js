import { ajax, ajaxAll } from './ajax.js';
// console.log(ajax,ajaxAll);
const requests = {
  ajax,
  ajaxAll,
  // getCampList(data, fn, local, codeList) {
  //   return ajax.call(this, 'get', '/beta/api/campaign/index', data, fn, local, codeList);
  // },
  // getCamp(data, fn, local, codeList) {
  //   return ajax.call(this, 'get', '/beta/api/campaign/view', data, fn, local, codeList);
  // },
  // getCampAll(ajaxList, fnList, localList, codeListList) {
  //   ajaxAll.call(this, ajaxList, fnList, localList, codeListList);
  // }
};
const options = {
  campListOpt: {
    type: 'get',
    url: '/beta/api/campaign/index'
  },
  campViewOpt: {
    type: 'get',
    url: '/beta/api/campaign/view'
  }
};
export default {
  install(Vue, opts) {
    Object.entries(requests).forEach((list) => {
      Vue.prototype[`__${list[0]}`] = list[1];
    });
    Object.entries(options).forEach((list) => {
      Vue.prototype[`__${list[0]}`] = list[1];
    });
  }
};

