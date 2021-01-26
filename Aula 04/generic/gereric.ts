function retornaValor <T, U extends object>(numero1: T, numero2: U) {
  console.log(numero1, numero2);
}

console.log(retornaValor(1,{idade: 4}))