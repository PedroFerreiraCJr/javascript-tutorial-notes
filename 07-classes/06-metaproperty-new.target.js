/**
 * a metaproperty (meta propriedade), que está disponível a
 * partir do ES6 torna possível saber quando uma função ou
 * construtor foi invacado com o operador 'new';
 * previamente a esta versão do JavaScript já era possível
 * saber quando uma função era invocada com ou sem o operador
 * 'new'; mas agora ficou muito mais fácil e intuitivo a
 * partir do ECMAScript 2015;
 * 
 * material de referência:
 *  https://www.javascripttutorial.net/es6/javascript-new-target/
*/

// em funções arrow o operador new.target está relacionado a
// função do escopo mais externo a função arrow;
function Person(name) {
    this.name = name;
};

// é possível criar um novo objeto a partir da função
// construtora Person acima, usando o operador 'new';
let maria = new Person('Maria Eduarda');
console.log(maria.name);

// ou é possível invocar a função Person sem o operador 'new';
// mas essa invocação de função desta maneira tem um comportamento
// diferente do esperado;
// esta função não cria um novo objeto, mas sim adicionar ao objeto 
// global a propriedade 'name', porque o 'this' dentro desta função está
// apontando para o objeto global;
//Person('Maria Eduarda');      // foi preciso comentar para poder executar sem erro;

// portanto, para ajudar a determinar se a função está sendo invocada
// com o operador 'new', antes do ECMAScript 2015, existe uma forma
// como esta função tem a característica de ser içada por conta 
// do hoisting, não será preciso mover a invocação da função Person
// para baixo da desta definição;
function Person(name) {
    if (!(this instanceof Person)) {
        throw new Error('É necessário usar o operador new para invocar esta função');
    }
    this.name = name;
};

// segue a nova maneira de saber se a funçãp está sendo invocada
// com o operador 'new', a partir do JavaScript ES6;
// a metapropriedade retorna undefined caso o função tenha sido invoacada
// sem o uso do operador 'new';
function Person(name) {
    if (!new.target) {
        throw new Error('É necessário usar o operador new para invocar esta função');
    }
    this.name = name;
}

// ---------------------- new.target em construtores ---------------------- //
// neste exemplo, o operador new.target, pega mostra o nome da classe que 
// recebeu o operador new diretamente; portanto, no primeiro caso, para 
// a classe Pessoa, o valor impresso no console é Pessoa, porque o operador
// new foi usado diretamente nesta classe;
// já para a instanciação de Empregado, o valor impresso no console é
// Empregado porque o operador new foi usado diretamente com esta classe;
class Pessoa {
    constructor(name) {
        this.name = name;
        console.log(new.target.name);
    }
};

class Empregado extends Pessoa {
    constructor(name, title) {
        super(name);
        this.title = title;
    }
};

let pessoa = new Pessoa('Maria Eduarda');
let funcionario = new Empregado('Pedro', 'Programador Java');

