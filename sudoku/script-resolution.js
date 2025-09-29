class SudokuCursor{
    constructor(){
        this.line=0
        this.column=0
        this.step='advance'
    }
    progress(){

    }
}




const resolved =document.getElementById("button-resolved")
resolved.addEventListener("click", ()=>{

const cursor=new SudokuCursor
cursor.progress()
cursor.step='advance'
cursor.step='regress'
console.log(cursor.line)// afficher la position du curseur sur la line
console.log(cursor.column)//afficher la position du curseur sur colonne

})