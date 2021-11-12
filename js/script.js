// Consegna: Dati tre array contenenti:
// una lista ordinata di 5 immagini,
// una lista ordinata dei relativi 5 luoghi e
// una lista di 5 news, creare un carosello come nella foto allegata.
// MILESTONE 1 Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo l'immagine grande a sinistra e le thumbnails sulla destra in modo da poter stilare lo slider; avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull'aspetto logico.
// MILESTONE 2 Adesso rimuoviamo tutto il markup statico e inseriamo le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal. Al termine di questa fase ci ritroveremo con lo stesso slider, ma costruito dinamicamente attraverso JavaScript.
// MILESTONE 3 Al click dell'utente sulle frecce verso l'alto o verso il basso, l'immagine attiva diventa visibile in formato grande a sinistra e nel suo angolo in basso a destra dovranno essere aggiunti i relativi:
// titolo e
// testo. Allo stesso tempo nelle miniature l'immagine attiva dovrà apparire in evidenza rispetto alle altre.
// BONUS: Aggiungere il ciclo infinito del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso l'alto, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso il basso.
// Prima di partire a scrivere codice: Non lasciamoci spaventare dalla complessità apparente dell'esercizio, ma analizziamo prima, come abbiamo fatto sempre, cosa ci potrebbe aspettare. Abbiamo completato ormai da qualche giorno la sessione HTML e CSS, se non ci ricordiamo qualcosa andiamo pure a riguardare alcuni argomenti. Non dedichiamo però al ripasso più di una mezz'ora, così da non perdere di vista il focus dell'esercizio.
// Consigli del giorno:
// costruiamo del carosello una versione statica contenente un'immagine grande con del testo ben posizionato e una miniatura. Di questa versione statica al momento opportuno commenteremo (oscureremo) alcuni elementi per poterli riprodurre dinamicamente in js. Potremo quindi usarli come "template".
// scriviamo sempre prima per punti il nostro algoritmo in italiano per capire cosa vogliamo fare
// Al momento giusto (ihihhi starà a voi capire quale) rispondete a questa domanda: "Quanti cicli servono?"

const immaginiArray = [
    "img/01.jpg",
    "img/02.jpg",
    "img/03.jpg",
    "img/04.jpg",
    "img/05.jpg"
]

const luoghi = [
    "Svizzera",
    "Svezia",
    "Spagna",
    "Francia",
    "Italia"
]

const descrizioneLuoghi = [
    "Svizzera - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, dolores.",
    "Svezia - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, dolores.",
    "Spagna - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, dolores.",
    "Francia - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, dolores.",
    "Italia - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, dolores."
]

console.log(immaginiArray);

const libreria = document.getElementById("libreria");

const containerGrande = document.getElementById("container-grande");

for (i = 0; i < immaginiArray.length; i++) {
    libreria.innerHTML += `<div class="contenitore-immagine">
    <img class="immagine-piccola" src="${immaginiArray[i]}" alt="">
    </div>`;
    containerGrande.innerHTML += `<img  class="immagine-grande" src="${immaginiArray[i]}" alt="">`;
    containerGrande.innerHTML += `<div class="descrizione">
    <h3>${luoghi[i]}</h3>
    <p>${descrizioneLuoghi[i]}</p>
    </div>`;
    
}

const immagineGrande = document.getElementsByClassName("immagine-grande");
console.log(immagineGrande);

const immaginePiccola = document.getElementsByClassName("immagine-piccola");
console.log(immaginePiccola);

const description = document.getElementsByClassName("descrizione");
console.log(description);

let activeItem = 0;

immagineGrande[activeItem].classList.add("active");

immaginePiccola[activeItem].classList.add("active");

description[activeItem].classList.add("active");

const up = document.getElementById("up");
const down = document.getElementById("down");


up.addEventListener("click", function(){
    if (activeItem > 0) {
        immagineGrande[activeItem].classList.remove("active");

        immaginePiccola[activeItem].classList.remove("active");

        description[activeItem].classList.remove("active");

        activeItem--;

        immagineGrande[activeItem].classList.add("active");    

        immaginePiccola[activeItem].classList.add("active");

        description[activeItem].classList.add("active");
        console.log(activeItem);
    } else if (activeItem == 0) {
        immagineGrande[activeItem].classList.remove("active");

        immaginePiccola[activeItem].classList.remove("active");

        description[activeItem].classList.remove("active");

        activeItem = immaginiArray.length - 1;

        immagineGrande[activeItem].classList.add("active");    

        immaginePiccola[activeItem].classList.add("active");

        description[activeItem].classList.add("active");
        console.log(activeItem);
    }
    
})

down.addEventListener("click", function(){  
    if (activeItem < immaginiArray.length - 1 && activeItem >= 0) {
        immagineGrande[activeItem].classList.remove("active");

        immaginePiccola[activeItem].classList.remove("active");

        description[activeItem].classList.remove("active");

        activeItem++;

        immagineGrande[activeItem].classList.add("active");

        immaginePiccola[activeItem].classList.add("active");

        description[activeItem].classList.add("active");
        console.log(activeItem);
    } else if (activeItem >= immaginiArray.length - 1) {
        immagineGrande[activeItem].classList.remove("active");

        immaginePiccola[activeItem].classList.remove("active");

        description[activeItem].classList.remove("active");

        activeItem = 0;

        immagineGrande[activeItem].classList.add("active");    

        immaginePiccola[activeItem].classList.add("active");

        description[activeItem].classList.add("active");
        console.log(activeItem);
    }
    
})

