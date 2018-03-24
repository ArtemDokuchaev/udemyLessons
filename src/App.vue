<template>
    <div class="container">
    	<app-header :currentQuotes="quotes.length" :maxQuotes="maxQuotes"></app-header>
        <app-new-quote @quoteAdded="addQuote"></app-new-quote>
        <app-quote-grid :quotes="quotes"
                        @quoteDeleted="deleteQuote"></app-quote-grid>
        <div class="row">
            <div class="col-sm-12 text-center">                
                <div class="alert alert-info">Info: click on the quote to delete it</div>
            </div>
        </div>
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
            addQuote (quote) {
                if(this.quotes.length >= this.maxQuotes){
                    alert('Too much quotes! Please, delete old one first')
                }
                else {
                    this.quotes.push(quote);
                }
            },
            deleteQuote (index) {
                this.quotes.splice(index,1);
            }
        }
    }
</script>

<style>
    body {
        background-color: #fcfdff;
    }
</style>
