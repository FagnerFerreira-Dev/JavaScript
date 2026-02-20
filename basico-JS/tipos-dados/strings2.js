let nomes = `Fagner Vagner Magno Sabrina`

console.log(nomes.search(`Vagner`));
console.log(nomes.search(`/M/`));
console.log(nomes.replace(`Magno`, `Franci`));
console.log(nomes.replace(/g/g, `#`));
console.log(nomes.toUpperCase());
console.log(nomes.toLowerCase());
console.log(nomes.length);


console.log(nomes.slice(0, 6));
console.log(nomes.slice(-7));
console.log(nomes.slice(-7, -6));

let nomes2 = nomes.split(` `)
console.log(nomes2);

console.log(nomes.split(` `, 2));
