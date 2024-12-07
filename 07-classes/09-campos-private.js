/**
 * o ES2022 permite que uma classe declare um campo private;
 * através do uso do símbolo de '#' (hashtag), é possível declarar
 * um campo private;
*/

// como radius é um campo private, o acesso direto a ele somente é 
// permitido dentro da própria classe Circle;
class Circle {
    // declaração de campo private;
    #radius;

    constructor(value) {
        // no acesso a um campo private deve ser usado o símbolo de hashtag;
        this.#radius = value;
    }

    // define um getter para area;
    get area() {
        // calcula a área do círculo;
        // novamente, acessando a propriedade private usando o símbolo de '#';
        return Math.PI * Math.pow(this.#radius, 2);
    }
};

let circle = new Circle(10);
console.log(circle.area);

// --------------- usando um getter para acessar a propriedade private --------------- //
class Circle2 {
    #radius = 0;

    constructor(radius) {
        // invoca o método setter, definido logo abaixo, para configurar
        // o valor do campo private 'radius';
        this.radius = radius;
    }

    get area() {
        return Math.PI * Math.pow(this.#radius, 2);
    }

    // método getter para o campo private - radius;
    get radius() {
        return this.#radius;
    }

    // método setter para o campo private - radius;
    set radius(value) {
        // se o valor de value for um number válido, atribui o valor de value para radius;
        if (typeof value === 'number' && value > 0) {
            this.#radius = value;
            return;
        }

        // caso contrário, lança um erro;
        throw new Error('The radius must be a positive number');
    }
};

// --------------- campos private em subclasses --------------- //
// campos private são somente acessíveis dentro da classe onde são
// declarados, portanto, não são acessíveis em subclasses;
class Cylinder extends Circle {
    // campo private declarado na classe Cylinder;
    // desta forma, este campo somente é visível nesta classe;
    #height;

    constructor(radius, height) {
        // invoca o construtor da super-classe para inicializar o valor de radius;
        // o valor de radius não pode ser acessado diretamente nesta classe;
        super(radius);
        this.#height = height;
    }
};

// --------------- checando a existência de campos private em uma classe --------------- //
// para checar se um objeto tem um campo private dentro da classe, é
// preciso usar o operador 'in';
class Circle3 {
    // declaração de campo private;
    #radius;

    // declaração de construtor para inicializar os campos desta classe;
    constructor(value) {
        // invoca o método setter para alterar o valor do campo radius;
        this.radius = value;
    }

    // método getter para obter o valor de #radius;
    get radius() {
        return this.#radius;
    }

    // método setter para configurar o valor de #radius;
    set radius(value) {
        if (typeof value === 'number' && value > 0) {
            this.#radius = value;
            return;
        }

        throw new Error('the radius must be a positive number');
    }

    // método que verifica se o campo private #radius existe no
    // parametro declarado;
    static hasRadius(circle) {
        return #radius in circle;
    }
}

let nCircle = new Circle3(10);
console.log(Circle3.hasRadius(nCircle));

// --------------- campo private estático --------------- //
class Circle4 {
    // declaração de campo private;
    #radius;

    // declaração de campo estático;
    static #count = 0;

    // declaração de construtor para inicializar os campos desta classe;
    constructor(value) {
        // invoca o método setter para alterar o valor do campo radius;
        this.radius = value;

        // incrementa em uma unidade o valor do campo #count;
        Circle4.#count++;
    }

    // método getter para obter o valor de #radius;
    get radius() {
        return this.#radius;
    }

    // método setter para configurar o valor de #radius;
    set radius(value) {
        if (typeof value === 'number' && value > 0) {
            this.#radius = value;
            return;
        }

        throw new Error('the radius must be a positive number');
    }

    // método que verifica se o campo private #radius existe no
    // parametro declarado;
    static hasRadius(circle) {
        return #radius in circle;
    }

    // método estático que devolve o valor do campo estático #count;
    static getCount() {
        return Circle4.#count;
    }
};

let circles = [new Circle4(5), new Circle4(10), new Circle4(15)];
console.log(Circle4.getCount());
