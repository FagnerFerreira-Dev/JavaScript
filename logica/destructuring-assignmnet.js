let a = `A`;
let b = `B`;
let c = `C`;

console.log(a,b,c);

[a,b,c] = [b,c,a]


console.log(a,b,c);


let n1 = 0;
let n2 = 0;
let n3 = 0;

const numeros = [10,20,30];

console.log(numeros);

[n1,n2,n3] = numeros;

console.log(n1, n2, n3);



const vNums = [10,20,30,40,50,10,20,30,40,50]


let =[ nu1,nu2,nu3,nu4,nu5, ...resto] = vNums

console.log(nu1,nu2,nu3,nu4,nu5,resto);
