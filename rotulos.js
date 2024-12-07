/**
 * JavaScript, TypeScript, Java, e Kotlin possuem um conceito conhecido 
 * por 'rótulo', que permite ser usado o identificador do rótulo
 * em uma instrução break ou continue; no caso do break, transfere
 * a execução do código para a próxima instrução após o rótulo; enquanto
 * na instrução continue, permite que seja transferido o fluxo de execução
 * para a próxima iteração de um loop qualquer, seja 'for', 'while', ou 
 * 'do..while';
*/
// exemplo de instrução rótulo; neste caso o rótulo 'extern';
extern:
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        if (i + j == 4) {
            // instrução break rotulada;
            break extern;
        }
    }
}
