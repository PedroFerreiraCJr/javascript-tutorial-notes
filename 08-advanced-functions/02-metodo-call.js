/**
 * em JavaScript uma função é uma instância de Function;
*/
// exemplo de função;
function add(x, y) {
    return x + y;
};
console.log('add instanceof Function ->', add instanceof Function);

// chamda de função convencional;
let result = add(10, 20);
console.log('o resultado é ->', result);

// chamadad de função usando o método call() do protótipo de Function;
result = add.call(this, 10, 20);
console.log('o resultado é ->', result);

// segue outro exemplo;
// o objeto global é configurado como o this das funções convencionais;
// quando executado no navegador, este código gera a saída 'Hi Pedro Junior';
var greeting = 'Hi';

var messenger = {
    greeting: 'Hello'
}

function say(name) {
    console.log(this.greeting + ' ' + name);
}

say.call(this, 'Pedro Junior');

// outra forma de invocar esta mesma função é usando o objeto messenger como this;
// agora o resultado será: 'Hello Pedro Junior'; o resultado foi alterado porque o
// objeto usado como contexto, ou valor de this, foi alterado para messenger;
say.call(messenger, 'Pedro Junior');

// --------------- usando a função call para encadear construtoras --------------- //
function Box(height, width) {
    this.height = height;
    this.width = width;
};

function Widget(height, width, color) {
    Box.call(this, height, width);
    this.color = color;
};

const widget = new Widget(10, 10, 'blue');
console.log(widget);

// --------------- usando a função call em funções emprestadas --------------- //
// primeiro definimos um objeto car com algumas propriedades e métodos;
const car = {
    name: 'car',
    start() {
        console.log('Start the ' + this.name);
    },
    speedUp() {
        console.log('Speed up the ' + this.name);
    },
    stop() {
        console.log('Stop the ' + this.name);
    },
};

// definimos o objeto aircraft com a propriedade name;
const aircraft = {
    name: 'aircraft',
    fly() {
        console.log('Fly');
    },
};

// invocamos o método start() e speedUp() de car no objeto aircraft como contexto
// ou valor de this; e posteriormente invocamos o método fly normalmente;
// dentro dos métodos start() e speedUp() o valor de this faz referência ao 
// objeto aircraft e não car; desta forma o valor da propriedade name é obtido do
// obejeto aircraft;
car.start.call(aircraft);
car.speedUp.call(aircraft);
aircraft.fly();

// tecnicamente, o objeto aircraft pega emprestado o método start() e speedUp()
// do objeto car; o seguinte exemplo ilustra como o objeto arguments pega emprestado
// a função filter de Array;
// define a função que é aplicada a cada elemento de um objeto array-like;
function isOdd(number) {
    return number % 2;
}

// define a função que aceita qualquer número de argumentos e retorna um array 
// contendo somente os elementos filtrado pela função isOdd;
function getOddNumbers() {
    return Array.prototype.filter.call(arguments, isOdd);
}

let results = getOddNumbers(10, 1, 3, 4, 8, 9);
console.log(results);
