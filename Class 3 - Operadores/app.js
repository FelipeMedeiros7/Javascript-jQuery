// ----------------- Operadores ---------------
//Adição, acho que é aquele negócio que soma as coisa hahaha o famoso +

var varAdicao = 25 + 25;
console.log(varAdicao);

//Subtração, famoso sinal de menos

var varSubtracao = 8000 - 6000;
console.log(varSubtracao);

//Multiplicação, o negocio que faz as coisa multiplicar, representado pelo operador "*"

var varMultiplicacao = 850 * 5;
console.log(varMultiplicacao);

//Divisão, divide as coisa, representado pelo operador "/"

var varDivisao = 5000 / 5;
console.log(varDivisao);

//Expressãoes simples, a ordem importa!!!

var varExpressao = 50 + 10 * 2 - 80 / 4;
console.log(varExpressao);

//Atalhos para operações, caso você queira manter a mesma variável

//Atalho soma, representado pela propria variavel no caso x, presseguido pelo "+=" que representa o mesmo que "x = x + 10"
    
    var x = 30;
    x += 10;
    console.log(x);

//Atalho diminui

    var y = 20;
    y -= 5;
    console.log(y);

//Atalho multiplica
    
    var b = 5;
    b *= 5;
    console.log(b);
//Atalho divide
    
    var c = 5000;
    c /= 2;
    console.log(c);

//Incremento e Decremento

//Incremento representado pelo operador ++, quer dizer a mesma coisa que FelipeMedeiros = FelipeMedeiros + 1;
var FelipeMedeiros = 20;
FelipeMedeiros++;
console.log(FelipeMedeiros);

//Decremento representado pelo operador --, quer dizer a mesma coisa que FelipeMedeiros = FelipeMedeiros - 1;
var FelipeLacerda = 20;
FelipeLacerda--;
console.log(FelipeLacerda);

//Operadores de Comparação
//Igual ou Diferente || ==, !=, === ou !===
var comparacao1 = 50 == '50'; //Retorna true por que o js transforma-o em numero
var comparacao2 = 50 === '50'; //Retorna false por que o operador "===" nao converte o '50' em numero
var comparacao3 = 50 != '50'; //Retorna false por que o operador != converte o '50' em string
var comparacao4 = 50 !=== '50'; //Retorna true por que o operador !=== nao converte o '50' em string

//Maior ou Menor || >, <, >= , <=
var comparacao5 = 25 > 25; //Retorna false
var comparacao6 = 25 >= 25 // Retorna true
var comparacao7 = 25 < 25 //Retorna false
var comparacao8 = 25 <= 25 // Retorna true




