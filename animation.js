// Configuración inicial de ScrollReveal para animar desde abajo
ScrollReveal().reveal(".reveal-animation", {
    duration: 1000,   
    origin: "bottom", 
    distance: "50px", 
    delay: 200,        
    reset: false       // Solo se anima una vez
  });
  
  // Variable para verificar si ya se ha animado desde arriba
  let animatedFromTop = false;
  
  // Función para animar desde arriba al llegar al final de la página
  function animateFromTop() {
    if (!animatedFromTop) {
      ScrollReveal().reveal(".reveal-animation", {
        duration: 1000,
        origin: "top",   // Cambia la dirección de la animación a 'top'
        distance: "50px",
        delay: 200,
        reset: false     // Solo se anima una vez desde arriba
      });
      animatedFromTop = true;  // Marca que la animación desde arriba ya ha ocurrido
    }
  }
  
  // Evento de desplazamiento para detectar cuando el usuario llega al final de la página
  window.addEventListener("scroll", () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
      animateFromTop();  // Llama a la función para animar desde arriba
    }
  });