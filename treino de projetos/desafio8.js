meuArray = [2, 15, 7, 9, 45];


function fizzBuzz (parametro){
  let novoArray = [];
    for(index = 0; index < parametro.length; index += 1){
        if ( parametro[index] % 3 == 0 && parametro[index] % 5 == 0){
        novoArray.push("fizzBuzz");
    } else if (parametro[index] % 5 == 0){
        novoArray.push("buzz");
    } else if (parametro[index] % 3 == 0){
       novoArray.push("fizz");
    } else { 
       novoArray.push("bug!");
    }
          
    } 
    return novoArray;
}

console.log(fizzBuzz(meuArray));