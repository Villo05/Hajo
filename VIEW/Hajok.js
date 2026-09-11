/* az osztály dolga, hogy példányosítsa a hajókat, annyit amennyit kell*/

import Hajo from "./Hajo.js";

export default class Hajok{
    #lista=[];
    #szuloElem="";
    constructor(lista,szuloElem){
        this.#lista=lista;
        this.#szuloElem=szuloElem;
        this.megjelenit();
    }

    megjelenit(){
        this.#lista.forEach((elem,index)=>{
            new Hajo(this.#lista[index],this.#szuloElem)
        })
    }
}