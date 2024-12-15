const overlayData = {
  "1": { title: "My First VB4 Program", content: "Hello, world!" },
  "2": { title: "Cheetara and Fernando", content: "These are my cats!" },
  "3": { title: "Neighbor Cat", content: "Neighbor calls him 'meowmeow'." }
};

window.addEventListener("load", (event) => {
  new cursoreffects.fairyDustCursor();
});

let scrollY = 0; // Store scroll position

// Select overlay and its elements
const overlay = document.getElementById("overlay");
const overlayTitle = document.getElementById("overlay-title");
const overlayContent = document.getElementById("overlay-content");
const closeButton = document.querySelector(".close-btn");

// Open overlay when "More" is clicked
document.querySelectorAll(".more-link").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent page scroll to top
    const id = link.getAttribute("data-id"); // Get data-id of the clicked link
    if (overlayData[id]) {
      // Populate the overlay with data
      overlayTitle.textContent = overlayData[id].title;
      overlayContent.textContent = overlayData[id].content;
      overlay.style.display = "flex"; // Show the overlay
    }
  });
});

// Close overlay when "X" button is clicked
closeButton.addEventListener("click", () => {
  overlay.style.display = "none"; // Hide the overlay
});

// Optional: Close overlay if clicking outside the window
overlay.addEventListener("click", (event) => {
  if (event.target === overlay) {
    overlay.style.display = "none";
  }
});