function updateClock() {
  const now = new Date();
  const time = now.toLocaleTimeString('fr-FR', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });
  const clock = document.getElementById("clock");
  if (clock) {
    clock.textContent = "Heure actuelle : " + time;
  }
}

// Démarrer l’horloge
setInterval(updateClock, 1000);
updateClock(); // appel initial
console.log("Script chargé !");
