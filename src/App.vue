<template>
    <div class="container">    		
    	<app-header></app-header>
    	<transition name="slide" mode="out-in">
			<router-view></router-view>	
    	</transition>
    </div>
</template>

<script>
	import Header from './components/Header.vue'
    export default {
    	components: {
    		appHeader: Header
    	}
    }
</script>

<style>
	h3{
		margin-top: 20px;
	}
	.slide-enter-active {
		animation: slide-in 250ms ease-out forwards;
	}
	.slide-leave-active {
		animation: slide-out 250ms ease-out forwards;
	}
	
	@keyframes slide-in {
		from {
			transform: translateY(-30px);
			opacity: 0;
		}
		to {
			transform: translateY(0);
			opacity: 1;
		}
	}
	@keyframes slide-out {
		from {
			transform: translateY(0);
			opacity: 1;
		}
		to {
			transform: translateY(-30px);
			opacity: 0;
		}
	}
</style>
