// ======================================================
// LISTA DE EXERCÍCIOS AVANÇADOS DE JAVASCRIPT
// ======================================================



// ==============================================
// EXERCÍCIO 1 — CONTADOR COM CLOSURE
// ==============================================

/*
Crie uma função chamada criarContador.

Ela deve retornar um objeto com:

incrementar()
decrementar()
valor()

O contador deve ser PRIVADO usando closure.

Exemplo:

const contador = criarContador()

contador.incrementar()
contador.incrementar()

console.log(contador.valor()) // 2
*/
function criarContador() {
    let valor = 0;
    return {
        incrementar(){++valor},
        decrementar(){--valor},
        valor(){return valor}
    }
}

const contador = criarContador()
contador.incrementar()
contador.incrementar()
contador.decrementar()
console.log(contador.valor());

// ==============================================
// EXERCÍCIO 2 — CALCULADORA COM HISTÓRICO
// ==============================================

/*
Crie uma factory function chamada criarCalculadora.

Ela deve ter os métodos:

somar(a,b)
subtrair(a,b)

Cada operação deve ser salva
em um histórico privado.

Crie também o método:

historico()

que retorna todas as operações realizadas.

Exemplo esperado:

[
 "2 + 3 = 5",
 "10 - 4 = 6"
]
*/
console.log(`------------------------------------------------------`);


function criarCalculadora() {
    let Resultado =[];
    return {
        somar(a,b){
            Resultado.push(`${a} + ${b} = ${a+b}`)
            return a + b
        },
        subtrair(a,b){
            Resultado.push(`${a} + ${b} = ${a-b}`)
            return a - b
        },
        historico(){
            return Resultado
        }
    }
}
let calculadora = criarCalculadora()

console.log(calculadora.somar(100, 100));
console.log(calculadora.subtrair(100, 50));
console.log(calculadora.historico());




// ==============================================
// EXERCÍCIO 3 — GERADOR DE SENHAS
// ==============================================

/*
Crie uma função geradora chamada gerarSenha.

Ela deve gerar infinitas senhas no formato:

senha-1
senha-2
senha-3

Use yield.

Exemplo:

const senha = gerarSenha()

console.log(senha.next().value)
*/

function* gerarSenha(senha = 0){
    while(true){
        yield `senha-` + ++senha
    }
};

const senha = gerarSenha()
console.log(senha.next().value);
console.log(senha.next().value);
console.log(senha.next().value);
console.log(senha.next().value);

// ==============================================
// EXERCÍCIO 4 — RECURSÃO SOMA ARRAY
// ==============================================

/*
Crie uma função recursiva chamada somaArray.

Ela recebe um array de números
e retorna a soma de todos os valores.

Exemplo:

somaArray([1,2,3,4])

Resultado:

10

Não pode usar loops ou reduce.
*/
function somaArray(arr, v=0) {
    if(v === arr.length){return 0}
    return arr[v] + somaArray(arr, v+1)
}

console.log(somaArray([1,2,3,4,5,6,7]));

// ==============================================
// EXERCÍCIO 5 — RECURSÃO MAIOR NÚMERO
// ==============================================

/*
Crie uma função recursiva chamada maiorNumero.

Ela recebe um array de números
e retorna o maior valor.

Exemplo:

maiorNumero([10,5,80,3,50])

Resultado:

80
*/


// ==============================================
// EXERCÍCIO 6 — FACTORY COM DADO PRIVADO
// ==============================================

/*
Crie uma factory function chamada criarPessoa.

Ela recebe:

nome
idade

A idade deve ser PRIVADA.

Crie métodos:

aniversario() -> aumenta idade
mostrarIdade() -> retorna idade
*/

function criarPessoa(nome, idade){
    let idadeA = idade;
    return {
        aniversario(){
            idadeA += 1
        },
        mostrarIdade(){
            return idadeA;
        }
    }
}
const p1 = criarPessoa(`Fagner`, 20)
p1.aniversario()
p1.aniversario()
p1.aniversario()
console.log(p1.mostrarIdade());


// ==============================================
// EXERCÍCIO 7 — TRANSFORMAR ARRAY EM OBJETO
// ==============================================

/*
Transforme o array abaixo em um objeto.

const pessoas = [
 {nome:"Ana", idade:20},
 {nome:"Carlos", idade:30},
 {nome:"Maria", idade:25}
]

Resultado esperado:

{
 Ana:20,
 Carlos:30,
 Maria:25
}

Use reduce.
*/

const pessoas = [
 {nome:"Ana", idade:20},
 {nome:"Carlos", idade:30},
 {nome:"Maria", idade:25}
]


let pObj = pessoas.reduce((ac, valor)=>{
    ac[valor.nome] = valor.idade 

    return ac

},{})


console.log(pObj);


// ==============================================
// EXERCÍCIO 8 — SEPARAR PARES E ÍMPARES
// ==============================================

/*
Use reduce para separar números
pares e ímpares.

const numeros = [1,2,3,4,5,6]

Resultado esperado:

{
 pares:[2,4,6],
 impares:[1,3,5]
}
*/

const numeros = [1,2,3,4,5,6];

let imparesEpares = numeros.reduce((ac, valor)=>{
    if (valor % 2 === 0) {
        ac.pares.push(valor)
    } else{
        ac.impares.push(valor)
    }
    return ac
},{pares: [], impares : []})

console.log(imparesEpares);

// ==============================================
// EXERCÍCIO 9 — GERADOR CONTADOR INFINITO
// ==============================================

/*
Crie uma função geradora chamada contador.

Ela deve gerar números infinitamente.

1
2
3
4
5
...
*/

function* contador2(){
    let v = 0
    while(true){
        yield ++v
    }
}

let numero = contador2()

console.log(numero.next().value);
console.log(numero.next().value);
console.log(numero.next().value);
console.log(numero.next().value);
console.log(numero.next().value);


// ==============================================
// EXERCÍCIO 10 — FUNÇÃO QUE EXECUTA FUNÇÃO
// ==============================================

/*
Crie uma função chamada executar.

Ela recebe uma função como parâmetro
e executa essa função.

Exemplo:

executar(() => console.log("Olá mundo"))
*/



// ==============================================
// EXERCÍCIO 11 — CRIAR POTÊNCIA
// ==============================================

/*
Crie uma função chamada criarPotencia.

Ela recebe um número expoente.

Ela deve retornar uma função que
eleva qualquer número a esse expoente.

Exemplo:

const quadrado = criarPotencia(2)

console.log(quadrado(5)) // 25
*/



// ==============================================
// EXERCÍCIO 12 — DESESTRUTURAÇÃO PROFUNDA
// ==============================================

/*
Use desestruturação para extrair:

nome
cidade

do objeto abaixo.

const usuario = {
 nome: "Fagner",
 endereco: {
  cidade: "Belém",
  estado: "PA"
 }
}
*/



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


// ==============================================
// FIM DOS EXERCÍCIOS
// ==============================================