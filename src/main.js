// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'bootstrap-css-only/css/bootstrap.min.css';
import '../build/css/mdb.css';
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import Vue2TouchEvents from 'vue2-touch-events';
import LoadScript from 'vue-plugin-load-script';
import VueTyperPlugin from 'vue-typer';
import VueScrollTo from 'vue-scrollto';
import AOS from 'aos';
import 'aos/dist/aos.css';


Vue.use(VueScrollTo);
Vue.use(Vue2TouchEvents);
Vue.use(LoadScript);
Vue.use(VueTyperPlugin);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    store,
    router,
    created() {
      AOS.init();
    },
    template: '<App/>',
    components: {
        App
    }
});