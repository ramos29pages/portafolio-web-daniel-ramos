console.log('Animation running');

let sections = document.querySelectorAll('.container section');

let observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !(entry.target.id == 'home')) {
      console.log(entry.target.id);
      entry.target.classList.add('visible');
    } else if (!(entry.target.id == 'home')) {
      entry.target.classList.remove('visible');
    }
  });
});

sections.forEach(section => {
  observer.observe(section);
});
