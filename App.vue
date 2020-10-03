
<template>
	<div>
		<a-scene vr-mode-ui="enterVRButton: #vrButton">
			<a-sky
				:radius="radius"
				src="https://cdn.eso.org/images/screen/vlt-mw-potw.jpg"
			></a-sky>
			<Satellite @showInfo="showInfo" v-for="(satellite, s) in satelliteList" :key="s" :position="`${satellite.x} ${satellite.y} ${satellite.z}`" :name="satellite.name" :canEmit="true"></Satellite>
			<a-camera>
				<ShowSatellite @click="hideInfo" :text="info"></ShowSatellite>
				<a-cursor far="20000" color="#FFFFFF"></a-cursor>
			</a-camera>
		</a-scene>
		<button id="vrButton">VR</button>
	</div>
</template>

<script>
import api from './api';
import Satellite from './components/satellites/Satellite'
import ShowSatellite from './components/ui/ShowSatellite'

export default {
	components:{
		Satellite,
		ShowSatellite
	},
	data() {
		return {
			radius: 10000,
			info: ''
		}
	},

// 	mounted(){
// 		 AFRAME.registerComponent('change-color-on-hover', {
//     schema: {
//       color: {default: 'red'}
//     },

//     init: function () {
//       var data = this.data;
//       var el = this.el;  // <a-box>
//       var defaultColor = el.getAttribute('material').color;

//       el.addEventListener('mouseenter', function () {
//         el.setAttribute('color', data.color);
//       });

//       el.addEventListener('mouseleave', function () {
//         el.setAttribute('color', defaultColor);
//       });
//     }
//   });
// 	},
	methods: {
		showInfo(info) {
			this.info = info;
		},
		hideInfo() {
			this.info = '';
		},
		generatePosition(satellite){
			return `${satellite.x} ${satellite.y} ${satellite.z}`
		}
	},
	asyncComputed: {
		satelliteList: {
			async get() {
				return await api.list();
			},
			default: []
		}
	},
	computed: {
		localization: {
			get() {
				if (navigator.geolocation) {
					return navigator.geolocation.getCurrentPosition();
				} else {
					alert("Geolocation is not supported by this browser.");
					return null
				}
			}
		}
	}
}
</script>

<style scoped>
	button {
		position: absolute;
		z-index: 999;
		top: 10px;
		left: 10px;
		padding: 10px;
	}
</style>