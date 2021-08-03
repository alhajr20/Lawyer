function menuActive(navMenu, hamburgerBtn, activeClass, buttonActive) {
    const showBtn = document.querySelector(hamburgerBtn),
          showBtnChild = showBtn.querySelector('button'),
          menu = document.querySelector(navMenu);

    showBtn.addEventListener('click', () => {
        if (menu.classList.contains(activeClass)) {
            menu.classList.remove(activeClass);
            showBtnChild.classList.remove(buttonActive);
        } else {
            menu.classList.add(activeClass);
            showBtnChild.classList.add(buttonActive);
        }
    });
}

export default menuActive;