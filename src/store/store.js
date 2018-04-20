import Vue from 'vue'
import Vuex from 'vuex'
import stockStore from '../components/MyStocks/stockStore'
import availableStocks from '../components/BuyStock/availableStocks'

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		value: 5
	},
	getters: {
		getValue: state =>{
			return state.value;
		}
	},
	modules: {
		stockStore,
		availableStocks
	}
});