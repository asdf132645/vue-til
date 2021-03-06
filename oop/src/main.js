import Vue from 'vue';
import App from './App.vue';
import router from '@/routes/index.js';
import vuetify from './plugins/vuetify';
import store from '@/store/index';

Vue.config.productionTip = false;

new Vue({
	vuetify,
	router,
	store,
	render: h => h(App),
}).$mount('#app');
