/**
 * o principal uso do laço for..in é ser usado para iterar
 * sobre as propriedades que são enumeráveis de um objeto;
 * 
 * referência:
 *  https://www.javascripttutorial.net/javascript-for-in/
*/
let person = {
    firstName: 'Pedro',
    lastName: 'Junior'
};

console.log('all properties from person:');
for (const prop in person) {
    console.log(`all - [key: ${prop}, value: ${person[prop]}]`);
}

// exemplo de iteração sobre as propriedades de um objeto
// quando usando herança prototípica (prototypal inheritance);
let decoration = {
    color: 'blue'
};

// o método 'create' da função 'Object' cria um novo objeto
// mas estabelece uma relação de protótipos com o objeto
// fornecido como primeiro argumento;
// neste caso, 'circle' é um novo objeto criado a partir do
// protótipo do objeto 'decoration';
// desta forma, o novo objeto criado, circle, tem a propriedade
// 'color' herdada automaticamente através desta construção de objeto;
let circle = Object.create(decoration);
circle.radius = 10;

// neste laço for..in, as propriedades herdadas também serão mostradas;
console.log('all properties from circle:');
for (const prop in circle) {
    console.log(`all - [key: ${prop}, value: ${circle[prop]}]`);
}

// para enumerar somente as propriedades que foram definidos no objeto,
// ou seja, que o objeto atual é dono, use o método hasOwnProperty(),
// do objeto que está sendo avaliado;
console.log('only own properties from circle:');
for (const prop in circle) {
    // note que está sendo invocado o método hasOwnProperty de 'circle'
    // para saber se a propriedade atual na iteração foi definida explicitamente
    // no próprio objeto circle; desta forma, somente a propriedade 'radius'
    // será mostrada neste caso, deixando de fora a propriedade herdada de 'decoration';
    if (circle.hasOwnProperty(prop)) {
        console.log(`own - [key: ${prop}, value: ${circle[prop]}]`);
    }
}

// o trecho de código abaixo demonstra que não é boa prática usar
// o laço de repetição 'for..in' para iterar pelos valores de um 
// array; porque este laço ignora valores 'undefined';
const array = [];
array[2] = 3;

// mostra que existem três valores no array;
console.log('tamanho da lista ->', array.length);

// mas o laço 'for..in' somente mostra um valor;
for (const key in array) {
    console.log('valores na lista ->', array[key]);
}