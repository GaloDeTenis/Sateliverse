import 'aframe';
import Vue from 'vue';
import App from './App.vue';
import VueAsyncComputed from 'vue-async-computed';


Vue.config.ignoredElements = [
	'a-scene',
	'a-sky',
	'a-sphere',
	'a-text',
	'a-entity',
	'a-camera',
	'a-cursor',
	'a-box',
	'a-asset-item',
	'a-assets'
];

Vue.use(VueAsyncComputed);

new Vue({
	el: '#app',
	render: h => h(App)
});