<template>
	<a-circle material="src: url(img/ground.jpg); repeat: 100 100; roughness: 1" ground :radius="`${radius}`" position="0 0 0" rotation="-90 0 0"></a-circle>
</template>

<script>
export default {
	props: {
		radius: {
			required: true
		}
	}
}
</script>