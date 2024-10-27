
  AOS.init();

var typed = new Typed("#typed-text", {
    strings: [
        "Some typed text",
        "Created with TypeJS library",
        "Some other text",
        "The gallery was created with CSS Grid, check it out!",
    ],
    typeSpeed: 80,
});

ScrollReveal().reveal(".grid-wrapper > div", {
    delay: 200,
    distance: "50px",
    interval: 100,
    origin: "bottom",
    scale: 0.9,
});
let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-slide');
    const track = document.querySelector('.carousel-track');
    const slideWidth = slides[0].clientWidth;

    track.style.transform = `translateX(-${index * slideWidth}px)`;
}

function nextSlide() {
    const slides = document.querySelectorAll('.carousel-slide');
    currentIndex = (currentIndex + 1) % slides.length; // Siguiente slide
    showSlide(currentIndex);
}

function prevSlide() {
    const slides = document.querySelectorAll('.carousel-slide');
    currentIndex = (currentIndex - 1 + slides.length) % slides.length; // Slide anterior
    showSlide(currentIndex);
}

