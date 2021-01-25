function add(n1: number, n2: number, mostrar: boolean, frase: string) {
  const resultado = n1 + n2;
  if (mostrar) {
    console.log(frase + resultado);
  } else {
    return resultado;
  }
}

let numero1: number = 10;
const numero2: number = 20.8;
const mostrarResultado: boolean = true;
let frase: string = 'Resultado: ';

add(numero1, numero2, mostrarResultado, frase);
