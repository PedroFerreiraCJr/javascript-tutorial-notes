//"use strict"        // diretiva de ativação do modo estrito;
/**
 * A palavra-chave 'this' referencia o objeto
 * no qual a função é uma propriedade; ou seja, 
 * referencia o objeto no qual a função está
 * sendo correntemente invocada;
 * O comportamento da palavra-chave 'this' se 
 * altera de acordo com o modo de execução do JavaScript
 * que pode ser, modo estrito e não-estrito;
 * 
 * Material usado como referência:
 *  https://www.javascripttutorial.net/javascript-this/
*/

// no exemplo abaixo, quando a função 'next' é invocada
// é possível acessar a referencia 'this' a partir da 
// função;
const counter = {
    count: 0,
    // a função abaixo é uma propriedade do objeto literal 'counter';
    next: function () {
        // dentro da função, o 'this' referencia o objeto literal
        // 'counter', que tem a propriedade 'count';
        return ++this.count;
    }
};
console.log(counter.next());    // invocação da função a partir do objeto 'counter';

// -------------------- contexto global --------------------
/**
 * No contexto global, o 'this' referencia o objeto global; que é o 
 * objeto 'window' em navegadores, e o objeto 'global' no 
 * ambiente de execução JavaScript NodeJS; este comportamento é
 * consistente tanto no modo estrito quando no modo não-estrito;
*/
this.nome = 'Pedro';
console.log(this);
console.log('objeto global ->', global);

// -------------------- invocação de função simples --------------------
/**
 * Como pode ser verificado, a palavra-chave 'this'
 * dentro de uma função a nível de arquivo é igual ao
 * objeto global do NodeJS;
 * Mas no modo de execução estrito, quando usando "use strict"
 * no começo do arquivo de script, o resultado abaixo é 
 * diferente, porque a palavra-chave 'this' passou a 
 * ter o valor 'undefined';
*/
function hello() {
    // no modo não-estrito de execução do JavaScript, o resultado é true;
    console.log('função hello ->', this === global);
    // no modo estrito de execução do JavaScript, o resultado é true;
    console.log('função hello ->', this === undefined);
}
hello();

function usandoModoEstritoSomenteANivelDeFuncao() {
    "use strict";
    // no modo não-estrito de execução do JavaScript, o resultado é true;
    //console.log('função modo-estrito ->', this === window);   // versão para navegador web;
    // no modo não-estrito de execução do JavaScript, o resultado é true;
    console.log('função modo-estrito ->', this === global);
    // no modo estrito de execução do JavaScript, o resultado é true;
    console.log('função modo-estrito ->', this === undefined);
    // o modo estrito se aplica a funções aninhadas, dentro desta função;
}
usandoModoEstritoSomenteANivelDeFuncao();

// -------------------- invocação de método --------------------
/**
 * Quando você invoca um método em um objeto, o JavaScript configura
 * a palavra-chave 'this' para o objeto que é dono do método;
*/
const car = {
    brand: 'Honda',
    getBrand: function () {
        return this.brand;
    }
};
console.log('invocação de método em objeto ->', car.getBrand());

// como uma função é um valor que pode ser armazenado em uma variável
// o seguinte exemplo demonstra o que acontece quando executamos a
// função sem um objeto dono da função;
// o resultado é 'undefined' porque foi invocado um método sem 
// especificar um objeto; então o JavaScript configura o 'this' para
// o objeto global, no modo não-estrito, e para 'undefined' no modo estrito;
const funcaoSemDono = car.getBrand;
// esta invocação de função causa um erro no ambiente de execução
// do JavaScript, que neste caso, é o NodeJS;
//funcaoSemDono();

// uma forma de corrigir o erro acima, é atribuir um objeto a função
// mencionada usando para isso, a função 'bind()' de Function.prototype;
// o método 'bind' cria uma nova função com o valor de 'this' configurado
// para o objeto fornecido como o primeiro argumento desta função;
let brand1 = car.getBrand.bind(car);    // configura o 'this' para o objeto 'car';
// neste caso, a palavra-chave 'this' está, novamente, associada a um objeto dono;
console.log('invocação de função com bind ->', brand1());

