/**
 * um objeto é uma coleção de propriedades, onde cada propriedade
 * é um par chave-valor; uma propriedade pode ser 'própria' ou 'herdade';
*/
// cria um objeto com duas propriedade próprias dele;
const person = {
    firstName: 'Pedro',
    lastName: 'Junior'
};

// cria um objeto empregado, onde o protótipo é baseado no primeiro
// argumento do método 'create'; o objeto criado tem a propriedade
// job que é própria dele;
const employee = Object.create(person, {
    job: {
        enumerable: true,
        value: 'JavaScript Developer'
    }
});
console.log(employee);
console.log(employee.hasOwnProperty('job'));
console.log(employee.hasOwnProperty('firstName'));