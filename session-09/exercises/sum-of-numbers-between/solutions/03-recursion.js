const sumOfNumbers = (N = 200) => {
  // Otra forma linda de pensarlo es a través de la recursión
  // Por ejemplo podríamos crear una función que se llame a si misma iniciando
  // con N = 1, luego con N = 2, hasta N igual 200

  // Esta es nuestra funcion recursiva
  const sumAux = (sumaAcumulada, valorActual) => {
    // caso base
    if (valorActual === N) {
      return sumaAcumulada + valorActual;
    }

    // caso recursivo
    return sumAux(sumaAcumulada + valorActual, valorActual + 1);
  }

  // Y la ejecutamos con sumaAcumulada = 0 y valorActual = 1
  return sumAux(0, 1);
}

module.exports.sumOfNumbers = sumOfNumbers;
