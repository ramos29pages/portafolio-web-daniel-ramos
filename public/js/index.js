console.log('Running index');

const btnDescargar = document.querySelector('.btn-descargar');
const btnContacto = document.querySelector('.btn-contacto');
const nav = document.querySelector('nav');
const light = document.querySelector('.light');
const ancho = window.innerWidth;
const estilo = document.querySelector('#estilos');
const roles = document.querySelector('.rol');
let links = document.querySelectorAll('.link');
let urlDeTuPDF = 'https://drive.google.com/file/d/1k0GEGj4aRjuc9PlnmV8tGVlfdsh7jAfB/view?usp=sharing';
const areas = [
    'Ingeniero de Sistemas ',
    'FrontEnd Developer ',
    'Automatizacion de procesos  ',
    'Backend Developer ',
    'Ingeniero de Sistemas ',
    'Full Stack Developer ',
    'Desarrollador Web ',
    'Automatizacion de procesos ',
    'Freelancer  ',
];

const ROL = 'daniel';
let posicionCaracter = 0;
let posicionArray = 0;

document.addEventListener('mousemove', function (event) {

    const mouseX = event.pageX;
    const mouseY = event.pageY;

    light.style.display = 'block';
    light.style.left = mouseX + 'px';
    light.style.top = mouseY + 'px';
});

 btnDescargar.addEventListener('mouseout', function () {
    light.style.display = 'none';
});

btnContacto.addEventListener('click', ()=>{
    window.location.href = '#contact';
});

btnDescargar.addEventListener('mouseover', function (e) {
    e.stopPropagation();
    e.preventDefault();
 btnDescargar.innerHTML = '<i class="fa-solid fa-circle-down icon-d"></i>';
});
 btnDescargar.addEventListener('mouseout', function (e) {
    e.stopPropagation();
    e.preventDefault();
 btnDescargar.innerHTML = 'Descargar HV';
});


btnDescargar.addEventListener('click', (e)=>{
    e.stopPropagation();
    e.preventDefault();
    window.open(urlDeTuPDF, '_blank');
});

function mostrarRol() {
    // console.log('POS:: ',posicionArray);
    if (posicionCaracter < areas[posicionArray].length) {
        roles.textContent += areas[posicionArray].charAt(posicionCaracter);
        posicionCaracter++;
        setTimeout(mostrarRol, 100);
    } else{
       ocultarRol();
    }

};

function ocultarRol() {
    // console.log('Position Array ::: ', areas[posicionArray].length,areas[posicionArray],'Position Caracter :::', posicionCaracter);
    roles.textContent = areas[posicionArray].substring(0, posicionCaracter);
    posicionCaracter--;
    if(posicionCaracter >= 0) {
        setTimeout(ocultarRol,100)
    }else{
        posicionArray++;
        if(!areas[posicionArray]) posicionArray = 0;
        mostrarRol();
    }
}

mostrarRol();


(ancho <= 850) ? script.src = './public/js/mobile.js' : './public/js/index.js';

window.addEventListener('resize', (e) => {
    e.stopPropagation();
    let ancho = window.innerWidth;
    if (ancho <= 850) {
        script.src = './public/js/mobile.js';
        estilo.href = './public/css/mobiles.css';
    } else {
        estilo.href = './public/css/index.css';
        // nav.style.display = 'none'
    }
});

links.forEach(link => {
    link.addEventListener('click', (e)=>{
        if (e.target.classList.contains('link')) {
            links.forEach(link=>{
                link.classList.remove('linkActivo')
            });
        }
        e.target.classList.add('linkActivo');
    });
});

