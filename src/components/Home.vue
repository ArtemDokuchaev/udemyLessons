<template>
	<div class="app-border">
		<h1>Home</h1>
		<p>You can Buy stocks, sell them at My stocks</p>
		<p>Also, you can save\load your progress</p>
		<hr>
		<h3>Your funds: ${{funds}}</h3>
	</div>
</template>

<script>
	export default {
		computed: {
			funds() {
				return this.$store.state.stocksManagement.funds;
			}
		}
	}
</script>
