var slider = document.getElementById('slider');
var output = document.getElementById('slideroutput');
output.innerHTML = `${slider.value} x ${slider.value}`;

slider.oninput = function () {
  output.innerHTML = `${this.value} x ${this.value}`;
};
