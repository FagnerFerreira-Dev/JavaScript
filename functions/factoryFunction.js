let criaPessoa = (nome, sobrenome) => ({nome,sobrenome})



let p1 = criaPessoa(`Fagner`, `Ferreira`)
console.log(p1);

let criaAnimal = (especie, nome, faz) => ({nome, especie, ativar(){console.log(`esse animal faz ${faz}`)}})



let Cachorro = criaAnimal(`Cachorro`, `Billy`, `auau`)
let Gato = criaAnimal(`gato`,`mel`, `maumiau`, )


console.log(Cachorro, Gato);



Cachorro.ativar()
Gato.ativar()


console.log(`--------------------------------------------------------------------------------------------------------`);

function contador(encrementor) {
    let contador = 0;

    return {
        incre(){
            contador += encrementor
        },

        ver(){
            console.log(contador);
            
        }
    }
}


let encrementaDe2 = contador(2)

encrementaDe2.incre()
encrementaDe2.incre()
encrementaDe2.incre()
encrementaDe2.incre()
encrementaDe2.incre()
encrementaDe2.ver()


let encrementaDe3 = contador(3)
encrementaDe3.incre()
encrementaDe3.incre()
encrementaDe3.incre()
encrementaDe3.incre()
encrementaDe3.ver()