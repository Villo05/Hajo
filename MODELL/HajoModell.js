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
        
    }

    szurtLista(){
        const SZURT=[];
        return SZURT;
    }
}