describe('Game', function() {
	beforeEach(function() {
		game = new Game
	})

	describe('initialising the board', function() {

		it('initialises with 24 spots on the board', function() {
			expect(Object.keys(game.board).length).toEqual(24)
		})

		it('each spot is an array', function() {
			expect(game.board[2]).toEqual([])
		})

		describe('placing white pieces', function() {

			it('2 white pieces in (1)', function(){
				expect(game.board[1].length).toEqual(2)
				expect(game.board[1][0].colour).toEqual("white")
			})

			it('5 white pieces in (12)', function(){
				expect(game.board[12].length).toEqual(5)
				expect(game.board[12][0].colour).toEqual("white")
			})

			it('3 white pieces in (17)', function(){			
				expect(game.board[17].length).toEqual(3)
				expect(game.board[17][0].colour).toEqual("white")
			})

			it('5 white pieces in (19)', function(){	
				expect(game.board[19].length).toEqual(5)
				expect(game.board[19][0].colour).toEqual("white")
			})
		})

	})
})