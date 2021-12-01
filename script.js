const images = document.querySelectorAll('#galery img'); //images est un tableau récupère img de id galery
let imgActive = 0; // image 0 est acive par défaut
images[imgActive].classList.add('show'); //Ajout de la classe show à l'image active
for(let i = 1; i < images.length; i += 1){ 
    // i=1 car on commence par la 2nde tant que i < taille du tableau on augmente de 1
    images[i].classList.add('hidden');
    //dans le tableau des images je rajoute à l'index i la classe hidden
} 


//Clic sur bouton suivant 
document.querySelector('#next').addEventListener('click' , function(){
//Sélectionne bouton next on ajoute evenement quand on clique
    next(); // on appelle la fonctrion next en dessous
});

const next = function(){
    images[imgActive].classList.remove('show');
//Je retire la classe show
        images[imgActive].classList.add('hidden');
//Dans tableau image je récupère le 0 (la première) on lui ajoute classe hidden
        imgActive += 1 ;
//Ajout de +1 à imgActive qui passe à 1 chiffre au dessus donc image suivante
    if(imgActive >= images.length) {// si imgActive > au tableau image on arrive à la fin des photos
        imgActive = 0; //Alors imgActive reprend à 0
    }
        images[imgActive].classList.remove('hidden');
//Je reprend l'image active et lui retire hidden
        setTimeout(function(){ //Ajout d'un délais pour que la machine puisse comprendre
            images[imgActive].classList.add('show');
//J'ajoute la classe show à l'image
        }, 300); //300 ms
}

//Clic sur bouton précédent
document.querySelector('#previous').addEventListener('click' , function(){
    //Sélectionne bouton next on ajoute evenement quand on clique
        previous(); // on appelle la fonctrion previous en dessous
    });
    
    const previous = function(){
        images[imgActive].classList.remove('show');
    //Je retire la classe show
            images[imgActive].classList.add('hidden');
    //Dans tableau image je récupère le 0 (la première) on lui ajoute classe hidden
            imgActive -= 1 ;
    //Soustrait -1 à imgActive qui passe à 1 chiffre en dessous donc image précedente
        if(imgActive < 0) {// si imgActive < au tableau image on arrive à la fin des photos
            imgActive = images.length - 1; //Alors imgActive reprend à taille du tab - 1 car on comence à 0
        }
            images[imgActive].classList.remove('hidden');
    //Je reprend l'image active et lui retire hidden
            setTimeout(function(){ //Ajout d'un délais pour que la machine puisse comprendre
                images[imgActive].classList.add('show');
    //J'ajoute la classe show à l'image
            }, 300); //300 ms
    }

let interval; // on créer un let interval hors pour avoir une portée globale

//Clic sur bouton play
document.querySelector('#play').addEventListener('click' , function(){ 
//Ajout d'un event clique sur le play
    interval = setInterval(next, 2000) // sur un interval de 2s la fonction next agis
    });

//Clic sur bouton pause
document.querySelector('#pause').addEventListener('click' , function(){ 
//Ajout d'un event clique sur le pause
        clearInterval(interval);
//ClearInterval prend en paramètre le nom de l'interval de temps créer juste avant
        });

//gestion touche clavier
window.addEventListener('keydown', function(e){ // e va contenir l'evenement
//sur objet global window event quand on presse touche clavier
    if(e.key == 'ArrowRight'){ //si on fait flèche vers la droite
        next() //on applique la fonction next
    }
    if(e.key == 'ArrowLeft'){ //si on fait flèche vers la gauche
        previous() //on applique la fonction previous
    }
})
