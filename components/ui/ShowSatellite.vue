<template>
	<a-entity>
		<a-text
			id="texto"
			align="center"
			:value="text"
			position="0 -2 -4"
		></a-text>
        <Satellite :scale="scale" @click="$emit('click')" position="0 0 -20" v-if="text"></Satellite>
	</a-entity>
</template>

<script>
import Satellite from '../satellites/Satellite'
export default {
	components: {
		Satellite
	},
	props: {
		text: {
			type: String
		},
		scale: {
			type: String
		}
	}
}
</script>

<style>
</style>
