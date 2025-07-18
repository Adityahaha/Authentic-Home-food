
// ✅ Scroll Buttons for Popular Items Carousel
const wrapper = document.querySelector(".popular-cards-wrapper");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

if (wrapper && prevBtn && nextBtn) {
    const scrollAmount = 340; // Card width + margin (320 + 20)

    nextBtn.addEventListener("click", () => {
        wrapper.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });

    prevBtn.addEventListener("click", () => {
        wrapper.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    });
}




// --------------------------------------------------popup window-----------------------------------------------------
function openForm() {
    document.getElementById('requestModal').style.display = 'flex';
}

function closeForm() {
    document.getElementById('requestModal').style.display = 'none';
}

// Optional: Handle form submission
document.getElementById('dishForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const food = document.getElementById('foodName').value;
    const quantity = document.getElementById('quantity').value;
    const address = document.getElementById('address').value;

    // Handle the form data (e.g., send it to a server)
    alert(`Dish Requested:\nFood: ${food}\nQuantity: ${quantity}\nAddress: ${address}`);

    closeForm(); // close the modal
    this.reset(); // reset form
});







// Video play/pause toggle
const video = document.getElementById('promoVideo');
const playIcon = document.getElementById('playIcon');

// Ensure play icon is visible initially
playIcon.style.opacity = 1;

// Toggle play/pause on click
video.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        playIcon.style.opacity = 0;      // hide icon when playing
    } else {
        video.pause();
        playIcon.style.opacity = 1;      // show icon when paused
    }
});

// Also toggle icon when video ends or is paused by other means
video.addEventListener('pause', () => {
    playIcon.style.opacity = 1;
});
video.addEventListener('play', () => {
    playIcon.style.opacity = 0;
});


// ----------------------delivery boy------------------------------
// Contact form submission handling
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you! We will contact you within 48 hours.");
    this.reset();
});
