const sumOfNumbers = (N = 200) => {
  // Esta es la implemtacion que seguramente se nos viene a la cabeza:
  // un bucle que sume todos los numeros entre 1 y N

  let result = 0;
  for (let i = 1; i <= N; i++) {
    result = result + i;
  }
  return result;
}

module.exports.sumOfNumbers = sumOfNumbers;
