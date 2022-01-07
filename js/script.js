var slider = document.getElementById('slider');
var output = document.getElementById('slideroutput');
output.innerHTML = `${slider.value} x ${slider.value}`;

const container = document.querySelector('#container');

/*Create initial grid */
for (let i = 0; i < slider.value * slider.value; i++) {
  const newCell = document.createElement('div');
  newCell.classList.toggle('cell');
  container.appendChild(newCell);
  fillCell(newCell);
}

function fillCell(cell) {
  cell.addEventListener('mouseover', () => {
    cell.setAttribute('style', 'background:#007bff');
  });
}

/*Update grid*/
slider.oninput = function () {
  let sliderValue = this.value;
  output.innerHTML = `${sliderValue} x ${sliderValue}`;
  while (container.firstChild) {
    container.firstChild.remove();
  }

  for (let i = 0; i < slider.value * slider.value; i++) {
    const newCell = document.createElement('div');
    newCell.classList.toggle('cell');
    container.appendChild(newCell);
    fillCell(newCell);
  }

  container.style.setProperty(
    'grid-template-columns',
    'repeat(' + sliderValue + ', 1fr)'
  );
};

const clearBtn = document.querySelector('#clearButton');
clearBtn.addEventListener('click', clearCells);

function clearCells() {
  const cells = container.querySelectorAll('.cell');
  const cellsArray = [...cells];
  cellsArray.forEach((cell) => {
    cell.setAttribute('style', 'background:#2f4553;');
  });
}
