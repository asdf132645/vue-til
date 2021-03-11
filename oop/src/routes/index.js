import Vue from 'vue';
import VueRouter from 'vue-router';
// import store from '@/store/index';
Vue.use(VueRouter);

const router = new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '/',
			redirect: '/main',
		},
		{
			path: '/main',
			component: () => import('@/views/MainPage.vue'),
		},
		{
			path: '/login',
			component: () => import('@/views/LoginPage.vue'),
		},
		{
			path: '/signup',
			component: () => import('@/views/SignupPage.vue'),
		},
		{
			path: '*',
			component: () => import('@/views/NotFoundPage.vue'),
		},
	],
});

export default router;
