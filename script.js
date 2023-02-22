var peso;
var altura;
var IMC;
var resultado;


function calcular(event){
    event.preventDefault();
    peso = document.getElementById('peso').value;
    altura = document.getElementById('altura').value;
    IMC = peso / (altura * altura);
    resultado = document.getElementById('resultado');
    
    if(IMC < 17){
        resultado.innerHTML = '<br/> Seu Resultado foi: ' + IMC.toFixed(2)  + '<br/> Cuidado você esta muito abaixo do peso.'
    }else if(IMC >= 17 && IMC < 18.49){
        resultado.innerHTML = '<br/> Seu Resultado foi: ' + IMC.toFixed(2)  + '<br/> Você esta abaixo do peso.'
    }else if(IMC >= 18.5 && IMC < 24.99){
        resultado.innerHTML = '<br/> Seu Resultado foi: ' + IMC.toFixed(2)  + '<br/> Você esta no peso ideal.'
    }else if(IMC > 25 && IMC <= 29.9){
        resultado.innerHTML = '<br/> Seu Resultado foi: ' + IMC.toFixed(2)  + '<br/> Você esta acima do peso.'
    }else if(IMC >= 30){;
        resultado.innerHTML = '<br/> Seu Resultado foi: ' + IMC.toFixed(2)  + '<br/> Cuidado você esta na Obesidade.'

    }

    document.getElementById('peso').value = '';
    document.getElementById('altura').value = '';


}