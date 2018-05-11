<template>
	<div class="app-border">
		<h1 v-if="show">My stock</h1>
		<h1 v-else>Empty</h1>
		<!-- <ul>
			<li v-for="stock in stocks">{{stock}}</li>
		</ul> -->
		<div class="row">
			<app-stock v-for="stock in stocks" :stock="stock"></app-stock>
		</div>
	</div>
</template>

<script>
import {mapGetters} from 'vuex';
import Stock from './Stock.vue'

export default {
	computed: {
		...mapGetters ({
			stocks:'stocks'
		}),
		show() {
			if (this.stocks.length > 0) {
				return true;
			}
		}
	},
	components: {
		appStock: Stock
	}
}
</script>
