// About: Archivo script.js para el index de Logica Fidelis

// El menu nav, general. Eliminar si alguna vez se junta al resto
const navButton = document.getElementById('nav-button');
const navUl = document.getElementById('ul-peque');
navButton.addEventListener('click', () => {
    navUl.classList.toggle('show');
})

// Usado para la rotación de letras en el landing
const textLanding = document.querySelector('.landing').getElementsByTagName("h1");
let state = 1;
changeLandingMsg();
setInterval(changeLandingMsg, 2500);
function changeLandingMsg() {
    switch (state) {
        case 1:
            for (let i = 0; i <= textLanding.length-1; i ++) {
                textLanding[i].classList.remove('active');
            }
            textLanding[0].classList.toggle('active');
            break;
        case 2:
            textLanding[1].classList.toggle('active');            
            break;
        case 3:
            textLanding[0].classList.toggle('active');
            textLanding[1].classList.toggle('active');
            textLanding[2].classList.toggle('active');
            break;
        case 4:
            textLanding[3].classList.toggle('active');
            break;
        case 5:
            textLanding[3].classList.toggle('active');
            textLanding[4].classList.toggle('active');
            break;
        case 6:
            textLanding[4].classList.toggle('active');          
            textLanding[5].classList.toggle('active');
            break;

    }

    if (state === 6) {
        state = 0;
    } else {
        state++;
    }
}

// Scroll appear para Info1 ("¿Por qué Logica Fidelis?")
window.addEventListener('scroll', scrollAppear);
scrollAppear;
const info1 = document.getElementById('info1');
const info2 = document.getElementById('info2');
const info3 = document.getElementById('info3');
function scrollAppear() {
    const triggerBottom = window.innerHeight / 5 * 4;
    const elemTop1 = info1.getBoundingClientRect().top;
    if(elemTop1 < triggerBottom) {
        info1.classList.add('mostrar');
    }
    const elemTop2 = info2.getBoundingClientRect().top;
    if(elemTop2 < triggerBottom) {
        info2.classList.add('mostrar');
    }
    const elemTop3 = info3.getBoundingClientRect().top;
    if(elemTop3 < triggerBottom) {
        info3.classList.add('mostrar');
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

