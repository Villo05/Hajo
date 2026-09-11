export default class HajoTeljes{
    #obj={};
    #szuloElem="";
    constructor(obj, szuloElem){
        this.#obj=obj;
        this.#szuloElem=szuloElem;
        this.megjelenit();
        this.buttonElem=document.querySelector(".hajoTeljes:last-child button")
        console.log(this.buttonElem)
        this.esemenykezelo()
    }

    megjelenit(){
        const SZOVEG=`
            <div class="hajoTeljes">
                <h2>${this.#obj.nev}</h2>
                <p><span>Kapitány neve: </span>${this.#obj.kapitany}</p>
                <p><span>Hajó színe: </span>${this.#obj.szin}</p>
                <p><span>Valódi e: </span>${this.#obj.valodi}</p>
                <p><span>Hajó leírása: </span>${this.#obj.leiras}</p>
                <button> Kosár </button>
            </div>
        `;
        this.#szuloElem.insertAdjacentHTML("beforeend",SZOVEG)
    }

    esemenykezelo(){
        this.buttonElem.addEventListener("click", ()=> {
            const e = new CustomEvent("kosarba", {detail:this.#obj.id})
            window.dispatchEvent(e);
            console.log(this.#obj.id)
        })
    }
}