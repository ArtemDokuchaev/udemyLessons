const state = {
	funds: 1000,
	stocks: []
};

const getters = {
	funds: state => {
		return state.funds;
	},
	stocks: state => {
		return state.stocks;
	}
};

const mutations = {
	setMyStocks: (state, payload) => {
		state.funds = payload.funds;
		if(payload.stocks) {
			state.stocks = payload.stocks;
		}
		else {
			state.stocks = [];
		}
	},
	buyStock: (state, payload, price) => {
		let boughtStock = state.stocks.find( element =>
			element.id === payload.id
		);
		let totalPrice = payload.price * payload.quantity;

		if (boughtStock) {

			state.funds -= totalPrice;
			boughtStock.quantity += payload.quantity;

		} else {

			state.funds -= totalPrice;
			console.log('first push');
			// delete payload.price;
			state.stocks.push(payload);

		}
	},
	sellStock: (state, payload) => {
		let soldStock = state.stocks.find( element =>
			element.id === payload.id
		);
		let totalPrice = payload.price * payload.quantity;

		if (soldStock.quantity === payload.quantity) {
			state.stocks.splice(state.stocks.indexOf(soldStock),1);
			state.funds += totalPrice;
		} else {
			soldStock.quantity -= payload.quantity
			state.funds += totalPrice;
		}

	}
};
export default {
	state,
	getters,
	mutations,
}
