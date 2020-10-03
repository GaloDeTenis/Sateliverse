<template>
	<a-sphere
		ref="sphere"
		satel
		:position="position"
		radius="5"
		color="#FF0000"
	></a-sphere>
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
					if (self.canEmit) {
						self.$emit('showInfo', self.name)
					}
					self.$emit('click')
				});
			}
		});
		this.$refs.sphere.setAttribute(this.id, null)
	}
}
</script>