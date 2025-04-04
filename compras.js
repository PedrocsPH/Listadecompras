let lista = document.querySelector('ul')
let produto = document.getElementById('produto')
let btn = document.getElementById('btn')
let btnReset = document.getElementById('btnreset')

btn.addEventListener('click', function(){

    let item ='<li>'+produto.value+'</li>';
    lista.innerHTML = lista.innerHTML + item;
})

btnReset.addEventListener('click', function(){

    lista.innerHTML = '';
})