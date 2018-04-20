<template>
		<div class="col-6">
			<div class="card bg-light border-primary">
				<div class="card-header border-primary">
					<h5>{{stock.name}}</h5>
					<small>(price: {{stock.price}})</small>
				</div>
				<div class="card-body">
					<div class="input-group input-group-md mb-3">
						<input 
							type="number" 
							dir="rtl"
							class="form-control"
							aria-label="Small" 
							aria-describedby="inputGroup-sizing-sm"
							v-model="quantity">

						<div class="input-group-append">
							<span class="input-group-text" id="inputGroup-sizing-sm">${{quantity*stock.price}}</span>
						</div>
					</div>
					<button class="btn btn-primary float-right" @click="buyStock">Buy</button>
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
				const order = {
					id: this.stock.id,
					quantity: this.quantity
				}
				this.$store.dispatch('buyStock', order);
			}
		},
		computed: {

		}
	}
</script>

<style scoped>
	input{
		text-align: left;
	}
</style>