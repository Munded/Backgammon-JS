describe('Game', function() {

	describe('initialising the board', function() {

		it('initialises with 24 spots on the board', function() {
			game = new Game
			expect(Object.keys(game.board).length).toEqual(24)
		})

		it('each spot is an array', function() {
			game = new Game
			expect(game.board[2]).toEqual([])
		})

	})
})