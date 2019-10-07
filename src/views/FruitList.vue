<template>
	<div class="row">
		<div class="col-xs-12">
			<h2>Mixins</h2>
		</div>
		<div class="col-xs-12">
			<FruitListA />
		</div>
		<div class="col-xs-12">
			<FruitListB />
		</div>
	</div>
</template>

<script>
import FruitListA from '../components/Fruit/FruitListA'
import FruitListB from '../components/Fruit/FruitListB'

export default {
	data(){
		return {
			text: 'Hello there',
		}
	},

	components: {
		FruitListA,
		FruitListB
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