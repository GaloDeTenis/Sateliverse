<template>
	<a-entity geometry="primitive:box" material="color: red">
		<a-text
			id="name"
			align="center"
			:value="info.name"
            color="black"
			:position="`0 ${-1.7 - top} -4`"
			crossorigin="anonymous"
		></a-text>
		<a-text
			id="tyoe"
			align="center"
			:value="info.type"
            color="black"
			:position="`0 ${-2 - top} -4`"
			crossorigin="anonymous"
		></a-text>
        <a-plane color="white" height="1" width="5" :position="`0 ${-2.1 - top} -5`" rotation="0 0 0"></a-plane>
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
			zRotate: 0,
			top: -1
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