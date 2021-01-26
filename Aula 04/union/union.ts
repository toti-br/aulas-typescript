function combinar(input1: number | string, input2: number | string) {
  // const resultado = input1 + input2;
  let resultado;
  if (typeof input1 === 'number' && typeof input2 === 'number') {
    resultado = input1 + input2;
  } else {
    resultado = input1.toString() + input2.toString();
  }
  return resultado;
}

const combinarIdades = combinar(20, 40);
console.log(combinarIdades);

const combinarNomes = combinar('Maria', 'Fernanda');
console.log(combinarNomes);

