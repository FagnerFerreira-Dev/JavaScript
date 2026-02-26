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


