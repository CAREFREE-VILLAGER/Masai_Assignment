let slideIndex = 0;
let timer;

function showSlide(n) {
    const slides = document.querySelectorAll(".slide");

    slideIndex += n;

    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }

    slides.forEach((slide) => {
        slide.style.display = "none";
    });

    slides[slideIndex].style.display = "block";
}

function startSlideShow() {
    showSlide(1);
    timer = setInterval(() => showSlide(1), 2000); // Change slide every 2 seconds
}

function stopSlideShow() {
    clearInterval(timer);
}

document.getElementById("prevBtn").addEventListener("click", () => {
    showSlide(-1);
    stopSlideShow();
});

document.getElementById("nextBtn").addEventListener("click", () => {
    showSlide(1);
    stopSlideShow();
});

// Initial start of the slideshow
startSlideShow();
