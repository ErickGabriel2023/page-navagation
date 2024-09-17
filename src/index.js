const menuPrincipal = document.querySelector('.menu-principal')
const ativacaoMenuPrincipal = document.getElementById('menuAtivo')
const openMenu = document.getElementById('open-menu')
const closeMenu = document.getElementById('close-menu')
const overlay = document.querySelector('.overlay')

console.log(ativacaoMenuPrincipal)

openMenu.addEventListener('click', abrirMenu)
closeMenu.addEventListener('click', fecharMenu)

function abrirMenu() {
    ativacaoMenuPrincipal.style.display = 'flex'
    menuPrincipal.classList.add('ativo')
    overlay.classList.add('ativo')
}

function fecharMenu() {
    ativacaoMenuPrincipal.style.display = 'none'
    menuPrincipal.classList.remove('ativo')
    overlay.classList.remove('ativo')
}