// import { sudokuIsValidUnsolved, sudokuIsValidSolved } from './modules/sudokuTest.js';
// import { createSudoku } from './modules/sudoku.js';

const Sudoku = require('./modules/sudoku');

const x = " "
const easy_data = [4, 1, x, x, 6, 5, x, x, 7, x, x, 6, x, x, 7, 4, 8, x, 2, x, 7, 4, 9, x, x, x, 6, x, 6, x, x, 7, x, 1, x, x, 3, x, 1, 5, x, x, x, 7, 2, x, 9, x, x, 4, 2, 3, x, 8, 1, x, 8, 6, x, x, x, 2, 9, x, 2, x, x, 1, 8, 6, 4, x, 6, x, x, 3, x, x, x, 1, x,];
const easy_loesung = [4, 1, 3, 8, 6, 5, 2, 9, 7, 9, 5, 6, 2, 3, 7, 4, 8, 1, 2, 8, 7, 4, 9, 1, 5, 3, 6, 8, 6, 2, 9, 7, 3, 1, 5, 4, 3, 4, 1, 5, 8, 6, 9, 7, 2, 7, 9, 5, 1, 4, 2, 3, 6, 8, 1, 3, 8, 6, 5, 4, 7, 2, 9, 5, 2, 9, 7, 1, 8, 6, 4, 3, 6, 7, 4, 3, 2, 9, 8, 1, 5];
const normal_data = [x, x, x, 6, 1, 3, x, x, x, x, 4, 8, 7, x, x, x, 9, x, x, x, 1, x, x, x, x, 6, x, 1, 9, x, x, x, x, x, x, x, x, 2, x, 9, 3, x, 4, x, x, x, x, x, 2, 5, x, 8, x, x, 3, x, 7, x, x, x, x, 5, x, x, x, 6, x, x, 9, 2, x, 3, 2, x, 9, x, 8, 4, x, x, x]
const hard_data = [x,x,5,x,x,x,x,7,3,x,x,4,x,x,6,x,x,x,x,x,1,x,2,5,x,x,4,2,x,x,x,x,x,x,x,x,5,x,x,8,x,x,4,x,x,3,x,x,1,x,x,5,9,x,x,8,x,x,9,x,x,x,x,x,x,x,x,x,x,x,8,7,x,9,x,3,1,x,x,x,x]

let sudoku = new Sudoku(hard_data);
sudoku.initialize();
// sudoku.print();
// sudoku.cells.forEach(cell => console.log(cell.index + " : "+ cell.value +" : " + cell.scope));

sudoku.solve();
// sudoku.cells.forEach(cell => console.log(cell.index + " : "+ cell.value +" : " + cell.scope));
// console.log("-----------------------------------------------")
// sudoku.print();

// sudoku.rows.forEach(row => console.log(row.scope))

// console.log(sudoku.blocks[1])

// document.getElementById("p").innerHTML = "Hello World";
