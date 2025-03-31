const likeBtn = document.getElementById('likeBtn');

likeBtn.addEventListener('click', () => {
  if (likeBtn.textContent === '🤍') {
    likeBtn.textContent = '❤️'; // red heart
  } else {
    likeBtn.textContent = '🤍'; // white heart
  }
});
