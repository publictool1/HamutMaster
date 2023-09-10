document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".header_links a");

    links.forEach(function (link) {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                links.forEach(function (l) {
                    l.classList.remove("active");
                });
                this.classList.add("active");

                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: "smooth",
                });
            }
        });
    });
});