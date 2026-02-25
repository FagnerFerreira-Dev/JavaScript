const listaF = [`maçã`, `pera`, `manga`, `melão`]
const obj = {
    nome: `Fagner`,
    idade: 10,
    city: `Macapá`
}


for (let i in listaF){
    console.log(listaF[i]);    
}

console.log(`---------------------------------------------`);

for (let i in obj){
    console.log(i);
}

console.log(`-----------------------------------------------`);
for (let i in obj){
    console.log(i,`: `, obj[i]);
    
}
