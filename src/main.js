import Vue from 'vue'
import App from './App.vue'
import VueScrollTo from 'vue-scrollto';

Vue.use(VueScrollTo);

new Vue({
  el: '#new-hope',
  render: h => h(App)
})
