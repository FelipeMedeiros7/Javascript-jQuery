// -----------------Tipos de Variáveis---------------

var nome = "Felipe Medeiros",
    idade = 20,
    faculdade = true;

// "typeof" é usado quando queremos saber o tipo de uma variável
console.log(typeof idade);



// --------------------Strings--------------------
//Strings podem ser somados ou concatenadas! :)
    
var sobrenome = "de Lacerda";
var nomeCompleto = nome + " " + sobrenome;

console.log(nomeCompleto);

var frase = nome + " tem " + idade +" anos de idade.";
console.log(frase);


//-------- Aspas simples '' vs Aspas duplas "" --------
//Aspas duplas não podem estar dentro de aspas duplas, o mesmo serve para as simples

var empresa1 = "Google";
var empresa2 = "Apple";
var frase2 = empresa1 + " é mais 'valiosa' que " + empresa2;
console.log(frase2);

//A barra inversa pode ser usada para ignorar funções de certos caracteres

var refrigerante1 = "Coca-Cola";
var refrigerante2 = "Guaraná";
var frase3 = refrigerante1 + " é \"melhor\" que o " +  refrigerante2;
console.log(frase3);

//------------------Números-----------------
//Números inteiros

var gols = 1000;
var anos = 16;
var golsporano = gols / anos;
console.log(golsporano);

//Decimais
//Nos decimais utiliza-se o ponto "." para simbolização, ou seja, se botar virgula "," vai foder a porra do rolê inteiro

var pi = 3.14;
console.log(pi);

//NaN
//Que porra é NaN? Not a Number, quer dizer que você tentou somar uma string com um numero e no final se tentar fazer operações matematicas com o mesmo receberá NAN no console hehehehe

var peso = 75;
var kg = "kg";
var pesoKG = peso + kg;
var peso2 = pesoKG / 2;

console.log(peso2);

//Boolean
//O famoso true ou falseeeeeeeeeeeeeeee

var faculdade = true;

if(faculdade){
    console.log("Carai mlk, ta podendo ein!")
}else{
    console.log("Porra, tá foda :///")
}