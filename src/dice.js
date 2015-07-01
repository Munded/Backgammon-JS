var Dice = function(){
	this.firstRoll = 0;
	this.secondRoll = 0;
}

Dice.prototype.roll = function() {
	this.firstRoll = 1 + Math.floor(Math.random() * 6);
	this.secondRoll = 1 + Math.floor(Math.random() * 6);
};