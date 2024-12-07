/**
 * uma expressão de função invocada imediatamente é uma função em JavaScript como 
 * em uma expressão de função, mas invocada imediatamente após a criação;
*/

// uma expressão de função invocada imediatamente tem a seguinte estrutura;
(function () {
    console.log('immediately invoked function expression - IIFE');
})();

// ------------------ por que IIFEs ------------------ //
// quando você define uma função, o motor do JavaScript adiciona a função
// ao objeto global;
// na execução deste código em um navegador, o JavaScript engine adiciona a 
// função ao objeto global window;
function add(x, y) {
    return x + y;
};

// da mesma forma qua quando uma função é declarada em um escopo mais externo ela é
// adicionada ao objeto global, que no navegador é o objeto window, se for declarado uma
// variável em um escopo mais externo, ela será adicionada ao objeto window;
var counter = 10;
//console.log(window.counter);      // somente deve ser executado em um navegador;

// quando há muitas variáveis e funções globais, a memória alocada para estes objetos
// somente é reciclada quando o objeto global sai de escopo;

// a expressão de função invocada imediatamente pode reduzir a poluição do objeto global;
// uma função pode ser declarada como uma expressão, como por exemplo em uma atribuição;
var sum = function (x, y) {
    return x + y;
};

// nesta declaração, a parte da direita da atribuição é uma expressão;
// como uma função é uma expressão, você pode embrulha-lá entre parênteses;
var sum = (function (x, y) {
    return x + y;
});

// neste caso, a variável sum é referida como uma função anônima que recebe dois argumentos;
// adicionalmente a definição da função, você pode executá-la imediatamente após a definição;
var sum = (function (x, y) {
    return x + y;
})(10, 20);

// neste exemplo, a variável sum armazena o resultado da execução da função;
// a seguinte expressão é chamada de immediately invoked function expression, porque
// ela é definida como uma expressão e executada imediatamente;
(function (a, b) {
    return a + b;
})(10, 20);

// note que também é possível usar uma função arrow para declarar a expressão de função;
(() => {
    console.log('immediately invoked function expression - IIFE - with arrow function');
})();

// através da declaração de variáveis e funções dentro de uma expressão de função invocada
// imediatamente, é possíveç diminuir a poluição do escopo global;
(function () {
    var counter = 0;

    function add(a, b) {
        return a + b;
    }

    console.log(add(10, 20));
}());

// ------------------ IIFEs nomeadas ------------------ //
// outro exemplo deste tipo de função, são as iifes nomeadas;
(function identifier() {

})();

// ------------------ IIFEs com ponto-e-vírgula ------------------ //
// muitas vezes você pode ser uma IIFE precedida por um pnto-e-vírgula;
; (function identifier() {
    // esta forma é simplesmente usada quando é necessário concatenar dois
    // arquivos JavaScript de maneira cega, sem nenhum pré-processamento;
})();
