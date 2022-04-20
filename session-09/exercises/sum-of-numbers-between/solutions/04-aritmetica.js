const sumOfNumbers = (N = 200) => {
  // Entonces tomémonos algunos minutos para analizar el problema, más allá del
  // pensamiento lineal que nos lleva a una implementación como el de `fuerza bruta`

  // 200 es un numero grande, y si bien la suma "a mano" la podemos hacer,
  // para un analisis preliminar, es bueno comenzar con un problema más acotado,
  // para poder explorar y probar hipótesis, más rápido

  // Entonces, en lugar de comenzar con 200, vamos a comenzar con N = 10
  // 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = 55
  // sumOfNumber para N = 10 deberia retornar 55

  /*
  Sabemos entonces que:

  1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = 55
  
  Que lo podriamos escribir asi:
  (1 + 2) + (3 + 4) + (5 + 6) + (7 + 8) + (9 + 10) = 55
  3 + 7 + 11 + 15 + 19 = 55
  
  Como la suma es conmutativa
  > En matemáticas, la propiedad conmutativa o conmutatividad es una propiedad
  > fundamental que tienen algunas operaciones según la cual el resultado de
  > operar dos elementos no depende del orden en el que se toman. Esto se
  > cumple en la adición y la multiplicación ordinarias: el orden de los
  > sumandos no altera la suma, o el orden de los factores no altera el producto.
  > [wikipedia](https://es.wikipedia.org/wiki/Conmutatividad)

  La expresion
  1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = 55
  tb la podriamos escribir con los numeros puestos en cualquier orden, por ejemplo
  1 + 10 + 2 + 9 + 3 + 8 + 4 + 7 + 5 + 6 = 55
  Y hacer lo mismo de antes
  (1 + 10) + (2 + 9) + (3 + 8) + (4 + 7) + (5 + 6) = 55
  11 + 11 + 11 + 11 + 11 = 55
  5 * 11 = 55

  Para este caso de N = 10, podriamos decir que el 5 es la mitad de N, y 11
  es la suma de 1 y N

  Vemos si es se cumple plata otro número. mantengamos la escala de números
  pequeños, pero intentémoslo con un número impar, por ejemplo N = 7

  N = 7

  1 + 2 + 3 + 4 + 5 + 6 + 7 = 28
  (N / 2) + (1 + N) = (7 / 2) + (7 + 1) = 3.5 * 8 = 28
  
  Hey! Parece q funciona!

  Y para 200?
  (N / 2) + (1 + N) = (200 / 2) + (200 + 1) = 100 * 201 = 20100
  para N = 200

  > Si chequeas el archivo `index.spec.js` verás que ya existen tests para todos
  > estos casos y otros.

  Entonces, podriamos expresar en ja la ecuacion de arriba como algo así:|
  */

  let result = (N / 2) *  (N + 1);

  // Y tb funciona, pero podríamos hacerlo un poquito más expresivo
  // simplemente creando unas variables:

  const cantDePares = N / 2;
  const sumaExtremos = N + 1;
  result = cantDePares * sumaExtremos;

  // Ahora sí que no hace falta ningún comentario, el código se explica por si mismo

  return result;
};

module.exports.sumOfNumbers = sumOfNumbers;
