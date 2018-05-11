import Vue from 'vue'
export default {
	actions: {
		buyStock: ({commit, rootState}, payload) => {
			payload.price = rootState.availableStocks.availableStocks.find(element => element.id === payload.id).price;
			commit('buyStock', payload);
		},
		sellStock: ({commit, rootState}, payload) => {
			payload.price = rootState.availableStocks.availableStocks.find(element => element.id === payload.id).price;
			commit('sellStock', payload);
		},
		newPrices: ({ commit }) => {
			commit("newPrices");
		},
		loadData: ({commit}) => {
		Vue.http.get('data.json')
			.then(response => response.json())
			.then(data => {
				data = {
					myStocks: data.myStocks,
					availableStocks: data.availableStocks
				}
				if (data) {
					commit('setMyStocks', data.myStocks);
					commit('setAvailableStocks', data.availableStocks);
				}
			});
		},
		saveData: ({rootState}) => {
			const data = {
				myStocks: rootState.stocksManagement,
				availableStocks: rootState.availableStocks
			}
			console.log(rootState)
			Vue.http.put('data.json', data)
		}
	}
}