import Axios from 'axios';
import qs from 'qs';
import cbs from './ajax-error-callbacks.js';

Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
let start = Date.now();
let token = Date.now();
export const ajax = function(options, data, fn, local, codeList) {
  return new Promise((resolve, reject) => {
    let datas;
    const type = options.type.toLowerCase();
    const url = options.url;
    if (type === 'get') {
      datas = {
        params: data
      };
    } else if (type === 'post') {
      datas = qs.stringify(data);
    } else {
      datas = data;
    }
    Axios[type](url, datas)
      .then((res) => {
        const resData = res.data;
        const codeFlag = resData.code === 0;
        resolve(resData);
           if (codeFlag) {
          if (typeof fn === 'function') {
            fn(resData);
          }
        } else if (typeof local === 'function' && (!codeList || codeList.indexOf(resData.code) !== -1)) {
          local(resData);
        } else {
          cbs.statusError.call(this, resData);
        }
      })
      .catch((err) => {
        reject(err);
        cbs.requestError.call(this, err);
      });
  });
};
/**
 *
 * @param ajaxList
 * @param fnList
 * @param localList
 * @param codeListList
 * @returns {Promise.<void>}
 */
export const ajaxAll = async function(ajaxList, fn, local, codeList) {

  await Promise.all(ajaxList).then((resList) => {
    const codeFlag = resList.findIndex(item => item.code !== 0) === -1;
    if (codeFlag) {
      if (typeof fn === 'function') {
        fn(resList);
      }
    } else if (typeof local === 'function' && (!codeList || codeList.indexOf(resData.code) !== -1)) {
      local(resList);
    } else {
      cbs.statusError.call(this, resList);
    }
  }).catch((err) => {
    cbs.requestError.call(this, err);
  });
  await (
    start = Date.now()
  );
};

