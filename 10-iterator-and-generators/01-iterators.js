/**
 * existem dois tipos de protocolo de iteração: iterble e iterator;
 * */

// ------------------- o protocolo iterator ------------------- //
// um objeto é um iterador quando ele implementa uma interface (ou API), que
// responde duas questões;
// 1º - ainda falta algum elemento?
// 2º - se ainda falta algum elemento, qual é este elemento?

// tecnicamente falando, um objeto é qualificado como um iterador quando
// ele tem um método chamado 'next()', que retorna um objeto com duas propriedades;
// 1º - done: umm valor booleano que informa se existe ou não algum elemento que
// ainda possa ser iterado;
// 2º - value: o valor atual;

// toda vez que é invocado o método 'next()', é retornado o elemento 
// seguinte da coleção;
// exemplo de resultado retornado por 'next()';
// ex: { value: 'next value', done: false }

// se você chamar o método 'next()' após o último valor ter sido retornado, o 
// método 'next()' retorna um objeto como no seguinte exemplo:
// { done: true: value: undefined }

// o valor da propriedade 'done', indica que não existe mais nenhum valor para ser
// retornado, e o valor da propriedade 'value' é definido para 'undefined';
// 

// ------------------- o protocolo iterable ------------------- //
// um objeto é iterable quando ele contém um método chamado '[Symbol.iterator]',
// que não recebe nenhum argumento, e retorna um objeto que se corresponde ao 
// protocolo iterator;
// o método '[Symbol.iterator]' é um dos símbolos embutidos bem conhecidos 
// na ES6;

// ------------------- iteradores ------------------- //
// a partir do ES6, é fornecido nativamente iteradores para os tipos de coleções:
// Array, Set, Map;

// se você tem um tipo customizado, e quer torná-lo compatível com o protocolo 
// iterable, então você tem que usar a construção de loop for...of, é preciso
// implementar o protocolo de iteração;

// o seguinte código cria um tipo customizado para representar um sequencia de 
// números, com um intervalor de valores definidos por start e end, que são emitidos
// de acordo com um intervalo;

(function () {
    class Sequence {
        constructor(start = 0, end = Infinity, interval = 1) {
            this.start = start;
            this.end = end;
            this.interval = interval;
        }

        [Symbol.iterator]() {
            let counter = 0;
            let nextIndex = this.start;
            return  {
                next: () => {
                    if (nextIndex <= this.end) {
                        let result = { value: nextIndex,  done: false };
                        nextIndex += this.interval;
                        counter++;
                        return result;
                    }
                    return { value: counter, done: true };
                }
            }
        }
    }

    let evenNumbers = new Sequence(2, 10, 2);

    for (const num of evenNumbers) {
        console.log(num);
    }
}());

// ------------------- método de limpeza ------------------- //
// adicionalmente ao método 'next()', o método '[Symbol.iterator]' pode opcionalmente
// retornar um método chamado 'return()';

// o método 'return()' é invocado, automaticamente, quando a iteração é 
// parada prematuramente; é neste método que é possível colocar código de
// liberação de recursos;

// o seguinte exemplo implementa o método 'return()' na classe Sequence:
(function () {
    class Sequence {
        constructor(start = 0, end = Infinity, interval = 1) {
            this.start = start;
            this.end = end;
            this.interval = interval;
        }

        [Symbol.iterator]() {
            let counter = 0;
            let nextIndex = this.start;
            return  {
                next: () => {
                    if (nextIndex <= this.end) {
                        let result = { value: nextIndex,  done: false };
                        nextIndex += this.interval;
                        counter++;
                        return result;
                    }
                    return { value: counter, done: true };
                },
                return: () => {
                    console.log('cleaning up...');
                    return { value: undefined, done: true };
                }
            }
        }
    }

    // o seguinte trecho de código faz uso da classe Sequence, para gerar 
    // uma sequência de números ímpares de 1 a 10; no entanto, a iteração é
    // parada prematuramente; como resultado disto, o método 'return()', será
    // invocado automaticamente;

    let oddNumbers = new Sequence(1, 10, 2);

    for (const num of oddNumbers) {
        if( num > 7 ) {
            break;
        }
        console.log(num);
    }
}());
