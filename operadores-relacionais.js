/**
 * Geralmente os operadores de comparação que envolvem 
 * valores numéricos e valores de outros tipos, fazem uma 
 * conversão dos operandos para um tipo equivalente;
 * 
 * Por exemplo, na comparação entre um valor numérico e 
 * uma string, o JavaScript tenta converter o valor string
 * para valor numérico;
 * 
 * Na comparação entre um valor string, ou número e um objeto 
 * o JavaScript tenta converter o valor objeto para um primitivo
 * usando as funções 'valueOf' e 'toString';
*/
let apple = {
    valueOf: function () {
        console.log('invocando valueOf...');
        return 10;
    }
};

// o JavaScript invoca a função 'valueOf' no objeto para converter ele
// para um valor que possa ser comparado com o segundo operando;
// caso o objeto não possua o método 'valueOf', o JavaScript tenta
// invocar o método 'toString';
// o resultado é true, uma vez que o valor retornado por valueOf é 10;
console.log(apple <= 10);

let orange = {
    toString: function () {
        console.log('invocando toString...');
        return '20';
    }
};

// o operador de igualdade, tenta invocar o método 'valueOf', não
// encontrando o método 'valueOf', tenta invocar o método 'toString';
// note que, quando o operador estritamente igual é usado, ele não
// invoca o método 'valueOf', ou 'toString';
console.log(orange == 20);

// o valor boolean é convertido para number, 'true' é equivalente a '1';
console.log(true > 0);

// o valor boolean é convertido para number, 'false' é equivalente a '0';
console.log(false == 0);

// os tipos 'null' e 'undefined' são considerados iguais pelo
// operador de igualdade simples;
console.log(null == undefined);

// mas o operador de igualdade estrita não considera os valores 
// 'null' e 'undefined' como sendo equivalentes;
console.log(null === undefined);

// não se deve comparar o valor 'NaN' utilizando os operadores convencionais;
// essa igualdade dá 'false', nem mesmo 'NaN' é igual a 'NaN';
console.log(NaN == NaN);

// para saber se um valor é 'NaN' é preciso usar a função 'isNaN';
console.log(isNaN(NaN));
