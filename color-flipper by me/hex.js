const btn = document.querySelector('#btn');
const color = document.querySelector('.color');

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

function getRandomNumber(){
  return Math.floor(Math.random() * hex.length);
}

btn.addEventListener('click', function(){
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }

  document.body.style.backgroundColor = hexColor;
  color.textContent = hexColor;
});
