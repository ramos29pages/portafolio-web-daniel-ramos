console.log('Animation running');

// Primero, selecciona todos los elementos <section> dentro del contenedor
let sections = document.querySelectorAll('.container section');

// Crea una nueva instancia de IntersectionObserver
let observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    // Si el elemento está en la pantalla
    if (entry.isIntersecting) {
      // Agrega una clase 'visible' al elemento
      entry.target.classList.add('visible');
    } else {
      // Si el elemento no está en la pantalla, remueve la clase 'visible'
      entry.target.classList.remove('visible');
    }
  });
});

// Observa cada sección
sections.forEach(section => {
  observer.observe(section);
});
