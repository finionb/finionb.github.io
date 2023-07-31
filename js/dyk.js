const images = document.querySelectorAll(".image");
const overlay = document.getElementById("overlay");
const modal = document.getElementById("modal");
const modalImage = document.getElementById("modal-image");
const closeButton = document.getElementById("close-button");

images.forEach((image) => {
    image.addEventListener("click", () => {
        overlay.style.display = "block";
        modal.style.display = "block";
        modalImage.src = image.src;
    });
});

closeButton.addEventListener("click", () => {
    overlay.style.display = "none";
    modal.style.display = "none";
});

  

