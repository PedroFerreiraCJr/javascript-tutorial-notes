/**
 * O método finally de uma instância de promise permite a você agendar
 * uma função para ser executada quando a promise for concluída, seja 
 * uma conclusão de sucesso ou em uma falha (rejeição da promise);
 * */

// sintaxe:
// promise.finally(onFinally)
// onde onFinally é uma função que será executada assincronamente, assim
// que a instancia da promise em questão for concluída;

// o método finally retorna um objeto promise que permite a você invocar
// encadeadamento outros método da instância de promise;

// o método finally foi introduzido na versão ES2018;
// com este método é possível executar um procedimento de limpeza de 
// recursos quando a promise terminar sua execução, independente do resultado
// final da instância de promise;

// ------------------- sintaxe de uso do método finally ------------------- //
/*
promise
    .then(result => {
        // process the result
    })
    .catch(error => {
        // handle the error
    })
    .finally(() => {
        // clean up the resources
    });
*/
// acima um exemplo de uso do método finally para executar um procedimento
// limpeza de recursos ou uma ação final, quando a promise é resolvida;

// em métodos sincronos, é recomentado o uso do bloco finally para limpeza
// de recursos; já no uso de programação assíncrona, é recomendado o uso
// do método finally da promise, para limpeza de recursos;

// ------------------- exemplo de uso do método finally ------------------- //
(function () {
    class Connection {
        execute(query) {
            if (query != 'Insert' && query != 'Update' && query != 'Delete') {
                throw new Error(`The ${query} is not supported`);
            }
            console.log(`Execute the ${query}`);
            return this;
        }
        close() {
            console.log('Close the connection')
        }
    }

    const success = true;

    function connect() {
        return new Promise((resolve, reject) => {
            if (success)
                resolve(new Connection());
            else
                reject('Could not open the database connection');
        });
    }

    let globalConnection;

    connect()
        .then((connection) => {
            globalConnection = connection;
            return globalConnection.execute('Insert');
        })
        .then((connection) => {
            globalConnection = connection;
            return connection.execute('Select');
        })
        .catch(console.log)
        .finally(() => {
            if (globalConnection) {
                globalConnection.close();
            }
        });
}());
// no exemplo acima, é possível notar que a função finally foi usada para
// fechar a conexão do objeto connection, portanto, usado para limpeza de recursos;

// no exemplo, a função connect, retorna uma promise que é resolvida para um objeto
// Connection, porque a flag está true;

// o primeiro .then() executa uma operação de insert, retornando o objeto connection;
// o objeto globalConnection é usado para salvar a connection atual;

// o segundo .then(), executa uma operação de select, o que gera uma exceção, que por 
// sua vez, é capturada no método .catch(), que por sua vez; imprime o erro no console;
