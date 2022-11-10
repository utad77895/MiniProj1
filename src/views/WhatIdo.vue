<script>
import feather from 'feather-icons';
import WhatIdo from '../components/about/WhatIdo.vue';

export default {
	name: 'whatIdo',
	components: {
		WhatIdo,
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
		<WhatIdo/>
	</div>
</template>

<style scoped></style>
