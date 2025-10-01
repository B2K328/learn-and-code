//ce fichier contient le module class SudokuCase
class SudokuCase{
    constructor() {
        this.isDefaultValue=false
    }
    //lorsque la case a comme proprieté isDefaultValues sur true on ne peux plus la modifier
    defineDefaultValue(value){
        this.value=value
        this.isDefaultValue=true
    }
    nextValue(){

    }
}