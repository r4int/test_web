// This file contains JavaScript code to dynamically load and display images from the assets/images folder.

document.addEventListener("DOMContentLoaded", function() {
    const imageContainer = document.getElementById("image-container");
    const images = [];

    // Fetch images from the assets/images directory
    for (let i = 1; i <= 10; i++) { // Assuming there are 10 images named image1.jpg, image2.jpg, etc.
        const imgPath = `assets/images/image${i}.jpg`;
        images.push(imgPath);
    }

    // Create image elements and append them to the container
    images.forEach(src => {
        const img = document.createElement("img");
        img.src = src;
        img.alt = "Image";
        img.classList.add("image-item");
        imageContainer.appendChild(img);
    });
});