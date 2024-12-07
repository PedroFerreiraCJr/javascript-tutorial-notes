/**
 * propriedades enumeráveis são geralmente visualizadas
 * em um laço for..in ou usando o método 'keys' da função
 * Object;
 * o atributo 'enumerable' de uma propriedade é quem define
 * se uma propriedade é listável em uma iteração de chaves 
 * de um objeto através do laço 'for..in';
*/

// em um objeto definido usando a sintaxe de objeto literal,
// ou usando a definição de propriedade usando atribuição,
// as propriedades definidas são automaticamente enumeráveis;
// portanto, neste caso, as propriedades 'name' e 'age' são 
// iteráveis, e podem ser visualizadas no laço 'for..in';
let person = {
    name: 'Pedro Junior'
};

// esta também é enumerável;
// porque é um dos casos informados acima;
person.age = 32;

// lista as propriedades do objeto 'person';
for (const prop in person) {
    console.log('propriedades ->', `${prop}: ${person[prop]}`);
}

// esta definição de propriedade tem outro resultado;
// desta forma, a propriedade não será enumerável porque o
// atributo 'enumerable' do objeto de configuração abaixo,
// informa o valor 'false' para o atributo 'enumerable';
Object.defineProperty(person, 'ssn', {
    enumerable: false,
    value: '123456'
});

// lista as propriedades do objeto 'person', mas não lista 'ssn';
for (const prop in person) {
    console.log('propriedades ->', `${prop}: ${person[prop]}`);
}

// o ECMAScript 6 (ES6), define um método que permite saber
// se uma propriedade é enumerável ou não;
console.log('name is enumerable ->', person.propertyIsEnumerable('name'));
console.log('age is enumerable ->', person.propertyIsEnumerable('age'));
console.log('ssn is enumerable ->', person.propertyIsEnumerable('ssn'));
