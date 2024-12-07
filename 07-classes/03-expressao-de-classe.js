/**
 * Expressões de classe estão disponíveis a partir do ES6;
 * esta é uma expressão de classe; neste caso a classe não possui
 * um identificar definido, mas poderia ter;
 * é possível instanciar esta classe a partir da variável 'Person',
 * que está recebendo a atribuição da expressão de classe;
*/

let Person = class {
    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }
};

let maria = new Person('Maria Eduarda');
console.log(maria.name);

// assim como uma declaração de classe normal, uma
// expressão de classe também é uma 'function';
// similarmente a expressão de função, as expressões de classe
// não são içadas para cima, ou seja, não possuem hoisting;
// isto siginifica que são é possível declarar uma variável do
// tipo de uma expressão de classe antes de definí-la;
console.log(typeof Person);

// em JavaScript classes são objetos de primeira-classe, e desta
// forma, podem ser passados como argumento para funções, podem ser
// retornados por funções e atribuídos a uma variável;

// esta é uma função fábrica que permite instanciar uma expressão
// de classe que é recebida como argumento;
function factory(aClass) {
    return new aClass();
};

// passa uma expressão de classe não-nomeada para a função fábrica;
let greeting = factory(class {
    sayHi() {
        console.log('Hi!');
    }
});

// a instância retornada pela função fábrica tem um método, que 
// neste caso é o método sayHi();
greeting.sayHi();

// Singleton:
// uma expressão de classe pode ser usada para criar um Singleton,
// através da invocação imediata do construtor da expressão de
// classe não-nomeada; basta incluir os parênteses no final da 
// declaração de classe, conforme este exemplo;
let app = new class {
    constructor(name) {
        this.name = name;
    }

    start() {
        console.log(`Starting the ${this.name}`);
    }
}('Awesome App');

// invoca o método start na instância de app;
app.start();
