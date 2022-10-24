import Vue from 'vue';

import App from './App.vue';
import axios from 'axios';

import { connectVuetify } from './plugins/vuetify';
import { connectRouter } from './plugins/vue-router';
import { connecti18n } from './plugins/vue-i18n';

import store from './store/store';

axios.interceptors.response.use(
	response => response,
	error => {
		if (error?.response?.status === 400) {
			alert(error.response.data?.data);
		}

		if (error?.response?.status === 401 || error?.response?.status === 403) {
			alert(error.response.data?.message);
		}

		return Promise.reject(error?.response ?? error);
	}
);

const createApp = () => {
	Vue.config.productionTip = false;

	return new Vue({
		el: '#app',
		//
		router: connectRouter(Vue),
		vuetify: connectVuetify(Vue),
		i18n: connecti18n(Vue),
		store,
		//
		render: h => h(App),
	});
};

createApp();
