// verificar se o nome da pessoa está ou não na lista.
// O nome das pessoas convidadas está salvo em um array chamado names;
// A função hasName é responsável por verificar se o nome da pessoa está ou não na lista. Essa função recebe dois parâmetros: arr, que é o array com o nome das pessoas convidadas, e name, que é o nome a ser verificado na lista de convidados (array names).


const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  return arr.some((pessoa)=> pessoa === name);
};

console.log(hasName(names, 'Ana'));
console.log(hasName(names, 'Pedro'));