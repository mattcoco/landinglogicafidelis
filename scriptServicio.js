// About: Archivo script.js para el index de Logica Fidelis

// El menu nav, general. Eliminar si alguna vez se junta al resto
const navButton = document.getElementById('nav-button');
const navUl = document.getElementById('ul-peque');
navButton.addEventListener('click', () => {
    navUl.classList.toggle('show');
})

// Scroll appear para Info1 ("¿Por qué Logica Fidelis?")

window.addEventListener('scroll', scrollAppearServicio);
const infoWeb = document.getElementById('infoWeb');
const infoMarketing = document.getElementById('infoMarketing');
const infoEcommerce = document.getElementById('infoEcommerce');
const infoGestion = document.getElementById('infoGestion');

const textoWeb = document.getElementById('textoWeb');
const textoMarketing = document.getElementById('textoMarketing');
const textoEcommerce = document.getElementById('textoEcommerce');
const textoGestion = document.getElementById('textoGestion');

const imgWeb = document.getElementById('imgWeb');
const imgMarketing = document.getElementById('imgMarketing');
const imgEcommerce = document.getElementById('imgEcommerce');
const imgGestion = document.getElementById('imgGestion');
scrollAppearServicio;
function scrollAppearServicio() {
    const triggerBottom = window.innerHeight / 5 * 4;
    const elemTopW = infoWeb.getBoundingClientRect().top;
    if(elemTopW < triggerBottom) {
        textoWeb.classList.add('mostrar');
        imgWeb.classList.add('mostrar');
    }
    const elemTopM = infoMarketing.getBoundingClientRect().top;
    if(elemTopM < triggerBottom) {
        textoMarketing.classList.add('mostrar');
        imgMarketing.classList.add('mostrar');
    }
    const elemTopE = infoEcommerce.getBoundingClientRect().top;
    if(elemTopE < triggerBottom) {
        textoEcommerce.classList.add('mostrar');
        imgEcommerce.classList.add('mostrar');
    }
    const elemTopG = infoGestion.getBoundingClientRect().top;
    if(elemTopG < triggerBottom) {
        textoGestion.classList.add('mostrar');
        imgGestion.classList.add('mostrar');
    }
        
}


// Intento de scrollAppear pero por función
// const serviciosContainer = document.querySelector('.servicios-container');
// window.addEventListener('scroll', scrollAppear(serviciosContainer));
// function scrollAppear(elem) {
//     const triggerBottom = window.innerHeight / 5 * 4;
//     const elemTop = elem.getBoundingClientRect().top;
//     if(elemTop < triggerBottom) {
//         elem.classList.add('mostrar');
//     } else {
//         elem.classList.remove('mostrar');
//     }
// }

