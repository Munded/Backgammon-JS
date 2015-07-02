describe('Player', function() {

	describe('initialises with a colour', function() {
		it('can be white', function() {
			player1 = new Player('white')
			expect(player1.colour).toEqual('white')
		});

		it('can be black', function() {
			player2 = new Player('black')
			expect(player2.colour).toEqual('black')
		});

		it('cannot be anything else', function() {
			expect( function() { new Player('banana'); } ).toThrow(new Error('Invalid Player'))
		});
	});

});