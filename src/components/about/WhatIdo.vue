<script>
export default {
	setup() {
		return {
			whatido: [
				{
					id: 1,
					do:
						'Sou Software Tester na Critical Software.',
				},
				{
					id: 2,
					do:
						'Faço testes funcionais e manuais com tools e hardware especifico da BMW.',
				},
			],
		}
	}
}

</script>

<template>
	<div class="text-center px-4 py-6">
		<p v-for="wdo in whatido" :key="wdo.id"
			class="font-general-semibold text-xl text-ternary-dark dark:text-ternary-light font-semibold mb-2">
			{{ wdo.do }}
		</p>
	</div>
</template>

<style lang="scss" scoped>

</style>
