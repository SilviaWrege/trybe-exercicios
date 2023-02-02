const unicornio = true;
const papagaio = true;
const baleia = false;

const compareTrue = (parametroA, parametroB) => {
    if(parametroA === true && parametroB === true){
        return true;
} else {
        return false;
}
}
   
    
console.log(compareTrue(unicornio, papagaio)); 


// Desafio 2 - Crie a função splitSentence

const primeiraFrase = "Go Trybe";

function splitSentence(frase){
  const newFrase = frase.split(" ");
  return newFrase;
}

splitSentence(primeiraFrase);
