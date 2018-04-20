<template>
	<div>
		<h3 v-if="show">My stock</h3>
		<h3 v-else>Empty</h3>
		<ul>
			<li v-for="stock in stocks">{{stock}}</li>
		</ul>
		<div class="row">
			<app-stock v-for="stock in stocks" :stock="stock"></app-stock>
		</div>
		<p>Q: {{quantity}}</p>
	</div>
</template>

<script>
import {mapGetters} from 'vuex';
import Stock from './Stock.vue'

export default {
	data() {
		return {
			show: false
		}
	},
	computed: {
		...mapGetters ({
			stocks:'getStocks'
		}),
		quantity() {
			return this.$store.state.availableStocks;
		}
	},
	components: {
		appStock: Stock
	}
}
</script>
