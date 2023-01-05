<script lang="ts">
	import { getSeats } from '$lib/data';
	import { Popover } from '$lib/components';

	const firstClassCols = ['A', 'C', 'D', 'F'];
	const mainCabinCols = ['A', 'B', 'C', 'D', 'E', 'F'];

	const { firstClassSeats, mainCabinSeats } = getSeats();
</script>

<div class="hangar">
	<div class="first-class">
		{#each firstClassCols as col}
			<div class="label">{col}</div>
			{#if col === firstClassCols[firstClassCols.length / 2 - 1]}
				<div />
			{/if}
		{/each}
		{#each firstClassSeats as seat, idx}
			<div class="seat">
				<div class="popover">
					<Popover
						{seat}
						seatNumber={`${Math.floor(seat.id / 4) + 1}${firstClassCols[
							idx % firstClassCols.length
						].toLowerCase()}`}
					/>
				</div>
			</div>
			{#if firstClassCols[idx % firstClassCols.length] === firstClassCols[firstClassCols.length / 2 - 1]}
				<div class="seat invisible">{Math.ceil(seat.id / 4)}</div>
			{/if}
		{/each}
	</div>
	<div class="main-cabin">
		{#each mainCabinCols as col}
			<div class="label">{col}</div>
			{#if col === mainCabinCols[mainCabinCols.length / 2 - 1]}
				<div />
			{/if}
		{/each}

		{#each mainCabinSeats as seat, idx}
			<div class="seat seat-main">
				<div class="popover">
					<Popover
						{seat}
						seatNumber={`${Math.floor(idx / 6) + 5}${mainCabinCols[
							idx % mainCabinCols.length
						].toLowerCase()}`}
					/>
				</div>
			</div>

			{#if mainCabinCols[idx % mainCabinCols.length] === mainCabinCols[mainCabinCols.length / 2 - 1]}
				<div class="seat invisible">
					{Math.floor(idx / mainCabinCols.length) + firstClassSeats.length / 4 + 1}
				</div>
			{/if}
		{/each}
	</div>
</div>

<style lang="postcss">
	.hangar {
		padding: 2rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: var(--color-gray-800);
		height: auto;
		gap: 1.5rem;
		border-radius: 0.5rem;
	}

	.first-class {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		gap: 1rem;
		text-align: center;
	}
	.main-cabin {
		display: grid;
		grid-template-columns: repeat(7, 1fr);
		gap: 1rem;
		text-align: center;
	}

	.seat {
		background-color: var(--color-secondary-500);
		height: 50px;
		width: 50px;
		border-radius: 0.25rem;
		position: relative;

		&.seat-main {
			background-color: var(--color-tertiary-500);
		}

		&:hover {
			& .popover {
				opacity: 1;
				transition: opacity 0.5s ease;
				z-index: 1;
				background-color: transparent;
			}
		}
	}

	.popover {
		position: absolute;
		top: -160px;
		left: -75px;
		color: var(--color-gray-900);
		border-radius: 0.25rem;
		opacity: 0;
		justify-content: center;
		align-items: center;
		z-index: -1;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 200px;
		height: 150px;
		background-color: transparent;
	}

	.invisible {
		background-color: var(--color-gray-800);
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
