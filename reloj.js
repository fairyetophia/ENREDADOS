const countdown = () => {
    const targetDate = new Date('2025-02-29T00:00:00').getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;
  
    if (difference <= 0) {
      document.querySelector('#note').innerText = "¡La fecha ya ha llegado!";
      clearInterval(interval);
      return;
    }
  
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
  
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
  };
  
  // Actualizar cada segundo
  const interval = setInterval(countdown, 1000);
  countdown(); // Llamada inicial para evitar el retraso de 1 segundo
  
