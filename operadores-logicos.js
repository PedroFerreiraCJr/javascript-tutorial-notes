// o operador AND lógico avalia os operandos e percebe que
// o primeiro operando é um valor booleano falso, portanto,
// não precisa avaliar o restante da expressão para saber o resultado;
// e desta forma, ele retorna o valor 'false', que é valor 
// da variável 'b';
let b = false;
let result = b && (1 / 0);
console.log(result);

console.log(null ?? 'operador de coalencência nula');
console.log(undefined ?? 'operador de coalencência nula');

// caso os parênteses ao redor do primeiro operando for removido
// caso um SyntaxError, e o código não executa;
const resultado = (null || undefined) ?? 'OK';
