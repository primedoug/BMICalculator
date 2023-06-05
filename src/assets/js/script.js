function CalculateIMC() {
    let peso = document.getElementsByName('peso')[0].value;
    let altura = document.getElementsByName('altura')[0].value;
    return peso / (altura * altura);
}

export { CalculateIMC };