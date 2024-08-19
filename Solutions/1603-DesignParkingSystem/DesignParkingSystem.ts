class ParkingSystem {
	availableParking: number[];

	constructor(big: number, medium: number, small: number) {
		this.availableParking = [big, medium, small];
	}

	addCar(carType: number): boolean {
		if (!this.availableParking[carType - 1]) return false;
		else {
			this.availableParking[carType - 1]--;
			return true;
		}
	}
}
