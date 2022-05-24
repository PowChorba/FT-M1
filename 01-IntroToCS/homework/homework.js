'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  let suma = 0;
  for (let i = 0; i < num.length; i++) {
    suma += num[i] * 2 ** (num.length - 1 - i);
  }
  return suma
}

function DecimalABinario(num) {
  // tu codigo aca
  let string = '';
  while (num > 0) {
    string = (num % 2) + string
    num = Math.floor(num / 2);
  }
  return string;
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}