export const fruitMixin = {
	data(){
		return {
			title: 'mixin title',
			fruits: ['Apple', 'Banana', 'Mango', 'Melon'],
			filterText: ''
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