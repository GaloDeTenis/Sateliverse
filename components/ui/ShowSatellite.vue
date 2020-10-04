<template>
	<a-entity geometry="primitive:box" material="color: red">
		<a-text
			id="name"
			align="center"
			:value="info.name"
            color="black"
			position="0 -1.5 -4"
			crossorigin="anonymous"
		></a-text>
		<a-text
			id="tyoe"
			align="center"
			:value="info.type"
            color="black"
			position="0 -2 -4"
			crossorigin="anonymous"
		></a-text>
        <!-- <a-plane v-show="text" color="white" height="2" width="5" position="0 -2.5 -5" rotation="0 0 0"></a-plane> -->
        <Satellite :scale="scale" position="0 1 -5"></Satellite>
	</a-entity>
</template>

<script>
import Satellite from '../satellites/Satellite'
export default {
	components: {
		Satellite
	},
	data(){
		return {
			intervaler: null,
			zRotate: 0
		}
		
	},
	props: {
		info: {
			type: Object
		},
		scale: {
			type: String
		}
	}
}
</script>