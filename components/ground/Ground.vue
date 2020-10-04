<template>
	<a-circle material="src: url(img/ground.jpg); repeat: 100 100; roughness: 1" ground :radius="`${radius}`" position="0 0 0" rotation="-90 0 0"></a-circle>
</template>

<script>
export default {
	props: {
		radius: {
			required: true
		}
	},
	mounted(){
		const self = this;
		AFRAME.registerComponent('ground', {
			schema: {
				//color: { default: 'red' }
			},

			init: function () {
				var el = this.el;

				el.addEventListener('mouseenter', () => {
					self.$emit('hideInfo')
				});
			}
		});
	}
}
</script>