/**
 * o ES6 fornece como alternativa a escrita de expressões de 
 * função, as arrow functions; que consiste de uma sintaxe mais 
 * concisa;
*/

// expressão de função que devolve o valor da soma dos dois parâmetros;
const add = function (x, y) {
    return x + y;
};
console.log(add(10, 20));

// alternativa a expressão de função acima, agora usando uma
// arrow function; neste caso a função arrow tem uma expressão 
// como o corpo da função, desta forma, ela retorna o resultado
// desta expressão;
const add2 = (x, y) => x + y;
console.log(add2(10, 20));

// agora, se for especificado o uso de parênteses, como no exemplo
// abaixo, será necessário fornecer também o uso de return;
const add3 = (x, y) => {
    return x + y;
};

// o operador typeof retorna o tipo de uma expressão, e neste caso,
// ele retorna 'function' para a arrow function;
console.log(typeof add);

// a função arrow também é uma instância do tipo Function, como
// demonstra o seguinte exemplo;
console.log(add instanceof Function);

// ---------- função arrow com múltiplos parâmetros ---------- //
// caso uma função arrow tenha mais que um parâmetro, é preciso usar o
// operador parênteses para declarar os parâmetros formais da função arrow;
// sintaxe: (p1, p1, ... pn) => expression
// por exemplo, para ordenar um array em ordem descendente, basta usar o 
// método sort do tipo Array;
let numbers = [4, 2, 6];
numbers.sort(function (a, b) {
    return b - a;
});
console.log(numbers);

// agora, um exemplo com uma arrow function; que torna o código mais conciso;
numbers = [4, 2, 6];
numbers.sort((a, b) => b - a);
console.log(numbers);

// ---------- função arrow com um único parâmetro ---------- //
// se a arrow function tiver somente um parâmetro, é possível omitir o
// uso de parênteses para declarar o parâmetro;
// sintaxe: p1 => expression
// exemplo de função arrow que mapeia os valores de string para number;
let names = ['Maria Eduarda', 'Pedro', 'Mirela', 'Francisca'];
let length = names.map(n => n.length);
console.log(length);

// ---------- função arrow sem parâmetro ---------- //
// se uma função arrow não declarar nenhum parâmetro, é necessário
// usar o operador parênteses vazio;
// sintaxe: () => expression
// exemplo de função arrow sem parâmetro;
let logMessage = () => console.log('Hello World!');
logMessage();

// ---------- quebra de linha entre a declaração do parâmetro e a seta ---------- //
// JavaScript não permite que seja adicionado uma quebra de linha entre
// a declaração dos parâmetros da arrow function e o operador seta (=>);
// JavaScript permite que seja adicionado quebra de linha entre os parâmetros;

// ---------- cláusula e expressões no corpo da arrow function ---------- //
// se você usar uma expressão no corpo de uma arrow function, não é
// necessário adicionar a expressão dentro de um bloco de código declarado
// com o operador chaves;
let square = x => x * x;    // exemplo de expressão como corpo da função arrow;

// uma expressão é aquilo que retorna um valor;
// já uma cláusula é apenas mais uma instrução da linguagem;
// caso seja utilizado uma cláusula ao invés de uma expressão,
// será necessário usar o operador chaves, para declarar o corpo
// da função arrow;
let except = msg => {
    throw msg;
};

// ---------- arrow function e objetos literias ---------- //
// a expressão de função setColor retorna um objeto que tem a propriedade 
// value definida para o argumento color;
var setColor = function (color) {
    return { value: color }
};
let backgroundColor = setColor('Red');
console.log(backgroundColor.value);

// para retornar um objeto literal de uma função arrow, basta usar a seguinte
// sintaxe; p => {object:literal}
var setColor = color => { value: color };

// ---------- arrow function vs função regular ---------- //
// existem duas principais diferenças entre uma função arrow e uma
// função regular;
// primeiro, na função arrow, this, argument, super, new.target, são léxicos;
// isso significa que a função arrow usa o valor do escopo externo a declaração dela;
// segundo, uma função arrow não pode ser usada como uma função construtora;
// se for utilizado o operador new para criar um objeto a partir de uma função arrow,
// será gerado um erro;

// ---------- funções arrow e o valor de this ---------- //
// em JavaScript uma nova função define o seu próprio valor de this;
// no entanto, este não é o caso para funções arrow;
// veja o seguinte exemplo;
(function () {
    function Car() {
        this.speed = 0;

        this.speedUp = function (speed) {
            this.speed = speed;
            setTimeout(function () {
                console.log(this.speed); // undefined
            }, 1000);

        };
    }

    let car = new Car();
    car.speedUp(50);
})();
// dentro da função anônima da função setTimeout, o this.speed é undefined;
// a razão disto é que, o this da função anônima sombreou o this da função speedUp;

// para corrigir isso, basta atribuir o valor de this para uma variável que
// não seja sombreada pelo this da função anônima;
(function () {
    function Car() {
        this.speed = 0;

        this.speedUp = function (speed) {
            this.speed = speed;
            let self = this;
            setTimeout(function () {
                console.log(self.speed);
            }, 1000);

        };
    }

    let car = new Car();
    car.speedUp(50);
})();

// diferente de uma função anônima, onde ela possui o seu próprio valor para this,
// em uma função arrow, o valor de this é obtido do contexto mais externo onde a
// função arrow foi declarada, ao invés de criar o seu próprio valor para this;
(function () {
    function Car() {
        this.speed = 0;

        this.speedUp = function (speed) {
            this.speed = speed;
            setTimeout(
                () => console.log(this.speed),
                1000);

        };
    }

    let car = new Car();
    car.speedUp(50);
})();

// ---------- função arrow e o objeto arguments ---------- //
// uma função arrow não tem o objeto arguments;
function show() {
    return x => x + arguments[0];
}

let display = show(10, 20);
let result = display(5);
console.log(result);    // retorna o valor 15;

// uma função arrow também não possui o valor de new.target;

// ---------- funções arrow do JavaScript e a propriedade prototype ---------- //
// quando você define uma função usando a palavra-chave function, a função tem
// a propriedade chamada prototype;
function dump(message) {
    console.log(message);
}
console.log(dump.hasOwnProperty('prototype'));

// no entanto, uma função arrow não possui a propriedade prototype;
let fn = message => console.log(message);
console.log(fn.hasOwnProperty('prototype'));        // retorna false;

// é uma boa prática usar arrow function para callbacks e closures por conta de
// sua sintaxe mais concisa;

