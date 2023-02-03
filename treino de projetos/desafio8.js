meuArray = [2, 15, 7, 9, 45];


function fizzBuzz (parametro){
  let novoArray = [];
    for(index = 0; index <= parametro.length; index += 1){
        if(meuArray[index] % 3 == 0){
        novoArray.push("fizz");
    } else if (meuArray[index] % 5 == 0){
        novoArray.push("buzz");
    } else if ( meuArray[index] % 3 == 0 && meuArray[index] % 5 == 0){
       novoArray.push("fizzBuzz");
    } else { 
       novoArray.push("bug!");
    }
          
    } 
    return novoArray;
}

console.log(fizzBuzz(meuArray));