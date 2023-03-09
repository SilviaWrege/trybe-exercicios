const numbers = [19, 21, 30, 3, 45, 22, 15];

const condiçãoCorreta = numbers.find((elemento) => elemento % 3 === 0 && elemento % 5 === 0);  
console.log(condiçãoCorreta);