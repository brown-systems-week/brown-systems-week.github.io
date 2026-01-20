// List of banner images
const bannerImages = ['assets/banner_2026.jpg'];

// Select the header element
const header = document.getElementById('dynamic-header');

// Function to pick a random image
function setRandomBanner() {
    const randomIndex = Math.floor(Math.random() * bannerImages.length);
    header.style.backgroundImage = `url(${bannerImages[randomIndex]})`;
}
// Call the function on page load
setRandomBanner();
