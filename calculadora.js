//Entrada
function calcularIMC() {
    const peso = Number(document.getElementById("peso").value);
    const altura = Number(document.getElementById("altura").value);
    const resultado = document.getElementById("resultado");

//processamento

    if (peso === 0 || altura === 0) {
        resultado.textContent = "Preencha peso e altura corretamente.";
        return;
    }
 //saida

    const valorIMC = document.getElementById("valor-imc")
    
    const imc = peso / (altura * altura);

    valorIMC.textContent = `Seu IMC é: ${imc}`;

    if (imc < 18.5) {
        resultado.textContent = "Abaixo do peso";
    } else if (imc >= 18.5 && imc <= 24.9) {
        resultado.textContent = "Dentro do peso";
    } else {
        resultado.textContent = "Acima do peso";
    }
}
