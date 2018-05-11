
const state = {
  availableStocks: [
    { id: 1, name: "BMW", price: 110 },
		{ id: 2, name: "Google", price: 200 },
    { id: 3, name: "Apple", price: 250 },
    { id: 4, name: "Twitter", price: 80 }
  ]
};
const getters = {
  availableStocks: state => {
    return state.availableStocks;
  }
}

const mutations = {
  newPrices: state => {
    state.availableStocks.forEach(stock => {
      // stock.price = Math.round( stock.price* (1 + Math.random() - 0.5));
      stock.price = Math.floor(1 + Math.random() * stock.price + 40 );
    });
  },
  setAvailableStocks: (state, payload) => {
    state.availableStocks = payload.availableStocks;
  }
};

export default {
  state,
  getters,
  mutations,
};
