/**
 * a partir da versão ES6 o JavaScript permite ao desenvolvedor
 * criar um objeto literal de maneira mais sucinta;
*/
function creatMachine(name, status) {
    // neste exemplo é possível notar que não foi preciso
    // informar o nome da propriedade e o símbolo de dois pontos (:)
    // que tradicionalmente define uma propriedade em um objeto literal;
    // desta nova maneira de declarar uma propriedade, o JavaScript procura
    // no escopo circundante o valor das variáveis 'name' e 'status';
    // e permite definir que, a propriedade terá o mesmo nome da variável
    // utilizada na atribuição de valor a propriedade;
    // desta forma, se o nome da propriedade for o mesmo nome da variável
    // basta definir a própria variável como o nome e valor da propriedade;
    return {
        name,
        status
    };
};

// antes do ES6 era possível usar nome de propriedade computada
// para definir o nome de uma propriedade em um objeto;
let mName = 'machine-name';
let machine = {
    [mName]: 'server',
    'machine-hours': 10
};
console.log(machine[mName]);
console.log(machine['machine-hours']);

// em ES6 o JavaScript permite usar o operador colchete para definir uma propriedade
// computada que deve resultar em uma string;
let prefix = 'machine';
let machine2 = {
    [prefix + ' name']: 'server',
    [prefix + ' hours']: 10000
};
console.log(machine2);

// em ES6 também ficou mais fácil definir um método em um objeto literal;
// agora, para definir um método em um objeto literal, basta usar a seguinte
// sintaxe, que é permitido, tornando assim, o código mais legível, e sucinto;
let server = {
    name: 'Server',
    restart() {
        console.log("The" + this.name + " is restarting...");
    },
    // também é possível ter espaços no nome do método
    'starting up'() {
        console.log("The " + this.name + " is starting up!");
    }
};
server['starting up']();