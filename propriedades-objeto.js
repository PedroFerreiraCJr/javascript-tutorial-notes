/**
 * em JavaScript as propriedades de um objeto possuem
 * características ou atributos;
 * os atributos de uma propriedade podem ser:
 *  - configurable;
 *  - enumerable;
 *  - writable;
 *  - value.
 * para alterar qualquer um deste atributos de uma propriedade
 * basta usar o método 'defineProperty' da função 'Object';
 * o método 'defineProperty' aceita 3 argumentos, sendo eles:
 *  - um objeto;
 *  - um nome de propriedade;
 *  - um objeto descritor de propriedade, que tem quatro 
 * propriedades, sendo elas: configurable, enumerable, writable, value.
 * vale notar que, quando definindo uma propriedade conforme o exemplo
 * abaixo, o valor dos atributos relacionados a propriedade 'age', são:
 *  - configurable: true;
 *  - enumerable: true;
 *  - writable: true.
*/
let person = {};
person.name = 'Pedro Junior';
person.age = 32;

// é possível usar o operador 'delete' para remover a propriedade 'age';
delete person.age;
console.log(person);

// após definir uma propriedade como 'configurable' para 'false', não 
// é possível torná-la 'false';
function definirPropriedade() {
    // usando o modo estrito de execução, causa um erro na 
    // tentativa de remover uma propriedade com o operador 'delete'
    "use strict"
    let person = {};
    Object.defineProperty(person, 'name', {
        configurable: false,
        value: 'Pedro Junior'
    });
    // só causa erro no mode estrito;
    delete person.name;
    console.log('usando defineProperty ->', person);
};
//definirPropriedade();

// enumerable: por padrão todas as propriedade definidas em um objeto
// são configuradas para poderem ser listadas; ou seja, 'enumerable'
// possui o valor 'true';
function definirEnumerable(isEnumerable) {
    let person = {};
    person.age = 25;
    person.ssn = '012-38-9119';

    if (isEnumerable) {
        Object.defineProperty(person, 'ssn', {
            enumerable: false
        });
    }

    for (let property in person) {
        console.log('propriedade enumerable ->', property);
    }
}
definirEnumerable();
definirEnumerable(true);

// para propriedades acessoras, uma função get e outra função set
// são definidas;
function propriedadeAcessora() {
    let person = {
        firstName: 'Pedro',
        lastName: 'Junior'
    };

    Object.defineProperty(person, 'fullName', {
        get: function () {
            return `${this.firstName} ${this.lastName}`;
        },
        set: function (value) {
            let parts = value.split(' ');
            if (parts.length === 2) {
                this.firstName = parts[0];
                this.lastName = parts[1];
            }
            else {
                throw new Error('Invalid value');
            }
        }
    });
    console.log(person.fullName);
}
propriedadeAcessora();

// para obter o descritor de uma propriedade, basta usar este 
// método da função 'Object';
function getPropertyDescriptor() {
    let person = {
        name: 'Pedro Junior'
    };

    let descriptor = Object.getOwnPropertyDescriptor(person, 'name');
    console.log('property descriptor ->', descriptor);
}
getPropertyDescriptor();
