/**
 * uma função arrow não tem o seu próprio valor de this e não
 * possui o objeto arguments; portanto, você não deve usar ela como
 * um tratador de evento, um método de um objeto literal, um método
 * protótipo, ou quando você tem uma função que usa o objeto arguments;
*/

// digamos que exista um campo de texto input em um formulário HTML, e
// você deseja adicionar uma mensagem de boas vindas aos usuário quando
// eles digitarem o nome de usuário neste campo de texto;

// para isso você anexa um tratador de evento ao elemento HTML para obter o
// evento de keyup; quando o evento ocorre você pega o valor atual, representado
// por this.value usando uma função arrow que você adicionou como tratador de evento;

// neste caso, vale notar que o valor de this.value para uma função arrow
// sempre retornar o valor undefined; por este motivo, não é uma boa ideia utilizar
// uma função arrow para tratamento de eventos em campos de formulário;

// neste cenário, o JavaScript engine define o valor de this.value para undefined
// através da definição de uma propriedade no objeto global, neste caso, window
// porque estamos executando o JavaScript em um navegador web;

// para isto, basta deixar de usar uma função arrow e ao invés usar uma função regular
// para adicionar o tratamento de eventos personalizado ao elemento HTML, que tem o valor
// de this.value como o valor do campo de texto;

// ---------------- métodos em objetos ---------------- //
// veja o sequinte objeto contador;
const counter = {
    count: 0,
    next: () => ++this.count,
    current: () => this.count
};
console.log(counter.next());

// dentro do método next, o trecho: this.count; é equivalente ao acesso de count dentro do
// objeto global, que dentro de um navegador é o objeto window;

// window.count é undefined porque window não possui esta propriedade;
// o método next adiciona 1 ao valor de undefined, o que retorna o valor NaN;
// para corrigir este problema, basta usar funções regulares;
const counter2 = {
    count: 0,
    next() {
        return ++this.count;
    },
    current() {
        return this.count;
    }
};
console.log(counter2.next());

// ---------------- método protótipo ---------------- //
// veja o seguinte trecho de código que usa o padrão protótipo;
// por este código estar dentro de uma IIFE, o resultado será diferente de NaN;
(function () {
    function Counter() {
        this.count = 0;
    }

    Counter.prototype.next = () => {
        return this.count;
    };

    Counter.prototype.current = () => {
        return ++this.next;
    }

    // instância o objeto e usa ele; este é o mesmo caso mencionado acima onde o 
    // valor de this está associado ao objeto global, porque as funções arrow 
    // possuem escopo lexico;
    const counter = new Counter();
    console.log(counter.next());
})();

// para corrigir este cenário, basta usar uma função regular;
(function () {
    function Counter() {
        this.count = 0;
    }

    Counter.prototype.next = function () {
        return this.count;
    };

    Counter.prototype.current = function () {
        return ++this.next;
    }

    const counter = new Counter();
    console.log(counter.next());
})();

// ---------------- funções que usam o objeto arguments ---------------- //
// funções arrow não tem o objeto arguments; portanto, se você tem uma função que
// usa o objeto arguments, não é possível usar uma função arrow;
(function () {
    const concat = (separator) => {
        let args = Array.prototype.slice.call(arguments, 1);
        return args.join(separator);
    };
    let result = concat('Pedro', ' ', 'Junior');
    console.log(result);
})();

// ao invés de uma função arrow, use uma função regular;
(function () {
    function concat(separator) {
        let args = Array.prototype.slice.call(arguments, 1);
        return args.join(separator);
    };
    let result = concat(' ', 'Pedro', 'Junior');
    console.log(result);
})();

// funções arrow não possuem o seu prório valor de this, ela usa o valor do
// escopo léxico, e também não possui o objeto arguments;

// evite o uso de funções arrow para tratadores de eventos, métodos de objetos
// literais, método protótipo, e funções que usam o objeto arguments;
