// ======================================
// DADOS PARA OS EXERCÍCIOS
// ======================================

const pessoas = [
  { nome: "Ana", idade: 13, salario: 1200 },
  { nome: "Carlos", idade: 22, salario: 3000 },
  { nome: "Marina", idade: 17, salario: 1500 },
  { nome: "João", idade: 30, salario: 5000 },
  { nome: "Lucas", idade: 16, salario: 900 },
  { nome: "Fernanda", idade: 25, salario: 4000 }
];


// ======================================
// EXERCÍCIO 1 - forEach
// ======================================

// Use forEach para mostrar no console:
// "Ana tem 15 anos"
// "Carlos tem 22 anos"
// ...

pessoas.forEach((el, i)=>{
    if (el.nome === `Ana`) {console.log(`Ana tem ${el.idade} anos`)}
    if (el.nome === `Carlos`) {console.log(`Carlos tem ${el.idade} anos`)}
})

// ======================================
// EXERCÍCIO 2 - map
// ======================================

// Crie um novo array contendo apenas os nomes das pessoas.
// Resultado esperado:
// ["Ana", "Carlos", "Marina", "João", "Lucas", "Fernanda"]

let nomes = pessoas.map((el)=> el.nome)
console.log(nomes);



// ======================================
// EXERCÍCIO 3 - map
// ======================================

// Crie um novo array contendo o dobro do salário de cada pessoa.
let salarios = pessoas.map((el)=>el.salario *2)
console.log(salarios);

// ======================================
// EXERCÍCIO 4 - filter
// ======================================

// Crie um novo array contendo apenas pessoas maiores de idade (idade >= 18).
let maiores = pessoas.filter(el => el.idade >= 18)
console.log(maiores);



// ======================================
// EXERCÍCIO 5 - filter
// ======================================

// Crie um novo array contendo apenas pessoas que ganham mais de 2000.
let maisMil = pessoas.filter(el => el.salario > 2000)
console.log(maisMil);



// ======================================
// EXERCÍCIO 6 - find
// ======================================

// Encontre a pessoa chamada "Marina".

pessoas.find(el => {if (el.nome === `Marina`) {console.log(el.nome);}})

// ======================================
// EXERCÍCIO 7 - find
// ======================================

// Encontre a primeira pessoa que ganha mais de 4000.
let ganhaMais = pessoas.find(el => el.salario > 4000)
console.log(ganhaMais);

// ======================================
// EXERCÍCIO 8 - every
// ======================================

// Verifique se todas as pessoas são maiores de 14 anos.
// O resultado deve ser true ou false.

let VerificaM14 = pessoas.every(el => el.idade >14)
console.log(VerificaM14);


// ======================================
// EXERCÍCIO 9 - every
// ======================================

// Verifique se todas as pessoas ganham mais de 1000.
let verificiaS1000 = pessoas.every(el => el.salario > 1000)
console.log(verificiaS1000);


// ======================================
// ARRAY PARA OS PRÓXIMOS EXERCÍCIOS
// ======================================

const frutas = ["maçã", "banana", "uva", "laranja", "manga"];


// ======================================
// EXERCÍCIO 10 - splice
// ======================================
 
// Remova "uva" do array.

let revUv = [...frutas]
revUv.splice(2,1)
console.log(revUv);





// ======================================
// EXERCÍCIO 11 - splice
// ======================================

// Substitua "banana" por "abacaxi".
let revBana = [...frutas]
revBana.splice(1,1, `abacaxi`)
console.log(revBana);


// ======================================
// EXERCÍCIO 12 - splice
// ======================================

// Adicione "kiwi" entre "maçã" e "banana".
let addKiwi = [...frutas]
addKiwi.splice(1,0,`kiwi`)
console.log(addKiwi);



// ======================================
// EXERCÍCIO 13 - reduce
// ======================================

// Some todos os salários das pessoas.

let SalariosSoma = pessoas.reduce((act, el)=>{return act += el.salario}, 0)

console.log(SalariosSoma);


// ======================================
// EXERCÍCIO 14 - reduce
// ======================================

// Calcule a média de idade das pessoas.
let mediaIdade = pessoas.reduce((ac, el, i)=>{
  ac += el.idade;
  if (i >= (pessoas.length-1)) {return ac / (i+1)}
  return ac
},0

)
console.log(mediaIdade);


// ======================================
// EXERCÍCIO 15 - reduce
// ======================================

// Transforme o array em um objeto assim:

// {
//   Ana: 15,
//   Carlos: 22,
//   Marina: 17,
//   João: 30,
//   Lucas: 16,
//   Fernanda: 25
// }

let objeto = pessoas.reduce((ac, el)=>{
    ac[el.nome] = el.idade;
    return ac
  
},{})

console.log(objeto);

// ======================================
// EXERCÍCIO 16 - reduce (desafio)
// ======================================

// Crie um objeto agrupando menores e maiores de idade.

// Resultado esperado:

// {
//   menores: ["Ana", "Marina", "Lucas"],
//   maiores: ["Carlos", "João", "Fernanda"]
// }

let Pmaiores = []
let Pmenores = []
let MaioresEMenores = pessoas.reduce((ac, el)=>{
  if (el.idade >= 18) {
    Pmaiores.push(el.nome)
    ac.maiores = Pmaiores
    return ac
  } 
    Pmenores.push(el.nome)
    ac.menores = Pmenores
    return ac
},{})

console.log(MaioresEMenores);
// ======================================
// ARRAY PARA OS DESAFIOS
// ======================================



const numeros = [10, 20, 30, 40, 50];


// ======================================
// EXERCÍCIO 17 - map + reduce
// ======================================

// Multiplique todos os números por 2 usando map.
// Depois some todos usando reduce.
let multiplicados = numeros.map((el)=> el * 2)
let calc = multiplicados.reduce((ac, el) => {
  return ac + el
})

console.log(calc);



// ======================================
// EXERCÍCIO 18 - filter + map
// ======================================

// Pegue apenas números maiores que 25.
// Depois crie um novo array triplicando eles.

let maiores5 = numeros.filter(el=>el> 25)
let novoArray = maiores5.map((el) => el *3)
console.log(novoArray);

// Resultado esperado:
// [90, 120, 150]