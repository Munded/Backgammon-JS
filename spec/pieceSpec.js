describe('Piece', function(){

	it('can initialize as white', function() {
		whitePiece = new Piece('white')
		expect(whitePiece.color).toEqual('white')
	})

	it('can initialize as black', function() {
		blackPiece = new Piece('black')
		expect(blackPiece.color).toEqual('black')
	})

	it('cannot initialize as anything else', function() {
		expect( function(){ new Piece('banana'); } ).toThrow(new Error('Invalid Piece'))
	})	
})