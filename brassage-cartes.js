function  generation_cartes() {
    //COULEURS = ["♦", "♣", "♥", "♠"];
    COULEURS = ["Carreau", "Trefle", "Coeur", "Pique"]; 
    VALEURS = ["A"];
    for (let i = 2; i < 11; i++) {
    	VALEURS.push(i.toString());
    }
    VALEURSS = ["J", "K", "Q"]
    for (let valeur of VALEURSS) {
    	VALEURS.push(valeur);
    }
    cartes = []
    for (let couleur of COULEURS) {
    	for (let valeur of VALEURS) {
    		cartes.push(valeur+couleur);
    	}
    }
    return cartes;   
}

function brassage(cartes) {
    moitie_deck = cartes.length/2;
    nouveau_paquet = []
    for (let i = 0; i < moitie_deck; i++) {
    	let a = cartes[i]
    	let b = cartes[i+moitie_deck] 
    	nouveau_paquet.push(a)
    	nouveau_paquet.push(b)
    }
    
    return nouveau_paquet;
}


function affichage(cartes) {
    taille_ligne = cartes.length/4;
    let string = "";
    liste = [];
    tmp  = [];
    let i = 0;
    let cpt = 0;
    while(i < cartes.length+1) {
        if (cpt < taille_ligne) {
            tmp.push(cartes[i]);
            cpt++;
            i++; 
       } else {
            liste.push(tmp);
            tmp = [];
            cpt = 0;
       }
    }
    return liste; 
}


function affichage_image(src, width, height, alt) {
    let etat_initial = document.getElementById('initialState'); 
    var img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height;
    img.alt = alt;
    etat_initial.appendChild(img);
    etat_initial.innerHTML;
}



function lancer() {
    document.getElementById('initialState').innerHTML = null;
    carte_initial = generation_cartes()
    let liste_cartes =  affichage(carte_initial);
    for (let list_elt of liste_cartes) {
        for (let item of list_elt) {
            affichage_image("images/"+item+".gif", 50, 50, item);
        }
    }  

}


function brasser() {
    document.getElementById('initialState').innerHTML = null;
    cartes = brassage(cartes); 
    let liste =  affichage(cartes);
    for (let list_elt of liste) {
        for (let item of list_elt) {
            affichage_image("images/"+item+".gif", 50, 50, item);
        }
    }
} 
