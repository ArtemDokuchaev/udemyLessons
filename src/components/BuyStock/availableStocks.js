const state = {
	availableStocks: [
		{ id: 1, name: 'BMW', price: 110 },
	    { id: 2, name: 'Google', price: 200 },
	    { id: 3, name: 'Apple', price: 250 },
	    { id: 4, name: 'Twitter', price: 30 }
    ]
};

const mutations = {
	newPrices: state => {
		state.availableStocks.forEach(element => {
			element.price = Math.floor((Math.random() * element.price + 1) + 20);
		})
	}
};

const actions = {
	newPrices: ({commit}) => {
		commit('newPrices');
	}
};

export default {
	state,
	mutations,
	actions
}
