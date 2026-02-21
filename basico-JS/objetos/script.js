const pessoa = {
    nome: `Fagner`,
    sobrenome: `Ferreira`,
    idade: `20`,
    darOi(){
        console.log(`oi meu nome é ${this.nome + ` ` + this.sobrenome} e tenho ${this.idade} anos`);
         
    }
}

console.log(pessoa);
console.log(pessoa.nome);

pessoa.darOi();

function criaPessoa(n,sN,id){
return {n, sN,id }
}

let p1 = criaPessoa(`Fagner`, `Ferreira`, 20)

console.log(p1);
