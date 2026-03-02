let pessoa = {
    nome: `Fagner`,
    idade: 20
}


function Cpesso({nome, idade}) {
    console.log(nome, idade);
}

Cpesso(pessoa)


function comidas([com1, com2, beb1, bebi2]) {console.log(com1, com2, beb1, bebi2)};


let comida1 = [`açai`, `mortadela`, `suco`, `coca`]


comidas(comida1)