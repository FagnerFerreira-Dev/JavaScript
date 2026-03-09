const Nomes = new Array(`Fagner`, `Vagner`, `Mirian`);


const frutas = [`aça`, `maçã`, `pera`];


let frutasTops = [...frutas]


console.log(frutas);
console.log(frutasTops);

frutas[3] = `banana`
console.log(frutasTops);
console.log(frutas);




console.log(frutas.slice(1,4));


let nome = `Fagner-Ferreira-Bagundes`;

let nomeS = nome.split(`-`)


let nomeString = nomeS.join(`-`)


console.log(nomeS);


console.log(nomeString);

