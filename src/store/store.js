import Vue from 'vue'
import Vuex from 'vuex'
import stocksManagement from '../components/SellStocks/stocksManagement'
import availableStocks from '../components/BuyStock/availableStocks'
import actions from './actions.js'

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
		stocksManagement,
		availableStocks,
		actions
	}
});
