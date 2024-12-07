const pessoa = {
    nome: 'Pedro'
};

/**
 * Esta função é declarada como uma expressão e 
 * atribuída a propriedade ola do objeto pessoa;
*/
pessoa.ola = function () {
    console.log('Hello World');
};

pessoa.ola();

/**
 * Esta é uma forma de atribuir uma função a 
 * uma propriedade de um objeto;
*/
const maria = {
    nome: 'Maria',
    ola: function () {
        console.log('Olá, eu sou a Maria');
    }
};
maria.ola();

/**
 * Na versão ES6, JavaScript permite outra forma
 * de declarar uma função em um objeto literal;
*/
const mirela = {
    nome: 'Mirela',
    // forma abreviada de declarar uma função em um objeto
    ola() {
        console.log('Olá, eu sou a Mirela');
    }
};
mirela.ola();

const mae = {
    nome: 'Francisca',
    sobrenome: 'Alves',
    fullname() {
        console.log(`${this.nome} ${this.sobrenome}`);
    }
};
mae.fullname();