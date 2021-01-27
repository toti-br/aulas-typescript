"use strict";
class Departamento {
    constructor(nome, id) {
        this.funcionarios = [];
        this.nome = nome;
        this.id = id;
    }
    descrever() {
        console.log('Departamento ' + this.nome);
    }
    adicionarFuncionario(funcionario) {
        this.funcionarios.push(funcionario);
    }
    mostrarInformacoesFuncionarios() {
        console.log(this.funcionarios.length);
        console.log(this.funcionarios);
    }
}
const engenharia = new Departamento('Engenharia', 10);
engenharia.descrever();
engenharia.adicionarFuncionario('Mario');
engenharia.adicionarFuncionario('Maria');
engenharia.mostrarInformacoesFuncionarios();
//engenharia.funcionarios[2] = 'Regina'
class DepartamentoTI extends Departamento {
    constructor(id, admins) {
        super('IT', id);
        this.admins = admins;
    }
}
const TI = new DepartamentoTI(10, ['Maria', 'Tania']);
class DepartamentoContas extends Departamento {
    constructor(id, relatorios) {
        super('Contas', id);
        this.relatorios = relatorios;
        this.ultimoRelatorio = relatorios[0];
    }
    get acessarUltimoRelatorio() {
        if (this.ultimoRelatorio) {
            return this.ultimoRelatorio;
        }
    }
    set configurarUltimoRelatorio(value) {
        if (value) {
            this.ultimoRelatorio = value;
        }
    }
    adicionarFuncionario(nome) {
        if (nome === 'Maria') {
            return;
        }
        this.funcionarios.push(nome);
    }
    adicionarRelatorio(texto) {
        this.relatorios.push(texto);
    }
    mostrarRelatorios() {
        console.log(this.relatorios);
    }
}
const contas = new DepartamentoContas(10, []);
contas.adicionarFuncionario('Maria');
contas.adicionarFuncionario('Jose');
contas.adicionarFuncionario('Carlos');
contas.mostrarInformacoesFuncionarios();
contas.configurarUltimoRelatorio = 'relatorio';
console.log(contas.acessarUltimoRelatorio);
