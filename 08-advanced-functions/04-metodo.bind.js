/**
 * o método bind() retorna uma nova função quando invocado,
 * e tem o valor de this configurado para um objeto em específico;
 * diferente dos métodos call() e apply(), bind() não invoca 
 * imediatamente a função em questão;
*/

// ------------- usando a função bind para associar uma função ------------- //
let person = {
    name: 'Pedro Junior',
    getName: function () {
        console.log(this.name);
    }
};

// quando você passa um método de um objeto para uma outra função
// como argumento, e isto é conhecido como função de callback, o 
// valor de this na função passada é perdido;
// como é possível notar a partir da função abaixo, o valor do this
// para a função getName é perdido;
// desta forma, o contexto this dentro da função getName é perdido;
setTimeout(person.getName, 1000);

// uma forma de contornar esta situação, basta passar uma função
//  anônima para a função setTimeout, conforme o exemple a seguir;
setTimeout(function () {
    person.getName();
}, 1000);

// outra forma de contornar esta situação é usando a função bind(),
// conforme o exemplo a seguir;
const f = person.getName.bind(person);
setTimeout(f, 1000);

// ---------- usando bind() para emprestar métodos de diferente objetos ---------- //
let runner = {
    name: 'Runner',
    run: function (speed) {
        console.log(this.name + ' runs at ' + speed + ' mph.');
    }
};

let flyer = {
    name: 'Flyer',
    fly: function (speed) {
        console.log(this.name + ' flies at ' + speed + ' mph.');
    }
};

// se você deseja que o objeto flyer seja capaz de correr, basta pegar emprestado
// a função run() do objeto runner para o objeto flyer;
// neste trecho de código está invocando a função bind() da função run() do objeto
// runner, que retorna um nova função com o contexto, ou o valor de this, configurado
// para o objeto flyer, e argumento da função run(), com o valor 20;
let run = runner.run.bind(flyer, 20);
run();

// a capacidade de emprestar um método de um objeto sem ter que fazer uma cópia, e
// ter que manter duas versões do mesmo método é uma feature muito poderosa do JavaScript;
