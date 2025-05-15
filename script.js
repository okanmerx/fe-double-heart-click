const loveMe = document.querySelector('.loveMe');
const times = document.querySelector('#times');

loveMe.addEventListener('click', createHeart);

function createHeart(e) {
  const heart = document.createElement('i');
  heart.classList.add('fas');
  heart.classList.add('fa-heart');
  heart.style.left = `${e.clientX - loveMe.offsetLeft}px`;
  heart.style.top = `${e.clientY - loveMe.offsetTop}px`;
  loveMe.appendChild(heart);
  times.innerHTML = ++times.innerHTML;

  setTimeout(() => {
    heart.remove();
  }, 1000);
}
