
# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

```javascript
x = 1;
var a = 5;
var b = 10;
var c = function(a, b, c) {
  var x = 10;
  console.log(x); //10
  console.log(a); // Me devuelve el valor que le asigne a 'a' (8);
  var f = function(a, b, c) {
    b = a;
    console.log(b); // 8;
    b = c; // 10
    var x = 5;
  }
  f(a,b,c);
  console.log(b); // 9 --- Es '9' porque al estara afuera de la funcion f, agarra el valor que se le asigna en la funcion c.
}
c(8,9,10);
console.log(b); // 10
console.log(x); // 1
```

```javascript
console.log(bar); // undefined
console.log(baz); // Error, porque 'baz' no esta declarada abajo. Si le agregas un 'let', 'var' o 'const', cambiaria de ERROR a UNDEFINED.
foo(); // Esto no llega a correr, ya que 'baz' tira error, pero sino devolveria el string 'Hola!'.
function foo() { console.log('Hola!'); }
var bar = 1;
baz = 2;
```

```javascript
var instructor = "Tony";
if(true) {
    var instructor = "Franco";
}
console.log(instructor); //Franco
```

```javascript
var instructor = "Tony";
console.log(instructor); //Tony
(function() {
   if(true) {
      var instructor = "Franco";
      console.log(instructor); //Franco
   }
})();
console.log(instructor); // Tony
```

```javascript
var instructor = "Tony";
let pm = "Franco";
if (true) {
    var instructor = "The Flash";
    let pm = "Reverse Flash";
    console.log(instructor); //The Flash --- Se modifica porque es un 'var'.
    console.log(pm); //Reverse Flash --- Aca si se modifica, por mas que sea let, porque primero busca lo que esta adentro de su bloque.
}
console.log(instructor); //The flash --- El 'var' global, fue pisado por el segundo.
console.log(pm); //Franco --- Porque al ser un 'let' no se modifica.
```
### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3"  // Devuelve 2
"2" * "3" // Devuelve 6
4 + 5 + "px" // Devuelve 9px
"$" + 4 + 5 // Devuelve $9
"4" - 2 // Devuelve 2
"4px" - 2 // Devuelve NaN
7 / 0 // 1
{}[0]
parseInt("09") // Devuelve 9
5 && 2 // Devuelve 2, el ultimo numero.
2 && 5 // Devuelve 5, el ultimo numero.
5 || 0 // Devuelve 5, el primero numero.
0 || 5 // Devuelve 0, el primero numero.
[3]+[3]-[10] 
3>2>1
[] == ![] // Devuelve true, porque es igual que no son iguales.
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).


### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
   console.log(a); // undefined --- Porque esta definida mas abajo, lo que hace es que le reserva el lugar pero no lo devuelve.
   console.log(foo()); // 2 -- Al estar definida mas abajo y ser una funcion, a diferencia de las variables, los guarda en memoria y retorna el valor.

   var a = 1;
   function foo() {
      return 2;
   }
}

test(); 
```

Y el de este código? :

```javascript
var snack = 'Meow Mix';

function getFood(food) {
    if (food) {
        var snack = 'Friskies';
        return snack;
    }
    return snack; 
}

getFood(false); // No retorna nada, porque la variable snack esta definida por afuera de la funcion, pero como es un statement no busca por afuera de la variable.
```


### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;   // Aurelio de Rosa --- El this busca el fullname dentro del objeto 'prop'. En caso de que no existiera dentro del 'prop', retornaria undefined.
      }
   }
};

console.log(obj.prop.getFullname()); // Aurelio de Rosa 

var test = obj.prop.getFullname;

console.log(test()); // ¿Por que devuelve Juan Perez?
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
   console.log(1);
   setTimeout(function() { console.log(2); }, 1000);
   setTimeout(function() { console.log(3); }, 0);
   console.log(4);
}

printing(); // El orden seria 1 - 4 - 3 - 2. Devuelve la primer linea, la segunda linea al ser una funcion mas compleja la manda a otro 'hilo' para que la procese y sigue corriendo. Con la tercer linea ocurre lo mismo. Y con la cuarta la corre enseguida. Una ves recorrida la ultima linea, se 'acuerda' que tiene otros datos pendientes y los corre. Pero la tercer linea al ser mas rapida, la lee primero.
```
