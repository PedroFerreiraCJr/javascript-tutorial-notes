/**
 * Propriedade computada são aquelas que usam o operador colchetes
 * para definir uma propriedade em um objeto literal ou em uma classe;
 * as propriedades computadas permitem utilizar o resultado de uma 
 * expressão como o nome de uma propriedade de uma classe ou objeto literal;
*/

let propertyName = 'fullName';
let rank = {
    [propertyName]: `valor da propriedade: ${propertyName}`
};
console.log(rank[propertyName]);

// assim como objetos literais, é possível usar uma propriedade computada
// com os getters e setters de uma classe;
let property = 'computada';
class Person {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }

    get [property]() {
        return `${this.firstname} ${this.lastname}`;
    }
};

let person = new Person('Pedro', 'Junior');

// uma instância de uma classe também aceita o acesso de
// propriedade através do operador colhetes;
console.log(person[property]);
