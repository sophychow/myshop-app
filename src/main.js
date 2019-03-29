/*
入口js
*/
import Vue from 'vue'
import {Button} from 'mint-ui'
import App from './App.vue'
import router from './router'
import store from './store'

// import './mock/MockServer.js'
import './mock/mockServer' // 加载mockServer即可

Vue.component(Button.name, Button)  //<mt-button>

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
