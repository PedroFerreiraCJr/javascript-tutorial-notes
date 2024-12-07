// ------------------ método de instância private ------------------ //
// o seguinte ilustra como definir uma classe com métodos
// de instância private;
class Person {
    #firstname;
    #lastname;

    constructor(firstname, lastname) {
        this.#firstname = firstname;
        this.#lastname = lastname;
    }

    getFullName(format = true) {
        return format ? this.#firstLast() : this.#lastFirst();
    }

    #firstLast() {
        return `${this.#firstname} ${this.#lastname}`;
    }

    #lastFirst() {
        return `${this.#lastname} ${this.#firstname}`;
    }
};

let maria = new Person('Maria Eduarda', 'Medeiros');
console.log(maria.getFullName());

// ------------------ método de classe private ------------------ //
class Person2 {
    #firstname;
    #lastname;

    constructor(firstname, lastname) {
        this.#firstname = Person2.#validate(firstname);
        this.#lastname = Person2.#validate(lastname);
    }

    getFullName(format = true) {
        return format ? this.#firstLast() : this.#lastFirst();
    }

    #firstLast() {
        return `${this.#firstname} ${this.#lastname}`;
    }

    #lastFirst() {
        return `${this.#lastname} ${this.#firstname}`;
    }

    static #validate(name) {
        if (typeof name === 'string') {
            let str = name.trim();
            if (str.length >= 3) {
                return str;
            }
        }

        throw 'The name must be a string with at least 3 characters';
    }
};

let pedro = new Person2('Pedro', 'Junior');
console.log(pedro.getFullName());
