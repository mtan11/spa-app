import Vue from 'vue';
import VueRouter from 'vue-router';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faTachometerAlt } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import AOS from 'aos';
import App from './App.vue';
import HomeVue from './views/Home.vue';
import AboutVue from './views/About.vue';

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import 'aos/dist/aos.css'; // You can also use <link> for styles

library.add(faTachometerAlt);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.config.productionTip = false;
Vue.use(VueRouter);

const routes = [{
  path: '/',
  component: HomeVue,
},
{
  path: '/about',
  component: AboutVue,
}];

const router = new VueRouter({
  routes,
  mode: 'history',
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
AOS.init();
