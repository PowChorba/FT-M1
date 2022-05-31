"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;

}

BinarySearchTree.prototype.size = function () {
  
  if (!this.left && !this.right) {
    return 1
  }
  if(!this.left && this.right){
    return 1 + this.right.size()
  }
  if(this.left && !this.right) {
    return 1 + this.left.size()
  }
  if(this.left && this.right) {
    return 1 + this.left.size() + this.right.size();
  }


}


BinarySearchTree.prototype.insert = function (value) {
  const newRoot = new BinarySearchTree(value);
  // if (this.value < value) {
  //   if (!this.right) {
  //     this.right = newRoot;
  //   }
  //   this.right.insert(value)
  // }
  // if (this.value > value) {
  //   if (!this.left) {
  //     this.left = newRoot;
  //   }
  //   this.left.insert(value);
  // }
  if(this.value > value) {
    if(this.left) {
      this.left.insert(value)
    }
    else {
      this.left = newRoot;
    }
  }
  if(this.value < value ){
    if(this.right){
      this.right.insert(value);
    }
    else {
      this.right = newRoot;
    }
  }
  


}

BinarySearchTree.prototype.contains = function (check) {
//   if (this.value > check && this.left) {
//     return this.left.contains(check)
//   }
//   if (this.value < check && this.right) {
//     return this.right.contains(check)
//   }
//   if (this.value === check) {
//     return true;
//   }
//   return false

// }
if(this.value === check) {
  return true
}
if(this.value > check) {
  if(this.left) {
    return this.left.contains(check);
  } else {
    return false
  }
}
if(this.value < check) {
  if(this.right) {
    return this.right.contains(check);
  } else {
    return false;
  }
}
}

BinarySearchTree.prototype.depthFirstForEach = function (cb, variantes) {
  if (variantes === 'in-order' || !variantes) {
    if (this.left) {
      this.left.depthFirstForEach(cb, variantes);
    }
    cb(this.value);
    if (this.right) {
      this.right.depthFirstForEach(cb, variantes);
    }

  } else if (variantes === 'pre-order') {
    cb(this.value)
    if (this.left) {
      this.left.depthFirstForEach(cb, variantes);
    }
    if (this.right) {
      this.right.depthFirstForEach(cb, variantes)
    }

  } else if (variantes === 'post-order') {
    if (this.left) {
      this.left.depthFirstForEach(cb, variantes)
    }
    if (this.right) {
      this.right.depthFirstForEach(cb, variantes)
    }
    cb(this.value)

  }



}


BinarySearchTree.prototype.breadthFirstForEach = function (callback, array = []) { 
  callback(this.value)
  
  if(this.left){
    array.push(this.left);
  }
  if(this.right){
    array.push(this.right);
  }
  if(array.length > 0){
    array.shift().breadthFirstForEach(callback,array)
  }
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
