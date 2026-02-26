// for classico
console.log(`FOR CLASSSICO
    `);


for (let i =0; i<=10; i++){
    console.log(i);
}
console.log(`---------------------------------------------`);

// for in
console.log(`FOR IN
    `);

const list = [`a`, `b`, `c`, `d`, `e`, `f`, `g`]
for (i in list){
    console.log(i);
}

console.log(`
FOR IN OBJETOS
    `);

let obj1 = {
    cor: `Vermelha`,
    tamanho: `100px`,
    idade: `100 anos`
};

for (let i in obj1){
    console.log(`${i}: ${obj1[i]}`);
    
    
}

console.log(`-------------------------------------`);

// for of
console.log(`FOR OF
    `);

for (let value of list){
    // console.log(`${indexOf(value)}: value`);
    console.log(value);
    
    
}

console.log(`-----------------------------------------------------------------------------------------------------`);
// switch case

console.log(`
SWITCH CASE    
`);

let v = true

switch(v){
    case false:console.log(`white`); break; case true: console.log(`black`); break;
}


console.log(`-----------------------------------------------------------------------------------------------------`);

// Operação ternária
console.log(`Operação ternária
    `);

let valor = 11;
let soma = valor > 10 ? `maior que 10` : `menor que 10`;

console.log(soma);



function TestIdade(idade) {  return idade >= 18 ? `adulto` : `menor`}


console.log( TestIdade(18));
console.log(`-----------------------------------------------------------------------------------------------------`);



// While e Do while
console.log(`WHILE E DOWHILE
    `);


let cont = 0;
while (cont< 10){
    ++cont
    console.log(cont);
}

console.log(`DOWHILE`);

do{
    console.log(cont);
    --cont
    
} while(cont > 0);

console.log(`-----------------------------------------------------------------------------------------------------`);

 
// destruturing assignment 
console.log((`destruturing assignment
    `).toUpperCase());


let list1 = [`maça`, `banana`, `pera`, `melancia`]

let obj2 = {
    vida: 5,
    barrinha: `5%`,
    fase: 2
}

let [fruta1, fruta2, fruta3, fruta4] = list1;
console.log(fruta1,fruta2, fruta3, fruta4);

let {vida:life, barrinha: hp, fase:modo} = obj2

console.log(life, hp, modo);



