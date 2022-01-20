let calcular = document.getElementById('calcular');

function imc(){
    let nome = document.getElementById('nome').value;
    let altura = document.getElementById('altura').value;
    let peso = document.getElementById('peso').value;
    let resultado = document.getElementById('resultado');

    if(nome !== ' ' && altura !== ' ' && peso !== ' '){

        let valorIMC = (peso / (altura * altura)).toFixed(1);

        if(valorIMC < 18.6){
            tipoIMC = 'abaixo do peso';
        }else if(valorIMC < 25){
            tipoIMC = 'peso ideal';
        }else if(valorIMC < 30){
            tipoIMC = 'um pouco acima do peso';
        }else if(valorIMC < 35){
            tipoIMC = 'obesidade grau 1';
        }else if(valorIMC < 40){
            tipoIMC = 'obesidade grau 2';
        }else{
            tipoIMC = 'obesidade grau 3';
        }
        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está no ${tipoIMC}`;
    }else{
        resultado.textContent = "Preencha todos os campos por favor!";
    }
}
calcular.addEventListener('click',imc);