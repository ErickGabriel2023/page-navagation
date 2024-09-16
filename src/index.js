const menuPrincipal = document.querySelector('.menu-principal')
const openMenu = document.getElementById('open-menu')
const closeMenu = document.getElementById('close-menu')
const overlay = document.querySelector('.overlay')

openMenu.addEventListener('click', abrirMenu)
closeMenu.addEventListener('click', fecharMenu)

function abrirMenu() {
    menuPrincipal.classList.toggle('ativo')
    overlay.classList.toggle('ativo')
}

function fecharMenu() {
    menuPrincipal.classList.remove('ativo')
    overlay.classList.remove('ativo')
}