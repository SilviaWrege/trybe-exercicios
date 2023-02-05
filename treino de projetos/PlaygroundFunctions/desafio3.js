let arrayNomes1 = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];
let arrayNomes2 = ['foguete', 'não', 'tem', 'ré'];
let arrayNomes3 = ['captain', 'my', 'captain'];

function concatName(nomes){
let newArrayNomes = `${nomes[nomes.length - 1]}, ${nomes[0]}`;
return newArrayNomes;
}
console.log(concatName(arrayNomes1));
console.log(concatName(arrayNomes2));
console.log(concatName(arrayNomes3));



  
