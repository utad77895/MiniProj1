<script>
import feather from 'feather-icons';
import Hoobies from '../components/about/Hoobies.vue';

export default {
	name: 'hoobies',
	components: {
		Hoobies,
	},
	
	mounted() {
		feather.replace();
	},
	updated() {
		feather.replace();
	},
	methods: {},
};
</script>

<template>
	<div class="container mx-auto mt-10 sm:mt-20">
		<Hoobies/>
	</div>
</template>

<style scoped></style>
