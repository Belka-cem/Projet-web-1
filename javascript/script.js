let add_panier = document.getElementById("nombre-article");
let nombre = 0;

let btn_add = document.getElementsByClassName("btn-add");

let btn_add1 = document.getElementById("btn_add1");
let btn_add2 = document.getElementById("btn_add2");
let btn_add3 = document.getElementById("btn_add3");
let panier = document.getElementById("panier") ;
let c2 = document.getElementById("choix-panier");
let c1 = document.getElementById("container-1");
let choix1 = document.getElementById("choix1");
let choix2 = document.getElementById("choix2");
let choix3 = document.getElementById("choix3");





btn_add1.addEventListener("click" , ajouterPanier , false ) ;
btn_add2.addEventListener("click" , ajouterPanier , false ) ;
btn_add3.addEventListener("click" , ajouterPanier , false ) ;
panier.addEventListener("click" ,  changerContenaire , false) ;





function ajouterPanier() {
  if (btn_add1 || btn_add2 || btn_add3 ) {
    nombre ++
    add_panier.textContent = nombre;

  }if (nombre > 0) {
    add_panier.style.color = "red"

  }
}


function changerContenaire() {
  if (panier &&& btn_add1) {
    c1.style.display = "none"
    c2.style.display = "inherit"
    choix2.style.display = "none"
    choix3.style.display = "none"
    btn_add.textContent = "acheter"

  }
}
