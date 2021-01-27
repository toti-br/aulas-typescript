class Departamento {
  private readonly id: number;
  public nome: string;
  protected funcionarios: string[] = []

  constructor(nome: string, id: number) {
    this.nome = nome
    this.id = id
  }

  descrever() {
    console.log('Departamento ' + this.nome);
  }

  adicionarFuncionario(funcionario: string) {
    this.funcionarios.push(funcionario)
  }

  mostrarInformacoesFuncionarios() {
    console.log(this.funcionarios.length);
    console.log(this.funcionarios);
  }
}

const engenharia = new Departamento('Engenharia', 10);
engenharia.descrever()
engenharia.adicionarFuncionario('Mario')
engenharia.adicionarFuncionario('Maria')
engenharia.mostrarInformacoesFuncionarios()

// engenharia.funcionarios[2] = 'Regina'

class DepartamentoTI extends Departamento{
  admins: string[]

  constructor(id: number, admins: string[]) {
    super('IT', id);
    this.admins = admins
  }

}

const TI = new DepartamentoTI(10, ['Maria', 'Tania']);

class DepartamentoContas extends Departamento {
  private ultimoRelatorio: string

  get acessarUltimoRelatorio() {
    if(this.ultimoRelatorio){
      return this.ultimoRelatorio
    }
  }

  set configurarUltimoRelatorio(value: string) {
    if(value) {
      this.ultimoRelatorio = value
    }
  }

  constructor(id: number, private relatorios: string[]) {
    super('Contas', id);
    this.ultimoRelatorio = relatorios[0]
  }

  adicionarFuncionario(nome: string) {
    if(nome === 'Maria') {
      return
    }
    this.funcionarios.push(nome)
  }

  adicionarRelatorio(texto: string) {
    this.relatorios.push(texto)
  }

  mostrarRelatorios() {
    console.log(this.relatorios);
    
  }
}

const contas = new DepartamentoContas(10, []);

contas.adicionarFuncionario('Maria')
contas.adicionarFuncionario('Jose');
contas.adicionarFuncionario('Carlos')
contas.mostrarInformacoesFuncionarios()
contas.configurarUltimoRelatorio ='relatorio'
console.log(contas.acessarUltimoRelatorio);


