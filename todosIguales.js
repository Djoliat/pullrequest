const todosIguales = (array, array2) => {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario retornar false.
  // Tu código:
  if (array.length !== array2.length) {
    return false;
  }

  let absoluteArray = new Set();
  let i = 0;
  while (i <= array.length) {
    absoluteArray.add(array[0]);
    absoluteArray.add(array2[0]);
    i++;
  }
  if ([...absoluteArray].length == array.length) {
    return true;
  } else {
    return false;
  }
};
