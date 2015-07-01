describe('Dice', function() {

	beforeEach(function() {
		dice = new Dice
	})

	it('initialises as an empty roll', function() {
		expect(dice.firstRoll).toEqual(0)
		expect(dice.secondRoll).toEqual(0)
	})

	describe('first dice roll', function() {
		it('is less than or equal to 6', function() {
			dice.roll()
			expect(dice.firstRoll <= 6).toBe(true)
			expect(dice.firstRoll).toBeLessThan(7)
		})

		it('is greater than or equal to 1', function() {
			dice.roll()
			expect(dice.firstRoll >= 1).toBe(true)
			expect(dice.firstRoll).toBeGreaterThan(1)
		})
	})

		describe('second dice roll', function() {
		it('is less than or equal to 6', function() {
			dice.roll()
			expect(dice.secondRoll <= 6).toBe(true)
			expect(dice.secondRoll).toBeLessThan(7)
		})

		it('is greater than or equal to 1', function() {
			dice.roll()
			expect(dice.secondRoll >= 1).toBe(true)
			expect(dice.secondRoll).toBeGreaterThan(1)
		})
	})
})