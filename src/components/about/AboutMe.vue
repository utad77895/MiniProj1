<script>
export default {
	setup() {
		return {
			bios: [
				{
					id: 1,
					bio:
						'Carlos André Martins Ferreira tenho 28 anos, resido na Localidade de Paraíso,Concelho de São Pedro do Sul, Distrito de Viseu.',
				},
				{
					id: 2,
					bio:
						'Conclui uma licenciatura em Audiologia pela ESTSP do Instituto Polítecnico do Porto. Tive uma experência profissional na área de reabilitação auditiva, que me fez mudar o rumo da minha carreira profissional. No percurso fiz uma formação em Java iniciei uma licenciatura em Engenharia Informática na UAB. Trabalhei 3 anos como fullstack em Web, fiz vários websites e plataformas na área do Turismo e sustentabilidade. Contactei com tecnologias como php,javascript,jquery,html,css,vue.js,laravel,mysql e Wordpress.',
				},
			],
		};
	},
};
</script>

<template>
	<div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
		<!-- Quem sou imagem perfil -->
		<div class="w-full sm:w-1/4 mb-7 sm:mb-0">
			<img
				src="@/assets/images/perfil.jpeg"
				class="rounded-xl w-96"
				alt=""
			/>
		</div>

		<!-- Descrição quem sou -->
		<div class="w-full sm:w-3/4 text-left">
			<p
				v-for="bio in bios"
				:key="bio.id"
				class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg"
			>
				{{ bio.bio }}
			</p>
		</div>
	</div>
</template>
