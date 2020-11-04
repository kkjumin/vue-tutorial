import Vue from 'vue';
import axios from 'axios';
import VueLodash from 'vue-lodash';
import lodash from 'lodash';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;
Vue.prototype.$http = axios;
Vue.prototype.$bus = new Vue();
Vue.use(VueLodash, { name: 'custom', lodash });

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app');
