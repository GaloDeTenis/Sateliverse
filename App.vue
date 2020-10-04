
<template>
	<div>
		<a-scene vr-mode-ui="enterVRButton: #vrButton">
			<a-sky :radius="`${radius + 100}`" src="https://live.staticflickr.com/8573/16015896214_41b3d29e17_b.jpg" crossorigin="anonymous"></a-sky>
			<Ground :radius="radius"></Ground>
			<Satellite
				scale="20 20 20"
				@showInfo="showInfo"
				@hideInfo="hideInfo"
				v-for="(sat, i) in satellites"
				:key="i"
				:position="`${sat.x} ${sat.y} ${sat.z}`"
				:info="{ name: sat.name, type: sat.type }"
				:canEmit="true"
			></Satellite>
			<a-camera>
				<ShowSatellite v-if="info" :info="info" scale="2 2 2"></ShowSatellite>
				<a-cursor far="20000" color="#FFFFFF"></a-cursor>
			</a-camera>
		</a-scene>
		<button id="vrButton">VR</button>
		<audio src="~/static/audio/theme.mp3" autoplay loop ref="audio"></audio>
	</div>
</template>

<script>
import satteliteList from './utils/data';
import Satellite from './components/satellites/Satellite';
import ShowSatellite from './components/ui/ShowSatellite';
import Ground from './components/ground/Ground';

export default {
	components: {
		Satellite,
		ShowSatellite,
		Ground
	},
	data() {
		return {
			typeSattelite: [
				"Satelite de Comunicacao",
				"Satelite de Televisao",
				"Satelite de Internet",
				"Satelite de GPS",
				"Satelite Cientifico",
				"Satelites de sensoriamento remoto",
				"Satelites de recursos terrestres",
				"Satelites de uso militar"
			],
			radius: 200,
			info: '',
			lock: false,
			satellites: []
		}
	},
	mounted() {
		this.generateSatellite();
		this.$refs.audio.volume = 0.3;
	},
	methods: {
		generateSatellite() {
			let list = satteliteList;
			this.satellites = [];
			for(let i = 0; i < 20; i++) {
				const sat = list[Math.floor(Math.random() * list.length)];
				list = list.filter(s => s.satelliteId != sat.satelliteId);
				sat.x = Math.floor(Math.random() * (2 * this.radius) - this.radius);
				sat.z = Math.floor(Math.random() * (2 * this.radius) - this.radius);
				sat.y = Math.sqrt(this.radius ** 2 - sat.x ** 2 - sat.z ** 2);
				sat.type = this.typeSattelite[Math.floor(this.typeSattelite.length * Math.random())];
				this.satellites.push(sat);
			}
		},
		showInfo(info) {
			this.info = info;
		},
		hideInfo() {
			this.info = null;
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