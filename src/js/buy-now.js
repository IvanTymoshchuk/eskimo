// BUY NOW

var inputs = [].slice.call(document.querySelectorAll('.buynow-js')),
  button = document.querySelector('.buynow-button-js');

inputs.forEach(function (el) {
  el.addEventListener('input', checkInputs, false);
});
function checkInputs() {
  var empty = inputs.filter(function (el) {
    return el.value.trim() === '';
  }).length;
  button.disabled = empty !== 0;
}
checkInputs();