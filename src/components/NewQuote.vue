<template>
	<div class="row">
		<form>
			<div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3 form-group">
				<label>New quote</label>
				<textarea class="form-control" rows="3" v-model="newQuote"></textarea>
			</div>
			<div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3 form-group">
				<button class="btn btn-primary" @click.prevent="addQuote">Add</button>
			</div>
		</form>
	</div>
</template>

<script>
	export default {
		data: function() {
			return {
				newQuote: ''
			}
		},
		methods: {
			addQuote: function () {
				this.$emit('quoteAdded', this.newQuote);
				//console.log('quote: ' + this.newQuote + ' added');
				this.newQuote = '';
			}
		}
	}
	
</script>

<style scoped>
	button {
		background-color: #a0c0ff;
		border: 1px solid black;
		border-radius: 4px;
		margin-bottom: 25px;
	}
	.newQuote {
		height: 200px;
		width: 200px;
		margin: 50px auto;
	}
</style>