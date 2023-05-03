const btn = document.querySelector('#btn');
const color = document.querySelector('.color');

const colors = ["green", "red", "rgba(133,122,200)", "#f15025", "orange", "purple"];

function getRandomNumber(){
  return Math.floor(Math.random() * colors.length);
}

btn.addEventListener('click', function(){
  const randomNumber = getRandomNumber();
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});
