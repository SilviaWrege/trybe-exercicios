 let array = [9, 1, 2, 3, 9, 5, 7];

 function highestCount(array){
    let numeroMaior;
    let quantidadeVezesNumero = 0;
      numeroMaior = Math.max(...array);
     for (index = 0; index < array.length; index += 1){
         if (numeroMaior === array[index]){
            quantidadeVezesNumero += 1;
         }
     }
     return quantidadeVezesNumero;
 }







  
  