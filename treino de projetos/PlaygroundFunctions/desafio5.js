
let array = [9, 1, 2, 3, 9, 5, 7];
function highestCount(array){
    let numeroMaior = Math.max(...array);
    let quantidadeVezesNumero = 0;
     
    for (index = 0; index < array.length; index += 1){
    if (numeroMaior === array[index]){
    quantidadeVezesNumero += 1;
    }
    }
    return quantidadeVezesNumero;
     }
         console.log(highestCount(array));









  
  