<template>
    <div class="container">
    	<h1>Quotes added</h1>
    	<div class="progress-bar">
    		<div 
    			class="progress-bar"
                style="background-color: #4f63ff;" 
    			:style="{width: (currentQuotes/maxQuotes) * 100 + '%'}">
    			<template v-if="currentQuotes>0">{{currentQuotes}}/{{maxQuotes}}</template>
    		</div>
    	</div>
    </div>
</template>

<script>
    export default {
        props: ['currentQuotes', 'maxQuotes']
    }
</script>

<style scoped>
	.progress-bar {
		height: 25px;
		width: 80%;
        margin-bottom: 20px;
        overflow: hidden;
        border-radius: 4px;
        box-shadow: inset 0 1px 2px grey;
        text-align: center;
		background-color: #d6daff;
        transition: 500ms;
	}
</style>
