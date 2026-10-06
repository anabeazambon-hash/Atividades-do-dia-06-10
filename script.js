
// explicação e rascunhos dos códigos abaixo:


//for --> para

for (let contador = 0; contador < 1000; contador = contador + 1) {
if (contador == 50) break;
console.log(contador)
}


//while --> enquanto

let contagem = 0
while (contagem < 100) {
console.log("Morgana")

contagem++
}


// atividade 1 --> for simples
for (let i = 1; i <= 10; i++) {
    console.log(i)
}


// atividade 2 --> contagem regressiva e tabuada
for (let i = 5; i >= 1; i--) {
console.log (i)
}

const numero = 7;
for (let i = 1; i <=10; i++) {
    console.log(`7 x ${i} = ${numero * i}`);
}


// atividade 3 --> filtrando com continue
for (let i = 1; i <= 30; i++){
if (i % 3 !== 0) continue;
console.log(i);
}

// atividade 4 --> tabuada completa + Desafio Extra
for (let i = 1; i >= 10; i-- ) {
console.log (i);
}

const numero = 10;
for (let i = 1; i <= 100; i++) {
console.log (`10 x ${1} = ${numero * i}`);
}

for (let j = 1; j <= 100; j++) {
if (j % 3 !==0) continue;
console.log(j);
}