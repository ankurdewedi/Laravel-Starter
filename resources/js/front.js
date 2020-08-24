require('./bootstrap');

import store from './store';
import router from './routes';

import App from './components/AppComponent.vue';
const app = new Vue({
	store,
	router,
	el:'#app',
	render: h => h(App)
});
