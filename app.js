document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".slider");
    const slides = document.querySelectorAll(".slide");
    const slideCount = slides.length;
    let currentIndex = 0;

    function goToSlide(index) {
        if (index < 0) {
            index = slideCount - 1;
        } else if (index >= slideCount) {
            index = 0;
        }

        slider.style.transform = `translateX(-${index * 100}%)`;

        slides.forEach((slide) => {
            slide.style.opacity = 0;
        });

        slides[index].style.opacity = 1;
        currentIndex = index;
    }

    setInterval(() => {
        currentIndex++;
        if (currentIndex >= slideCount) {
            currentIndex = 0;
        }
        goToSlide(currentIndex);
    }, 3300); 
});
