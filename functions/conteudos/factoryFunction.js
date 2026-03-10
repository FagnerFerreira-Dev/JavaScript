// let criaPessoa = (nome, sobrenome) => ({nome,sobrenome})



// let p1 = criaPessoa(`Fagner`, `Ferreira`)
// console.log(p1);

// let criaAnimal = (especie, nome, faz) => ({nome, especie, ativar(){console.log(`esse animal faz ${faz}`)}})



// let Cachorro = criaAnimal(`Cachorro`, `Billy`, `auau`)
// let Gato = criaAnimal(`gato`,`mel`, `maumiau`, )


// console.log(Cachorro, Gato);



// Cachorro.ativar()
// Gato.ativar()


// console.log(`--------------------------------------------------------------------------------------------------------`);

// function contador(encrementor) {
//     let contador = 0;

//     return {
//         incre(){
//             contador += encrementor
//         },

//         ver(){
//             console.log(contador);
            
//         }
//     }
// }


// let encrementaDe2 = contador(2)

// encrementaDe2.incre()
// encrementaDe2.incre()
// encrementaDe2.incre()
// encrementaDe2.incre()
// encrementaDe2.incre()
// encrementaDe2.ver()


// let encrementaDe3 = contador(3)
// encrementaDe3.incre()
// encrementaDe3.incre()
// encrementaDe3.incre()
// encrementaDe3.incre()
// encrementaDe3.ver()


// Getters e Setters:

let obj1 = {
    get fala(){
        return `oiiiii`
    }

}


console.log(obj1.fala);
obj1.fala = `olá`
console.log(obj1.fala);


function criarProduto(nome, precoIncial) {
    let preco = precoIncial;

    return {
        nome: nome,

        get preco(){
            return preco
        },

        set preco(newPreco){
            let sayError = () => console.log(`O preço deve ser positivo`);
            
            preco = newPreco> 0 ? newPreco :`o preço deve ser postivo`;
        }

    }
}

let celular = criarProduto(`sansumg`,500)

console.log(celular);

console.log(celular.preco);
celular.preco = -10

console.log(celular.preco);

