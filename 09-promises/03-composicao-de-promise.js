/**
 * Este tutorial mostra como usar o método estático Promise.all
 * para agregar resultados de multiplas promises;
 * */

// método estático Promise.all;
// o método estático Promise.all recebe um iterable de promises;
// e retorna um promise que resolve quando todas as promises de input
// forem resolvidas, retornando um array de resultados;

// en=m outras palavras, o método Promise.all aguarda por todas as promises
// input resolverem e retorna um nova promise, que resolve para um array de 
// resultados das promises de input;

// se uma das promises de input for rejeitada, o método Promise.all retorna 
// imediatamente uma promise que é rejeitada com o erro da primeira promise
// rejeitada; também o método Promise.all não se preocupa com o resultado
// de outras promises de input; ou seja, se outra promise de input será 
// resolvida com sucesso ou rejeitada;

// na prática, o método Promise.all é útil para agregar o resultado de 
// múltiplas operaçõea assíncronas;

// ------------------- exemplo de uso do método Promise.all ------------------- //
// exemplo de promise resolvida:
(function() {
    const p1 = new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log('The first promise has resolved');
          resolve(10);
        }, 1 * 1000);
      });

    const p2 = new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log('The second promise has resolved');
          resolve(20);
        }, 2 * 1000);
      });
    
    const p3 = new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log('The third promise has resolved');
          resolve(30);
        }, 3 * 1000);
      });
      
    Promise.all([p1, p2, p3]).then((results) => {
        const total = results.reduce((p, c) => p + c);
      
        console.log(`Results: ${results}`);
        console.log(`Total: ${total}`);
      });
})();

// quando todas as promises tiverem sido resolvidas, o valor destas promises
// é passado para o callback do método then, como um array de resultados;

// ------------------- exemplo de uso do método Promise.all ------------------- //
// exemplo de promise rejeitada:
// o método Promise.all, retorna um promise que é rejeitada se qualquer uma das 
// promises de input for rejeitada;
(function() {
  const p1 = new Promise((resolve, reject) => {
      setTimeout(() => {
          console.log('The first promise has resolved');
          resolve(10);
      }, 1 * 1000);
  });

  const p2 = new Promise((resolve, reject) => {
      setTimeout(() => {
          console.log('The second promise has rejected');
          reject('Failed');
      }, 2 * 1000);
  });

  const p3 = new Promise((resolve, reject) => {
      setTimeout(() => {
          console.log('The third promise has resolved');
          resolve(30);
      }, 3 * 1000);
  });

  // nesta caso, como uma das promises de input foi rejeitada, a promise
  // resultante é uma promise que irá executar o método catch, da promise
  // resultante, com a mensgem de erro;
  Promise.all([p1, p2, p3])
      .then(console.log) // never execute
      .catch(console.log);
})();

// neste exemplo, nós temos três promises: a primeira é resolvida 
// após 1 segundo, a segunda é rejeitada após 2 segundos, a terceira é
// resolvida após 3 segundos;
// como resultado, a promise retornada é rejeitada porque a segunda promise
// foi rejeitada. o método .catch() é executado para mostrar o motivo da
// rejeição da promise;

// ------------------- exemplo de uso do método Promise.race ------------------- //
// este método estático serve para criar concorrência entre as promises informadas
// a este método quando invocado; este método recebe um objeto iterable;

// o funcionamento deste método é o seguinte: dado uma objeto iterable de promises,
// que é o argumento deste método, elas estarão concorrendo para ver quem termina
// primeiro a "corrida", por isso o método se chama race; race de concorrência entre 
// as promises informadas;

// este método retorna uma nova promise que é resolvida com sucesso, caso alguma
// promise informada seja concluída com sucesso; ou retorna uma promise rejeitada
// caso alguma das promises termine com um erro;

(function () {
  console.log('método estático Promise.race() ->');
  const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('The first promise has resolved');
        resolve(10);
    }, 1 * 1000);
  });

  const p2 = new Promise((resolve, reject) => {
      setTimeout(() => {
          console.log('The second promise has resolved');
          resolve(20);
      }, 2 * 1000);
  });


  Promise.race([p1, p2])
    .then(value => console.log(`Resolved: ${value}`))
    .catch(reason => console.log(`Rejected: ${reason}`));
}());
// o exemplo anterior cria duas promises: uma resolve em 1 segundo, a outra 
// resolve em 2 segundos; como a primeira promise é resolvida antes da segunda
// promise, o método Promise.race(), retorna uma promise cujo resultado é dado
// pelo resultado retornado pela primeira promise;

// ------------------- outro exemplo de Promise.race ------------------- //
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


  Promise.race([p1, p2])
      .then(value => console.log(`Resolved: ${value}`))
      .catch(reason => console.log(`Rejected: ${reason}`));
}());
// o exemplo anterior cria duas promises: a primeira promise resolve em 
// 1 segundo; enquanto que a segunda promise é rejeitada em 2 segundos;
// como a primeira promise é mais rápida que a segunda promise, a promise
// resultante do método Promise.race(), possui o valor resultante, igual
// ao valor retornado pela primeira promise;

// note que, caso a segunda promise fosse mais rápida que a primeira, o valor
// ou resultado da promise resultante do método Promise.race(), seria o valor
// retornado pela promise rejeitada, com a causa da rejeição;
