<template>
	<div>
		<v-row>
			<DateTimePicker :label="'시작날짜'"></DateTimePicker>
			<DateTimePicker :label="'종료날짜'"></DateTimePicker>
		</v-row>
		<div :class="classObject">
			{{ value }}
			{{ title }}
			{{ titls }}
		</div>
		<div>
			<img src="@/assets/images/logo.png" />
			<form v-on:submit="onSubmitForm">
				<input type="text" v-model="id" />
				<input type="text" v-model="pass" />
				<button>로그인</button>
			</form>
		</div>
		<div>
			<table>
				<tr>
					<th><input type="checkbox" v-model="selectAll" /></th>
					<th align="left">Name</th>
				</tr>
				<tr v-for="user in users" :key="user">
					<td>
						<input type="checkbox" v-model="selected" :value="user.id" number />
					</td>
					<td>{{ user.name }}</td>
				</tr>
			</table>
		</div>
		<div>
			<ul>
				<li v-for="brandName in brandNames" :key="brandName"></li>
			</ul>
		</div>
		<div>
			<button v-on:click="clickBtn">HelloWorld</button>
		</div>
		<div></div>
	</div>
</template>

<script>
import DateTimePicker from '@/components/common/DateTimePicker';
import mixin from '@/mixins/ListMixin';
import { brandName } from '@/api/brandName';
import EventBus from '@/utils/EventBus';

export default {
	data() {
		return {
			brandNames: [],
			title: '병합처리',
			classObject: {
				active: false,
				'text-danger': true,
			},
			id: '',
			pass: '',
			users: [
				{ id: '1', name: 'Shad Jast', email: 'pfeffer.matt@yahoo.com' },
				{ id: '2', name: 'Duane Metz', email: 'mohammad.ferry@yahoo.com' },
				{ id: '3', name: 'Myah Kris', email: 'evolkman@hotmail.com' },
				{ id: '4', name: 'Dr. Kamron Wunsch', email: 'lenora95@leannon.com' },
			],
			selected: [],
		};
	},
	props: {
		titls: {
			type: String,
			required: true,
		},
	},
	components: {
		DateTimePicker,
	},
	mixins: [mixin],
	methods: {
		// 버튼 실행시 실행할 함수
		onSubmitForm(e) {
			// form의 새로 고침 막기
			e.preventDefault();
			console.log('id =' + this.id);
			console.log('pass = ' + this.pass);
		},
		async fetchData() {
			const { data } = await brandName();
			this.brandNames = data.email;
		},
		clickBtn() {
			EventBus.$emit('busEventName', '넘기는 인자값', '넘기는 인자값2');
		},
	},
	computed: {
		selectAll: {
			get: function() {
				return this.users ? this.selected.length == this.users.length : false;
			},
			set: function(value) {
				var selected = [];

				if (value) {
					this.users.forEach(function(user) {
						selected.push(user.id);
					});
				}

				this.selected = selected;
			},
		},
	},
	created() {
		this.fetchData();
	},
};
</script>

<style></style>
