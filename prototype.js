console.log(typeof Object);
console.log(Object.prototype);
console.log(Object.prototype.constructor === Object);

function Person(name) {
    this.name = name;
};

console.log(Person);
console.log(Person.prototype.constructor);
// a função construtora Person possui uma referência a 
// prototype, que por sua vez, referência a própria função 
// construtora através do atributo constructor;
console.log(Person.prototype.constructor === Person);

const pessoa = new Person("Pedro Junior");
// função não encontrada em nenhum dos protótipos
// da cadeia de protótipos;
//pessoa.invocar();
console.log(pessoa.constructor);
// a função abaixo deve ser usada ao invés de acessar diretamente
// a propriedade __proto__;
console.log(Object.getPrototypeOf(pessoa));

// ----------------------- padrão construtor/protótipo -----------------------
/**
 * define a função construtora Person;
 * os atributos definidos aqui não são compartilhados
 * pelas instancias da função construtora Person, mas
 * sim, cada instância possui seu conjunto de cópias próprio;
*/
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
};

// define, no protótipo da função construtora Person, o 
// método getFullName, que será compartilhado por todos
// os objetos que forem instanciados a partir de Person;
Person.prototype.getFullName = function () {
    return this.firstName + ' ' + this.lastName;
};

const maria = new Person('Maria Eduarda', 'Medeiros');
console.log(maria.getFullName());
