class Cell {

    constructor(value, index) {
        this.scope = [value];
        this.value = value;
        this.index = index;
        this.row = Math.ceil(index/9);
        this.col = index-(Math.ceil(index/9)-1)*9;
        this.field  = getField(index);
        // this.coordinate = Number(row + "" + col);
    }

    updateScope(rowScope, colsScope, blockScope){
        if(this.scope[0]==" ")this.scope=[1,2,3,4,5,6,7,8,9];
        if(this.scope.length!=1){
            let newscope=[];
            for(let i=1; i<=9; i++){
                if(!rowScope.includes(i)&&!colsScope.includes(i)&&!blockScope.includes(i))
                    newscope.push(i);
            }
            this.scope=newscope;
        }
        if(this.scope.length==1)this.value=this.scope[0];
        // console.log(this.index + " : " + this.value + " : " + this.scope + " : " + this.scope.length);
    }

}

function getField(index){
    let fieldval;
    let r = Math.ceil(index/9);
    let c = index-(Math.ceil(index/9)-1)*9;
    fieldval = (Math.ceil(r/3)-1)*3 + Math.ceil(c/3);

    return fieldval;
}
module.exports = Cell;