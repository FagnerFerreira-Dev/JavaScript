

// ==============================================
// EXERCÍCIO 13 — CONTADOR DE LETRAS
// ==============================================

/*
Crie uma função chamada contarLetras.

Ela recebe uma string.

Ela deve retornar um objeto
com a quantidade de cada letra.

Exemplo:

contarLetras("banana")

Resultado:

{
 b:1,
 a:3,
 n:2
}
*/

// function contarLetras(palavra) {
//     for (const letra of palavra) {
      
        
//     }
    
// }


// console.log(contarLetras(`Fagner`));


// ==============================================
// EXERCÍCIO 14 — FILTRAR MAIORES DE IDADE
// ==============================================

/*
Use filter para retornar apenas
pessoas maiores de 18 anos.

const pessoas = [
 {nome:"Ana", idade:15},
 {nome:"Carlos", idade:22},
 {nome:"Maria", idade:17},
 {nome:"João", idade:30}
]
*/

// const pessoas2 = [
//  {nome:"Ana", idade:15},
//  {nome:"Carlos", idade:22},
//  {nome:"Maria", idade:17},
//  {nome:"João", idade:30}
// ]

let maioresIdade2 = pessoas2.filter(value => value.idade >= 18)
.map(value => value.nome)

console.log(maioresIdade2);




// ==============================================
// EXERCÍCIO 15 — DESAFIO BANCO
// ==============================================

/*
Crie uma função chamada criarBanco.

Ela deve permitir criar contas.

Exemplo:

const banco = criarBanco()

banco.criarConta("Fagner",100)

banco.depositar("Fagner",50)

banco.sacar("Fagner",30)

console.log(banco.saldo("Fagner"))

Resultado esperado:

120

Todas as contas devem ficar
privadas dentro da função.
*/



// ==============================================
// EXERCÍCIO 16 — DESAFIO DEBOUNCE
// ==============================================

/*
Crie uma função chamada debounce.

Ela recebe:

funcao
tempo

A função só pode ser executada
depois que parar de ser chamada
por X milissegundos.

Muito usado em:

inputs
buscas
APIs
*/

function debounce(funcao, tempo) {
    setTimeout(() => {
        funcao()
    }, tempo);
}
 
function dizerOi(){
    console.log(`oiiii, tudo bom?`);
}

debounce(dizerOi, 1000)

// ==============================================
// FIM DOS EXERCÍCIOS
// ==============================================