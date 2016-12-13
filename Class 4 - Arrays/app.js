//---------------------------- Arrays ----------------------------  

//É uma forma de armazenar dados, mas não somente um tipo de dado, mas vários tipos de dados, seja ele boolean, string, enfim...
//Exemplos:

var videoGames = ['Wii U','PS4','XBox','PolyStation'];

console.log(videoGames[1]);

//Verificando quantidade de itens de um array com .length

console.log(videoGames.length);

//Função simples para buscar o último item do Array

var totalItens = videoGames.length;

console.log(videoGames[totalItens-1]);

//Adicionando um novo item no array com a função nativa push

var adicionar = videoGames.push('MegaDriver');

console.log(videoGames);

//Buscando com a função nativa indexOf

var buscarItem = videoGames.indexOf('PS4');

console.log(buscarItem);

//Removendo Item do Array com a função splice

var removerItem = videoGames.splice(0, 2);
console.log(removerItem);