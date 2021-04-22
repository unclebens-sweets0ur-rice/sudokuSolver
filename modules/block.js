class Block{
    constructor(cells, number){
        this.cells = cells;
        this.number = number;
        this.scope = initializeScope(cells);
    }

    updateScope(){
        let tempScope = []
        this.cells.forEach(cell => {
            if(cell.value!=" ")tempScope.push(cell.value);
        });
        this.scope = tempScope.sort();
        }
}

function initializeScope(cells){
    let scope = []
    cells.forEach(cell => {
        if(cell.value!=" ")scope.push(cell.value);
    });
    return scope.sort();
}

module.exports = Block;