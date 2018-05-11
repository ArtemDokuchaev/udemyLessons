<template>
	<nav class="navbar navbar-expand-lg navbar-light bg-light app-border">
		<router-link to="/" class="navbar-brand">
			<a>Stock trader</a>
		</router-link>

  <div class="navbar-collapse">
    <ul class="navbar-nav">

      <router-link to="/sellStocks" tag="li" class="nav-item">
        <a class="nav-link">My stocks</a>
      </router-link >
      <router-link to="/buyStocks" tag="li" class="nav-item">
        <a class="nav-link">Buy stocks</a>
      </router-link >

	</ul>

    <ul class="navbar-nav ml-auto">
    	<li class="nav-item"><a href="#" class="nav-link" @click="newPrices">End day</a></li>
	    <li class="nav-item dropdown">

	      <a class="nav-link dropdown-toggle"
	      href="#"
	      data-toggle="dropdown"
	      role="button"
	      aria-haspopup="true"
	      aria-expanded="false"
	      >Save & load</a>

	      <ul class="dropdown-menu">
	        <li class="dropdown-item" href="#" @click="saveData">Save data</li>
	        <li class="dropdown-item" href="#" @click="loadData">Load data</li>
	      </ul>
	    </li>
    </ul>
    <strong class="navbar-nav navbar-text">Funds: {{funds | currency}}</strong>
  </div>
</nav>
</template>

<script>
	export default {
		computed: {
			funds(){
				return this.$store.getters.funds;
			}
		},
		methods: {
			newPrices() {
				this.$store.dispatch('newPrices');
			},
			saveData() {
				this.$store.dispatch('saveData');
			},
			loadData() {
				this.$store.dispatch('loadData');
			}
		}
	}
</script>

<style scoped>
	.app-border{
		padding: 10px;
		z-index: 100;
	}
</style>