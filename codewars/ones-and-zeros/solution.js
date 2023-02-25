const binaryArrayToNumber = (arr) => {
  let suma = 0;
  let exponente = 2 ** (arr.length - 1);
  for (let i = 0; i < arr.length; i++) {
    suma += (arr[i] === 1) ? exponente : 0;
    exponente /= 2;
  }
  return suma;
};

module.exports = binaryArrayToNumber;
