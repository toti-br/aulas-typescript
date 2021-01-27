"use strict";
class Person {
    constructor(n) {
        this.idade = 30;
        this.nome = n;
    }
    apresentar(frase) {
        console.log(frase + ' ' + this.nome);
    }
}
let usuario;
usuario = new Person('Max');
usuario.apresentar('Hi there - I am');
console.log(usuario);
