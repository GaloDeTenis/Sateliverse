<template>
	<a-entity
		obj-model="obj: url(models/Satellite.obj)"
		ref="sphere"
		:position="`${x} ${y} ${z}`"
		color="#FF0000"
		:scale="scale"
		crossorigin="anonymous"
	></a-entity>
</template>

<script>
import { customAlphabet } from 'nanoid';
const nanoid = customAlphabet('abcdefghijklmnopqrstuvwxyz', 10);

export default {
	props: {
		position: {
			type: String,
		},
		info: {
			type: Object
		},
		canEmit: {
			type: Boolean,
			default: false
		},
		scale: {
			type: String,
			default: "1 1 1"
		}
	},
	data() {
		return {
			id: nanoid(),
			x: 0,
			y: 0,
			z: 0
		}
	},
	mounted() {
		const p = this.position.split(/\s/g);
		this.x = Number(p[0]);
		this.y = p[1] == 'NaN' ? -200 : Number(p[1]);
		this.z = Number(p[2]);

		console.log(this.x, this.y, this.z)

		const self = this;
		AFRAME.registerComponent(this.id, {
			schema: {
				//color: { default: 'red' }
			},

			init: function () {
				var el = this.el;

				el.addEventListener('mouseenter', () => {
					if (self.canEmit) {
						self.$emit('showInfo', { ...self.info, position: self.position })
					}
				});

				el.addEventListener('mouseleave', () => {
					if (self.canEmit) {
						self.$emit('hideInfo')
					}
				});
			}
		});

		this.$refs.sphere.setAttribute(this.id, null);
		if (this.canEmit) {
			const vel = 0.05
			setInterval(() => {
				this.x += vel;
				this.y -= vel;
			}, 100);
		}
	}
}
</script>