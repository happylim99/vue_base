import * as types from '../types'

const state = {
	counter: 0
}

const getters = {
	/*
	doubleCounter: state => {
		return state.counter * 2
	},
	stringCounter: state => {
		return state.counter + 'clicks'
	}
	*/
	[types.DOUBLE_COUNTER]: state => {
		return state.counter * 2
	},
	[types.CLICK_COUNTER]: state => {
		return state.counter + 'clicks'
	}
	
}

const mutations = {
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
	}
}

const actions = {
	/*
	increment: context => {
		context.commit('increment')
	}
	*/
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
	}
}

export default {
	state,
	getters,
	mutations,
	actions
}