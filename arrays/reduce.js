const numeros = [1,2,3,4,5];


let soma = numeros.reduce((Inic, value) => {{
    return Inic + value
}})


console.log(soma);

// const mV = pessoas.reduce((contador, value, indice)=>{
//     return contador.idade > value.idade ? contador : value;
    
// })



const pessoas = [
    {nome:`Asafe`, idade:9},
    {nome:`Fagner`, idade:21},
    {nome:`Vagner`, idade:30},
    {nome:`Abner`, idade:120},

]


const novoOB = pessoas.reduce((acc, value, i)=>{

    if (value.idade <17 ) {
        acc[value.nome] = value.idade;
    }
    return acc
},{})
// console.log(mV);

console.log(novoOB);

