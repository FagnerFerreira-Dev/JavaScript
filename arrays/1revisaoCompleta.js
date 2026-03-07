let nomes = [`Fagner`, `Ferreira`, `Bagundes`, `Silva`]
let pessoas = [
    {nome: `Fanger`, idade: 21},
    {nome: `Asafe`, idade: 8},
    {nome: `fernando`, idade: 10},
    {nome: `evelin`, idade: 23}

]

let nomesM7 = nomes.filter(el => el.length > 7)
let m18 = pessoas.filter((el) => el.idade < 18)


console.log(m18);
console.log(nomesM7);


let nomeEP = nomes.concat(pessoas)
let masNums = [...nomes, ...m18]

console.log(nomeEP);
console.log(masNums);

console.log(pessoas.find(el => el.idade > 18));





pessoas.forEach((el, i)=>{
    if (el.idade>18) {
        console.log(el.nome,`: é maior de idade: ` + i);
        return
    }
    console.log(el,`:`,i);
    
})





