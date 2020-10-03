<template>
	<a-entity obj-model="obj: url(https://samuelnovaes.github.io/public/Satellite.obj)" ref="sphere" :position="position" color="#FF0000" :scale="scale"></a-entity>
</template>

<script>
import { customAlphabet } from 'nanoid';
const nanoid = customAlphabet('abcdefghijklmnopqrstuvwxyz', 10);

export default {
	props: {
		position: {
			type: String,
			required: true
		},
		name: {
			type: String
		},
		canEmit: {
			type: Boolean,
			default: false
		},
		scale:{
			type: String,
			default: "1 1 1"
		}
	},
	data() {
		return {
			id: nanoid()
		}
	},
	mounted() {
		const self = this;
		AFRAME.registerComponent(this.id, {
			schema: {
				//color: { default: 'red' }
			},

			init: function () {
				var el = this.el;

				el.addEventListener('click', () => {
					self.$emit('click')
				});

				el.addEventListener('mouseenter', () => {
					if (self.canEmit) {
						self.$emit('showInfo', self.name)
					}
				});
			}
		});
		this.$refs.sphere.setAttribute(this.id, null)
	}
}
</script>