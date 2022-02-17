let inputPeso = document.querySelector('#peso');
let inputAltura = document.querySelector('#altura');
let resultadoIMC = document.querySelector("#resultadoIMC");
let botaoCalcular = document.querySelector('#btnCalcular');
let botaoLimpar = document.querySelector('#btnLimpar');

botaoCalcular.addEventListener('click', function() {
    let IMC = inputPeso.value / (inputAltura.value * inputAltura.value);
    if (inputPeso.value === "" || inputAltura.value === "") {
        resultadoIMC.style.color = 'red';
        resultadoIMC.innerHTML = 'Preencha todos os campos!';

        setTimeout(function() {
            resultadoIMC.innerHTML = '';
        }, 3000);
    } else if(IMC < 18.5) {
        resultadoIMC.innerHTML = `O resultado do seu IMC é ${IMC.toFixed(2)}, você está abaixo do peso.`;
    } else if(IMC >= 18.5 && IMC <= 24.9) {
        resultadoIMC.innerHTML = `O resultado do seu IMC é ${IMC.toFixed(2)}, você está no peso normal.`;
    } else if(IMC >= 25 && IMC <= 29.9) {
        resultadoIMC.innerHTML = `O resultado do seu IMC é ${IMC.toFixed(2)}, você está em sobrepeso.`;
    } else if(IMC >= 30 && IMC <= 34.9) {
        resultadoIMC.innerHTML = `O resultado do seu IMC é ${IMC.toFixed(2)}, você está na Obesidade Grau I`;
    } else if(IMC >= 35 && IMC <= 39.9) {
        resultadoIMC.innerHTML = `O resultado do seu IMC é ${IMC.toFixed(2)}, você está na Obesidade Grau II`;
    } else if(IMC >= 40) {
        resultadoIMC.innerHTML = `O resultado do seu IMC é ${IMC.toFixed(2)}, você está na Obesidade Grau III`;
    } 
});

botaoLimpar.addEventListener('click', function() {
    inputPeso.value = '';
    inputAltura.value = '';
    resultadoIMC.innerHTML = '';
});
