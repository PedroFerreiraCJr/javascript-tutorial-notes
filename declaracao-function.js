println('Hello World');

/**
 * A função abaixo pode ser usada antes de ter sido
 * declarada porque ela passa pelo processo de 
 * hoisting, que é o içamento da declaração da função;
 * Esta é uma funcionalidade da engine do JavaScript,
 * que move fisicamente a declaração da função para
 * o começo do escopo onde a função está declarada;
*/
function println(message) {
    if (!message) {
        return;
    }

    console.log(message);
};

/**
 * Em JavaScript as funções são objetos de primeira-classe
 * e portanto, podem ser atribuídas a variáveis, podem ser 
 * passadas como argumento de outras funções, e podem ser 
 * retornadas de uma função qualquer;
*/
// exemplo de atribuição de função para variável
function add(a, b) {
    return a + b;
};

const sum = add;

// exemplo de uso da atribuição de função a variável
console.log(add(1, 2));
console.log(sum(1, 2));

// exemplo de passagem de função como argumento
function average(a, b, fn) {
    return fn(a, b) / 2;
};

const result = average(10, 20, sum);
console.log(result);
