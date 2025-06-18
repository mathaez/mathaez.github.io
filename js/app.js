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

const btnDevis = document.getElementById('btn-devis');
if (btnDevis) {
  btnDevis.addEventListener('click', () => {
    window.location.href = '/pages/contact.html';
  });
}

window.addEventListener('load', () => {
  const bars = document.querySelectorAll('.progress');
  bars.forEach(bar => {
    const progress = bar.getAttribute('data-progress');
    setTimeout(() => {
      bar.style.width = progress;
    }, 100);
  });
});

document.getElementById('contact-form').addEventListener('submit', async (e) => {
  e.preventDefault();

  const form = e.target;
  const feedback = document.getElementById('form-feedback');

  // Récupérer les données
  const formData = {
    name: form.name.value.trim(),
    email: form.email.value.trim(),
    message: form.message.value.trim(),
  };

  // Validation simple côté client
  if (!formData.name) {
    feedback.textContent = "Veuillez entrer votre nom complet.";
    return;
  }
  if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
    feedback.textContent = "Veuillez entrer une adresse email valide.";
    return;
  }
  if (!formData.message) {
    feedback.textContent = "Veuillez entrer un message.";
    return;
  }

  feedback.textContent = "Envoi en cours...";

  try {
    const response = await fetch('/api/contact', {  // adapte l'URL selon ton backend
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      feedback.textContent = "Merci pour votre message, je vous répondrai rapidement !";
      form.reset();
    } else {
      feedback.textContent = "Une erreur est survenue, merci de réessayer plus tard.";
    }
  } catch (error) {
    console.error('Erreur lors de l’envoi du formulaire:', error);
    feedback.textContent = "Impossible de contacter le serveur. Vérifiez votre connexion.";
  }
});

