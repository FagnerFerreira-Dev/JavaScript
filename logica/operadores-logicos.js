let num1 = 5;
let num2 = 4;
let num3 = `4`;
let num4 = null;
let num5 = 2;
let num6 = 0;

// console.log(num1 && num3);
// console.log(num3 && num4);
// console.log(num4 && num6);

if (num3 && num2) {
    console.log(true);
} else{
    console.log(`false`);
    
}



if (num3 && num4) {
    console.log(true);
} else{
    console.log(`false`);
    
}


if (num3 && num6) {
    console.log(true);
} else{
    console.log(`false`);
    
}

if (num3 || num6) {
    console.log(true);
} else{
    console.log(`false`);
    
}

if (num4 || num6) {
    console.log(true);
} else{
    console.log(`false`);
    
}


console.log(!num6);
console.log(!num3);
console.log(!num4);