/*
    functionallity for the nav menu on the aside tag :v
*/

const deploy_button = document.querySelector('.menu-button');
const menu_display = document.querySelector('aside');

deploy_button.addEventListener('click', () => {
    deploy_button.classList.toggle('active');
    menu_display.classList.toggle('active');
})