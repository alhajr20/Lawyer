function modalWindow(btnOpen, btnClose, modalWin, classActive) {
    const openBtn = document.querySelector(btnOpen),
          closeBtn = document.querySelector(btnClose),
          modalWindow = document.querySelector(modalWin);

    openBtn.addEventListener('click', () => {
        modalWindow.classList.add(classActive);
    });

    closeBtn.addEventListener('click', () => {
        modalWindow.classList.remove(classActive);
    });
}

export default modalWindow;