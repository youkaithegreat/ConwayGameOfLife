const { BLOCK_BOARD, BLINKER_BOARD, getNextGeneration, TOAD_BOARD, TOAD_BOARD_TWO, PULSAR_BOARD } = require('./game');

// If you want to use Jest for unit testing, add some tests to this file
describe('Game of Life - getNextGeneration', () => {
	it('a still life should not change across multiple generations', () => {
		const generationOne = BLOCK_BOARD;
		const generationTwo = getNextGeneration(generationOne);
		const generationThree = getNextGeneration(generationTwo);

		expect(generationOne).toEqual(generationTwo);
		expect(generationTwo).toEqual(generationThree);
		expect(generationThree).toEqual(BLOCK_BOARD);
	});
});

describe('Game of Life - getNextGeneration', () => {
	it('a two period blinker should change twice and be the same after two iterations', () => {
		const generationOne = BLINKER_BOARD;
		const generationTwo = getNextGeneration(generationOne);
		const generationThree = getNextGeneration(generationTwo);

		expect(generationOne).not.toEqual(generationTwo);
		expect(generationTwo).not.toEqual(generationThree);
		expect(generationThree).toEqual([
			[null, null, null, null, null],
			[null, null, 'alive', null, null],
			[null, null, 'alive', null, null],
			[null, null, 'alive', null, null],
			[null, null, null, null, null],
		]);
	});
});

describe('Game of Life - getNextGeneration', () => {
	it('a two period blinker should change after one generation', () => {
		const generationOne = BLINKER_BOARD;
		const generationTwo = getNextGeneration(generationOne);

		expect(generationOne).not.toEqual(generationTwo);
		console.log(generationTwo);
		expect(generationTwo).toEqual([
			[null, null, null, null, null],
			[null, null, null, null, null],
			[null, 'alive', 'alive', 'alive', null],
			[null, null, null, null, null],
			[null, null, null, null, null],
		]);
	});
});

describe('Game of Life - getNextGeneration', () => {
	it('a two period blinker should change after one generation', () => {
		const generationOne = BLINKER_BOARD;
		const generationTwo = getNextGeneration(generationOne);

		expect(generationOne).not.toEqual(generationTwo);
		console.log(generationTwo);
		expect(generationTwo).toEqual([
			[null, null, null, null, null],
			[null, null, null, null, null],
			[null, 'alive', 'alive', 'alive', null],
			[null, null, null, null, null],
			[null, null, null, null, null],
		]);
	});
});

describe('Game of Life - getNextGeneration', () => {
	it('2 Period Toad, First Gen Check', () => {
		const generationOne = TOAD_BOARD;
		const generationTwo = getNextGeneration(generationOne);
		expect(generationOne).not.toEqual(generationTwo);
		expect(generationTwo).toEqual(TOAD_BOARD_TWO);
	});
});

describe('Game of Life - getNextGeneration', () => {
	it('2 Period Toad, Second Gen Check', () => {
		const generationOne = TOAD_BOARD;
		const generationTwo = getNextGeneration(generationOne);
		const generationThree = getNextGeneration(generationTwo);
		expect(generationOne).not.toEqual(generationTwo);

		expect(generationThree).toEqual(TOAD_BOARD);
	});
});

describe('Game of Life - getNextGeneration', () => {
	it('3 Period Pulsar, 4th Gen Check', () => {
		const generationOne = PULSAR_BOARD;
		const generationTwo = getNextGeneration(generationOne);
		const generationThree = getNextGeneration(generationTwo);
		const generationFour = getNextGeneration(generationThree);
		expect(generationFour).toEqual(PULSAR_BOARD);
		// const generationFive = getNextGeneration(generationFour);
		// expect(generationOne).not.toEqual(generationTwo);
		// expect(generationFive).toEqual(PULSAR_BOARD);
	});
});
