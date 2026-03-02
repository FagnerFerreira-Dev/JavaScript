function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome
    }
}


let p1 = criaPessoa(`Fagner`, `Ferreira`)
console.log(p1);

function criaAnimal(especie, nome, faz) {
    return { nome, especie, ativar(){console.log(`esse animal faz ${faz}`); }}
}



let Cachorro = criaAnimal(`Cachorro`, `Billy`, `auau`)
let Gato = criaAnimal(`gato`,`mel`, `maumiau`, )


console.log(Cachorro, Gato);



Cachorro.ativar()
Gato.ativar()