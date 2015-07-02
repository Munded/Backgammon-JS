var Game = function() {
	this.board = {}
	this.boardCreation()
}

Game.prototype.boardCreation = function() {
	for(i=1; i <25; i++) {
		this.board[i] = []
	}
};
