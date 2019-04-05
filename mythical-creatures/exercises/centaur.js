class Centaur {
	constructor (name, breed) {
		this.name = name;
		this.breed = breed;
		this.cranky = false;
		this.standing = true;
		this.layingDown = false;
		this.sleep
		this.runShootCounter = 0;

	}

	shoot() {
		this.runShootCounter++;
		if (this.runShootCounter > 2) {
			this.cranky = true;
		}
		if (this.cranky || this.layingDown) {
			return 'NO!';
		}
		return 'Twang!!!';
	}

	run() {
		this.runShootCounter++;
		if (this.runShootCounter > 2) {
			this.cranky = true;
			return 'NO!';
		}
		if (this.layingDown) {
			return 'NO!';
		}
		return 'Clop clop clop clop!!!';
	}

	sleep() {
		if (this.standing) {
			return 'NO!';
		}
		if (!this.standing) {
			return 'ZZZZ';
		}
		this.cranky = false;
	}

	layDown() {
		this.standing = false;
		this.layingDown = true;
		this.cranky = false;
		this.runShootCounter = 0;
	}

	standUp() {
		this.standing = true;
		this.layingDown = false;
	}

	drinkPotion() {
		console.log(this);
		if (this.layingDown) {
			return 'Not while I\'m laying down!';
		} else {
			this.cranky = !this.cranky;
		}

		}


}	

module.exports = Centaur;