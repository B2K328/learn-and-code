const addError=(line,column)=>{
    const input =document.getElementById(`case${line}-${column}`)
    input.classList.add('invalid')
    input.addEventListener('input',()=>{
        input.classList.remove('invalid')
    },{once:true})
}

// la fonction verified
function verified(){
    //Récupérer tous les inputs de la page
    const listInput = document.querySelectorAll("input")

    //Enlever toutes les classes invalides
    for (const input of listInput){
        input.classList.remove("invalid")
    }



    //Vérifié que le nombre saisi est bien un nombre de 1 à 9.
    //Vérifié si le champ est valide
    for (const input of listInput){
    // pour chaque input, on vérifie si le champ est valide
        const validity = input.checkValidity()
        //si le champ est invalide, alors on arrête le programme
        if (!validity){
            // on arrête tout
            return
        }
    }


    const sudoku=[]
    //récupérer toutes les valeurs
    for (let ligneNumber=0; ligneNumber<9; ligneNumber+=1){
        const sudokuLine=[]
        for (let columNumber=0; columNumber<9; columNumber+=1) {
            const identifiant = 'case'+ ligneNumber+'-'+ columNumber
            const input=document.getElementById(identifiant)

            // si la valeur est un champ de texte vide l'utilisateur n'a rien saisi
            const inputValue=input.value
            const value= inputValue===''//si inputValues===''
                ?''                                   // retourne un champ vide dans number
                :parseInt(inputValue,10)        //sinon (donc s'il y a une valeur dans l'inputValue) transforme inputValue en type number dans la variable number
            sudokuLine.push(value)
        }
        sudoku.push(sudokuLine)
    }

    // verifier qu'il n'ait pas de doublon dans les lignes
    //cette boucle parcours les lignes
    for (let ligneNumber=0; ligneNumber<9; ligneNumber+=1){
        // Cette boucle parcours les elements de lignes.
        //Je déclare une list set pour nous permettre de savoir si les valeurs sont deja présent ou pas dans et les ajouter pour pouvoir verifier.
        //(la liste Set est un objet)
        const list=new Set()
        for (let columNumber=0; columNumber<9; columNumber+=1){
            const value=sudoku[ligneNumber][columNumber]

            if (value===''){

            }
            else{
                const valueExist=list.has(value)
                if (valueExist){
                    //vérifier si l'élément est deja present dans la liste
                    console.log(`erreur doublon ${ligneNumber}-${columNumber}`)
                    // ajouter une classe d'erreur au champ
                    addError(ligneNumber, columNumber)
                } else{
                    //ajouter l'élément à la liste
                    list.add(value)
                }
            }

            
        }
    }


    // verifier qu'il n'ait pas de doublon dans les colones
    //cette boucle parcours les colones
    for (let columNumber=0; columNumber<9; columNumber+=1){
        // Cette boucle parcours les elements de lignes.
        //Je déclare une list set pour nous permettre de savoir si les valeurs sont deja présent ou pas dans et les ajouter pour pouvoir verifier.
        //(la liste Set est un objet)
        const list=new Set()
        for (let ligneNumber=0; ligneNumber<9; ligneNumber+=1){
            const value=sudoku[ligneNumber][columNumber]

            if (value===''){

            }
            else{
                const valueExist=list.has(value)
                if (valueExist){
                    //vérifier si l'élément est deja present dans la liste
                    console.log(`erreur doublon ${ligneNumber}-${columNumber}`)
                    // ajouter une classe d'erreur au champ
                  addError(ligneNumber, columNumber)
                } else{
                    //ajouter l'élément à la liste
                    list.add(value)
                }
            }


        }
    }
    //la prochaine étape consiste à verifier les values par carrés
    //On commence par mettre les indice composant chaque carré sur le plateau
    //indice de carré
    const squares=[
        [
            [0,0],[0,1],[0,2],
            [1,0],[1,1],[1,2],
            [2,0],[2,1],[2,2]

        ],
        [
            [0,3],[0,4],[0,5],
            [1,3],[1,4],[1,5],
            [2,3],[2,4],[2,5]

        ],
        [
            [0,6],[0,7],[0,8],
            [1,6],[1,7],[1,8],
            [2,6],[2,7],[2,8]

        ],
        [
            [3,0],[3,1],[3,2],
            [4,0],[4,1],[4,2],
            [5,0],[5,1],[5,2]

        ],
        [
            [3,3],[3,4],[3,5],
            [4,3],[4,4],[4,5],
            [5,3],[5,4],[5,5]

        ], [
            [3,6],[3,7],[3,8],
            [4,6],[4,7],[4,8],
            [5,6],[5,7],[5,8]

        ],
        [
            [6,0],[6,1],[6,2],
            [7,0],[7,1],[7,2],
            [8,0],[8,1],[8,2]

        ],
        [
            [6,3],[6,4],[6,5],
            [7,3],[7,4],[7,5],
            [8,3],[8,4],[8,5]

        ],
        [
            [6,6],[6,7],[6,8],
            [7,6],[7,7],[7,8],
            [8,6],[8,7],[8,8]

        ]

    ]
    //parcourir les carrés
    for (const square of squares){
        const list=new Set()
    //por chaque carré
        for (const element of square){
            const ligneNumber=element[0]
            const columNumber=element[1]
            const value=sudoku[ligneNumber][columNumber]

            if (value===''){

            }
            else{
                const valueExist=list.has(value)
                if (valueExist){
                    //vérifier si l'élément est deja present dans la liste
                    console.log(`erreur doublon ${ligneNumber}-${columNumber}`)
                    addError(ligneNumber, columNumber)
                } else{
                    //ajouter l'élément à la liste
                    list.add(value)
                }
            }

        }
    }
    //utiliser les indices pour verifier les doublons
}




//Récupérer le bouton
const button=document.getElementById("button-verified")

//Assigner l'événement clique à la function verified
button.addEventListener('click', verified)