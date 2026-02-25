const nome = `Fagner`;
const nomes = [`Fagner`, `Ferreira`, `Bagundes`];
const pessoa = {
    corpo: [`braços`, `Pernas`, `Tronco`, `Caeça`],
    person: `feliz`,
    sentm: `tristeza`
}



for (let value of nome){
    console.log(value);
}

console.log(`-----------------------------------------------------`);

for (let value of nomes){
    console.log(value);
}

console.log(`-----------------------------------------------------`);

try {
    for (let value of pessoa){
    console.log(value);
}
} catch (e) {
    console.log(`não é possível iterar em objetos`);
    
}



