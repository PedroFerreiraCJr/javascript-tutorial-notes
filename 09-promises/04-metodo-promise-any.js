/**
 * o método Promise.any(), declara como parâmetro um objeto
 * do tipo iterable, como por exemplo, um array, ou um objeto que 
 * implemente o protocolo iterable, em JavaScript;
 * */

// se uma das promises do objeto iterable for concluída com sucesso,
// então, este método retorna uma promise que possui como resultado
// o valor da promise que foi resolvida com sucesso;

// o método Promise.any(), retorna a primeira promise que for concluída com 
// sucesso, mesmo que antes disto, haja alguma outra promise que seja rejeitada;
// ou seja, este método ignora a rejeição de promise, obtendo desta forma, a primeira
// promise que resultar em sucesso, ou seja, for concluída com sucesso;

// se todas as promises no objeto iterable forem rejeitadas, ou se, o objeto iterable 
// for um objeto vazio, o método Promise.any() retorna uma promise que tem como resultado
// uma instância de AggregateError, contendo todas as causas de rejeição;

// ------------------- exemplo de uso do método Promise.any ------------------- //
(function () {
    const p1 = new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log('Promise 1 fulfilled');
          resolve(1);
        }, 1000);
    });
    
    const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Promise 2 fulfilled');
        resolve(2);
    }, 2000);
    });
    
    const p = Promise.any([p1, p2]);
    p.then((value) => {
        console.log('Returned Promise');
        console.log(value);
    });
}());
// o exemplo anterior é um cenário onde todas as promises do objeto iterable são
// concluídas com sucesso; mas somente o valor da primeira promise é o resultado
// conhecido, porque foi a primeira promise a concluír com êxito; a segunda também
// é concluída com sucesso, mas mas o valor já tinha sido retornado na promise resultante;

// ------------------- exemplo de uma promise rejeitada ------------------- //
(function () {
    const p1 = new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log('Promise 1 rejected');
          reject('error');
        }, 1000);
    });
    
    const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Promise 2 fulfilled');
        resolve(2);
    }, 2000);
    });
    
    const p = Promise.any([p1, p2]);
    p.then((value) => {
    console.log('Returned Promise');
    console.log(value);
    });
}());
// o exemplo anterior, retorna uma promise que é concluída com sucesso, mas antes disto,
// uma das promises do objeto iterable foi rejeitada; mas mesmo assim, a execução continua
// até que todas as promises tem sido rejeitadas, ou até que se conheça uma promise resolvida
// com sucesso;

// ------------------- exemplo todas as promises rejeitadas ------------------- //
(function () {
    const p1 = new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log('Promise 1 rejected');
          reject('error1');
        }, 1000);
    });
    
    const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Promise 2 rejected');
        reject('error2');
    }, 2000);
    });
    
    const p = Promise.any([p1, p2]);
    p.catch((e) => {
        console.log('Returned Promise');
        console.log(e, e.errors);
    });
}());
// o exemplo anterior, aborda a cenário onde todas as promises do objeto informado são
// rejeitadas; este exemplo mostra o valor resultante que é fornecido a partir 
// do cneário onde todas as promises são rejeitadas; retorna o objeto AggregateError, 
// com todos os error das promises rejeitadas;
