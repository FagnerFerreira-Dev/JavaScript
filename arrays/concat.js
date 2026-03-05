let empresas = [`Microsoft`, `Apple`, `IMB`];
let newEmpresas = [`chatGPT`, `SMIC`, `Samsumg`]


let full = empresas.concat(newEmpresas)
let full2 = [...empresas, ...newEmpresas]

console.log(full);
console.log(full2);

