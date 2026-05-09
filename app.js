const cards = document.querySelectorAll(".mom-card");

cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
        card.style.background = "#ffe6ee";
    });

    card.addEventListener("mouseleave", () => {
        card.style.background = "white";
    });
});

// Optional Hover Animation Console Message

const galleryCards = document.querySelectorAll(".gallery-card");

galleryCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
        console.log("Image Hovered");
    });
});


const quoteCards = document.querySelectorAll(".quote-card");

quoteCards.forEach((card) => {

    card.addEventListener("mouseenter", () => {
        card.style.transform = "scale(1.05)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "scale(1)";
    });

});

// Optional Animation
console.log("Thank You Section Loaded 💖");