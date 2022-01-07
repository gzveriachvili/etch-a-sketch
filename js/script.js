var slider = document.getElementById('slider');
var output = document.getElementById('slideroutput');

output.innerHTML = `${slider.value} x ${slider.value}`;

const container = document.querySelector('#container');
const cells = container.querySelectorAll('.cell');

/*Create initial grid */
for (let i = 0; i < slider.value * slider.value; i++) {
  const newCell = document.createElement('div');
  newCell.classList.toggle('cell');
  container.appendChild(newCell);
}

/*Update grid**/
const updateGrid = () => {};
slider.oninput = function () {
  let sliderValue = this.value;
  output.innerHTML = `${sliderValue} x ${sliderValue}`;
  while (container.firstChild) {
    container.firstChild.remove();
  }

  for (let i = 0; i < slider.value * slider.value; i++) {
    const newCell = document.createElement('div');
    newCell.classList.toggle('cell');
    newCell.setAttribute('style', '');
    container.appendChild(newCell);
  }

  container.style.setProperty(
    'grid-template-columns',
    'repeat(' + sliderValue + ', 1fr)'
  );
};
