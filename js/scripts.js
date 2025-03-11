// This file contains JavaScript code to dynamically load and display images from the assets/images folder.

document.addEventListener("DOMContentLoaded", function() {
    const imageContainer = document.getElementById("image-container");
    const images = [
        { src: 'assets/images/image1.jpg', link: 'https://open.spotify.com/track/61igNtS7cVfhSg4zoJ53oD?si=9384bb4b53dd418c' },
        { src: 'assets/images/image2.jpg', link: 'https://open.spotify.com/track/2FZIabCRMEWAYfN69Ijn1U?si=cf431539ea6b4f89' },
        { src: 'assets/images/image3.jpg', link: 'https://open.spotify.com/track/5mtTAScDytxMMqZj14NmlN?si=b71042cef1f14dea' },
        { src: 'assets/images/image4.jpg', link: 'https://open.spotify.com/track/6GxdtMg7DdomU79EodUpfk?si=65e0da8b5adf4d9b' }
    ];

    // Create image elements wrapped in anchor tags and append them to the container
    images.forEach(image => {
        const anchor = document.createElement("a");
        anchor.href = image.link;
        anchor.target = "_blank"; // Open link in a new tab

        const img = document.createElement("img");
        img.src = image.src;
        img.alt = "Image";
        img.classList.add("image-item");

        anchor.appendChild(img);
        imageContainer.appendChild(anchor);
    });
});