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
        this.#hajokView=new Hajok(this.#hajoModell.getLista(),this.ARTICLEELEM)
    }
}