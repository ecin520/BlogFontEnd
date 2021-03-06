// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
// import './styles/index.css'

import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

// import 'bootstrap/dist/css/bootstrap.min.css'
// import $ from 'jquery'
// import 'bootstrap/dist/js/bootstrap.bundle.min'
// import 'bootstrap/dist/js/bootstrap.min.js'

import hljs from 'highlight.js';
import 'highlight.js/styles/paraiso-light.css' //样式文件

Vue.directive('highlight',function (el) {
  let blocks = el.querySelectorAll('pre code');
  setTimeout(() =>{
    blocks.forEach((block)=>{
      hljs.highlightBlock(block)
    })
  }, 200)
})

import marked from 'marked'

import axios from 'axios';
import qs from 'qs';



Vue.prototype.$axios = axios;
Vue.prototype.$qs = qs;

//使用全局axios请求
// import https from './https'

Vue.use(iView)
Vue.use(mavonEditor)

Vue.config.productionTip = false

import VueCookies from 'vue-cookies'
Vue.use(VueCookies)


import Vuex from 'vuex'
import store from './store'

import animate from 'animate.css'
Vue.use(animate)
/* eslint-disable no-new */


new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
