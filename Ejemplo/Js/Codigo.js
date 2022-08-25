const numero1 = document.getElementById('numero1');
const numero2 = document.getElementById('numero2');
const calcular = document.getElementById('Calcular');
const calculo = document.getElementById('Calculo');

calcular.addEventListener("click", calcularNumeros);

function calcularNumeros(){
   let resultado = parseInt(numero1.value) + parseInt(numero2.value)
    calculo.innerHTML = resultado
}