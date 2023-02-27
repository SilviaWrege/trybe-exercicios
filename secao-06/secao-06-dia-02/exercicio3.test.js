const mapString = require('./exercicio3');
const encode = require('./exercicio3');
const decode = require('./exercicio3');

describe('Exercicio3',() => {
it('Teste se encode e decode são funções',() =>{
    expect(typeof encode).toBe('function');
    expect(typeof decode).toBe('function');
});

});
it('Para a função encode, teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente',() =>{
    expect(encode('a,e,i,o,u')).toEqual('1,2,3,4,5');
})