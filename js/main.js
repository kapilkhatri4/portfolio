const navBtn = document.querySelector('.navbar-toggler');
const navBtnIcon = document.querySelector('.navbar-toggler i');
const navbar = document.querySelector('nav');
document.addEventListener('click', function (e)
{
  const clicked = e.target.closest('.navbar-toggler');
  if (clicked) {
    navbar.classList.toggle('nav-active');
    navBtnIcon.classList.toggle('fa-times');
  }
  if (!clicked) {
    navbar.classList.remove('nav-active');
    navBtnIcon.classList.toggle('fa-times');
  
  }
  
})

const title = document.querySelector('.title');
const letters = Array.from(title.textContent);
console.log(letters)
title.textContent = ' ';

letters.forEach(letter =>
{
  const span = document.createElement('span');
  span.textContent = letter;
  title.appendChild(span)
});

let letter = 0;
let timer = setInterval(fadeLetter, 100);

function fadeLetter()
{
  const spanLetter = document.querySelectorAll('span')[letter];
  spanLetter.className = 'fade';
  letter++;
  letter === letters.length + 1 && clearInterval(timer)
}

