<template>
		<div class="col-6">
			<div class="card bg-light border-primary">
				<div class="card-header border-primary">
					<h5>{{stock.name}}</h5>
					<small>(price: {{stock.price}})</small>
				</div>
				<div class="card-body">
					<div class="input-group input-group-md mb-3">
						<div class="input-group-append">
							<span class="input-group-text" id="inputGroup-sizing-sm">${{totalPrice}}</span>
						</div>
						<input
							type="number"
							class="form-control"
							aria-label="Small"
							aria-describedby="inputGroup-sizing-sm"
							v-model.number="quantity">
					</div>
					<button 
						class="btn btn-primary float-right" 
						@click="buyStock"
						:disabled="quantity <= 0 || !Number.isInteger(quantity) || totalPrice > funds">Buy</button>
				</div>
			</div>
		</div>
</template>

<script>
	export default {
		props: ['stock'],
		data() {
			return {
				quantity: 0
			}
		},
		methods: {
			buyStock() {
				if (this.quantity > 0 && this.totalPrice <= this.funds ) {
					const order = {
						id: this.stock.id,
						quantity: this.quantity
					}
					this.$store.dispatch('buyStock', order);
				} else {
					console.log("quantity must be more than 0 and fit your funds");
				}
			}
		},
		computed: {
			totalPrice() {
				return this.stock.price * this.quantity;
			},
			funds() {
				return this.$store.getters.funds;
			}
		},
	}
</script>

<style scoped>
	input{
		text-align: right;
	}
</style>
