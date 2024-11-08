 
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



function setBackground(color) {
    const background = document.getElementById('background');
    background.style.backgroundColor = color === '#9DD21' ? '#00FF7F' : '#FFFFFF';
  }
  
  function generateImage() {
    const text = document.getElementById('inputText').value;
    const textOverlay = document.getElementById('textOverlay');
    textOverlay.textContent = text ? text : "Write here";
  
    html2canvas(document.getElementById('imageContainer')).then(canvas => {
      const link = document.createElement('a');
      link.download = 'brat_generator_image.png';
      link.href = canvas.toDataURL('image/png');
      link.click();
    });
  }

$(document).ready(function() {
    $('.product-card').hover(
        function() {
            console.log('Ratón sobre la tarjeta'); // Muestra mensaje al pasar el ratón
            $(this).css('background-color', '#FF69B4'); // Cambia al color deseado al pasar el ratón
        }, 
        function() {
            console.log('Ratón fuera de la tarjeta'); // Muestra mensaje al quitar el ratón
            $(this).css('background-color', ''); // Regresa al color original al quitar el ratón
        }
    );
});
$('.product-card').css('border', '2px solid red');
console.log(typeof jQuery !== 'undefined' ? "jQuery está cargado" : "jQuery no está cargado");

