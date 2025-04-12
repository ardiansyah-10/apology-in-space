// Other functions for buttons and interactions (placeholders)
function startJourney() {
  window.scrollTo({
    top: document.getElementById("apology").offsetTop,
    behavior: "smooth",
  });
}

function openMoonMessage() {
  alert(
    "Aku tau kamu tau kamu lagi cape banget sayang, tapi kamu bisa lewatin ini kok, aku disini."
  );
}

function thankYou() {
  alert("Aku sayang kamu, terima kasih sudah mau berjuang bareng aku.❣️");
}

// Function to create stars
function createStars() {
  const starContainer = document.querySelector(".stars");
  const numberOfStars = 100; // Adjust the number of stars as needed

  for (let i = 0; i < numberOfStars; i++) {
    const star = document.createElement("div");
    star.classList.add("star");

    // Randomize position and size
    const size = Math.random() * 3 + 1; // Size between 1 and 4
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.top = `${Math.random() * 100}vh`; // Random vertical position
    star.style.left = `${Math.random() * 100}vw`; // Random horizontal position
    star.style.animationDuration = `${Math.random() * 1 + 0.5}s`; // Random blink duration

    starContainer.appendChild(star);
  }
}

// Call the createStars function when the page loads
window.onload = createStars;

document.addEventListener("DOMContentLoaded", function () {
  // Example: Add the class after a 1-second delay
  setTimeout(function () {
    document.body.classList.add("image-visible");
  }, 1000);
});
