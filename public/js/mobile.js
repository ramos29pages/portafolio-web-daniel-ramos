console.log('mobile.js is running')

const d = document;
const burger = d.querySelector('.hamburguesa');
const title = d.querySelector('.title');
const estilo = d.querySelector('#estilos');
const nav = d.querySelector('.enlaces');
const links = d.querySelectorAll('a');
let isConnected = false;
let seccionActual = 'Inicio';

estilo.href = './public/css/mobiles.css';

window.addEventListener('resize', (e) => {
    let ancho = window.innerWidth;
    (ancho >= 850) ? estilo.href = './public/css/index.css' : estilo.href = './public/css/mobiles.css';
});

burger.addEventListener('click', toogleNav)


function toogleNav() {
    if (isConnected) {
        nav.style.display = 'none';
        isConnected = false;
        burger.innerHTML = `<h3 class="seccionActual">${seccionActual}</h3><i class="fa-solid fa-bars animate__animated animate__bounceIn"></i>`;
    } else {
        nav.style.display = 'grid';
        burger.innerHTML = '<i class="fa-solid fa-xmark animate__animated animate__bounceIn"></i>';
        isConnected = true;
    }
};

links.forEach(link => {
    link.addEventListener('click', (e) => {
        console.log(e.target.innerHTML);
        seccionActual = e.target.innerHTML.toString();
        isConnected = false;
        burger.innerHTML = `<h3 class="seccionActual">${seccionActual}</h3><i class="fa-solid fa-bars animate__animated animate__bounceIn"></i>`;
        nav.style.display = 'none';
        if (seccionActual == 'Skills' && window.innerWidth < 800) {
            let seccion = document.getElementById('skills2');
            seccion.scrollIntoView({ behavior: 'smooth' });
            console.log(seccion)
        }
    })
});
