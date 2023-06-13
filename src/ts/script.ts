function CalculateIMC() {
    const pesoInput = document.getElementsByName('peso')[0] as HTMLInputElement;
    const alturaInput = document.getElementsByName('altura')[0] as HTMLInputElement;

    const peso = parseFloat(pesoInput.value);
    const altura = parseFloat(alturaInput.value);

    const imc = peso / (altura * altura);
    setMessagesStyles(imc);
}
  
function getIMCMessage(imc: number): string {
    if (imc < 18.5) return "<p class='calculator__message-text'>Você está abaixo do peso.</p>";
    else if (imc < 25) return "<p class='calculator__message-text'>Você está no peso ideal.</p>";
    else if (imc < 30) return "<p class='calculator__message-text'>Você está com sobrepeso.</p>";
    else if (imc < 35) return "<p class='calculator__message-text'>Você está com obesidade grau 1.</p>";
    else if (imc < 40) return "<p class='calculator__message-text'>Você está com obesidade grau 2.</p>";
    else return "<p class='calculator__message-text'>Você está com obesidade grau 3.</p>";
}

function setMessagesStyles(imc: number) {
    const resultado = document.getElementsByClassName('calculator__result')[0] as HTMLElement;
    resultado.innerHTML = `<p class='calculator__result-text'>Seu Índice de massa corporal é: </p>`;
    resultado.insertAdjacentHTML('beforeend', imc.toFixed(2));
    resultado.insertAdjacentHTML('beforeend', getIMCMessage(imc));
    resultado.style.padding = '1rem';
    resultado.style.textAlign = 'center';

    const resultadoTexto = document.getElementsByClassName('calculator__result-text')[0] as HTMLElement;    
    resultadoTexto.style.marginBottom = '.8rem';
    resultadoTexto.style.fontSize = '16px';

    const mensagemTexto = document.getElementsByClassName('calculator__message-text')[0] as HTMLElement;
    mensagemTexto.style.marginTop = '.8rem';
    mensagemTexto.style.fontSize = '16px';
    mensagemTexto.style.fontWeight = 'bold';

    if (screen.width < 768) {
        const secaoBlocos = document.getElementsByClassName('section__block')[0] as HTMLElement;
        secaoBlocos.style.paddingBottom = '20rem';
    }
}
  
export { CalculateIMC };