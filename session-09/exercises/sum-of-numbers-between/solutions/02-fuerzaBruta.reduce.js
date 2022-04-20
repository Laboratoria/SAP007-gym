const sumOfNumbers = (N = 200) => {
  // Podriamos pensar una solucion donde creamos un array del 1 al 200 y
  // sumamos todos sus elementos, no?

  // Entonces, vamos a rellenar el array
  const numbers = [];
  for (let i = 1; i <= N; i++) {
    numbers.push(i);
  }

  // Y ahora los "reducimos" a un solo valor: la suma de todos sus elementos
  // Y para eso vamos a usar `reduce`
  // `reduce` es un método de los arrays, que generalmente demoramos mucho en
  // aprender principalmente porque todo lo que puede hacer `reduce` se puede
  // conseguir con un par de variables y `forEach` o `map`, y además su API
  // es un poco más complicada. Pero es verdaderamente muy útil y ayuda a escribir
  // codigo más expresivo y menos verborrágico.

  const valorInicialSuma = 0;
  result = numbers.reduce((sumaAcumulada, valorActual) => sumaAcumulada + valorActual, valorInicialSuma);

  return result;
}

module.exports.sumOfNumbers = sumOfNumbers;
