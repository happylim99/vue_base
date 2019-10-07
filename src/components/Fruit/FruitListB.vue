<template>
	<div>
		<h2>{{ title }}</h2>
		<input type="text" v-model="filterText">
		<ul>
			<li v-for="(fruit, index) in filteredFruits" :key="index">{{ fruit }}</li>
		</ul>
	</div>
</template>

<script>
import { fruitMixin } from './fruitMixin.js'
export default {
	data() {
		return {
			title: 'Fruit list BB'
		}
	},

	mixins: [fruitMixin]
}
</script>

<style scoped>

</style>