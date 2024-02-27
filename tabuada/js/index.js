document.querySelector('#calcular').addEventListener('click', () => {
    document.querySelector('#tabuada').innerHTML = '';
    let numero = document.querySelector('#numero').value;
    for (let i = 0; i <= 10; i++) {
        let tabuada = numero * i;
        document.querySelector('#tabuada').innerHTML += `${i} x ${numero} = ${tabuada}<br>`;
    }
    document.querySelector('#numero').value = '';
    
})
/*
for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0){
    console.log(i);
    }
}

for (let i = 0; i <= 100; i++) {
    if (i % 2 != 0){     OU i% == 1 
    console.log(i);
    }
}*/
/*
for (let i = 0; i <= 100; i = i + 2){
    console.log(i)
}
for (let i = 1; i <= 100; i = i + 2){
    console.log(i)
} */

let i = 1;
while (i <= 100){
    console.log(i);
    i = i + 2;
}