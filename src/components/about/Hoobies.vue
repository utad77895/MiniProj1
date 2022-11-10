<script>
export default {
	setup() {
		return {
			hoobies: [
				{
					id: 1,
					hoob:
						'Nos meus tempos livros gosto de ler, ver documentários, jogar futsal e ouvir música.',
				},
				{
					id: 2,
					hoob:
						'Tenho outro hoobie a full time que é tratar da minha e passear da minha cadela a Diva, é uma pitbull muito dócil e meiga.',
				},
			],
		};
	},
};
</script>

<template>
	<div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
		<!-- Image Pitbull  -->
		<div class="w-full sm:w-1/4 mb-7 sm:mb-0">
			<img
				src="@/assets/images/dog-g963776d92_640.png"
				class="rounded-xl w-96"
				alt=""
			/>
		</div>

		<!-- Descrição quem sou -->
		<div class="w-full sm:w-3/4 text-left">
			<p
				v-for="hb in hoobies"
				:key="hb.id"
				class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg"
			>
				{{ hb.hoob }}
			</p>
		</div>
	</div>
</template>
