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

	.app-border {
		border: 1px solid black;
		border-radius: none;
		padding: 30px;
		border-top: none;
	}	
	.slide-enter-active {
		animation: slide-in 300ms ease-out forwards;
	}
	.slide-leave-active {
		animation: slide-out 300ms ease-out forwards;
	}
	
	@keyframes slide-in {
		from {
			transform: translateY(-105%);
			/*opacity: 0;*/
		}
		to {
			transform: translateY(0);
			/*opacity: 1;*/
		}
	}
	@keyframes slide-out {
		from {
			transform: translateY(0);
			/*opacity: 1;*/
		}
		to {
			transform: translateY(-105%);
			/*opacity: 0;*/
		}
	}
</style>
