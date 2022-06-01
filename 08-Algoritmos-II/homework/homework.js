'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if(array.length < 1){
    return [];
  }
  let left = [];
  let right = [];
  let num = array[0];
  let arrFinal = [];

  for(let i = 1; i < array.length; i++){
    if(array[i] < num){
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }
  return arrFinal.concat(quickSort(left), num, quickSort(right))
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  function merge(left,right){
    let arr = [];
    while(left.length && right.length){
      if(left[0] < right[0]){
        arr.push(left.shift());
      } else {
        arr.push(right.shift());
      }
    }
    return arr.concat(left,right)
  }
  const mitad = array.length / 2;
  if(array.length < 2){
    return array;
  }

  let left = array.splice(0, mitad)
  return merge(mergeSort(left), mergeSort(array))
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
