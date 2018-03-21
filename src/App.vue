<template>
    <div class="container">
    	<app-header></app-header>
        <app-new-quote></app-new-quote>
        <app-quote-grid :quotes="quotes"
                        :quoteDeleted="deleteQuote"></app-quote-grid>
    </div>
</template>

<script>
 	import Header from './components/Header.vue'
 	import NewQuote from './components/NewQuote.vue'
    import QuoteGrid from './components/QuoteGrid.vue'
    export default {
    	data: function() {
    		return {
    			quotes: [
    				'Default quote'
    				],
    			maxQuotes: 10
    		}
    	},
    	components: {
    		appHeader: Header,
            appNewQuote: NewQuote,
            appQuoteGrid: QuoteGrid,

    	},
        methods:{
            deleteQuote (index) {
                this.quotes.splice(index,1)
            }
        }
    }
</script>

<style>
</style>
