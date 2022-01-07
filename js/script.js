var slider = document.getElementById('slider');
var picker = document.getElementById('picker');
var output = document.getElementById('slideroutput');
var rainbowTog = false;
var eraserTog = false;
var defaultTog = true;
output.innerHTML = `${slider.value} x ${slider.value}`;

const container = document.querySelector('#container');

function createInitialGrid() {
  for (let i = 0; i < slider.value * slider.value; i++) {
    const newCell = document.createElement('div');
    newCell.classList.toggle('cell');
    container.appendChild(newCell);
    fillCell(newCell);
  }
}

function fillCell(cell) {
  var randomColor = Math.floor(Math.random() * 16777215).toString(16);
  var someCol = 'fff';
  cell.addEventListener('mouseover', () => {
    if (!rainbowTog && !eraserTog && defaultTog) {
      cell.setAttribute('style', 'background:#15252D');
    } else if (!eraserTog && rainbowTog) {
      cell.style.setProperty('background', '#' + randomColor);
    } else {
      cell.setAttribute('style', 'background:#2f4553');
    }
  });
}

function setSlider() {
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
}

const clearBtn = document.querySelector('#clearButton');
clearBtn.addEventListener('click', clearCells);

function clearCells() {
  const cells = container.querySelectorAll('.cell');
  const cellsArray = [...cells];
  cellsArray.forEach((cell) => {
    cell.setAttribute('style', 'background:#2f4553;');
    rainbowTog = false;
    eraserTog = false;
    defaultTog = true;
  });
}

const rainbowBtn = document.querySelector('#rainbow');
rainbowBtn.addEventListener('click', () => {
  rainbowTog = true;
  eraserTog = false;
  defaultTog = false;
});

const eraserBtn = document.querySelector('#eraser');
eraserBtn.addEventListener('click', () => {
  eraserTog = true;
  rainbowTog = false;
  defaultTog = false;
});

const defaultBtn = document.querySelector('#defaultButton');
defaultBtn.addEventListener('click', () => {
  defaultTog = true;
  eraserTog = false;
  rainbowTog = false;
});

function main() {
  createInitialGrid();
  setSlider();
}

main();
