<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Vuex</h1>
                <!-- <app-result :counter="counter"></app-result> -->
				<app-result />
				<app-another-result />
                <hr>
                <!-- <app-counter @updated="counter += $event"></app-counter> -->
				<app-counter />
				<app-another-counter />
				<hr>
				<!-- 2 ways binding 1 -->
				<!-- <input type="text" :value="theValue" @input="updateValue"> -->
				<input type="text" v-model="theValue">
				<p>{{ theValue }}</p>
            </div>
        </div>
    </div>
</template>

<script>
	import Counter from '../components/VueX/Counter.vue'
	import AnotherCounter from '../components/VueX/AnotherCounter.vue'
	import Result from '../components/VueX/Result.vue'
	import AnotherResult from '../components/VueX/AnotherResult.vue'

    export default {
		/*
        data() {
            return {
                counter: 0
            }
		},
		*/

		//2 way binding 1
		/*
		computed: {
			theValue() {
				return this.$store.getters.value
			}
		},
		*/

		//the below is rarely use, just to show how to use v-model without specify the event call method
		computed: {
			theValue: {
				get() {
					return this.$store.getters.value
				},
				set(value) {
					this.$store.dispatch('updateValue', value)
					//this.$store.dispatch('aa', value)
				}
			}
		},

		methods: {
			updateValue(event) {
				this.$store.dispatch('updateValue', event.target.value)
			}
		},

        components: {
			appCounter: Counter,
			appAnotherCounter: AnotherCounter,
			appResult: Result,
			appAnotherResult: AnotherResult
        }
    }
</script>

