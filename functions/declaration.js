// dentro de objetos:

const cachorro = {
    nome: `billy`,
    idade: 5,
    latir(){
        console.log(`${this.nome}: au au`);
    }
}

console.log(cachorro);
cachorro.latir()

function algo(){
    for (let arg of arguments )[
        console.log(arguments[arg])
    ]
    
}

algo(2,3,5,6,7,8,5,4,3,3)