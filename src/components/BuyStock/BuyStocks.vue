<template>
	<div class="app-border">
		<h1>Today's offer</h1>
		<div class="row">
			<app-stock v-for="stock in stocks" :stock="stock"></app-stock>
		</div>
		<!-- <p>R: {{stocks}}</p> -->
	</div>
</template>

<script>
	import Stock from './Stock.vue'
	import availableStocks from './availableStocks'
	import {mapGetters} from 'vuex'
	export default {
		computed: {
			stocks(){
				return availableStocks.state.availableStocks;
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
