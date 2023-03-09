const pessoas = [
    { nome: 'Ana', cargo: 'Analista' },
    { nome: 'João', cargo: 'Gerência' },
    { nome: 'Aline', cargo: 'Analista' },
    { nome: 'Joana', cargo: 'Gerência' },
];

const verificaCargo = pessoas.some((cargo) => {
    if (cargo.cargo === 'Gerência') {
        ;
        return true;
    } else {
        return false;
    }
});
console.log(verificaCargo);