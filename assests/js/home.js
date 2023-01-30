// Get the title element
const title = document.querySelector("#title");

// Split the title into letters
const letters = title.textContent.split("");

// Remove the text from the title element
title.textContent = "";

// Add each letter as a span element
letters.forEach((letter, i) => {
    const span = document.createElement("span");
    span.textContent = letter;
    span.style.animationDelay = `${i / 10}s`;
    title.appendChild(span);
});