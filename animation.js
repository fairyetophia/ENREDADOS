// Configuración de ScrollReveal para ambos tipos de animaciones
ScrollReveal().reveal(".reveal-animation", {
  duration: 1000,   
  origin: "bottom", // Animación desde abajo
  distance: "50px", 
  delay: 200,        
  reset: true       // Permite que las animaciones se repitan cada vez que el elemento entra al viewport
});

ScrollReveal().reveal(".reveal-animation", {
  duration: 1000,   
  origin: "top",    // Animación desde arriba
  distance: "50px", 
  delay: 200,        
  reset: true       // Permite que las animaciones se repitan cada vez que el elemento entra al viewport
});
