class Sphinx {
	constructor() {
		this.name = null;
		this.riddles = [];
	}

	collectRiddle(riddle) {
		this.riddles = [riddle];
		this.riddles.shift();
	}
}

module.exports = Sphinx;