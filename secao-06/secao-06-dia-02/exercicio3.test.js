const { encode, decode } = require('./exercicio3');
// const encode = require('./exercicio3');

describe('Exercicio3',() =>{
    it('Teste se encode e decode são funções',() =>{
        expect(typeof encode).toBe('function');
        expect(typeof decode).toBe('function');
    });
    it('Para a função encode, teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente',()=>{
        expect(encode('a,e,i,o,u')).toEqual('1,2,3,4,5');
    });
    it('Para a função decode, teste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u, respectivamente',()=>{
        expect(decode('1,2,3,4,5')).toEqual('a,e,i,o,u');
    });
    it('Teste se as demais letras/números não são convertidos para cada caso', () => {
        expect(decode('6,7,8,9,10')).not.toEqual('a,e,i,o,u');
    });
    it('Teste se a string que é retornada pelas funções tem o mesmo número de caracteres que a string passada como parâmetro.',() =>{
        expect(encode('aeiou')).toHaveLength(5);
        expect(decode('12345')).toHaveLength(5);
    });
    });
    
