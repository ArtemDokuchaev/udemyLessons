<template>
    <div class="container">
    	<h1>Quotes added</h1>
    	<div class="progress-bar">
    		<div 
    			class="progress-bar"
    			:style="{width: (quoteCount/maxQuotes) * 100 + '%'}">
    			
    		</div>
    	</div>
    </div>
</template>

<script>
    export default {
        props: ['quoteCount', 'maxQuotes']
    }
</script>

<style>
	.progress-bar {
		height: 25px;
		width: 80%;
		border: 1px solid black;
	}
</style>
