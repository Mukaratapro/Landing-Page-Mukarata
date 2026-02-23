console.log("Mukarata Landing Loaded");
const video = document.getElementById('heroVideo');
const muteBtn = document.getElementById('muteBtn');
const muteIcon = document.getElementById('muteIcon');

muteBtn.addEventListener('click', () => {
  if (video.muted) {
    video.muted = false;
    muteIcon.innerText = '🔊'; // Ikon suara nyala
    muteBtn.style.background = 'rgba(106, 13, 173, 0.8)';
  } else {
    video.muted = true;
    muteIcon.innerText = '🔇'; // Ikon mute
    muteBtn.style.background = 'rgba(255, 255, 255, 0.2)';
  }
});
