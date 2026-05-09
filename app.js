const cards = document.querySelectorAll(".mom-card");

cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
        card.style.background = "#ffe6ee";
    });

    card.addEventListener("mouseleave", () => {
        card.style.background = "white";
    });
});