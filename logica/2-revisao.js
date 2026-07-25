// ================================
// DESAFIO: SISTEMA DE BIBLIOTECA
// ================================


// ======================================
// 1. Crie uma Factory Function
// ======================================

// Crie uma factory function que retorne um objeto Livro.

// O livro deve possuir as seguintes propriedades:
// - titulo
// - autor
// - ano
// - paginas
// - emprestado

// Também deve possuir os seguintes métodos:
// - emprestar()
// - devolver()

// Além disso, crie um getter chamado "descricao"
// que deve retornar algo como:
//
// Dom Casmurro - Machado de Assis (1899)


// ======================================
// 2. Crie um array de livros
// ======================================

// Crie um array contendo pelo menos 10 livros.

// Misture livros:
// - de anos diferentes
// - com quantidades diferentes de páginas
// - alguns emprestados
// - alguns disponíveis


// ======================================
// 3. map()
// ======================================

// Utilize map() para criar um novo array contendo
// apenas os títulos dos livros.


// Resultado esperado:
//
// [
//   "Dom Casmurro",
//   "1984",
//   ...
// ]


// ======================================
// 4. filter()
// ======================================

// Crie um array contendo apenas
// os livros disponíveis.

// Depois crie outro array contendo
// apenas livros com mais de 300 páginas.


// ======================================
// 5. reduce()
// ======================================

// Utilize reduce() para descobrir:
//
// - O total de páginas de todos os livros.
//
// Depois utilize reduce() para calcular:
//
// - A média de páginas dos livros.


// ======================================
// 6. Destructuring
// ======================================

// Utilize destructuring para pegar
// o primeiro livro do array.

// Depois faça outro destructuring
// para obter apenas:
//
// - titulo
// - autor

// Exiba algo como:
//
// Dom Casmurro - Machado de Assis


// ======================================
// 7. Closures
// ======================================

// Crie uma função que gere um contador
// de empréstimos.

// Exemplo:
//
// const contador = criarContador();
//
// Sempre que um livro for emprestado,
// chame:
//
// contador();
//
// Ela deve retornar:
//
// 1
// 2
// 3
// ...

// Não utilize variável global.


// ======================================
// 8. Recursão
// ======================================

// Crie uma função recursiva que percorra
// todos os livros do array.

// Ela deve exibir:
//
// Livro 1
// Livro 2
// Livro 3
// ...

// Não utilize for ou while.


// ======================================
// 9. Constructor Function
// ======================================

// Agora refaça o Livro utilizando
// uma Constructor Function.

// Crie:
//
// function Livro(...) {}

// Depois crie os métodos utilizando:
//
// Livro.prototype.emprestar
// Livro.prototype.devolver


// ======================================
// 10. sort()
// ======================================

// Ordene os livros:
//
// - Do mais antigo para o mais novo.
//
// Depois:
//
// - Do maior número de páginas
//   para o menor.


// ======================================
// 11. Funções de Alta Ordem
// ======================================

// Crie uma função:
//
// buscarLivros(livros, criterio)

// Essa função deve receber
// uma função como parâmetro.

// Exemplos de uso:
//
// buscarLivros(livros, livro => livro.paginas > 400);
//
// buscarLivros(livros, livro => livro.autor === "Machado de Assis");
//
// buscarLivros(livros, livro => livro.emprestado);


// ======================================
// 12. Desafio Extra
// ======================================

// Crie um menu utilizando prompt()
// e while para manter o programa rodando.
//
// Menu:
//
// 1 - Listar livros
// 2 - Emprestar livro
// 3 - Devolver livro
// 4 - Mostrar total de páginas
// 5 - Mostrar livros disponíveis
// 6 - Sair
//
// O programa deve continuar executando
// até que o usuário escolha a opção "Sair".


// ======================================
// CONTEÚDOS REVISADOS
// ======================================

// ✓ Objetos
// ✓ Factory Functions
// ✓ Constructor Functions
// ✓ Prototype
// ✓ Métodos
// ✓ Getters
// ✓ Closures
// ✓ Recursão
// ✓ Arrays
// ✓ map()
// ✓ filter()
// ✓ reduce()
// ✓ sort()
// ✓ Destructuring
// ✓ Arrow Functions
// ✓ Funções de Alta Ordem
// ✓ while
// ✓ Condicionais