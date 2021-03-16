<template>
	<div>
		<main-ul :titls="ppros"></main-ul>

		<div>
			{{ count }}
			{{ msg }}
			{{ kko }}
		</div>
		<div>
			<input type="text" v-model="search" placeholder="Search title.." />
			<label>Search title:</label>
		</div>
		<div class="card" v-for="post in filteredList" :key="post">
			<a v-bind:href="post.link" target="_blank">
				<div :class="post.txt">{{ post.txt }}</div>
				<small>posted by: {{ post.author }}</small>
				{{ post.title }}
			</a>
		</div>
	</div>
</template>

<script>
class Post {
	constructor(title, link, author, txt) {
		this.title = title;
		this.link = link;
		this.author = author;
		this.txt = txt;
	}
}

import MainUl from '@/components/main/MainUl.vue';
import EventBus from '@/utils/EventBus';
export default {
	components: {
		MainUl,
	},
	data() {
		return {
			ppp: 's',
			msg: '',
			kko: '',
			count: 0,
			search: '',
			postList: [
				new Post('Vue.js', 'https://vuejs.org/', 'Chris', 'vue'),
				new Post(
					'React.js',
					'https://facebook.github.io/react/',
					'Tim',
					'React',
				),
				new Post('Angular.js', 'https://angularjs.org/', 'Sam', 'Angular'),
				new Post('Ember.js', 'http://emberjs.com/', 'Rachel', 'Ember'),
				new Post('Meteor.js', 'https://www.meteor.com/', 'Chris', 'Meteor'),
				new Post('Aurelia', 'http://aurelia.io/', 'Tim', 'Aurelia'),
				new Post('Node.js', 'https://nodejs.org/en/', 'A. A. Ron', 'Node'),
				new Post('Pusher', 'https://pusher.com/', 'Alex', 'Pusher'),
				new Post('Feathers.js', 'http://feathersjs.com/', 'Chuck', 'Feathers'),
			],
		};
	},
	computed: {
		ppros() {
			return this.$store.state.ppo;
		},
		filteredList() {
			return this.postList.filter(post => {
				return post.title.toLowerCase().includes(this.search.toLowerCase());
			});
		},
	},
	created() {
		EventBus.$on('busEventName', (insu, insu2) => {
			this.msg = insu;
			this.kko = insu2;
			this.count++;
			console.log(this.count);
		});
	},
	beforeDestroy() {
		EventBus.$off('busEventName');
	},
};
</script>

<style></style>
