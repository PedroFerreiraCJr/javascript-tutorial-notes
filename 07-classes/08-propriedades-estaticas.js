/**
 * assim como métodos estáticos, propriedades estáticas pertencem
 * a classe, e são compartilhados por todos as instâncias de objetos
 * da classe;
 * 
 * use a palavra-chave 'static' para definir uma propriedade estática;
 * 
 * material de referência;
 *  https://www.javascripttutorial.net/es6/javascript-static-properties/
*/

class Item {
    // definição de propriedade estática, que pertence a classe Item;
    static count = 0;
}

// para acessar o valor da pripriedade estática fora da classe, é preciso
// usar o nome da classe seguido pelo operador ponto (.), além do nome da 
// propriedade estática, conforme o seguinte exemplo;
console.log('acessando uma propriedade estática ->', Item.count);

// acessando uma propriedade estática a partir da própria classe;
class ItemStock {
    // propriedade estática
    static count = 10;

    // método estático
    static get counter() {
        return this.count;
    }
};

console.log('acessando uma propriedade estática através de um método estático ->', ItemStock.counter);

// ------------------ exemplo de acesso a propriedade estática em construtor ------------------ //
class ItemStock2 {
    // propriedade estática, compartilhada por todos os objetos desta classe;
    static count = 10;

    constructor() {
        // primeira maneira de acessar o valor de uma propriedade estática
        // a partir do construtor da própria classe;
        //ItemStock2.count++;       // comentado mas, é totalmente funcional

        // segunda maneira de acessar o valor de uma propriedade estática
        // a partir do construtor da própria classe;
        //this.constructor.count++;       // comentado mas, é totalmente funcional

        this.constructor.count++;
    }

    // método estático, compartilhado por todos os objetos desta classe;
    static get counter() {
        return this.count;
    }
};

console.log(new ItemStock2());
console.log(new ItemStock2());
console.log(ItemStock2.count);
