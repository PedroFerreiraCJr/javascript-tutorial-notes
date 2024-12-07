// função construtora, deve ser usada com o operador 'new';
function Human(name) {
    this.name = name;
}

let human = new Human('Pedro');
console.log(human instanceof Human);
console.log(human instanceof Object);

// a sintaxe de classe está disponível a partir do ES6;
// apesar das similaridades entre um tipo definido através de uma classe
// e um tipo definido através de uma função construtora, existem algumas
// diferenças importantes a se notar;
// 1. a declaração de classes não é içada como a declaração de funções;
// por exemplo, se for feito a tentativa de instanciar um objeto de uma classe
// que ainda não foi declarado até o momento, mas sim, definido após a instanciação
// será lançado um 'ReferenceError';
// 2. todo código dentro de uma classe é executado no modo estrito, e este 
// comportamento não pode ser alterado;
// 3. métodos de classe são não-enumeráveis;
// 4. não é possível invocar uma classe sem o operador 'new'; caso isso aconteça
// o JavaScript lança uma exceção em tempo de execução;
class Person {
    // construtor da classe, que é executado automaticamente na instanciação da classe
    // com o operador 'new';
    constructor(name) {
        this.name = name;
    }

    // método de instância;
    getName() {
        return this.name;
    }
};

let person = new Person('Pedro');
console.log(person);

// a sintaxe de classes é apenas um açúcar sintático na linguagem JavaScript, 
// e desta forma, uma classe nada mais é do que uma função, como pode ser
// demonstrado através do operador typeof;
console.log('typeof de uma classe ->', typeof Person);
console.log('variável person é um Person ->', person instanceof Person);
console.log('variável person é um Object ->', person instanceof Object);
