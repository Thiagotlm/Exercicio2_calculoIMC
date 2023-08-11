/*O IMC - Índice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta.

Fórmula di IMC:
IMC = peso / (altura * altura)

Elabore um algorítimo que dado o peso e a altura de um adulto, mostre sua condição de acordo com a tabela abaixo:

IMC em adultos Condição:
- Abaixo de 18.5 Abaixo do peso;
- Entre 18.5 e 25 Peso normal;
- Entre 25 e 30 Acima do peso;
- Entre 30 e 40 Obeso;
- Acima de 40 Obesidade Grave;*/

const altura = 1.68;
const peso = 80;
const calcImc = peso / Math.pow(altura, 2);
console.log(calcImc);

if (calcImc < 18.5) {
    console.log('Abaixo do peso');
} else if (calcImc >= 18.5 && calcImc < 25) {
    console.log('Peso normal');
} else if (calcImc >= 25 && calcImc < 30) {
    console.log('Acima do peso');
} else if (calcImc >= 30 && calcImc < 40) {
    console.log('Obeso');
} else {
    console.log('Obesidade Grave');
}