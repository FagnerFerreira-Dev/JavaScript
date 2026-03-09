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


let numeros = [1,2,30,4,5,6,7,8,9]
let dobraN = numeros.map(value => value *2)

console.log(dobraN);


let m10 = numeros.reduce((ac, value)=>{
    ac += value;
    return ac
})
console.log(m10);

let maior = numeros.reduce((ac, value) => value > ac ? value : ac)
console.log(maior);


let pessoas2 = [
    {nome: `Fanger`, idade: 21},
    {nome: `Asafe`, idade: 8},
    {nome: `fernando`, idade: 10},
    {nome: `evelin`, idade: 23}
]

let pessoa2 = pessoas.reduce((ac, value) =>{

    ac[value.nome] = value.idade

    return ac
}, {}) 


console.log(pessoa2);
