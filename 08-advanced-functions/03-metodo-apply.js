/**
 * o método Function.prototype.apply permite invocar uma função
 * com um dado valor de this, e passar os argumentos da função através
 * de um array; o método apply() aceita dois argumentos; o primeiro sendo
 * o próprio objeto que fará o papel de this, ou seja, o contexto; e o
 * segundo argumento, o valor que deve ser pasado para a função que
 * está sendo invocada;
*/

// sintaxe;
// fn.apply(thisArg, [args1, args2, ...]);

// -------------- exemplo de apply() -------------- //
const person = {
    firstName: 'Pedro',
    lastName: 'Junior'
};

// esta função recebe dois argumentos e também acessa o valor de firstname
// a partir do objeto this, que neste caso, é o contexto da função abaixo;
function greet(greeting, message) {
    return `${greeting} ${this.firstName}. ${message}`;
};

// neste exemplo estamos configurando o valor de this dentro da função greet
// para o objeto person, que por sua vez, tem a propriedade firstName; os
// argumentos de greet foram passados através de um array;
let result = greet.apply(person, ['Hello', 'How are you?']);


// -------------- exemplo pegando uma função emprestada -------------- //
// a função apply permite a um objeto empresta um método de outro objeto,
// sem duplicar código;

// suponha o seguinte objeto computador;
const computer = {
    name: 'MacBook',
    isOn: false,
    turnOn() {
        this.isOn = true;
        return `The ${this.name} is On`;
    },
    turnOff() {
        this.isOn = false;
        return `The ${this.name} is Off`;
    }
};

// e o objeto server;
// o objeto server não possui os métodos turnOn e turnOff;
const server = {
    name: 'Dell PowerEdge T30',
    isOn: false
};

// para executar o método turnOn do objeto computador no objeto server,
// é possível usar o método apply;
// neste exemplo, o objeto server pegou emprestado o método turnOn do
// objeto computador;
result = computer.turnOn.apply(server);
console.log(result);

// para invocar o método turnOff, é bem semelhante;
result = computer.turnOff.apply(server);
console.log(result);

// -------------- usando o método apply para anexar valores de um array -------------- //
let arr = [1, 2, 3];
let numbers = [4, 5, 6];

// como podemos interpretar este trecho de código?
// invoque a função push do objeto arr, usando como objeto this 
// o valor de arr, e usando com argumentos da função push os valores 
// de numbers, que é um outro array;
arr.push.apply(arr, numbers);
console.log(arr);


