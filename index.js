/* article elembe szeretnék elhelyezni card-okat egymás mellett 
Hajókról infokat*/

import HajoController from "./CONTROLLER/HajoController.js";

new HajoController()

/* minden hajó mellett legyen egy gomb amire kattíntva megjelenik annak adatlapja minden információval

1. kell egy gomba Hajo osztályban
2. hajo osztályban kell egy eseménykezel, a gombra kattíntást kezeli és kivált egy saját eseményt ("kivalaszt")
3. fel kell iratkozni a sajáteseményre a hajoControllerben. Itt kell kezelni, hogy lekérjük azt az obejktumot a listából, ami ehhez a hajóhoz tartozik
4. megjelenítjük az article-ben ezt az egyetlen hajót
*/

/* 
legyen egy gomb a hajoTeljesben amire ha rákattíntunk akkor bekerül a kosárba

1. HajoTeljesben kell egy gomb, amire ha kattíntun, kivált egy eseményt "kosarba"
2. a HajoController feliratkozik a kosarba eseményre
3. modellben kell egy kosarlista, ebbe belekerül a kiválasztott adat. mdellben kell egy kosarba tagfuggveny
4. modellbe kell egy getKosar tagfüggvény
5. A controller lekéri a modelltől a kosár tartalmát és példanyosítja a kosár tartalmát (használd a hajok osztalyt)
*/