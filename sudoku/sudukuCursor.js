class SudokuCursor{
    constructor(){
        this.line=8
        this.column=8
        this.step='advance'
    }
    //progress permet de faire progresser le curseur selon d'etat de marche,
    //soit en avant (goForward()) soit en arrière (goBack())
    //elle retourne si oui ou non le curseur a avancé
    progress(){
        //si la marche (step)est avant(advance)
        if(this.step==='advance'){
            // on avance le curseur
            this.goForward()
        }
        //si la marche(step) est arrière (regress).
        else{
            //recule le curseur
            this.goBack()
        }
    }
    //fait avancer le curseur
    goForward(){
        //lorsque le curseur est au bout retourne false
        if (this.line===8 && this.column===8){
            return false
        }
        //si le curseur est en bout de ligne(line)
        if (this.column===8){
            //ligne suivante, sur la colonne(colum) 0
            this.line++
            this.column=0
        }
        //si le curseur n'est pas en bout de ligne
        else{
            //meme ligne colonne suivante
            this.column+=1
        }
        //sile curseur n'est pas en bout de ligne
        //retourne true
        return true

    }
    //fais reculer le curseur
    goBack(){
        //si nous sommes sur la premiere ligne à la premiere colonne
        if (this.line===0
            && this.column===0){
            //pas moyen de reculer, on renvoie false
            return false
        }
        //lorsque nous sommes à la première colonne d'une ligne
        if (this.column===0){
            this.line-=1
            this.column=8
        }//lorsque nous ne somme pas en debut de ligne
        else{
            this.column-=1
        }
        return true
    }
}
