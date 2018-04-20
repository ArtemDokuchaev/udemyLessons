import Home from './components/Home.vue'
import MyStock from './components/MyStocks/Mystock.vue'
import BuyStock from './components/BuyStock/BuyStock.vue' 

export const routes = [
	{path: '/', component: Home},
	{path: '/myStocks', component: MyStock},
	{path: '/buyStocks', component: BuyStock}
];
	
