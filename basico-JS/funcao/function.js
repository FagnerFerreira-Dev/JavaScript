

function cumprimentos(pessoa) {
    console.log(`${pessoa} diz oi`);    
}


function soma(a, b) {
    return a + b
}
cumprimentos(`Fagnner`)

let somado = soma(5, 5)
console.log(somado);

// arrow functions

let oi = cumprimento => console.log(cumprimento);
let muilt = (a,b) => a * b 

oi(`salve sallve família`)

console.log(muilt(5,2));

