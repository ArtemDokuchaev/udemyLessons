<template>
	<div class="col-6">
		<p>LOL:{{allStocks}}</p>
		<button @click="check">Check</button>
		<div class="card bg-light border-success">
			<div class="card-header border-success">
				<h5></h5>
				<small></small>
			</div>
			<div class="card-body">
				<div class="input-group input-group-md mb-3">
					<input type="number" dir="rtl" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" v-model="quantity">
					<div class="input-group-append">
						<span class="input-group-text" id="inputGroup-sizing-sm">${{stock.price * quantity}}</span>
					</div>
				</div>
				<button class="btn btn-primary float-right" @click="sellStock">Sell</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  props: ["stock"],
  data() {
    return {
      quantity: 0
    };
  },
  computed: {
	    // allStocks() {
			// 	console.log(this.$store.availableStocks.find (
	    //     element => element.id === 2
	    //   ));
			// 	let lol = this.$store.availableStocks.find (
	    //     element => element.id === 2
	    //   );
	    // }
  },
  methods: {
    sellStock() {
      this.$store.dispatch("sellStock");
    },
		check() {
			console.log(this.$store.value);
		}
  }
};
</script>

<style scoped>
</style>
