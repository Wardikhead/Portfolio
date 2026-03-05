let menuIcon = document.querySelector('#menu-icon');
let navbar= document.querySelector('.navbar');

menuIcon.onclick  = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active');
}


// main.js

// Scroll Reveal
const scrollElements = document.querySelectorAll(".scroll-reveal");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("active");
    }
  });
}, { threshold: 0.2 });

scrollElements.forEach(el => observer.observe(el));


const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxVideo = document.getElementById("lightbox-video");
const closeBtn = document.querySelector(".close");

// Open Image
function openImage(src) {
    lightboxImg.src = src;
    lightboxImg.style.display = "block";
    lightboxVideo.style.display = "none";

    // Trigger reflow for smooth animation
    lightbox.offsetWidth; 
    lightbox.classList.add("active");
}

// Open Video
function openVideo(src) {
    lightboxVideo.src = src;
    lightboxVideo.style.display = "block";
    lightboxImg.style.display = "none";
    lightboxVideo.play();

    lightbox.offsetWidth; // reflow
    lightbox.classList.add("active");
}

// Close Lightbox
function closeLightbox() {
    // Animate out
    lightbox.classList.remove("active");

    // Pause video and reset after animation duration (400ms)
    setTimeout(() => {
        lightboxVideo.pause();
        lightboxVideo.src = "";
    }, 400);
}

// Event listeners
document.querySelectorAll(".carousel-item img").forEach(img => {
    img.addEventListener("click", () => openImage(img.src));
});

document.querySelectorAll(".carousel-item video").forEach(video => {
    video.addEventListener("click", () => {
        openVideo(video.querySelector("source").src || video.currentSrc);
    });
});

closeBtn.addEventListener("click", closeLightbox);
lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
});
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeLightbox();
});