/*
==============================================
EXERCÍCIOS DE FUNÇÕES EM JAVASCRIPT
Tópicos:

1 - Desestruturação
2 - Factory Functions
3 - Funções Construtoras
4 - Funções Geradoras
5 - Funções Auto Invocadas (IIFE)
6 - Funções Recursivas
7 - Retorno de Funções
8 - Closure
==============================================
*/


// ==============================================
// EXERCÍCIO 1 — DESESTRUTURAÇÃO
// ==============================================

/*
Crie uma função chamada apresentarPessoa.

Ela deve receber um objeto com:

nome
idade
cidade

Use DESSTRUTURAÇÃO diretamente nos parâmetros.

A função deve retornar a frase:

"Meu nome é NOME, tenho IDADE anos e moro em CIDADE."

Exemplo de uso:

const pessoa = {
  nome: "Fagner",
  idade: 25,
  cidade: "Belém"
}

console.log(apresentarPessoa(pessoa))
*/

const pessoa = {
  nome: "Fagner",
  idade: 25,
  cidade: "Belém"
}

function apresentarPessoa({nome, idade, cidade}) {
  return `Meu nome é ${nome}, tenho ${idade} anos e moro em ${cidade}`
}

console.log(apresentarPessoa(pessoa));



// ==============================================
// EXERCÍCIO 2 — DESESTRUTURAÇÃO COM PADRÃO
// ==============================================

/*
Crie uma função chamada criarProduto.

Ela deve receber um objeto com:

nome
preco
estoque

Use desestruturação.

Se estoque não for informado,
ele deve assumir valor padrão 0.

A função deve retornar um objeto novo:

{
 nome,
 preco,
 estoque
}

Teste com produtos com e sem estoque.
*/

let produto1 = {
  nome: `carro`,
  preco: 25000,
  estoque: 5
}
let produto2 = {
  nome: `carro`,
  preco: 25000
}

function criarProduto({nome, preco, estoque}) {
  if (isNaN(estoque) || estoque <= 0) {return 0 }
  return {
    nome, preco, estoque
  }
}

console.log(criarProduto(produto1));
console.log(criarProduto(produto2));


// ==============================================
// EXERCÍCIO 3 — FACTORY FUNCTION
// ==============================================

/*
Crie uma factory function chamada criarPessoa.

Ela deve receber:

nome
sobrenome
altura
peso

Ela deve retornar um objeto contendo:

nomeCompleto() → retorna "nome sobrenome"

imc() → calcula IMC

Formula:

peso / (altura * altura)

Exemplo:

const p1 = criarPessoa("Fagner", "Ferreira", 1.80, 80)

console.log(p1.nomeCompleto())
console.log(p1.imc())
*/


// ==============================================
// EXERCÍCIO 4 — FACTORY FUNCTION COM CLOSURE
// ==============================================

/*
Crie uma factory function chamada criarContaBancaria.

Ela deve receber:

saldoInicial

O saldo deve ser PRIVADO.

Crie métodos:

depositar(valor)
sacar(valor)

Crie também um getter:

saldoAtual

Exemplo:

const conta = criarContaBancaria(100)

conta.depositar(50)

console.log(conta.saldoAtual)
*/


// ==============================================
// EXERCÍCIO 5 — FUNÇÃO CONSTRUTORA
// ==============================================

/*
Crie uma função construtora chamada Produto.

Ela deve receber:

nome
preco

Crie um método:

desconto(percentual)

Esse método deve reduzir o preço do produto.

Exemplo:

const p1 = new Produto("Camisa", 100)

p1.desconto(10)

console.log(p1.preco)

Resultado esperado:

90
*/


// ==============================================
// EXERCÍCIO 6 — FUNÇÃO CONSTRUTORA COM MÉTODO
// ==============================================

/*
Crie uma função construtora chamada Carro.

Ela deve receber:

marca
velocidadeMaxima

Crie uma propriedade:

velocidadeAtual = 0

Crie um método:

acelerar()

Esse método deve:

aumentar velocidadeAtual em 10

Porém nunca pode ultrapassar velocidadeMaxima.

Exemplo:

const c1 = new Carro("Toyota", 180)

c1.acelerar()
c1.acelerar()
*/


// ==============================================
// EXERCÍCIO 7 — FUNÇÃO GERADORA
// ==============================================

/*
Crie uma função geradora chamada contador.

Ela deve gerar números de 1 até 5.

Use yield.

Exemplo:

const gen = contador()

console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
*/


// ==============================================
// EXERCÍCIO 8 — GERADOR INFINITO
// ==============================================

/*
Crie uma função geradora chamada geradorId.

Ela deve gerar IDs infinitos começando em 1.

Exemplo:

const id = geradorId()

console.log(id.next().value) // 1
console.log(id.next().value) // 2
console.log(id.next().value) // 3
*/


// ==============================================
// EXERCÍCIO 9 — FUNÇÃO AUTO INVOCADA (IIFE)
// ==============================================

/*
Crie uma função auto executável.

Ela deve:

criar uma variável chamada mensagem

imprimir no console:

"Sistema iniciado com sucesso"

A variável mensagem NÃO pode existir
fora da função.
*/


// ==============================================
// EXERCÍCIO 10 — FUNÇÃO RECURSIVA (FATORIAL)
// ==============================================

/*
Crie uma função recursiva chamada fatorial.

Ela deve calcular o fatorial de um número.

Exemplo:

fatorial(5)

Resultado esperado:

120

Pois:

5 * 4 * 3 * 2 * 1
*/


// ==============================================
// EXERCÍCIO 11 — FUNÇÃO RECURSIVA (CONTAGEM)
// ==============================================

/*
Crie uma função recursiva chamada contagem.

Ela deve imprimir números de 1 até N.

Exemplo:

contagem(5)

Saída:

1
2
3
4
5
*/


// ==============================================
// EXERCÍCIO 12 — RETORNO DE FUNÇÃO
// ==============================================

/*
Crie uma função chamada criarMultiplicador.

Ela recebe um número multiplicador.

Ela deve retornar outra função que multiplica
qualquer número por esse multiplicador.

Exemplo:

const duplica = criarMultiplicador(2)

console.log(duplica(5)) // 10
*/


// ==============================================
// EXERCÍCIO 13 — RETORNO DE FUNÇÃO (SAUDAÇÃO)
// ==============================================

/*
Crie uma função chamada criarSaudacao.

Ela recebe uma saudação.

Ela retorna uma função que recebe um nome
e retorna a frase completa.

Exemplo:

const bomDia = criarSaudacao("Bom dia")

console.log(bomDia("Fagner"))

Resultado esperado:

"Bom dia, Fagner!"
*/


// ==============================================
// EXERCÍCIO 14 — DESAFIO (CLOSURE)
// ==============================================

/*
Crie uma factory function chamada criarUsuario.

Ela deve receber:

nome
senha

A senha deve ser PRIVADA.

Crie um método:

login(senha)

Se a senha estiver correta:

"Login autorizado"

Se estiver incorreta:

"Senha incorreta"

Use CLOSURE para proteger a senha.
*/


// ==============================================
// FIM DOS EXERCÍCIOS
// ==============================================