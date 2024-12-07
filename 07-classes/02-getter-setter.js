/**
 * use as palavras-chave 'get' e 'set' para declarar os métodos 
 * getter e setter, respectivamente, em uma classe ou objeto literal;
 * a palavra-chave 'get' relaciona uma propriedade de um objeto a 
 * um método que é invocado quando a propriedade é buscada pela Engine
 * do JavaScript;
 * a palavra-chave 'set' relaciona uma propriedade de um objeto a 
 * um método que é invocado quando a propriedade recebe um valor através 
 * de uma atribuição usando o operador '=' (operador de atribuição);
 * 
 * material de referência:
 *  https://www.javascripttutorial.net/es6/javascript-getters-and-setters/
*/

// a classe Human define dois métodos que fazem o papel de 
// getter e setter, que são métodos auxiliares para manipular um
// atributo qualquer; mas a partir do JavaScript ES6, existe uma 
// outra forma de declarar um getter e um setter, conforme o 
// exemplo a seguir;

class Human {
    constructor(name) {
        this.setName(name);
    }

    // faz o papel de método getter;
    getName() {
        return this.name;
    }

    // faz o papel de método setter;
    setName(newName) {
        newName = newName.trim();
        if (newName === '') {
            throw 'The name cannot be empty';
        }
        this.name = newName;
    }
};

let human = new Human('Maria Eduarda');
console.log(human);

// esta classe declara o método getter e o setter, usando
// as palavras-chave 'get' para o método getter, e 'set' para 
// o método setter desta classe;
// vale notar que, caso a classe não defina o método setter
// e for feita uma tentativa de alterar o valor do atributo através
// do setter, nada acontecerá, porque o método setter não existe;
class Person {
    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    set name(name) {
        name = name.trim();
        if (name === '') {
            throw 'name cannot be empty';
        }
        this._name = name;
    }
};

let person = new Person('Pedro Junior');

// invoca o método getter;
console.log(person.name);

// invoca o método setter;
person.name = 'Maria Eduarda';

// invoca o método getter, novamente;
console.log(person.name);

// os métodos getter e setter, também podem ser declarados
// em um objeto literal, conforme o seguinte exemplo;
let meeting = {
    attendees: [],
    add(attendee) {
        console.log(`${attendee} joined the meeting.`);
        this.attendees.push(attendee);
        return this;
    },
    // método getter declarado aqui;
    get latest() {
        let count = this.attendees.length;
        return count == 0 ? undefined : this.attendees[count - 1];
    }
};

meeting.add('Maria Eduarda').add('Pedro Junior').add('Mirela Alves');
console.log(`The latest attendee is ${meeting.latest}.`);
