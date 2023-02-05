// function encode (string){
//     return string.replace(/a/g,"1")
//                  .replace(/e/g,"2")
//                  .replace(/i/g,"3") 
//                  .replace(/o/g,"4") 
//                  .replace(/u/g,"5")  
// }

// console.log(decode('hi there!'));

// function decode (string2){
//    return string2.replace(/1/g,"a")
//                  .replace(/2/g,"e")
//                  .replace(/3/g,"i") 
//                  .replace(/4/g,"o") 
//                  .replace(/5/g,"u")  
// }

// console.log(decode('h3 th2r2!'));

let frase = 'hi there!';
let fraseCodificada = "h3 th2r2!";

function encode(fraseASerAlterada){
               let fraseCodificada =
               fraseASerAlterada.replace(/a/g,"1")
                                .replace(/e/g,"2")
                                .replace(/i/g,"3")
                                .replace(/o/g,"4")
                                .replace(/u/g,"5");
                return fraseCodificada;
    }
function decode(FraseASerAlterada2){
    let fraseDescodificada = 
        FraseASerAlterada2.replace(/1/g,"a")
                            .replace(/2/g,"e")                                            
                            .replace(/3/g,"i")
                            .replace(/4/g,"o")
                            .replace(/5/g,"u")
    return fraseDescodificada;

}

console.log(encode(frase));

console.log(decode(fraseCodificada));