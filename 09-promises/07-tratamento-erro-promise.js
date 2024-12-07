/**
 * tratamento de erros em promises;
 * */

// suponha que a existencia da seguinte função;
// a seguinte função retorna um promise;
(function () {
    console.log('função imediata 1');
    function getUserById(id) {
        return new Promise((resolve, reject) => {
            resolve({
                id: id,
                username: 'admin'
            });
        });
    }

    getUserById('a')
        .then(user => console.log(user.username))
        .catch(err => console.log(err));
}());

// ------------------- erro normal ------------------- //
// primeiro vamos alterar a função anterior para lançar uma exceção
// fora do bloco de execução da promise, conforme a seguir;
(function () {
    console.log('função imediata 2');
    function getUserById(id) {
        // eventualmente, lança uma exceção fora do bloco executor da promise;
        // para tratar uma exceção lançada de fora do bloco de execução de uma 
        // promise, é preciso usar o bloco try/catch, conforme neste exemplo;
        if (typeof id !== 'number' || id <= 0) {
            throw new Error('Invalid id argument');
        }
    
        return new Promise((resolve, reject) => {
            resolve({
                id: id,
                username: 'admin'
            });
        });
    }

    // posteriormente, invoque a promise da seguinte forma;
    // quando é levantada uma exceção fora do bloco de execução da 
    // promise, é preciso lidar com a exceção em um bloco try/catch,
    // conforme o seguinte código;
    try {
        getUserById('a')
            .then(user => console.log(user.username))
            .catch(err => console.log(`Catch Promise, função imediata 2; Caught by .catch ${err}`));
    } catch (error) {
        console.log(`Bloco Catch, função imediata 2; Caught by try/catch ${error}`);
    }
}());

// ------------------- erros dentro de promises ------------------- //
// a função getUserById, foi alterada para lançar uma exceção de dentro 
// do bloco executor da promise, conforme a seguir;
(function () {
    console.log('função imediata 3');
    let authorized = false;

    function getUserById(id) {
        return new Promise((resolve, reject) => {
            // eventualmente, lança uma exceção de dentro do bloco de execução
            // desta promise; para capturar este erro, é preciso fornecer uma 
            // invocação do método .catch da promise;
            if (!authorized) {
                throw new Error('Unauthorized access to the user data');
            }
    
            resolve({
                id: id,
                username: 'admin'
            });
        });
    }
    
    // o seguinte código serve para consumir a promise;
    try {
        getUserById(10)
            .then(user => console.log(user.username))
            // neste exemplo, como a promise lançou uma exceção de dentro do bloco
            // de execução da promise, o erro será capturado neste bloco .catch;
            .catch(err => console.log(`Catch Promise, função imediata 3; Caught by .catch ${err}`));
    } catch (error) {
        console.log(`Bloco Catch, função imediata 3; Caught by try/catch ${error}`);
    }    
}());

// importante:
// se você lançar um erro de dentro do bloco executor da promise, o
// método .catch() irá capturá-la, e não o bloco de tratamento de 
// erro try/catch;

// se você encadeia promises, o método .catch() irá capturar erros
// que possam ocorrer em qualquer promise da chain;

// ------------------- chamando a função reject ------------------- //
// lançar uma exceção de dentro do bloco de execução da promise, tem
// o mesmo efeito de invocar a função reject, de dentro do bloco
// da promise;
(function () {
    console.log('função imediata 4');
    let authorized = false;

    function getUserById(id) {
        return new Promise((resolve, reject) => {
            if (!authorized) {
                // lançar uma exceção, assim como, invocar a função reject,
                // conforme este exemplo; tem o mesmo efeito;
                // e desta forma, o lançamento de exceção ou a invocação da função
                // reject, deverá ser capturáda pelo método .catch da promise;
                reject('Unauthorized access to the user data');
            }

            resolve({
                id: id,
                username: 'admin'
            });
        });
    }

    try {
        getUserById(10)
            .then(user => console.log(user.username))
            .catch(err => console.log(`Catch Promise, função imediata 4; Caught by .catch ${err}`));
    } catch (error) {
        console.log(`Bloco Catch, função imediata 4; Caught by try/catch ${error}`);
    }
}());

// neste exemplo, ao invés de lançar um erro dentro do bloco de execução
// da promise, foi invocada a função reject(), explicitamente; o método 
// .catch também lida com o erro neste caso;

// ------------------- método .catch() ausente ------------------- //
(function () {
    console.log('função imediata 5');
    let authorized = false;

    function getUserById(id) {
        return new Promise((resolve, reject) => {
            if (!authorized) {
                // o lançamento de uma exceção de dentro deste bloco, ou seja, de
                // dentro do bloco de execução da promise, tem o mesmo efeito de 
                // invocar a função reject(); e qualquer destar formas de rejeição de 
                // uma promise, é capturado pelo método .catch() da promise;
                reject('Unauthorized access to the user data');
            }
            resolve({
                id: id,
                username: 'admin'
            });
        });
    }
    
    try {
        getUserById(10)
            .then(user => console.log(user.username));
            // neste exemplo, não foi fornecido a invocação do método .catch()
            // da promise para exemplificar que, neste caso, o bloco try/catch não 
            // será invocado; e o program terminará com um erro;
        // o seguinte código não irá ser executado;
        console.log('next');
    } catch (error) {
        console.log(`Bloco Catch, função imediata 5; Caught by try/catch ${error}`);
    }
}());

// se a promise for concluída com êxito, é possível suprimir o método 
// .catch(); mas no futuro, um erro em potencial pode fazer com que o 
// programa pare de funcionar, confome o exemplo acima;
