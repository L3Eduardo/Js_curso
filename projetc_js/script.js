var resposta = confirm('Adição');

const a = 23;
const b = 32;

// não chamando a função somar
function somar(a,b){
    return a + b;
}

//document.querySelector('#calcular').addEventListener('click', function(){
    //let valorA = document.querySelector('#valorA').value;
    //let valorB = document.querySelector('#valorB').value;
    //if (valorA.length > 0 && valorB.length > 0) {
    //alert(parseInt(valorA)+parseInt(valorB));
    //}else{
    //    alert("Digite um valor!");
    //}});

//

//Chamandoa função somar
function somar(a,b){
    return parseInt  (a) + parseInt(b);
}

document.querySelector('#calcular').addEventListener('click', function(){
    let valorA = document.querySelector('#valorA').value;
    let valorB = document.querySelector('#valorB').value;
    if (valorA.length > '' && valorB.length > '') {
        alert (somar(valorA,valorB));
    }else{
        alert("Digite um valor!");
    }
});
//