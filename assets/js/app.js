const menuToggler = document.querySelector('#toggler')
const menu = document.querySelector('ul.nav')

menuToggler.addEventListener('click', (e)=>
    menu.classList.toggle('active')
)