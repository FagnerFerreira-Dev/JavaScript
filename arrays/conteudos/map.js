let nums = [1,2,3,4,5];

let dobrados = nums.map(num => num*2);


console.log(dobrados);
console.log(nums);


const pessoas = [
    {nome:`Fagner`, idade:21},
    {nome:`Vagner`, idade:30},
    {nome:`Abner`, idade:12},
    {nome:`Asafe`, idade:9}
]
console.log(pessoas);

let addP = pessoas.map(pessoa => {
    return {
        ...pessoa,
        cidade: pessoa.cidade = `macapá`
    }
})

console.log(pessoas);

console.log(addP);


console.log(`----------------------------------------------------------------------------------`);

let produtos =[
    {nome: `carro`, ano: `2005`, preco: 50000},
    {nome: `moto`, ano: `2003`, preco: 5000},
    {nome: `casa`, ano: `1993`, preco: 100000},
    {nome: `carro`, ano: `2005`, preco: 5000}
]



let desconto = produtos.map(obj =>{
    return {
        ...obj,
        preco: obj.preco * 0.10,

    }
})


console.log(produtos);
console.log(desconto);


