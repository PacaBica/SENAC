document.querySelector('#calcular').addEventListener('click', () => {
  let notas = [];
  //recupera a nora 1 do form HTML e armazena na variável notas0... o parseInt transforma 
  //conteúdo que é string em número
  notas [0] = parseInt(document.querySelector('#nota1').value); 
  notas [1] = parseInt(document.querySelector('#nota2').value);
  notas [2] = parseInt(document.querySelector('#nota3').value);
  notas [3] = parseInt(document.querySelector('#nota4').value); 

  let media = (notas[0] + notas[1] + notas[2] + notas[3]) / 4;

  document.querySelector('#media').innerHTML = `Média anual: ${media.toFixed(1)}`;
})