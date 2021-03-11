<template>
	<div>
		<v-row>
			<DateTimePicker :label="'시작날짜'"></DateTimePicker>
			<DateTimePicker :label="'종료날짜'"></DateTimePicker>
		</v-row>
		<div>
			{{ value }}
			{{ title }}
			{{ titls }}
		</div>
	</div>
</template>

<script>
import DateTimePicker from '@/components/common/DateTimePicker';
import mixin from '@/mixins/ListMixin';

export default {
	data() {
		return {
			title: '병합처리',
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
};
</script>

<style></style>
