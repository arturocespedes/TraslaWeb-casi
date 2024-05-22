'use strict';



/**
 * navbar toggle
 */

const header = document.querySelector("[data-header]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");

navToggleBtn.addEventListener("click", function () {
  header.classList.toggle("nav-active");
  this.classList.toggle("active");
});

/**
 * toggle the navbar when click any navbar link
 */

const navbarLinks = document.querySelectorAll("[data-nav-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    header.classList.toggle("nav-active");
    navToggleBtn.classList.toggle("active");
  });
}

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    
  } else {
    header.classList.remove("active");
    ;
  }
});

const tabCards = document.querySelectorAll("[data-tab-card]");
const previewSection = document.querySelector(".preview");
const navbarHeight = document.querySelector(".navbar").offsetHeight; // Obtener la altura de la barra de navegación

// Función para cerrar todas las descripciones
function closeAllDescriptions() {
  tabCards.forEach(function(tabCard) {
    tabCard.classList.remove("active");
  });
}

// Función para manejar los clics en los tabCards
function handleTabCardClick() {
  const isActive = this.classList.contains("active");

  // Remover la clase activa de todos los tabCards
  tabCards.forEach(function(card) {
    card.classList.remove("active", "down");
  });

  // Si el tabCard no está activo, activarlo
  if (!isActive) {
    this.classList.add("active", "down");
    // Desplazar al usuario al inicio de la descripción, ajustando la posición hacia arriba
    const descriptionElement = this.querySelector(".img-cover");
    descriptionElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
   
  }
}

// Agregar event listener a cada tabCard
tabCards.forEach(function(tabCard) {
  tabCard.addEventListener("click", handleTabCardClick);
});

// Agregar event listener al documento para cerrar las descripciones cuando se hace clic fuera de la sección
document.addEventListener("click", function(event) {
  // Verificar si el clic ocurrió fuera de la sección de vista previa
  if (!previewSection.contains(event.target)) {
    closeAllDescriptions();
  }
});




    
