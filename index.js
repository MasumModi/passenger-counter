let counter = 0;
let countEl = document.getElementById('count-el');
let saveEl = document.getElementById('save-el');

function increment() {
  counter += 1;
  countEl.textContent = counter;
}

function save() {
  saveEl.textContent += counter + ' - ';
  counter = 0;
  countEl.textContent = counter;
}
