import Home from './components/Home.vue'
import sellStocks from './components/SellStocks/SellStocks.vue'
import BuyStock from './components/BuyStock/BuyStocks.vue' 

export const routes = [
	{path: '/', component: Home},
	{path: '/sellStocks', component: sellStocks},
	{path: '/buyStocks', component: BuyStock}
];
	
