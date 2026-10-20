/*
============================================================
        REVISAO COMPLETA DE JAVASCRIPT
============================================================

OBJETIVO:
Revisar os principais fundamentos de JavaScript por meio
de desafios praticos, do nivel iniciante ao avancado.

INSTRUCOES:
- Resolva os desafios sem consultar solucoes prontas.
- Escreva seu codigo abaixo de cada enunciado.
- Teste suas funcoes com os exemplos fornecidos.
- Se travar, consulte a dica do exercicio.
- Marque os desafios como concluidos conforme avancar.

============================================================
FASE 1 - RECUPERANDO A MEMORIA
============================================================


------------------------------------------------------------
DESAFIO 01 - CLASSIFICADOR DE NUMEROS
Nivel: Facil
Assuntos: Funcoes, condicionais e operadores
------------------------------------------------------------

// Crie uma funcao chamada classificarNumero que receba
// um numero e retorne uma string indicando se ele e:
//
// - "positivo"
// - "negativo"
// - "zero"
//
// Exemplos:
//
// classificarNumero(-5)  // "negativo"
// classificarNumero(0)   // "zero"
// classificarNumero(12)  // "positivo"
//
// REGRAS:
// - Utilize if, else if e else.
// - A funcao deve retornar o resultado, nao apenas imprimir.
//
// DICA:
// Comece verificando se o numero e igual a zero.
// Depois, verifique se e maior ou menor que zero.

// Escreva sua solucao abaixo:

*/
function classificarNumero(numero) {
    if (numero === 0) {
        return "zero";
    } else if (numero > 0) {
        return "positivo";
    } else {
        return "negativo";
    }
}
    console.log(classificarNumero(3));
 


/*


------------------------------------------------------------
DESAFIO 02 - ESTATISTICAS DE UM ARRAY
Nivel: Facil
Assuntos: Arrays, loops, acumuladores e objetos
------------------------------------------------------------

// Crie uma funcao chamada estatisticas que receba um array
// de numeros e retorne um objeto contendo:
//
// - soma: soma de todos os numeros.
// - media: media aritmetica.
// - maior: maior numero do array.
// - menor: menor numero do array.
//
// Exemplo:
//
// estatisticas([4, 8, 2, 10])
//
// Resultado esperado:
//
// {

//     soma: 24,
//     media: 6,
//     maior: 10,
//     menor: 2
// }
//
// REGRAS:
// - Primeiro, resolva utilizando um loop.
// - Nao utilize bibliotecas externas.
// - Considere como tratar um array vazio.
//
// DESAFIO EXTRA:
// Reescreva a solucao utilizando reduce para calcular a soma.
//
// DICA:
// Voce pode utilizar um acumulador para somar os valores.
// Para encontrar o maior e o menor, compare os elementos.
//
// Escreva sua solucao abaixo:
*/
let estatisticas = [8,2,3,1,5,6]

let obj = estatisticas.reduce((acc, value ) => {
    return {
        soma: acc.soma+value,
        media: acc.soma / 2,
        maior: acc.maior > value ? acc.maior : value,
        menor: acc.menor < value ? acc.menor : value
    }
},{
        soma:0,
        media:0,
        maior:estatisticas[0],
        menor:estatisticas[0]
})

console.log(obj);

/*

------------------------------------------------------------
DESAFIO 03 - CONTADOR DE VOGAIS
Nivel: Facil
Assuntos: Strings, loops e metodos
------------------------------------------------------------

// Crie uma funcao chamada contarVogais que receba uma frase
// e retorne a quantidade de vogais presentes nela.
//
// Exemplos:
//
// contarVogais("JavaScript")  // 3
// contarVogais("Linux Mint")  // 3
// contarVogais("AEIOU")       // 5
//
// REGRAS:
// - Nao diferencie letras maiusculas de minusculas.
// - Considere as vogais a, e, i, o e u.
// - O resultado deve ser um numero.
//
// DESAFIO EXTRA:
// Faca a funcao tambem reconhecer vogais acentuadas,
// como a, e, i, o e u com acentos.
//
// DICA:
// Transforme a frase em minusculas antes de percorre-la.
// Voce pode utilizar includes() para verificar se um
// caractere pertence a uma string de vogais.
//
// Escreva sua solucao abaixo:

*/



