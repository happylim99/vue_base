import Vue from 'vue'
import Vuex from 'vuex'
import counter from './modules/counter'
import * as mutations from './mutations'
import * as actions from './actions'
//import actions from './actions'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		//counter: 0,
		value: 0
	},

	getters: {
		/*
		doubleCounter: state => {
			return state.counter * 2
		},
		stringCounter: state => {
			return state.counter + 'clicks'
		},
		*/
		value: state => {
			return state.value
		}
	},

	mutations,
	actions,

	//mutations: {
		/*
		increment: state => {
			state.counter++
		},
		decrement: state => {
			state.counter--
		},
		increaseBy: (state, payload) => {
			state.counter += payload
		},
		decreaseBy: (state, payload) => {
			state.counter -= payload
		},
		*/
		/*
		updateValue: (state, payload) => {
			state.value = payload
		}
		*/
	//},

	//actions: {
		/*
		increment: context => {
			context.commit('increment')
		}
		*/
		/*
		actionsIncrement: ({ commit }) => {
			commit('increment')
		},
		actionsDecrement: ({ commit }) => {
			commit('decrement')
		},
		increaseBy: ({commit}, payload) => {
			commit('increaseBy', payload)
		},
		decreaseBy: ({commit}, payload) => {
			commit('decreaseBy', payload)
		},
		asynIncrement: ({commit}, payload) => {
			setTimeout(() => {
				commit('increaseBy', payload.by)
			}, payload.duration)
		},
		asynDecrement: ({commit}, payload) => {
			setTimeout(() => {
				commit('decreaseBy', payload.by)
			}, payload.duration)
		},
		*/
		/*
		updateValue({commit}, payload) {
			commit('updateValue', payload)
		}
		*/
	//},

	modules: {
		counter
	}
})

export {
	store
}