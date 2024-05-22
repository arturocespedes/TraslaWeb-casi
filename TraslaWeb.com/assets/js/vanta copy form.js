window.addEventListener('scroll', function() {
    var bg = document.getElementById('bg');
    var scrollPosition = window.scrollY;
    var opacityValue = 1 - (scrollPosition / window.innerHeight); // Cambia la opacidad basada en la posición de desplazamiento
    if (scrollPosition === 0) {
        bg.style.opacity = '0.4'; // Si estás arriba del scroll, establece la opacidad a 1
      } else {
        bg.style.opacity = '0.2'; // Si no estás arriba del scroll, establece la opacidad a 0.4
      }
    });