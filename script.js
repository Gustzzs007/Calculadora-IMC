function calcular(event) {
    event.preventDefault(); // Evita o envio do formulário e recarregamento da página

    // Obtém os valores de peso e altura dos campos de entrada
    var peso = parseFloat(document.getElementById('peso').value);
    var altura = parseFloat(document.getElementById('altura').value);

    // Calcula o IMC
    var imc = peso / (altura * altura);

    // Obtém o elemento para exibir o resultado
    var resultado = document.getElementById('resultado');

    // Classifica e exibe o resultado com base no IMC calculado
    if (imc < 16) {
        resultado.innerHTML = `<br> Seu resultado foi: ${imc.toFixed(3)}<br> Cuidado, você está com baixo peso muito grave!`;
    } else if (imc >= 16 && imc < 17) {
        resultado.innerHTML = `<br> Seu resultado foi: ${imc.toFixed(3)}<br> Cuidado, você está com baixo peso grave!`;
    } else if (imc >= 17 && imc < 18.5) {
        resultado.innerHTML = `<br> Seu resultado foi: ${imc.toFixed(3)}<br> Cuidado, você está com baixo peso!`;
    } else if (imc >= 18.5 && imc < 25) {
        resultado.innerHTML = `<br> Seu resultado foi: ${imc.toFixed(3)}<br> Você está com peso normal!`;
    } else if (imc >= 25 && imc < 30) {
        resultado.innerHTML = `<br> Seu resultado foi: ${imc.toFixed(3)}<br> Cuidado, você está com sobrepeso!`;
    } else if (imc >= 30 && imc < 35) {
        resultado.innerHTML = `<br> Seu resultado foi: ${imc.toFixed(3)}<br> Cuidado, você está com obesidade grau I!`;
    } else if (imc >= 35 && imc < 40) {
        resultado.innerHTML = `<br> Seu resultado foi: ${imc.toFixed(3)}<br> Cuidado, você está com obesidade grau II!`;
    } else if (imc >= 40) {
        resultado.innerHTML = `<br> Seu resultado foi: ${imc.toFixed(3)}<br> Cuidado, você está com obesidade grau III (mórbida)!`;
    }
}