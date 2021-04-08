const msbtn = document.getElementById('msbtn');
const input = document.getElementById('input');
const label = document.getElementById('label');

let seed = NaN;

function getSeed() {
  seed = input.value();
  seed *= 1;
  seed += Math.pow(2, 48);
}

msbtn.addEventListener("click", function() {
  getSeed();
  label.textContent = `Your new seed is: ${seed}`;
});
