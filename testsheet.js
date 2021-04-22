const Cell = require('./modules/cell.js');
const Row = require('./modules/row.js');

let c1 = new Cell(7, 1);
let c2 = new Cell(8, 2);
let cells = [c1, c2];
let r1 = new Row(cells,1);
console.log(cells[1].value);
console.log(r1.cells[1].value);
r1.cells[1].value = 3;
console.log(cells[1].value);
console.log(r1.cells[1].value);