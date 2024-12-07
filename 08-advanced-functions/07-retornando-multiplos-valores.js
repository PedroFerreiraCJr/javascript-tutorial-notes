/**
 * funções em JavaScript podem somente devolver apena um valor; portanto, para
 * retornar mais de um valor de uma função, basta adicioná-los a um array ou
 * retorná-los como propriedades de um objeto JavaScript;
*/

// suponha que exista uma função que devolve o firstname e lastname em um array;
function getNames() {
    return ['Pedro', 'Junior'];
};
// para acessar os valores individuais do resultado devolvido, basta utilizar o
// operador colchetes ([]) para acessar os elementos individuais do array;
let names = getNames();
console.log('firstname  ->', names[0]);
console.log('lastname   ->', names[1]);

// a partir do ECMAScript 6 ou ES6 é possível fazer o destructuring do array
// ou objeto devolvido;
// destructuring de array;
let [firstname, lastname] = getNames();
console.log('firstname  ->', firstname);
console.log('lastname   ->', lastname);

// como dito anteriomente, é possível usar um objeto para retornar múltiplos
// valores de uma função; se for o caso de adicionar identificadores aos valores
// então basta criar um objeto com determinadas propriedades;
function getNames2() {
    return {
        firstname: 'Pedro',
        lastname: 'Junior'
    };
};

var nomes = getNames2();
console.log('firstname  ->', nomes.firstname);
console.log('lastname   ->', nomes.lastname);

// a partir do ES6 também é possível destructuring de objetos;
function getNames3() {
    return {
        nome: 'Pedro',
        sobrenome: 'Junior'
    };
};

const { nome, sobrenome } = getNames3();
console.log('firstname  ->', nome);
console.log('lastname   ->', sobrenome);

