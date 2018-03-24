// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import App from './App'
import router from './router'
import store from 'vuex'
import ElementUI from 'element-ui'
import messages from './locale'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

// set i18n
Vue.use(VueI18n)
// const currentUsingLang = navigator.language === 'zh-CN' ? 'zh-CN' : 'en'
const currentUsingLang = 'zh-CN' // for default chinese app
// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: currentUsingLang, // set locale
  messages, // set locale messages
})

Vue.use(ElementUI, {
  i18n: (key, value) => i18n.t(key, value),
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: { App },
  template: '<App/>',
})
