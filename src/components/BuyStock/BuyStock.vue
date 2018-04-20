<template>
	<div>
		<h3>Today's offer</h3>
		<div class="row">
			<app-stock v-for="stock in stocks" :stock="stock"></app-stock>
		</div>
		<p>R: {{stocks}}</p>
	</div>
</template>

<script>
	import Stock from './Stock.vue'
	import availableStocks from './availableStocks'
	import {mapGetters} from 'vuex'
	export default {
		computed: {
			...mapGetters ({
				stocks:'getStocks'
			}),
			stocks(){
				return availableStocks.state.availableStocks;
			},
			rootState() {
				return this.$store.getters.getStocks;
			}
		},
		components: {
			appStock: Stock
		}
	}
</script>

<style>
	.row {
		margin-top: 20px;
	}
	.col-6 {
		margin-top: 10px;
	}
</style>
