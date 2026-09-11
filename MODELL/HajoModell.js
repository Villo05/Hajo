import { HAJOLISTA } from "../adatok.js";


export default class Hajomodell{
    #lista=[];

    constructor(){
        this.#lista=HAJOLISTA
    }

    getLista(){
        return this.#lista;
    }

    rendezLista(){
        /* név szerint abc*/ 
        return this.#lista.sort((a,b)=>{
            if (a.nev > b.nev) {
                return 1;
            }else{
                return -1;
            }
            /* return a.nev > b.nev? -1:1 */
        })
    }

    szurtLista(){
        /* melyik nem valós hajó */
        const SZURT= this.#lista.filter((a)=>{
            return a.valodi == false; 
        })

        return SZURT;
    }
}