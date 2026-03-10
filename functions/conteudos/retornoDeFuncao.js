function CriaMultiplicador(multiplicador) {
    return (numero) => {
        return numero * multiplicador;
    }
}

const duplica = CriaMultiplicador(2);

console.log(duplica(3));


let cMult = multipli => nume => multipli * nume;

let triplica = cMult(3)
console.log(triplica(3));