function contarVogais(frase) {
    let ac = 0;
    let vogais = [`a`,`e`,`i`,`o`,`u`]
    for( l of frase.toLowerCase()){{
        if (vogais.includes(l)) ++ac
    }
}

return ac
}

console.log(contarVogais(`ABEL Fagner`));
/*
------------------------------------------------------------
DESAFIO 04 - REMOVER ELEMENTOS DUPLICADOS
Nivel: Facil para intermediario
Assuntos: Arrays e Set
------------------------------------------------------------

// Crie uma funcao chamada removerDuplicados que receba
// um array e retorne outro array sem elementos repetidos.
//
// A ordem original dos elementos deve ser preservada.
//
// Exemplo:
//
// removerDuplicados([1, 2, 2, 3, 1, 4])
//
// Resultado esperado:
//
// [1, 2, 3, 4]
//
// Outro exemplo:
//
// removerDuplicados(["a", "b", "a", "c", "b"])
//
// Resultado esperado:
//
// ["a", "b", "c"]
//
// REGRAS:
// - Utilize Set.
// - Nao altere diretamente o array original.
//
// DICA:
// Lembre-se de que Set armazena valores unicos.
// Pense em como transformar um Set novamente em array.
//
// Escreva sua solucao abaixo:




============================================================
FASE 2 - ARRAYS E OBJETOS
============================================================


------------------------------------------------------------
DESAFIO 05 - FILTRAR E TRANSFORMAR PRODUTOS
Nivel: Intermediario
Assuntos: filter(), map() e objetos
------------------------------------------------------------

// Considere a lista de produtos:
//
// const produtos = [
//     { nome: "Mouse", preco: 80, disponivel: true },
//     { nome: "Teclado", preco: 150, disponivel: true },
//     { nome: "Cabo", preco: 25, disponivel: false },
//     { nome: "Headset", preco: 90, disponivel: true },
//     { nome: "Monitor", preco: 800, disponivel: true }
// ];
//
// Crie uma solucao que retorne os nomes dos produtos que:
//
// - Estejam disponiveis.
// - Tenham preco menor que 100.
// - Tenham seus nomes transformados em letras maiusculas.
//
// Resultado esperado:
//
// ["MOUSE", "HEADSET"]
//
// REGRAS:
// - Utilize filter().
// - Utilize map().
// - Nao altere o array original.
//
// DESAFIO EXTRA:
// Calcule o preco total dos produtos que passaram pelo filtro,
// utilizando reduce().
//
// DICA:
// Primeiro, selecione os produtos desejados.
// Depois, transforme os objetos selecionados em nomes.
//
// Escreva sua solucao abaixo:




------------------------------------------------------------
DESAFIO 06 - AGRUPADOR DE PALAVRAS
Nivel: Intermediario
Assuntos: Objetos, reduce() e strings
------------------------------------------------------------

// Crie uma funcao chamada agrupar que receba um array
// de palavras e agrupe-as pela primeira letra.
//
// Exemplo:
//
// agrupar(["casa", "carro", "bola", "barco", "dado"])
//
// Resultado esperado:
//
// {
//     c: ["casa", "carro"],
//     b: ["bola", "barco"],
//     d: ["dado"]
// }
//
// REGRAS:
// - Utilize reduce().
// - Cada letra deve ser uma propriedade do objeto.
// - Cada propriedade deve armazenar um array de palavras.
//
// DESAFIO EXTRA:
// Faca o agrupamento sem diferenciar letras maiusculas
// de minusculas.
//
// DICA:
// Em cada iteracao, obtenha a primeira letra da palavra.
// Verifique se a propriedade ja existe no objeto acumulador.
// Caso nao exista, inicialize um array vazio.
//
// Escreva sua solucao abaixo:




------------------------------------------------------------
DESAFIO 07 - CARRINHO DE COMPRAS
Nivel: Intermediario para avancado
Assuntos: Objetos, arrays, reduce() e condicionais
------------------------------------------------------------

// Considere o seguinte carrinho:
//
// const carrinho = [
//     { nome: "Mouse", preco: 80, quantidade: 2 },
//     { nome: "Cabo", preco: 20, quantidade: 3 }
// ];
//
// Crie uma funcao que calcule o valor total da compra.
//
// O total deve ser calculado multiplicando o preco pela
// quantidade de cada produto.
//
// Depois, aplique um desconto de 10% se o total for maior
// que 200 reais.
//
// Resultado esperado:
//
// Total sem desconto
*/