/**
 * material de referência:
 *  https://www.javascripttutorial.net/es6/javascript-inheritance/
*/

class Animal {
    constructor(legs) {
        this.legs = legs;
    }

    walk() {
        console.log(`walking on ${this.legs} legs.`);
    }
};

class Bird extends Animal {
    constructor(legs) {
        super(legs);
    }

    fly() {
        console.log('flying...');
    }
};

let bird = new Bird(2);

bird.walk();
bird.fly();

class Dog extends Animal {
    constructor() {
        // é necessário invocar o construtor da superclasse antes 
        // de realizar qualquer uso do operador 'this' no construtor
        // desta subclasse;
        super(4);
    }

    // shadowing methods - métodos sombreados;
    // permite a subclasse redefinir o método da superclasse;
    // mas ainda permite que o método da superclasse possa ser invocado, 
    // conforme o exemplo abaixo;
    walk() {
        // esta instrução invoca o método da superclasse;
        super.walk();
        console.log(`go walking`);
    }
}

let bingo = new Dog();
bingo.walk();

// ------------------- herança de métodos e propriedades estáticos ------------------- //
class Animal2 {
    constructor(legs) {
        this.legs = legs;
    }
    walk() {
        console.log('walking on ' + this.legs + ' legs');
    }
    static helloWorld() {
        console.log('Hello World');
    }
}

class Bird2 extends Animal2 {
    fly() {
        console.log('flying');
    }
}

Bird2.helloWorld();
Animal2.helloWorld();

// ------------------- herança a partir de tipos embutidos da linguagem ------------------- //
// neste exemplo está sendo feita a herança do tipo Array, que é um tipo nativo
// da linguagem JavaScript;
class Queue extends Array {
    enqueue(e) {
        super.push(e);
    }

    dequeue() {
        return super.shift();
    }

    peek() {
        return !this.empty() ? this[0] : undefined;
    }

    empty() {
        return this.length === 0;
    }
};

var customers = new Queue();
customers.enqueue('A');
customers.enqueue('B');
customers.enqueue('C');
