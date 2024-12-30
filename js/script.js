
 AOS.init();

 $(document).ready(function() {
    $('.product-card').hover(
        function() {
            
            $(this).css('background-color', 'var(--pink)'); // Cambia al color deseado al pasar el ratón
        }, 
        function() {
            
            $(this).css('background-color', ''); // Regresa al color original al quitar el ratón
        }
    );
});
$('.product-card').css('border', '2px solid var(--green)');
const foodSuggestions = ["Ramen", "Sushi", "Okonomiyaki", "Takoyaki", "Sashimi", "Tempura"];
$('#generate-card').on('click', function () {
    const userName = $('#user-name').val();
    const birthdate = $('#user-birthdate').val();
    
    if (!userName || !birthdate) {
        alert('Por favor, completa ambos campos.');
        return;
    }

    // Simulación del nombre en japonés
    const japaneseName = userName.split('').map(char => `ア${char}`).join('');

    // Selección de platillo
    const foodIndex = new Date(birthdate).getDate() % foodSuggestions.length;
    const foodSuggestion = foodSuggestions[foodIndex];

    // Contenido de la tarjeta
    const cardHtml = `
        <p><strong>Nombre en japonés:</strong> ${japaneseName}</p>
        <p><strong>Recomendación del chef:</strong> ${foodSuggestion}</p>
        <img src="https://source.unsplash.com/200x200/?${foodSuggestion}" alt="${foodSuggestion}" style="border-radius: 8px; margin-top: 10px;">
    `;
    $('#card-content').html(cardHtml);
    $('#card-result').fadeIn();
});

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


