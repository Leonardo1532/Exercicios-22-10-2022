/* 1. Você deve criar um programa que solicite ao seu usuário dois
números A e B.
2. Crie uma função que receba os dois valores fornecidos pelo
usuário e faça uma soma com eles, e retorne o resultado;
3. Crie uma função que receba os dois valores fornecidos pelo
usuário e faça uma subtração com eles, e retorne o resultado;
4. Crie uma função que receba os dois valores fornecidos pelo
usuário e faça uma multiplicação com eles, e retorne o
resultado;
5. Crie uma função que receba os dois valores fornecidos pelo
usuário e faça uma divisão com eles, e retorne o resultado;
6. Faça com que seu usuário escolha qual função ele deseja fazer
com os números que ele inseriu, e depois de realizar essa
operação pergunte se ele deseja fazer outra ou encerrar a
aplicação.
7. Crie um array para salvar o resultado das operações e crie
também uma função para exibir o histórico dos resultados.
ATENÇÃO!! Faça um commit para cada item do exercício.
*/

var numA = parseInt(prompt("Insira o primeiro número"))
var numB = parseInt(prompt("Insira o segundo número"))

Soma(numA, numB)
function Soma(num1, num2){
    console.log(num1 + num2)
    return(Soma)
}

Subtracao(numA, numB)
function Subtracao(num1, num2){
    console.log(num1 - num2)
    return(Subtracao)
}

Multiplicacao(numA, numB)
function Multiplicacao(num1, num2){
    console.log(num1 * num2)
    return(Multiplicacao)
}

Divisao(numA, numB)
function Divisao(num1, num2){
    console.log(num1 / num2)
    return(Divisao)
}