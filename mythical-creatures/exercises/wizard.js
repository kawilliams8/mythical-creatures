class Wizard {
	constructor(wizard) {
		this.name = wizard.name;
		this.bearded = wizard.bearded === undefined ? true : false;
		this.isRested = true;
		this.castCounter = 0;
	}

	incantation(spell) {
		return spell.toUpperCase();
	}

	cast() {
		this.castCounter++;
		if (this.castCounter >= 3) {
			this.isRested = false;
			return 'I SHALL NOT CAST!';
		}
		return "MAGIC BULLET";
	}
};

























































// class Wizard {
// 	constructor (wizObj) {
// 		this.name = wizObj.name;
// 		this.bearded = (wizObj.bearded === undefined) ? true : false;
// 		this.isRested = true;
// 		this.castCounter = 0;
// 	}
// 	incantation (thisSpell) {
// 		return thisSpell.toUpperCase();
// 	}
// 	cast () {
// 		this.castCounter++;
// 		(this.castCounter >= 3) ? this.isRested = false : this.isRested = true;
// 		return (this.castCounter >= 3) ? "I SHALL NOT CAST!" : "MAGIC BULLET";
// 		}
// 		// if (this.castCounter < 3) {
// 		// 	return "MAGIC BULLET";
// 		// } else {return "I SHALL NOT CAST!";

// }

module.exports = Wizard;

//I never could figure out why spell.toUpperCase() works for magic bullet, but not further down!