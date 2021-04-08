const msbtn = document.getElementById('msbtn');
const input = document.getElementById('input');
const label = document.getElementById('label');

let seed = undefined;



msbtn.addEventListener("click", function() {
  seed += math.pow(2, 48);
  label.textContent = `Your new seed is: ${seed}`
});
