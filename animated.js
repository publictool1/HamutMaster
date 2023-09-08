document.addEventListener("DOMContentLoaded", function () {
    const scrollRevealElements = document.querySelectorAll(".scroll-reveal");

    function isElementInViewport(element, offset) {
        const rect = element.getBoundingClientRect();
        return rect.top - offset <= (window.innerHeight || document.documentElement.clientHeight);
    }

    function handleScroll() {
        scrollRevealElements.forEach((element) => {
            if (isElementInViewport(element, 100) && !element.classList.contains("reveal")) {
                element.classList.add("reveal");
            }
        });
    }

    window.addEventListener("scroll", handleScroll);

    handleScroll();
});
