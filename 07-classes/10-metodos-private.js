/**
 * por padrão os membros de uma classe são públicos;
 * a partir do ES2022, foram adicionados o suporte para
 * campos private, assim como, métodos private;
*/

// para tornar um método público private, basta prefixar o nome do
// método com o símbolo de hashtag (#);
// um método private somente pode ser acessado dentro da própria classe
// que o define, e não pode ser acessado diretamente nem mesmo
// dentro de subclasses;

class MyClass {
    // declara um método de instância private;
    #sayHello() {
        console.log('Saying hello only for members for this class');
    }

    // método de instância que acessa o método private declarado logo acima;
    printHello() {
        for (let i = 0; i < 5; i++) {
            this.#sayHello();
        }
    }
}
let myClass = new MyClass();
myClass.printHello();

// ---------------- método estático private ---------------- //
class MyClass2 {
    // declara um método de classe (estático) private;
    static #sayHello() {
        console.log('Saying hello only for members for this class');
    }

    // método de classe, que acessa o método private declarado logo acima;
    static printHello() {
        for (let i = 0; i < 5; i++) {
            MyClass2.#sayHello();
        }
    }
}

MyClass2.printHello();


// ---------------- método getter/setter private ---------------- //
class MyClass3 {
    // declaração de campo private;
    #field;

    // declaração de método get private;
    // este método somente pode ser acessado dentro desta mesma classe;
    get #myField() {
        return this.#field;
    }

    // declaração de método set private;
    // este método somente pode ser acessado dentro desta mesma classe;
    set #myField(value) {
        this.#field = value;
    }
}

let myClass3 = new MyClass3();