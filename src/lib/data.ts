export const getSeats = () => {
	const firstClassSeats = []
	const mainCabinSeats = []

	for (let i = 0; i < 16; i++) {
		firstClassSeats.push({
			id: i,
			class: "First Class",
		})
	}

	for (let i = 16; i < 172; i++) {
		mainCabinSeats.push({
			id: i,
			class: "Main Cabin",
		})
	}

	return {
		firstClassSeats,
		mainCabinSeats,
	}
}
