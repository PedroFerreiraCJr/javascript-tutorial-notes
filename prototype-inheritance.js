// declara uma instância de objeto através da notação literal de objeto;
let person = {
    name: 'Pedro Junior',
    ola: function () {
        return `Hi i'am ${this.name}`;
    }
};
console.log(person.ola());

// declara uma instância de objeto através da notação literal de objeto;
let teacher = {
    teach: function (subject) {
        return `I can teach ${subject}`;
    }
};

// faz com que o objeto teacher herde atributos e métodos de person;
teacher.__proto__ = person;     // define a cadeia de herança;
console.log(teacher.ola());     // método herdado de person;

// a partir do ES5, caso não seja possível usar as novas funcionalidades
// da versão ES6, basta usar o método 'Object.create()' para criar um objeto
// que herda atributos do argumento informado para o método 'create';
// cria um objeto vazio, onde __proto__, aponta para o objeto 'person';
let maria = Object
    .create(person);    // neste exemplo, o objeto retornado, é derivado de 'person';
maria.name = 'Maria Eduarda';
console.log(maria.ola());

// o método 'getPrototypeOf()' também foi adicionado na versão ES5;
console.log(Object.getPrototypeOf(teacher) === person);
