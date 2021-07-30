function headerFixed(header, activeClass) {
    const headerSection = document.querySelector(header);

    window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
            headerSection.classList.add(activeClass);
        } else {
            headerSection.classList.remove(activeClass);
        };
    });
}

export default headerFixed;