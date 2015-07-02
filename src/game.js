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
	for(i=0;i<2;i++){
		this.board[1].push(new Piece('white'))
		this.board[24].push(new Piece('black'))
	}
	for(i=0;i<5;i++){
		this.board[12].push(new Piece('white'))
		this.board[13].push(new Piece('black'))
	}
	for(i=0;i<3;i++){
		this.board[17].push(new Piece('white'))
		this.board[8].push(new Piece('black'))
	}
	for(i=0;i<5;i++){
		this.board[19].push(new Piece('white'))
		this.board[6].push(new Piece('black'))
	}
};
