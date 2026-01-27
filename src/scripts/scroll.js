document.addEventListener('scroll', () => {
    const navbar = document.querySelector('nav');

    if (scrollY === 0) {
        navbar.classList.toggle('scroll', false)
        return
    }
    navbar.classList.toggle('scroll', true)

    if (deploy_button.classList.contains('active')) {
        deploy_button.classList.toggle('active', false)
        menu_display.classList.toggle('active', false)
    }

    document.body.style.overflow = deploy_button.classList.contains('active') ? 'hidden' : '';
    document.documentElement.style.overflow = deploy_button.classList.contains('active') ? 'hidden' : '';

})