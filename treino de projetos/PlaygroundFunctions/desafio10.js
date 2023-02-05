
function techList(technologies, name) {
  
    if (technologies.length === 0) {
      let retornoVazio = [];
      return retornoVazio;
    }
    let resultado = [];
    technologies.sort();
    for (let arrayTechnologies of technologies){
      let objeto = {
        tech: arrayTechnologies, 
        name: `${name}`,
      };
      resultado.push(objeto);
    }
    return resultado;
  
  }