/**
 * O ES2020 adicionou o método Promise.allSettled a API Promise;
 * Este método recebe como argumento um iterable de Promises como input
 * e retorna uma promise que tem como resultado o valor de todas as
 * promises de input informadas no argumento para este método;
 * */

// o método retorna um array de objetos contendo informações sobre o 
// resultado das promises de input;
// cada objeto resultante tem duas propriedades: status, value, ou reason;
// status pode ser concluído ou rejeitado;
// e value, caso a promise tenha sido resolvida com sucesso, ou reason,
// se a promise for rejeitada;

// primeiro exemplo de uso do método Promise.allSettled
(function () {
    const p1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('The first promise has resolved');
            resolve(10);
        }, 1 * 1000);
    
    });
    
    const p2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('The second promise has rejected');
            reject(20);
        }, 2 * 1000);
    });
    
    Promise.allSettled([p1, p2])
        .then((result) => {
            console.log(result);
    });
}());
// como é possível notar a partir do exemplo acima, o resultado é 
// uma array de objetos com a propriedade status, e value ou reason;
// value em caso de sucesso, e reason em caso de falha na resolução da promise;





