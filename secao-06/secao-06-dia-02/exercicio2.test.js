const myFizzBuzz = require('./exercicio2');

describe('requisito2',() => {
it('Execute a função myFizzBuzz(num), sendo num um número divisível por 3 e 5, e verifique se o retorno é o esperado',() =>{
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
    });
it('Execute a função myFizzBuzz(num), sendo num um número divisível por 3, e verifique se o retorno é o esperado.',() =>{
    expect(myFizzBuzz(3)).toBe('fizz');   
    });
it('Execute a função myFizzBuzz(num), sendo num um número divisível por 5, e verifique se o retorno é o esperado.',() =>{
    expect(myFizzBuzz(25)).toBe('buzz');
});
it('Execute a função myFizzBuzz(num), sendo num um número que não é divisível por 3 ou 5, e verifique se o retorno é o esperado', () =>{
    expect(myFizzBuzz(2)).toBe(2);
});   
it('Execute a função myFizzBuzz(num), sendo num um parâmetro que não é um número, e verifique se o retorno é o esperado', () =>{
    expect(myFizzBuzz('1')).toBe(false);
});
});
