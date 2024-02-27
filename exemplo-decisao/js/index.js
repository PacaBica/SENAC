document.querySelector('#calcular').addEventListener('click', e => {
    let salario = document.querySelector('#salario').value;

    let salarioReajustado = 0;
    if (salario < 500) {
        salarioReajustado = salario * 1.15;
    }
    else if (salario <= 1000) {
        salarioReajustado = salario * 1.10;
    }
    else {
        salarioReajustado = salario * 1.05;
    }

    document.querySelector('#salario-reajustado').innerHTML = `Salário Reajustado: R$ ${salarioReajustado.toFixed(2)}`;
});

document.addEventListener('keypress', e => {
    if (e.key == 'Enter') {
        e.preventDefault();
        document.querySelector('#calcular').click();
    }
});

/* FOR : INICIALIZAÇÃO - CONDIÇÃO DE PARADA - INCREMENTO
    i++ - 1 = i + 1*/

for (i = 1; i <= 10; i = i++) {
    console.log(1);
}
    
