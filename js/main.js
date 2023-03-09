// *** DATA ***
const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];
// *** DATA FINE ***

const sliderDom = document.querySelector('.slider');
// scrivo dinamicamente tutte le img nello slider
images.forEach( (element,index) => sliderDom.innerHTML += `
    <div class="img-container">
        <img src="${element.image}" alt="immagine ${index+1}">
        <div class="text-container">
            <h2>${element.title}</h2>
            <p>${element.text}</p>
        </div>
    </div>
`);

// creo un array che contenga i collegamenti ai tag img di slider 
const sliderContent = document.querySelectorAll(".slider .img-container");
// rendo visibile la prima immagine
let current = 0;
sliderContent[current].classList.add("show");


const thumbnailsDom = document.querySelector(".thumbnails");
// scrivo dinamicamente tutte le thumbnails (sfrutto il ciclo alla riga 10)
images.forEach( (element,index) => thumbnailsDom.innerHTML += `
    <img src="${element.image}" alt="immagine ${index+1}">
`);

// creo un array che contenga i collegamenti ai tag img di thumbnails
const thumbnailsContent = document.querySelectorAll(".thumbnails img");
// rendo evidenziata la prima immagine
thumbnailsContent[current].classList.add("highlight");

// prev arrow (al click richiamo la funzione "prevImg")
const prevArrow = document.getElementById("prev-arrow");
prevArrow.addEventListener('click', prevImg)

// next arrow (al click richiamo la funzione "nextImg")
const nextArrow = document.getElementById("next-arrow");
nextArrow.addEventListener('click', nextImg)

// BONUS 1
// Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.

thumbnailsContent.forEach( image => image.addEventListener('click', clickOnThumbnail));

function clickOnThumbnail () {
    sliderContent[current].classList.remove("show");
    thumbnailsContent[current].classList.remove("highlight");
    
    // cambio "current" in base all'indice del thumbnail su cui ho cliccato
    thumbnailsContent.forEach((element, index) => {
        element == this ? current=index : "";
    })

    sliderContent[current].classList.add("show");
    thumbnailsContent[current].classList.add("highlight");
}

// BONUS 2
// Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.

let autoPlaySeconds = 3;
setInterval(nextImg, autoPlaySeconds*1000);




// *** LISTA FUNZIONI ***

// funzione che fa passare all'immagine successiva
function nextImg (){
    sliderContent[current].classList.remove("show");
    thumbnailsContent[current].classList.remove("highlight");
    // ciclo infinito
    if (current == sliderContent.length - 1){
        current = 0;
    } else {
        current++;
    }
    sliderContent[current].classList.add("show");
    thumbnailsContent[current].classList.add("highlight");
}

// funzione che fa passare alla precedente immagine
function prevImg (){
    sliderContent[current].classList.remove("show");
    thumbnailsContent[current].classList.remove("highlight");
    // ciclo infinito
    if (current == 0){
        current = sliderContent.length - 1;
    } else {
        current--;
    }
    sliderContent[current].classList.add("show");
    thumbnailsContent[current].classList.add("highlight");
}