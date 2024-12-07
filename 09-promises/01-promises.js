/**
 * Promises são objetos que podem ser usados ao invés de callbacks;
 * uma Promise tem um estado, que pode ser um destes: pending, fulfilled, rejected;
 * quando uma Promise está em execução o estado dela é Pending;
 * quando uma Promise é concluída com sucesso, ela passa para o estado Fulfilled;
 * caso a Promise seja rejeitada por alguma razão, ela passa para o estado Rejected;
 * */

// para criar um promise é preciso usar o construtor Promise;
// o construtor da Promise recebe uma função de callback que é chamada de executor;
// por sua vez, a função executor que é quem desempenha o papel de execução da
// operação assíncrona, recebe duas outras funções, que são as funções: resolve e reject;
// resolve e reject são uma convenção de nomenclatura aplicada as funções de callback;

// se a operação assíncrona é concluída com sucesso, a função executor deve invocar a
// função a resolve para concluir a promise;

// em caso de erro, o executor deve invocar a função reject para concluir a promise com erro
// juntamente com a causa do erro, ou razão do erro;

// uma vez que a promise alcança um estado concluída ou rejeitada, ela não
// irá mais passar para outro estado qualquer;
// uma vez que a promise alcança o estado concluído com sucesso ou rejeitada com erro,
// ela é definida como resolvida;

// ------------------- consumindo uma promise ------------------- //
// then, catch, finally;
// para obter o valor do resultado de uma promise em caso de sucesso, basta
// invocar o método then, na promise;
// promise.then(function(value) {
//  console.log('resultado da promise; ', value);
// });

(function () {
    // função que retorna um promise;
    // o executor desempenha o trabalho da promise;
    function getUsers() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve([
                    { username: 'Pedro Junior', email: 'pedro.junior@gmail.com' },
                    { username: 'Maria Eduarda', email: 'maria.eduarda@gmail.com' },
                ]);
            }, 1000);
        });
    };

    getUsers().then((users) => console.log('usuários: ', users));
})();

(function () {
    let success = true;
    function getUsers() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (!success) {
                    reject(new Error('Falha na busca ao banco de dados.'));
                    return;
                }

                resolve([
                    { username: 'Pedro Junior', email: 'pedro.junior@gmail.com' },
                    { username: 'Maria Eduarda', email: 'maria.eduarda@gmail.com' },
                ]);
            }, 1000);
        });
    };

    getUsers().then((users) => console.log('usuários: ', users));
})();


(function () {
    let success = true;
    function getUsers() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (!success) {
                    reject(new Error('Falha na busca ao banco de dados.'));
                    return;
                }

                resolve([
                    { username: 'Pedro Junior', email: 'pedro.junior@gmail.com' },
                    { username: 'Maria Eduarda', email: 'maria.eduarda@gmail.com' },
                ]);
            }, 1000);
        });
    };

    getUsers()
        .then((users) =>
            console.log('usuários: ', users)
        )
        .catch(e => console.log(e))
        .finally(() => console.log('finalizando...'));
})();
