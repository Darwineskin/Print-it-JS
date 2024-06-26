document.addEventListener('DOMContentLoaded', function () {
    const slides = [
        {
            "image": "slide1.jpg",
            "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
        },
        {
            "image": "slide2.jpg",
            "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
        },
        {
            "image": "slide3.jpg",
            "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
        },
        {
            "image": "slide4.png",
            "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
        }
    ];

    let currentIndex = 0;


    //Fonction met à jour l'image et la légende en fonction de l'index actuel
    function updateSlide(index) {
        const bannerImg = document.querySelector('.banner-img');
        const bannerTagLine = document.querySelector('#banner p');
        bannerImg.src = `./assets/images/slideshow/${slides[index].image}`;
        bannerTagLine.innerHTML = slides[index].tagLine;
    }

// Fonction pour mettre à jour l'apparence des points en fonction de l'index actuel
    function updateDots(index) {
        // Sélection de tous les points du carrousel
        const dots = document.querySelectorAll('.dot');
        // Parcours de chaque point pour mettre à jour son état
        dots.forEach((dot, i) => {
            if (i === index) {
                dot.classList.add('dot_selected');
            } else {
                dot.classList.remove('dot_selected');
            }
        });
    }

// Fonction pour créer les points  en fonction du nombre de diapositives
    function createDots() {
        // Sélection du conteneur des points
        const dotsContainer = document.querySelector('.dots');
        // Création d'un point pour chaque diapositive
        slides.forEach((slide, index) => {
            const dot = document.createElement('span');
            dot.classList.add('dot');
            if (index === 0) {
                dot.classList.add('dot_selected');
            }
            // Ajout d'un écouteur d'événement de clic pour chaque point
            dot.addEventListener('click', () => {
                currentIndex = index;
                // Met à jour la diapositive et les points lorsque l'utilisateur clique sur un point
                updateSlide(currentIndex);
                updateDots(currentIndex);
               
            // Ajoute le point au conteneur des points
            dotsContainer.appendChild(dot);
        });
    }


    function addArrowEventListeners() {
        // Sélection des éléments du DOM pour les flèches de navigation
        const leftArrow = document.querySelector('.arrow_left');
        const rightArrow = document.querySelector('.arrow_right');

// Ajout d'un écouteur d'événement de clic pour la flèche gauche
        leftArrow.addEventListener('click', function () {
            currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
            updateSlide(currentIndex);
            updateDots(currentIndex);
        });
// Ajout d'un écouteur d'événement de clic pour la flèche droite
        rightArrow.addEventListener('click', function () {
            currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
            updateSlide(currentIndex);
            updateDots(currentIndex);
        });
    }

    createDots();  // Crée les points dynamiquement
    addArrowEventListeners();  // Ajoute les écouteurs d'événements aux flèches
});
