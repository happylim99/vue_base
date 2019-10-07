<template>
	<div>
		<h2>{{ title }}</h2>
		<input type="text" v-model="filterText">
		<ul>
			<li v-for="(fruit, index) in filteredFruits" :key="index">{{ fruit }}</li>
		</ul>
		<button @click="addFruit(fruits)">Add Fruit</button>
	</div>
</template>

<script>
import { fruitMixin } from './fruitMixin.js'
export default {
	data() {
		return {
			title: 'Fruit list AA'
		}
	},

	created() {
		/*
		console.log(fruitMixin.fruits)
		fruitMixin.data().fruits.push('oren')
		console.log(fruitMixin.data().fruits)
		*/
	},

	methods: {
		addFruit(fruits) {
			console.log(fruits)
		}
	},

	mixins: [fruitMixin]
}
</script>

<style scoped>

</style>