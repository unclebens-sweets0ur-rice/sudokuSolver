const Cell = require('./cell.js');
const Row = require('./row.js');
const Col = require('./col.js');
const Block = require('./block.js');

class Sudoku {

  constructor(data) {
    if(data.length != 81) throw new ParameterException("Ivalid input string");
    this.cells = createCells(data);
  }
  
  initialize(){
    this.rows = createRows(this.cells);
    this.cols = createCols(this.cells);
    this.blocks = createBlocks(this.cells);
  }

  solve(){
    let continu = true;
    let count = 1;
    while(continu){
      this.cells.forEach((cell) => {
        cell.updateScope(this.rows[cell.row-1].scope, this.cols[cell.col-1].scope, this.blocks[cell.field-1].scope);
        this.updateRCBScopes(cell.row, cell.col, cell.field);
      });
      console.log(count++ + ".ter Durchlauf");
      this.print();
      let emptyCells = 0;
      this.cells.forEach(cell => {if(cell.value==" ")emptyCells++});
      console.log(emptyCells);
      console.log("---------------------------------------------------")
      continu = !this.isSolved();
    }
    // this.rows.forEach(row => console.log(row.scope));
  }

  isSolved(){
    let solvedCount = 0;
    for(let i=0; i<9; i++){
      let rowScope=0;
      let colScope=0;
      let blockScope=0;
      for(let j=1; j<=9; j++){
        // console.log("inner loop: " + j);
        if(this.rows[i].scope.includes(j)) rowScope++;
        // console.log(this.rows[i].scope.includes(j));
        if(this.cols[i].scope.includes(j)) colScope++;
        if(this.blocks[i].scope.includes(j)) blockScope++;
      }
      // console.log("outer loop: " + i + " row: " + rowScope + " col: " + colScope + " block: " + blockScope)
      if(rowScope!=9||colScope!=9||blockScope!=9)return false;
      else solvedCount++;
    }
    if(solvedCount!=9)return false;
    else return true;
    
  }

  updateRCBScopes(r,c,b){
    this.rows[r-1].updateScope();
    this.cols[c-1].updateScope();
    this.blocks[b-1].updateScope();
  }


  print() {
    let rowPrint= [];
    this.cells.forEach((cell)=> {
      rowPrint.push("["+ cell.value +"] ")
      if(rowPrint.length==9){
        console.log(rowPrint.join(""));
        rowPrint=[];
      }
    })
  

    // for (let i = 0; i < 9; i++) {
    //   let rowPrint = "";
    //   this.rows.forEach(cell => {
    //     rowPrint += "[" + cell + "] ";
    //   });

    //   console.log(rowPrint);
    //   // let row = this.rows[i];
    //   // console.log('\n');
    // }
  }
}

function createCells(data){
  let cells = [];
    data.forEach((value, index) => {
      cells.push(new Cell(value, index+1))
    })
  return cells;
}

function createRows(cells){
  let rows = [];
    for(let i=1; i<=9; i++){
      let rowBlock = [];
      for(let j=(i-1)*9; j<i*9; j++){
        rowBlock.push(cells[j])
      }
      rows.push(new Row(rowBlock, i));
    }

  return rows;
}

function createCols(cells){
  let cols = [];
    for(let i=1; i<=9; i++){
      let colBlock = [];
      cells.forEach((cell) => {if(cell.col==i)colBlock.push(cell)})
      cols.push(new Col(colBlock, i));
    }
  return cols;
}

function createBlocks(cells){
  let blocks = [];
    for(let i=1; i<=9; i++){
      let blockBlock = [];
      cells.forEach((cell) => {if(cell.field==i)blockBlock.push(cell)})
      blocks.push(new Block(blockBlock, i));
    }
  return blocks;
}

function ParameterException(message){
  this.message = message;
  this.name = "ParameterException";
}

module.exports = Sudoku;


// const x = " "
// const data = [4, 1, x, x, 6, 5, x, x, 7, x, x, 6, x, x, 7, 4, 8, x, 2, x, 7, 4, 9, x, x, x, 6, x, 6, x, x, 7, x, 1, x, x, 3, x, 1, 5, x, x, x, 7, 2, x, 9, x, x, 4, 2, 3, x, 8, 1, x, 8, 6, x, x, x, 2, 9, x, 2, x, x, 1, 8, 6, 4, x, 6, x, x, 3, x, x, x, 1, x,];
// const loesung = [4, 1, 3, 8, 6, 5, 2, 9, 7, 9, 5, 6, 2, 3, 7, 4, 8, 1, 2, 8, 7, 4, 9, 1, 5, 3, 6, 8, 6, 2, 9, 7, 3, 1, 5, 4, 3, 4, 1, 5, 8, 6, 9, 7, 2, 7, 9, 5, 1, 4, 2, 3, 6, 8, 1, 3, 8, 6, 5, 4, 7, 2, 9, 5, 2, 9, 7, 1, 8, 6, 4, 3, 6, 7, 4, 3, 2, 9, 8, 1, 5];



// const cell = {
//   value: 0,
//   row: 0,
//   col: 0,
//   field: 0,
//   number: 0,
//   coordinate: 0,
// };

// const sudoku = {
//   cells: [],
//   rows: [[], [], [], [], [], [], [], [], []],
//   cols: [[], [], [], [], [], [], [], [], []],
//   fields: [[], [], [], [], [], [], [], [], []],
// };




// function createSudoku(data) {
//   let s = sudoku;
//   let count = 1;
//   for (let i = 1; i <= 9; i++) {
//     for (let j = 1; j <= 9; j++) {
//       let ce = createCell(data[count - 1], i, j, null, count);

//       // console.log(count + ":  ", c);
//       s.cells[count - 1] = ce;
//       count++;
//     }
//   }

//   return s;
// }

