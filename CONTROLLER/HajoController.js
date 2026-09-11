import Hajomodell from "../MODELL/HajoModell.js"
import Hajok from "../VIEW/Hajok.js"

export default class HajoController{
    /* feldata a modell és a view közötti kapcsolattrtás
    Itt iratkozunk fel az eseméynre
    Itt példányosítjuk a view és a modellt*/
    #hajoModell={}
    #hajokView={}
    
    constructor(){
        this.#hajoModell=new Hajomodell();
        this.ARTICLEELEM=document.querySelectorAll(".tarolo")[0];
        this.#hajokView=new Hajok(this.#hajoModell.getLista(),this.ARTICLEELEM);
        this.rendezGomb = document.querySelector("#rendeznev");
        this.szuresGomb = document.getElementById("szuresfilm");
        //console.log(this.#hajoModell.rendezLista())
        //console.log(this.#hajoModell.szurtLista())
        this.szuresRendezesesemenyKezeleo();
    }

    szuresRendezesesemenyKezeleo(){
        this.rendezGomb.addEventListener("click", () =>{
            this.ARTICLEELEM.innerHTML = "";
            new Hajok(this.#hajoModell.rendezLista(), this.ARTICLEELEM);
        });
        this.szuresGomb.addEventListener("click", () =>{
            this.ARTICLEELEM.innerHTML = "";
            new Hajok(this.#hajoModell.szurtLista(), this.ARTICLEELEM);
        })
    }
}