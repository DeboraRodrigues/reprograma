console.log("MEU PRIMEIRO JAVASCRIPT")
console.log("oi")

// Exercicio 1

var price1 = 5;
var price2 = 6;
console.log(price1 + price2);
console.log(price1 / price2);
console.log(price1 - price2);

// Exercicio 2

if (3 > 5) {
    console.log(true);
} else {
    console.log(false);
};
if (5 > 0) {
    console.log(true);
} else {
    console.log(false);
};
if (5 > 5) {
    console.log(true);
} else {
    console.log(false);
};
if (0 >= 5) {
    console.log(true);
} else {
    console.log(false);
};
if (1 > -10) {
    console.log(true);
} else {
    console.log(false);
};

// Exercicio 3

if ((10 + 40) >= (50 - 10)) {
    console.log(true);
} else {
    console.log(false);
};

if (1 > -10) {
    console.log(true);
} else {
    console.log(false);
};

if ((3 > 5) && (5 > 6)) {
    console.log(true);
} else {
    console.log(false);
};

if ((5 < 0) && (0 == 0)) {
    console.log(true);
} else {
    console.log(false);
};

if ((5 != 4) || (4 > 4)) {
    console.log(true);
} else {
    console.log(false);
};

// Exercicio 4

var meuNome = "Debora";
var nomeDaColega = "Angelica";
if (meuNome > nomeDaColega) {
    console.log("É maior");
} else {
    console.log("É menor");
};

// Exercicio 5

var number1 = 85;
var number2 = 32;
if (number1 > number2) {
    console.log(number1);
} else if (number1 < number2) {
    console.log(number2);
} else {
    console.log("Tem o mesmo valor");
};

// Exercicio 6

var number1 = prompt("Digite o primeiro numero");
var number2 = prompt("Digite o segundo numero");
alert(number1 * number2);

// Exercicio 7

var idade = prompt("Qual sua idade?");
if (idade > 18) {
    alert("Parabéns, você já pode dirigir");
} else {
    alert("Infelizmente, você não pode dirigir");
};

//  Exercicio 8

var nome = prompt("Qual o seu nome?");
var sexo = prompt("Qual o seu sexo?");
if (sexo == "feminino") {
    alert("Seja bem vinda " + nome);
} else if (sexo == "masculino") {
    alert("Seja bem vindo " + nome);
} else if (sexo == "") {
    alert("Olá " + nome);
};

// Exercicio 9

var time = prompt("digite a hora:");
if (time >= 0 && time <= 19) {
    alert("Você digitou " + time + "hs é dia");
} else if (time >= 20 && time <= 23) {
    alert("Você digitou " + time + "hs é noite");
} else {
    alert("Horário incorreto");
};



