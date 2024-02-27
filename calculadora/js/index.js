document.querySelector('#calcular').addEventListener('click',e => {
    let numero1 = document.querySelector('#valor1').value;
    let numero2 = document.querySelector('#valor2').value;
    let operador = document.querySelector('#operador').value;

    /*template string é entre crase ``
    e o eval pega um texto e o transforma para fazer o cálculo
    let total = eval(`${numero1} ${operador} ${numero2}`);*/

    let total = calcular(numero1, numero2, operador);

    document.querySelector('#resultado').innerHTML = `Resultado: ${total}`;

})
/* os parâmetros que eu criar numa função devem ser os mesmos na execução dela.
este é um exemplo de função
function calcular(num1, num2, op) {
    return eval(`${num1} ${op} ${num2}`);
}*/

/*para criar uma arrow function, preciso criar uma variável, no caso a 'calcular' */

let calcular = (numero1, numero2, operador) => {
    return eval(`${numero1} ${operador} ${numero2}`);
}