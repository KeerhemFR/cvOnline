let modal2Loto = [];
let modal2Nombre = 1;
let modal2j;
let modal2Cadeau;

function modal2Ajout(){
  let modal2Nom = prompt("Ajoutez un nom pour le tirage");
  while(modal2Nom == ""){
    modal2Nom = prompt("Pas de valeur rentrée. Ajoutez un nom pour le tirage");
  };
  modal2Loto.push(modal2Nom);
  document.getElementById("modal-2-tirage").innerHTML = modal2Loto.join("<br>");
};

function modal2Reset(){
  modal2Loto = []
  document.getElementById("modal-2-tirage").innerHTML = modal2Loto;
  document.getElementById("modal-2-node-container").innerHTML = "";
};

function modal2Degage(){
  modal2Loto.pop();
  document.getElementById("modal-2-tirage").innerHTML = modal2Loto;
}

function modal2Roll(){
  modal2j = modal2Loto.length;
  for(modal2Nombre = 1; modal2Nombre < modal2j+1; modal2Nombre++){
    modal2t = modal2Loto.length;
    modal2Cadeau = Math.floor(Math.random() * modal2t);
    // alert("Le cadeau numéro " + modal2Nombre + " est gagné par " + modal2Loto[modal2Cadeau] + "!");
    document.getElementById("modal-2-node-container").innerHTML += "<p>Le cadeau numéro " + modal2Nombre + " est gagné par " + modal2Loto[modal2Cadeau] + "!" + "<br>";
    modal2Loto.splice(modal2Cadeau, 1);
  };
};
