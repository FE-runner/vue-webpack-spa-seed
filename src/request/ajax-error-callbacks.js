const handleStatus = function(res) {
  switch (res.code) {
    default:
      console.log('codeEr', res.code);
      break;
  }
};
export default {
  statusError(res) {
    console.log('codeEr', res);

    const isArray = Array.isArray(res);
    if (isArray) {
      const firstRes = res.find((item) => {
        return item.code !== 0;
      });
      handleStatus(firstRes);
    } else {
      handleStatus(res);
    }
  },
  requestError(err) {
    if (err.response) {
      // 存在请求，状态码在200之外
      console.log('resEr', err.response);
    } else {
      console.log('paramEr', err);
    }
    return false;
  }
};
