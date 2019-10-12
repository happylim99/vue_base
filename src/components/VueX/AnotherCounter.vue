<template>
    <div>
        <button class="btn btn-primary" @click="actionsIncrement">Increment</button>
        <button class="btn btn-primary" @click="actionsDecrement">Decrement</button>
		<button class="btn btn-primary" @click="increaseBy(10)">Increase by</button>
		<button class="btn btn-primary" @click="decreaseBy(10)">Decrease by</button>
		<button class="btn btn-primary" @click="asynIncrement({by: 50, duration: 2000})">Asyn Increment</button>
		<button class="btn btn-primary" @click="asynDecrement({by: 50, duration: 2000})">Asyn Decrement</button>
    </div>
</template>

<script>
//import { mapMutations } from 'vuex'
import { mapActions } from 'vuex'
    export default {
        methods: {
			increaseBy(by) {
				this.$store.dispatch('increaseBy', by)
			},
			/*
			decrement() {
				this.$store.dispatch('actionsDecrement')
			}
			*/
			
			...mapActions([
				'actionsIncrement',
				'actionsDecrement',
				'decreaseBy',
				'asynIncrement',
				'asynDecrement'
			])
			
			/*
			...mapMutations([
				'increment',
				'decrement'
			])
			*/
			/*
            increment() {
				// this.$emit('updated', 1);
				// this.$store.state.counter++
				this.$store.commit('increment')
            },
            decrement() {
				// this.$emit('updated', -1);
				// this.$store.state.counter--
				this.$store.commit('decrement')
			}
			*/
        }
    }
</script>