/**
 * em JavaScript uma closure é uma função que referencia variáveis
 * de um escopo externo, em um escopo interno; as closures presenvam
 * o escopoe externo dentro do escopo interno;
 * 
 * definição: uma closure é uma função que preserva o escopo externo -
 * por exemplo, variáveis -, no seu escopo interno;
 * 
 * material de referência:
 *  https://www.javascripttutorial.net/javascript-closure/
*/

// o escopo lexico define o escopo das variáveis pela posição da
// declaração da variável no código-fonte;

// neste exemplo a variável usuario é uma variável global;
// a varável usuario é acessível a partir de qualquer local, incluindo
// dentro da função greeting;
let usuario = 'Maria Eduarda';

// a variável message é uma variável local que é somente acessível
// dentro da função greeting;

function greeting() {
    let message = 'Hi';
    console.log(`${message} ${usuario}.`);
};

// se for feita a tentativa de acessar a variável message fora
// da função greeting, é lançada uma exceção em tempo de execução;
// console.log(message);

// portanto, o JavaScript engine usa o escopo para gerenciar a
// acessibilidade da variável message, neste caso;

// de acordo com o escopo lexico, o escopo pode ser aninhado e a
// função interna pode acessar as variáveis declaradas no seu escopo externo;

function greeting() {
    let message = 'Hi';

    function sayHi() {
        console.log(message);
    };

    sayHi();
};
greeting();

// a função sayHi é uma função interno que está disponível somente
// dentro do escopo da função greeting;

// a função sayHi pode acessar as variáveis da função externa, como a
// variável message da função greeting;

// ---------- closures em JavaScript ---------- //
// agora, ao invés de executar a função sayHi dentro da função greeting, 
// a função greeting retorna o objeto função sayHi;

// note que funções em JavaScript são cidadões de primeira-classe, e portanto,
// podem ser retornados de uma função;
function greeting() {
    let message = 'Hi';

    function sayHi() {
        console.log(message);
    };

    return sayHi;
};

// fora da função greeting, nós atribuímos a variável hi o valor retornado
// pela função greeting, que é uma referência para a função sayHi;
let hi = greeting();

// então executamos a função através da variável hi;
// quando este código é executado, obtemos o mesmo resultado do
// exemplo anterior;
hi();

// no entanto, é interessante notar que, geralmente, uma variável local somente
// existe durante a execução da função;

// isto signifca que quando a função greeting termina sua execução, a variável
// local não é mais acessível;

// mas neste caso, nós executamos a função hi que referência a função sayHi,
// e a variável local ainda existe!; e a mágica disto é closure! que neste caso
// é a função sayHi;

// definição: uma closure é uma função que preserva o escopo externo no
// seu escopo interno;

// ---------- mais exemplos sobre closures em JavaScript ---------- //
// a função greeting recebe um argumento chamado message, e retorna uma função
// que recebe um único argumento chamado de user;
function greeting(message) {
    // a função retornada retorna uma mensagem de saudação
    // que usa as variáveis message, e user;
    return function (user) {
        return `${message}, ${user}`;
    }
};

let sayHi = greeting('Hi');
let sayHello = greeting('Hello');

console.log(sayHi('Maria Eduarda'));
console.log(sayHello('Pedro Junior'));

// a função greeting se comporta como uma função fábrica;
// ela cria as funções sayHi e sayHello com as respectivas mensagens
// 'Hi' e 'Hello';
// sayHi() e sayHello() são closures!; elas compatilham o mesmo corpo de
// função, mas possuem escopos diferentes;
// na closure sayHi() o valor da variável message é 'Hi', enquanto que
// na closure sayHello() o valor da variável message é 'Hello';

// ---------- closures em um loop ---------- //
// considere este loop;
for (var index = 1; index <= 3; index++) {
    setTimeout(function () {
        console.log('after ' + index + ' second(s):' + index);
    }, index * 1000);
}

// o resulatdo esperado é uma contagem de valores, mas o resultado é outro;
// o motivo de estar sendo gerado o valor 4 para todas as iterações é porque
// você está usando uma closure para a função setTimeout(); e esta closure
// lembra do valor somente da última iteração; todas as closures criadas
// compartilham o mesmo escopo de variável global; uma forma de contornar este
// resultado é criando um novo escopo para a closure, e isso pode ser feito usando
// uma função de invocação imediata (IIFE); outra solução é usar a palavra-chave
// let para definir uma variável com um escopo menor;
// segue exemplo da correção sugerida - usando uma IIFE (immediately invoked function expression);
for (var index = 1; index <= 3; index++) {
    (function (index) {
        setTimeout(function () {
            console.log('after ' + index + ' second(s):' + index);
        }, index * 1000);
    })(index);
}

// segue exemplo da correção sugerida - usando let;
for (let index = 1; index <= 3; index++) {
    setTimeout(function () {
        console.log('after ' + index + ' second(s):' + index);
    }, index * 1000);
}
