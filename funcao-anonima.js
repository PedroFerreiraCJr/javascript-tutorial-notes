/**
 * Exemplo de função anônima; função sem identificador;
*/
const show = function () {
    console.log('Hello World');
};

/**
 * Como funções em JavaScript são objetos de primeira-classe
 * é possível passar para outra função uma função 
 * como argumento;
*/
setTimeout(function () {
    console.log('Hello World');
}, 1_000);

/**
 * Exemplo particular de função anônima, uma função
 * de execução imediatamente invocável;
 * O primeiro par de parênteses retorna uma função, 
 * que será imediatamente invocada porque foi fornecido
 * outro par de parênteses;
*/
(function () {
    console.log('Hello World');
})();

// Passando argumentos para funções anônimas;
let pessoa = {
    nome: 'Pedro Junior'
};
(function (objeto) {
    console.log(objeto.nome);
})(pessoa);

/**
 * Outro exemplo de função anônima são as 
 * funções arrow;
*/
const show2 = () => console.log('Hello World');
show2();

// outro exemplo de função arrow;
const add = (a, b) => a + b;
console.log(add(2, 4));
