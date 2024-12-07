let expression = 1;
/**
 * a declaração 'switch' usa a comparação estrita, ou seja
 * usa o operador '===' para comparar os valores de cada case
 * na busca por uma correspondência;
*/
switch (expression) {
    case '1':
        console.log('string one');
        break;
    case 1:
        console.log('number one');
        break;
    default:
        console.log('default clause executed');
}
