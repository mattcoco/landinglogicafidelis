// El menu nav, general. Eliminar si alguna vez se junta al resto
const navButton = document.getElementById('nav-button');
const navUl = document.getElementById('ul-peque');
navButton.addEventListener('click', () => {
    navUl.classList.toggle('show');
})

// A partir de aqui es exclusivo de esta pág; Contacto.html
const buttonPresup = document.getElementById('elegir-presupuesto');
const buttonInfo = document.getElementById('elegir-informacion');
const bloquePresup = document.getElementById('bloque-presupuesto')
const bloquePresupAddem = document.getElementById('bloque-presupuesto-addendum')
const bloquePregunta = document.getElementById('bloque-pregunta')
const bloquePreguntaAddem = document.getElementById('bloque-pregunta-addendum')
//Función para quitar todas las clases active
function desactivarTodo() {
    buttonPresup.classList.remove('active');
    buttonInfo.classList.remove('active');
    bloquePresup.classList.remove('active');
    bloquePresupAddem.classList.remove('active');
    bloquePregunta.classList.remove('active');
    bloquePreguntaAddem.classList.remove('active');
}
// El botón "Quiero pedir un presupuesto" activa los bloques de Presupuesto
buttonPresup.addEventListener('click', () => {
    desactivarTodo()
    buttonPresup.classList.add('active');    
    bloquePresup.classList.add('active');
    bloquePresupAddem.classList.add('active');
});
// El botón "Tengo otra clase de pregunta" activa los bloques de Pregunta
buttonInfo.addEventListener('click', () => {
    desactivarTodo();
    buttonInfo.classList.add('active');
    bloquePregunta.classList.add('active');
    bloquePreguntaAddem.classList.add('active');
});
