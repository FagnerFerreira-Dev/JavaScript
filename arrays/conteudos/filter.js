const nums = [1,2,3,,5,6,7,8,9,,10,20,30];
const pessoas = [
    {nome:`Fagner`, idade:21},
    {nome:`Vagner`, idade:30},
    {nome:`Abner`, idade:12},
    {nome:`Asafe`, idade:9}
]

const p1 = pessoas.filter(v => v.idade>17);

console.log(p1);


const m5 = nums.filter(valor => valor>5)

console.log(m5);
