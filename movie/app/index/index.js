import Vue from 'vue';
// import Favlist from './components/Favlist';
import App from './App.vue';
import VueResource from 'vue-resource';

Vue.use(VueResource);

new Vue({
	el: '#app',
	template: '<App>',
	components: { App }
});