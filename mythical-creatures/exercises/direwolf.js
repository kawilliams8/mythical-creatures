class Direwolf {
	constructor(name, home, size) {
		this.name = name;
		this.home = home || 'Beyond the Wall';
		this.size = size || 'Massive';
		this.starksToProtect = [];
		this.huntsWhiteWalkers = true;
	}

	protect(stark) {
		this.huntsWhiteWalkers = false;
		if (this.home !== stark.location) {
			this.starksToProtect = [];
		} else {
			this.starksToProtect.push(stark);
			stark.safe = true;
		}
		if (this.starksToProtect.length > 2) {
			this.starksToProtect.pop();
		}
	}

	leave(stark) {
		this.starksToProtect = [];
		stark.safe = false;
	}
}

module.exports = Direwolf;