setTimeout((a)=> {
    console.log(`essa função demorara 3s pra executar`);
    
}, 3000)

const intervalId = setInterval(()=>{ console.log(`apareço a cada 1 segundos`);
}, 1000)

setTimeout(()=>{

clearInterval(intervalId)
},7000)
