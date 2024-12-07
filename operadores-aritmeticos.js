console.log(Infinity + Infinity);       // Infinity
console.log(-Infinity + Infinity);      // NaN
console.log(-Infinity + -Infinity);     // -Infinity
console.log(NaN + Infinity);            // NaN
console.log(+0 + +0);                   // 0
console.log(-0 + +0);                   // 0
console.log(-0 + -0);                   // -0

console.log(NaN * 1);                   // NaN
console.log(Infinity * 100);            // Infinity
console.log(-Infinity * 100);           // -Infinity
console.log(-Infinity * (-100));        // Infinity
console.log(Infinity * (-100));         // -Infinity

/**
 *  1. o engine do JavaScript invocará o método valueOf()
 * ao encontrar um objeto sendo usado como operando em 
 * uma operação aritmética;
 * 
 *  2. se o objeto não tiver o método valueOf(), mas tiver
 * o método toString(), o JavaScript invocará este método;
*/
let energy = {
    valueOf() {
        return 100;
    }
};
console.log(energy + 100);

let power = {
    toString() {
        return 100;
    }
};
console.log(power + 100);
console.log(typeof +'10');      // converte string para number
console.log(typeof +true);      // converte boolean para number
console.log(typeof +false);     // converte boolean para number

let product = {
    toString() {
        return '25';
    },
    // dá prioridade ao método valueOf()
    valueOf() {
        return '30';
    }
};
// caso não exista método valueOf(), será invocado o método toString()
console.log(+product);
