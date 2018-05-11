<template>
	<div class="col-6">
		<div class="card bg-light border-success">
			<div class="card-header border-success">
				<h5>{{currentStock.name}}</h5>
				<small>price: {{currentStock.price}} (quantity: {{stock.quantity}})</small>
			</div>
			<div class="card-body">
				<div class="input-group input-group-md mb-3">
					<div class="input-group-append">
						<span class="input-group-text" id="inputGroup-sizing-sm">${{currentStock.price * quantity}}</span>
					</div>
					<input type="number" class="form-control quantity" aria-label="Small" aria-describedby="inputGroup-sizing-sm" v-model.number="quantity">
				</div>
				<button 
				class="btn btn-primary float-right" 
				@click="sellStock"
				:disabled="quantity <= 0 || !Number.isInteger(quantity) || quantity > stock.quantity">Sell</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  props: ["stock"],
  data() {
    return {
      quantity: 0,
    };
  },
  computed: {
	    currentStock() {
			let stock = this.$store.getters.availableStocks.find (
	        	element => element.id === this.stock.id
	      	);
			return stock;
	    }
  },
  methods: {
    sellStock() {
			if (this.quantity > 0 && this.quantity <= this.stock.quantity) {
				const payload = {
					id: this.stock.id,
					quantity: this.quantity
				}
				this.$store.dispatch("sellStock", payload);
			} else {
				console.log("quantity must be more than 0/less or equal " + this.stock.quantity);
			}
    },
		check() {
			// console.log(this.$store.state.availableStocks.availableStocks);
			// console.log(this.$store.state.availableStocks.availableStocks.find (
			// 	element => element.id === 2
			// ));
		}
  }
};
</script>

<style scoped>

	input{
		text-align: right;
	}
</style>
