/**
 * Em JavaScript, uma função regular é executado baseada no modelo
 * run-to-completion (rode-até-concluir); não é possível pausar na
 * metade, e continuar a partir de onde ela parou;
 * */

// uma função regular em JavaScript:
(function () {
    function foo() {
        console.log('I');
        console.log('cannot');
        console.log('pause');
    }

    foo();
}());

// a função 'foo()', executa do topo para baixo; a única maneira de terminar a função
// é retornando dela, ou lançando uma exceção; se você invocar a função 'foo()', novamente,
// ela irá iniciar a execução do topo para baixo;

// o ES6 introduziu um novo tipo de função, que é diferente de uma função regular:
// função geradora ou geradora;

// uma função geradora pode parar na metade e continuar de onde ela parou;
// exemplo:

(function () {
    function* generate() {
        console.log('invoked 1st time');
        yield 1;
        console.log('invoked 2nd time');
        yield 2;
    }

    generate();
}());

// vamos examinar a função 'generate' em detalhes;
// 1º - primeiro, é possível notar que a função 'generate' é declarada com um
// asterísco (*), depois da palavra-chave 'function'; o asterísco denota que a 
// função 'generate' não é uma função normal;
// 2º - segundo, a cláusula que usa a palavra-chave 'yield', retorna um valor e 
// pausa a execução da função

// o seguinte código invoca a função 'generator';

(function () {
    function* generate() {
        console.log('invoked 1st time');
        yield 1;
        console.log('invoked 2nd time');
        yield 2;
    }

    let gen = generate();
}());

// quando você invoca a função 'generate':
// 1º - primeiro, não é apresentado nada no console da aplicação; se a função 
// 'generate' fosse uma função regular, você esperaria ver mensagens no console;
// 2º - segundo, você recebe algo de volta a invocação da função;

// vamos ver o que foi retornado através da invocação da função 'generate';
(function () {
    function* generate() {
        console.log('invoked 1st time');
        yield 1;
        console.log('invoked 2nd time');
        yield 2;
    }

    let gen = generate();
    console.log(gen);
}());

// é possível notar que, a função 'generate' retornou um Generator;
// foi retornado um Generator sem ter executado o corpo deste Generator;

// o objeto Generator retorna um outro objeto com duas propriedades; done e 
// value, um objeto Generator é na verdade um objeto Iterable;

// o seguinte código invoca o método 'next()' do objeto Generator;
(function () {
    function* generate() {
        console.log('invoked 1st time');
        yield 1;
        console.log('invoked 2nd time');
        yield 2;
    }

    let gen = generate();

    // é possível perceber que, a seguinte invocação do método 'next()', executa o corpo
    // da função generate, que imprime o valor no console, e retorna o valor 1 na linha 2;
    // a execução da cláusula 'yield 2', pausa novamente a execução da função;
    let result = gen.next();
    console.log(result);

    // similarmente, o seguinte trecho de código invoca a função geradora novamente, que 
    // então, executa novamente o corpo da função, mas desta vez, executa de onde parou,
    // desta forma, imprimindo no console 'invoked 2nd time', e retornando o valor 2;
    result = gen.next();
    console.log(result);

    // desta vez, o valor retornado é: { value: 2, done: false }

    // a execução do método 'next()', mais uma vez, agora retorna o seguinte valor:
    // { value: undefined, done: true };
    result = gen.next();
    console.log(result);
}());

// uma vez que o objeto Generator é um Iterable, é possível usar este tipo de função
// com a nova forma de construção de loopo for, o for...of;
(function () {
    function* generate() {
        console.log('invoked 1st time');
        yield 1;
        console.log('invoked 2nd time');
        yield 2;
    }

    // uso da função geradora com a nova construção da linguagem JavaScript ES6.
    // o laço de repetição: for...of;
    for (const g of generate()) {
        console.log(g);
    }
}());

// ------------------- implementação de uma Bag ------------------- //
// a estrutura de dados Bag, tem a capacidade de coletar elementos, e percorre-los;
// esta estrutura de dados não suporta a remoção de elementos;
// exemplo:
(function () {
    class Bag {
        constructor() {
            this.elements = [];
        }
        isEmpty() {
            return this.elements.length === 0;
        }
        add(element) {
            this.elements.push(element);
        }
        * [Symbol.iterator]() {
            for (let element of this.elements) {
                yield element;
            }
        }
    }

    let bag = new Bag();
    bag.add(1);
    bag.add(2);
    bag.add(3);

    for (let e of bag) {
        console.log(e);
    }
}());
