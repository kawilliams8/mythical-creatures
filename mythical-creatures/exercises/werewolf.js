class Werewolf {
	constructor (name, location) {
		this.name = name;
		this.location = location;
		this.human = true;
		this.wolf = false;
		this.hungry = false;
	}

	change () {
		this.human = !this.human;
		this.wolf = !this.wolf;
		this.hungry = !this.hungry;
	}

	eat (victim) {
		if (this.hungry && this.wolf) {
			victim.alive = false;
			this.change();
		}
		if (this.hungry && this.human) {
			victim.alive = true;
			this.hungry = true;
		}
		}

	//eat(victim) {
		// if (this.hungry) {
		// 	victim.alive = false;
		// 	this.change();
		// } else {
		// 	return;
		// }


	}
}

module.exports = Werewolf;































































// class Werewolf {
// 	constructor (name, location) {
// 		this.name = name;
// 		this.location = location;
// 		this.human = true;
// 		this.wolf = false;
// 		this.hungry = false;
// 	}

// 	change () {
// 		this.human = !this.human;
// 		this.wolf = !this.wolf;
// 		this.hungry = !this.hungry;
// 	}

// 	eat (victim) {
// 		victim.alive = false;
// 		this.hungry = false;
// 		this.human = true;
// 		this.wolf = false;

// 	}
// }
// module.exports = Werewolf;