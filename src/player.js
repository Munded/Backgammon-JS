var Player = function(colour) {
	if(colour == 'black' || colour == 'white') {
		this.colour = colour 
	} else {
		throw new Error("Invalid Player")
	}
	this.dice = new Dice
};