/**
 * O ES6 introduziu uma nova instrução for...of que itera sobre um
 * objeto iterável; podendo ser um objeto iterável nativo, como por exemplo,
 * Array, String, Set, Map; assim como, objetos semelhantes a um array, como
 * por exemplo, o objeto arguments, e o objeto NodeList; e também itera sobre
 * objetos definidos pelo usuário (desenvolvedor), que implementam o protocolo 
 * iterator;
 * */

// a seguir um exemplo de como é o a sintaxe desta nova instrução;
// for (variable of iterable) {
    // instruções...
// }

// constituindo da instrução for...of;
// 1º - variable: em cada iteração a variável do objeto iterável é atribuída a 
// variável 'variable'; é possível usar as palvras-chave: var, let, e const para 
// declarar a variável da instrução for...of;

// 2º - iterable: um objeto iterable cujo as propriedades são iteráveis;

// ------------------- exemplo do loop for...of do JavaScript ------------------- //
// vamos dar uma olhada em alguns exemplos de uso da instrução for...of;
(function () {
    let scores = [80, 90, 70];

    for (let score of scores) {
        score += 5;
        console.log(score);
    }
}());

// neste exmeplo, o loop for...of itera sobre cada elemento do array scores;
// ele atribui o elemento do array scores para a variável score em cada iteração;

// se você não altera o valor da variável dentro do loop, você pode usar a palavra-chave
// const para declarar a variável do loop, ao invés de usar let, conforme o exemplo apresentado;

(function () {
    let scores = [80, 90, 70];

    for (const score of scores) {
        console.log(score);
    }
}());

// para acessar o indice do elemento do array dentro do loop, é possível usar a instrução 
// for...of com o método entries() do próprio objeto array;
// o método entries() retorna um par, [index, element] em cada iteração;
(function () {
    let colors = ['yellow', 'red', 'blue'];

    for (const [index, color] of colors.entries()) {
        console.log(`${color} is at index ${index}`);
    }
}());

// neste exemplo, nós usamos a desestruturação de array para atribuir o resultado do método
// entries() para as variáveis index e color a cada iteração;

// ------------------- desestruturação de objetos com for..of ------------------- //
// considere o seguinte exemplo;
(function () {
    const ratings = [
        {user: 'John',score: 3},
        {user: 'Jane',score: 4},
        {user: 'David',score: 5},
        {user: 'Peter',score: 2},
    ];
    
    let sum = 0;
    for (const {score} of ratings) {
        sum += score;
    }
    
    console.log(`Total scores: ${sum}`);
}());

// ratings é um array de objetos; cada objeto tem duas propriedades, que são:
// user e score;
// o for...of itera sobre o array ratings e calcula o total de scores de todo
// os objetos;
// a expressão const {score} of ratings, usa desestruturação de objetos para 
// atribuir a propriedade score do elemento iterado correntemente para a variável
// score;

// ------------------- iterando sobre strings ------------------- //
// o seguinte exemplo usa o loop for...of para iterar sobre os caracteres de uma string;
(function () {
    let str = 'JavaScript';

    for (let c of str) {
        console.log(c);
    }
}());

// ------------------- iterando sobre objetos Map ------------------- //
// o seguinte exemplo ilustra como usar o loop for...of para iterar sobre um objeto Map;
(function () {
    let colors = new Map();

    colors.set('red', '#ff0000');
    colors.set('green', '#00ff00');
    colors.set('blue', '#0000ff');

    for (let color of colors) {
        console.log(color);
    }
}());

// ------------------- iterando sobre objetos Set ------------------- //
// o seguinte exemplo ilustra como usar o loop for...of para iterar sobre um objeto Set;
(function () {
    let nums = new Set([1, 2, 3]);

    for (let num of nums) {
        console.log(num);
    }
}());

// ------------------- for...of vs. for...in ------------------- //
// o loop for...in itera sobre todas as propriedades enumeráveis de um objeto; ele
// não itera sobre objeto nativos, como por exemplo, Array, Map, Set;
// diferente do loop for...in, o loop for...of itera sobre coleções, ao invés de 
// objetos;
// de fato, o loop for...of itera sobre elementos de qualquer coleção que tenha a 
// propriedade [Symbol.iterator];
// o seguinte exemplo demonstra a diferença entre os laços: for...of, e for...in;
(function () {
    let scores = [10,20,30];
    scores.message = 'Hi';

    console.log("for...in:");
    // for...in é usado para iterar sobre as propriedades enumeráveis de um objeto
    for (let score in scores) {
        console.log(score); 
    }

    console.log('for...of:');
    // for...of é usado para iterar sobre um objeto qualquer que tenha a propriedade [Symbol.iterator]
    for (let score of scores) {
        console.log(score);
    }
}());
