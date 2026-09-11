export default class HajoTeljes{
    #obj={};
    #szuloElem="";
    constructor(obj, szuloElem){
        this.#obj=obj;
        this.#szuloElem=szuloElem;
        this.megjelenit();
    }

    megjelenit(){
        const SZOVEG=`
            <div>
                <h2>${this.#obj.nev}</h2>
                <p><span>Kapitány neve: </span>${this.#obj.kapitany}</p>
                <p><span>Hajó színe: </span>${this.#obj.szin}</p>
                <p><span>Valódi e: </span>${this.#obj.valodi}</p>
                <p><span>Hajó leírása: </span>${this.#obj.leiras}</p>
            </div>
        `;
        this.#szuloElem.insertAdjacentHTML("beforeend",SZOVEG)
    }
}