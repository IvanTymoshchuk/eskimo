// N U T R I T I O N

var inputs = [].slice.call(document.querySelectorAll('.nutrition-js')),
  button = document.querySelector('.nutrition-button-js');

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