/* Conways Game of Life Function
 * With a given board of "Alive" cells and "Dead" or null cells return a new board after one iteration
 * Rule 1: Any Live Cell With 2 or 3 Live Neighbors Stays Alive
 * Rule 2: Any null/Dead cell with 3 Live Neighbors comes to Life
 *
 * Design Notes:
 * I chose to use 'alive' and null as a better way to represent semantically what was happening
 * I also chose to directly use a 2D array as it visually best represented Conway's Game of Life
 * Utilizing the provided input, I could have also generated the 2D array board with another function
 *
 * I used Jest for testing
 *
 * Also, the "null" can be removed and it can just be , , ,
 * However, for visual representation I kept it lik ethis. It makes a nice yellow/purple pattern!
 */

export const BLOCK_BOARD = [
	[null, null, null, null],
	[null, 'alive', 'alive', null],
	[null, 'alive', 'alive', null],
	[null, null, null, null],
];

export const BLINKER_BOARD = [
	[null, null, null, null, null],
	[null, null, 'alive', null, null],
	[null, null, 'alive', null, null],
	[null, null, 'alive', null, null],
	[null, null, null, null, null],
];

export const TOAD_BOARD = [
	[null, null, null, null, null, null],
	[null, null, null, null, null, null],
	[null, null, 'alive', 'alive', 'alive', null],
	[null, 'alive', 'alive', 'alive', null, null],
	[null, null, null, null, null, null],
	[null, null, null, null, null, null],
];

export const TOAD_BOARD_TWO = [
	[null, null, null, null, null, null],
	[null, null, null, 'alive', null, null],
	[null, 'alive', null, null, 'alive', null],
	[null, 'alive', null, null, 'alive', null],
	[null, null, 'alive', null, null, null],
	[null, null, null, null, null, null],
];

export const PULSAR_BOARD = [
	[null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
	[null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
	[null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
	[null, null, null, null, null, 'alive', 'alive', 'alive', null, null, null, 'alive', 'alive', 'alive', null, null, null, null, null, null],
	[null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
	[null, null, null, 'alive', null, null, null, null, 'alive', null, 'alive', null, null, null, null, 'alive', null, null, null, null],
	[null, null, null, 'alive', null, null, null, null, 'alive', null, 'alive', null, null, null, null, 'alive', null, null, null, null],
	[null, null, null, 'alive', null, null, null, null, 'alive', null, 'alive', null, null, null, null, 'alive', null, null, null, null],
	[null, null, null, null, null, 'alive', 'alive', 'alive', null, null, null, 'alive', 'alive', 'alive', null, null, null, null, null, null],
	[null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
	[null, null, null, null, null, 'alive', 'alive', 'alive', null, null, null, 'alive', 'alive', 'alive', null, null, null, null, null, null],
	[null, null, null, 'alive', null, null, null, null, 'alive', null, 'alive', null, null, null, null, 'alive', null, null, null, null],
	[null, null, null, 'alive', null, null, null, null, 'alive', null, 'alive', null, null, null, null, 'alive', null, null, null, null],
	[null, null, null, 'alive', null, null, null, null, 'alive', null, 'alive', null, null, null, null, 'alive', null, null, null, null],
	[null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
	[null, null, null, null, null, 'alive', 'alive', 'alive', null, null, null, 'alive', 'alive', 'alive', null, null, null, null, null, null],
	[null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
	[null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
	[null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
	[null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
	[null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
];

// Implement the Game of Life here to transform the inputBoard into the outputBoard!
export function getNextGeneration(inputBoard) {
	//In order to get a proper outputBoard I JSON stringified and parsed it so the pointers are different
	const outputBoard = JSON.parse(JSON.stringify(inputBoard));

	//Separate Function to Check Bounds and Check the specific spaces
	const checkCell = (x, y) => {
		const boardLength = inputBoard.length;
		const boardWidth = inputBoard[0].height;

		if (x < 0 || y < 0 || x > boardLength - 1 || y > boardWidth - 1) {
			return 0;
		}
		if (inputBoard[x][y] === 'alive') {
			return 1;
		}
		return 0;
	};

	//checks and calculates the spaces around it and return the count of live cells
	const countNeighbors = (xi, yj) => {
		let cellCount = 0;

		cellCount += checkCell(xi - 1, yj - 1);
		cellCount += checkCell(xi - 1, yj);
		cellCount += checkCell(xi - 1, yj + 1);
		cellCount += checkCell(xi + 1, yj - 1);
		cellCount += checkCell(xi + 1, yj);
		cellCount += checkCell(xi + 1, yj + 1);
		cellCount += checkCell(xi, yj - 1);
		cellCount += checkCell(xi, yj + 1);
		return cellCount;
	};

	//iterates through the board as a 2d array
	for (let i = 0; i < inputBoard.length; i++) {
		for (let j = 0; j < inputBoard[i].length; j++) {
			//calls the functions to count the live neighbors and returns it in
			const liveCellCounter = countNeighbors(i, j);

			if (inputBoard[i][j] === 'alive' && (liveCellCounter === 2 || liveCellCounter === 3)) {
				//Rule 1 in Conways Game of Life - Live Cells with 2 or 3 Live Neighbors Stays Alive
				//Otherwise, they die
				outputBoard[i][j] = 'alive';
			} else if (inputBoard[i][j] === null && liveCellCounter === 3) {
				//Rule 2 in Conways Game of Life - Dead Cells with 3 Live Neighbors Becomes Live
				outputBoard[i][j] = 'alive';
			} else {
				//sets any other cell to dead or null
				outputBoard[i][j] = null;
			}
		}
	}
	return outputBoard;
}
