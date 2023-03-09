const names = ['João', 'Irene', 'Fernando', 'Maria'];

const nomeCincoLetras = names.find((elemento) =>{
return elemento.length === 5;
});
console.log(nomeCincoLetras);