/**
 * 若HTML非JS渲染则必须放在头部且body的fontSize不可设置
 * 字体 720px下设计图 原图32px/32=1em=360px下16px;
 * 其他 720px下设计图 原图100px/100=1rem=360px下50px
 */


const size = 1440;
const maxSize = 1920;
const minSize = 960;

const doc = window.document;
const docEl = doc.documentElement;
// const docBody = doc.body;
const resizeEvt = 'orientationchange' in window
  ? 'orientationchange'
  : 'resize';
const recalc = function recalc() {
  const clientDis = docEl.clientWidth;
  docEl.style.fontSize = `${50 * (clientDis / size)}px`;

  if (clientDis > maxSize) {
    docEl.style.fontSize = `${50 * (maxSize / size)}px`;
  }
  if (clientDis < minSize) {
    docEl.style.fontSize = `${50 * (minSize / size)}px`;
  }
};
window.addEventListener && window.addEventListener(resizeEvt, recalc, false);
doc.addEventListener && doc.addEventListener('DOMContentLoaded', recalc, false);

