class Werewolf {
	constructor (name, location, victim) {
		this.name = name;
		this.location = location;
		this.human = true;
		this.wolf = false;
		this.hungry = false;
	}

	change() {
		this.human = !this.human;
		this.wolf = !this.wolf;
		this.hungry = !this.hungry;
	}

	eat(victim) {
		if (this.human === true) {
			victim.alive = true;
		}
		if (this.human === false) {
			victim.alive = false;
		}
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