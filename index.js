let currentIndex = 0;

function showImage(index) {
    const images = document.querySelectorAll('.carousel-container img');
    images.forEach((img, i) => {
        img.classList.toggle('active', i === index);
    });
}

function nextImage() {
    const images = document.querySelectorAll('.carousel-container img');
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

function prevImage() {
    const images = document.querySelectorAll('.carousel-container img');
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}

// Automatically move to the next image every 3 seconds
setInterval(nextImage, 3000);
  
document.addEventListener("DOMContentLoaded", () => {
    showImage(currentIndex);
});
function performSearch() {
    // Get the search query
    const query = document.getElementById("searchInput").value.toLowerCase();
    // Get all content items
    const items = document.querySelectorAll(".content-item");
  
    // Loop through each content item and hide or show based on the query
    items.forEach(item => {
      const text = item.textContent.toLowerCase();
      if (text.includes(query)) {
        item.style.display = ""; // Show item
      } else {
        item.style.display = "none"; // Hide item
      }
    });
  }