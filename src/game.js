var Game = function() {
	this.board = {}
	this.boardCreation()
};

Game.prototype.boardCreation = function() {
	for(i=1; i <25; i++) {
		this.board[i] = []
	}
	this.piecePlacement()
};

Game.prototype.piecePlacement = function() {
	this.board[1].push(new Piece('white'))
};
