/**
 * um método estático é um método que está associado a classe
 * ou função construtora ao invés da instância do objeto;
 * 
 * material de referência:
 *  https://www.javascripttutorial.net/es6/javascript-static-method/
*/

// definição de função construtora;
function Person(name) {
    this.name = name;
};

// definição de método no protótipo da função construtora Person;
// este método serve para obter o valor da propriedade 'name'
// de um objeto que tenha esta propriedade;
Person.prototype.getName = function () {
    return this.name;
};

// antes do JavaScript ES6, uma forma de definir um método estático
// era declarando o método na própria função construtora, conforme o seguinte exemplo;
Person.createAnonimous = function (gender) {
    let name = (gender === 'male') ? 'Pedro Junior' : 'Maria Eduarda';
    return new Person(name);
};

// o método 'createAnonimous' é considerado estático porque não depende de
// nenhuma instância de objeto para poder ser invocado;
console.log(Person.createAnonimous('male'));

// ------------------ métodos estáticos a partir do ES6 ------------------
// agora, um exemplo de método estático a partir do ES6 que possui a 
// implementação do conceito de classes;
class Pessoa {
    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    // em ES6 é possível definir um método estático com a 
    // palavra-chave 'static', conforme o seguinte exemplo;
    static createAnonimous(gender) {
        let name = (gender == 'male') ? 'Pedro Junior' : 'Maria Eduarda';
        return new Pessoa(name);
    }
}

// para invocar o método estático, basta usar a seguinte sintaxe;
console.log(Pessoa.createAnonimous('female'));

// a tentativa de invocar um método estático a partir de uma instancia de objeto de uma classe
// dá um erro em tempo de execução;
let maria = new Pessoa('Maria Eduarda');
// maria.createAnonimous();         // esta linha foi comentada para que o código possa executar sem erro;

// ------------------ invocando método estático de um construtor ou método de instância ------------------
// para invocar um método estático a partir do construtor de uma classe, basta
// fornecer o nome da classe que possui o método estático, usar o operador '.' (ponto)
// e fornecer o nome do método estático, conforme o seguinte exemplo;
// a mesma aborgagem serve para invocar um método estático a partir de um método de instância;

class Gato {
    constructor(name) {
        this._name = name;
        // invocação de método estático em construtor;
        console.log(`o dono do gato de nome: ${this._name} é ->`, Pessoa.createAnonimous('male'));
    }

    // o mesmo que foi apresentado acima poderia ser feito em um método de instância;
    get name() {
        return this._name;
    }

    static welcomeMessage(gatinho) {
        console.log('exemplo de invocação de método estático');
        return `Hi, my name is ${gatinho.name}. And i am a cat!`;
    }
};
let floquinho = new Gato('Floquinho');
console.log(Gato.welcomeMessage(floquinho));

let frajola = new Gato('Frajola');
console.log(Gato.welcomeMessage(frajola));
