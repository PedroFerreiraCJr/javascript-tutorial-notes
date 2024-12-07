/**
 * o ES6 fornece um novo tipo de parâmetro, conhecido por, parâmetro rest
 * que tem como prefixo o símbolo de três pontos (...); um parâmetro rest
 * permite que você represente um número variado de argumentos como um array;
 * este novo parâmetro tem a seguinte forma:
 * function somar(...valores) {
 * 
 * };
 * 
 * o único parâmetro na função acima, é um parâmetro rest porque está prefixado
 * com o operador ... (rest);
*/

// nesta função o parâmetro declarado é um parâmtro rest, porque faz uso do
// operador rest; poderiam haver mais declarações de parâmetro antes da declaração
// do parâmetro rest, e eles funcionariam normalmente; mas vale notar que o parâmetro 
// rest é mapeado para um estrutura de array; desta forma, todos os valores estarão
// dentro de um array dentro da função de o declarou;
function somar(...valores) {
    console.log(valores);
};

// declaração de função com mais parâmetros além do parâmetro rest;
// caso seja fornecido somente dois valores, o valor do parâmtro rest
// dentro da função é um array vazio;
// note que, o parâmtro rest, caso exista na declaração de função, deve 
// aparecer como o último parãmetro declarado na função;
function fn(a, b, ...args) {
    console.log('o primeiro parâmetro tem o valor: ', a);
    console.log('o segundo parâmetro tem o valor: ', b);
    console.log('o parâmetro rest tem o(s) valor(es): ', args);
};

// exemplo de função de soma;
// neste exemplo, como args é um array é possível usar o loop for..of para 
// iterar sobre os valores informados na invocação da função sum;
function sum(...args) {
    let total = 0;
    for (const valor of args) {
        total += valor;
    }
    return total;
}

// definição da função soma aprimorada para somar somente números informados;
// note que, sem o parâmetro rest, seria necessário recorrer ao objeto
// implícito arguments para obter os valores a serem somados;
function sum(...args) {
    return args
        .filter(e => typeof e === 'number')
        .reduce((prev, curr) => prev + curr);
};

console.log(sum(10, 'Hi', null, undefined, 20));


// ------------------- parâmetros rest com arrow functions ------------------- //
// uma função arrow não possuí o objeto implícito arguments;
// portanto, se você deseja passar alguns parâmetros para a função arrow, é preciso
// declarar um parâmetro rest;

const combine = (...args) => {
    return args.reduce(function (prev, curr) {
        return prev + ' ' + curr;
    });
};

console.log(combine('JavaScript', 'Rest', 'Parameters'));


// ------------------- parâmetros rest com funções dinâmicas ------------------- //
// JavaScript permite que você crie funções dinâmicas através da
// função construtora Function;
const dynamic = new Function('...args', 'console.log("os valores são: ", args)');
dynamic(1, 2, 3);
