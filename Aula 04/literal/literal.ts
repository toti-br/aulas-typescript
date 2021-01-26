function quemSou(posicaoNaEmpresa: 'admin' | 'manager' | 'developer') {
  if (posicaoNaEmpresa === 'admin') {
    console.log('Sou administrador');
  }
  if (posicaoNaEmpresa === 'manager') {
    console.log('Sou gerente');
  }
  if (posicaoNaEmpresa === 'developer') {
    console.log('Sou desenvolvedor');
  }
}

const administrador = 'admin'
const gerente = 'manager'
const desenvolvedor = 'developer'
const number = 3.4
const bool = true

quemSou(administrador)
quemSou(gerente)
quemSou(desenvolvedor)
