const scenes = {
  city: document.getElementById('city'),
  lobby: document.getElementById('lobby'),
  theater: document.getElementById('theater')
};
const movie = document.getElementById('movie');
const watchBtn = document.getElementById('watchBtn');
const seatLabel = document.getElementById('seatLabel');
const message = document.getElementById('message');
let selectedSeat = null;

function show(name){
  Object.values(scenes).forEach(s => s.classList.remove('active'));
  scenes[name].classList.add('active');
}
document.getElementById('enterBtn').onclick = () => show('lobby');

document.querySelectorAll('.seat').forEach(btn => {
  btn.onclick = () => {
    document.querySelectorAll('.seat').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    selectedSeat = btn.dataset.seat;
    watchBtn.disabled = false;
    watchBtn.textContent = 'WATCH MOVIE';
  };
});

watchBtn.onclick = () => {
  seatLabel.textContent = 'SEAT ' + selectedSeat;
  show('theater');
  movie.currentTime = 0;
  message.textContent = 'Press play to start the screening.';
};

document.getElementById('backBtn').onclick = () => {
  movie.pause();
  show('lobby');
};

movie.addEventListener('play', () => message.textContent = 'SCREENING NOW PLAYING');
movie.addEventListener('ended', () => message.textContent = 'THE END — THANK YOU FOR WATCHING');
