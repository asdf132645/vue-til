<template>
	<div>
		<main-ul :titls="ppros"></main-ul>
	</div>
</template>

<script>
import MainUl from '@/components/main/MainUl.vue';
export default {
	components: {
		MainUl,
	},
	data() {
		return {
			ppp: 's',
		};
	},
	computed: {
		ppros() {
			return this.$store.state.ppo;
		},
	},
};
</script>

<style></style>
