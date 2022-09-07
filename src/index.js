let box1 = document.querySelector('#box1');
let box2 = document.querySelector('#box2');
let box3 = document.querySelector('#box3');
let btnReset = document.querySelector('.btn-reset');

box1.onclick = () => {
  if (box1.checked === true) {
    box1.disabled = 'true';
  }
}

box2.onclick = () => {
  if (box2.checked === true) {
    box2.disabled = 'true';
  }
}

box3.onclick = () => {
  if (box3.checked === true) {
    box3.disabled = 'true';
  }
}

btnReset.onclick = () => {
  box1.disabled = false;
  box1.checked = false;

  box2.disabled = false;
  box2.checked = false;

  box3.disabled = false;
  box3.checked = false;
}