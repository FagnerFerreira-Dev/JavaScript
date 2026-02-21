const btn = document.querySelector(`input`);
const body =document.querySelector(`body`);
const h1 = document.querySelector(`h1`)


btn.addEventListener(`click`, (e)=>{
body.innerHTML+=`Cricado`;
console.log(e);

})

function troca() {
    h1.innerHTML = `trocou o textos`
}
h1.addEventListener(`click`, troca)