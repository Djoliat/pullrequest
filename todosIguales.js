const todosIguales = (array) => {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario retornar false.
  // Tu código:
  let igual = true;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === array[0]) {
      igual = true;
    } else {
      igual = false;
    }
  }
  return igual;
};


