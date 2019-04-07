class Fairy {
	constructor(name, dresses) {
		this.name = name;
		this.dust = 10;
		this.clothes = dresses[''];
	}	

	receiveBelief() {
		this.dust++;
	}

	believe() {
		this.dust += 10;
	}
}

module.exports = Fairy;