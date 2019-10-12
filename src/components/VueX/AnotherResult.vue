<template>
	<div>
		<!-- <p>Another Counter is: {{ counter }}</p>
		<p>Number of clicks: {{ clicks }}</p> -->
		<p>Another Counter is: {{ doubleCounter }}</p>
		<p>Number of clicks: {{ stringCounter }}</p>
	</div>
</template>

<script>
// mapGetters is a vuex function
import { mapGetters } from 'vuex'
import * as types from '../../store/types'
    export default {
		// props: ['counter']
		/*
		computed: {
			counter() {
				// return this.$store.state.counter * 2
				return this.$store.getters.doubleCounter
			},
			clicks() {
				return this.$store.getters.stringCounter
			}
		}
		*/
		/*
		computed: mapGetters([
			'doubleCounter',
			'stringCounter'
		])
		*/
		computed: {
			aa() {
				alert(types)
			},
			/*
			...mapGetters([
				'doubleCounter',
				'stringCounter'
			])
			*/
			...mapGetters({
				doubleCounter: types.DOUBLE_COUNTER,
				stringCounter: types.CLICK_COUNTER
			})
		}

    }
</script>