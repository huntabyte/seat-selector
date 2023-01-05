<script>
	import '../app.postcss';
</script>

<div class="container">
	<slot />
</div>

<style lang="postcss">
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 2rem 0;
		width: 100%;
		padding: 8rem 4rem;
	}
</style>
