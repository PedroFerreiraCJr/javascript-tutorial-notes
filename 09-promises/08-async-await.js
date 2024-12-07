/**
 * a versão ECMAScript 2017, adicionou as keywords: async, e await;
 * estas keywords foram adicionadas para melhorar a forma de escrever
 * código assíncro; elas foram adicionadas em cima do conceito de Promise,
 * que é uma das maneiras mais recentes de programar um código assíncro;
 * desta forma, a partir de um código assincrono que funciona com o conceito
 * de Promise, é possível adicionar outra camada de abstração usando estas 
 * keywords; portanto, tecnicamente falando, elas são apenas um açúcar sintático
 * em cima das Promises;
 * */

// se uma função retorna uma Promise, é possível adicionar a keyword 'await'
// na frente da invocação da função, para que ela passe a usar este açúcar sintático;

// por exemplo, suponha uma função f que retorna uma Promise;
// para usar a keyword 'await' com esta função, basta fazer o seguinte:
/*
let result = await f();
*/

// um fato importante sobre o uso desta keyword, é que ela somente pode ser usada 
// dentro de funções que forem declaradas com a outra keyword 'async';

// exemplo de invocação de função assíncrona com as keywords: async, e await;
(function () {
    function getUser(userId) {
        return new Promise((resolve, reject) => {
            console.log('Get user from the database.');
            setTimeout(() => {
                resolve({
                    userId: userId,
                    username: 'john'
                });
            }, 1000);
        })
    }
    
    function getServices(user) {
        return new Promise((resolve, reject) => {
            console.log(`Get services of  ${user.username} from the API.`);
            setTimeout(() => {
                resolve(['Email', 'VPN', 'CDN']);
            }, 2 * 1000);
        });
    }
    
    function getServiceCost(services) {
        return new Promise((resolve, reject) => {
            console.log(`Calculate service costs of ${services}.`);
            setTimeout(() => {
                resolve(services.length * 100);
            }, 3 * 1000);
        });
    }

    async function showServiceCost() {
        let user = await getUser(100);
        let services = await getServices(user);
        let cost = await getServiceCost(services);
        console.log(`The service cost is ${cost}`);
    }

    // a seguinte função, que foi declarada com 'async' invoca três operações
    // em sequência;
    showServiceCost();
}());

// ------------------- a keyword async ------------------- //
// a keyword async permite a você definir funções que lidam com operações assíncronas;

// para definir uma função async, basta colocar a keyword async na frente da
// keyword function, na declaração de função;
(function () {
    async function sayHi() {
        return 'Hi';
    }
}());

// funções assíncronas executam assíncronamente através do Event Loop;
// a função declarada desta forma sempre retorna uma Promise;

// neste exemplo como a função sayHi() retorna uma Promise, você pode 
// consumí-la invocando a função .then(), logo no retorna desta função;
// exemplo de consumo da promise retornada pela função sayHi();

/*
sayHi().then(console.log);
*/

// também é possível explicitamente retornar uma Promise da função sayHi();
(function () {
    async function sayHi() {
        return Promise.resolve('Hi');
    }
}());

// além das funções regulares, você pode também usar a keyword 'async' em
// uma expressão de função, conforme o seguinte exemplo;
(function () {
    let sayHi = async function () {
        return 'Hi';
    }
}());

// também em funções arrow;
(function () {
    let sayHi = async () => 'Hi';
}());

// assim como, também em métodos de classe;
(function () {
    class Greeter {
        async sayHi() {
            return 'Hi';
        }
    }
}());

// ------------------- a keyword await ------------------- //
// você usa a keyword 'await' para aguardar uma Promise ser resolvida,
// seja por conclusão com sucesso, ou caso a Promise seja rejeitada;
// a keyword 'await' somente é aceita dentro de uma outra função que 
// tenha sido declarada com a keyword 'async';

async function display() {
    let result = await sayHi();
    console.log(result);
}

// neste exemplo, a keyword 'await' instrui o interpretador do JavaScript a 
// esperar pela função sayHi() completar, para que seja possível mostrar a 
// mensagem no console;

// nota-se que caso seja utilizado a palavra-chave 'await' fora de uma função
// que tenha sido declarada com 'async', ocorrerá um erro na interpretação 
// do código;

// ------------------- tratamento de erro ------------------- //
// se a promise é resolvida, ela retorna o resultado; no entanto, quando uma
// promise é rejeitada, a cláusula 'await promise' irá lançar um erro como se 
// houvesse uma cláusula 'throw';

// os dois trechos de código seguintes são literalmente o mesmo;
(function () {
    async function getUserA(userId) {
        await Promise.reject(new Error('Invalid User Id'));
    }

    async function getUserB(userId) {
        throw new Error('Invalid User Id');
    }
}());

// para capturar o erro, é preciso usar o bloco de código try/catch;
(function () {
    async function getUser(userId) {
        try {
           const user = await Promise.reject(new Error('Invalid User Id'));
        } catch(error) {
           console.log(error);
        }
    }
}());

// é possível capturar erros produzidos por qualquer números de promises;
(function () {
    async function showServiceCost() {
        try {
           let user = await getUser(100);
           let services = await getServices(user);
           let cost = await getServiceCost(services);
           console.log(`The service cost is ${cost}`);
        } catch(error) {
           console.log(error);
        }
    }
}());


