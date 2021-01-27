interface Apresentavel {
  nome: string;
  idade?: number
  apresentar(frase: string): void;
  sair?(): void
}

class Person implements Apresentavel {
  nome: string;
  idade = 30;

  constructor(n: string) {
    this.nome = n;
  }

  apresentar(frase: string) {
    console.log(frase + ' ' + this.nome);
  }
}

let usuario: Apresentavel;

usuario = new Person('Max');

usuario.apresentar('Hi there - I am');
console.log(usuario);