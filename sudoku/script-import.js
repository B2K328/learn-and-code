const randomNumber=numberMax =>
    Math.trunc(Math.random()*numberMax+1)

const importDatas= async ()=>{
    //récupérer les données JSON
    //créer un objet à partir de donnée JSON
    const grids=await fetch("datas.json")
        .then(response=>{
           if (response.ok) {

               return response.json()
           }else{
               return Promise.reject("Something went wrong!")
           }
        })


    //choisir aléatoirement une grille dans la liste 
    const numberOfGrid= randomNumber(grids.length)
    const sudoku=grids[numberOfGrid-1]
    const grid = sudoku.grille
    console.log(grid)
    //parcourir les lignes et colones du tableau de tableau
    for (let ligneNumber=0; ligneNumber<9; ligneNumber+=1){
        for (let columNumber=0; columNumber<9; columNumber+=1){
            const value=grid[ligneNumber][columNumber]
        //pour chaque champ,
        //s'il y a une valeur,
            if (value){
            //rendre le champ texte non modifiable
                const identifiant = 'case'+ ligneNumber+'-'+ columNumber
                const input=document.getElementById(identifiant)
                input.readOnly=true;
                input.value=value
            }
        //si n'y a pas de valuer
        //ne rien faire
        }
    }

}
importDatas()
