// ======================================
// BASE DE DADOS PARA ALGUNS EXERCÍCIOS
// ======================================

const pessoas = [
  { nome: "Ana", idade: 22, salario: 3000, cidade: "SP" },
  { nome: "João", idade: 17, salario: 1500, cidade: "RJ" },
  { nome: "Maria", idade: 35, salario: 8000, cidade: "SP" },
  { nome: "Pedro", idade: 28, salario: 4000, cidade: "MG" },
  { nome: "Lucas", idade: 16, salario: 900, cidade: "RJ" },
  { nome: "Carla", idade: 42, salario: 12000, cidade: "MG" }
];


// =====================================================
// 🟢 EXERCÍCIOS PESADOS DE REDUCE
// =====================================================


// 1) Usando reduce, some todos os salários do array pessoas.
// Resultado esperado: 29400


// 2) Usando reduce, crie um objeto onde:
// - a chave é o nome da pessoa
// - o valor é a idade


// 3) Usando reduce, separe as pessoas em dois arrays:
// {
//   maiores: [],
//   menores: []
// }
// Maiores = idade >= 18


// 4) Usando reduce, some apenas os salários das pessoas que moram em "SP".


// 5) Usando reduce, crie um array contendo apenas os nomes das pessoas.
// (sem usar map)


// 6) Usando reduce, encontre a pessoa que possui o MAIOR salário.


// 7) Usando reduce, conte quantas pessoas existem por cidade.
// Resultado esperado:
// {
//   SP: 2,
//   RJ: 2,
//   MG: 2
// }


// 8) Usando reduce, agrupe as pessoas por cidade.
// Resultado esperado:
// {
//   SP: [...],
//   RJ: [...],
//   MG: [...]
// }


// 9) Usando reduce, calcule a média de idade das pessoas.


// 10) Usando reduce, crie um array apenas com os nomes das pessoas maiores de idade.


// 11) Usando reduce, encontre o menor salário da lista.


// 12) Usando reduce, gere um objeto com:
// {
//   totalSalarios,
//   mediaSalarios,
//   maiorSalario,
//   menorSalario
// }


// 13) Usando reduce, transforme o array em um novo array nesse formato:
// ["Ana - SP", "João - RJ", ...]


// 14) Usando reduce, crie um ranking de salários em ordem decrescente.
// Resultado esperado:
// [
//   { nome: "Carla", salario: 12000 },
//   { nome: "Maria", salario: 8000 },
//   ...
// ]


// 15) Usando reduce, crie um objeto com a soma de salários por cidade.
// Resultado esperado:
// {
//   SP: 11000,
//   RJ: 2400,
//   MG: 16000
// }



// =====================================================
// 🟡 EXERCÍCIOS QUE APARECEM EM ENTREVISTAS
// =====================================================

const numeros = [1,2,3,4,5,6,7,8,9,10];


// 16) Recrie o método map usando reduce.


// 17) Recrie o método filter usando reduce.


// 18) Recrie o método some usando reduce.


// 19) Recrie o método every usando reduce.


// 20) Usando reduce, transforme o array abaixo em um único array plano.

const arr = [1,[2,3],[4,[5]]];

// Resultado esperado:
// [1,2,3,4,5]


// 21) Usando reduce, conte a frequência de cada letra na string:

const palavra = "javascript";

// Resultado esperado:
// {
//   j:1,
//   a:2,
//   v:1,
//   s:1,
//   c:1,
//   r:1,
//   i:1,
//   p:1,
//   t:1
// }


// 22) Usando reduce, encontre o número que aparece mais vezes.

const nums = [1,2,2,3,3,3,4];

// Resultado esperado: 3


// 23) Usando reduce, remova números duplicados.

const duplicados = [1,2,2,3,3,4];

// Resultado esperado:
// [1,2,3,4]


// 24) Conte quantas palavras existem na frase abaixo usando reduce.

const frase = "eu gosto muito de javascript";

// Resultado esperado: 5


// 25) Agrupe produtos por categoria usando reduce.

const produtos = [
  {nome:"Camisa", categoria:"roupa"},
  {nome:"Celular", categoria:"eletronico"},
  {nome:"Calça", categoria:"roupa"}
];

// Resultado esperado:
// {
//   roupa:[...],
//   eletronico:[...]
// }



// =====================================================
// 🔴 DESAFIOS NÍVEL EMPRESA
// =====================================================


// 26) Calcule o total do carrinho usando reduce.

const carrinho = [
 {produto:"Camisa", preco:50, qtd:2},
 {produto:"Tênis", preco:200, qtd:1},
 {produto:"Boné", preco:30, qtd:3}
];


// 27) Crie um resumo financeiro usando reduce.

const transacoes = [
 {tipo:"entrada", valor:1000},
 {tipo:"saida", valor:200},
 {tipo:"entrada", valor:500},
 {tipo:"saida", valor:100}
];

// Resultado esperado:
// {
//   entradas: 1500,
//   saidas: 300,
//   saldo: 1200
// }


// 28) Calcule a média das notas de cada aluno usando reduce.

const alunos = [
 {nome:"Ana", notas:[8,9,10]},
 {nome:"João", notas:[5,6,7]}
];

// Resultado esperado:
// [
//   {nome:"Ana", media:9},
//   {nome:"João", media:6}
// ]


// 29) Conte quantas vezes cada ação aparece.

const logs = [
 "login",
 "logout",
 "login",
 "login",
 "logout"
];

// Resultado esperado:
// {
//   login:3,
//   logout:2
// }


// 30) Some vendas por mês usando reduce.

const vendas = [
 {mes:"jan", valor:100},
 {mes:"fev", valor:200},
 {mes:"jan", valor:300}
];

// Resultado esperado:
// {
//   jan:400,
//   fev:200
// }