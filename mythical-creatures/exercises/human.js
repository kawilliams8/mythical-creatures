class Human {
	constructor() {
		this.name = 'Jane';
		this.encounterCounter = 0;
	}

	noticesOgre(ogre) {
		if (this.encounterCounter % 3 == 0) {
			return true;
		} else {
			return false;
		}
	}
}

module.exports = Human;