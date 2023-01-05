<script lang="ts">
	export let seat; // seat is an object
	export let seatNumber: string;
</script>

<div class="popover-content">
	<div class="header">
		<p>
			<strong>
				Seat: {seatNumber.toUpperCase()}
			</strong>
			🟠 $30
		</p>
		<hr class="solid" />
	</div>
	<h4>{seat.class}</h4>
	<div class="perks">
		<p>window</p>
		<p>the legroom is amazing you wont believe it it makes me so happy!</p>
	</div>
</div>

<style lang="postcss">
	.popover-content {
		display: flex;
		flex-direction: column;
		width: max-content;
		text-align: left;
		padding: 0.5rem;
		background-color: var(--color-gray-50);
	}

	.perks {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		text-align: left;
		max-width: 24ch;
	}

	hr.solid {
		border-top: 3px solid var(--color-primary-600);
	}
</style>
