import Vue from 'vue';
// assets
import './assets/index.js';
// utils
import './utils/index.js';
// config
import './config/index.js';
// request
import './request/index.js'
// i18n
import i18n from './i18n/index.js';
// vuex
import store from './store/index.js';
// router
import router from './router/index.js';
// components
import './components/index.js';
// top component
import app from './app.vue';

router.beforeEach((to, from, next) => {
  next();
});


const main = new Vue({
  el: '#app',
  i18n,
  store,
  router,
  render: r => r(app)
});
console.info(main);