// outro exemplo do uso da função 'bind';
let bike = {
    brand: 'Harley Davidson'
}
const brand2 = car.getBrand.bind(bike);
console.log('invocação de função com bind ->', brand2());

// -------------------- invocação de construtor --------------------
/**
 * Quando você usa a palavra-chave 'new' para instanciar um objeto,
 * você está usando a função como uma 'função construtora';
*/
// segue um exemplo de uma função construtora;
function Car(brand) {
    this.brand = brand;
}

// associa uma nova função ao protótipo de Car;
Car.prototype.getBrand = function () {
    return this.brand;
}

// instancia um objeto Car, da maneira adequada, usando a
// a palavra-chave 'new';
// JavaScript cria um novo objeto e define o 'this' para o novo objeto criado.
let car2 = new Car('Fiat');
console.log(car2.getBrand());

// desta forma a função Car, agora pode ser invocada de duas maneiras,
// mas a segunda forma, sem o uso da palavra-chave 'new', ocasiona um erro;
// quando invocado sem a palavra-chave 'new', o 'this' referencia o
// objeto global, então o acesso a propriedade retorna 'undefined';
//var bmw = Car('BMW');     // este código está comentado porque está gerando erro;
//console.log(bmw.brand);

// a forma correta é, usar a palavra-chave 'new' para criar um novo objeto;
let bmw = new Car('BMW');
console.log(bmw.getBrand());

// para assegurar que a função sempre seja invocada com a palavra-chave 'new',
// adicionamos uma verificação no início da função;
function Car(brand) {
    // verificação que assegura que a função foi invocada com 'new';
    if (!(this instanceof Car)) {
        throw new Error('Must use the new operator to call the function');
    }
    this.brand = brand;
}

// a partir do ES6, o JavaScript adicionou uma meta-propriedade que permite
// saber quando uma função foi invocada com a palavra-chave 'new';
function Car(brand) {
    // new.target - meta-propriedade a partir do ES6;
    if (!new.target) {
        throw new Error('Must use the new operator to call the function');
    }
    this.brand = brand;
}

// -------------------- invocação indireta --------------------
/**
 * Em JavaScript, funções são objetos de primeira-classe. Em outras
 * palavras funções são objetos, que são instâncias do tipo Function;
*/
// este tipo tem dois métodos: call, e apply;
// estes métodos permitem a você definir o valor de 'this' quando
// chamando a função;
function getBrand(prefix) {
    console.log('invocação indireta ->', prefix + this.brand);
}

let honda = {
    brand: 'Honda'
};
let audi = {
    brand: 'Audi'
};

// o primeiro argumento é o valor de 'this' dentro da função getBrand();
getBrand.call(honda, "It's a ");
getBrand.call(audi, "It's an ");

// o método 'apply' é similar ao método 'call', exceto que o segundo
// argumento é um array de valores;
getBrand.apply(honda, ["It's a "]);
getBrand.apply(audi, ["It's an "]);

// -------------------- função arrow --------------------
/**
 * O ECMAScript 6, introduziu outro conceito relacionado a funções;
 * Em funções arrow, o JavaScript define o 'this' de maneira lexicográfica;
 * Isto significa que funções arrow não criam seu próprio contexto de
 * execução, mas sim recebem (herdam) o 'this' do escopo externo, da 
 * função externa onde a função arrow foi declarada;
*/
let getThis = () => this;
console.log(getThis() === global);

function Car() {
    this.speed = 120;
}

// a função arrow causa um problema em tempo de execução
// por não ter o valor de 'this' "correto";
Car.prototype.getSpeed = () => {
    return this.speed;
};

var vehicle = new Car();
console.log(vehicle.getSpeed());
