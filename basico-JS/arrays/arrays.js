const frutas = [`açai`, `coco`, `banana`, `laranja` ];

console.log(Array.isArray(frutas));
console.log(frutas[3]);
console.log(frutas[4]);
frutas[2] = `coqueiro`
console.log(frutas);
frutas[4] = `maçã`
console.log(frutas);

console.log(`________________________________________________________________________`);
frutas.push(`bannana`)
frutas.unshift(`tomate`)
console.log(frutas);
frutas.pop()
frutas.shift()
console.log(frutas);

const removido = frutas.slice(2, 4)

console.log(removido);

