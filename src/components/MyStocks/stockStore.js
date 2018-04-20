const state = {
	stocks: [{id:1, quantity:2}]
};

const getters = {
	getStocks: state => {
		return state.stocks;
	}
};

const mutations = {
	buyStock: (state, payload) => {
		state.stocks.push(payload);
		// console.log(payload)
	}
};

const actions = {
	buyStock: ({state, commit, rootState}, payload) => {
		console.log(rootState.availableStocks);
		commit('buyStock', payload);
	}
};

export default {
	state,
	getters,
	mutations,
	actions
}
