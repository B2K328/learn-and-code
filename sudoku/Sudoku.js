//ce fichier contient le module class Sudoku
import SudokuCase from "./SudokuCase.js"
import SudokuCursor from "./SudokuCursor.js"
export default class Sudoku {
    constructor(grid) {
        //parcourir les lignes et colonnes
        this.grid=[]
//récupérer toutes les valeurs
        for (let ligneNumber=0; ligneNumber<9; ligneNumber+=1){
            const gridLine=[]
            for (let columNumber=0; columNumber<9; columNumber+=1){
                const cellula= new SudokuCase()
                const value=grid[ligneNumber][columNumber]
                //si la case a une valeur initiale,
                if (value!==""){
                    // indiquez le fait qu'elle ne puisse pas etre modifier
                    cellule.defineDefaultValue(value)
                }

                gridLine.push(cellula)

            }
            this.grid.push(gridLine)
        }

    }
    resolve(){
        //instancier le curseur
        const cursor = new SudokuCursor()
        do{
            // effectue les recheches
            //recuperer la valeur là ou se situe le curseur
            const cell=this.grid[cursor.line][cursor.column]
            //si la valuer de la cellule est initiale
            if(cell.isDefaultValue){
            // on ne fait rien

            }else{
                //récuperer la prochainevaleur à tester
                cell.nextValue()
            }
            //sinon ne rien faire

        }while (cursor.progress())
        //tant que tu peux progresser
    }
}