/**
 * uma função fábrica constrói novos objeto quando é invocada;
*/
// esta é uma função fábrica, porque sempre que é invocada
// retorna um novo objeto;
/*
function createPerson(firstName, lastName) {
    return {
        firstName: firstName,
        lastName: lastName,
        // essa definição de função membro não é a melhor porque está
        // criando a mesma função para cada invocação da função 'createPerson';
        getFullName: function () {
            return `${this.firstName} ${this.lastName}`;
        }
    };
};
*/

// uma nova versão da função fábrica que melhora a performance porque não
// cria a mesma função para cada objeto criado;
function createPerson(firstName, lastName) {
    return {
        firstName: firstName,
        lastName: lastName
    };
};

const getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
};

const maria = createPerson('Maria Eduarda', 'Medeiros');
const pedro = createPerson('Pedro', 'Junior');
const mirela = createPerson('Mirela', 'Brito');
const francisca = createPerson('Francisca', 'Alves');

maria.getFullName = getFullName;
pedro.getFullName = getFullName;
mirela.getFullName = getFullName;
francisca.getFullName = getFullName;

console.log(maria.getFullName());
console.log(pedro.getFullName());
console.log(mirela.getFullName());
console.log(francisca.getFullName());

// segue outra forma de estabelecer o mesmo relacionamento entre
// cada objeto e a função getFullName;
const personActions = {
    getFullName: function () {
        return `${this.firstName} ${this.lastName}`;
    }
};

function createPerson2(firstName, lastName) {
    // a função Object.create(), aceita até dois argumentos;
    // o primeiro argumento é o objeto pre-existente que deve ser usado
    // como protótipo para o objeto que está sendo criado;
    // o segundo argumento, que é opcional, é um objeto descritor que tem
    // dentro dele propriedades que devem ser definidas como próprias do
    // novo objeto que está sendo criado;
    const person = Object.create(personActions);
    person.firstName = firstName;
    person.lastName = lastName;
    return person;
};

const maria2 = createPerson2('Maria Eduarda', 'Medeiros');
// o símbolo ?. antes dos parênteses representa o operador de encadeamento optional
// do inglês: optional chaining operator;
console.log(maria2.getFullName?.());