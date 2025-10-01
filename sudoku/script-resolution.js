
//importer le module class Sudoku
import Sudoku from './Sudoku'





const resolved =document.getElementById("button-resolved")
resolved.addEventListener("click", ()=>{
    const grid=[]
//récupérer toutes les valeurs
    for (let ligneNumber=0; ligneNumber<9; ligneNumber+=1){
        const gridLine=[]
        for (let columNumber=0; columNumber<9; columNumber+=1) {
            const identifiant = 'case'+ ligneNumber+'-'+ columNumber
            const input=document.getElementById(identifiant)

            // si la valeur est un champ de texte vide l'utilisateur n'a rien saisi
            const inputValue=input.value
            const value= inputValue===''//si inputValues===''
                ?''                                   // retourne un champ vide dans number
                :parseInt(inputValue,10)        //sinon (donc s'il y a une valeur dans l'inputValue) transforme inputValue en type number dans la variable number
            gridLine.push(value)
        }
        grid.push(gridLine)
    }

    const sudoku = new Sudoku(grid)
    sudoku.resolve()

})
