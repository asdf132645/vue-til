export default {
	data() {
		return {
			value: 2,
			title: '타이틀',
		};
	},
	created() {
		this.changeValue();
	},
	methods: {
		changeValue() {
			this.value++;
		},
	},
};
