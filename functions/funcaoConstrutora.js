function Pessoa(nome, Sobrenome) {
    this.nome = nome;
    this.sobrenome = Sobrenome;

    this.falaOi = () => {
        console.log(`${this.nome} ${this.sobrenome} fala Oi` );
        
    }
}


let p1 = new Pessoa(`Fagner`, `Ferrera`);


console.log(p1);
p1.falaOi()