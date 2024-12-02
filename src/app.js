import {calcTotal} from './tools.js'

const doc = {
  trans1Input: document.querySelector('#transport1'),
  trans2Input: document.querySelector('#transport2'),
  trans3Input: document.querySelector('#transport3'),
  totalInput: document.querySelector('#total'),
  calcButton: document.querySelector('#calcButton')
}

doc.calcButton.addEventListener('click', () => {
  const trans1 = Number(doc.trans1Input.value);
  const trans2 = Number(doc.trans2Input.value);
  const trans3 = Number(doc.trans3Input.value);
  const total = calcTotal(trans1, trans2, trans3);
  doc.totalInput.value = String(total);
})