/**
 * O encadeamento de promise é um padrão para execução de operações
 * assíncronas em sequencia;
 * */

// as vezes, você deseja invocar uma operação logo em seguida a uma outra 
// operação assíncrona; onde, a próxima operação começa com o resultado da
// operação assíncrona anterior;

// por exemplo, crie uma promise que seja resolvida para o valor 10
// após 3 segundos;
(function() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(10);
        }, 3 * 1_000);
    });
    
    promise.then((resultado) => {
        console.log(resultado);
        return resultado * 2;
    });
})();

// o callback passado para o método then da promise é executado uma única vez
// quando a promise é resolvida; no callback nós mostramos o resultado no 
// console, e retornamos o valor recebido multiplicado por 2;

// como o método then retorna uma nova promise, com o valor resolvido,
// é possível invocar o método then novamente na promise retornada;
// segue o exemplo:
(function() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(10);
        }, 3 * 1_000);
    });
    
    promise.then((resultado) => {
        console.log(resultado);
        return resultado * 2;
    // nova invocação do método then, na promise resultante;
    }).then((resultado) => {
        console.log(resultado);
        return resultado * 3;
    });
})();

// neste exemplo, o valor retornado pelo primeiro método then é passado para
// o segundo método then; também é possível continuar invocando o método then
//  conforme o seguinte exemplo:
(function() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(10);
        }, 3 * 100);
    });
    
    promise.then((resultado) => {
        console.log(resultado); // 10
        return resultado * 2;
    }).then((resultado) => {
        console.log(resultado); // 20
        return resultado * 3;
    }).then((resultado) => {
        console.log(resultado); // 60
        return resultado * 4;
    });
})();

// a forma como é invocado o método then da promise é conhecido por 
// encadeamento de promise, por conta das sucessivas invocações do
// método then;

// ------------------- multiplos handlers para uma promise ------------------- //
// quando é invocado o método then multiplas vezes em uma promise, isto não 
// é encadeamento de promise, ou promise chain; conforme o seguinte exemplo:
(function() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(10);
        }, 3 * 100);
    });
    
    promise.then((resultado) => {
        console.log(resultado); // 10
        return resultado * 2;
    })
    
    promise.then((resultado) => {
        console.log(resultado); // 10
        return resultado * 3;
    })
    
    promise.then((resultado) => {
        console.log(resultado); // 10
        return resultado * 4;
    });
})();

// neste exemplo, nós temos multiplos handlers para uma promise;
// estes handlers não tem nenhum relacionamento;
// eles também, executam independentemente, e não passam valores para 
// outros handlers, como no caso no exemplo anterior;

// ------------------- retornando uma promise ------------------- //
// quando é retornado um valor no método then, o método then retorna 
// uma nova promise, que imediatamente resolve para o valor retornado;

// também é possível retornar uma nova promise no método then;
(function() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(10);
        }, 3 * 1_000);
    });
    
    promise.then((resultado) => {
        console.log(resultado);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(resultado * 2);
            }, 3 * 1_000);
        });
    }).then((resultado) => {
        console.log(resultado);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(resultado * 3);
            }, 3 * 1_000);
        });
    }).then(resultado => console.log(resultado));
})();

// este padrão de código permite a você executar múltiplas tarefas
//  em sequencia;

// ------------------- sintaxe de encadeamento de promise ------------------- //
// muitas vezes, você tem tarefas assíncronas que deseja executar em sequencia;
// em adição, você precisa passar o resultado da operação assíncrona anterior,
// para a seguinte operação assíncrona; neste caso, você pode seguir a 
// seguinte sintaxe;
/*

step1()
    .then(result => step2(result))
    .then(result => step3(result));

*/

// suponda que seja necessário seguir o seguinte racioncínio e passado na 
// execução do código;
/*
    - primeiro, obter o usuário do banco de dados;
    - segundo, obter os serviços do usuário selecionado;
    - terceiro, calcular o custo dos serviços do usuário;

*/
// as seguintes funções ilustram as operações assíncronas;
(function() {
    function getUser(userId) {
        return new Promise((resolve, reject) => {
            console.log('Get the user from the database.');
            setTimeout(() => {
                resolve({
                    userId: userId,
                    username: 'admin'
                });
            }, 1000);
        })
    };
    
    function getServices(user) {
        return new Promise((resolve, reject) => {
            console.log(`Get the services of ${user.username} from the API.`);
            setTimeout(() => {
                resolve(['Email', 'VPN', 'CDN']);
            }, 3 * 1000);
        });
    };
    
    function getServiceCost(services) {
        return new Promise((resolve, reject) => {
            console.log(`Calculate the service cost of ${services}.`);
            setTimeout(() => {
                resolve(services.length * 100);
            }, 2 * 1000);
        });
    };

    // a seguir ilustra como executar essas operações em sequencia;
    getUser(100)
        .then(getServices)
        .then(getServiceCost)
        .then(console.log);
})();
