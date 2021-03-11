<template>
	<div class="app">
		<app-header></app-header>
		<div class="app-contents">
			<router-view></router-view>
		</div>
		<app-footer></app-footer>
	</div>
</template>

<script>
import AppHeader from './components/common/AppHeader.vue';
import AppFooter from './components/common/AppFooter.vue';

export default {
	components: {
		AppHeader,
		// eslint-disable-next-line vue/no-unused-components
		AppFooter,
	},
};
</script>

<style>
@import './assets/css/reset.css';
</style>
