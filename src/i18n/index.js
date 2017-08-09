import Vue from 'vue';
import VueI18n from 'vue-i18n';

import messages from './messages/index.js'

Vue.use(VueI18n);
function getLocale() {
  let navLang = navigator.userLanguage || navigator.language;
  navLang = navLang.split('-')[0];
  if (location.search.indexOf('lang') > 0) {
    navLang = location.search.split('lang=')[1].split('&')[0];
  }
  return navLang;
}
export default new VueI18n({
  locale: getLocale(),
  fallbackLocale: 'en',
  messages
});
