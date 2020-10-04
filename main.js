import 'aframe';
import Vue from 'vue';
import App from './App.vue';


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
	'a-assets',
	'a-circle',
	'a-plane'
];

new Vue({
	el: '#app',
	render: h => h(App)
});