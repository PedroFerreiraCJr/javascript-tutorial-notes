/**
 * em JavaScript funções são instâncias de objetos, e desta forma
 * possuem propriedade e métodos;
 * cada função tem duas propriedades importantes, que
 * são: length, e prototype;
 * length: o número de parâmetros nomeados da função;
 * prototype: o objeto função em si;
*/
function add(x, y) {
    return x + y;
};

console.log('número de parâmetros -> ', add.length);
console.log('protótipo da função -> ', add.prototype);

// meta-propriedade new.target - introduzida no ES6;
// é possível invocar uma função usando a keyword 'new'
// desta forma, a função estaria sendo invocada como uma função construtora;
// exemplo de invocação da função add como construtora;
//let objeto = new add(10, 20);     // para testar descomente este código;
//console.log(objeto);

// para saber se a função foi invocada usando a palavra-chave 'new',
// basta usar a meta-propriedade para este caso;
function add(x, y) {
    // quando esta função é invocada usando o operador 'new',
    // new.target retorna a função construtora;
    // caso contrário, retorna undefined;
    console.log(new.target);
    return x + y;
};

//let newObjeto = new add(10, 20);     // para testar descomente este código;
//console.log('usando new ->', newObjeto);

// uma forma de prevenir que a função add seja invocada com 'new',
// basta lançar uma exceção informado que o uso está incorreto;
function add(x, y) {
    if (new.target) {
        throw 'The add function cannot be called as a constructor';
    }
    return x + y;
}

// ------------------- métodos de function ------------------- //
// um objeto função tem três funções importantes, que são:
// apply(), call(), bind();
// as funções: apply(), e call(), invocam a função com determinado
// valor para 'this', e os argumentos da função, se for necesário;
// a principal diferença entre apply(), e call() é que apply() recebe
// os argumentos da função através de um objeto semelhante a um array;
// já a função call(), os argumentos são fornecidos separados por vírgula,
// da forma tradicional;
let cat = { type: 'cat', sound: 'meow' };
let dog = { type: 'dog', sound: 'woof' };

const say = function (message) {
    console.log(message);
    console.log(this.type + ' says: ' + this.sound);
};

// note que a função usada foi apply, e que os argumentos são
// informados usando um array; primeiro o contexto, que é this,
// e depois os argumentos, que estão no array;
say.apply(cat, ['what does a cat say?']);
say.apply(dog, ['what does a dog say?']);

// usando o método call de um objeto função;
say.call(cat, 'what does a cat say?');
say.call(dog, 'what does a dog say?');

// ------------------- métodos bind() ------------------- //
// o método bind retorna uma nova instância de uma função, com o
// contexto, ou o valor de this associado ao objeto fornecido como argumento;
let car = {
    speed: 10,
    start: function () {
        console.log(`starting with ${this.speed} km/h`);
    }
};

let aircraft = {
    speed: 10,
    fly: function () {
        console.log('flying...');
    }
};

let taxiing = car.start.bind(aircraft);
taxiing();

// a principal diferença entre bind() e call() é que bind() cria
// uma nova instância da função com o valor de this alterado para
// o objeto fornecido como argumento do método bind(); enquanto
// que o método call() invoca imediatamente a função informada;
