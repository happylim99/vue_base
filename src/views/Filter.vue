<template>
	<div class="row">
		<div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3">
			<h1>Filters & Mixins</h1>
			<p>{{ text | toUppercase }}</p>
			<!-- global toLowercase define in main.js will filter the combination of properties before in this case 'text | toUppercase' -->
			<p>{{ text | toUppercase | toLowercase}}</p>
			<hr>
			<input v-model="filterText">
			<ul>
				<li v-for="(fruit, index) in filteredFruits" :key=index>{{ fruit }}</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	data(){
		return {
			text: 'Hello there',
			fruits: ['Apple', 'Banana', 'Mango', 'Melon'],
			filterText: ''
		}
	},

	filters: {
		toUppercase(value) {
			return value.toUpperCase()
		}
	},

	computed: {
		filteredFruits() {
			return this.fruits.filter((element) => {
				return element.match(this.filterText)
			})
		}
	}
}
</script>

<style scoped>

</style>