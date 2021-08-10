import headerFixed from './modules/fixed';
import menuActive from './modules/menuActive';
import modalWindow from './modules/modal';

document.addEventListener('DOMContentLoaded', () => {
    headerFixed('.header', 'header_active');
    menuActive('.header__right', '.header__hamburger', 'nav-active', 'menu-active');
    modalWindow('.header__feedback button', '.modal-close', '.modal-feedback', 'modal-active');
});