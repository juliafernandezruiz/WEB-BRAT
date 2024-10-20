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
