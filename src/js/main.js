import headerFixed from './modules/fixed';
import menuActive from './modules/menuActive';

document.addEventListener('DOMContentLoaded', () => {
    headerFixed('.header', 'header_active');
    menuActive('.header__right', '.header__hamburger', 'nav-active', 'menu-active');
});