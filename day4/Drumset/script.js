document.addEventListener('DOMContentLoaded', function() {
    const drumPads = document.querySelectorAll('.drum-pad');
    drumPads.forEach(pad => {
      pad.addEventListener('click', function() {
        const soundKey = this.getAttribute('data-key');
        playSound(soundKey);
        animatePad(this);
      });
    });
  
    document.addEventListener('keydown', function(e) {
      const soundKey = e.keyCode.toString();
      const pad = document.querySelector(`.drum-pad[data-key="${soundKey}"]`);
      
      if (pad) {
        playSound(soundKey);
        animatePad(pad);
      }
    });
  
    function playSound(key) {
      const audio = document.querySelector(`audio[data-key="${key}"]`);
      if (!audio) return;
      
      try {
        audio.currentTime = 0;
        audio.play().catch(e => {
          console.error("Erreur de lecture audio:", e);
          alert("Pour jouer les sons, cliquez d'abord sur n'importe quel pad de batterie");
        });
      } catch (e) {
        console.error("Erreur avec l'élément audio:", e);
      }
    }
  
    function animatePad(pad) {
      pad.classList.add('playing');
      
      setTimeout(() => {
        pad.classList.remove('playing');
      }, 70);
    }
  
    document.body.addEventListener('click', function init() {
      const silentAudio = new Audio('data:audio/wav;base64,UklGRl9vT19XQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YU...');
      silentAudio.volume = 0;
      silentAudio.play().then(() => {
        console.log("Audio context unlocked");
      }).catch(e => {
        console.log("Audio context already unlocked");
      });
      
      document.body.removeEventListener('click', init);
    }, { once: true });
  });